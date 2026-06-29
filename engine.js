/* ============================================================
   NIGHT FREQUENCY — ENGINE (runtime, content-agnostic)
   ------------------------------------------------------------
   This file NEVER changes when you add guests. All authoring
   lives in guests/<key>.js as pure data.

   CONTENT-GRAPH CONTRACT (every guest data file must follow):

   window.NF_GUESTS["key"] = {
     name, handle, tag, freq, blurb, card,        // dossier
     traits:{grandiosity,paranoia,fragility,hostility}, // 0-100
     difficulty: "★★☆ — wants a fight",            // roster hint
     start: "nodeId",                              // entry node
     nodes: {
       nodeId: {
         seg:  "ACT LABEL",        // shown in transcript header
         act:  1,                  // optional, for the act counter
         lines: [ ["guest"|"sys"|"beat", who, text], ... ],
         choices: [
           {
             verb: "play"|"push"|"steer"|"dead"|"special",
             t:    "Play Along",         // button label
             said: "host line text",
             fx:   {hype:+n, heat:+n, rapport:+n},
             reply:["guest", who, text], // guest reaction
             note: "optional producer note (mechanic teach)",
             reveal: "optional dossier claim string",
             flag:  "optional thread flag set on pick",
             next:  "nodeId" | "END"     // deep divergent tree
           }, ...
         ]
       }, ...
     },
     // pluggable finale validator (performance scoring here).
     // Detective guests would swap correctness matching; hacker
     // guests would swap world-state. Engine just calls it.
     score(state){ return { ... } }   // optional; default used otherwise
   }

   A run walks start -> choice.next -> ... until a choice has
   next:"END" (or a node has no choices). Deep divergent tree:
   choices route to DIFFERENT nodes, so each playthrough is one
   coherent ~30-min path and replays reveal new territory.
============================================================ */
(function(){
"use strict";

const clamp = n => Math.max(0, Math.min(100, Math.round(n)));
const $ = id => document.getElementById(id);

const VERB_CLASS = { play:"play", push:"push", steer:"steer", dead:"dead", special:"special" };

const state = {
  key:null, guest:null, node:null,
  hype:50, heat:20, rapport:50, peakHype:50,
  reveals:[], flags:{}, path:[],
  paused:false, ended:false, awaiting:false,
  airSeconds:0, nodesSeen:0,
  dangerBusted:false, dangerHot:false, dangerWalk:false, dangerCold:false
};
let airTimer=null;
let feed;

/* ---------------- rendering ---------------- */
function addLine(cls, who, txt, instant){
  const d=document.createElement('div');
  d.className='line '+cls;
  d.innerHTML=`<div class="who"></div><div class="txt"></div>`;
  d.querySelector('.who').textContent = who||'';
  d.querySelector('.txt').textContent = txt;
  if(instant) d.style.animation='none';
  feed.appendChild(d); scrollFeed(); return d;
}
function scrollFeed(){ feed.scrollTop = feed.scrollHeight; }
function showTyping(who){
  const d=document.createElement('div');
  d.className='line guest'; d.id='typingRow';
  d.innerHTML=`<div class="who"></div><div class="typing"><i></i><i></i><i></i></div>`;
  d.querySelector('.who').textContent = who||state.guest.name;
  feed.appendChild(d); scrollFeed(); return d;
}
function clearTyping(){ const t=$('typingRow'); if(t) t.remove(); }

/* ---------------- metrics ---------------- */
function setMeter(m){
  const map={hype:['vHype','fHype'],heat:['vHeat','fHeat'],rapport:['vRap','fRap']};
  const [v,f]=map[m]; $(v).textContent=state[m]; $(f).style.width=state[m]+'%';
}
function applyEffects(fx){
  if(!fx) return;
  const dl={hype:'dHype',heat:'dHeat',rapport:'dRap'};
  ['hype','heat','rapport'].forEach(k=>{
    if(fx[k]===undefined) return;
    const before=state[k];
    state[k]=clamp(state[k]+fx[k]);
    if(k==='hype') state.peakHype=Math.max(state.peakHype,state.hype);
    const rd=state[k]-before;
    setMeter(k);
    if(rd!==0){
      const el=$(dl[k]);
      el.textContent=(rd>0?'+':'')+rd;
      el.style.color = rd>0 ? (k==='heat'?'var(--heat)':'var(--green)')
                            : (k==='heat'?'var(--green)':'var(--red)');
      el.style.opacity='1'; setTimeout(()=>el.style.opacity='0',1100);
    }
  });
  // live danger feel (no death): heat meter pulses red in the warning band
  const hm=$('heatMeter');
  if(hm) hm.classList.toggle('hot', state.heat>=82);
}

/* ---------------- dossier ---------------- */
function renderDossier(){
  const g=state.guest;
  $('gName').textContent=g.name; $('gHandle').textContent=g.handle;
  $('gTag').textContent=g.tag; $('gBio').textContent=g.card;
  $('freq').textContent=g.freq;
  const order=[['grandiosity','Grandiosity'],['paranoia','Paranoia'],['fragility','Fragility'],['hostility','Hostility']];
  $('traits').innerHTML=order.map(([k,l])=>`
    <div class="trait"><div class="tl"><span>${l}</span><span>${g.traits[k]}</span></div>
    <div class="tb"><div class="tf" style="width:${g.traits[k]}%"></div></div></div>`).join('');
  renderReveals();
}
function renderReveals(){
  $('revCount').textContent=state.reveals.length;
  $('revList').innerHTML = state.reveals.length
    ? state.reveals.map(r=>`<div class="reveal">${r}</div>`).join('')
    : '<div class="empty">Get them talking. Big claims log here.</div>';
}
function logReveal(t){ if(t && !state.reveals.includes(t)){ state.reveals.push(t); renderReveals(); } }

/* ---------------- broadcast lifecycle ---------------- */
// Longest real path (in nodes) from start to any END, computed from data.
// Branches explored; cycles guarded. This is the honest denominator for the
// segment counter — it can never promise more nodes than a run can deliver.
function longestPath(g){
  const memo={};
  function depth(id, seen){
    if(!id || id==='END' || id==='BUSTED' || id==='WALKOUT') return 0;
    if(seen.has(id)) return 0;
    if(memo[id]!==undefined) return memo[id];
    const node=g.nodes[id];
    if(!node || !node.choices || !node.choices.length) return 1;
    const seen2=new Set(seen); seen2.add(id);
    let best=0;
    node.choices.forEach(c=>{ best=Math.max(best, depth(c.next, seen2)); });
    return (memo[id]=1+best);
  }
  return depth(g.start, new Set());
}
function start(key){
  const g=window.NF_GUESTS[key];
  Object.assign(state,{
    key, guest:g, node:g.start,
    hype:50, heat:20, rapport:50, peakHype:50,
    reveals:[], flags:{}, path:[],
    paused:false, ended:false, awaiting:false,
    airSeconds:0, nodesSeen:0,
    dangerBusted:false, dangerHot:false, dangerWalk:false, dangerCold:false
  });
  $('heatMeter') && $('heatMeter').classList.remove('hot');
  feed.innerHTML='';
  setMeter('hype'); setMeter('heat'); setMeter('rapport');
  // Honest counter: the longest real path through this guest's graph,
  // computed from the node data so it can never overstate.
  $('segTot').textContent = longestPath(g);
  renderDossier();
  $('startScreen').classList.add('hidden');
  $('finScreen').classList.add('hidden');
  startClock();
  playNode();
}

function startClock(){
  clearInterval(airTimer);
  airTimer=setInterval(()=>{
    if(state.paused||state.ended) return;
    state.airSeconds++;
    const m=String(Math.floor(state.airSeconds/60)).padStart(2,'0');
    const s=String(state.airSeconds%60).padStart(2,'0');
    $('airclock').textContent=`${m}:${s}`;
  },1000);
}

function playNode(){
  const node=state.guest.nodes[state.node];
  if(!node){ endBroadcast('complete'); return; }
  state.nodesSeen++; state.path.push(state.node);
  $('segNum').textContent=state.nodesSeen;
  $('segName').textContent=node.seg||'';
  $('dock').style.display='none';

  let i=0;
  (function nextLine(){
    if(state.paused){ setTimeout(nextLine,180); return; }
    if(i>=node.lines.length){ offerChoices(node); return; }
    const [cls,who,txt]=node.lines[i];
    if(cls==='guest'){
      showTyping(who);
      const delay=Math.min(1400, 350+txt.length*7);
      const fire=()=>{ if(state.paused){ setTimeout(fire,160); return; }
        clearTyping(); addLine('guest',who,txt); i++; setTimeout(nextLine,500); };
      setTimeout(fire,delay);
    } else {
      addLine(cls,who,txt); i++; setTimeout(nextLine,640);
    }
  })();
}

function offerChoices(node){
  if(!node.choices || !node.choices.length){ endBroadcast('complete'); return; }
  state.awaiting=true;
  const dock=$('dock'); dock.style.display='block';
  $('dockPrompt').textContent='YOUR MOVE, HOST — '+(node.seg||'');
  const wrap=$('choices'); wrap.innerHTML='';
  node.choices.forEach((c,idx)=>{
    const b=document.createElement('button');
    b.className='choice';
    b.innerHTML=`<kbd>${idx+1}</kbd>
      <span class="verb ${VERB_CLASS[c.verb]||'special'}">${c.t}</span>
      <span class="said"></span>`;
    b.querySelector('.said').textContent = c.said.replace(/^"|"$/g,'');
    b.onclick=()=>choose(c);
    wrap.appendChild(b);
  });
  scrollFeed();
}

function choose(c){
  if(!state.awaiting||state.paused) return;
  state.awaiting=false;
  $('dock').style.display='none';
  addLine('host','YOU — HOST', c.said.replace(/^"|"$/g,''));
  applyEffects(c.fx);
  if(c.reveal) logReveal(c.reveal);
  if(c.flag) state.flags[c.flag]=true;

  showTyping(c.reply[1]);
  const txt=c.reply[2];
  const delay=Math.min(1500, 450+txt.length*6);
  const fire=()=>{
    if(state.paused){ setTimeout(fire,180); return; }
    clearTyping();
    addLine('guest', c.reply[1], txt);
    if(c.note){
      setTimeout(()=>{ addLine('sys','PRODUCER NOTE', c.note); setTimeout(()=>advance(c),900); },650);
    } else { setTimeout(()=>advance(c),900); }
  };
  setTimeout(fire,delay);
}

function advance(c){
  // FAILURE MODEL (v2): heat/rapport never kill the run mid-interview.
  // They raise persistent DANGER flags that shape the ending instead.
  // You always reach the finale. "Busted" / "walkout" only resolve as
  // late-act endings — either authored (next:"BUSTED"/"WALKOUT") or via
  // the engine fallback applied at natural path completion (END).
  if(state.heat>=100) state.dangerBusted = true;       // sticky once tripped
  if(state.heat>=82)  state.dangerHot = true;          // "running hot" warning band
  if(state.rapport<=0) state.dangerWalk = true;
  if(state.rapport<=14) state.dangerCold = true;

  // Author can hard-route to a failure ending node id:
  if(c.next==='BUSTED'){ endBroadcast('raided'); return; }
  if(c.next==='WALKOUT'){ endBroadcast('walkout'); return; }

  if(!c.next || c.next==='END'){
    // Path finished. Resolve danger into an ending only NOW (always late-act).
    if(state.dangerBusted){ endBroadcast('raided'); return; }
    if(state.dangerWalk){ endBroadcast('walkout'); return; }
    endBroadcast('complete'); return;
  }
  state.node=c.next;
  playNode();
}

/* ---------------- finale ---------------- */
function defaultScore(s){
  const revScore=Math.min(100, s.reveals.length*11);
  return s.peakHype*0.34 + s.rapport*0.26 + revScore*0.24 + (100-s.heat)*0.16;
}
function endBroadcast(reason){
  state.ended=true; state.awaiting=false;
  clearInterval(airTimer);
  $('dock').style.display='none';
  const g=state.guest;
  const scoreFn = g.score || defaultScore;
  const score = (typeof scoreFn==='function') ? scoreFn(state) : defaultScore(state);

  let rank,cap,title,note;
  if(reason==='raided'){
    title="SIGNAL TRACED"; rank="BUSTED"; cap="They found the transmitter";
    note=(g.busted ? g.busted(state) :
      `You flew too close to the flame. Heat maxed out and a triangulation sweep locked your signal mid-broadcast. ${g.name} got out a side door; you did not. The tape survives — that's something — but Night Frequency goes dark for a while.`);
  } else if(reason==='walkout'){
    title="GUEST WALKED"; rank="DEAD AIR"; cap="You lost the room";
    note=(g.walkout ? g.walkout(state) :
      `You pushed ${g.name} past what they could take. Rapport hit zero and the chair went empty. The audience heard the silence — so did everyone else.`);
  } else {
    if(score>=78){ rank="LEGEND"; cap="An hour they'll trade like contraband"; title="BROADCAST OF THE YEAR"; }
    else if(score>=62){ rank="A-SIDE"; cap="A genuinely great show"; title="STRONG BROADCAST"; }
    else if(score>=46){ rank="ON AIR"; cap="A solid, survivable night"; title="BROADCAST COMPLETE"; }
    else if(score>=30){ rank="STATIC"; cap="You made it to the end, barely"; title="ROUGH BROADCAST"; }
    else { rank="LOW WATT"; cap="A forgettable frequency"; title="THE SIGNAL FADES"; }
    note = (g.outcome ? g.outcome(state,score) : defaultOutcome(state,g));
  }

  $('finTitle').textContent=title;
  $('finRank').textContent=rank;
  $('finRank').style.color = (reason==='raided'||reason==='walkout')?'var(--red)'
      :(score>=62?'var(--green)':score>=46?'var(--amber)':'var(--ink-dim)');
  $('finRankCap').textContent=cap;
  $('finHype').textContent=state.peakHype;
  $('finHeat').textContent=state.heat;
  $('finRap').textContent=state.rapport;
  $('finNote').textContent=note;
  $('finRevCount').textContent=state.reveals.length;
  $('finRevList').innerHTML = state.reveals.length
    ? state.reveals.map(r=>`<div class="fr">${r}</div>`).join('')
    : '<div class="fr" style="opacity:.6">Nothing made it to tape.</div>';
  // path map (what threads this run hit)
  if($('finPath')){
    $('finPath').textContent = state.path.length + ' segments aired this run · ' +
      state.reveals.length + ' on tape';
  }
  $('finScreen').classList.remove('hidden');
}
function defaultOutcome(s,g){
  const heatLine = s.heat>=70?" You ran dangerously hot — gripping radio, but you're a marked host now."
    : s.heat<=25?" You kept it clean; nobody upstairs has a reason to come looking. Yet." : "";
  const rapLine = s.rapport>=75?` ${g.name} left feeling truly heard — a guest who comes back.`
    : s.rapport<=30?` ${g.name} barely tolerated you by the end.` : ` You and ${g.name} found an uneasy rhythm.`;
  const revLine = s.reveals.length>=6?` And ${s.reveals.length} real claims made tape — a producer's dream.`
    : s.reveals.length<=1?` You pried almost nothing loose.` : ` You banked ${s.reveals.length} solid revelations.`;
  return `Peak hype hit ${s.peakHype}.`+heatLine+rapLine+revLine;
}

/* ---------------- controls ---------------- */
function togglePause(force){
  state.paused = force!==undefined?force:!state.paused;
  const b=$('pauseBtn');
  b.textContent=state.paused?'RESUME':'PAUSE';
  b.style.color=state.paused?'var(--amber)':'';
  b.style.borderColor=state.paused?'var(--amber)':'';
}

/* ---------------- roster ---------------- */
function buildRoster(){
  const r=$('roster'); r.innerHTML='';
  (window.NF_ORDER||Object.keys(window.NF_GUESTS)).forEach(k=>{
    const g=window.NF_GUESTS[k]; if(!g) return;
    const b=document.createElement('button');
    b.className='gpick';
    b.innerHTML=`<span class="gn"></span><span class="gh"></span>
      <span class="gd"></span><span class="gx"></span>`;
    b.querySelector('.gn').textContent=g.name;
    b.querySelector('.gh').textContent=`${g.handle} · ${g.tag}`;
    b.querySelector('.gd').textContent=g.blurb;
    b.querySelector('.gx').textContent=g.difficulty||'';
    b.onclick=()=>start(k);
    r.appendChild(b);
  });
}

/* ---------------- boot ---------------- */
window.addEventListener('DOMContentLoaded',()=>{
  feed=$('feed');
  buildRoster();
  $('pauseBtn').onclick=()=>{ if(!state.ended) togglePause(); };
  $('againBtn').onclick=()=>start(state.key);
  $('newBtn').onclick=()=>{ $('finScreen').classList.add('hidden'); $('startScreen').classList.remove('hidden'); };
  document.addEventListener('keydown',e=>{
    const onScreen = !$('startScreen').classList.contains('hidden') || !$('finScreen').classList.contains('hidden');
    if(e.key===' ' && !onScreen){ e.preventDefault(); if(!state.ended) togglePause(); }
    if(state.awaiting && !state.paused){
      const n=parseInt(e.key);
      if(n>=1&&n<=9){
        const node=state.guest.nodes[state.node];
        if(node.choices[n-1]) choose(node.choices[n-1]);
      }
    }
  });
});

window.NF_ENGINE={ start };
})();
