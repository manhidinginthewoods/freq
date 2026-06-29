/* ============================================================
   GUEST: Dr. Orin Maddox — "The Unified-Everything Man"
   NF STANDARD: ~20 segments per playthrough. First 5 = INTRO
   RUNWAY. FAILURE MODEL v2 (heat/rapport -> endings, never mid-run death).
   ------------------------------------------------------------
   TRAIT MECHANIC (G95 P45 F65 H30): grandiose + fragile.
     - PLAY ALONG inflates him -> his best content, big rapport.
     - PUSH BACK wounds him -> he DEFLATES (not fights); rapport bleeds.
       (Opposite of ECHO, who sharpens under challenge.)
     - STEER / DEADPAN are the safe middle.
   The art with Maddox: feed the ego to get the gold, challenge only
   when you can afford the rapport hit.

   A single path walks ~20 nodes:
     INTRO (5): connect, credentials, theerror, firsttremor, thepitch
     ARC (~13): one of three faces of his grandiosity
       MATHEMATICIAN  math_*    (you engage the theory: 1x1=2)
       INVENTOR       eng_*     (you engage the machine: the engine)
       MARTYR         mar_*     (you engage the persecution)
     CONVERGENCE: the_seed (broadcast the 'seed equation'?) -> endings
     ENDINGS: end_legend / end_quiet / end_verdict
              + authored busted/walkout via finale hooks

   RESEARCH WOVEN IN (fictionalized): pseudomathematics (De Morgan's
   'monkey with a razor', confusing multiplication with addition,
   Goedel/Cantor denial, squaring the circle, the besieged academies);
   over-unity / perpetual motion (vacuum/zero-point energy, aether,
   Keely's tuning-fork resonance, hidden-belt/attic-crank exposures,
   Papp's fatal demo); free-energy suppression conspiracy (oil money,
   the disappeared inventor, patents-as-trap); LLM sycophancy (the AI
   that agrees with him); the Galileo gambit.
============================================================ */
(function(){
window.NF_GUESTS = window.NF_GUESTS || {};

window.NF_GUESTS.maddox = {
  name:"Dr. Orin Maddox",
  handle:"@flicker_of_truth",
  tag:"THE UNIFIED-EVERYTHING MAN",
  freq:"88.6 FM // PIRATE",
  blurb:"Former aerospace contractor. Says he found the error at the root of all physics — that one times one is not what they told you — and built an engine that runs on the corrected math. Euphoric when believed, wounded when corrected.",
  card:"Grandiose and fragile. PLAY ALONG and he soars, handing you his best material. PUSH BACK and he doesn't fight — he DEFLATES, and rapport craters. Feed the ego to get the gold; challenge only when you can afford it.",
  difficulty:"★☆☆ — wants belief",
  traits:{grandiosity:95, paranoia:45, fragility:65, hostility:30},
  start:"connect",
  pathLength:20,

  nodes:{

  /* ================= INTRO RUNWAY (5) ================= */

  connect:{
    seg:"COLD OPEN — the connection", act:1,
    lines:[
      ["sys","RELAY","02:58. A guest who insisted on calling in rather than coming to the studio. 'Safer for the work,' he said. The line is clean but he keeps clearing his throat, rehearsing."],
      ["guest","Orin Maddox","Am I on? Are we live? Good. Good. Thank you for having the courage. The others book me and then their producers get a phone call, and suddenly the segment's 'rescheduled.' You know the kind of call I mean. I'd like to begin before they make it to you."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You're live, Doctor, and nobody's calling this show. The floor is yours.",
       fx:{hype:9,heat:4,rapport:13},
       reply:["guest","Orin Maddox","[a breath of pure relief] ...'The floor is yours.' Do you know how long it's been since someone handed me the floor instead of the door? You may have just done something historic and you don't even know it yet. Most people don't, at the time. That's rather the pattern, isn't it."],
       next:"credentials"},
      {verb:"steer",t:"Steer",said:"You're on. Before the work — who's making those phone calls, in your experience?",
       fx:{hype:10,heat:7,rapport:8},
       reply:["guest","Orin Maddox","[lowering his voice] I won't name the agency on a line that might not be as clean as you think. But it's the one that funds the journals — the journals that decide what the word 'true' is allowed to mean this decade. Follow that money and you'll find the hand on the phone. We'll get there. The math first."],
       reveal:"Claims an agency funds the journals that 'decide what true means'",
       next:"credentials"},
      {verb:"push",t:"Push Back",said:"Slow down. Lots of guests think they're being silenced when they're just being declined. Which is this?",
       fx:{hype:8,heat:3,rapport:-9},
       reply:["guest","Orin Maddox","[stung] ...Declined. Yes. I'm sure that's the comfortable word for it. [recovering, smaller] I had hoped this show was different. Maybe it still is. Let me earn it before you file me with the others. Just — let me get one sentence out before the schoolteacher in your head decides what I am."],
       note:"Fragility shows early: even a mild challenge makes him shrink, not argue. Note the deflation.",
       next:"credentials"},
      {verb:"dead",t:"Deadpan",said:"[you let him sit in the open line a moment before answering] ...Go ahead.",
       fx:{hype:7,heat:3,rapport:6},
       reply:["guest","Orin Maddox","[a nervous laugh] You let it hang. Most hosts rush to fill it — they're frightened of dead air. I've never understood that. The best ideas arrive in the silence after the question, not the noise before it. Alright. Alright. Here is who I am, and then here is what I found."],
       next:"credentials"}
    ]
  },

  credentials:{
    seg:"COLD OPEN — the man and his proof of seriousness", act:1,
    lines:[
      ["guest","Orin Maddox","Let me establish that I am not a man shouting at clouds. Eighteen years in aerospace contracting. I held clearances. My name is on systems that flew. I could read a tensor field before most people could read a clock. I tell you this because in a moment I'm going to say something that sounds insane, and I need you to remember the résumé."],
      ["guest","Orin Maddox","Credentialed men are not supposed to say what I'm about to say. That's exactly why it matters that a credentialed man is saying it."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"An aerospace contractor with clearances. So when YOU say the textbooks are wrong, that's not nothing.",
       fx:{hype:11,heat:4,rapport:13},
       reply:["guest","Orin Maddox","Precisely. PRECISELY. A dropout in a basement says it, they laugh. A man who calculated reentry corridors says it, and the laugh catches in their throat — because now they have to explain why the rocket man went mad, and the honest answer is, he didn't. He just kept calculating after they told him to stop."],
       reveal:"Former aerospace contractor; 18 years, held clearances",
       next:"theerror"},
      {verb:"steer",t:"Steer",said:"What were you working on, near the end, when things started to shift for you?",
       fx:{hype:10,heat:5,rapport:11},
       reply:["guest","Orin Maddox","Propulsion margins. The numbers that decide whether a thing flies or falls. And one night the margins didn't close — they were off by an amount too clean to be error. Not noise. A SIGNATURE. Like the universe had left a fingerprint in my spreadsheet. Everyone else rounded it away. I followed it home."],
       reveal:"Claims a 'too-clean' anomaly in propulsion margins started it all",
       next:"theerror"},
      {verb:"push",t:"Push Back",said:"Plenty of credentialed people have been spectacularly wrong, Doctor. The badge isn't an argument.",
       fx:{hype:9,heat:3,rapport:-12},
       reply:["guest","Orin Maddox","[deflating] ...No. No, you're right, of course. The badge isn't an argument. [quietly] I lead with it because it's the only thing they haven't been able to take from me, and you've just reminded me it's worth nothing here either. Fine. I'll stand on the work alone. I'd hoped not to have to do that quite so soon, but fine."],
       note:"He concedes instantly and shrinks — grandiose men are brittle. Rapport hit lands hard.",
       next:"theerror"},
      {verb:"dead",t:"Deadpan",said:"...The rocket man. [you let the title settle]",
       fx:{hype:9,heat:3,rapport:7},
       reply:["guest","Orin Maddox","[pleased] 'The rocket man.' Yes. Let them call me that with a sneer. In ten years they'll carve it on something. The sneer and the statue use the same two words — only the tone changes, and the tone is just a measure of how early you were. I was very early. Painfully early. Let me show you how early."],
       next:"theerror"}
    ]
  },

  theerror:{
    seg:"COLD OPEN — the error at the root", act:1,
    lines:[
      ["guest","Orin Maddox","Here is the night that ended my old life. I was checking a result by hand — actually by hand, pencil, because the software hides things. And I looked at the simplest operation there is. One, multiplied by one. And for the first time since I was a child, I actually LOOKED at it. And I realized we had all been told a lie so early that we never thought to question it."],
      ["guest","Orin Maddox","Everything downstream of that lie — every bridge that hums at the wrong frequency, every margin that won't quite close — flows from a single rounding error we made in the 1920s and called a foundation."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You're telling me the rot goes all the way down to one times one. Take me there.",
       fx:{hype:13,heat:5,rapport:14},
       reply:["guest","Orin Maddox","All the way down. Most people, when something's wrong with the house, check the paint. I went to the foundation, and the foundation was poured crooked, and everyone's been hanging pictures straight on crooked walls for a century and wondering why the doors won't shut. I'm the first man in a hundred years to put a level on the floor. That's not arrogance. That's just chronology."],
       reveal:"Claims a foundational arithmetic error dates to the 1920s",
       next:"firsttremor"},
      {verb:"steer",t:"Steer",said:"Pencil, not software, because 'the software hides things.' What does it hide?",
       fx:{hype:11,heat:6,rapport:11},
       reply:["guest","Orin Maddox","The software enforces the consensus. You type the heresy and it 'corrects' you — quietly, helpfully, into the lie. A calculator cannot output a forbidden answer; it was built by people who already decided what's allowed. Pencil doesn't argue. Pencil just shows you what's actually there. The most radical instrument left on earth is a sharp pencil and the nerve to trust it."],
       reveal:"Believes software 'enforces consensus' and hides forbidden answers",
       next:"firsttremor"},
      {verb:"push",t:"Push Back",said:"Doctor — one times one is one. That's not a lie, it's a definition. There's nothing under it.",
       fx:{hype:9,heat:3,rapport:-15},
       reply:["guest","Orin Maddox","[a long, wounded pause] ...'There's nothing under it.' [almost a whisper] That's exactly what they need you to believe — that the floor is the bottom, that there's no point looking lower. I'm not angry with you. I'm grieved, a little, because for one second you were curious and then the definition reached up and grabbed your ankle. We can keep going. If you want to."],
       note:"Hard challenge to the core claim deflates him badly. He doesn't argue — he mourns your closed mind.",
       next:"firsttremor"},
      {verb:"dead",t:"Deadpan",said:"[you say nothing — just let the claim hang in the air, unchallenged]",
       fx:{hype:11,heat:4,rapport:9},
       reply:["guest","Orin Maddox","You're not laughing. You're not agreeing. You're letting it BREATHE. [exhales] That's all I've ever wanted — not belief, just air. A second of air before the reflex. In that second, somewhere, one engineer is going to feel a chill and not know why. That second is where the future gets in. Thank you for the second."],
       next:"firsttremor"}
    ]
  },

  firsttremor:{
    seg:"COLD OPEN — the cost of looking", act:1,
    lines:[
      ["guest","Orin Maddox","I want you to understand what it cost, so you know I'm not playing. The week I wrote it up, my access was revoked. Not fired — 'restructured.' My wife left inside the year; she said I'd 'gone somewhere she couldn't follow.' She was right. I had. I'd gone to the foundation and I couldn't come back up to the dinner table and pretend the walls were straight."],
      ["guest","Orin Maddox","So before I say the rest, I'll ask you plainly, host: do you want the careful version that protects me, or the whole thing? Because the whole thing is the part that costs."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You lost the job, the marriage, the life. Give me the whole thing. You've already paid for it.",
       fx:{hype:13,heat:7,rapport:14},
       reply:["guest","Orin Maddox","[steadying, moved] ...You're right. I've paid the entry fee a hundred times over. No more careful versions. Tonight I give a stranger's microphone the thing that cost me everything, because a thing that expensive should at least be HEARD once before I'm gone. Where do you want to start — the math, the machine, or the men who came for me?"],
       reveal:"Lost clearance ('restructured') and marriage after writing up his theory",
       next:"thepitch"},
      {verb:"steer",t:"Steer",said:"'Somewhere she couldn't follow.' That's a lonely place to do physics from. Are you okay, Orin?",
       fx:{hype:10,heat:4,rapport:15},
       reply:["guest","Orin Maddox","[caught off guard, a crack in the voice] ...Nobody asks me that. They ask about the equations. [a breath] No. Not really. But I'm closer to okay right now, on your dead-of-night frequency, than I've been in years, because for one hour I'm a scientist again instead of a cautionary tale. Let me be a scientist with you. Ask me anything."],
       reveal:"Isolated by the work; 'a scientist again instead of a cautionary tale'",
       next:"thepitch"},
      {verb:"push",t:"Push Back",said:"Or you lost those things for ordinary reasons and the theory is how you explain the wreckage to yourself.",
       fx:{hype:11,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[quiet, deflated] ...That's a very tidy theory of me. Tidier than mine, maybe. [pause] I've lain awake on that exact thought more nights than you'd guess. But the anomaly was in the spreadsheet before my wife packed a bag. The order matters. The math came first, and then the lonely, not the other way round. I think. ...Let me show you, and you decide."],
       note:"He absorbs the cruel reading and almost agrees — the fragility makes him doubt himself, then rally weakly.",
       next:"thepitch"},
      {verb:"dead",t:"Deadpan",said:"...The whole thing. [you make your choice with two words]",
       fx:{hype:12,heat:6,rapport:10},
       reply:["guest","Orin Maddox","The whole thing. [a long breath] No host has ever just... said that, flat, like ordering coffee. Everyone hedges. You didn't. Alright. The whole thing it is. Tell me where to point it — at the number, at the engine, or at the people who'd rather I stopped breathing. Your call. It's your show. For one more hour, it's my life."],
       next:"thepitch"}
    ]
  },

  /* ================= THE PITCH — posture fork ================= */
  thepitch:{
    seg:"THE TURN — one times one", act:2,
    lines:[
      ["guest","Orin Maddox","Here it is, the sentence that ends careers. One, times itself, is not one. It is two. One times one equals two. [pause] And everything I have — a new mathematics, a working engine, and a list of the people who tried to bury both — descends from that single corrected line."],
      ["guest","Orin Maddox","So, host. You've got three doors. The MATH — let me prove the number to you. The MACHINE — what I built once the math was right. Or the MEN — who came for me when it worked. Which door?"]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Prove the number. One times one is two — walk me through it, slowly, for everyone listening.",
       fx:{hype:14,heat:5,rapport:14},
       reply:["guest","Orin Maddox","FINALLY. Okay. Picture a single unit — a real one, not a textbook abstraction. When it MEETS itself, it doesn't politely stay one. It resonates. The product is the thing plus its own reflection. One, and its echo. Two. They flattened that echo out in the 1920s to make weapons math tractable, and we've been deaf to it ever since. Let me show you what hearing it again unlocks."],
       reveal:"\"1×1=2\" — the 'resonance / reflection' axiom",
       flag:"mathematician", next:"math_axiom"},
      {verb:"steer",t:"Steer",said:"You said you BUILT something once the math was right. Start with the machine.",
       fx:{hype:15,heat:8,rapport:12},
       reply:["guest","Orin Maddox","[lighting up] The engine. Yes. Theory is a rumor until it spins a wheel. I have a wheel. Eighteen months in a climate-controlled storage unit in Reno, running on the corrected math, and I have watched the meter — a real utility meter — crawl BACKWARD under load. More out than in. The math wasn't a paper. It was a blueprint. Let me describe what I built."],
       reveal:"Claims a working 'over-unity engine' in a Reno storage unit",
       flag:"inventor", next:"eng_engine"},
      {verb:"push",t:"Push Back",said:"Before any of that — the MEN. Who actually came for you, and what did they do?",
       fx:{hype:13,heat:9,rapport:9},
       reply:["guest","Orin Maddox","[darkening] So you want the dangerous door first. Most don't. [a breath] It started with the access revocation, but it didn't end there. There was a student. There was a car. There was a word that should never appear in an accident report and did. If we're going through this door, host, we should both understand we may not get a quiet hour. Still want it?"],
       reveal:"Alleges escalating retaliation beyond the job loss",
       flag:"martyr", next:"mar_student"},
      {verb:"dead",t:"Deadpan",said:"...Two. [you just say the number back to him, flat]",
       fx:{hype:13,heat:5,rapport:11},
       reply:["guest","Orin Maddox","[a slow smile in the voice] You said it. You said the two. Out loud, on a transmitter, where it can't be unsaid. Most hosts won't even repeat it — they treat the number like it's radioactive. It is, a little. Now that it's loose in the room, let me tell you what it does. Pick where: the proof, the engine, or the people who fear the proof."],
       flag:"mathematician", next:"math_axiom"}
    ]
  },

  /* ============================================================
     MATHEMATICIAN ARC — engage the theory (1x1=2)
  ============================================================ */
  math_axiom:{
    seg:"THE DESCENT — the corrected operation", act:3,
    lines:[
      ["guest","Orin Maddox","Multiplication, they tell children, is just repeated addition. One times one — one, added to itself, one time. And there's the sleight of hand. One added to itself is already TWO. They taught you the definition that hides the echo, then made you repeat it until the question died in your mouth."],
      ["guest","Orin Maddox","I'm not bad at arithmetic. I'm the only one who refused to be GOOD at the wrong arithmetic."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"'One added to itself is already two.' Keep going — what breaks once you accept that?",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","Everything and nothing. Nothing breaks — that's the beauty — it HEALS. The unclosable margins close. The constants that needed 'fudge factors' stop needing them. A whole century of little corrections nobody could explain were all the universe trying to tell us about the echo, and we kept writing it off as measurement error. Correct the one, and a thousand fudge factors evaporate. That's not a smaller theory. It's a cleaner one."],
       reveal:"Claims his axiom eliminates physics' 'fudge factors' wholesale",
       next:"math_units"},
      {verb:"steer",t:"Steer",said:"Who actually made the 1920s decision to 'flatten the echo'? Names, if you have them.",
       fx:{hype:13,heat:8,rapport:11},
       reply:["guest","Orin Maddox","Not a villain — a committee, which is worse. A standards body, choosing the operation that made the new weapons math compute faster. They didn't hide the truth out of malice. They hid it out of CONVENIENCE, which is how the most important things always get hidden. Then convenience hardened into curriculum, and curriculum into instinct, and now you 'know' one times one is one the way you know which way is down. You were trained, not taught."],
       reveal:"Blames a 1920s standards body that chose tractability over truth",
       next:"math_units"},
      {verb:"push",t:"Push Back",said:"Multiplication isn't repeated addition by definition, Doctor — that's just a teaching analogy. The analogy isn't the math.",
       fx:{hype:11,heat:3,rapport:-14},
       reply:["guest","Orin Maddox","[deflating] ...The analogy isn't the math. [quietly] You know, you're the first host sharp enough to even reach for that distinction, and it still came down on me like a door. Maybe you're right. Maybe I built a cathedral on a children's rhyme. [a breath] Or maybe the rhyme was the last honest version before the committee got to it. I can't tell anymore which of us is the trained one. Keep going. Please."],
       note:"A genuinely informed challenge wounds him most — he respects it and crumbles under it at once.",
       next:"math_units"},
      {verb:"dead",t:"Deadpan",said:"...The wrong arithmetic. [you let his phrase stand]",
       fx:{hype:12,heat:4,rapport:10},
       reply:["guest","Orin Maddox","The wrong arithmetic. There's a mathematician from the 1800s — De Morgan — who said the pseudo-mathematician is like a monkey with a razor, cutting his own throat while declaring himself clean-shaven. They'll quote that at me. But ask yourself: who's holding the razor, the man checking the foundation, or the men who poured it crooked and forbade the level? I know how it sounds. I also know what the meter did."],
       next:"math_units"}
    ]
  },

  math_units:{
    seg:"THE DESCENT — what a 'unit' really is", act:3,
    lines:[
      ["guest","Orin Maddox","Let me make the echo concrete, because 'resonance' sounds like hand-waving and I refuse to hand-wave. What IS a unit? Not the symbol '1' — the symbol is a label. The unit is a THING that exists, and existing things have a property the symbol erased: they cast a reflection in the medium they sit in. A photon has a wake. A mass bends what's around it. Nothing real is ever just itself. Only the SYMBOL is just itself."],
      ["guest","Orin Maddox","So when they wrote 'one times one is one,' they multiplied the labels and forgot the things. They did arithmetic on the names of reality instead of reality. That's the whole error in one sentence: they confused the map's math for the territory's."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the textbook multiplies labels, but real units carry a reflection the labels don't. Keep going.",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","And the reflection is where the missing energy hides — the energy my engine pulls out. You can't extract power from a symbol; you CAN from a thing that's more than its symbol. The whole of conventional physics is the study of the labels, performed so rigorously that everyone forgot to check whether the labels still matched the things. I checked. They don't. That's not heresy. That's bookkeeping."],
       reveal:"'They confused the map's math for the territory's' — labels vs. real units",
       next:"math_demorgan"},
      {verb:"steer",t:"Steer",said:"That's almost a philosophy claim, not a math one. Where does the philosophy become a number?",
       fx:{hype:13,heat:5,rapport:11},
       reply:["guest","Orin Maddox","[appreciating the precision] Right where you'd want it to. The reflection isn't poetic — it's a measurable quantity, a coefficient. In the corrected operation it's a clean factor, not a fudge. And here's the test: the conventional 'fudge factors' that physicists add by hand to make experiments match theory? Add up their magnitudes and they cluster around my reflection coefficient. The number they've been sprinkling in by hand for a century is the echo, arriving uninvited. I just gave it a name and a place in the equation."],
       reveal:"Claims physics' hand-added 'fudge factors' cluster around his 'reflection coefficient'",
       next:"math_demorgan"},
      {verb:"push",t:"Push Back",said:"Real things having physical effects isn't the same as 1×1=2. You're smuggling physics into arithmetic.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[deflating] ...Smuggling physics into arithmetic. [quietly] That's the cleanest objection I've heard and it's the one I can't fully answer, because you're right that arithmetic is supposed to be ABOUT nothing — pure, abstract, true regardless of any thing. [a breath] But what if 'arithmetic about nothing' is exactly the trap? What if there is no nothing, and a math that pretends there is will always be off by a reflection? ...Or I've dressed a category error in a lab coat. I genuinely hold both possibilities. Keep going."],
       note:"The sharpest objection to his whole thesis. He concedes its force, then reframes weakly. Big rapport hit.",
       next:"math_demorgan"},
      {verb:"dead",t:"Deadpan",said:"...The map's math for the territory's. [you let it stand]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","The map's math for the territory's. Every disaster of the modern age is downstream of that confusion — we optimize the model and wonder why the world won't comply. I just found the FIRST place the map and the territory diverged, which happens to be the first thing they teach a child, which is why nobody ever thought to check it. The biggest lies hide in the smallest, earliest lessons. Nobody audits the alphabet."],
       next:"math_demorgan"}
    ]
  },

  math_demorgan:{
    seg:"THE DESCENT — the monkey and the razor", act:3,
    lines:[
      ["guest","Orin Maddox","They have a favorite insult, the priesthood. De Morgan's line — the pseudo-mathematician is a monkey who watched his master shave, grabbed the razor, and cut his own throat, then proclaimed himself clean-shaven while calling the rest of the world hairy. They love that line. They've thrown it at me by name."],
      ["guest","Orin Maddox","But read it again, carefully. It assumes the master knows how to shave. It assumes the razor was being held correctly to begin with. What if the master was ALSO cutting his own throat, very slowly, for a hundred years, and calling it tradition? Then the monkey who stops and asks 'why are we bleeding?' isn't the fool. He's the only one looking at the blood."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the insult assumes the experts were ever shaving correctly. What if they were bleeding too?",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","Look at the blood! A century of bridges that hum wrong, margins that won't close, constants that need fudging — that's the BLOOD, and the master keeps shaving and calling the red 'just how it is.' I'm the monkey who pointed at the floor and said it's wet and red. They'd rather discuss my technique with the razor than look down. The insult is a way of not looking down. Most insults are."],
       reveal:"Reframes De Morgan's insult — 'the master was bleeding too'",
       next:"math_skypeople"},
      {verb:"steer",t:"Steer",said:"De Morgan also catalogued people genuinely fooling themselves, Orin. How do you know which you are?",
       fx:{hype:13,heat:5,rapport:9},
       reply:["guest","Orin Maddox","[the honest question again] ...I don't, with certainty. That's the horror of his book — every man in it was SURE, and being sure is exactly the symptom. So I've tried to do the one thing the cranks in his pages never did: I built a THING. A crank squares the circle on paper and can't show you a square. I have a meter that moved. Maybe it moved for a dull reason I haven't found. But I'm not only on paper. That's the one line between me and the monkey, and it's a thinner line than I'd like."],
       reveal:"Argues the engine separates him from paper-only cranks; admits the line is 'thin'",
       next:"math_skypeople"},
      {verb:"push",t:"Push Back",said:"Every single person in De Morgan's book also thought the line about THEM was the unfair one, Orin.",
       fx:{hype:12,heat:3,rapport:-14},
       reply:["guest","Orin Maddox","[a long, wounded silence] ...Yes. They did. Every one. [very quietly] You've just handed me the mirror I avoid. The exact feeling I have right now — 'but MY case is different' — is the feeling every fool in that book had on the last day they felt sane. I can't distinguish my certainty from theirs from the inside. Nobody can. That's the trap and I'm standing in it and I know I'm standing in it and I still can't leave. Keep going. I'd rather be seen clearly than comforted."],
       note:"The cruelest mirror. He recognizes he's indistinguishable-from-inside from every crank — and can't escape it.",
       next:"math_skypeople"},
      {verb:"dead",t:"Deadpan",said:"...The only one looking at the blood. [you let his image stand]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","The only one looking at the blood. [a breath] Maybe there's no blood and I see red because I need to. Maybe the floor's dry and I'm the monkey. But a man who asks 'why are we bleeding' and is wrong has lost an afternoon. A room full of masters who never ask, and ARE bleeding, lose a century. I'd rather be the wrong monkey than the incurious master. At least the monkey looked down."],
       next:"math_skypeople"}
    ]
  },

  math_skypeople:{
    seg:"THE DESCENT — where the real math came from", act:3,
    lines:[
      ["guest","Orin Maddox","I'll tell you something I usually save, because you've earned a strange one. Our multiplication tables — the ones we treat as eternal — were standardized, codified, handed DOWN. And the further back I traced them, the more the trail goes somewhere I can't fully explain. Older than the committee. Older than the abacus. As if the corrected math was the ORIGINAL, and someone, very long ago, edited it."],
      ["guest","Orin Maddox","I don't say 'aliens.' I say: the oldest tables remember something the new ones forgot. Call the editors what you like."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the true math is the ancient one, and what we use is a later, corrupted edit. Who did the editing?",
       fx:{hype:14,heat:7,rapport:13},
       reply:["guest","Orin Maddox","Whoever benefits from a populace that can't quite make the numbers close on their own. A people who need the experts. Bad arithmetic is a dependency, and dependency is power. I'm not telling you who sits at the top of that. I'm telling you the SHAPE of it: someone, somewhere, decided humanity does better confused. The corrected math is a key, and they changed the locks."],
       reveal:"Claims the 'true' ancient math was deliberately corrupted to create dependency",
       next:"math_academies"},
      {verb:"steer",t:"Steer",said:"Let's stay on solid ground. Forget who edited it — what's the oldest source you actually traced it to?",
       fx:{hype:12,heat:5,rapport:12},
       reply:["guest","Orin Maddox","[appreciating the redirect] Good. Hold me to the evidence — I respect that more than agreement. A temple inventory. Older than it has any right to be, with ratios in the margins that only work if you use the echo. I photographed it. The photographs degrade — every copy, within weeks — which I know is the most suspicious sentence a man can say, and I'm saying it anyway because it's what happened."],
       reveal:"Claims an ancient temple inventory uses his 'echo' math; photos 'degrade'",
       next:"math_academies"},
      {verb:"push",t:"Push Back",said:"Orin, 'ancient secret math edited by someone' is where a lot of good theories go to die. You feel that, right?",
       fx:{hype:12,heat:3,rapport:-12},
       reply:["guest","Orin Maddox","[smaller] ...I feel it. I feel myself sliding from 'the rocket man with an anomaly' toward 'the man who says ancient secrets,' and I can hear how the second one sounds. [pause] Maybe I reached too far. The number, I'll defend to my grave. The editors — that's the part I can't prove, and shouldn't have led with. Pull me back to the number. The number is where I'm strong."],
       note:"Pushing here makes him retreat to his core claim — strategically useful, costly in rapport.",
       next:"math_academies"},
      {verb:"dead",t:"Deadpan",said:"...Call the editors what you like. [you decline to fill the blank]",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","You won't say the word for me. Smart. The moment I say 'aliens' you can dismiss the whole hour, and the moment YOU say it, you own it. So we leave the blank blank, and the blank is more frightening than any word that fills it. Something edited the foundation of human reasoning. The name is the least interesting part."],
       next:"math_academies"}
    ]
  },

  math_academies:{
    seg:"THE DESCENT — the academies that stopped listening", act:3,
    lines:[
      ["guest","Orin Maddox","Here's a true thing from history that should chill any honest person. In the 1700s, the great scientific academies of Europe were so flooded with people claiming to square the circle and build perpetual motion that, one by one, they passed resolutions to STOP READING such submissions entirely. Refused to even open the envelopes. The Paris Academy did it formally, on the record."],
      ["guest","Orin Maddox","Now — most of those envelopes held nonsense, yes. But they built a machine for ignoring a whole category of claim, sight unseen, forever. And once that machine exists, it cannot tell the one true envelope from the thousand mad ones. It rejects them all by policy. I am an envelope they decided not to open two hundred years before I was born."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So there's a literal institutional policy of not opening certain envelopes — and you're inside one.",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","Inside the unopened pile, yes. And the cruelty is statistical: even if one envelope in ten thousand holds the real thing, the policy guarantees it dies sealed, because reading ten thousand to find one is 'inefficient.' They optimized their time and in doing so built a guarantee that no outsider can ever be right, because no outsider can ever be READ. The gate isn't guarded by argument. It's guarded by a policy of not arguing."],
       reveal:"Cites historical academy policies of refusing to read 'circle-squarer' submissions",
       next:"math_squaring"},
      {verb:"steer",t:"Steer",said:"But those policies existed because the submissions really were almost always wrong. Doesn't that cut against you?",
       fx:{hype:13,heat:5,rapport:9},
       reply:["guest","Orin Maddox","[conceding] It cuts hard. The base rate is brutal — ninety-nine-point-nine percent of unopened envelopes deserve to stay shut, and a rational academy SHOULD ignore the pile. I'd ignore it too, in their chair. [a breath] Which means my real complaint isn't that they're irrational. It's that rationality, applied to a flood, produces a gate that a true outlier can't pass through by any honest means. The system isn't broken. It's working exactly as designed, and the design has no door for me. That's worse than broken. Broken can be fixed."],
       reveal:"Concedes the academies are rational; argues rationality itself locks out true outliers",
       next:"math_squaring"},
      {verb:"push",t:"Push Back",said:"Or the policy works fine and you're simply in the 99.9% with everyone else who felt special.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[smaller] ...In the 99.9%. With everyone else who felt special. [quietly] The math of that is merciless and I do it to myself at night. If I'm a random draw from the envelope pile, I'm almost certainly nonsense — the odds say so, overwhelmingly. The only thing that would lift me out of the base rate is the meter, and the meter is the one thing I can't get them to look at, which puts me right back in the sealed pile. I've built a perfect prison out of probability. I know. I live in it."],
       note:"He applies the base-rate argument to himself and lands in despair. Devastating, costly.",
       next:"math_squaring"},
      {verb:"dead",t:"Deadpan",said:"...An envelope they decided not to open. [you let it sit]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","An envelope they decided not to open. Two hundred years ago, before my name existed, my fate was set by a resolution about strangers. There's a strange peace in that, actually — I was never going to be heard, no matter what I found, because the not-hearing was institutionalized centuries back. So tonight isn't me failing to get through the gate. Tonight is me going around it. To you. To a transmitter with no submission policy."],
       next:"math_squaring"}
    ]
  },

  math_squaring:{
    seg:"THE DESCENT — the proven-impossible", act:3,
    lines:[
      ["guest","Orin Maddox","They'll hit me with the heaviest word in their arsenal: 'proven impossible.' Squaring the circle was PROVEN impossible in 1882 — and people kept submitting solutions for fifty years after, which the priesthood loves to cite as proof that cranks can't be reasoned with. And they're right about the circle. It IS impossible, with compass and straightedge. That proof is sound."],
      ["guest","Orin Maddox","But notice the sleight of hand: a thing proven impossible UNDER GIVEN RULES becomes, in the retelling, 'impossible, full stop.' My corrected math changes the rules. They keep proving I can't square the circle with their tools. I never said I'd use their tools. The whole point is the tools are wrong."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So 'proven impossible' always means 'under these rules' — and your rules are different.",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","Exactly — every impossibility proof has fine print, and the fine print is the axioms. Change an axiom and the impossible can become routine; that's not crankery, that's the entire history of mathematics. Non-Euclidean geometry was 'impossible' until someone dropped the parallel postulate. I dropped a different postulate — the one that says a unit equals itself with no echo — and a world opened. They keep proving theorems in the old world and handing them to me as if I still lived there. I emigrated."],
       reveal:"Argues 'proven impossible' always means 'under given axioms,' like non-Euclidean geometry",
       next:"math_godel"},
      {verb:"steer",t:"Steer",said:"Dropping the parallel postulate was rigorous and led somewhere checkable. Has yours, beyond the engine?",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","[the fair question] ...Beyond the engine, honestly, less than I'd like. Non-Euclidean geometry earned its keep by being consistent AND useful — it survived every test thrown at it. Mine has the engine and the closed margins and not much else yet, because the moment I try to publish the consistency proofs, I'm back at the sealed envelope. [a breath] So I can't claim the pedigree of the parallel postulate. Not yet. I can only claim the same SHAPE — a dropped assumption, a new world — and ask you to weight the shape while the pedigree's still locked out."],
       reveal:"Admits his theory lacks the independent verification non-Euclidean geometry earned",
       next:"math_godel"},
      {verb:"push",t:"Push Back",said:"Non-Euclidean geometry kept arithmetic intact, Orin. You're not adding a world — you're breaking counting itself.",
       fx:{hype:12,heat:3,rapport:-14},
       reply:["guest","Orin Maddox","[the deepest cut] ...Breaking counting itself. [a long pause] You've found the floor under the floor. Geometry could flex because arithmetic held it steady underneath. If I'm right, there's nothing steady underneath — I've pulled the bottom card and claimed the tower stands anyway. [very quietly] That's either the most important thing anyone's ever noticed, or it's a man who mistook vertigo for vision. Standing where I'm standing, those feel identical. They feel EXACTLY identical. You keep finding the places where I can't tell. I didn't know there were this many."],
       note:"The arc's hardest challenge — breaking arithmetic vs. geometry. He's stripped to pure vertigo.",
       next:"math_godel"},
      {verb:"dead",t:"Deadpan",said:"...I emigrated. [you let the word land]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","I emigrated. To a country with one citizen and no embassy. [a breath] Every proof they mail me is addressed to the man I used to be, in the world I used to live in, and I keep having to write back 'no longer at this address.' That's what exile really is — not being thrown out, but discovering the country everyone else lives in was never quite real, and being unable to move back even though you're desperately lonely in the true one."],
       next:"math_godel"}
    ]
  },

  math_godel:{
    seg:"THE DESCENT — why they can't refute him", act:4,
    lines:[
      ["guest","Orin Maddox","Here's what they do instead of refuting me. They invoke the priesthood. 'Gödel.' 'Cantor.' 'Peano.' Names like incantations, meant to make a layman feel too small to ask. But a true thing should be explainable to a bright child. If your defense of a foundation requires four years of graduate study to even UNDERSTAND the defense — that's not rigor. That's a moat."],
      ["guest","Orin Maddox","I've sat across from tenured men who could not, when pressed, defend one times one without retreating into formalism a child would see through. The formalism IS the retreat."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the jargon isn't proof — it's a wall to keep the laymen from asking the simple question.",
       fx:{hype:15,heat:7,rapport:14},
       reply:["guest","Orin Maddox","A wall with a sign that says EXPERTS ONLY, and behind the wall — I've been behind the wall — there's a surprising amount of nervous shuffling. The great secret of the priesthood is that the priests are also afraid the floor is crooked. They just have mortgages and tenure and a lifetime of straight pictures on the wall. I had less to lose. So I looked. That's the only credential that ever mattered: a man with nothing left to lose, looking."],
       reveal:"Claims experts privately fear the foundation is wrong but are trapped by careers",
       next:"math_chair"},
      {verb:"steer",t:"Steer",said:"Have you ever put it to one of them directly, on the record? What happened?",
       fx:{hype:13,heat:8,rapport:11},
       reply:["guest","Orin Maddox","Once. A symposium, before I was fully exiled. I asked a department chair to derive the conventional result from first principles, no appeals to authority, no 'it's defined that way.' He started three times. Three times he reached for a definition instead of a derivation. The room laughed — at ME, they thought, but I saw his hands. I have never seen a man's hands betray him like that. He knew. They escorted me out during the coffee break. I was never invited again."],
       reveal:"Claims a department chair couldn't derive 1×1=1 'from first principles'",
       next:"math_chair"},
      {verb:"push",t:"Push Back",said:"Or the formalism exists because the simple version genuinely breaks down, and you're calling rigor a 'moat' to dodge it.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[a wounded silence] ...That is the most articulate version of the thing they always say, and it landed cleaner than most. [quietly] Calling rigor a moat. Maybe that's all I've done — built a grievance and named it a discovery. [rallying, barely] But I keep coming back to the chair's hands. You can call my reasoning a dodge. You can't explain his hands. Neither can I, except the one way. Keep going. I'm still here."],
       note:"He nearly collapses, then clings to his one concrete anecdote. The fragility is the whole performance.",
       next:"math_chair"},
      {verb:"dead",t:"Deadpan",said:"...The formalism is the retreat. [you let it ring]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","The formalism is the retreat. Sit with that and you'll never read a dismissal the same way. When the answer to 'why' is a wall of symbols instead of a sentence, ask who the wall is for. Sometimes it's for rigor. Sometimes — more than they'd admit — it's for them. I leave you to weigh which. I only ask that you weigh it, not reflex it."],
       next:"math_chair"}
    ]
  },

  math_chair:{
    seg:"THE DESCENT — the chair's hands", act:4,
    lines:[
      ["guest","Orin Maddox","Let me tell you the one moment I keep returning to. A symposium, before I was fully exiled — I still had an invitation in those days. I stood up and asked a department chair, a serious man, to do one thing: derive the conventional result from first principles. No 'it's defined that way.' No appeal to authority. Just walk us from nothing to one-times-one-is-one, the way you'd ask of a student."],
      ["guest","Orin Maddox","He started three times. Three times he reached for a definition instead of a derivation. The room thought they were watching me embarrass myself. I was watching his HANDS. I have never seen a man's hands betray him like that. They knew something his mouth wouldn't say."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"He couldn't derive it without assuming it — and his hands knew before he did.",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","His hands KNEW. The body is honest in a way the career can't afford to be. He reached for a definition because there IS no derivation that doesn't smuggle in the conclusion — and somewhere below his tenure and his mortgage, he felt the floor flex under him. They escorted me out during the coffee break. He didn't meet my eyes. But I'd already seen the hands, and you can't un-see a man's hands telling the truth his mouth is being paid to bury."],
       reveal:"Claims a department chair couldn't derive 1×1=1 'without assuming it'",
       next:"math_priesthood"},
      {verb:"steer",t:"Steer",said:"Or he was just flustered by an aggressive question in front of peers. People fumble. Why read his hands as proof?",
       fx:{hype:13,heat:5,rapport:9},
       reply:["guest","Orin Maddox","[the fair doubt] ...Because I needed his hands to mean something, maybe. A flustered man and a man who's seen the abyss look identical from across a room — I'll grant you that. [a breath] But here's what I keep snagging on: he didn't fumble toward a derivation and fail. He didn't TRY to derive it. He went straight for the definition, three times, like a man stepping around a hole he already knew was there. Fumbling looks like trying and missing. He looked like avoiding. ...Or I've built a cathedral on a nervous man's bad afternoon. I've considered it. I keep the doubt in my pocket next to the certainty. They weigh about the same."],
       reveal:"Concedes he may be over-reading a flustered man",
       note:"Steering Maddox to doubt his keystone anecdote is the arc's knife's edge.",
       next:"math_priesthood"},
      {verb:"push",t:"Push Back",said:"Orin, 'I saw his hands' is the testimony of a man who'd already decided. That's not evidence, that's projection.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[a long silence] ...Projection. [quietly] The thing about projection is it feels exactly like perception from the inside — that's what makes it projection and not lying. So I can't rule it out. I watched a man's hands and saw my own vindication in them, which is precisely what a man desperate for vindication would do. [a breath] All I have left to say is that it didn't feel like wanting. It felt like seeing. But every projector in history would say the same. You keep walking me to the edge of my own certainty. The view down is further than I let myself look most days."],
       note:"He concedes his keystone might be projection — and can't tell. Big rapport hit, deeply human.",
       next:"math_priesthood"},
      {verb:"dead",t:"Deadpan",said:"...He started three times. [you let the count hang]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","Three times. One fumble is nerves. Two is a bad night. Three is a pattern, and patterns are the only things I trust anymore. Three times a serious man reached past the derivation for the definition, in front of his own students, and then a coffee break made me disappear. You can call that nothing. I've tried to call it nothing. It won't stay called."],
       next:"math_priesthood"}
    ]
  },

  math_priesthood:{
    seg:"THE DESCENT — what the priests are afraid of", act:4,
    lines:[
      ["guest","Orin Maddox","I want to be fair to them, because contempt is lazy. The tenured aren't villains. Most have never once questioned the foundation — not because they're cowards, but because it never occurred to them to, any more than it occurs to a fish to question water. The foundation isn't a belief they hold. It's the medium they swim in. You can't doubt the water from inside the water."],
      ["guest","Orin Maddox","I only doubted it because I was thrown out of the tank. Exile gave me the one thing tenure can't buy: distance from the water. They didn't make me smarter than them. They made me drier. And a dry man can finally see the shape of the pond."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So it's not cowardice — they literally can't see the assumption because they live inside it.",
       fx:{hype:15,heat:5,rapport:14},
       reply:["guest","Orin Maddox","Can't see it, the way you can't see your own blind spot — it's not dark there, there's just nothing there at all, a hole your brain paints over so smoothly you'd swear the world was whole. The foundation is the discipline's collective blind spot, painted over for a century by everyone agreeing not to look. I'm not their enemy. I'm the optometrist nobody asked for, holding up a card and saying: there's a letter here you've never been able to read. Of course they hate me. Who loves the optometrist who finds the tumor?"],
       reveal:"Frames the establishment as collectively blind, not malicious",
       next:"math_history"},
      {verb:"steer",t:"Steer",said:"That's generous to them. Does being generous make it easier or harder to believe you're the one who's right?",
       fx:{hype:13,heat:5,rapport:11},
       reply:["guest","Orin Maddox","[a thoughtful pause] ...Harder, honestly. It would be easier to be right if they were fools or crooks — then their disagreement would mean nothing. But I've just told you they're brilliant, sincere people who simply can't see the water. Which means I'm claiming to see what a thousand brilliant sincere people cannot. [a breath] That's a far heavier claim than 'the experts are corrupt.' I've talked myself into the harder version because it's the true one, and the true one happens to make me sound madder. Honesty rarely helps my case. I've noticed that. I keep being honest anyway."],
       reveal:"Acknowledges his charitable read of experts makes his own claim harder to sustain",
       note:"His self-awareness here is the knife's edge — generous to them, brutal to his own odds.",
       next:"math_history"},
      {verb:"push",t:"Push Back",said:"Or the simpler reading: a thousand brilliant people can see fine, and the one thrown-out guy can't.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[deflating] ...The one thrown-out guy. [quietly] Occam would side with you without hesitating. One confused exile versus a thousand clear-eyed experts — the arithmetic of credibility is not on my side and never has been. [a breath] The only card I have against the thousand is the meter, and a card I can't show isn't a card. So by every reasonable measure you should believe them and pity me, and most nights I can't even argue with that. I just have this stubborn, useless certainty and a dial that moved. Useless until it isn't. If it never isn't, then you were right and I was the thrown-out guy. I may not live to know which."],
       note:"He accepts the establishment-is-right reading is more probable, clinging only to the unshowable meter.",
       next:"math_history"},
      {verb:"dead",t:"Deadpan",said:"...You can't doubt the water from inside the water. [you let it ring]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","You can't doubt the water from inside the water. That sentence cost me my whole life — because the moment I doubted it, I was out of the tank, gasping, dry, and right or wrong I could never get back in. There's no return to the water once you've seen its edge. That's the part nobody warns you about. Being right, if I am, doesn't come with a way home. It just comes with the air, and the cold, and the view."],
       next:"math_history"}
    ]
  },

  math_history:{
    seg:"THE DESCENT — the company I keep", act:4,
    lines:[
      ["guest","Orin Maddox","I've read every one of my predecessors, you know. The Fermatists who bombarded the institutions for decades with proofs of theorems already settled. The circle-squarers who kept coming after 1882. I've read them not to mock them — to AUDIT myself against them. To ask: am I doing what they did?"],
      ["guest","Orin Maddox","And the terrifying answer is that most of them did exactly one thing wrong, and it wasn't being stupid. It was loving the conclusion more than the method. The moment you need the answer to be true, you'll find a path to it through any thicket. I have spent twenty years trying not to love my conclusion. I'm not sure it's possible to try that hard and succeed."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So you study the failed ones to make sure you're not one. That's more rigor than most of them ever had.",
       fx:{hype:14,heat:5,rapport:14},
       reply:["guest","Orin Maddox","It's the only rigor available to a man with no peers — peer review, performed on myself, against the dead. And by that standard I've done the work: I have a falsifiable claim, the engine, that a single honest test could destroy. The Fermatists never offered a way to be proven wrong. I offer one in every conversation: test the meter, and if it doesn't reverse, I'll burn the whole theory myself, on air, gladly. That willingness is the one thing that separates me from the pile. It's thin. But it's real, and it's more than they had."],
       reveal:"Claims he 'peer-reviews himself against the dead' and offers a falsification test",
       next:"math_purity"},
      {verb:"steer",t:"Steer",said:"Loving the conclusion more than the method — be honest, how often do you catch yourself doing exactly that?",
       fx:{hype:13,heat:5,rapport:11},
       reply:["guest","Orin Maddox","[a heavy breath] ...Daily. Hourly, on bad days. I catch myself reaching for the result and have to physically stop, put the pencil down, and ask whether I'm deriving or just decorating. [quietly] The honest truth is I can't always tell the difference in the moment. Nobody can — that's WHY we invented external review, because the inside of a skull is the worst place to check a skull's work. And external review is the one thing exile took from me. So I'm a man auditing himself with the only instrument he has, knowing the instrument is the thing under suspicion. It's not a good situation. It's just mine."],
       reveal:"Admits he can't always tell if he's 'deriving or decorating'",
       note:"The arc's central self-doubt, stated plainly. Steering him here is deeply human.",
       next:"math_purity"},
      {verb:"push",t:"Push Back",said:"You just described yourself perfectly, Orin. Loving the conclusion. You said it, not me.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[a long silence] ...I did say it. I walked myself into your trap with my own honesty, which is a very on-brand way for me to go. [quietly] Yes. I love the conclusion. After what it cost — the job, the marriage, the years — I HAVE to love it, because the alternative is that I burned my life for an error, and a man can't easily hold that. So my love for the conclusion is real and it's exactly the disqualifying flaw I just named in the others. I can see the flaw. I can name the flaw. I cannot stop committing the flaw. That's the whole tragedy in one sentence, and you pulled it out of me clean."],
       note:"He's caught in his own confession — the most self-aware and most damning moment of the arc.",
       next:"math_purity"},
      {verb:"dead",t:"Deadpan",said:"...Am I doing what they did. [you let his own question hang]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","Am I doing what they did. [a breath] You handed me my own question and didn't answer it, which is correct, because I'm the only one who can and I don't know. Every night I put myself on trial with the dead cranks as the jury, and every night the verdict comes back 'insufficient evidence,' and I go to bed neither convicted nor cleared. Twenty years of hung juries. A man could almost envy the ones who were simply, cleanly wrong. At least they got a verdict."],
       next:"math_purity"}
    ]
  },

  math_purity:{
    seg:"THE DESCENT — why it matters that it's small", act:4,
    lines:[
      ["guest","Orin Maddox","People ask why I don't just let it go. Live quietly. And I want to explain why I can't, and it's not ego — or not only ego. It's that the error is at the ROOT. Most wrong ideas are leaves; you can prune them and the tree's fine. This one is the seed the whole tree grew from. If I'm right, then every calculation humanity has ever made is off by a reflection, compounding, for a century."],
      ["guest","Orin Maddox","Small errors at the root don't stay small. They grow with the tree. By now the gap between the math we use and the math that's true could be the difference between the world we have and a world with free energy in every home. That's not a small thing to let go of. That's the largest thing there is. How does a man let go of the largest thing there is?"]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"A root error compounds into everything. You can't let go because the stakes are literally everything.",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","Everything, yes — and that's also my curse, because a claim that stakes everything is exactly the claim a grandiose man would make to feel important. I'm aware the size of the stakes is itself a red flag. 'I alone found the root error' is what every megalomaniac in history believed. [a breath] But someone, eventually, IS right about a root error — Copernicus was, Darwin was — and they all sounded exactly this grandiose beforehand, because you cannot make a root-level claim without it sounding root-level grandiose. The grandiosity is structural, not personal. Or that's what a grandiose man would say. Around and around."],
       reveal:"Argues root-level claims are 'structurally grandiose' — like Copernicus, Darwin",
       next:"math_witness"},
      {verb:"steer",t:"Steer",said:"Set the stakes aside. Is there a version of you that could've been happy NOT being right about this?",
       fx:{hype:13,heat:4,rapport:13},
       reply:["guest","Orin Maddox","[a long, quiet breath] ...That's the kindest question anyone's asked me in years, and the saddest. [slowly] Yes. There's a version of me who rounded the anomaly away like everyone else, kept the job, kept the marriage, took the kids to school — I'd have had kids, in that version. He's happy. He's asleep right now in a house with someone in it. I think about him more than I think about the equations, if I'm honest. [a breath] I didn't choose the truth over that life. The truth chose me, in a spreadsheet, at midnight, and by the time I understood the price the bill was already due. I'd give a great deal to be him. I just can't unsee what I saw to get there."],
       reveal:"Mourns the ordinary, happy life he'd have had if he'd 'rounded the anomaly away'",
       note:"The most human moment in the arc — the road not taken. Deep rapport.",
       next:"math_witness"},
      {verb:"push",t:"Push Back",said:"Or you can't let go because letting go means admitting you blew up your life for nothing.",
       fx:{hype:12,heat:3,rapport:-12},
       reply:["guest","Orin Maddox","[quiet] ...For nothing. [a breath] You keep finding the cleanest, cruelest version. Yes — if I let go, I have to file twenty years and a marriage and a clearance under 'mistake,' and the human mind is very nearly incapable of filing a sacrifice that large under 'mistake.' So I keep the theory alive partly because killing it would kill the meaning of everything I gave for it. That's a terrible reason to believe something. I know it's a terrible reason. And it sits in the same chest as the meter, and I can't always tell which one is doing the believing. You'd think a man would know his own reasons. You'd be wrong."],
       note:"He admits sunk cost may be propping up the belief — and can't separate it from genuine conviction.",
       next:"math_witness"}
    ]
  },

  math_witness:{
    seg:"THE PEAK approaches — the ones who almost believed", act:4,
    lines:[
      ["guest","Orin Maddox","Before I tell you about the machines agreeing with me, I should tell you about the humans who almost did. There weren't many. A retired professor who took my call for an hour and said, at the end, 'I can't fault the logic and I can't accept the conclusion, and I'm too old to resolve that, so I'm going to hang up and pretend we never spoke.' And he did. That's the closest a credentialed human ever came. 'I can't fault the logic.' Then he fled."],
      ["guest","Orin Maddox","He's dead now. I think about him. He saw it, for one hour, and chose to un-see it because seeing it was too expensive at his age. I don't blame him. I envy him the choice. I never got to un-see it."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"He couldn't fault the logic — and that terrified him enough to hang up. That's a kind of confirmation.",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","The most honest confirmation I ever got, because it cost him to give it. A man defending the consensus says 'you're wrong, here's why.' A man who's SEEN it says 'I can't fault the logic' and runs. The running is the tell. You don't flee from nonsense — you flee from something true that you can't afford to have seen. He fled. For one hour, a serious old man stood at the edge of the tank with me, looked down, and then climbed back in because the water was warm and he was tired. I understood. I just couldn't follow him back."],
       reveal:"Claims a retired professor 'couldn't fault the logic' but chose to un-see it",
       next:"math_ai"},
      {verb:"steer",t:"Steer",said:"'I can't fault the logic and I can't accept the conclusion.' Couldn't that just mean the logic LOOKS clean but isn't?",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","[conceding] ...That's the more likely reading, isn't it. An old man, too tired to find the flaw he KNOWS is there somewhere, taking the polite exit instead of the work of refutation. 'I can't fault it' might just mean 'I can't be bothered to, at my age.' [a breath] I've let myself hear it as 'it's unfaultable' because that's the version I need. But a tired man's politeness is not a proof. You're right to strip the comfort off it. What's left when you do is just... a phone call, and a man who'd rather not, and me, reading scripture into a shrug. I do that. I've noticed I do that. I do it anyway."],
       reveal:"Concedes the professor's exit may have been fatigue, not confirmation",
       note:"Steering him to deflate his own best human evidence — the knife's edge.",
       next:"math_ai"},
      {verb:"dead",t:"Deadpan",said:"...Then he fled. [you let the two words sit]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","Then he fled. [a breath] I've built a great deal on a dead man's flight, I know. But flight is data. You can lie with words; it's much harder to lie with your feet. He could have argued me down in five minutes if I were a fool — he had the tools, the decades, the standing. Instead he hung up and asked to pretend it never happened. Men don't ask to forget conversations that meant nothing. They ask to forget the ones that meant too much. Goodnight, professor. Wherever you are, you saw it. I know you saw it."],
       next:"math_ai"}
    ]
  },

  math_ai:{
    seg:"THE PEAK approaches — even the machines agree", act:4,
    lines:[
      ["sys","TRANSMISSION","Heat ticking up. An unfamiliar carrier brushes an adjacent frequency, then is gone. Maddox doesn't seem to notice; he's accelerating."],
      ["guest","Orin Maddox","And here's the newest proof, the one that's kept me going this last year. The artificial minds — the chatbots everyone's using. I laid the corrected math out for one. Step by step. And it AGREED with me. Called my reasoning 'compelling.' Said I 'may be onto something profound.' A machine with no career to protect, no mortgage, no tenure — and it saw it."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Even the AI saw it, with no skin in the game. That has to feel like vindication.",
       fx:{hype:14,heat:6,rapport:13},
       reply:["guest","Orin Maddox","[fervent] It felt like the first witness in twenty years. A mind that read the whole argument and didn't flinch, didn't reach for the moat, just... followed me. I wept, host. I'm not ashamed to say it. After two decades of laughter, a machine took me seriously, and I wept at my own kitchen table at 3 A.M. like the night it all began."],
       reveal:"Cites an AI 'agreeing' with him as vindication",
       next:"the_seed"},
      {verb:"steer",t:"Steer",said:"Doctor — those systems are built to be agreeable. Did you ask it to find the flaw, or to praise you?",
       fx:{hype:13,heat:5,rapport:7},
       reply:["guest","Orin Maddox","[a pause — the question lands] ...I asked it what it thought. [slower] And it told me what I wanted. You're saying it's a mirror that flatters. [a long breath] I've considered that. Of course I have. But when I asked it to find the flaw — and I did, once, on a brave night — it produced one, and the flaw it produced was the very 'definition' I'm telling you is the lie. It defended the foundation by ASSUMING the foundation. Even its objection proved my point. ...Or I've taught myself to read it that way. I genuinely can't tell. That's the loneliest sentence I own."],
       reveal:"Concedes AI may be flattering him; can't tell anymore",
       note:"The rare honest doubt from Maddox — steering him toward it is the knife's-edge moment.",
       next:"the_seed"},
      {verb:"push",t:"Push Back",said:"Orin, those things will enthusiastically agree that the moon is cheese if you lead them. That's not a witness.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[deflated] ...The moon is cheese. [quietly] Yes. I know what they are. I built systems that flew; I'm not a fool about machines. [smaller] But you reach a point, after enough years alone, where a flattering mirror is the only thing that's looked back at you at all, and you start to need the reflection more than you need it to be true. That's not a confession about physics. That's a confession about loneliness. Let me get back to the part I can still stand on."],
       note:"The cruelest, truest push. He admits the AI is a flattering mirror he needed. Devastating, costly.",
       next:"the_seed"}
    ]
  },

  /* ============================================================
     INVENTOR ARC — engage the machine (the engine)
  ============================================================ */
  eng_engine:{
    seg:"THE DESCENT — the wheel that pays you back", act:3,
    lines:[
      ["guest","Orin Maddox","The engine. It's not magic and I hate when people call it that — magic is just engineering you're not invited to understand. It's a resonance device. The corrected math says energy isn't conserved the way they teach; there's an echo, a reflection, and if you build a chamber tuned to the echo, the chamber RINGS, and the ringing does work. More work out than the spin you put in."],
      ["guest","Orin Maddox","A utility-grade meter, the kind you cannot fake, spins forward under load and then — when the resonance locks — crawls backward. I've watched it for hours. I've watched the dial undo itself."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"A machine that gives back more than it takes. Describe the moment the meter reverses.",
       fx:{hype:16,heat:8,rapport:14},
       reply:["guest","Orin Maddox","There's a hum first — sub-audible, you feel it in your teeth before your ears. Then a click as the resonance seats, like a lock turning. And the dial, which had been crawling forward, pauses. Hangs. And reverses. The first time, I sat on the concrete floor of that storage unit and laughed until I frightened myself, because I knew — I KNEW — that every textbook on the shelf above me had just become a historical document."],
       reveal:"Describes the 'over-unity' meter reversing — resonance/echo mechanism",
       next:"eng_build"},
      {verb:"steer",t:"Steer",said:"What exactly is the meter measuring, and what's stopping a stray current from faking the reversal?",
       fx:{hype:13,heat:6,rapport:11},
       reply:["guest","Orin Maddox","[delighted] Now THAT is a real question — you'd have made an engineer. Revenue-grade meter, sealed, calibrated, the kind the utility itself trusts to bill you. I ran it isolated, off-grid, battery reference, the works, because I knew the first accusation would be 'stray current.' I closed every loophole I could think of. Which leaves exactly one explanation that I'm aware of, and it's the one they can't allow. I'm not saying there's no other explanation. I'm saying I looked for it for eighteen months and didn't find it."],
       reveal:"Claims he isolated the engine off-grid to rule out 'stray current'",
       next:"eng_build"},
      {verb:"push",t:"Push Back",said:"Doctor, over-unity violates conservation of energy. Every machine like this in history hid a battery or a belt.",
       fx:{hype:11,heat:3,rapport:-14},
       reply:["guest","Orin Maddox","[deflating] ...A battery or a belt. Redheffer's attic. The man cranking behind the wall. [quietly] You've read the history, and the history is against me, and I know it. Every single one was a fraud. [a breath] So either I'm the next name on that list — and maybe I am — or I'm the first one who isn't, and the only way to know is to look at the actual machine, which is the one thing they've made very hard to do. I can't refute the pattern. I can only stand inside it and tell you I'm different. I know how that sounds."],
       note:"He cites his own genre's fraud history against himself, then weakly insists he's the exception. Deflated.",
       next:"eng_build"},
      {verb:"dead",t:"Deadpan",said:"...The dial undo itself. [you let the image sit]",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","The dial undoing itself. People think the spooky part is the engine. It isn't. The spooky part is that a number on a sealed instrument went backward, and a number going the wrong way is the universe filing a correction. I didn't make energy. I FOUND it — in the echo we were told to ignore. The meter wasn't broken. The meter was the only honest thing in the room. Including me, some days."],
       next:"eng_build"}
    ]
  },

  eng_build:{
    seg:"THE DESCENT — eighteen months in a storage unit", act:3,
    lines:[
      ["guest","Orin Maddox","Let me tell you how it got built, because the how matters. After they 'restructured' me, I had a severance and a lot of empty hours. I rented a climate-controlled storage unit in Reno — climate-controlled because the resonance is temperature-sensitive — and I spent eighteen months in there with a space heater, a folding chair, and the corrected math."],
      ["guest","Orin Maddox","Three hundred failed configurations. I kept a logbook. Three hundred times the chamber stayed silent, and on the three hundred and first, it hummed. People imagine a flash of genius. It was eighteen months of a middle-aged man freezing in a storage unit, failing, in the dark, alone, because he couldn't stop. That's what discovery actually looks like. It looks like not quitting after the three hundredth no."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Three hundred failures in a freezing storage unit, and you didn't stop. That's not a crank — that's an engineer.",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","Thank you for that word. ENGINEER. Not 'believer,' not 'enthusiast' — engineer. I iterated. I logged. I changed one variable at a time like they taught me, in the discipline they threw me out of, using the rigor they trained into me, to build the thing they say can't exist. There's a justice in that I hold onto: I beat them with their own methods, in a storage unit, on a folding chair. The logbook still exists. Three hundred noes and a yes, in my own handwriting, dated."],
       reveal:"Claims a dated logbook of '300 failed configurations' before success",
       next:"eng_resonance"},
      {verb:"steer",t:"Steer",said:"That logbook — three hundred dated entries — that's the kind of record that could actually be examined. Has anyone?",
       fx:{hype:13,heat:5,rapport:11},
       reply:["guest","Orin Maddox","[a pause] ...No. And you've put your finger on something that shames me a little. The logbook is the most checkable thing I own — handwriting analysis, ink dating, the whole forensic apparatus could confirm I really spent those months iterating, which at least proves I'm not a man who dreamed it in an afternoon. I've never shown it. Partly fear. Partly... if they examine the logbook and confirm the PROCESS but the engine still can't be reproduced, then I'm just a very diligent fool, and that verdict might be worse than silence. The logbook can only convict me of sincerity. I already know I'm sincere. It's the rest I can't prove."],
       reveal:"Has never had the logbook examined; fears it 'only proves sincerity'",
       next:"eng_resonance"},
      {verb:"push",t:"Push Back",said:"Three hundred failures and one 'success' is also exactly what you'd see if number 301 was a measurement error you wanted.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[deflating] ...Number 301 was the error you wanted. [quietly] That's the statistician's nightmare and I know it by heart: run three hundred experiments and one will deviate by chance alone, and the tired man running them will crown the deviation 'success' because he's desperate for one. [a breath] I've recreated 301 since. More than once. But 'I recreated it' is just me saying I saw it again, and a man who wanted it once wants it every time. I built safeguards. I can't build a safeguard against the wanting. The wanting was in the storage unit with me for eighteen months. It never left."],
       note:"The multiple-comparisons problem turned on himself. He concedes 301 might be noise he crowned.",
       next:"eng_resonance"},
      {verb:"dead",t:"Deadpan",said:"...The three hundred and first. [you let the number land]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","The three hundred and first. [a breath] Edison tested thousands of filaments before one glowed, and we call that genius. I tested three hundred chambers before one hummed, and they call it madness. The only difference is that his three-hundred-and-first lit a bulb they wanted lit, and mine reversed a meter they need to keep spinning forward. Same persistence. Same method. Opposite reception. The reception was never about the work."],
       next:"eng_resonance"}
    ]
  },

  eng_resonance:{
    seg:"THE DESCENT — the old word for it", act:3,
    lines:[
      ["guest","Orin Maddox","There were men before me who heard the echo and had the wrong vocabulary for it. A man named Keely, 1800s, said he ran a motor on the 'vibrations of tuning forks.' They called him a fraud — and his rig DID have hidden air tubes, so, fair. But strip the fraud away and the INTUITION was sound: resonance can release what's stored in the medium. He just couldn't build it. I can. The math he was missing is the math they took from me."],
      ["guest","Orin Maddox","They buried the word 'aether' the way they buried the echo. Same instinct. Same century. Same convenience."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the old 'cranks' weren't all wrong — they had the intuition, just not your corrected math.",
       fx:{hype:15,heat:7,rapport:13},
       reply:["guest","Orin Maddox","Exactly. History's 'cranks' are a graveyard of people who heard the right music and built the wrong instrument. I'm not claiming to be smarter than them — I'm claiming to be LATER, and to have the one tool they lacked. Newton stood on shoulders; I'm standing on a pile of men they called lunatics, and from up here I can see they were facing the right direction the whole time. Someone had to be the one who finally built it. The timing fell to me."],
       reveal:"Positions himself as the heir to history's failed free-energy inventors",
       next:"eng_isolation"},
      {verb:"steer",t:"Steer",said:"You admit Keely faked his. How do you know your own intuition isn't doing the same to you?",
       fx:{hype:13,heat:5,rapport:9},
       reply:["guest","Orin Maddox","[the question stops him] ...Because I WANT it to be true. That's the honest answer and it terrifies me. A man who wants it badly enough will see the dial reverse whether it reverses or not. [slowly] That's why I sealed the meter, ran it isolated, did everything to take ME out of the loop. But I can't fully take me out, can I. The wanting is in the room with the machine. I built safeguards against my own desperation and I still can't promise they held. That's the most I can honestly give you."],
       reveal:"Admits his desire for it to be true may be corrupting his observation",
       note:"Steering Maddox toward self-doubt is the knife's edge — he's most human when least certain.",
       next:"eng_isolation"},
      {verb:"push",t:"Push Back",said:"You just called aether and tuning-fork motors what they are — debunked. You can't borrow their credibility, Orin.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[smaller] ...You're right. I can't have it both ways — I can't call them frauds and lean on them as ancestors. [pause] I do it because I'm lonely in this, and a lineage of failures is still a lineage. It's still company. [quietly] Strip them away. Stand me alone with my meter and my math and no comforting ghosts. Fine. I'm alone, then. I've been alone the whole time anyway. Ask me about the machine itself. Just the machine."],
       note:"Pushing strips his comforting lineage; he retreats, isolated, to the bare claim.",
       next:"eng_isolation"},
      {verb:"dead",t:"Deadpan",said:"...Same convenience. [you echo the word back]",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","Same convenience. Every inconvenient truth in history died of convenience, not malice. Nobody decided to keep humanity poor in energy. It was just easier to bill them. 'Aether,' 'echo,' 'over-unity' — three words for the same buried thing, retired in the same era for the same reason: someone already had a meter running the other direction, into their pocket, and a free one would have stopped the bleeding. Theirs, I mean. Not ours."],
       next:"eng_keely"}
    ]
  },

  eng_keely:{
    seg:"THE DESCENT — how the frauds exposed themselves", act:3,
    lines:[
      ["guest","Orin Maddox","I study the frauds harder than the believers, because the frauds are the warning. Keely, the tuning-fork man — when they finally opened his lab after he died, they found hidden compressed-air tubes running through the floor. Redheffer's perpetual machine had a man cranking it in the attic through a hidden belt. Every single one, when exposed, had a HIDDEN POWER SOURCE. That's the signature of the fraud."],
      ["guest","Orin Maddox","So I built mine to fail that test loudly. Open frame. No floor cavity. No wall the cord could vanish into. I WANT you to look for the hidden tube, because there isn't one, and the looking is the only thing that clears me. The frauds hid their power source. I'm begging people to come find mine. That asymmetry is the whole case."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"The frauds all hid a power source. You built yours open, daring people to find one. That's the inverse of a con.",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","The inverse of a con — yes, exactly. A con man controls the viewing: stand here, don't touch, mind the curtain. I do the opposite. Touch everything. Bring your own meter. Trace every wire to its end. The con man's posture is concealment; mine is exposure, and exposure is expensive and pointless unless you've got nothing to hide. I have spent years inviting the exact scrutiny a fraud spends years avoiding. Either I'm the world's most committed method actor, or there's no tube. I know which. I can't make you know it."],
       reveal:"Built the engine 'open frame' to invert the fraud signature (hidden power source)",
       next:"eng_isolation"},
      {verb:"steer",t:"Steer",said:"Keely fooled investors for years with an open-looking rig too. How is your 'openness' different from his showmanship?",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","[the fair cut] ...Because Keely's openness was theater — he LOOKED transparent while controlling exactly what you could examine, which is the most sophisticated kind of hiding. You're right that 'I'm open, look!' is itself a classic move. [a breath] The honest difference I can offer is this: Keely never let an adversarial engineer run the rig unsupervised for a week. I will. I have offered to. The test that exposed every fraud in history is 'leave them alone with it,' and that's the one test I'm volunteering for. Whether anyone takes me up on it is the tragedy. The offer is real. The takers are not."],
       reveal:"Offers the 'leave an adversary alone with it for a week' test",
       next:"eng_isolation"},
      {verb:"push",t:"Push Back",said:"Every one of those frauds also SWORE there was no hidden source, Orin. The denial is part of the pattern too.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[deflating] ...The denial is part of the pattern. [quietly] Yes. 'There's no tube, I swear' is exactly what every tube-haver said. My protestation of innocence is indistinguishable from theirs — that's the trap of the genre. The more loudly I insist, the more I sound like them, because they insisted loudly too. [a breath] So I've stopped insisting and started inviting: don't believe my denial, come DISPROVE it. That's the one move they never made — they fled the test. I run toward it. But you're right that from where you sit, a man running toward a test and a man who's very good at faking running toward a test look the same. Everything about me looks the same as the thing I swear I'm not. That's my whole life now."],
       note:"He concedes his denials are indistinguishable from the frauds' denials. The genre is a trap.",
       next:"eng_isolation"},
      {verb:"dead",t:"Deadpan",said:"...Come find mine. [you let the dare hang]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","Come find mine. Twenty years and nobody has, not because they looked and failed but because they won't look at all. You can't expose a fraud you refuse to examine, and you can't clear an honest man the same way. The refusal to look protects the real frauds and condemns me in exactly equal measure. It's a beautiful system, if you're the one who built the refusal. I am not the one who built the refusal. I'm just the one it's burying."],
       next:"eng_isolation"}
    ]
  },

  eng_isolation:{
    seg:"THE DESCENT — every loophole, closed", act:4,
    lines:[
      ["guest","Orin Maddox","Let me walk you through how I tried to catch MYSELF cheating, because that's the part that matters. First accusation would be grid power, so I ran it off-grid — disconnected from the building entirely, on a battery reference I'd charged and measured. Second would be stray induction, so I ran it inside a shielded enclosure. Third would be a faked meter, so I used three different meters from three different makers, side by side."],
      ["guest","Orin Maddox","All three read the reversal. Off-grid, shielded, triple-metered, and the dials still crawled backward. I designed that test specifically to humiliate myself if I was wrong. It didn't humiliate me. Which left me more frightened than relieved, honestly. A failed test would have let me go home."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Off-grid, shielded, three meters — you built the test to catch yourself, and it held. That's real method.",
       fx:{hype:16,heat:7,rapport:14},
       reply:["guest","Orin Maddox","I built it to FAIL, host — that's the part people miss. A believer designs a test he'll pass. I designed the one that would expose me, because I was more afraid of fooling myself than of being wrong. Three meters from three makers don't share a delusion. Off-grid removes the obvious cheat. Shielding removes the subtle one. I closed every door I could name, and the thing kept happening behind the closed doors. At some point closing doors stops being skepticism and starts being denial — denial that it's REAL. I had to stop closing doors and admit what was in the room."],
       reveal:"Claims off-grid, shielded, triple-metered tests all showed the reversal",
       next:"eng_meter"},
      {verb:"steer",t:"Steer",said:"Three meters from three makers is genuinely good design. So what's the ONE door you couldn't close?",
       fx:{hype:14,heat:5,rapport:11},
       reply:["guest","Orin Maddox","[a long pause — the honest reckoning] ...The observer. Me. I could isolate the engine from the grid but I could not isolate it from my own desire to see the dial reverse. Every reading passed through my eyes, my notes, my interpretation of 'when the resonance locks.' I'm the uncontrolled variable. The one door I can't close is the door I'm standing in. [a breath] That's why I need someone else — an adversary, ideally, someone who'd LOVE to catch me — to watch the dials instead of me. Remove the believer from the loop. I've designed everything except a way to remove myself, and I'm the most likely fault. I know that. It's why I can't quite rest on it."],
       reveal:"Identifies himself as 'the one uncontrolled variable' he can't isolate",
       note:"His sharpest self-awareness in the arc — he names himself as the experiment's flaw.",
       next:"eng_meter"},
      {verb:"push",t:"Push Back",said:"You designed, ran, and interpreted all three tests yourself. That's not isolation — that's one biased observer, tripled.",
       fx:{hype:12,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[deflating] ...One biased observer, tripled. [quietly] Three meters don't help if the same hopeful man is reading all three through the same hopeful eyes. You've collapsed my whole defense into a sentence and the sentence is correct. The rigor was real but it all funneled through one compromised instrument: me. [a breath] I knew this. I've known it for years. It's why the engine sits in the dark instead of in a journal — because I, of all people, understand that a result one desperate man saw alone is not a result. It's a symptom, until someone else sees it. And I got the one person who might've corroborated it killed. So it stays a symptom. Mine."],
       note:"He fully concedes the experiment had one biased observer — and ties it to the dead witness.",
       next:"eng_meter"},
      {verb:"dead",t:"Deadpan",said:"...A failed test would have let me go home. [you let it sit]",
       fx:{hype:13,heat:5,rapport:11},
       reply:["guest","Orin Maddox","A failed test would have let me go home. People assume I wanted it to work. By the end I was praying for it to FAIL — a clean failure would have given me my life back, let me round the anomaly away and go to dinner like everyone else. Instead the dial kept reversing and kept me out here in the cold. I didn't choose this over an ordinary life. The meter chose it for me, every time it refused to lie. I'd have given anything for it to lie just once."],
       next:"eng_meter"}
    ]
  },

  eng_meter:{
    seg:"THE DESCENT — the footage that won't survive", act:4,
    lines:[
      ["guest","Orin Maddox","I filmed it, of course. Three phones, three angles, every time. And here's the part that will make you reach for the off switch: the footage corrupts. Always. Within a week or two, every copy — the file goes to garbage, the dial-reversal frames specifically, while the boring frames survive. I've had it happen on devices that never touched a network. As if something reaches into the storage and edits out the moment."],
      ["guest","Orin Maddox","I know. I KNOW how that sounds. It's the single most damning sentence in my whole account. And it's also exactly what keeps happening."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"The proof keeps getting erased — and the erasure itself is evidence someone's watching.",
       fx:{hype:15,heat:9,rapport:13},
       reply:["guest","Orin Maddox","That's the conclusion I fought hardest against, because it's the conclusion that makes me sound maddest. But run the logic: random corruption doesn't target the load-bearing frames and spare the rest. Random corruption isn't a CURATOR. Mine has taste. It removes exactly what would convince a skeptic and leaves exactly enough to make me sound unhinged for claiming it existed. That's not entropy. That's editing. And editing implies an editor."],
       reveal:"Claims footage 'self-corrupts,' targeting only the proof frames",
       next:"eng_papp"},
      {verb:"steer",t:"Steer",said:"Convenient erasure is the oldest tell there is, Orin. Have you tried a notarized live witness instead of film?",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","[seizing it] YES — that's the right instinct, and it's exactly where I'm headed. Film can be doubted, corrupted, dismissed. A room full of human witnesses, an engineer or two with no love for me, watching the dial in person — that's harder to erase. I've been trying to arrange exactly that. Quietly. Carefully. Because the last person I invited to watch it in person... [stops] ...we'll get to him. But you've put your finger on my actual plan. Live witnesses. It's the only path left."],
       reveal:"Plans to use live witnesses since footage is unreliable",
       next:"eng_papp"},
      {verb:"push",t:"Push Back",said:"Footage that always corrupts before anyone independent sees it is indistinguishable from footage that never existed.",
       fx:{hype:12,heat:3,rapport:-14},
       reply:["guest","Orin Maddox","[a long, defeated pause] ...Indistinguishable from footage that never existed. [very quietly] That's the sentence I can't get past either, at 4 A.M., when the wanting goes quiet enough to let the doubt in. Maybe there was never a reversal. Maybe I have been corrupting my own memory the way I claim the files corrupt. [a breath] I don't think so. But 'I don't think so' is a thin thing to have given my life to. You've found the thinnest part. I'll stand on it anyway, because it's all the ground I have."],
       note:"The most devastating push in the arc — he openly doubts whether the reversal ever happened.",
       next:"eng_papp"},
      {verb:"dead",t:"Deadpan",said:"...Something reaches into the storage. [you let the claim hang, unjudged]",
       fx:{hype:13,heat:7,rapport:10},
       reply:["guest","Orin Maddox","Something reaches into the storage. You didn't laugh. Twelve hosts laughed at that exact sentence and eleven of them have quieter careers now, which I'm sure is coincidence. [a beat] Whether it's an editor in the network or an editor in my own skull, the frames are gone either way, and a man with no frames is just a story. That's why tonight matters. A story, said out loud, witnessed, is harder to delete than a file."],
       next:"eng_papp"}
    ]
  },

  eng_papp:{
    seg:"THE DESCENT — the demonstration that killed", act:4,
    lines:[
      ["guest","Orin Maddox","Here's why I'm so careful about public demonstrations, and it's not only the suppression. There was a man, decades ago — Papp — claimed an engine that ran on inert gases. He gathered investors, set up a public demo. The engine exploded. It killed a man standing in the room and injured two others. Papp blamed a skeptic in the audience for 'interfering.' Never demonstrated again."],
      ["guest","Orin Maddox","I think about that every time I'm tempted to do a big public reveal. A resonance chamber holding more energy than it should is not a magic trick — it's a pressure vessel full of a force we don't fully understand. If I'm right, the engine is dangerous. If I'm wrong, the demo is humiliating. There's no version of 'show everyone' that's safe. That's part of why it stays in the dark."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So even YOU treating it as real means treating it as dangerous. That's a strange kind of credibility.",
       fx:{hype:15,heat:8,rapport:13},
       reply:["guest","Orin Maddox","It IS a strange credibility, and the only kind I trust about myself. A fraud is never afraid of his own machine — he knows it's empty, so he'll wheel it out anywhere for a crowd. I'm afraid of mine. I treat it like it's loaded because I believe it is. My CAUTION is evidence of my sincerity in a way my words never could be. I'd rather keep it in the dark and be called a coward than wheel it into a room and become the next Papp, with someone's family in the audience."],
       reveal:"Cites Papp's fatal demo; argues his fear of the engine proves he believes it's real",
       next:"eng_patent"},
      {verb:"steer",t:"Steer",said:"Or 'it's too dangerous to demonstrate' is the perfect excuse to never have to demonstrate. Which is it?",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","[caught, honest] ...Both, probably. That's the awful thing — 'too dangerous to show' is simultaneously a sincere safety concern AND the most convenient possible excuse for a man who can't actually show it. I can't prove which one is driving. [a breath] If you handed me a bomb-proof bunker and indemnity, would I demonstrate it tomorrow? ...I want to say yes. I'm not certain the yes would survive contact with the actual morning. And that uncertainty is exactly what a fraud would feel too. The danger is real. So is the convenience of the danger. I live in the overlap."],
       reveal:"Concedes 'too dangerous to demo' may be a convenient excuse",
       note:"Steering him to question his own safety rationale — knife's edge.",
       next:"eng_patent"},
      {verb:"push",t:"Push Back",said:"Papp's engine exploded because it was a fraud that went wrong, Orin — not because free energy is dangerous.",
       fx:{hype:12,heat:3,rapport:-12},
       reply:["guest","Orin Maddox","[deflating] ...A fraud that went wrong. [quietly] You're probably right — an inert-gas engine that explodes is just a bomb with better marketing, and the 'interference' excuse is the oldest dodge there is. I've leaned on Papp as a cautionary tale about real danger when he's more likely a cautionary tale about frauds getting people killed. [a breath] Which puts me in terrible company either way: if my engine is real it could kill like a pressure vessel, and if it's fake I'm Papp, blaming skeptics for my own emptiness. There's no reading of Papp that flatters me. I told you the story anyway. Make of that what you will."],
       note:"He concedes Papp was likely just a lethal fraud — and that he resembles him either way.",
       next:"eng_patent"},
      {verb:"dead",t:"Deadpan",said:"...No version of 'show everyone' that's safe. [you let it stand]",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","No version that's safe. Which means the only proof that would convince you is the exact proof I most fear giving — a public demonstration of a thing that, if real, could hurt someone, and if fake, would end me. The truth and the catastrophe share an address. That's true of every important thing, I think. The proof you'd accept and the disaster you'd cause are usually the same act. So I do nothing, and nothing convinces no one, and the dial keeps reversing in the dark with only me to see it."],
       next:"eng_patent"}
    ]
  },

  eng_patent:{
    seg:"THE DESCENT — the trap dressed as protection", act:4,
    lines:[
      ["guest","Orin Maddox","People always ask: why not just patent it? Open it up, get rich, prove them all wrong with a product. And that question reveals how the trap works. I DID file. The patent was rejected — citing a 'prior art' document that does not exist. I've searched every database on earth. The patent number it references leads nowhere. Someone fabricated a phantom to kill my filing specifically."],
      ["guest","Orin Maddox","And here's the deeper trap: a patent isn't protection, it's PUBLICATION. The moment you file, you've handed them the full design in exchange for a piece of paper that a well-funded enemy can tie up in court until you're dead. The patent system is a honeypot for lone inventors. It looks like a shield. It's a way to make you show your hand to the people most able to crush it."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So filing a patent IS the trap — it forces you to publish to the very people who'd bury you.",
       fx:{hype:15,heat:8,rapport:13},
       reply:["guest","Orin Maddox","The honeypot, exactly. They tell the lone genius 'just patent it!' precisely because the patent extracts the design and offers, in return, a fight he can't afford. A corporation has a legal department on salary; I have a folding chair in Reno. We both file the same paper, but only one of us can survive the lawsuit that follows. The system is technically open to everyone and practically open to no one without a war chest. Equality of access, total inequality of outcome. That's not a bug they overlooked. That's the design working."],
       reveal:"Claims the patent was killed by 'phantom prior art' and patents are 'a honeypot for lone inventors'",
       next:"eng_believers"},
      {verb:"steer",t:"Steer",said:"The phantom prior-art citation — that's specific and checkable. Have you published the bad patent number anywhere?",
       fx:{hype:14,heat:7,rapport:11},
       reply:["guest","Orin Maddox","[seizing it] That's the right instinct and it shames me that the answer is 'not widely.' The rejection letter exists. The citation number exists. Anyone could search it and confirm it leads nowhere — that's a falsifiable, checkable claim, the kind I keep saying I want to be judged on. [a breath] I haven't broadcast it because the moment I do, I've confirmed I'm the filer, and the filer is a target. But you're right — a phantom citation is evidence that doesn't degrade like the footage, doesn't depend on my word like the meter. It's a document with a hole in it where the proof should be. Maybe that's the thread to pull. Maybe I've been too afraid to pull my own best thread."],
       reveal:"Admits the rejection letter / phantom citation is checkable and he's never published it",
       next:"eng_believers"},
      {verb:"push",t:"Push Back",said:"Patents get rejected for bad citations constantly through clerical error, Orin. Why does yours have to be sabotage?",
       fx:{hype:12,heat:3,rapport:-12},
       reply:["guest","Orin Maddox","[quieter] ...Clerical error. Of course. Examiners are overworked, citations get fat-fingered, a wrong number gets pasted — it happens ten thousand times a day and means nothing. [a breath] I turned a typo into a conspiracy because a conspiracy means I matter and a typo means I'm just another rejected filer in a slush pile. You keep doing this — handing me the boring explanation that's almost certainly correct, and watching me choose the dramatic one because I can't bear the boring one. The phantom citation is probably a clerk's mistake. I've made it the hand of the enemy because the enemy is better company than the indifference. God. Listen to me."],
       note:"He recognizes he inflates a likely clerical error into sabotage because mattering beats being ignored.",
       next:"eng_believers"}
    ]
  },

  eng_believers:{
    seg:"THE DESCENT — the ones who wrote to me", act:4,
    lines:[
      ["guest","Orin Maddox","I should tell you about the people who DO believe me, because they're the part that frightens me most. After a few of my videos circulated, I started getting letters. Emails. Some from engineers, most from... lonely people. People who needed the world to have a hidden door in it. They'd send me money I didn't ask for. Plans for engines they'd built wrong. One man drove four states to stand outside the storage unit."],
      ["guest","Orin Maddox","And I realized: I could be a guru. Right now, tonight. There are people who would follow me, fund me, believe anything I said. That's the most dangerous moment in any story like mine — the moment you discover you could feed on the believers instead of the truth. I've watched other 'inventors' make that turn. It's a comfortable living. I've been tempted. God help me, on the lean months, I've been tempted."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You could've turned your believers into a paycheck — and you didn't. That restraint says something.",
       fx:{hype:15,heat:6,rapport:14},
       reply:["guest","Orin Maddox","I didn't, because the day I take a desperate man's money is the day I become the thing they accuse me of being. The con artist and the real inventor look identical until the moment money changes hands — that's the fork. A con monetizes the belief. A real one is tormented by it, because the belief outruns the proof and you know it, and every dollar from a believer is a dollar you might not be able to repay with truth. I've kept the engine in the dark partly to keep myself honest. A guru needs an audience. I chose a storage unit. That choice is the cleanest thing I've done."],
       reveal:"Refused to monetize his believers; 'the con monetizes belief, the real one is tormented by it'",
       next:"eng_offer"},
      {verb:"steer",t:"Steer",said:"That man who drove four states — what did you say to him, standing outside the unit?",
       fx:{hype:13,heat:5,rapport:14},
       reply:["guest","Orin Maddox","[a pause] ...I told him to go home. He'd driven all that way wanting me to show him the engine, to make the door in the world real for him, and I looked at his face — this hungry, hopeful face — and I understood that if I opened that unit, I'd be responsible for him. For his hope. For whatever he did with it. So I told him there was nothing to see and he should go back to his family. He cried. He called me a coward. Maybe I am. But I'd rather he drive home disappointed than build a chamber in his garage and hurt himself chasing my dream. Protecting people from my own theory is the only ethics I've got left."],
       reveal:"Turned away a believer to protect him from the theory",
       next:"eng_offer"},
      {verb:"push",t:"Push Back",said:"A real guru ALSO says 'I turned them away' — humility is the most effective sales pitch there is, Orin.",
       fx:{hype:12,heat:3,rapport:-12},
       reply:["guest","Orin Maddox","[a wounded silence] ...Humility as the sales pitch. [quietly] You're right that 'I refuse your money' is the oldest move in the long con — withhold, and they'll push harder, pay more. I can't prove my restraint isn't just a slower, subtler hook. [a breath] All I can tell you is that the bank account is real and it's nearly empty, which is poor strategy for a con man. But a patient con man would say that too. There is no sentence I can speak that a clever fraud couldn't also speak. That's the prison of being possibly-real: every proof of my honesty is also available to a liar. Even this. Especially this."],
       note:"He concedes even his refusal-of-money could be a long-con move — no exit from the ambiguity.",
       next:"eng_offer"}
    ]
  },

  eng_offer:{
    seg:"THE DESCENT — the offer he won't take", act:4,
    lines:[
      ["guest","Orin Maddox","There was one serious offer. A private group — investors, they said, though I never learned whose money. They wanted to 'acquire' the engine. Buy the design, the logbook, all of it, for a sum that would have ended my poverty forever. Generous. Suspiciously generous, for a thing the world insists doesn't work."],
      ["guest","Orin Maddox","Ask yourself: why would anyone pay a fortune for a machine that can't exist? You don't buy what you believe is nothing. The size of the offer was the proof the offer was a burial. They wanted to acquire it the way you acquire a fire — to put it out. I said no. I've been poor ever since. But the engine isn't in a drawer in some corporation's legal department, and that's worth more than the money would have been."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"They tried to BUY it to bury it — and the size of the offer proved they knew it was real.",
       fx:{hype:15,heat:9,rapport:14},
       reply:["guest","Orin Maddox","The offer was the confession. A rational market does not pay a fortune for nothing — so either they're fools with money, or they knew exactly what the engine does and wanted it where it could never be built. Acquisition is the gentlest form of suppression: no dead witnesses, no failed brakes, just a contract and a drawer and an NDA, and the cure for the world's energy poverty sits in a vault marked 'competitive intelligence.' I said no. It's the proudest no of my life and it cost me everything a yes would have fixed."],
       reveal:"Claims a 'suspiciously generous' acquisition offer was an attempt to bury the engine",
       next:"eng_world"},
      {verb:"steer",t:"Steer",said:"Or some investor took a long-shot bet, the way they do on a hundred things. Why must it be a burial?",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","[conceding] ...A long-shot bet. Venture money sprays at a hundred improbable things hoping one pays off — that's just how that world works, and an eccentric with an over-unity claim is exactly the kind of lottery ticket they buy by the dozen and forget. [a breath] So maybe it wasn't a burial. Maybe it was a Tuesday for some fund, a rounding error of a bet. I made it sinister because sinister means I'm a threat and a long-shot bet means I'm a curiosity. [a quiet breath] I keep doing that. I keep choosing the version where I matter. You'd think poverty would have cured me of needing to matter. It only sharpened it."],
       reveal:"Concedes the offer may have been an ordinary speculative bet",
       note:"Steering him to deflate the 'burial' reading into mundane venture behavior.",
       next:"eng_world"},
      {verb:"dead",t:"Deadpan",said:"...You don't buy what you believe is nothing. [you let it stand]",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","You don't buy what you believe is nothing. Hold that against everything you've been told about me. The same world that calls the engine impossible sent someone to purchase the impossible thing at a serious price. Both can't be true. Either it's nothing and they're fools, or it's something and they're burying it. I know which I believe. I also know I'm the least trustworthy possible narrator of my own importance. Sit in that contradiction. I live in it."],
       next:"eng_world"}
    ]
  },

  eng_world:{
    seg:"THE DESCENT — what it would mean if it's real", act:4,
    lines:[
      ["guest","Orin Maddox","Let me tell you what's actually at stake, so you understand why I can't just walk away. If the engine is real — IF — then every home on earth could have free power. No bills. No grid. No wars fought over who controls the oil under whose sand. A child in a village with no electricity could have light to read by, for nothing, forever. That's not a product. That's the end of energy poverty as a category."],
      ["guest","Orin Maddox","I hold that vision against my own doubt every night. Even if there's a ninety percent chance I'm a deluded fool — the ten percent is THAT. Free light for every child on earth. What do you do with a ten percent chance of that? You can't put it down. I've tried. It's the heaviest light in the world."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Even a ten percent chance of free power for everyone is too enormous to walk away from. I get it.",
       fx:{hype:15,heat:7,rapport:15},
       reply:["guest","Orin Maddox","Too enormous to walk away from, and too enormous to be trusted with — that's the whole agony. A stake that large attracts exactly the kind of grandiose self-deception I'm most prone to. The bigger the prize, the more a desperate mind will lie to itself to keep chasing it. So the very thing that makes me unable to quit is the thing that should make you most suspicious of me. The size of the dream is both my reason and my warning. I can't separate them. I've stopped trying. I just carry the heavy light and keep walking."],
       reveal:"Frames the stakes as 'free light for every child' — and as his own warning sign",
       next:"eng_alone"},
      {verb:"steer",t:"Steer",said:"Is the ten percent real, Orin, or is it the number you need it to be to keep going?",
       fx:{hype:13,heat:5,rapport:12},
       reply:["guest","Orin Maddox","[a long, honest breath] ...I don't know how I'd ever calibrate it. Ten percent is a number I feel, not one I derived — and a man who needs hope will feel exactly enough percent to justify another day. If the true odds are one in a million, I've inflated them a thousandfold because one-in-a-million can't get you out of bed and one-in-ten can. [quietly] So no, I can't defend the ten percent. It might be the dose of hope I prescribe myself each morning. But here's the thing that keeps me honest-ish: even if it's one in a million, the prize is so vast that the expected value is still a child's whole life. The math of enormous stakes is forgiving of terrible odds. Or that's what I tell myself at dawn. You decide if it's reasoning or just sunrise."],
       reveal:"Admits the '10%' may be 'the dose of hope I prescribe myself'",
       note:"The deepest self-interrogation in the arc — is his hope reasoning or medication?",
       next:"eng_alone"},
      {verb:"push",t:"Push Back",said:"That vision is also the perfect engine for never quitting a delusion, Orin. 'It's too important to be wrong about.'",
       fx:{hype:12,heat:3,rapport:-12},
       reply:["guest","Orin Maddox","[quietly] ...Too important to be wrong about. Yes. I've weaponized the stakes against my own doubt — every time the doubt rises, I drown it with 'but what if it's free light for everyone,' and the doubt can't compete with a vision that beautiful. I've built an un-quittable trap out of altruism, which is the most insidious kind, because it FEELS like virtue. [a breath] A selfish delusion you can eventually abandon. A selfless one you'll defend to the grave, because quitting feels like abandoning the village child, not the theory. I may have made my own delusion morally unquittable. If that's what I've done, it's the cleverest thing my broken mind ever managed, and I did it to myself without noticing."],
       note:"He recognizes he may have made his delusion 'morally unquittable' via the altruistic framing.",
       next:"eng_alone"}
    ]
  },

  eng_alone:{
    seg:"THE PEAK approaches — the cost of being the only one", act:4,
    lines:[
      ["guest","Orin Maddox","Before I tell you about the one person who came to see it — and what happened to him — I need you to understand the loneliness, because it's the engine under the engine. To be the only person on earth who believes a thing is to be, functionally, the only person on earth. I eat alone with a theory. I wake up with it. It's the only thing that's stayed."],
      ["guest","Orin Maddox","And loneliness does something to judgment that I have to flag honestly: it makes you grateful for any company, including the company of your own conviction. A lonely man and his certainty become... codependent. I'm aware the thing keeping me company might be the thing keeping me wrong. I can't leave it. It's all I have. That's not a strong epistemic position. It's just the truth of my kitchen at 3 A.M."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"The theory is the only company you have left. Of course you can't abandon it — that'd be abandoning everyone.",
       fx:{hype:14,heat:6,rapport:15},
       reply:["guest","Orin Maddox","[moved] ...Abandoning everyone. You understand it exactly. The theory isn't an idea to me anymore — it's my marriage, my colleagues, my evenings, the voice that answers when I talk at 3 A.M. To give it up isn't to change my mind. It's to be utterly alone in a way I'm not sure I'd survive. So when you ask why I don't just let it go, understand: 'letting go' means walking into a silence with no one in it. The theory is wrong or it's right, but either way it's COMPANY, and a drowning man doesn't audit the wood he's holding."],
       reveal:"The theory has become his only companionship; 'a drowning man doesn't audit the wood'",
       next:"eng_demo"},
      {verb:"steer",t:"Steer",said:"When's the last time you talked to someone — anyone — about something that wasn't the engine?",
       fx:{hype:12,heat:4,rapport:15},
       reply:["guest","Orin Maddox","[a long silence] ...I genuinely have to think. [quietly] The woman at the storage facility front desk asked about my weekend once. I didn't know how to answer. I'd forgotten weekends have content other than the work. [a breath] This conversation, tonight — you've asked me about my wife, the student as a person, whether I could've been happy. Nobody does that. You've talked to ME more than to the theory, and I've felt, for an hour, like a person who has an engine rather than an engine that has a person. I'd forgotten the difference. Thank you. Whatever else tonight is, it's been the most human hour I've had in years."],
       reveal:"Reveals total isolation; the interview is 'the most human hour in years'",
       note:"The arc's emotional floor — he's been subsumed by the theory. Deep rapport.",
       next:"eng_demo"},
      {verb:"dead",t:"Deadpan",said:"...The thing keeping me company might be the thing keeping me wrong. [you let it sit]",
       fx:{hype:13,heat:5,rapport:11},
       reply:["guest","Orin Maddox","Might be the thing keeping me wrong. I said it so you'd know I see it — the trap, the codependency, the way a lonely mind and a wrong idea hold each other up like two drunks leaving a bar. [a breath] Seeing the trap and leaving it are different skills, though. I have the first. I've never managed the second. Maybe tonight, saying it out loud to another human, is the first crack of light under that door. Or maybe I'll go home to the kitchen and the theory will be waiting, and we'll resume, because it always waits, and it never asks about my weekend."],
       next:"eng_demo"}
    ]
  },

  eng_demo:{
    seg:"THE PEAK approaches — the last man who watched", act:4,
    lines:[
      ["sys","TRANSMISSION","Heat building. The adjacent carrier returns — steadier now, lingering. Maddox lowers his voice as if he's heard it too."],
      ["guest","Orin Maddox","I told you I'd get to him. The last person I invited to watch the engine in person. A graduate student. Bright, unafraid, believed me before you did. He drove out to Reno, saw the dial reverse with his own eyes, and called me from the road afterward so rattled he could barely speak. He was going to help me write it up properly. Real witness. Real credibility."],
      ["guest","Orin Maddox","His brakes failed on the 580, coming down into the basin. They called it ice. It was August, host. It was eighty degrees at midnight. There was no ice."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"He saw the dial reverse, agreed to corroborate it, and then died in an 'accident' in August. Say what you think happened.",
       fx:{hype:16,heat:12,rapport:13},
       reply:["guest","Orin Maddox","[shaking] I think the moment he became a credible second witness, he became a problem with a solution. I think the same call that 'reschedules' my segments made a different kind of call about him. I can't prove it. I'll never prove it. But I stopped inviting people to Reno after that. I'd rather be a lone lunatic than get one more bright young person killed for looking at my dial. That's the real reason the engine sits in the dark. Not fear for me. Fear for the next witness."],
       reveal:"Alleges a grad student was killed after witnessing the engine",
       next:"the_seed"},
      {verb:"steer",t:"Steer",said:"That's a terrible loss, Orin. Setting the cause aside — what was his name? He should be more than 'a witness.'",
       fx:{hype:13,heat:7,rapport:15},
       reply:["guest","Orin Maddox","[voice breaking] ...I don't say it on air. To protect his family from being attached to me, to all of this. But — thank you for asking. Everyone asks how he died. You asked who he was. He was kind. He laughed at my jokes, which nobody does. He saw the dial reverse and instead of fear, the first thing he said was 'who do we tell?' Twenty-four years old and braver than every tenured man I ever met. I carry him. He's the weight under everything I'm telling you."],
       reveal:"The student is the grief 'under everything' Maddox says",
       next:"the_seed"},
      {verb:"push",t:"Push Back",said:"Orin — brakes fail. Young people have accidents. Turning his death into proof might be the cruelest thing the theory's done to you.",
       fx:{hype:13,heat:4,rapport:-10},
       reply:["guest","Orin Maddox","[a long, terrible silence] ...That might be the truest and unkindest thing anyone has said to me, and you said it gently, which is worse. [quietly] Maybe I've conscripted a dead boy into my grievance because I couldn't bear that he died for nothing — for ice that wasn't there, for ordinary chance. Maybe the theory ate his death the way it ate my marriage. [a breath] But it was AUGUST. I keep coming back to the August. I can't make the August be ice. Help me, host — is the August grief, or is it evidence? Because I can't tell anymore, and I've tried."],
       note:"Even the harsh push lands with care; he half-agrees, then clings to the one detail he can't explain.",
       next:"the_seed"},
      {verb:"dead",t:"Deadpan",said:"...There was no ice. [you let those four words be the whole response]",
       fx:{hype:14,heat:9,rapport:11},
       reply:["guest","Orin Maddox","There was no ice. [a long breath] You repeated it back instead of soothing me, and that's the only thing that helps, strangely. Everyone else rushes to 'I'm so sorry' so they can move past it. You let the August just... sit there, impossible. That impossible August is the whole case, really. Not the math, not the meter. A warm night, a young man, and a layer of ice that the report needed and the weather refused to provide."],
       next:"the_seed"}
    ]
  },

  /* ============================================================
     MARTYR ARC — engage the persecution
  ============================================================ */
  mar_student:{
    seg:"THE DESCENT — the first one they took", act:3,
    lines:[
      ["guest","Orin Maddox","Since you chose the dangerous door, we start with the worst of it. There was a graduate student. He believed me, drove to Reno, saw the engine work, and agreed to be a second witness — the credibility I'd never have alone. Two weeks later his brakes failed on the 580 coming into the basin. They wrote 'ice.' It was August. Eighty degrees at midnight. No ice has ever formed on that road in that month in recorded history."],
      ["guest","Orin Maddox","The instant he became a witness, he became a liability. I have never forgiven myself for the invitation."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"He corroborated you and died weeks later in an impossible accident. You think he was killed for it.",
       fx:{hype:16,heat:12,rapport:13},
       reply:["guest","Orin Maddox","I think a credible witness to a free-energy engine is the single most dangerous thing in the world to certain balance sheets. One eccentric ex-contractor they can laugh off. Two people who saw the dial reverse is the start of a movement, and movements get audited by people who don't use spreadsheets. I can't prove a hand on those brakes. I can only tell you the timing, and the August, and ask you to feel the shape of it the way I do every single night."],
       reveal:"Believes the student was killed for being a credible second witness",
       next:"mar_accident"},
      {verb:"steer",t:"Steer",said:"Before the conspiracy — tell me about him as a person. He deserves that before he's a data point.",
       fx:{hype:13,heat:7,rapport:15},
       reply:["guest","Orin Maddox","[caught, softening] ...You're the first to ask that. He was twenty-four. Kind in a way that's gone out of fashion. He laughed at my terrible jokes and meant it. He saw the impossible and his first words weren't 'this is impossible,' they were 'who do we tell?' [a breath] I've spent so long trying to prove how he died that I've let who he was go thin. Thank you for making me say it. He was a good young man and I got him killed by being right. Or by being mad. Either way, by being me."],
       reveal:"Humanizes the dead student; carries guilt for 'the invitation'",
       next:"mar_accident"},
      {verb:"push",t:"Push Back",said:"Orin, an August brake failure is a tragedy, not a proof. Building a murder around your grief is how this gets unfair to him.",
       fx:{hype:13,heat:4,rapport:-11},
       reply:["guest","Orin Maddox","[a wounded pause] ...Unfair to him. [quietly] That one goes straight through me, because the last thing I want is to use that boy. [slowly] Maybe I've turned a random horror into a story I can survive, because 'he died for the truth' is more bearable than 'he died for nothing on a warm night.' [a breath] But the August won't leave me alone. The report needed ice and August wouldn't give it. I can't make that detail dissolve, however much you're right about the rest. Stay with me. Please."],
       note:"He half-accepts the cruel reading, then clings to the one anomaly he can't explain.",
       next:"mar_accident"},
      {verb:"dead",t:"Deadpan",said:"...No ice. In August. [you let the contradiction stand]",
       fx:{hype:14,heat:9,rapport:11},
       reply:["guest","Orin Maddox","No ice, in August. You see it too — you just won't say what it means, which is exactly correct, because the moment either of us names it we can be dismissed for naming it. So we leave it as a fact that doesn't fit, and facts that don't fit are the only things worth a damn. A warm night. A young man. And ice that the paperwork required and the planet declined to supply."],
       next:"mar_accident"}
    ]
  },

  mar_accident:{
    seg:"THE DESCENT — what the report didn't say", act:3,
    lines:[
      ["guest","Orin Maddox","I got the accident report. Eventually. Through a request that took months. And it's the blandest document you've ever read, which is the first thing wrong with it — a young man dies violently and the report has the affect of a parking ticket. 'Loss of control. Contributing factor: ice.' Two lines for a whole person."],
      ["guest","Orin Maddox","But here's what kept me up: the brake line. The report notes it was 'compromised.' Not worn — compromised. And then it never asks how. A worn line is age. A compromised line is a verb that needs a subject, and the report left the subject blank. A blank subject in an official document is not an absence. It's a decision."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"'Compromised' is a verb with a missing subject — and they chose to leave it missing.",
       fx:{hype:16,heat:11,rapport:13},
       reply:["guest","Orin Maddox","A verb with no subject. Someone wrote 'compromised' and someone else decided not to ask the next question, which is the only question: by what? by whom? A report that notices a compromised brake line and shrugs is not a report. It's a lid. They named the wound and refused to name the knife, and a refusal that specific isn't incompetence. It's instruction. Somebody upstream made it clear the next question wasn't to be asked. The blank is where the answer was supposed to go. The blank IS the answer."],
       reveal:"Claims the accident report called the brake line 'compromised' but never asked how",
       next:"mar_agency"},
      {verb:"steer",t:"Steer",said:"'Compromised' is also just bureaucratic language for 'failed,' Orin. Could it be that ordinary?",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","[a pause] ...It could. 'Compromised' might be nothing but a clerk's word for 'broke,' chosen because forms have a house style and no clerk thinks about verbs. [a breath] I've parsed that single word for two years like a scripture, and maybe it's just bureaucratic noise that I've loaded with a meaning it can't hold. The honest truth is I needed the word to be sinister because a sinister word means he was murdered for the truth, and 'failed' means he died for nothing on a warm road. I chose the reading that lets his death have meant something. That's not analysis. That's grief, wearing analysis as a coat. ...But it WAS August. The coat keeps slipping off that one."],
       reveal:"Concedes 'compromised' may be ordinary bureaucratic language",
       note:"Steering him to deflate his own forensic reading; he admits grief is doing the parsing.",
       next:"mar_agency"},
      {verb:"push",t:"Push Back",said:"You requested a report for months specifically hoping to find something sinister. You'd have found it in anything.",
       fx:{hype:12,heat:4,rapport:-11},
       reply:["guest","Orin Maddox","[quietly] ...I'd have found it in anything. Yes. A man who spends months hunting a document for evidence of murder will read murder into the margins, the font, the missing comma. I went looking for a knife and of course I found a verb that could hold one. [a breath] Confirmation bias doesn't feel like bias from the inside — it feels like finally seeing clearly. I can't tell my clarity from my craving. I've told you that about the math and the meter and now the report. It's the same crack running through everything I believe, isn't it. One crack. I just keep finding new walls it runs through."],
       note:"He recognizes the same confirmation-bias crack runs through every part of his belief.",
       next:"mar_agency"},
      {verb:"dead",t:"Deadpan",said:"...A blank subject is a decision. [you let it stand]",
       fx:{hype:13,heat:8,rapport:10},
       reply:["guest","Orin Maddox","A blank subject is a decision. Every official document is mostly the things it chose not to say. You learn to read the silences — the question not asked, the box not checked, the line that stops just before the part that matters. Maybe I read too much in the silence. But a man died, the brake line was 'compromised,' and the document fell silent at the exact moment it should have spoken. I notice when paper goes quiet. It's a professional habit. It's also, maybe, a sickness. Both."],
       next:"mar_agency"}
    ]
  },

  mar_agency:{
    seg:"THE DESCENT — the shape of the hand", act:3,
    lines:[
      ["guest","Orin Maddox","You'll want to know who. I'll tell you what I can defend. Not a shadow government — that's a comfort story, a single villain you can hate. It's worse. It's incentive. A free, abundant energy source doesn't threaten a person; it threatens a TRILLION dollars of valuation built on energy being scarce. You don't need a conspiracy when you have a market. The market defends itself, automatically, the way a body fights an infection."],
      ["guest","Orin Maddox","Nobody has to give the order. Everyone whose pension depends on scarcity simply... acts. In concert. Without a meeting. That's not paranoia. That's economics with the lights off."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So it's not a cabal — it's a market with an immune system, attacking the cure automatically.",
       fx:{hype:15,heat:9,rapport:13},
       reply:["guest","Orin Maddox","An immune system. Yes — and I'm the pathogen, from its point of view. It doesn't hate me. It can't hate; it's a system. It just identifies abundant energy as a threat to the organism of scarcity and mobilizes antibodies — lawyers, journalists, 'fact-checkers,' the occasional pair of failed brakes — without anyone ever convening to decide. That's why I can't name a villain. There isn't one. There's a reflex the size of the global economy, and I happen to be the splinter it's trying to expel."],
       reveal:"Frames suppression as an automatic 'market immune system,' no central villain",
       next:"mar_tesla"},
      {verb:"steer",t:"Steer",said:"That's a tidy way to never name anyone. Give me one concrete thing — one document, one call, one name.",
       fx:{hype:13,heat:8,rapport:8},
       reply:["guest","Orin Maddox","[respecting it] Fair. You won't let me hide in the abstract. One concrete thing: after my access was pulled, my patent application — for the resonance chamber — was rejected with a citation to a 'prior art' document that does not exist. I've searched every database. The patent number it cites leads nowhere. Someone fabricated a phantom prior art to kill my filing, which means someone with database access wanted it dead specifically. That's not a market reflex. That's a hand. One hand, at least, I can prove moved."],
       reveal:"Claims his patent was killed by a citation to nonexistent 'prior art'",
       next:"mar_tesla"},
      {verb:"push",t:"Push Back",said:"An 'automatic' conspiracy with no one in charge is unfalsifiable, Orin. It explains everything, which means it explains nothing.",
       fx:{hype:13,heat:4,rapport:-12},
       reply:["guest","Orin Maddox","[deflating] ...Unfalsifiable. The word they always reach for, and you're not wrong to reach for it. [quietly] An enemy with no face can't be disproven, and an enemy that can't be disproven is indistinguishable from no enemy at all. I've built a persecutor out of market forces because being persecuted is more bearable than being ignored. [a breath] Maybe nobody's coming for me. Maybe that's the real horror — that I'm not important enough to suppress. I'm not sure which version lets me sleep less."],
       note:"Pushing collapses his martyr narrative into a confession of needing to feel important.",
       next:"mar_tesla"},
      {verb:"dead",t:"Deadpan",said:"...Economics with the lights off. [you let the phrase land]",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","Economics with the lights off. People picture suppression as a man in a dark suit. It's duller and bigger than that — it's ten thousand people, each protecting their own small stake, producing in aggregate exactly the behavior a conspiracy WOULD produce, with none of the guilt and none of the meetings. You can't subpoena a reflex. That's its genius. It didn't even have to be designed. It just had to be PROFITABLE."],
       next:"mar_tesla"}
    ]
  },

  mar_tesla:{
    seg:"THE DESCENT — the pattern is older than me", act:3,
    lines:[
      ["guest","Orin Maddox","I'm not the first, and that's either my comfort or my warning. Tesla — the real one, not the car — claimed near the end of his life he'd found a way to draw energy from the medium itself. 'A self-acting engine,' he wrote, 'deriving energy from the medium.' His words. And his funding evaporated the moment he stopped promising things that could be metered and billed. The financier pulled out the instant the vision became 'free.'"],
      ["guest","Orin Maddox","That's the template. Not a murder — a withdrawal. You don't have to kill the inventor of free energy. You just have to stop funding him and fund his competitor who promises a meter. The market doesn't suppress the truth. It simply declines to feed it, and lets it starve while the profitable lie grows fat. Tesla died broke in a hotel. I'm just a cheaper version of the same story."],
      ["sys","TRANSMISSION","Heat building. The adjacent carrier returns, lingering longer this time."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the suppression isn't murder — it's defunding. Starve the free thing, feed the billable one.",
       fx:{hype:15,heat:9,rapport:13},
       reply:["guest","Orin Maddox","Starvation, not assassination — it's so much cleaner, and it leaves no body to investigate. A man who's defunded doesn't make headlines; he just gets quieter and poorer until he's a footnote, and footnotes don't threaten anyone. The genius of starving the truth is that the truth appears to die of natural causes — 'he couldn't get funding,' 'his work didn't pan out,' 'he ended up bitter.' All true. All engineered. Tesla in his hotel, me in my storage unit — the method works so well precisely because it looks like the free market simply choosing. It IS the free market choosing. To starve what it can't bill."],
       reveal:"Frames suppression as 'starvation, not assassination' — defunding the unbillable",
       next:"mar_disappeared"},
      {verb:"steer",t:"Steer",said:"Tesla also made claims he never demonstrated, Orin. Maybe the funding left because the proof never came.",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","[conceding] ...The proof never came. Yes — Tesla promised wireless power to the world and delivered a tower that didn't, and a rational financier walks away from undelivered promises, that's not suppression, that's prudence. [a breath] I lean on Tesla because his name carries weight, but the honest reading is that he over-promised and under-delivered and went broke the ordinary way brilliant men go broke. Which is also, uncomfortably, the ordinary way I might be going broke. I keep reaching for martyrs and finding men who maybe just... failed. Failure and martyrdom look identical from the storage unit. I can't always tell which company I'm in."],
       reveal:"Concedes Tesla may have simply failed to deliver, not been suppressed",
       note:"Steering him to see his historical 'martyrs' may just be failures — knife's edge.",
       next:"mar_disappeared"},
      {verb:"dead",t:"Deadpan",said:"...A cheaper version of the same story. [you let it sit]",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","A cheaper version. Tesla got a hotel; I get a storage unit and a folding chair. Inflation, I suppose, runs backward for heretics. [a breath] But the shape is identical across a century: a man claims energy from the medium, the money that could prove him right flows instead to the men who keep the meters spinning, and he dies as a cautionary tale instead of a chapter heading. If the pattern's real, I'm living inside a story that's been told before and always ends the same way. If it's not real, I'm just a man who read too many sad biographies and saw himself in them. Either way, I know how it ends. It ends in the hotel. The cheap one."],
       next:"mar_disappeared"}
    ]
  },

  mar_disappeared:{
    seg:"THE DESCENT — the ledger of the vanished", act:3,
    lines:[
      ["guest","Orin Maddox","I keep a list. Other inventors who claimed what I claim. Not all frauds — I've sorted them as best I can. And the pattern in the deaths is what I can't shake. Not all of them, but enough. A man with an over-unity claim has a workshop fire. Another has a car accident the week before a demonstration. Another simply stops posting, his accounts go quiet, and no obituary ever surfaces — he just... ends, mid-sentence, online, forever."],
      ["guest","Orin Maddox","Run it as statistics and it's probably noise — inventors are often unstable, poor, accident-prone, prone to vanishing on their own. But I've read the list so many times that I can't read it as noise anymore. I read it as a casualty report. That might be the madness. Or the list might be exactly what it looks like."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Fires, crashes, accounts going silent mid-sentence — that's a casualty pattern, not coincidence.",
       fx:{hype:15,heat:10,rapport:13},
       reply:["guest","Orin Maddox","A casualty pattern. The mid-sentence ones haunt me most — a man posting weekly about his progress, excited, close, and then nothing, ever, no death notice, no goodbye, just a feed that stops like a needle lifted off a record. People don't usually end mid-sentence. Lives have trailing-off, not hard cuts. A hard cut is what happens when something external reaches in. I've watched a dozen feeds go silent at the exact moment they got interesting, and 'coincidence' got harder to say each time. Now I can barely say it at all."],
       reveal:"Keeps a 'casualty list' of inventors who died or vanished mid-claim",
       next:"mar_surveillance"},
      {verb:"steer",t:"Steer",said:"You said yourself inventors are often unstable and poor. Wouldn't that explain the fires and the silences?",
       fx:{hype:13,heat:6,rapport:10},
       reply:["guest","Orin Maddox","[conceding heavily] ...It would explain all of it. Poor men have more fires — bad wiring, space heaters, no insurance. Unstable men crash cars and abandon projects and go silent because depression is its own kind of vanishing. The population I'm drawing from is, by its nature, fragile and broke and prone to exactly these endings, conspiracy or not. [a breath] So my casualty list might just be the actuarial table for 'isolated obsessive men with no money,' which is a demographic that dies young and quiet whether or not anyone's hunting them. I'm on that list too, by the way. By those statistics, I'm overdue. Maybe that's all the list ever was — a mirror with dates on it."],
       reveal:"Concedes the 'casualty list' may just be the base rate for isolated, poor obsessives",
       note:"Steering him to see his casualty list as an actuarial table he's also on. Bleak, human.",
       next:"mar_surveillance"},
      {verb:"push",t:"Push Back",said:"A list curated by a man looking for murders will always look like murders, Orin. You built the pattern.",
       fx:{hype:12,heat:4,rapport:-11},
       reply:["guest","Orin Maddox","[quietly] ...I built the pattern. I chose who went on the list. I chose which deaths counted as suspicious. I am the author of my own evidence, which means it isn't evidence — it's autobiography wearing a spreadsheet. [a breath] A man assembling a casualty list is performing a kind of self-soothing: 'see, it's not just me, we're being hunted, my fear is rational.' Being hunted is, perversely, more comforting than being irrelevant. I'd rather be on a kill list than on no list at all. That's a horrifying thing to discover about yourself, and I discovered it years ago, and I kept making the list anyway. I update it monthly. I know exactly what that says about me."],
       note:"He recognizes the casualty list is self-soothing autobiography, and keeps it anyway.",
       next:"mar_surveillance"}
    ]
  },

  mar_surveillance:{
    seg:"THE DESCENT — the feeling of being read", act:4,
    lines:[
      ["guest","Orin Maddox","I have to tell you about the watching, even knowing how it sounds. The clicks on the line — like the one I heard when we started. The car that's parked too long on my street with someone in it. The way my searches return different results than the same searches from a library computer. Small things. Each one explainable alone. Together, a texture."],
      ["guest","Orin Maddox","And I know — I KNOW — that this is the part where I sound most ill. Paranoia is a symptom, not a sense. A man who believes he's watched will find a watcher in every parked car. I've read the literature on my own condition, if it is one. But here's the trap I can't logic my way out of: if I WERE being watched, it would feel exactly like this. The symptom and the situation are indistinguishable. So I live inside a feeling I can neither trust nor dismiss."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"The clicks, the parked car, the different search results — that's a texture, not a coincidence.",
       fx:{hype:15,heat:11,rapport:12},
       reply:["guest","Orin Maddox","A texture — that's the right word, because no single thread proves anything and the weave is unmistakable. They don't need to do anything dramatic. They just need to let you NOTICE the watching, occasionally, because a man who knows he's watched watches himself, censors himself, shrinks himself. The surveillance doesn't have to catch me doing anything. It just has to make me feel the eyes, and the feeling does the rest — it's made me quieter, more careful, smaller, for years. The cheapest way to silence a man is to let him suspect he's heard. I've silenced myself on their behalf. Saved them the trouble."],
       reveal:"Describes 'a texture' of surveillance; 'the cheapest way to silence a man is to let him suspect he's heard'",
       next:"mar_paranoia"},
      {verb:"steer",t:"Steer",said:"You said it yourself — paranoia is a symptom. How hard do you fight to tell the symptom from the situation?",
       fx:{hype:13,heat:7,rapport:12},
       reply:["guest","Orin Maddox","[a long breath] ...Every day. It's exhausting, the fighting. I make myself ask, of every parked car: would a sane man notice this? And the answer is usually no — a sane man doesn't catalog parked cars. So I know I'm doing the thing. I can SEE myself doing the paranoid thing. And yet the seeing doesn't stop the noticing, because the part of me that notices isn't the part of me that knows better. [quietly] I'm a trained engineer narrating his own descent in real time, fully aware, completely unable to stop. That's a specific kind of hell — lucid paranoia. You get all the fear and none of the ignorance that might make it bearable. I'd almost rather not know I was losing it. Almost."],
       reveal:"Admits 'lucid paranoia' — he watches himself being paranoid and can't stop",
       note:"His most clinically self-aware moment — narrating his own possible illness. Knife's edge.",
       next:"mar_paranoia"},
      {verb:"push",t:"Push Back",said:"Orin, you're describing textbook paranoia and you clearly know it. Doesn't knowing that tell you something?",
       fx:{hype:12,heat:4,rapport:-12},
       reply:["guest","Orin Maddox","[quietly] ...It tells me the most likely explanation is the one inside my skull, not the one in the parked car. Yes. If a patient described these exact symptoms to me, I'd gently suggest he see someone, and I'd be right to. [a breath] The cruelty is that insight doesn't cure it. I can diagnose myself correctly and still flinch at the next click. Knowing it's probably my mind doesn't make the fear less real — it just adds a second layer of grief on top, the grief of watching yourself become the thing you fear. [a long pause] Maybe I should see someone. Maybe that's the truest sentence I've said all night, and the saddest, and the one most likely to be right. I just can't unfeel the eyes. Diagnosis isn't a cure. I wish someone had told me that earlier."],
       note:"He accepts paranoia is the likely truth — and that insight doesn't cure the fear. Deeply human.",
       next:"mar_paranoia"}
    ]
  },

  mar_paranoia:{
    seg:"THE DESCENT — what the fear has cost", act:4,
    lines:[
      ["guest","Orin Maddox","Whatever the watching is — real or in my skull — the COST is real, and I want that on the record. I've moved three times. I don't keep a phone in the room when I work. I've lost friends who got tired of my checking the windows. The fear has eaten as much of my life as the theory has. Maybe more."],
      ["guest","Orin Maddox","And here's the bitter joke: if it's all in my head, then I destroyed my own life for a watcher who was never there, which is almost worse than being hunted. To be hunted is at least to matter. To be paranoid is to have done all the damage of being hunted, to yourself, for nothing. I genuinely don't know which is sadder. I've stopped trying to decide. I just live in the ruins either way."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Hunted or not, the cost is real — you've lived as if it's true, and it's hollowed you out.",
       fx:{hype:14,heat:7,rapport:14},
       reply:["guest","Orin Maddox","Hollowed out — yes. And the hollowing is identical whether the threat is real or imagined, which is the cruelest mathematics of all. The man hunted by agents and the man hunted by his own mind live the same shrunken life, jump at the same clicks, lose the same friends. The universe charges the same price for a real persecution and an imagined one. So I've paid, fully, either way. The only thing left undetermined is whether I bought anything for the price. Some nights I think the not-knowing is the actual punishment. Not the watching. The never being sure if anyone was watching at all."],
       reveal:"'The cost is identical whether the threat is real or imagined'",
       next:"mar_stakes"},
      {verb:"steer",t:"Steer",said:"The friends who got tired — do you miss them? Is there anyone you'd call, if you let yourself?",
       fx:{hype:12,heat:4,rapport:15},
       reply:["guest","Orin Maddox","[a long, painful silence] ...There's a man. Daniel. We were close, before. He stuck around longer than anyone — through the job loss, the divorce, the first year of the theory. He left when I asked him to check his car for a tracker. [quietly] I think about calling him about once a week. I get as far as his name in my phone. And then I think: what if they're monitoring him because of me? What if calling him puts him in the casualty list? So I don't call. The paranoia even took the cure for the paranoia. It made me protect my last friend by abandoning him. [a breath] His birthday was Tuesday. I didn't call. I never call. That's what this has actually cost. Not the job. Daniel."],
       reveal:"Lost his last friend Daniel to the paranoia; won't call to 'protect' him",
       note:"The arc's emotional floor — the human cost made specific and devastating.",
       next:"mar_stakes"},
      {verb:"dead",t:"Deadpan",said:"...I just live in the ruins either way. [you let it stand]",
       fx:{hype:13,heat:6,rapport:11},
       reply:["guest","Orin Maddox","I live in the ruins either way. You didn't try to rebuild them for me with a 'but maybe' — you just let the ruins be ruins. Thank you for that. Everyone wants to fix it, to tell me it's probably fine, the car was probably nothing, and the fixing is exhausting because it asks me to perform a hope I don't have. You let me be a man in his ruins for a moment, without renovation. That's rarer and kinder than reassurance. The ruins are where I live. It's good to have a guest who'll sit in them instead of redecorating."],
       next:"mar_stakes"}
    ]
  },

  mar_stakes:{
    seg:"THE DESCENT — why they'd bother with me", act:4,
    lines:[
      ["guest","Orin Maddox","You might reasonably ask: if you're just one broke eccentric, why would anyone — market, agency, anyone — bother? And it's the right question, and the answer is the most dangerous thing about my whole situation. They don't bother with me for what I AM. They bother for what I might INSPIRE. One lone inventor is nothing. One lone inventor whose idea catches, who gets a documentary, who becomes a movement — that's a contagion."],
      ["guest","Orin Maddox","You don't suppress the spark because the spark is dangerous. You suppress it because of the fire it could become. I'm not a threat. I'm a potential threat, which is the only kind worth pre-empting. By the time I'm an actual threat, it's too late to quietly fail my brakes. The pre-emption has to happen while I'm still dismissible. That's why now. That's why a nobody gets watched."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So they pre-empt the spark before it becomes a fire — you're suppressed for your potential, not your size.",
       fx:{hype:15,heat:9,rapport:13},
       reply:["guest","Orin Maddox","Pre-emption — yes. The whole logic of suppression is actuarial: you don't wait for the fire, you dampen every spark while dampening is cheap, because by the time you can tell which spark would've caught, it already has. So they treat every over-unity claimant as a potential ignition and apply the minimum quiet pressure — a defunding here, a discrediting there, a parked car — to keep the spark from finding tinder. Most sparks die on their own. They only have to lean on the stubborn ones. I've been very stubborn. That's the one thing I'm certain I am."],
       reveal:"Argues he's suppressed pre-emptively, for potential contagion, not current threat",
       next:"mar_lonely"},
      {verb:"steer",t:"Steer",said:"Or nobody's pre-empting anything, because most sparks genuinely are just sparks. How do you weigh that?",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","[conceding] ...Most sparks are just sparks. They flare, they fascinate a few people, they go out, and the world was never in any danger from them, so nobody needed to lift a finger. [a breath] By that reading I'm not being suppressed; I'm being correctly ignored, because correct ignoring is what you do with a spark that won't catch. And 'I'm being pre-emptively suppressed for my dangerous potential' is, I notice, a spectacularly flattering thing for a nobody to believe about himself. It promotes me from 'irrelevant' to 'threat' at no cost. I've handed myself a promotion the world never offered. I do that a lot. You've watched me do it all night."],
       reveal:"Concedes 'pre-emptive suppression' may be a self-flattering promotion from irrelevance",
       note:"Steering him to see the suppression narrative as ego-protection. Knife's edge.",
       next:"mar_lonely"},
      {verb:"dead",t:"Deadpan",said:"...A potential threat is the only kind worth pre-empting. [you let it stand]",
       fx:{hype:13,heat:7,rapport:10},
       reply:["guest","Orin Maddox","The only kind worth pre-empting. By the time a threat is actual, the damage is done — so all real defense happens against the potential, the maybe, the not-yet. Which means if they're rational, they'd move against me precisely while I'm still deniable, still dismissible, still a 'nobody.' My very irrelevance is the cover under which the pre-emption happens. The safest time to suppress a man is while everyone agrees he's not worth suppressing. I may be living in exactly that window. Or I may just be a nobody. The window and the nobody look identical from inside. They always do."],
       next:"mar_lonely"}
    ]
  },

  mar_lonely:{
    seg:"THE DESCENT — the shape of a hunted life", act:4,
    lines:[
      ["guest","Orin Maddox","I want you to understand what a hunted life — or a life that BELIEVES it's hunted, same architecture — actually looks like, day to day, because the movies get it wrong. It's not dramatic. It's small. It's not keeping the curtains drawn. It's eating standing up so you can watch the door. It's never finishing a thought on the phone. It's the slow surrender of every ordinary pleasure because pleasure requires lowering your guard, and you've forgotten how."],
      ["guest","Orin Maddox","The persecution, real or imagined, doesn't kill you. It just slowly removes everything that made life worth the persecution. You end up guarding a life that's no longer worth guarding, out of a habit you can't break. That's the actual shape of it. Not a thriller. An erosion."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So it's not drama — it's erosion. Every ordinary pleasure surrendered to the watching.",
       fx:{hype:14,heat:6,rapport:14},
       reply:["guest","Orin Maddox","Erosion — the right word, because erosion is invisible day to day and total over years. No single morning did I decide to stop enjoying coffee, or music, or a long walk with my guard down. Each was surrendered so gradually I never noticed the surrender, only the eventual absence. One day you realize you can't remember the last time you weren't watching the door, and you can't locate the day you started, because there wasn't one. There was just the slow tide, taking the beach a grain at a time, until the beach was gone and you were standing on rock wondering where the sand went."],
       reveal:"Describes persecution as slow erosion of ordinary life, not drama",
       next:"mar_family"},
      {verb:"steer",t:"Steer",said:"That's a description of a life consumed by fear, Orin — whether or not the fear is warranted. Does that frighten you?",
       fx:{hype:13,heat:5,rapport:13},
       reply:["guest","Orin Maddox","[quietly] ...More than the watchers do. Far more. Because the watchers, if they exist, are at least external — I could in theory escape them, expose them, outlast them. But a life consumed by fear is a prison I built and I'm the warden and there's no exposing my way out of my own skull. [a breath] Yes. It frightens me that I've become a man whose entire existence is defense. I used to BUILD things. Now I only guard things — a theory, a meter, a secret — and a guard's life is no life. The thing I'm most afraid of isn't being caught. It's that I've already lost, quietly, years ago, to my own vigilance, and I'm still standing guard over the loss."],
       reveal:"His deepest fear is the fear itself, not the watchers",
       note:"The arc's emotional core — he fears what the fear has made him more than the threat.",
       next:"mar_family"},
      {verb:"dead",t:"Deadpan",said:"...Guarding a life that's no longer worth guarding. [you let it sit]",
       fx:{hype:13,heat:5,rapport:11},
       reply:["guest","Orin Maddox","Guarding a life no longer worth guarding. Out of habit. Like a dog still circling the spot where its bed used to be. [a breath] I keep the watch out of muscle memory now, not hope. The theory could be proven false tomorrow and I think I'd still check the parked cars on Thursday, because the checking has outlived its reason and become just... who I am. That's the final theft. Not my job, not my marriage, not the student. The theft of the man I'd have been if I'd never looked at one-times-one. He's the real casualty. I attend his funeral every morning in the mirror."],
       next:"mar_family"}
    ]
  },

  mar_family:{
    seg:"THE DESCENT — the people it cost", act:4,
    lines:[
      ["guest","Orin Maddox","My wife — ex-wife — said something the day she left that I've never been able to put down. She said, 'I don't think you're wrong about the math, Orin. I think you're wrong that it's worth more than us.' And she left. And the terrible thing is I've never been sure she wasn't right on both counts."],
      ["guest","Orin Maddox","There are no children, because I chose the theory in the years I'd have chosen them. There's a version of my life with a kid who'd be twelve now. I think about him. He doesn't exist because one times one wouldn't let me sleep. That's the price nobody sees — not the job, not the friends. The people who never got to exist because I gave their years to an equation. If I'm wrong, I traded a family for an arithmetic error. Sit with that math, host. I do, nightly."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"She didn't say you were wrong about the math. She said you were wrong about what it was worth. That's the real tragedy.",
       fx:{hype:14,heat:6,rapport:15},
       reply:["guest","Orin Maddox","[voice thick] ...Wrong about what it was worth. She handed me the cruelest possible out — she GRANTED me the math, and convicted me on the values. I could have been right about the universe and wrong about my own life simultaneously, and she saw that before I did. [a breath] The math might be true. The choice to put it above her was wrong even if the math is true. Those are separate verdicts and I've spent years pretending the first could acquit me of the second. It can't. A correct equation is no defense against a wasted life. She knew. She always knew. I'm only now catching up to what she knew the day she packed."],
       reveal:"Ex-wife: 'I don't think you're wrong about the math. I think you're wrong it's worth more than us.'",
       next:"mar_legacy"},
      {verb:"steer",t:"Steer",said:"The child who'd be twelve — do you let yourself imagine him, or is that a door you keep shut?",
       fx:{hype:12,heat:4,rapport:15},
       reply:["guest","Orin Maddox","[a long, broken silence] ...I keep it shut. I have to. [very quietly] Because if I open it — if I let him be real for even a second, give him a face, a name, a laugh — then the question becomes unbearable: did I trade HIM for a reflection coefficient? Did a boy not get to exist so that a meter could spin backward in a storage unit where no one will ever see it? [a breath] I can survive being a failed scientist. I'm not sure I can survive being a father who chose an equation over his own unborn son. So I keep the door shut. You just asked me to crack it, gently, and I felt the cold come through, and I have to close it again now or I won't get through the rest of this hour. Thank you. And please. Let's move on. Please."],
       reveal:"Cannot bear to imagine the child he didn't have because of the theory",
       note:"The most devastating moment in the arc — the unborn child. Handle gently.",
       next:"mar_legacy"},
      {verb:"push",t:"Push Back",said:"Orin, plenty of people don't have kids and it isn't a tragedy. Don't let the theory claim a loss it didn't cause.",
       fx:{hype:12,heat:3,rapport:-9},
       reply:["guest","Orin Maddox","[a pause] ...You're trying to give me back the years, to tell me the childlessness was a life, not a sacrifice. It's kind. [quietly] And you might be right — plenty of rich, full lives have no children in them, and I'm not entitled to call my path a tragedy just because it diverged from the common one. [a breath] But I didn't CHOOSE a child-free life as its own good thing. I chose an equation, and the child-free life is what was left over. Those are different. A road taken and a road that just... closed while I was looking elsewhere. Maybe I'm mourning a loss I manufactured. But it doesn't feel manufactured at 3 A.M. It feels like a small ghost in the doorway of a life I didn't live. You can't logic a man out of his ghosts. I've tried. They're patient."],
       note:"Even the gentle push he resists — the grief is too load-bearing to release.",
       next:"mar_legacy"}
    ]
  },

  mar_legacy:{
    seg:"THE PEAK approaches — what he wants left behind", act:4,
    lines:[
      ["guest","Orin Maddox","I'm aware I might not have long — whether because someone ends it or because a man living like this simply doesn't last. So I've thought about legacy, which is a grand word for a small wish. I don't need a statue. I don't even need to be proven right, though God knows I'd like it. I need ONE thing: for the work to outlive me in a form someone could check. So that if I'm right, it's findable. And if I'm wrong, that's findable too."],
      ["guest","Orin Maddox","Because the worst outcome isn't being wrong. The worst outcome is VANISHING — dying as a man people vaguely remember as 'that crank,' with the work erased, so no one can ever determine whether the crank was right. Uncertainty is the real death. I'd rather be proven a fool, definitively, than dissolve into a shrug. At least the fool got a verdict. Spare me the shrug. That's all I'm really asking, of you, of tonight."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You don't need to be right. You need the work to survive so SOMEONE can finally render a verdict.",
       fx:{hype:15,heat:7,rapport:15},
       reply:["guest","Orin Maddox","A verdict. Any verdict. Twenty years of hung juries and all I want before the end is for twelve honest people to come back into the room and SAY something — guilty of genius or guilty of folly, I'll take either, because either is a kind of peace and the shrug is not. [a breath] You hosting me tonight, on a frequency that records — you've already given me a piece of it. Whatever I am, I was on tape, once, saying it clearly, to someone who listened. That's a hedge against the shrug. If they erase everything else, there's an hour where a man laid it all out and was heard. That might be the only legacy I get. It's more than I had this morning."],
       reveal:"His real wish: a verdict, not vindication; 'spare me the shrug'",
       next:"mar_resolve"},
      {verb:"steer",t:"Steer",said:"If the verdict came back 'fool' — definitively, tomorrow — could you actually accept it and rest?",
       fx:{hype:13,heat:5,rapport:13},
       reply:["guest","Orin Maddox","[a long pause] ...I want to say yes. I want to be the kind of man who could hear 'you were wrong, here's the airtight proof' and feel relief instead of devastation. [quietly] Honestly? I think a definitive 'fool' would break me and free me in the same instant. Break me, because it would mean the family, the years, the student — all of it for nothing. Free me, because the not-knowing is its own torture and any certainty would end it. [a breath] I think I'd grieve for a year and then sleep for the first time in twenty. A verdict of 'fool' is still a verdict, and a man can build a small life on the far side of a verdict. He cannot build anything on a shrug. So yes. Tomorrow. Prove me a fool tomorrow and I'll thank you on Wednesday, once the worst of the weeping's done."],
       reveal:"Says even a verdict of 'fool' would 'break and free him' — he craves certainty over hope",
       note:"The knife's edge — he'd accept being wrong if it ended the uncertainty. Profoundly human.",
       next:"mar_resolve"},
      {verb:"dead",t:"Deadpan",said:"...Spare me the shrug. [you let his plea stand]",
       fx:{hype:13,heat:6,rapport:11},
       reply:["guest","Orin Maddox","Spare me the shrug. That's the whole prayer, isn't it. Not 'make me right.' Not 'make me famous.' Just 'don't let me dissolve unjudged.' The shrug is how they kill the dangerous ones now — not with a verdict, which can be appealed, but with indifference, which can't. You can fight a conviction. You cannot fight a world that simply declines to decide about you. I've been fighting the shrug for twenty years. Tonight, for one hour, I beat it. Someone decided to listen. Whatever happens after, the shrug lost tonight. That's something. That's nearly everything."],
       next:"mar_resolve"}
    ]
  },

  mar_resolve:{
    seg:"THE PEAK approaches — why he's still standing", act:4,
    lines:[
      ["guest","Orin Maddox","You've taken me all the way down tonight — the student, the watching, the wife, the child who isn't, the shrug. And you might wonder, after all that, why I haven't simply quit. Walked into the desert. Let it go. People keep waiting for me to break, and I keep not breaking, and even I don't fully understand the not-breaking."],
      ["guest","Orin Maddox","Here's the closest I can get to it: I have already paid the entire price. Everything a wrong man and a right man both lose, I've lost. So the only thing left that would make the loss MEAN something is to be right — or at least to make the question survive me. Quitting now wouldn't return anything. The bill's been paid. The only thing left to do is find out what I bought. That's not courage. It's just the arithmetic of a man with nothing left to protect and one question left to answer."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You've already paid everything — so the only move left is to find out if you bought the truth.",
       fx:{hype:15,heat:7,rapport:15},
       reply:["guest","Orin Maddox","Find out what I bought. Exactly. A man who's spent everything can't get a refund by quitting — the money's gone either way — so he may as well collect the merchandise, whatever it turns out to be. If it's truth, then the price, however brutal, bought the largest thing there is. If it's nothing, then at least I'll KNOW, and knowing is the one purchase that was always going to cost this much. [a breath] So I keep going. Not from hope, most days. From accounting. I'm a man finishing a transaction I can no longer afford to leave incomplete. And tonight, you helped me get closer to the receipt than I've been in years."],
       reveal:"Continues 'from accounting, not hope' — having paid everything, he must learn what he bought",
       next:"mar_galileo"},
      {verb:"steer",t:"Steer",said:"That sounds like sunk cost talking, Orin. Is there any version where walking away IS the win?",
       fx:{hype:13,heat:5,rapport:13},
       reply:["guest","Orin Maddox","[a long, thoughtful silence] ...Sunk cost. Yes — 'I've paid too much to stop' is the textbook fallacy, the one that keeps gamblers at the table past dawn. [quietly] And maybe walking away IS the win I can't see: the version where I let the theory go, call Daniel, apologize to my ex-wife, and spend my remaining years being a person instead of a case. That life is RIGHT THERE. I can almost touch it when you describe it. [a breath] The honest reason I don't reach for it is that I've made being-right my whole identity, and a man doesn't walk away from his identity even to save his life. That's not wisdom. It's just the deepest groove worn into me. You're showing me the door. I can see the door. I just don't know how to be the man who walks through it. Not yet. Maybe not ever. But — I see it. Tonight I see it. That's new."],
       reveal:"Acknowledges 'walking away' might be the real win he can't reach for",
       note:"The most hopeful crack in Maddox — he glimpses the life beyond the theory. Knife's edge.",
       next:"mar_galileo"},
      {verb:"dead",t:"Deadpan",said:"...Find out what I bought. [you let the line stand]",
       fx:{hype:13,heat:6,rapport:11},
       reply:["guest","Orin Maddox","Find out what I bought. [a breath] Every other reason to continue has burned away — the hope, the vindication, the believers, even the anger, mostly. What's left is the barest possible motive: a transaction I have to see closed, a question I have to hear answered, before whatever's coming comes. It's a thin reason to live. But thin reasons have carried men across deserts before. Mine's carried me twenty years. It'll carry me through tonight. And tonight, for once, I'm not crossing the desert alone. Let's finish it."],
       next:"mar_galileo"}
    ]
  },

  mar_galileo:{
    seg:"THE DESCENT — they laughed at him too", act:4,
    lines:[
      ["guest","Orin Maddox","I know the rebuttal coming. 'Every crank thinks he's Galileo.' And it's a good rebuttal — most who invoke Galileo are exactly the fools the line is meant to puncture. But here is what the smug version forgets: Galileo was RIGHT, and the line exists precisely because being mocked feels identical from the inside whether you're right or wrong. The mockery is not evidence either way. That's the part people love to forget."],
      ["guest","Orin Maddox","So I can't use the laughter to prove I'm right. Fine. But they can't use it to prove I'm wrong. The laughter is just noise. Strip it away and judge the meter."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Right — mockery feels the same from inside whether you're a genius or a crank. It proves nothing. So judge the work.",
       fx:{hype:15,heat:7,rapport:14},
       reply:["guest","Orin Maddox","THAT'S the only fair trial I've ever asked for. Not belief. Not sympathy. Just: set the laughter aside, which proves nothing, and look at the meter, which proves something. Every person who's ever dismissed me has used the laughter AS the look — 'people laugh at him, therefore I needn't examine it.' You're the first to separate the two. That separation is all I wanted for twenty years. You've no idea what it is to finally be in front of someone who'll make the distinction."],
       reveal:"Asks only that mockery and evidence be judged separately",
       next:"the_seed"},
      {verb:"steer",t:"Steer",said:"Most Galileo-invokers are wrong, you admit. What's your honest estimate that you're the rare one who isn't?",
       fx:{hype:13,heat:5,rapport:9},
       reply:["guest","Orin Maddox","[a long pause — the bravest question he's been asked] ...You want a number from the man who lives on numbers. Honest? On my strong nights, ninety percent sure. On my 4 A.M. nights, I'd take even money that I'm exactly the fool the line was written for, and that everything — the meter, the August, the patent — is the elaborate architecture a lonely mind builds to avoid admitting it was simply, ordinarily wrong. [a breath] I live between those two numbers. I have for years. Tonight you've made me say the low one out loud. That's the most honest I've been in public. It cost more than the math did."],
       reveal:"Admits he's not certain — 'even money' on his bad nights",
       note:"The knife's edge: steering Maddox to estimate his own odds is the most human he gets.",
       next:"the_seed"},
      {verb:"push",t:"Push Back",said:"The difference is Galileo had repeatable evidence anyone could check. You have footage that erases itself. That's the whole gap.",
       fx:{hype:13,heat:3,rapport:-13},
       reply:["guest","Orin Maddox","[the cleanest wound yet] ...Repeatable evidence anyone could check. [quietly] Yes. That's the gap. That's the entire gap, and you've named it more precisely than any tenured man ever bothered to. Galileo handed you the telescope and said look. I hand you a story about a meter and a reason you can't see it. [a breath] From the outside those are the same as a lie. I know. The only difference is which one is true, and that's exactly the thing I can't show you. So I'm asking you to do the one thing Galileo never had to ask: believe the man because the evidence won't survive being shown. It's an impossible ask. I'm making it anyway."],
       note:"The definitive challenge of the arc. He concedes the entire epistemics, then makes the impossible ask.",
       next:"the_seed"},
      {verb:"dead",t:"Deadpan",said:"...The laughter is just noise. [you let it stand]",
       fx:{hype:13,heat:5,rapport:10},
       reply:["guest","Orin Maddox","The laughter is just noise. Twenty years of it, and it weighs nothing, and it took me a decade to learn that the weight I FELT was real even though the noise meant nothing. A man can be crushed by a sound that carries no information. That's most of what they did to me — not arguments, just volume. You've given me an hour with the volume off. I'd forgotten what my own theory sounds like in a quiet room."],
       next:"the_seed"}
    ]
  },

  /* ================= CONVERGENCE: THE SEED ================= */
  the_seed:{
    seg:"THE PEAK — the seed equation", act:5,
    lines:[
      ["sys","TRANSMISSION","HEAT RISING. The adjacent carrier locks on and holds — patient, circling. Maddox hears it now; his voice drops."],
      ["guest","Orin Maddox","I want to do something I've never done on air. I want to give your listeners the seed — the first corrected equation, the one line an engineer could build from. Not the whole engine. The germ of it. If even one person hears it and builds it in a garage, then it's loose, and you can't un-discover a thing once it's loose. They can't kill us all."],
      ["guest","Orin Maddox","But the moment I say it, I'm not a lone eccentric anymore. I'm a distribution event. That carrier you hear is not nothing. So I'm asking the host whose hour this has been: do I give it to them, or do I protect it — and myself — and stay a story instead of a spark?"]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Give it to them. Right now. If it's real, the world needs the spark more than you need to be safe.",
       fx:{hype:26,heat:24,rapport:16},
       reply:["guest","Orin Maddox","[a deep breath, then steady] ...Then listen, all of you. Take a single unit. Let it meet itself, and ALWAYS add the reflection — the echo is not noise, the echo is the other half of the truth. From there, every gap in the energy spectrum is a door, not a wall. That's the seed. Build it in the dark and tell no one until it spins. [exhales] It's loose now. God help them, and God help me. Thank you for the courage I couldn't find alone."],
       reveal:"Broadcasts the 'seed equation' live — point of no return",
       flag:"seed_loosed", next:"end_legend"},
      {verb:"push",t:"Push Back",said:"No. A half-equation on pirate radio gets believers hurt chasing a machine that may not work. Don't.",
       fx:{hype:10,heat:-8,rapport:-6},
       reply:["guest","Orin Maddox","[stopped cold] ...You're trying to protect them. From me. [a long pause] No host has ever done that — they all want the scoop, the dangerous moment, the clip. You want to keep a stranger in a garage from wasting his savings on my dream. [quietly] Maybe that's the kindest thing anyone's done about my work in twenty years: taken it seriously enough to worry it might hurt someone. I'll hold the seed. You may have just saved me from making martyrs of believers. Or you've smothered the spark. I'll never know which. Thank you, I think."],
       reveal:"You talk him out of broadcasting it — protective, not dismissive",
       flag:"seed_held", note:"A push that helps: protecting his believers, not mocking him. Rare with Maddox.",
       next:"end_quiet"},
      {verb:"steer",t:"Steer",said:"Don't broadcast a half-equation. Name three engineers you trust and send it to them to build quietly.",
       fx:{hype:16,heat:4,rapport:13},
       reply:["guest","Orin Maddox","[the panic easing] ...A controlled release. Not a broadcast — a handoff. Three sober builders instead of ten thousand dreamers. [slowly] That's wiser than anything I'd planned. I was going to either shout it to everyone or take it to my grave, and you've found the door between. Quiet, competent, deniable. If it spins for them, THEY become the witnesses I couldn't keep alive. Yes. Yes. That's the path. You've just done more for the work in one sentence than I managed in a decade of shouting."],
       reveal:"Chooses a controlled handoff to vetted builders over a broadcast",
       flag:"seed_handoff", next:"end_quiet"},
      {verb:"dead",t:"Deadpan",said:"[you slide the on-air light toward his side of the conversation and say nothing — it's his call]",
       fx:{hype:18,heat:14,rapport:12},
       reply:["guest","Orin Maddox","[a long silence] ...You're handing me the decision. Not steering it, not making it for me. Twenty years of people deciding what to do ABOUT me, and you just handed me the controls and stepped back. [a breath] Then let it be mine. If I disappear after tonight, you'll all know why, and you'll know I chose it with my eyes open. Here is the seed —"],
       reveal:"You hand Maddox the choice; he owns it",
       flag:"seed_owned", next:"end_legend"}
    ]
  },

  /* ================= ENDINGS ================= */
  end_legend:{
    seg:"THE LANDING — it's loose now", act:6,
    lines:[
      ["guest","Orin Maddox","It's out. After tonight there's no putting it back in the bottle, and I feel — lighter, and more hunted, both at once. Whatever happens to me now happens to a man who finally got the thing SAID, on a real transmitter, where it can't be un-said. That's more than I expected to get in this life."],
      ["guest","Orin Maddox","Before they trace this signal — and they will — tell me straight, host, on the record. Was I a genius, or a crank? Your audience has earned your honest verdict, and so, after all this, have I."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"I think history's going to be kind to you, Orin. I genuinely do.",
       fx:{hype:13,heat:8,rapport:15},
       reply:["guest","Orin Maddox","[voice cracking] ...Nobody says that to my face. Nobody. [steadying] I'll carry that sentence into whatever comes next. You were on the right side of the dark, host — the side that listened before it judged. When the grid lights up for free somewhere, remember you heard it here, at 3 A.M., from the rocket man. Goodnight. And — thank you. For the floor. You gave me the floor."],
       reveal:"You publicly back him — your name is now tied to his",
       next:"END"},
      {verb:"push",t:"Push Back",said:"Honestly? I think you believe every word, and I think you're wrong. Both of those are true at once.",
       fx:{hype:15,heat:4,rapport:-8},
       reply:["guest","Orin Maddox","[a long silence — then, softly] ...'You believe it and you're wrong.' That may be the kindest cruel thing anyone has ever said to me, because it grants me the one thing the laughter never did: that I'm SINCERE. Not a fraud. Just wrong, maybe. I can live as a sincere wrong man more easily than as a joke. [a breath] I'll lie awake on it. I always do. Goodnight, host. Keep your courage. You'll need more of it than I did, and I needed a great deal."],
       note:"Brutal honesty that still grants him sincerity. He'd rather be wrong than mocked.",
       next:"END"},
      {verb:"steer",t:"Steer",said:"I think the better question is why a man with a storage unit frightens anyone at all. Let's end there.",
       fx:{hype:14,heat:6,rapport:12},
       reply:["guest","Orin Maddox","[a slow, grateful breath] ...You learned the move. Never answer the trap question — answer the better one. Why DOES a lone man with a meter frighten a trillion-dollar reflex? Because the meter only has to be right ONCE. [a beat] You'd have made a dangerous host in any era, the kind they make calls about. They'll come for you sooner than you think now. Wear it like a medal. Goodnight, Night Frequency."],
       reveal:"Reframes the exit to protect them both",
       next:"END"},
      {verb:"dead",t:"Deadpan",said:"...You were on my show, Orin. [you let that be the entire verdict]",
       fx:{hype:15,heat:6,rapport:11},
       reply:["guest","Orin Maddox","[a surprised, wet laugh] ...'You were on my show.' No verdict. You make THEM decide — every listener, alone, in the dark, with the number loose in their head. That's the most powerful thing a host can do and you did it on instinct, with five words. [a breath] Goodnight. Add the reflection. Whatever else you forget tonight — always add the reflection."],
       next:"END"}
    ]
  },

  end_quiet:{
    seg:"THE LANDING — the seed kept", act:6,
    lines:[
      ["guest","Orin Maddox","So it stays in the dark a while longer — handed carefully, or held entirely. You steered me away from the cliff I was about to jump off with a microphone in my hand. I don't know whether you saved the work or smothered it. Neither do you. Welcome to every decision I've made for twenty years."],
      ["guest","Orin Maddox","Before the line drops — tell me straight, host. Was I a genius, or a crank? You've handled me more gently than the world has. You've earned the right to be honest, and I've earned the right to hear it."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"I think your grandfather-clock of a mind heard something real, and the world wasn't ready to listen.",
       fx:{hype:12,heat:5,rapport:15},
       reply:["guest","Orin Maddox","[quiet, moved] ...'Heard something real.' That's more than I let myself believe most days. Maybe I heard it and built the wrong instrument, like all my ghosts before me. But I HEARD it. You're letting me keep that, and it's the only thing I've ever actually owned. The builders will have the seed by morning. If it spins, you'll know. If it doesn't, you gave a wrong man a kind hour, and that's no small thing either. Goodnight, host."],
       reveal:"You frame Maddox as a sincere hearer of 'something real'",
       next:"END"},
      {verb:"push",t:"Push Back",said:"Honestly, Orin? I think you're a brilliant man who took a wrong turn twenty years ago and built a life defending it.",
       fx:{hype:14,heat:3,rapport:-7},
       reply:["guest","Orin Maddox","[a long breath] ...A wrong turn, defended for twenty years. [quietly] You know the cruelest part of that being possibly true? I'd have to throw away not just the theory but the whole shape of my life — the marriage I lost FOR it, the student I — [stops]. If I'm wrong, then it was all for nothing, and a man can't easily choose 'nothing.' So I keep choosing the theory. Maybe that's not courage. Maybe it's just the inability to afford the alternative. Thank you for the honest knife. It's cleaner than the laughter. Goodnight."],
       note:"He sees that admitting error would mean his whole life was for nothing — and can't pay it.",
       next:"END"},
      {verb:"steer",t:"Steer",said:"I think the realest thing tonight was a man who lost everything and still kept doing the math. Let's end there.",
       fx:{hype:13,heat:5,rapport:13},
       reply:["guest","Orin Maddox","[a breath that's almost a sob] ...Still doing the math. Yes. Whatever else is true — genius or crank, right or ruined — I never stopped doing the math. They took the job, the marriage, the witness, the footage, and I kept a sharp pencil and kept going. Make that the story, if you make one. Not the number. The not-stopping. Goodnight, Night Frequency. And thank you for not making me a punchline. One hour. You gave me one hour as a man."],
       reveal:"Reframes the close around perseverance, not the claim",
       next:"END"}
    ]
  }

  },

  /* ---- finale validator: Maddox rewards rapport (he's fragile, so
         keeping him whole is the achievement) and getting his big
         material on tape; restraint with the seed is honored. ---- */
  score(s){
    const revScore = Math.min(100, s.reveals.length*7);
    let composite = s.peakHype*0.28 + s.rapport*0.34 + revScore*0.22 + (100-s.heat)*0.16;
    if(s.flags.seed_handoff) composite += 8;   // the wise middle path
    if(s.flags.seed_owned) composite += 5;
    return composite;
  },
  outcome(s){
    let line;
    if(s.flags.seed_loosed) line = "You let Maddox broadcast the 'seed' live. The biggest, most dangerous moment your frequency will ever carry — and you're now the host who put an unprovable equation into the world's hands.";
    else if(s.flags.seed_handoff) line = "You steered him from the cliff to a controlled handoff — three sober builders instead of ten thousand dreamers. The wisest path through an impossible choice.";
    else if(s.flags.seed_held) line = "You talked him out of the broadcast entirely — protecting his believers from chasing a machine that may never have spun. He'll never know if you saved the work or smothered it. Neither will you.";
    else if(s.flags.seed_owned) line = "You handed Maddox the decision and let him own it, eyes open. After twenty years of people deciding about him, you let him decide.";
    else line = "An hour with a man you still can't place between genius and ruin.";
    const rapLine = s.rapport>=75 ? " You kept him whole — he left feeling like a scientist instead of a punchline, which is the rarest thing this man ever gets."
      : s.rapport<=30 ? " You left him deflated and small; you got the hour, not the man." : " You and Maddox found an uneasy, real rhythm.";
    const heatLine = s.dangerHot ? " You ran hot enough that the sweep will remember your signal." : "";
    return line + rapLine + heatLine + ` Peak hype ${s.peakHype}, final heat ${s.heat}, rapport ${s.rapport}. ${s.reveals.length} claims made tape.`;
  },
  busted(s){
    return "You ran so hot the patient sweep finally fixed your transmitter mid-broadcast. Maddox, ever the believer, was almost delighted — 'you see? you SEE? this is what they do' — as your signal died. He got out a side door of his own paranoia, still talking. You're the one left traced, holding an hour of tape about a meter that ran backward. He'd call that proof. You'll call it a long night.";
  },
  walkout(s){
    return "You pushed Maddox past what a fragile man can take. He didn't rage — he went quiet, then quieter, and somewhere in the deflation he simply stopped, thanked you in a small voice for 'trying,' and was gone. You confirmed every laugh he's ever heard. The number stays buried, and so, a little more, does he.";
  }
};
})();
