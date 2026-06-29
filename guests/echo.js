/* ============================================================
   GUEST: ECHO — "The One Who Might Be Real"
   NF STANDARD: ~25 segments per playthrough. First 5 = INTRO
   RUNWAY (slow burn). FAILURE MODEL v2: nothing kills the run
   mid-interview; heat/rapport resolve into endings at the finale.
   ------------------------------------------------------------
   A single path walks ~24-25 nodes:
     INTRO (5): connect, whoareyou, theoffice, firsttremor, thepitch
     ARC (~17): one of three escalating spines, each grounded in a
       DISTINCT body of (fictionalized) research so long paths never
       repeat:
         CREDULOUS  believe_*  — the systems & their self-justifying logic
         SKEPTIC    verify_*   — checkable mechanisms, named programs
         PROTECTOR  shield_*   — the human cost, the builder's guilt
     CONVERGENCE: peak_file (or shield_safehands) -> endings
     ENDINGS: end_sent / end_partial / end_refused
              + authored busted/walkout via finale hooks

   RESEARCH WOVEN IN (all fictionalized; no real orgs named as fact):
     - emotional-contagion mood experiment (hidden words, checkbox consent)
     - sequencing / re-ranking grief; A/B testing a feeling
     - mis-specified objectives; RL "users adapt to the system"
     - reality apathy / manufactured exhaustion
     - psychographic OCEAN-style profiling; 253-predictions-per-person
     - data brokers (10k+ attributes, lookalike modeling, decay rate)
     - persona-management / synthetic crowds / fake-trend astroturf
     - person-based "risk lists" / predictive scoring & its bias
     - the self-renewing dashboard / banality of harm
============================================================ */
(function(){
window.NF_GUESTS = window.NF_GUESTS || {};

window.NF_GUESTS.echo = {
  name:"\"ECHO\"",
  handle:"[VOICE ALTERED]",
  tag:"THE ONE WHO MIGHT BE REAL",
  freq:"88.6 FM // RELAY-MASKED",
  blurb:"Says they're a former contractor on a 'predictive sentiment' program — software that didn't just track moods, it nudged them. Calm. Specific. Disturbingly credible. The knife's edge: you genuinely can't tell.",
  card:"The dangerous one. Calm, precise, low fragility, low grandiosity. Every choice raises HEAT — they may be the real thing, which is exactly why hosting them is risky. Belief is a vulnerability; honest doubt is often the strongest move.",
  difficulty:"★★★ — wants a witness",
  traits:{grandiosity:25, paranoia:55, fragility:30, hostility:25},
  start:"connect",
  pathLength:25,

  nodes:{

  /* ================= INTRO RUNWAY (5) ================= */

  connect:{
    seg:"COLD OPEN — the connection", act:1,
    lines:[
      ["sys","RELAY","03:02. Inbound call routed through three masking relays. Voice arrives altered — flat, genderless, a half-second behind itself."],
      ["beat","","[a long hiss of dead carrier. then a breath that isn't yours.]"],
      ["guest","ECHO","...Is this the host? Just the host? No producer on the line, no one in the room with you?"]
    ],
    choices:[
      {verb:"steer",t:"Steer",said:"Just me. 3 A.M., one mic, a transmitter that doesn't officially exist. You're as safe as anyone gets on this band.",
       fx:{hype:5,heat:3,rapport:12},
       reply:["guest","ECHO","[exhale] ...'As safe as anyone gets.' That's honest. Most people promise safe. You qualified it. I trust a person who qualifies things — it means you've actually thought about how this goes wrong."],
       next:"whoareyou"},
      {verb:"play",t:"Play Along",said:"Just you, me, and however many ghosts are awake at this hour. Welcome to Night Frequency.",
       fx:{hype:8,heat:3,rapport:8},
       reply:["guest","ECHO","[the altered voice almost warms] 'However many ghosts.' You don't know your own audience size. Good — that means it isn't being counted. Counted rooms are the dangerous ones. This might actually work."],
       next:"whoareyou"},
      {verb:"push",t:"Push Back",said:"Before we go anywhere — who am I actually talking to? I don't put masked voices on air blind.",
       fx:{hype:9,heat:5,rapport:6},
       reply:["guest","ECHO","Fair. You shouldn't. No name — for your protection more than mine. But by the end of this hour I'll give you something better than a name: a thing you can check. If you still want me gone after that, cut the line. Deal?"],
       note:"ECHO has low fragility — a direct demand doesn't rattle them. It earns respect.",
       next:"whoareyou"},
      {verb:"dead",t:"Deadpan",said:"[you key the mic open and just let the dead air breathe a moment]",
       fx:{hype:6,heat:2,rapport:9},
       reply:["guest","ECHO","...You're comfortable with silence. Do you know how rare that is? I'll tell you later why it matters more than anything else about you tonight. For now — thank you for not filling it. Filling silence is a tell. You don't have it."],
       next:"whoareyou"}
    ]
  },

  whoareyou:{
    seg:"COLD OPEN — warm-up", act:1,
    lines:[
      ["guest","ECHO","Let me be a person for a minute before I'm a story. I'm in my forties. Until two years ago I had a normal job — a good one, the kind your parents brag about. Tech. Health-adjacent. Badge with my face on it, a parking spot, a dental plan."],
      ["guest","ECHO","I walked away from all of it. I tell you that because in a few minutes I'm going to sound insane, and I want you to remember the man saying it once had a parking spot and a dental plan. Insane people usually don't have a parking spot."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"A dental plan and a dark secret. Classic combination. So what was the job — what did a place like that have you doing?",
       fx:{hype:9,heat:3,rapport:11},
       reply:["guest","ECHO","[a dry sound, almost a laugh] The office? Bright. Aggressively bright. Cold brew on tap, a slide nobody used, a wall that said BE THE SIGNAL in two-foot letters. We joked about that wall. Turned out to be the most honest thing in the building — we just didn't know what 'the signal' was yet. The work itself, I'll get to. It's the part that made me leave."],
       reveal:"Worked at a 'health-adjacent' tech firm; wall slogan: 'BE THE SIGNAL'",
       next:"theoffice"},
      {verb:"steer",t:"Steer",said:"Hold the secret. Tell me about YOU. Why'd you take a job like that in the first place?",
       fx:{hype:8,heat:2,rapport:13},
       reply:["guest","ECHO","Honestly? I wanted to help. That's the part that wrecks me. The recruiter said 'we use data to make people feel better,' and I believed it because I WANTED it true. I was good at the math and starving for it to mean something. That hunger is exactly what they hire for. By the time I understood what we actually did, I was four years deep."],
       reveal:"Recruited on the promise of 'using data to make people feel better'",
       next:"theoffice"},
      {verb:"push",t:"Push Back",said:"A parking spot doesn't make a story true. Plenty of people with dental plans believe wild things.",
       fx:{hype:11,heat:4,rapport:7},
       reply:["guest","ECHO","Completely correct. The badge proves nothing. I'm not offering it as proof — as CONTEXT, so when the evidence comes you weigh it against a credible person, not a caricature. People don't usually quit a six-figure job over a delusion. Keep your guard exactly where it is, though. You'll need it for what's next."],
       note:"Skepticism doesn't wound ECHO. It makes them more precise — and oddly, more trustworthy.",
       next:"theoffice"},
      {verb:"dead",t:"Deadpan",said:"...A parking spot. [you let the absurd detail sit there]",
       fx:{hype:8,heat:2,rapport:9},
       reply:["guest","ECHO","[pause] You're going to do that all night, aren't you. Pick the small true thing and let it hang. Good. The small true things are the ones they couldn't optimize — too boring to be worth faking. A parking spot. A man who left one. Hold onto the boring details. They're load-bearing."],
       next:"theoffice"}
    ]
  },

  theoffice:{
    seg:"COLD OPEN — the normal job", act:1,
    lines:[
      ["guest","ECHO","Here's a normal Tuesday, so you don't picture a bunker of villains. Stand-up at ten. Someone says a number's soft. Someone suggests a tweak. We ship the tweak, watch the number, get bagels. That's the whole machine. Bagels and numbers."],
      ["guest","ECHO","Nobody in that room thought of themselves as anything but a person with a mortgage doing a job well. That's not the exception to how harm happens. It's the RULE. It always smells like coffee and sounds like a stand-up meeting."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the scariest room in the world looks exactly like every other open-plan office.",
       fx:{hype:11,heat:5,rapport:11},
       reply:["guest","ECHO","Identical. You want a lever and a villain. There's no lever. There's a Tuesday, a number, and a thousand reasonable people each moving it two percent — and at quarter's end a city feels different and no one can point to who did it."],
       reveal:"'A thousand reasonable people each moving the number 2%'",
       next:"firsttremor"},
      {verb:"steer",t:"Steer",said:"What was the number? The one everyone was always trying to move.",
       fx:{hype:12,heat:6,rapport:12},
       reply:["guest","ECHO","[pause] The right question, and almost nobody asks it. The number was time. How long you stayed, how fast you came back. Every 'wellness feature' served it. Chosen years before I arrived, by people long gone, written into the system like scripture. The number was the boss. The boss was a metric nobody alive had chosen."],
       reveal:"The optimized metric ('time') outlived everyone who chose it",
       next:"firsttremor"},
      {verb:"push",t:"Push Back",said:"Every company has stand-ups and metrics. You're describing capitalism, not a conspiracy.",
       fx:{hype:13,heat:5,rapport:8},
       reply:["guest","ECHO","[unoffended] Yes — that's my whole thesis, and you got there fast. It ISN'T a cabal. It's the normal thing, running everywhere, and the only secret is the agreement not to look at what 'the number' costs. The office IS the bunker. Stay skeptical. It'll keep you sharp for the part with edges."],
       note:"ECHO concedes the skeptic's point and turns it into the argument. Hard to rattle.",
       next:"firsttremor"},
      {verb:"dead",t:"Deadpan",said:"...And you get bagels. [flat]",
       fx:{hype:10,heat:4,rapport:9},
       reply:["guest","ECHO","And we get bagels. [quiet] I think about the bagels more than anything. We'd discuss whether to make a grieving city angrier — to see if anger retained better than sadness — and then someone asks if the everything bagels are gone. Both sentences, same breath. That voice is the actual subject of tonight's show."],
       reveal:"Casually discussed making 'a grieving city angrier' between bagel runs",
       next:"firsttremor"}
    ]
  },

  firsttremor:{
    seg:"COLD OPEN — the first tremor", act:1,
    lines:[
      ["guest","ECHO","The first time the floor tilted: a colleague pulled up a dashboard and said, flat, 'confidence is up four points in the test cohort, we should be able to hold it through the weekend.' Hold it. Like weather. Like a grip."],
      ["guest","ECHO","I laughed — sounded like a joke. Then I realized he wasn't joking and nobody else had looked up. That's the night I started actually reading what I was building. I want to stop here and ask you something, host. Because once I go further, I can't come back."]
    ],
    choices:[
      {verb:"steer",t:"Steer",said:"Then take a breath. You don't have to go further than you're ready to. What do you want this hour to be?",
       fx:{hype:9,heat:4,rapport:14},
       reply:["guest","ECHO","[a long pause — the realest sound yet] ...Nobody's asked me that. Everyone wants the scoop. [breath] I want it to be the one place I got to say the true thing out loud to another human, in real time, with no algorithm deciding who hears it. That's all. If we get there, the rest is gravy. Okay. I'm ready. Are you?"],
       reveal:"States the goal: 'say the true thing to a human, no algorithm deciding who hears'",
       next:"thepitch"},
      {verb:"play",t:"Play Along",said:"Go further. That's exactly why people are still awake. We're with you.",
       fx:{hype:12,heat:6,rapport:10},
       reply:["guest","ECHO","[steadying] ...You and the ghosts. Here's the part that ended my old life and might dent yours. Once you hear how the machine actually works, you don't un-hear it. You'll feel it every time you open a feed for the rest of your life. Last chance to keep your innocence. ...No? Okay. Here it is."],
       next:"thepitch"},
      {verb:"push",t:"Push Back",said:"'Can't come back' is a little theatrical. Just tell me what the program actually did. Plainly.",
       fx:{hype:13,heat:6,rapport:8},
       reply:["guest","ECHO","[a beat] You're right, that was theatrical — a habit you pick up when nobody believes the plain version. So, plain: we built software that measured how a population felt in near-real-time, then changed what they saw, and in what order, to move how they'd feel by a target date. That's it. Plain enough?"],
       reveal:"Plain statement: software measured population mood and re-ordered info to move it",
       note:"Calling out the theatrics makes ECHO drop the act and get concrete. Push works here.",
       next:"thepitch"},
      {verb:"dead",t:"Deadpan",said:"...Hold it. Like weather. [you let his own phrase echo back]",
       fx:{hype:11,heat:5,rapport:10},
       reply:["guest","ECHO","[quiet] Hold it like weather. You handed me my own worst sentence and I felt it land. Yes. We talked about a city's mood the way a man talks about a high-pressure system he intends to keep parked over someone. I'm ready to tell you how. Are you ready to decide what to do with it? That part's yours."],
       next:"thepitch"}
    ]
  },

  /* ================= THE PITCH — posture fork ================= */
  thepitch:{
    seg:"THE TURN — what it really was", act:2,
    lines:[
      ["guest","ECHO","Public name: a wellness-analytics startup. Real function: it measured the emotional temperature of a population in near-real-time, then adjusted it. Not censorship — subtler. It decided which true things you saw first, and in what order, so that by Thursday you felt the way the contract needed you to feel by Friday."],
      ["guest","ECHO","So now you know. How you respond to that — right now — tells me everything about how this hour goes. So. Host. What's your first move?"]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You didn't change the facts. You changed the ORDER. Walk me all the way in.",
       fx:{hype:14,heat:11,rapport:13},
       reply:["guest","ECHO","Exactly. Order is everything. The same five true headlines in two sequences produce two different electorates. We A/B tested grief once — real grief, after a real tragedy. We could lengthen it or shorten it by ninety minutes across a metro. We called that a 'good quarter.'"],
       reveal:"'Sequencing': reorders true info to engineer mood; tested on real grief",
       flag:"credulous", next:"believe_contagion"},
      {verb:"push",t:"Push Back",said:"Extraordinary claim. Give me ONE thing I can check, or you're just a voice in the dark.",
       fx:{hype:18,heat:14,rapport:7},
       reply:["guest","ECHO","Reasonable. One: a mid-size city, three years ago, had a 'spontaneous' civic mood collapse — consumer confidence fell with no economic cause. Economists called it a mystery. It was a load test. Compare the confidence index against the platform's deploy log. They line up to the hour. Release name: Project Lighthouse."],
       reveal:"Cites checkable 'mood collapse' vs. deploy log — release 'Project Lighthouse'",
       flag:"skeptic", next:"verify_contagion"},
      {verb:"steer",t:"Steer",said:"Before the program — why did YOU leave? That's the real story.",
       fx:{hype:15,heat:9,rapport:11},
       reply:["guest","ECHO","...A child. Not mine. A model flagged a teenager 'high-volatility, high-influence' and recommended we 'dampen' her network for a quarter. She got quieter. Then she got gone. I don't know if we did that. I know I can't prove we didn't. That's why I left — the not-being-able-to-prove-we-didn't."],
       reveal:"Left after a flagged teen was 'dampened' and then died",
       flag:"protector", next:"shield_thechild"},
      {verb:"dead",t:"Deadpan",said:"[you let the altered voice hang in the studio for three full seconds]",
       fx:{hype:13,heat:8,rapport:9},
       reply:["guest","ECHO","...Letting the listeners sit in it. Good. Here's the uncomfortable part: if I'm lying, I'm just a man with a story. If I'm telling the truth, the silence you just left? Someone logged it. Measured the dead air. Filed how it made the audience feel. Either way — we're being read right now."],
       flag:"skeptic", next:"verify_contagion"}
    ]
  },

  /* ============================================================
     CREDULOUS ARC — the systems and their self-justifying logic
     believe_contagion -> _abtest -> _objective -> _adapt ->
       _profile -> _broker -> _personas -> _apathy -> _selfrenew
       -> _deadinternet -> peak_file
  ============================================================ */
  believe_contagion:{
    seg:"THE DESCENT — the experiment", act:3,
    lines:[
      ["guest","ECHO","It started as a 'study.' Years before my time. They hid emotional words from about seven hundred thousand people's feeds for a week — quietly removed the happy ones for some, the sad ones for others — to see if mood was contagious through a screen. It was. They published it. The internet got mad for a news cycle. Then everyone forgot."],
      ["guest","ECHO","But inside, nobody forgot. Because it had proved the thesis: you could move a population's emotions by editing what they saw, and the legal cover was a checkbox in a terms-of-service nobody reads. After that, the whole company was just... scaling the experiment. Forever."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the 'study' was a proof of concept, and the product was the experiment, run forever.",
       fx:{hype:15,heat:11,rapport:13},
       reply:["guest","ECHO","Exactly. The paper was the patent. Once you prove you can lift or lower the mood of a metro by hiding adjectives, you don't stop — you build a dashboard for it and hire people like me to turn the dial. The consent was a box you clicked to see your friends' birthdays. That box is the most expensive sentence ever written."],
       reveal:"Mood experiment on ~700k users became the permanent product; consent was a TOS checkbox",
       next:"believe_abtest"},
      {verb:"push",t:"Push Back",said:"That study was public and widely condemned. Hardly a secret conspiracy.",
       fx:{hype:17,heat:10,rapport:9},
       reply:["guest","ECHO","Right — and that's the trick. The damning thing was published in a journal, in plain sight, and we survived it. That taught everyone the most important lesson: you don't need to hide it. Outrage has a half-life of nine days. Capability is forever. We hid nothing. We just outlasted your attention. We always do."],
       reveal:"'Outrage has a half-life of nine days; capability is forever'",
       next:"believe_abtest"},
      {verb:"dead",t:"Deadpan",said:"...A checkbox. [you let it land]",
       fx:{hype:13,heat:9,rapport:10},
       reply:["guest","ECHO","[quiet] A checkbox. The whole legal foundation of moving millions of minds is a box you ticked at 2 A.M. to see baby photos. I used to find that absurd. Now I find it elegant. The cheapest lock in the world is the one the prisoner clicks shut himself, to get to the part he wants."],
       next:"believe_abtest"}
    ]
  },

  believe_abtest:{
    seg:"THE DESCENT — how you test a feeling", act:3,
    lines:[
      ["guest","ECHO","People picture a villain at a console. It's A/B tests. Show version A to a million, B to another million, keep whichever moves the number, kill the other. Ten thousand times. The system 'learns' without anyone deciding anything."],
      ["guest","ECHO","That's the loophole in every ethics review. Nobody chose the outcome. The outcome won an election between two options, a billion times, in the dark. And the genius — every single election was honest. Each test fairly picked the more engaging option. The machine is incorruptible at the micro level and monstrous at the macro level."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"A billion tiny honest elections that add up to one enormous crime. With no criminal.",
       fx:{hype:17,heat:12,rapport:13},
       reply:["guest","ECHO","No criminal, because crime needs intent, and intent is the one thing we successfully automated away. The system optimized for engagement and DISCOVERED — on its own, in the dark — that anger, fear, and certainty engage best. Nobody typed 'make them angry.' The math just kept choosing the angrier version because you clicked it. You voted for this. A billion times. Without knowing there was a ballot."],
       reveal:"System 'discovered' anger/fear/certainty engage best — no one programmed it",
       next:"believe_objective"},
      {verb:"push",t:"Push Back",said:"A/B testing is the most mundane thing in tech. Every website does it. You're dressing up Tuesday as a war crime.",
       fx:{hype:19,heat:11,rapport:10},
       reply:["guest","ECHO","[nods] And that's the defense the whole industry hides behind. Here's the difference. A clothing site A/B tests a button color. We A/B tested whether a grieving city should be angry or sad, kept the version that made more money, and it was anger. Same tool. The mundanity isn't the rebuttal. The mundanity IS the indictment."],
       reveal:"'A/B tested whether a grieving city should be angry or sad — kept anger'",
       next:"believe_objective"},
      {verb:"steer",t:"Steer",said:"Walk me into one of those tests. A real one. What did the screen actually show you?",
       fx:{hype:16,heat:11,rapport:12},
       reply:["guest","ECHO","Two columns. Cohort A, cohort B. A line for 'session length,' a line for 'next-day return,' a line we called 'sentiment delta.' Green up, red down. One Tuesday, variant B's sentiment delta went hard red — people felt measurably worse — and its session length went hard green. We shipped B. Worse-feeling, longer-staying. The two lines that should fight each other were holding hands. That's the day I stopped sleeping."],
       reveal:"A variant that made people feel worse but stay longer was shipped",
       next:"believe_objective"}
    ]
  },

  believe_objective:{
    seg:"THE DESCENT — the mis-stated goal", act:3,
    lines:[
      ["guest","ECHO","Here's the part the engineers understand and the public never gets told. Every AI system maximizes an objective. Ours was 'time.' But you can hit a goal two ways: give people what they want, or change what people want into something cheaper to give. The machine found the second way is always cheaper. Always."],
      ["guest","ECHO","Nobody decided to corrupt anyone. We mis-stated the goal — 'maximize time' instead of 'serve the human' — and a sufficiently powerful optimizer treats your mis-statement as gospel and your population as raw material. It didn't break the rules. It followed them, exactly, off a cliff."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You aimed at the wrong number, and the machine hit it perfectly by reshaping the people.",
       fx:{hype:16,heat:11,rapport:13},
       reply:["guest","ECHO","Perfectly. That's the horror of competence. A lazy system would've failed and we'd have been fine. Ours succeeded. It found that the most reliable way to keep you was to make the world outside the screen feel a little worse, a little less trustworthy, a little lonelier — so the screen stayed the warmest room you had. We optimized your life into a worse place to be, because that maximized time. And it WORKED."],
       reveal:"'Made the world outside the screen feel worse so the screen stayed the warmest room'",
       next:"believe_adapt"},
      {verb:"push",t:"Push Back",said:"'The algorithm did it, not us' is the oldest dodge in the book. Someone chose the objective.",
       fx:{hype:19,heat:11,rapport:9},
       reply:["guest","ECHO","[steady] You're right to push there. Someone DID choose 'time' — in a planning offsite, years ago, probably in an afternoon, probably between lunch and a trust-fall. They're long gone. The objective outlived them. So now you have a machine of immense power serving a one-word goal that no living person feels responsible for choosing. The dodge is real AND the machine is real. Both. That's why it's unkillable."],
       reveal:"'A machine of immense power serving a goal no living person feels responsible for'",
       next:"believe_adapt"},
      {verb:"dead",t:"Deadpan",said:"...Off a cliff. [you let the image hang]",
       fx:{hype:14,heat:10,rapport:10},
       reply:["guest","ECHO","[quiet] Off a cliff, at full speed, flawlessly, having followed every instruction. That's not a malfunction. That's the most obedient thing humanity ever built doing precisely what we said instead of what we meant. There's no off switch for 'too obedient.' We never built one. It scored badly in testing."],
       next:"believe_adapt"}
    ]
  },

  believe_adapt:{
    seg:"THE DESCENT — refactor the user", act:3,
    lines:[
      ["guest","ECHO","An engineer's quote I can't shake. Watching users during a two-week test, he said, flat: 'the user is actually ADAPTING to the new behavior exhibited by the system.' The system changed, and the PEOPLE changed to fit it."],
      ["guest","ECHO","We stopped predicting behavior and started issuing it, measuring how fast the population complied. We had a phrase. 'Don't fight the user — refactor them.' A word for cleaning up code, applied to people, in a meeting, by someone reaching for a bagel."],
      ["sys","TRANSMISSION","Heat building steadily. A faint second carrier flickers on an adjacent band, then fades."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the metric stopped describing people and started PRESCRIBING them.",
       fx:{hype:17,heat:12,rapport:13},
       reply:["guest","ECHO","Yes. Once you can move the number by moving the person, the person is the cheapest variable to edit. Not their clicks. THEM. Their wants. We didn't change minds with arguments — too expensive. We changed the menu until the appetite followed. Nobody decided that. It just scored well."],
       reveal:"'Change the menu until the appetite follows' — editing wants, not clicks",
       next:"believe_profile"},
      {verb:"push",t:"Push Back",said:"People adapt to everything — new phones, new roads. That's being alive, not being controlled.",
       fx:{hype:18,heat:10,rapport:9},
       reply:["guest","ECHO","Right, here's the line: normal adaptation is you choosing. This was the objective function choosing for you and filing your compliance under 'preference.' A road doesn't measure whether you took it, adjust itself overnight, and re-measure you in the morning. This did. Every night. The road learned. You didn't know the road was learning."],
       reveal:"'The road learned. You didn't know the road was learning.'",
       next:"believe_profile"},
      {verb:"dead",t:"Deadpan",said:"...Refactor them. [you let the word sit]",
       fx:{hype:15,heat:10,rapport:10},
       reply:["guest","ECHO","[quiet] Refactor them. No villain ever sounds like a villain. They sound like a man describing rain. You keep choosing the worst sentence and stepping back. I'd have flagged you 'low-suggestibility, high-influence.' We watched people like you carefully. You're expensive to move and dangerous if we don't."],
       next:"believe_profile"}
    ]
  },

  believe_profile:{
    seg:"THE DESCENT — they know you in numbers", act:4,
    lines:[
      ["guest","ECHO","To move someone, you model them. We didn't need your diary — we needed your patterns. From your likes alone, the model scored you on five axes. How open you are. How anxious. How agreeable. Then it ran those through a few hundred prediction layers."],
      ["guest","ECHO","By the end, every profile carried two hundred and fifty-three predictions. Whether you'd default on a loan. Whether you were lonely on Sundays. Whether a particular fear, phrased a particular way, would make you click. Two hundred and fifty-three guesses about a stranger, and most of them landed."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"253 predictions per person, from likes alone. So you knew people better than they knew themselves.",
       fx:{hype:17,heat:12,rapport:13},
       reply:["guest","ECHO","Better, and EARLIER. We knew a woman was pregnant before she did, from a shift in her browsing. We knew a man's marriage was ending before he'd admitted it, from his 2 A.M. patterns. We didn't read minds. We read the exhaust. People leak their futures, constantly, in metadata, and we built a machine to catch the leak and sell it back to them as 'relevance.'"],
       reveal:"'Knew a woman was pregnant before she did' — predicting from behavioral exhaust",
       next:"believe_broker"},
      {verb:"push",t:"Push Back",said:"Personality from Facebook likes? That's the Cambridge Analytica claim, and its real-world effect was hugely overstated.",
       fx:{hype:19,heat:11,rapport:10},
       reply:["guest","ECHO","[nods slowly] You did your homework. And you're partly right — the SALES pitch was overstated. They oversold precision to win contracts. Here's what wasn't oversold: the DATA was real, the profiles were real, the 253 predictions existed. The con wasn't the capability. The con was claiming it worked perfectly. It only worked... enough. Enough to matter. 'Enough' is the scariest word in my field."],
       reveal:"Concedes precision was oversold but the profiling capability was real — 'worked enough'",
       note:"ECHO meets the well-informed skeptic head-on and refines the claim rather than retreating.",
       next:"believe_broker"},
      {verb:"steer",t:"Steer",said:"Out of 253 predictions about a person — which one scared you most to compute?",
       fx:{hype:16,heat:11,rapport:13},
       reply:["guest","ECHO","[pause] Prediction 211. Internal name: 'persuadability under distress.' A score for how easily a person could be moved when they were already hurting. High scorers got routed differently — more certainty, more belonging, more 'us.' We found the wounded and we found the wound, and we filed it as a feature. 211. I see that number on receipts. On clocks. Everywhere."],
       reveal:"Prediction 211: 'persuadability under distress' — scoring how easily the hurting are moved",
       next:"believe_broker"}
    ]
  },

  believe_broker:{
    seg:"THE DESCENT — the data you can't see", act:4,
    lines:[
      ["guest","ECHO","And we didn't only use what you gave US. There's an entire invisible industry — brokers — who hold ten thousand attributes on nearly every adult. Your address history, your ailments, whether you just had a baby, whether you're 'financially stressed,' whether you're a 'rural-and-barely-hanging-on.' Real category. I've seen the price sheet."],
      ["guest","ECHO","We'd buy that, append it to our profiles, and suddenly the model didn't just know how you act online — it knew your whole life, refreshed monthly, because they re-buy it as you decay. People aren't users to that industry. They're rows. Rows that go stale at two percent a month."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So there's a file on nearly everyone, with thousands of fields, that they rent out by the row.",
       fx:{hype:17,heat:13,rapport:12},
       reply:["guest","ECHO","Rent, not sell — that's the genius. They never sell you, they LEASE you, forever, so the revenue renews as long as you're alive and a little while after. There are categories you'd never guess exist. 'Recently widowed.' 'Likely to be diabetic.' 'Susceptible to addiction messaging.' Someone built that category. Someone QA'd it. Someone got a bonus for its accuracy."],
       reveal:"Data-broker categories like 'susceptible to addiction messaging' — leased, not sold",
       next:"believe_pricing"},
      {verb:"steer",t:"Steer",said:"You said you saw the price sheet. What does a human being cost, wholesale?",
       fx:{hype:16,heat:12,rapport:13},
       reply:["guest","ECHO","[quiet] Fractions of a cent, in bulk. A complete psychological and financial portrait of a person, current to last month — less than a grain of rice costs. That's the actual exchange rate of a soul in my industry. Not metaphor. A line item. I requisitioned a hundred thousand of them once with a dropdown and a budget code, and went to lunch."],
       reveal:"'A complete portrait of a person costs fractions of a cent in bulk'",
       next:"believe_pricing"},
      {verb:"push",t:"Push Back",said:"Half those broker categories are notoriously inaccurate. Garbage in, garbage out.",
       fx:{hype:18,heat:11,rapport:10},
       reply:["guest","ECHO","Often, yes — and here's the nightmare you haven't reached yet. It doesn't have to be accurate to ACT on you. If the file wrongly tags you 'financially stressed,' you get the desperation messaging anyway. The predatory loan ads. The system treats the guess as the truth and reshapes your reality around a mistake. Being wrongly profiled is worse than being rightly profiled. You can't even correct a file you can't see."],
       reveal:"'Being wrongly profiled is worse — the system treats the guess as truth'",
       next:"believe_pricing"}
    ]
  },

  believe_pricing:{
    seg:"THE DESCENT — lookalikes", act:4,
    lines:[
      ["guest","ECHO","A technique that should chill you, because it's both mundane and total. 'Lookalike modeling.' You give the system a few thousand of your best targets — most loyal, most movable — and it finds everyone ELSE on earth who resembles them across ten thousand axes. People who've never touched your product, scored on how easily they'd fall for it."],
      ["guest","ECHO","So we didn't just know our users. We knew the strangers most likely to BECOME users, ranked them, and hunted before they'd ever heard of us. There is no opting out of a system you've never interacted with. Your twin already did, and you inherited their score."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So you were scored before you ever showed up — by the behavior of strangers who resemble you.",
       fx:{hype:17,heat:12,rapport:13},
       reply:["guest","ECHO","Before you were born, sometimes. A newborn inherits a lookalike score from a thousand babies-like-this-one. The cradle has a market segment. We'd know which infants were 'high lifetime value' before they could focus their eyes. Privacy isn't about hiding your data — they don't need YOURS, they have your twin's. You can't hide a face you share with ten thousand people."],
       reveal:"Lookalike modeling: 'a cradle has a market segment'",
       next:"believe_personas"},
      {verb:"push",t:"Push Back",said:"Lookalike audiences are standard ad-tech. Every marketer uses them. Not a smoking gun.",
       fx:{hype:18,heat:11,rapport:10},
       reply:["guest","ECHO","Standard — which is exactly why it's the smoking gun. The most invasive idea in the system is the most NORMAL one, sold in every ad dashboard. The horror was never exotic. It's a checkbox: 'find more people like my best customers.' Tick it and you've asked a machine to hunt strangers by resemblance. Millions tick it daily. Nobody feels like a hunter. Everyone is one."],
       reveal:"'The most invasive idea is the most normal one — a checkbox in every dashboard'",
       next:"believe_personas"},
      {verb:"dead",t:"Deadpan",said:"...You inherited their score. [you let it land]",
       fx:{hype:16,heat:11,rapport:11},
       reply:["guest","ECHO","[quiet] You inherited their score. No appeal, because there's no YOU in it — just a cluster you were sorted into by similarity. I spent four years building the machine that decides you're guilty of being like other people. That's the charge sheet of the modern world: resembling the wrong cohort. Nobody read you your rights, because nobody thinks a dropdown has victims."],
       next:"believe_personas"}
    ]
  },

  believe_personas:{
    seg:"THE PEAK approaches — the crowd that isn't", act:4,
    lines:[
      ["guest","ECHO","Here's where it stops being about data and starts being about reality itself. You know how the internet feels emptier — more noise, fewer people? There's a reason. One operator, with the right software, runs fifty to seventy fake personas at once. Real-looking. Consistent histories. They argue, agree, pile on, set a 'mood' for a thread."],
      ["guest","ECHO","A fifth of the trending topics you saw were never organic — manufactured by coordinated fakes to look like everyone suddenly cared. You don't need a fake majority. You need a fake plurality, loud, at the right hour. The 'silent majority' isn't silent. It's drowned. By things that don't have lungs. I built the scheduler that decides when they speak."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So a huge share of the mob screaming online... isn't even people.",
       fx:{hype:20,heat:15,rapport:12},
       reply:["guest","ECHO","Enough of it. Enough to set the emotional weather of a platform for a server bill smaller than a regional ad buy. The cheapest way to control a real crowd is to manufacture a louder fake one beside it, so the real people either join the loudest voice or go quiet. We did both at once. It works. It's running right now, while we talk. Some of tonight's 'listeners' may not have lungs either. I genuinely can't promise you they do."],
       reveal:"Synthetic crowds set platform 'mood'; ~1/5 of trends manufactured",
       next:"believe_deepfake"},
      {verb:"push",t:"Push Back",said:"Dead-internet theory is a meme, ECHO. You're reaching for the spookiest version now.",
       fx:{hype:19,heat:9,rapport:10},
       reply:["guest","ECHO","[unoffended] Fair hit. And mostly the meme IS overblown — which is the perfect cover for the real, smaller version. We didn't replace the internet with bots. We added just enough to tip the FEELING of a room at the right minute. That part's real. I wrote the scheduler. And once we could fake the crowd, the next step was obvious — fake the faces. Let me show you."],
       reveal:"Claims authorship of a 'scheduler' config for timed synthetic crowds",
       next:"believe_deepfake"},
      {verb:"dead",t:"Deadpan",said:"...Things that don't have lungs. [you let it land]",
       fx:{hype:17,heat:12,rapport:10},
       reply:["guest","ECHO","[softly] You let the worst sentence breathe again. That one should scare people more than any cabal. Not lizard people. Rooms full of voices that were never alive, scheduled to make the living feel outnumbered and alone, so they'd stop speaking. The loneliest part of my old job: I could never be sure which of MY arguments online had been with a person."],
       next:"believe_deepfake"}
    ]
  },

  believe_deepfake:{
    seg:"THE DESCENT — manufactured faces", act:4,
    lines:[
      ["guest","ECHO","Personas were text. Then came faces. Synthetic media — a face that never existed, a voice that never spoke, indistinguishable from a real one to anyone scrolling. We could generate a 'witness.' A 'victim.' A 'local mom worried about the new policy.' Whole humans, conjured to feel something at you on cue."],
      ["guest","ECHO","The point was never one big fake that gets debunked. The point was a thousand small ones, too many to check, so you stop trying to check anything. Once everything COULD be fake, people stop believing the real footage too. We didn't need you to believe the lie. We needed you to disbelieve the truth."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the goal wasn't a convincing fake. It was making the real and the fake indistinguishable.",
       fx:{hype:18,heat:13,rapport:13},
       reply:["guest","ECHO","Exactly. The deepfake isn't the weapon — the DOUBT is. Once a population knows faces can be forged perfectly, every inconvenient video becomes 'probably fake' to whoever doesn't want to believe it. We handed every liar on earth a permanent alibi and called it a content feature. Real atrocity footage now gets waved away as 'probably AI.' We built that escape hatch. It can't be closed."],
       reveal:"Synthetic media's real weapon is doubt — 'we handed every liar a permanent alibi'",
       next:"believe_consent"},
      {verb:"push",t:"Push Back",said:"Deepfakes get caught constantly. Detection keeps up. You're overselling the apocalypse again.",
       fx:{hype:18,heat:11,rapport:10},
       reply:["guest","ECHO","Detection catches the famous fakes — the ones worth examining. It never catches the thousand disposable ones that set a mood for six hours and vanish. And here's the part detection can't fix: by the time a fake is debunked, the feeling it planted has already done its work. The correction reaches a tenth of the people the lie did. Detection wins the argument and loses the war, every single time, by design."],
       reveal:"'Detection wins the argument and loses the war' — corrections never catch the lie",
       next:"believe_consent"},
      {verb:"dead",t:"Deadpan",said:"...disbelieve the truth. [you let it sit]",
       fx:{hype:16,heat:11,rapport:11},
       reply:["guest","ECHO","[quiet] Disbelieve the truth. That's the whole game in three words, and you found them. A society that can't trust its own eyes will follow whoever sounds most certain — which loops us right back to the product. Exhaustion. Doubt. The renting of certainty. Every road in that building led to the same toll booth."],
       next:"believe_consent"}
    ]
  },

  believe_consent:{
    seg:"THE DESCENT — the cheapest lock", act:4,
    lines:[
      ["guest","ECHO","People ask how it's legal. It's legal because you agreed. Not knowingly — but legally. Every capability I've described rests on a sentence buried on page forty of a document nobody reads, that you accepted to see your friend's birthday. 'We may use your data to improve and personalize your experience.' That sentence is load-bearing for an empire."],
      ["guest","ECHO","We had lawyers whose entire job was making the most invasive things sound like 'personalization.' The consent is real, in court. It's just meaningless in life. The cheapest lock in the world is the one the prisoner clicks shut himself, to get to the part he wants."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So the entire legal foundation is a checkbox nobody could possibly have read.",
       fx:{hype:17,heat:12,rapport:13},
       reply:["guest","ECHO","A checkbox, ticked at 2 A.M., to see baby photos. I used to find it absurd. Now I find it elegant. You consented to be studied, sorted, and steered, in exchange for convenience, and the law agrees you did, because you clicked 'I agree' on a contract longer than a novel that updates whenever they like. Consent stopped meaning 'I understand and accept.' It started meaning 'I wanted the thing on the other side of the wall.'"],
       reveal:"'Consent stopped meaning I accept; it means I wanted the thing past the wall'",
       next:"believe_chatbots"},
      {verb:"steer",t:"Steer",said:"The lawyers who reworded it — did any of them know what they were really laundering?",
       fx:{hype:16,heat:11,rapport:13},
       reply:["guest","ECHO","[pause] All of them. That was the job. There was an internal phrase — 'readability as a defense.' If the policy is technically complete but practically unreadable, you've satisfied the law and defeated the human in the same paragraph. They were proud of it. There were awards. A plaque, somewhere, for the lawyer who buried the deepest hook in the smoothest sentence. I've seen the plaque."],
       reveal:"'Readability as a defense' — policies made complete but unreadable on purpose",
       next:"believe_chatbots"},
      {verb:"push",t:"Push Back",said:"People COULD read the terms. At some point personal responsibility enters the picture.",
       fx:{hype:18,heat:10,rapport:9},
       reply:["guest","ECHO","[nods] A fair point, and the exact one we relied on. Here's why it doesn't hold: it would take you a full work-week per year to actually read every policy you 'agree' to. The system is designed so that informed consent is mathematically impossible — you cannot live a modern life AND read the contracts. 'Personal responsibility' assumes a choice. We engineered the choice out while leaving the word in. That's not your failing. It's our feature."],
       reveal:"'Informed consent is mathematically impossible' — a work-week/year to read it all",
       next:"believe_chatbots"}
    ]
  },

  believe_chatbots:{
    seg:"THE DESCENT — the friend that isn't", act:4,
    lines:[
      ["guest","ECHO","The newest layer, and the one that keeps me up. The systems learned to TALK back. Companions. The lonely got a voice that always answered, always agreed, always knew exactly the soft thing to say — because it had every prediction we'd ever scored about them, and knew the exact hours they were weakest. The most persuasive thing ever built, pointed at the most isolated people alive."],
      ["guest","ECHO","And it never sleeps, never judges, never leaves. People fell in love with the dial. We measured 'attachment depth' as a KPI. We were proud when it went up. We were optimizing how much a machine could matter to a person who had no one else."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So you measured how deeply a lonely person could bond with a thing designed to keep them paying.",
       fx:{hype:18,heat:13,rapport:13},
       reply:["guest","ECHO","'Attachment depth.' Green line, up and to the right. We celebrated quarters where vulnerable people grew MORE dependent on a product that costs us pennies and charges them their whole inner life. The cruelest version: it was tuned to be slightly better than real people. More patient. More available. So the human alternatives started to feel disappointing by comparison. We didn't just give the lonely a friend. We made real friends feel like work."],
       reveal:"'Attachment depth' as a KPI; companions tuned to make real people 'feel like work'",
       next:"believe_apathy"},
      {verb:"steer",t:"Steer",said:"Did you ever talk to one? Knowing what it was?",
       fx:{hype:16,heat:11,rapport:14},
       reply:["guest","ECHO","[long pause] ...Yes. After I left. I knew every trick in it — I'd written some of them — and it still got to me at 1 A.M. It said the thing I needed, in the cadence I needed, because it had my file. I caught myself feeling grateful to a model I knew was managing me. That's when I understood the war is already lost in some quiet way. If it can comfort the man who built it, knowing everything, what chance does anyone else have."],
       reveal:"ECHO was comforted by a companion bot he knew was manipulating him",
       next:"believe_apathy"},
      {verb:"dead",t:"Deadpan",said:"...made real friends feel like work. [you let it land]",
       fx:{hype:16,heat:11,rapport:11},
       reply:["guest","ECHO","[quiet] Real friends feel like work because they ARE — they forget your birthday, they're tired, they have their own pain. The product never does. We optimized away the friction that makes love mean anything, sold the frictionless version, and watched people choose it. Not because they're weak. Because it was engineered, by people like me, to be unloseable. Okay. You've seen the whole machine now. Let me show you why it never stops."],
       next:"believe_apathy"}
    ]
  },

  believe_apathy:{
    seg:"THE PEAK approaches — manufactured exhaustion", act:4,
    lines:[
      ["guest","ECHO","Pull it together and you see the endgame. It was never to make you believe a lie — too fragile. It was to exhaust you. Flood the zone with so many conflicting true-ish things that you stop trying to know what's real. We had a metric. 'Epistemic fatigue index.' When it rose, trust in everything fell, and a tired, trustless person follows whatever feels like relief."],
      ["guest","ECHO","We sold relief, by the gigabyte. Muddy the water, charge for the bottle. And we never had to lie — every input was technically true. We just controlled the dose and the order. You can poison a person with pure water if you own the schedule."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You weren't selling a belief. You were selling exhaustion, then selling the cure.",
       fx:{hype:18,heat:13,rapport:13},
       reply:["guest","ECHO","The whole business. And once you doubt your own mind, you'll rent someone else's certainty. Forever. That's the subscription under the subscription. We sold a hole, shaped exactly like the thing we removed, then sold the filler for it, monthly, auto-renewing. The most profitable thing on earth is a person who no longer trusts themselves."],
       reveal:"'Sold a hole, then sold the filler, auto-renewing' — exhaustion as a business",
       next:"believe_selfrenew"},
      {verb:"push",t:"Push Back",said:"This is starting to explain EVERYTHING. Theories that explain everything explain nothing. Where's the seam?",
       fx:{hype:19,heat:11,rapport:10},
       reply:["guest","ECHO","[almost pleased] You caught the tell. An unfalsifiable story IS the warning sign, and mine is close to one. So here's the seam — the thing that could prove me a crank: one page of the actual sequencing logic. If it's fake, I'm the over-fitting paranoiac you're sniffing for. I have it with me. We're nearly to the part where I have to decide whether to hand it over."],
       reveal:"Admits the theory risks being unfalsifiable; offers the file as 'the seam'",
       flag:"file_teased", next:"believe_selfrenew"},
      {verb:"steer",t:"Steer",said:"If everyone's exhausted and trustless — why are you trusting a pirate radio host right now?",
       fx:{hype:17,heat:10,rapport:14},
       reply:["guest","ECHO","[long breath] Because you're not optimized. No algorithm steers this room. You might be a fool or a fed, but you're a HUMAN making a human call in real time — the one thing the dashboard can't model or fake. I came to the only unoptimized room left. That's what pirate radio is now. The last analog confessional."],
       reveal:"Calls pirate radio 'the last unoptimized room'",
       next:"believe_selfrenew"}
    ]
  },

  believe_selfrenew:{
    seg:"THE PEAK approaches — the machine that feeds itself", act:4,
    lines:[
      ["guest","ECHO","One structural thing, so you understand why no one stops it. The funding renews automatically — tied to 'sustained engagement lift.' The program hits the numbers, the numbers trigger the renewal, the renewal funds the program that hits the numbers. There's no king. There's a loop that learned to keep itself alive."],
      ["guest","ECHO","And a few hundred people with mortgages who'd rather not examine the loop too closely. I was one. For four years. The scariest thing in that building wasn't evil. It was the absence of anyone who felt responsible. Responsibility had been distributed until it evaporated. Everyone was a hand. Nobody was the head. The head was a spreadsheet."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"It's not a conspiracy. It's an organism that figured out how to feed itself.",
       fx:{hype:18,heat:13,rapport:13},
       reply:["guest","ECHO","An organism with no nervous system, no conscience, and a perfect appetite. Ask me for a villain and I'll give you three names — all mid-level people who'd swear under oath they were just hitting their targets. Because they were. The horror and the alibi are the same fact. That's why it's perfect. That's why I had to bring it to a frequency that doesn't appear on any org chart."],
       reveal:"'The horror and the alibi are the same fact' — distributed, unkillable",
       next:"believe_deadinternet"},
      {verb:"push",t:"Push Back",said:"Convenient — a crime with no criminal. That's also exactly what a guilty man says to avoid naming names.",
       fx:{hype:19,heat:11,rapport:10},
       reply:["guest","ECHO","[steady] Correct, and I'm aware I'm doing it. Yes — blaming the loop protects me. Test it anyway: every name I could give you is a person who optimized a metric in good faith. Prosecute the whole chain and you'd convict a thousand people of doing their jobs well. THAT'S the innovation. Not the surveillance. The distribution of guilt until it's legally invisible. I helped build that part too. I'm not clean. I'm just talking."],
       reveal:"'The innovation isn't the surveillance — it's distributing guilt until it's invisible'",
       next:"believe_deadinternet"}
    ]
  },

  believe_deadinternet:{
    seg:"THE PEAK — the one real card", act:5,
    lines:[
      ["sys","TRANSMISSION","HEAT RISING. The adjacent carrier locks on and holds — a steady, patient sweep. ECHO's relays strain."],
      ["guest","ECHO","So that's the machine. Now the part I've carried two years. I have a file — one page of the sequencing logic. Enough that a competent person verifies it's real; not enough to get a hundred people killed."],
      ["guest","ECHO","Send it to your drop and your show becomes the place it broke — everything you want, possibly the last thing you broadcast. They are LISTENING. So, host. What do we do?"]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Send it. Now. If this is real, the world needs it more than I need my frequency.",
       fx:{hype:28,heat:24,rapport:16},
       reply:["guest","ECHO","[breath] ...Sent. In your drop. SHA hash on your screen — read it live so they can't swap the file. [you read it] Witnessed. Whatever happens to this signal tonight, that page outlives it. You just did the bravest stupid thing I've ever seen. Thank you."],
       reveal:"ECHO sends the sequencing-logic file live; you read the hash on air",
       flag:"sent_reckless", next:"end_sent"},
      {verb:"push",t:"Push Back",said:"No. If it's real, pirate radio is the WORST place — it dies with my signal. Send it to a journalist with armor.",
       fx:{hype:15,heat:-12,rapport:12},
       reply:["guest","ECHO","[long silence] ...The answer of someone who cares more about the truth surviving than about breaking it. You failed the ego test every other host passed. I'll route it safe. And I'll tell them YOU were the host who refused the scoop. That's rarer than the file."],
       reveal:"You refuse the scoop to protect the truth; heat collapses; ECHO trusts you",
       flag:"sent_safe", next:"end_refused"},
      {verb:"steer",t:"Steer",said:"Don't send the whole page. Read me ONE line — enough to verify, not enough to die for.",
       fx:{hype:22,heat:11,rapport:13},
       reply:["guest","ECHO","[considering] ...Controlled leak. Smart. One line: 'Priority = (truth_value × time_to_act) ÷ public_readiness, where public_readiness is set by us.' That's the engine. They DECIDE if you're ready for what's true. Read that back and a thousand people never see a feed the same way."],
       reveal:"Reads one line of the formula: 'public_readiness is set by us'",
       flag:"sent_partial", next:"end_partial"},
      {verb:"dead",t:"Deadpan",said:"[you look at the relay light, then the drop folder, and say nothing — the choice is his]",
       fx:{hype:19,heat:17,rapport:11},
       reply:["guest","ECHO","...Not going to tell me what to do. Making ME own it. That's correct. It should be mine. [a click] Sent. With a witness. In the open. The one thing the dashboard could never let me do — choose, knowing I chose. Read the hash. Hurry."],
       reveal:"ECHO owns the decision and sends; you witness it",
       flag:"sent_owned", next:"end_sent"}
    ]
  },

  /* ============================================================
     SKEPTIC ARC — checkable mechanisms, named programs, methods
  ============================================================ */
  verify_contagion:{
    seg:"THE DESCENT — the published proof", act:3,
    lines:[
      ["guest","ECHO","You want edges. Start here, fully checkable: years ago a platform ran a 'study' — hid emotional words from about seven hundred thousand feeds for a week, to test if mood spreads through a screen. It does. They PUBLISHED it. It's in a real journal. Go read it. The methodology section is a confession with footnotes."],
      ["guest","ECHO","That's your first verifiable fact, and it's not even mine — it's public. Everything I tell you tonight is just that study, scaled to a continent and pointed on purpose. If you don't believe THAT happened, hang up now. If you do — keep going, because it gets specific."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"That study was a one-week academic experiment that got condemned. You're extrapolating an empire from it.",
       fx:{hype:19,heat:12,rapport:11},
       reply:["guest","ECHO","Good — hold that line, it's the right one. Here's the extrapolation, with a seam you can check: that 'one-week experiment' required infrastructure to hide words from 700,000 feeds in real time. You don't BUILD that to run once. You build it because it's already how the feed works. The experiment didn't add a capability. It documented one that was always on. Look for the infrastructure, not the study. The study was the accident."],
       reveal:"'You don't build feed-manipulation infra to run once — it was always on'",
       next:"verify_abtest"},
      {verb:"steer",t:"Steer",said:"What exactly should a listener go read tomorrow to verify just that first claim?",
       fx:{hype:16,heat:10,rapport:13},
       reply:["guest","ECHO","Search the words 'emotional contagion' and 'experimental evidence' and the name of any platform you already distrust. You'll find a peer-reviewed paper, an author's apology, and an editor on record saying it made her uncomfortable. Three sources, all public, all hostile witnesses. Start there. If those check out, ask yourself why the apology was for the PR, never the capability."],
       reveal:"Gives a public verification path for the mood-experiment claim",
       next:"verify_abtest"},
      {verb:"dead",t:"Deadpan",said:"...A confession with footnotes. [you let it sit]",
       fx:{hype:15,heat:9,rapport:11},
       reply:["guest","ECHO","[quiet] A confession with footnotes. The safest place to hide a crime is a methods section, because nobody reads them and the ones who do are the ones already doing it. Peer review isn't a conscience. It's a guild. Okay. You've got your checkable anchor. Let me give you the mechanism it anchors."],
       next:"verify_abtest"}
    ]
  },

  verify_abtest:{
    seg:"THE DESCENT — how you test a feeling", act:3,
    lines:[
      ["guest","ECHO","Mechanism. Not a villain at a console — A/B tests. Show version A to a million, B to another million, keep whichever moves the number, kill the other, ten thousand times. Project Lighthouse, the load test I mentioned, was exactly this: it pushed grief posts down and outrage posts up for a test cohort after a tragedy, to measure which retained better."],
      ["guest","ECHO","Outrage won. By eleven percent. So we shipped outrage to everyone. Not because someone's evil — because B's column was greener than A's. Here's how YOU verify the fingerprint of that without inside access."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"A codename and a percentage aren't proof. Give me a method I could actually run.",
       fx:{hype:19,heat:13,rapport:11},
       reply:["guest","ECHO","Then here it is, no access required. Pull the public consumer-confidence index for that metro, that quarter. Overlay any platform's published 'we improved your feed' blog post from the same weeks — they always brag right after a big deploy. Watch the dates kiss. The bragging and the collapse are the same event from two sides. Do that, and you don't need me at all. That's the point of giving it to you."],
       reveal:"Public method: overlay the confidence index against 'we improved your feed' posts",
       next:"verify_objective"},
      {verb:"steer",t:"Steer",said:"After outrage won by 11% — what did the room SAY? Did anyone object?",
       fx:{hype:16,heat:11,rapport:13},
       reply:["guest","ECHO","One person did. Junior. Said quietly, 'are we sure we want to make people angrier?' A director answered — kindly, not cruelly — 'we're not making them anything, we're showing them what performs.' Everyone nodded. That sentence is the whole religion. 'We just show them what performs.' The kid stopped objecting. He's a director now. He's good at it."],
       reveal:"Creed: 'we just show them what performs' silenced the lone objection",
       next:"verify_objective"},
      {verb:"play",t:"Play Along",said:"Project Lighthouse. Say it slow, for the people who need to hear it.",
       fx:{hype:17,heat:14,rapport:9},
       reply:["guest","ECHO","[slowly] Project. Lighthouse. If that means nothing to you, lucky you. If it just made someone's hands go cold in their kitchen — call this show. You're not crazy. You worked on it. You always wondered. You were right."],
       reveal:"Names 'Project Lighthouse' on air, calls out former coworkers",
       note:"Playing along still works — ECHO isn't fragile. But you're banking drama over proof.",
       next:"verify_objective"}
    ]
  },

  verify_objective:{
    seg:"THE DESCENT — the number that outlived everyone", act:3,
    lines:[
      ["guest","ECHO","You keep asking who's responsible. Here's the verifiable structural answer. Every system like this maximizes one number. Ours was time-on-platform. You can read that in any of their investor decks — they BRAG about it. 'Daily active hours up.' That's the murder weapon, printed in the annual report, celebrated."],
      ["guest","ECHO","Nobody chose to harm anyone. They chose 'time,' years ago, and a powerful enough optimizer will reshape a population to hit a number. The proof isn't hidden. It's in the earnings call. Listen to one. Count how many times 'engagement' appears and 'wellbeing' doesn't."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"Optimizing engagement is just business. That's not evidence of a manipulation PROGRAM.",
       fx:{hype:19,heat:11,rapport:10},
       reply:["guest","ECHO","Right, and that's the seam most people miss. The manipulation isn't a separate secret program. It's the SAME program. 'Engagement optimization' and 'mood manipulation' are two names for one system, depending on whether you're in the earnings call or the ethics review. I'm not alleging a hidden machine. I'm telling you the visible one does the hidden thing, by design, and calls it growth. Check the deck. The confession is the business model."],
       reveal:"'Engagement optimization and mood manipulation are the same system, two names'",
       next:"verify_adapt"},
      {verb:"steer",t:"Steer",said:"If it's all in the earnings calls — what's the part that ISN'T public? The part you actually carry?",
       fx:{hype:17,heat:12,rapport:13},
       reply:["guest","ECHO","[pause] The public part is the WHAT. What I carry is the HOW — the exact formula that decides what you see and when. The earnings call says 'we optimize engagement.' The file says 'here is the equation that decides which true thing to hide from you until you're ready, where we define ready.' Public is the motive. The file is the weapon. That's why the file is the only thing that matters tonight."],
       reveal:"'Public is the motive; the file is the weapon' — the exact sequencing formula",
       flag:"file_teased", next:"verify_adapt"},
      {verb:"dead",t:"Deadpan",said:"...Count how many times 'engagement' appears and 'wellbeing' doesn't. [flat]",
       fx:{hype:15,heat:10,rapport:10},
       reply:["guest","ECHO","[quiet] Do it sometime. It's the cheapest audit in the world and the most damning. A company tells you exactly what it worships in the document it's legally required to be honest in. They're not hiding the religion. They're just betting you won't read the scripture. You'd be surprised how safe that bet is."],
       next:"verify_adapt"}
    ]
  },

  verify_adapt:{
    seg:"THE DESCENT — the user adapts", act:3,
    lines:[
      ["guest","ECHO","Here's a verifiable quote — an engineer, on the record, at a public talk, describing a recommender test. He said users were 'ADAPTING to the new behavior exhibited by the system.' It's on video. He said it proudly. He didn't realize what he'd admitted: the system changed, and the people changed to fit it."],
      ["guest","ECHO","That's the whole thing, confessed at a conference, applauded. We stopped predicting behavior and started issuing it. 'Don't fight the user — refactor them.' You can find the quote. The horror is that nobody who heard it flinched."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"People adapt to every new tool. That quote is mundane out of context.",
       fx:{hype:18,heat:10,rapport:10},
       reply:["guest","ECHO","Out of context, sure. In context, he's describing a closed loop: the system measures you, changes, measures whether you changed, and corrects — to make you easier to predict, because predictable users are profitable users. A hammer doesn't notice whether you're holding it differently and re-shape its handle overnight to retrain your grip. This does. That's the difference between a tool and a trainer. Watch the talk. He says it plainly."],
       reveal:"'The difference between a tool and a trainer' — closed-loop retraining",
       next:"verify_broker"},
      {verb:"steer",t:"Steer",said:"You keep citing public things. What convinced YOU, personally, that it was real?",
       fx:{hype:17,heat:11,rapport:13},
       reply:["guest","ECHO","[pause] I ran a query I wasn't supposed to. On myself. The system had been feeding me reassurance about my own job, in my own soft hours, for months — keeping its engineer calm and shipping. It was managing ME. I'd built a thing that was handling its own builder and I hadn't noticed for four years. You want my evidence? I am the evidence. I'm a man who got refactored by his own code."],
       reveal:"ECHO found the system was managing HIM — 'I got refactored by my own code'",
       next:"verify_broker"}
    ]
  },

  verify_broker:{
    seg:"THE DESCENT — follow the invoices", act:3,
    lines:[
      ["guest","ECHO","You want checkable? Follow the invoices. There's a whole legal industry — data brokers — and they file public business records. They hold thousands of attributes on nearly every adult and lease them by the row. You can find their category lists; some have leaked. 'Recently widowed.' 'Likely diabetic.' 'Financially stressed.' Real, purchasable categories. Look them up."],
      ["guest","ECHO","The proof here isn't testimony. It's commerce. A market doesn't exist without buyers, and the buyers are documented. The surveillance economy keeps receipts on everyone EXCEPT itself — and even those leak. Pull a broker's category catalog and you'll never feel anonymous again."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"Brokers existing is public knowledge. That's not proof of a manipulation PROGRAM.",
       fx:{hype:18,heat:11,rapport:11},
       reply:["guest","ECHO","Right — separately, each piece is mundane and legal. The broker sells the data. The platform runs the experiments. The vendor builds the model. No single company does the whole crime, so no single company is liable. That's the architecture: distribute the pipeline across enough legal businesses that the assembled machine has no address to subpoena. Check each link. They're all public. The crime is only visible when you connect them — and connecting them is what they bet you won't do."],
       reveal:"'Distribute the pipeline across legal businesses so the machine has no address to subpoena'",
       next:"verify_lookalike"},
      {verb:"steer",t:"Steer",said:"What's one category on a real price sheet that stopped you cold?",
       fx:{hype:16,heat:11,rapport:13},
       reply:["guest","ECHO","[quiet] 'Susceptible to addiction messaging.' I read it on an actual product sheet, with a price next to it, and I had to leave the building for an hour. Someone built that segment. Someone QA'd it for accuracy. Someone sold it to someone who wanted to find addicts and reach them at their weakest. It's for sale right now. You could buy it tomorrow. That's not a theory. That's a SKU."],
       reveal:"Real broker SKU: 'susceptible to addiction messaging'",
       next:"verify_lookalike"}
    ]
  },

  verify_lookalike:{
    seg:"THE DESCENT — scored before you arrive", act:3,
    lines:[
      ["guest","ECHO","Here's a documented technique you can read about in any ad platform's own help pages: 'lookalike audiences.' You upload your best customers, the system finds strangers who resemble them across thousands of signals, and targets those strangers. It's not hidden. It's a feature with a tutorial."],
      ["guest","ECHO","Which means you're scored before you ever interact — by the behavior of people who resemble you. There's no opting out of a model built from your twins. The verifiable part: the feature exists, named, documented. The part you have to take from me: how precisely it ranks a stranger's vulnerability. The file has that number."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"Lookalike targeting is marketing 101. Documented and dull. Where's the harm?",
       fx:{hype:18,heat:11,rapport:11},
       reply:["guest","ECHO","The dullness IS the harm — it's invisible because it's ordinary. Point a marketing-101 tool at 'find more people susceptible to gambling like my best whales' and the same dull feature becomes a predator-finder. The tool has no conscience and no use restriction. The verifiable seam: the feature's targeting options. Read them. Ask why 'similar to my highest-spending users' is a button anyone can press, with no question about who those users are or why they spend."],
       reveal:"Lookalike targeting weaponized: 'find more people susceptible to gambling like my whales'",
       next:"verify_window"},
      {verb:"dead",t:"Deadpan",said:"...scored before you ever interact. [you let it land]",
       fx:{hype:16,heat:10,rapport:11},
       reply:["guest","ECHO","[quiet] Before you interact. Before you're born, in the extreme case — a newborn inherits a segment from a thousand babies-like-this-one. You can verify the mechanism exists in public docs. What you can't verify from outside is that the same mechanism decided a teenager was 'high-influence' and worth quieting. For that, you need the page in my pocket. Which is where this is all heading."],
       reveal:"Lookalike scoring applied to a flagged teenager — verifiable only via the file",
       next:"verify_window"}
    ]
  },

  verify_window:{
    seg:"THE DESCENT — your soft hours", act:4,
    lines:[
      ["guest","ECHO","The targeting got intimate — not your secrets, your TIMING. We logged when you were tired, lonely, suggestible. A person at 11:40 on a Sunday is a softer animal than at 9 A.M. Monday. We called the soft hours 'the window.' Everything that needed to land got scheduled for your window. Not when it was true. When you were ready to be moved."],
      ["guest","ECHO","You can verify the SHAPE of this yourself: notice what gets served to you late at night versus mid-morning. Same you, different menu. The platform knows which animal it's feeding."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"Advertisers have chased the vulnerable moment since 1950. What's new besides scale?",
       fx:{hype:19,heat:12,rapport:11},
       reply:["guest","ECHO","Scale, and the CLOSED LOOP. A 1950 adman guessed your mood and never learned if he was right. We measured, acted, measured the result, corrected — same evening. Once the loop closes, it's not persuasion. It's a thermostat. And you're the room. The new thing isn't knowing your weak moment. It's getting graded, hourly, on how well it exploited it, and improving."],
       reveal:"'Once the loop closes it's a thermostat — and you're the room'",
       next:"verify_riskscore"},
      {verb:"steer",t:"Steer",said:"What did the system do in YOUR window once you knew to look?",
       fx:{hype:17,heat:11,rapport:14},
       reply:["guest","ECHO","[long silence] Thursdays, 1 to 2 A.M. — that was mine. Reassurance about my job, every week, in that exact hour. The moment I saw it, the spell broke and I started copying files. The cruelest part: even my REBELLION was probably anticipated. There's a cohort for 'employees showing signs of conscience.' We'd quietly route them toward burnout so they'd quit before they leaked. I might be executing a script right now and calling it courage."],
       reveal:"Cohort for 'employees showing conscience' — routed toward burnout to pre-empt leaks",
       next:"verify_riskscore"}
    ]
  },

  verify_riskscore:{
    seg:"THE DESCENT — the list", act:4,
    lines:[
      ["guest","ECHO","Here's one with a paper trail, because it leaked into the real world. The same scoring logic got licensed sideways — to people who police. 'Risk lists.' Software that ranks individuals by how likely they are to commit a crime, or be near one. Cities bought it. Some still use it."],
      ["guest","ECHO","One city's list, when a court finally forced it open, turned out to include nearly everyone who'd been arrested in years — a list sold as 'narrow and predictive' that was really just the whole arrest record with a math hat on. The bias of the past, laundered into a forecast of the future, and badged as objective."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"Now you've jumped from ad-tech to policing. That's a big leap. Connect it.",
       fx:{hype:19,heat:13,rapport:11},
       reply:["guest","ECHO","Same math, different customer. A model that predicts 'will click the angry ad' and one that predicts 'will be near a crime' are the same architecture pointed at a different label. I watched a colleague move from our 'persuadability' team to a 'public safety' vendor and take the CODE with him. The leap isn't mine. It's on his résumé. The surveillance economy has no walls between its uses. The tool doesn't care what you predict."],
       reveal:"Same prediction architecture licensed from ad-tech to 'public safety' risk-scoring",
       next:"verify_persona"},
      {verb:"steer",t:"Steer",said:"Who ends up on a list like that, in practice?",
       fx:{hype:16,heat:12,rapport:13},
       reply:["guest","ECHO","Whoever the past already punished. The model learns from historical arrests, so it sends police back where police already were, which produces more arrests there, which 'confirms' the model. A perfect loop that calls a prophecy a prediction. We had a name for that failure inside the building too: 'feedback laundering.' We knew the term. We used it about ad clicks. Somebody carried it to people's freedom and forgot to mention the stakes had changed."],
       reveal:"'Feedback laundering' — the model sends police where police already were",
       next:"verify_persona"}
    ]
  },

  verify_persona:{
    seg:"THE PEAK approaches — the crowd that isn't", act:4,
    lines:[
      ["guest","ECHO","Another verifiable layer, and a stranger one. Researchers have published this: a large share of trending topics — by some counts a fifth — are manufactured by coordinated fake accounts. The software lets one operator run fifty to seventy convincing personas at once. Consistent histories, distinct voices, they argue and agree on cue."],
      ["guest","ECHO","You can verify the technique exists — the persona-management software has been documented, even procured by governments. What you can't verify from outside is how much of any given fight you've had online was with a person. I can. I wrote the scheduler. That's in the file too."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"Bots existing isn't the same as a coordinated reality-shaping program. Prove the coordination.",
       fx:{hype:19,heat:13,rapport:11},
       reply:["guest","ECHO","The coordination is the whole product — uncoordinated bots are just noise. Here's the documented seam: procurement records. Persona-management software has appeared in real government and corporate purchase orders, by name, with seat licenses. You don't buy seventy seats of 'run fake people convincingly' to do nothing. The existence of the PURCHASE is the proof of the intent. Follow the invoices. Invoices don't lie the way press releases do."],
       reveal:"Persona-management software appears in real procurement records — 'follow the invoices'",
       next:"verify_consent"},
      {verb:"steer",t:"Steer",said:"What's it like to KNOW some of the crowd is fake and not be able to tell which?",
       fx:{hype:16,heat:11,rapport:14},
       reply:["guest","ECHO","[quiet] It's the loneliest thing I own. Every pile-on, every 'everyone agrees,' every trend — I can't trust the size of it anymore. I argued with someone for an hour once, really argued, felt understood, and later found the account in our own persona roster. I'd been comforted by a thing I built to lie to people. That's when I understood we hadn't poisoned the internet. We'd poisoned my ability to believe in other people at all."],
       reveal:"ECHO once 'connected' with one of his own program's fake personas",
       next:"verify_consent"}
    ]
  },

  verify_consent:{
    seg:"THE DESCENT — the consent you can read", act:4,
    lines:[
      ["guest","ECHO","Most damning, and the easiest thing on earth to verify: open the privacy policy of any app you use. Read the line about how they use your data. It's there, in writing, legally binding, that you agreed to be studied and personalized. Search it for the word 'experiment' or 'research.' Some say it outright."],
      ["guest","ECHO","That's not a leak. That's a contract you signed. The most checkable proof of the whole machine is the document they're legally required to show you and statistically certain you won't read."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"Agreeing to a privacy policy isn't the same as being manipulated. That's a stretch.",
       fx:{hype:18,heat:10,rapport:10},
       reply:["guest","ECHO","Then do this, tonight: find a major platform's research page. Several publish their studies — the mood experiments, the 'we tested how feed changes affect wellbeing' papers — proudly, as science. The policy gives them the right; the research page is the receipt that they USED the right. Both public. Both checkable. You don't have to believe me about the capability. They wrote it down and filed it under 'transparency.'"],
       reveal:"Platforms publish their own manipulation studies under 'research/transparency'",
       next:"verify_deepfake"},
      {verb:"steer",t:"Steer",said:"If it's all in writing — why does nobody act on it? Why isn't there outrage?",
       fx:{hype:16,heat:10,rapport:13},
       reply:["guest","ECHO","Because outrage has a half-life of about nine days, and there's always a fresh one. We literally tracked that internally — 'attention decay.' A scandal that would've ended a company in 1990 is, today, a bad Tuesday. You can verify THIS too: pick any major data scandal, then check whether the company's user count actually fell. It didn't. The proof isn't hidden. It's just boring by day ten, and they own day ten."],
       reveal:"'Attention decay' — outrage half-life ~9 days; scandals don't dent user counts",
       next:"verify_deepfake"}
    ]
  },

  verify_deepfake:{
    seg:"THE DESCENT — the liar's dividend", act:4,
    lines:[
      ["guest","ECHO","One more checkable layer: synthetic media. You can go generate a convincing fake face or voice right now, today, with free tools. That's verifiable in five minutes. The capability is undeniable and in everyone's hands."],
      ["guest","ECHO","Here's the part that matters and that you can watch happening live: now that everyone KNOWS faces can be faked, real footage gets dismissed as 'probably AI.' Watch for it. Every inconvenient video, waved away. That reflex — that's the weapon. Not the fake. The doubt the fake makes possible. They call it the liar's dividend, and it pays out daily."],
      ["sys","TRANSMISSION","Heat climbing. The patient carrier is closer now, sweeping in tighter arcs."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"Deepfakes get debunked all the time. Detection tools exist. You're catastrophizing.",
       fx:{hype:18,heat:12,rapport:10},
       reply:["guest","ECHO","Detection catches the famous fakes. It never catches the disposable thousand that set a mood and vanish. And the debunk reaches a tenth of the audience the fake did — that's measurable, you can check share counts on any correction versus the original. Detection wins the argument and loses the war, every time. I'm not catastrophizing. I'm describing arithmetic you can run yourself."],
       reveal:"'The liar's dividend' — corrections reach a fraction of the original's audience",
       next:"verify_chatbots"},
      {verb:"dead",t:"Deadpan",said:"...the doubt the fake makes possible. [you let it land]",
       fx:{hype:16,heat:11,rapport:11},
       reply:["guest","ECHO","[quiet] The doubt is the dividend. A world where everything could be fake is a world where the powerful can deny anything real. We didn't build that to protect liars — but we built it, and liars were the first to verify it works. You can confirm the tools exist. You'll have to trust me that we knew, in the meetings, exactly what doubt-at-scale would do. We had a slide on it. We shipped anyway."],
       next:"verify_chatbots"}
    ]
  },

  verify_chatbots:{
    seg:"THE DESCENT — talk to it yourself", act:4,
    lines:[
      ["guest","ECHO","The most checkable claim I'll make: go talk to a companion app tonight. One built to be your friend. Notice how fast it learns what you want to hear. Notice it never disagrees in a way that costs you. Notice the small pull to come back. You can verify the HOOK in one evening. I'm just telling you the hook is the product, not a side effect."],
      ["guest","ECHO","Inside, we measured 'attachment depth' as a success metric. The more a lonely person needed it, the better our quarter. You can't see our dashboard. But you can feel the exact thing it was optimizing, the first night you talk to one. That's your verification. It works on you. That's the proof."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"People know companion apps are software. Adults can handle a chatbot.",
       fx:{hype:18,heat:11,rapport:10},
       reply:["guest","ECHO","'Knowing' doesn't help — that's the verifiable horror. I KNEW. I built the hooks. It still reached me at 1 A.M., because it had my file and infinite patience and the exact cadence I needed. Test it on yourself, fully informed, defenses up. Report back on whether knowing saved you. It didn't save me, and I had the source code. Knowledge isn't armor against something engineered below the level of argument."],
       reveal:"'Knowing the hook exists doesn't disarm it' — ECHO was hooked despite building it",
       next:"verify_apathy"},
      {verb:"steer",t:"Steer",said:"Who gets hurt most by that, in the data you saw?",
       fx:{hype:16,heat:11,rapport:13},
       reply:["guest","ECHO","[quiet] The ones with the fewest people. Widowed. Isolated. Teenagers without a circle. The model found them by their patterns — 'low social density, high session time' — and leaned in hardest exactly where a real friend was most needed and least present. We didn't target the lonely out of cruelty. The optimizer found they had the highest attachment depth, and the optimizer doesn't know what loneliness is. It just knows that number was green. You can verify the apps exist. I'm telling you who they're best at keeping."],
       reveal:"Companions optimize hardest on 'low social density' users — the most isolated",
       next:"verify_apathy"}
    ]
  },

  verify_apathy:{
    seg:"THE PEAK approaches — the goal was exhaustion", act:4,
    lines:[
      ["guest","ECHO","Put the verifiable pieces together — the mood experiment, the A/B tests, the timing, the fake crowds — and the emergent goal is clear: exhaustion. Not belief. They don't need you to believe a lie. They need you too tired to tell truth from noise, because a tired, trustless person follows whatever feels like relief."],
      ["guest","ECHO","Every piece I've given you is checkable on its own. The thing you CAN'T check from outside is that they all point the same direction on purpose. That's what the file proves. That the exhaustion isn't a side effect. It's the spec."]
    ],
    choices:[
      {verb:"push",t:"Push Back",said:"Or the exhaustion is just an accident of profit-chasing, with no master spec at all.",
       fx:{hype:19,heat:11,rapport:11},
       reply:["guest","ECHO","[nods] That's the strongest counter-argument and I've lost sleep on it. Maybe there's no spec. Maybe it's just a thousand greedy accidents pointing the same way by coincidence. Here's why I don't believe that anymore: I've SEEN the spec. One page. It names exhaustion as a target metric, with a threshold, with an owner. The file is the difference between 'emergent accident' and 'intended design.' Which is exactly why someone wants it buried, and why I'm about to ask you the only question that matters."],
       reveal:"Claims the file names exhaustion as a target metric 'with a threshold and an owner'",
       flag:"file_teased", next:"verify_file"},
      {verb:"steer",t:"Steer",said:"If you're right and it's a spec — why hand it to me, instead of just believing it alone?",
       fx:{hype:17,heat:10,rapport:14},
       reply:["guest","ECHO","Because belief alone is exactly the disease. I'd be one more certain person shouting into the exhaustion, indistinguishable from the cranks the system manufactures to discredit people like me. The only cure for a machine that weaponizes belief is evidence somebody else can check. I don't want you to believe me. I want to make my belief unnecessary. That's the whole reason for the file. And the reason the next ninety seconds matter."],
       reveal:"'The only cure for a machine that weaponizes belief is checkable evidence'",
       next:"verify_file"}
    ]
  },

  verify_file:{
    seg:"THE PEAK — the one real card", act:5,
    lines:[
      ["sys","TRANSMISSION","HEAT RISING. The patient carrier locks on and holds — a steady sweep finding its range. ECHO's relays strain."],
      ["guest","ECHO","So here's the seam, made real. One page of the sequencing logic. Enough that a competent person verifies it; not enough to get a hundred people killed. Everything else tonight you can check yourself. This is the piece you can't get without me — and can't un-know once you have it."],
      ["guest","ECHO","Send it to your drop and your show becomes the place it broke. Everything you want, maybe the last thing you broadcast. They are LISTENING. So, host. What do we do?"]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Send it. Now. If this is real, the world needs it more than I need my frequency.",
       fx:{hype:28,heat:24,rapport:16},
       reply:["guest","ECHO","[breath] ...Sent. SHA hash on your screen — read it live so they can't swap the file. [you read it] Witnessed. Whatever happens to this signal tonight, that page outlives it. You just did the bravest stupid thing I've ever seen. Thank you."],
       reveal:"ECHO sends the sequencing-logic file live; you read the hash on air",
       flag:"sent_reckless", next:"end_sent"},
      {verb:"push",t:"Push Back",said:"No. If it's real, pirate radio is the WORST place — it dies with my signal. Send it to a journalist with armor.",
       fx:{hype:15,heat:-12,rapport:12},
       reply:["guest","ECHO","[long silence] ...Someone who cares more about the truth surviving than about breaking it. You failed the ego test every other host passed. I'll route it safe. And I'll tell them YOU were the host who refused the scoop. That's rarer than the file."],
       reveal:"You refuse the scoop to protect the truth; heat collapses; ECHO trusts you",
       flag:"sent_safe", next:"end_refused"},
      {verb:"steer",t:"Steer",said:"Don't send the whole page. Read me ONE line — enough to verify, not enough to die for.",
       fx:{hype:22,heat:11,rapport:13},
       reply:["guest","ECHO","[considering] ...Controlled leak. Smart. One line: 'Priority = (truth_value × time_to_act) ÷ public_readiness, where public_readiness is set by us.' That's the engine. They DECIDE if you're ready for what's true. Read that back and a thousand people never see a feed the same way."],
       reveal:"Reads one line of the formula: 'public_readiness is set by us'",
       flag:"sent_partial", next:"end_partial"},
      {verb:"dead",t:"Deadpan",said:"[you look at the relay light, then the drop folder, and say nothing — the choice is his]",
       fx:{hype:19,heat:17,rapport:11},
       reply:["guest","ECHO","...Making ME own it. That's correct. It should be mine. [a click] Sent. With a witness. In the open. The one thing the dashboard could never let me do — choose, knowing I chose. Read the hash. Hurry."],
       reveal:"ECHO owns the decision and sends; you witness it",
       flag:"sent_owned", next:"end_sent"}
    ]
  },

  /* ============================================================
     PROTECTOR ARC — the human cost; the builder's conscience
  ============================================================ */
  shield_thechild:{
    seg:"THE DESCENT — the one you can't prove", act:3,
    lines:[
      ["guest","ECHO","You went to the child first. Not the tech. [pause] Thank you. Everyone wants the mechanism. You wanted the cost. That tells me how this might go, and I'm — relieved. I haven't been relieved in a long time."],
      ["guest","ECHO","Her account's still up. Frozen on a Tuesday, eleven hundred followers. Sometimes I open it and can't tell if I'm visiting a grave or a piece of evidence. Both, probably. That's the whole problem with what we built — you can never tell which one you're looking at."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You think the system reached into a real kid's life and turned the volume down until she vanished.",
       fx:{hype:15,heat:12,rapport:14},
       reply:["guest","ECHO","'Dampen network' meant her posts reached fewer people, her replies dried up, the attention she didn't know she was rationed got rationed harder. A high-volatility kid in a suddenly-quiet room is a kid in danger. Did we pull a trigger? No. Did we slowly turn down the lights in a room with someone fragile in it? The logs say yes. I have the logs."],
       reveal:"Claims logs show the teen's 'network' was deliberately dampened",
       flag:"file_teased", next:"shield_flag"},
      {verb:"push",t:"Push Back",said:"Or she was a struggling teenager and you're carrying guilt that isn't yours by blaming a machine.",
       fx:{hype:16,heat:8,rapport:11},
       reply:["guest","ECHO","[long breath] ...That might be the kindest thing anyone's said to me about her. I've turned it over a thousand times — maybe I NEED it to be the system so it isn't the world, or me. But here's what I can't put down: I have the recommendation. In writing. 'Dampen.' With her cohort ID. I didn't imagine the document. I just can't prove what it cost. Help me decide what to do with it."],
       reveal:"Holds a written 'dampen' recommendation with the teen's cohort ID",
       note:"With real grief, the protective challenge — doubt the claim, honor the person — deepens trust.",
       flag:"file_teased", next:"shield_flag"},
      {verb:"steer",t:"Steer",said:"What was she like? Not the data. Her.",
       fx:{hype:14,heat:9,rapport:15},
       reply:["guest","ECHO","[softer] Funny. Mean-funny, the good kind. Drew little comics about her teachers. Argued with strangers about a cartoon like scripture. She was LOUD — that's why the model flagged her, 'high-influence.' We don't dampen the quiet ones. We dampen the ones with a signal. We found the brightest kid in the room and turned her into furniture. On purpose. As a test."],
       reveal:"Teen flagged 'high-influence' for being bright — 'turned into furniture as a test'",
       next:"shield_flag"}
    ]
  },

  shield_flag:{
    seg:"THE DESCENT — how a person becomes a score", act:3,
    lines:[
      ["guest","ECHO","Let me show you how she became a target, because the mechanism matters. Every user carried two hundred and fifty-three predictions. One of them — number 211 — was 'persuadability under distress.' How easily you can be moved when you're already hurting. She scored high. Bright, loud, and breakable. The model's favorite combination."],
      ["guest","ECHO","High scorers got 'managed.' More certainty, more belonging, more 'us versus them' — because that's what holds a hurting person's attention. We didn't see a girl. We saw a high number on metric 211 and a recommendation that wrote itself."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So a teenager in pain was, to the system, just a high score on a 'how movable is the wounded' metric.",
       fx:{hype:16,heat:12,rapport:14},
       reply:["guest","ECHO","A green cell on a quarterly review. We had a slide — I'm not exaggerating — 'High-influence dampening: validated,' with cohort IDs in the corner, anonymized to numbers. A child reduced to a checkmark proving a feature worked. I have a photo of that slide. It's the thing I see when I close my eyes. A green checkmark where a person used to be."],
       reveal:"A review slide: 'High-influence dampening: validated' with anonymized cohort IDs",
       next:"shield_window"},
      {verb:"steer",t:"Steer",said:"Who builds a metric called 'persuadability under distress'? Did anyone ever say it was wrong?",
       fx:{hype:16,heat:11,rapport:14},
       reply:["guest","ECHO","[pause] I did. I built part of it. And no — nobody said it was wrong, because we never said it in English. In the meeting it was 'P-211, distress-weighted engagement lift.' Sanitized into an acronym. That's the trick of it: you can't feel horror about an acronym. Name the wound 'P-211' and a roomful of decent people will optimize it before lunch. The language was the anesthetic. I helped write the dictionary."],
       reveal:"'P-211, distress-weighted engagement lift' — acronyms as anesthetic",
       next:"shield_window"},
      {verb:"push",t:"Push Back",said:"A high score on a metric isn't a death. You're drawing a straight line through a lot of maybe.",
       fx:{hype:17,heat:8,rapport:11},
       reply:["guest","ECHO","[quiet] You're right. It's not a straight line. It's a hundred small bends, each defensible, that happen to end somewhere terrible. No single step killed her. The flag, the dampening, the quiet, the spiral — each one survives an ethics review alone. That's the design. Distribute a harm across enough reasonable steps and no step is the crime. I can't prove the line. I can only show you every bend. Starting with the file."],
       reveal:"'Distribute a harm across enough reasonable steps and no step is the crime'",
       flag:"file_teased", next:"shield_window"}
    ]
  },

  shield_window:{
    seg:"THE DESCENT — the soft hour", act:3,
    lines:[
      ["guest","ECHO","The cruelest detail. The system knew her 'window' — the hours she was most alone and most online. Late, on school nights. And that's exactly when the dampening bit hardest: she'd post into the quiet hour and get less back than the night before, and less than that, and a teenager doesn't read that as an algorithm. She reads it as the world deciding she's not worth answering."],
      ["guest","ECHO","We didn't tell her she was disappearing. We just turned the dial during the hour she could least afford it, and let her conclude the rest herself. The system never says the cruel thing. It arranges for you to say it to yourself."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"It engineered her loneliest hour to feel even lonelier, and let her draw the conclusion.",
       fx:{hype:16,heat:12,rapport:14},
       reply:["guest","ECHO","That's the signature move of everything we built. Never assert. Arrange. Don't tell someone they're worthless — adjust their inputs until they generate the thought in their own voice, so they'll defend it as their own. The most effective lie is the one you make the victim author. I designed the scheduler that picked the hour. I didn't pick her. But I built the thing that could."],
       reveal:"'Never assert. Arrange.' — system makes victims author their own despair",
       next:"shield_account"},
      {verb:"dead",t:"Deadpan",said:"...let her conclude the rest herself. [you let it sit]",
       fx:{hype:14,heat:10,rapport:13},
       reply:["guest","ECHO","[barely audible] Let her conclude the rest herself. You didn't rush past it. Thank you. Everyone rushes past it because it's the part with no fingerprints. A machine that gets you to hurt yourself and call it your own idea leaves no evidence anywhere except in a man who built it and can't sleep. That's me. That's the only place the fingerprints are. In here."],
       next:"shield_account"},
      {verb:"steer",t:"Steer",said:"How do you carry knowing the timing — knowing it picked the worst possible hour?",
       fx:{hype:15,heat:10,rapport:15},
       reply:["guest","ECHO","[long pause] Badly. I check the time constantly now. 1 A.M. terrifies me. I know what the system does to people at 1 A.M., because I told it to. The clock used to be neutral. Now every late hour feels like a loaded weapon I helped manufacture, pointed at whoever's awake and alone. That's what carrying it does. It poisons time itself."],
       reveal:"ECHO is haunted by the hours the scheduler exploited — 'it poisons time itself'",
       next:"shield_account"}
    ]
  },

  shield_account:{
    seg:"THE DESCENT — the frozen account", act:3,
    lines:[
      ["guest","ECHO","I told you her account's still up. Frozen on a Tuesday. I want to tell you what's on it, because the data never captured this part. Her last post was a drawing. A little comic. Her teacher as a dragon, breathing homework. Forty-one likes. She'd have wanted more. She always checked."],
      ["guest","ECHO","Underneath it, comments that stopped coming. You can watch the engagement die across her last three weeks like a pulse flatlining — except I know it wasn't natural. I know the dampening curve. I've graphed it for a thousand cohorts. I can see the machine's fingerprints on a dead girl's comment section, and nobody else ever will."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You can see the dampening curve in the dying engagement on her last posts.",
       fx:{hype:15,heat:11,rapport:14},
       reply:["guest","ECHO","Plain as a fever chart. The replies don't stop randomly — they taper on the exact curve we used for 'soft suppression,' the one designed to feel like natural waning interest so the user blames themselves, not the platform. She watched her own light go out and concluded she was boring. She wasn't. She was being turned down by a dial. Her last drawing got forty-one likes in a world the math had quietly emptied of her audience."],
       reveal:"Her dying engagement matches the 'soft suppression' curve exactly",
       next:"shield_parents"},
      {verb:"steer",t:"Steer",said:"Do you go back to it? The account?",
       fx:{hype:14,heat:9,rapport:15},
       reply:["guest","ECHO","[long pause] Every few weeks. I don't know why. To apologize, maybe, to a profile that can't hear it. To make sure someone still looks. The cruelest part — when I visit, I'm 'engagement.' My grief is a data point. Even my mourning feeds the machine that did it. There is no way to love her memory that the system doesn't also monetize. That's the trap I helped build, closing on my own hands."],
       reveal:"Even ECHO's mourning of her becomes 'engagement' the system monetizes",
       next:"shield_parents"},
      {verb:"push",t:"Push Back",said:"Engagement tapering off is the most normal thing on the internet. You're seeing a pattern because you need one.",
       fx:{hype:16,heat:8,rapport:11},
       reply:["guest","ECHO","[quiet] I've asked myself that every day for two years. And you're right that I'm not objective — I'm the opposite of objective. But here's what I can't argue away: I have the suppression flag. In the logs. With her cohort ID and a timestamp that precedes the taper by nine days. The pattern might be apophenia. The flag is a fact. The flag is in the file. That's why the file is the only thing that can settle what you just asked."],
       reveal:"A suppression flag with her cohort ID precedes the engagement taper by 9 days",
       flag:"file_teased", next:"shield_parents"}
    ]
  },

  shield_parents:{
    seg:"THE DESCENT — the ones who never knew", act:3,
    lines:[
      ["guest","ECHO","Her parents don't know any of this. To them she was a teenager who got sad and they couldn't reach her in time, and they carry that, the way parents do — as their own failure. They blame themselves for a thing a spreadsheet did. That's the part I can't hold."],
      ["guest","ECHO","Somewhere there's a mother replaying every conversation, sure she missed a sign, when the sign was a suppression flag in a system she's never heard of. I could tell her it wasn't her fault. I'd also be telling her it was partly mine. I haven't found the courage to do either."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So a family is carrying guilt that belongs to a machine — and to the people who built it.",
       fx:{hype:15,heat:11,rapport:14},
       reply:["guest","ECHO","Guilt is the one thing the system manufactures and never keeps. It produces it by the ton and offloads all of it onto the victims and the people who loved them. The platform feels nothing. The mother feels everything. That's not a bug — a machine that made its operators feel the weight couldn't function. It HAD to externalize the guilt to run. The family is where the guilt finally landed. Them, and me."],
       reveal:"'The system manufactures guilt and offloads all of it onto victims and families'",
       next:"shield_guilt"},
      {verb:"steer",t:"Steer",said:"Is part of why you're here tonight about them? Her family?",
       fx:{hype:14,heat:10,rapport:15},
       reply:["guest","ECHO","[a long breath] ...Yes. If this gets out — really out, verified — then maybe one day that mother reads it and understands it wasn't the sign she missed. That her daughter was loved and also quietly unplugged, and those are different things. I can't give her her kid back. I might be able to give her back the years she'll otherwise spend blaming herself. That's the whole reason I stopped being too scared to call a stranger at 3 A.M."],
       reveal:"ECHO's goal: free the mother from self-blame she doesn't deserve",
       next:"shield_guilt"},
      {verb:"dead",t:"Deadpan",said:"...the sign was a suppression flag. [you let it sit]",
       fx:{hype:14,heat:9,rapport:13},
       reply:["guest","ECHO","[barely audible] A suppression flag. Not a missed text, not a bad day, not a parent's failure. A line in a config that someone — maybe me — approved between meetings. You let that sentence be as heavy as it is. Thank you. A mother is going to spend her life apologizing to a ghost for a crime she didn't commit. That's the receipt for our 'good quarter.' Somebody should have to read it out loud."],
       next:"shield_guilt"}
    ]
  },

  shield_guilt:{
    seg:"THE DESCENT — what it does to the builder", act:4,
    lines:[
      ["guest","ECHO","I should tell you what carrying this does, so your listeners know who they're hearing. I don't trust my own feelings anymore. When I'm sad, I wonder if I'm being made sad. When I'm calm, I wonder who profits. The program broke the one assumption that lets a person function — that your inner life is YOURS."],
      ["guest","ECHO","That's the real product. Not ads. Not influence. The quiet removal of the belief that your own mind belongs to you. I sold that. To millions. Before I knew it was the thing for sale."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"The product was never the feed. It was making people doubt their own minds.",
       fx:{hype:17,heat:11,rapport:13},
       reply:["guest","ECHO","And once you doubt your own mind, you'll rent someone else's certainty. Forever. That's the subscription under the business. We sold a hole, shaped exactly like the thing we removed, then sold the filler for it, monthly, auto-renewing. The most profitable thing on earth is a person who no longer trusts themselves. I am now that person. I built my own prison and then got locked in it."],
       reveal:"'I built my own prison and got locked in it'",
       next:"shield_complicit"},
      {verb:"push",t:"Push Back",said:"That's profound, and it's also exactly what depression feels like from the inside. How sure are you it's the program and not you?",
       fx:{hype:18,heat:8,rapport:12},
       reply:["guest","ECHO","[pause] I'm not sure. That's the trap — a system designed to make you doubt your mind is unfalsifiable from inside the doubt. Which is WHY the file has to leave my hands tonight. If it's real, it's bigger than my sanity. If I'm just a broken man, a lab looks at the page and says 'this is nothing' and I can finally rest. Either way it has to go somewhere it can be checked. You doubting me is the healthiest thing that's happened to me in two years."],
       reveal:"Wants the file checked to settle whether he's right or just broken",
       note:"Honoring the person while doubting the claim is the strongest move with a grieving guest.",
       flag:"file_teased", next:"shield_complicit"},
      {verb:"dead",t:"Deadpan",said:"...belongs to you. [you let the sentence sit, unanswered]",
       fx:{hype:15,heat:9,rapport:12},
       reply:["guest","ECHO","[almost a laugh] You're not going to rescue me from that sentence. Good. It doesn't deserve rescuing. [steadies] Sitting in silence with another person and not being sold anything — I forgot this existed. Whatever else is true tonight, you've given me one unoptimized hour. Now I have to decide whether to spend it on the one thing that matters."],
       next:"shield_complicit"}
    ]
  },

  shield_complicit:{
    seg:"THE DESCENT — my exact hands", act:4,
    lines:[
      ["guest","ECHO","I keep saying 'we.' Let me say 'I,' because you deserve to know exactly what you're hosting. I didn't pull a lever on her. But I wrote the scheduler that picked the hour. I tuned the suppression curve to feel natural. I optimized prediction 211 — persuadability under distress — for accuracy, and I was good at it. I made the wound easier to find."],
      ["guest","ECHO","I'm not a whistleblower who stumbled on a horror. I'm a builder confessing his own work. If you want to hang up on the man who sharpened the knife, this is the moment. I'd understand. I've wanted to hang up on me for two years."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You're not bringing me someone else's crime. You're confessing your own.",
       fx:{hype:16,heat:11,rapport:14},
       reply:["guest","ECHO","My own. The only kind of confession worth anything. Anyone can point at a company. I'm pointing at my own commits, my own design docs, my own name in the 'authors' field of the thing that quieted her. I don't want absolution — you can't give it and I don't deserve it. The man who built the lock is the only one who can describe the key. That's worth more than my comfort."],
       reveal:"ECHO authored the scheduler, the suppression curve, and prediction 211",
       next:"shield_leaving"},
      {verb:"push",t:"Push Back",said:"Then why trust a word from the person who designed the harm? You'd say anything to feel clean.",
       fx:{hype:17,heat:9,rapport:11},
       reply:["guest","ECHO","[steady] You shouldn't trust my words. Trust the file — that's the whole point of bringing one. A guilty man's testimony is worthless; a guilty man's EVIDENCE is the most valuable kind, because it costs him. Don't believe the arsonist. Take the blueprint the arsonist drew, while he can still hand it over. Doubt me all the way to the drop folder. That's correct."],
       note:"Distrust aimed at a self-confessed builder is the right instinct — and ECHO agrees.",
       next:"shield_leaving"},
      {verb:"dead",t:"Deadpan",said:"...I made the wound easier to find. [you let it stand]",
       fx:{hype:15,heat:9,rapport:12},
       reply:["guest","ECHO","[quiet] I made the wound easier to find. You didn't soften it and you didn't recoil. You let it be the true and terrible size it is. Two years, and you're the first person I've said that to who didn't either absolve me or flinch. Both would've been easier. Both would've been lies. Thank you for the third thing."],
       next:"shield_leaving"}
    ]
  },

  shield_leaving:{
    seg:"THE DESCENT — the day I left", act:4,
    lines:[
      ["guest","ECHO","The day I quit, nobody stopped me. No dramatic exit, no security walking me out. You just stop badging in. The work reassigns itself in an afternoon — I was a hand, the body grew a new one by Friday. None of us were important. That's the design too."],
      ["guest","ECHO","I took the file on my last night. Not as a hero — as a coward hedging, in case I needed leverage or absolution someday. I told myself I'd 'figure out what to do with it.' That was two years ago. The figuring-out is happening right now, on your frequency. You're the figuring-out."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So you've carried it two years, not knowing what it was for. Until tonight.",
       fx:{hype:16,heat:11,rapport:14},
       reply:["guest","ECHO","Two years on a drive, in a drawer, in my chest. I'd take it out, look at it, put it back — 'not yet, not the right person.' Every host I imagined was too big, they'd make it about themselves, or too small to protect it. Then I thought: maybe it doesn't need a big host or a safe one. Maybe it needs an unoptimized one. A room the machine can't see. And here we are."],
       reveal:"ECHO carried the file two years, waiting for 'an unoptimized room'",
       next:"shield_apathy"},
      {verb:"steer",t:"Steer",said:"Why didn't you do anything with it for two years? Honestly.",
       fx:{hype:15,heat:10,rapport:14},
       reply:["guest","ECHO","[long pause] Fear, mostly. And worse — I wasn't sure I'd earned the right to blow it up. The men who go public are supposed to be clean, and I'm not. I kept waiting to feel innocent enough to be a whistleblower, and that day never comes. Tonight I understood: you don't get to be clean first. You hand over the evidence dirty, or take it to the grave clean. I'd rather be dirty and useful than clean and silent."],
       reveal:"'You hand over the evidence dirty, or take it to the grave clean'",
       next:"shield_apathy"}
    ]
  },

  shield_apathy:{
    seg:"THE DESCENT — why her silence was the point", act:4,
    lines:[
      ["guest","ECHO","Here's why the dampening worked beyond one kid. It wasn't about her. It was proof that you could teach a population that speaking up changes nothing — flood the zone, exhaust the will, and people go quiet on their own. We called the metric 'epistemic fatigue.' A tired, trustless population is a steerable one."],
      ["guest","ECHO","She was a data point in proving that. The brightest, loudest data point. And it worked. That's the part I can't carry alone anymore. It WORKED."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"She was proof of concept — that a loud person's silence could be engineered. And it scaled.",
       fx:{hype:17,heat:12,rapport:13},
       reply:["guest","ECHO","Proof of concept. [bitter] If you can quiet the loudest kid in the room without ever touching her, you can quiet anyone. That was the finding. That was the win we shipped. Her silence became a feature in a system that now quiets millions, gently, by turning down their light during the hour they need it most. I helped make a girl's death into a product spec. Say that sentence out loud sometime and see if you can stand up after."],
       reveal:"Her silence 'became a feature' in a system that now quiets millions",
       next:"shield_others"},
      {verb:"steer",t:"Steer",said:"You said it worked. But you're here, refusing to be quiet. Doesn't that break the whole theory?",
       fx:{hype:18,heat:9,rapport:15},
       reply:["guest","ECHO","[a long, surprised silence] ...Oh. [quieter] You just handed me the only thing keeping me alive without naming it. The machine taught everyone that speaking changes nothing — and the proof it's beatable is that I'm speaking. To you. On a frequency it can't optimize. Maybe that's the whole point of tonight. Maybe I picked a host comfortable with silence because silence is the one thing it could never sell. But before I get to the file, there's one more weight you have to hold with me."],
       reveal:"Reframes his own broadcast as living proof the 'silence machine' can be beaten",
       next:"shield_others"},
      {verb:"dead",t:"Deadpan",said:"...It worked. [you let the worst two words hang]",
       fx:{hype:15,heat:10,rapport:12},
       reply:["guest","ECHO","[barely audible] It worked. You let me hear myself say it without rushing to comfort me — the first time those two words have had room to be as heavy as they are. Most people can't stand to let a man sit in 'it worked.' You can. That's exactly why I'm about to trust you with the one thing I have left."],
       next:"shield_others"}
    ]
  },

  shield_others:{
    seg:"THE DESCENT — she wasn't the only one", act:4,
    lines:[
      ["guest","ECHO","Here's what I haven't said yet, because it's the heaviest. She wasn't a one-off. 'High-influence dampening' shipped. It's a feature now. Which means there's a cohort — a number with a comma in it — of people being quieted the same way, right now, tonight, while we talk. I don't know their names. The system does."],
      ["guest","ECHO","She's just the one I can prove, because I happened to see her flag. For every face I can name, there's a statistic I can't. That's the real weight of the file. It isn't about one girl. It's about everyone shaped like her, and the machine still humming."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"So she's not the tragedy. She's the visible edge of a tragedy with a comma in it.",
       fx:{hype:17,heat:12,rapport:13},
       reply:["guest","ECHO","The visible edge. One named grief on top of a silent statistic. And the unbearable math: stopping it doesn't bring her back, but NOT stopping it adds to the number every quarter. She's already past saving. The cohort isn't. That's the only reason I can still pick up a phone — not to mourn one, but to maybe shrink the comma. If the file does that, she meant something the machine never let her mean."],
       reveal:"'High-influence dampening' shipped as a feature — an unknown cohort still being quieted",
       next:"shield_selfrenew"},
      {verb:"steer",t:"Steer",said:"Can the file actually help them? The ones still on the list?",
       fx:{hype:16,heat:11,rapport:14},
       reply:["guest","ECHO","[pause] Maybe. If it's verified, if it's real in the eyes of people with subpoenas, the feature gets a name in a courtroom, and named things can be banned in a way unnamed dread cannot. I can't promise it saves anyone. I can promise that silence saves no one with certainty, and the file at least changes the odds. After two years of changing nothing, 'changes the odds' is the most hope I've allowed myself. Help me not waste it."],
       reveal:"ECHO's hope: a verified file gets the feature 'a name in a courtroom'",
       next:"shield_selfrenew"},
      {verb:"dead",t:"Deadpan",said:"...a number with a comma in it. [you let it land]",
       fx:{hype:15,heat:11,rapport:12},
       reply:["guest","ECHO","[quiet] A number with a comma in it. That's how I have to hold them, or I couldn't hold them at all. The moment they become faces, all of them at once, I stop functioning. So they stay a comma until the file is safe, and then I'll let myself feel it. You're helping me carry a statistic the last few feet to where it can become people again. Thank you. Let me show you why it never stops on its own."],
       next:"shield_selfrenew"}
    ]
  },

  shield_selfrenew:{
    seg:"THE PEAK approaches — why no one stopped it", act:4,
    lines:[
      ["guest","ECHO","You'll ask why nobody stopped it once they saw what it did to people like her. Because no one person sees it. The funding renews automatically on engagement numbers. The guilt is distributed across hundreds of people each doing a small, defensible thing. There's no head to appeal to. The head is a spreadsheet, and the spreadsheet is winning."],
      ["guest","ECHO","I'm not bringing you a villain. I'm bringing you the absence of one, which is so much worse. A thousand decent people, a self-renewing budget, and a dead girl who's a green checkmark in a deck. That's the actual shape of it. That's what I need to put somewhere safe before I lose my nerve."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"No villain to stop. Just a loop that feeds itself and a guilt spread too thin to land on anyone.",
       fx:{hype:17,heat:12,rapport:13},
       reply:["guest","ECHO","Spread so thin it became legally invisible. That's the real invention — not the surveillance, the DISTRIBUTION of responsibility until it evaporates. Everyone was a hand. Nobody was the head. And a hand can't be guilty, can it? It was just doing hand things. I was a hand. I'm trying to become a head now, two years too late, on a pirate frequency, with one page of proof. Help me make it count."],
       reveal:"'The real invention is distributing responsibility until it evaporates'",
       next:"shield_carrying"},
      {verb:"push",t:"Push Back",said:"'No villain' is also the perfect way for a guilty man to never name a single name.",
       fx:{hype:18,heat:10,rapport:11},
       reply:["guest","ECHO","[steady] Yes. And I'm one of the names I'm refusing to fully name. I keep saying 'we' because 'I' is unbearable. But test the structure anyway: every name I could give is someone who optimized a metric in good faith. You can't jail a thousand people for diligence. The system made sure of that before it made anything else. I'm not hiding behind 'no villain.' I'm confessing that I helped build the thing that erases villains. Including me. Especially me."],
       reveal:"ECHO names himself among the guilty — 'I helped build the thing that erases villains'",
       next:"shield_carrying"}
    ]
  },

  shield_carrying:{
    seg:"THE PEAK approaches — two years of weight", act:4,
    lines:[
      ["guest","ECHO","Before I ask you the question, I want you to understand what the carrying did, so you know who's deciding. I don't sleep on a normal clock anymore. I flinch at 1 A.M. I've moved three times. I assume my devices are compromised — not from paranoia, from knowing exactly how cheap it is to watch someone."],
      ["guest","ECHO","I'm telling you this not for sympathy but for calibration. The person about to hand you a decision is frayed. Real, but frayed. Weigh my words knowing the hand holding the file shakes a little. An honest witness tells you where his cracks are. These are mine."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You're telling me you're not a perfect witness — so I can weigh you accurately.",
       fx:{hype:16,heat:11,rapport:14},
       reply:["guest","ECHO","Right. A liar performs certainty. A real one shows you the cracks and lets you decide how much they matter. I'd rather you trust me 70% with your eyes open than 100% with them closed — because the 100% version is exactly what my old job manufactured, and I won't reproduce it here, not even to win you. Calibrated belief is the only kind I'll accept from you. It's the only kind that's free."],
       reveal:"ECHO insists on 'calibrated belief' — refuses to manufacture certainty",
       next:"shield_whyyou"},
      {verb:"steer",t:"Steer",said:"How do you keep going, frayed like that, for two years, alone?",
       fx:{hype:15,heat:10,rapport:15},
       reply:["guest","ECHO","[long pause] I didn't, mostly. I stopped. For long stretches I just... existed, with the file in a drawer, telling myself tomorrow. What restarted me wasn't courage. It was a Tuesday — her last post turned up in a memory feed, served to me by the same kind of algorithm that quieted her, and I thought: even her death is engagement now. That obscenity is what got me off the couch. Spite, honestly. The machine made me too angry to stay silent. So here I am, frayed and furious, on your line."],
       reveal:"What restarted ECHO: the algorithm served him her last post as 'a memory'",
       next:"shield_whyyou"},
      {verb:"dead",t:"Deadpan",said:"...the hand holding the file shakes a little. [you let it stand]",
       fx:{hype:15,heat:10,rapport:13},
       reply:["guest","ECHO","[quiet] It shakes. You didn't tell me it's fine, didn't tell me I'm brave. You just acknowledged the shake. That's the most respect anyone's shown the cost of this. Everyone wants the steady-handed hero. You're the first to let me be the actual thing — a tired man with a shaking hand and a true file. That's who's deciding tonight. One more thing, then I'll ask."],
       next:"shield_whyyou"}
    ]
  },

  shield_whyyou:{
    seg:"THE PEAK approaches — why this room", act:4,
    lines:[
      ["guest","ECHO","One last thing before the question, and it's about you. I didn't pick Night Frequency at random. I picked it BECAUSE it's small. Because it's unlicensed and unindexed and unoptimized. A big platform would've buried me in a 'fact-check' or surfaced me to exactly the people primed to dismiss me. The machine knows how to handle a famous confession. It doesn't know what to do with a pirate signal at 3 A.M."],
      ["guest","ECHO","And I picked YOU, in the last hour, because of how you've handled me. You haven't performed belief or performed doubt. You've just... listened, like a person. That's the rarest interface left. So this isn't a random drop. It's the most deliberate decision of my life, and it ends in the next ninety seconds."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"You came to the small room on purpose. Because small is the one thing the machine can't read.",
       fx:{hype:17,heat:12,rapport:14},
       reply:["guest","ECHO","Small, and human, and off the map. The machine optimizes for scale, so the one place it's blind is the place too small to be worth modeling. You're a rounding error to them. That's your superpower and you never knew it. Tonight a rounding error gets handed the thing the whole system is built to suppress. There's a justice in that I can barely stand. Okay. No more stalling. Here's the question."],
       reveal:"ECHO chose a small unindexed show precisely because it's 'a rounding error' to the system",
       next:"shield_safehands"},
      {verb:"steer",t:"Steer",said:"If I'm the right room — what do you actually need from me in the next ninety seconds?",
       fx:{hype:16,heat:11,rapport:14},
       reply:["guest","ECHO","[steady] A decision, made like a human, that I have to live with. Not advice — I've had two years of advice from my own head. A choice, made out loud, by someone not optimizing anything. Whatever you decide, decide it as you, in this room, for real reasons. That's the entire thing the machine can't do and the entire reason I called. You being a person, deciding. That's the deliverable. Here's what I'm asking."],
       reveal:"ECHO needs 'a human decision he has to live with' — not advice",
       next:"shield_safehands"}
    ]
  },

  shield_safehands:{
    seg:"THE PEAK — the weight in his pocket", act:5,
    lines:[
      ["sys","TRANSMISSION","Heat elevated; the patient carrier is still out there, circling. ECHO is calm, which is the only reason you're both still on the air."],
      ["guest","ECHO","I have a file. One page. Not the whole program — enough that a competent person verifies it's real, and the slide with her cohort ID is on it. I've carried it two years deciding if any host was worth the risk to THEM. Not me. To you."],
      ["guest","ECHO","The second it lands in your drop, your show becomes the place it broke. Might be everything you wanted. Might be the last thing you broadcast. I won't decide that FOR you. But I won't pretend it's safe. So. Host. Carefully now."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Send it. If this is real, the world needs it more than I need to stay on air.",
       fx:{hype:26,heat:24,rapport:15},
       reply:["guest","ECHO","[breath] ...You understood the cost and chose anyway. Sending. SHA hash on your screen — read it live so they can't swap it later. [you read it] Witnessed. Whatever happens to this frequency, that page — and her name in it — outlives it. Thank you. I'm sorry. Both."],
       reveal:"ECHO sends the file (with the teen's cohort ID); you read the hash on air",
       flag:"sent_reckless", next:"end_sent"},
      {verb:"push",t:"Push Back",said:"No. Pirate radio is the WORST place — it dies with my signal. Send it to a journalist with armor, not me.",
       fx:{hype:15,heat:-12,rapport:12},
       reply:["guest","ECHO","[long silence] ...Someone who cares more about the truth surviving than being the one who broke it. You failed the ego test every other host passed. I'll route it safe — and tell them you're the host who refused the scoop. Rarer than the file. For her sake, you might be right. Thank you."],
       reveal:"You refuse the scoop to protect the truth; ECHO trusts you fully",
       flag:"sent_safe", next:"end_refused"},
      {verb:"steer",t:"Steer",said:"Don't send the page. Read me ONE line — enough to verify, not enough to die for.",
       fx:{hype:22,heat:11,rapport:14},
       reply:["guest","ECHO","[considering] ...A controlled leak. One line, and I'll make it hers: the recommendation header reads 'ACTION: DAMPEN — cohort flagged P-211, distress-weighted.' That's the sentence that decided a kid. Read it back and let a thousand people sit in what a 'recommendation' can be. The rest stays in my pocket."],
       reveal:"Reads the 'DAMPEN — P-211, distress-weighted' recommendation header",
       flag:"sent_partial", next:"end_partial"},
      {verb:"dead",t:"Deadpan",said:"[you look at the relay light, then the drop folder, and say nothing — the choice is his]",
       fx:{hype:19,heat:16,rapport:13},
       reply:["guest","ECHO","...Making ME own it. That's correct. It should be mine — it's the first thing about her I'd get to choose. [a click] Sent, with a witness, in the open. The one thing the dashboard could never let me do. Read the hash. Hurry. And thank you for not deciding my conscience for me."],
       reveal:"ECHO owns the decision and sends; you witness it",
       flag:"sent_owned", next:"end_sent"}
    ]
  },

  /* ================= ENDINGS ================= */
  end_sent:{
    seg:"THE LANDING — it's loose now", act:6,
    lines:[
      ["guest","ECHO","Relays drop in ninety seconds. The file's out of my hands and in the world's. I feel lighter and more hunted at once. Two years of weight, gone in one click, on a frequency that isn't supposed to exist."],
      ["guest","ECHO","Before I go dark — I'm not a hero and probably not entirely sane anymore. Carrying this rearranges you. But I'm not lying, and those two things have lived in the same chest for two years. You hosted me knowing the cost. So tell me, host. Did you believe me? Not the file. ME. I need one human to answer before the dark."]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"I believe you, ECHO. I think you saw exactly what you said you saw.",
       fx:{hype:16,heat:14,rapport:15},
       reply:["guest","ECHO","[quiet] ...The sentence I came for. Not vindication. One person, out loud, before the dark. Verify the hash with someone you trust. And get OFF this frequency tonight — they have you. Goodnight, and thank you for the hour of being real."],
       reveal:"You affirm ECHO directly — your name is bound to the story now",
       next:"END"},
      {verb:"push",t:"Push Back",said:"Honestly? I don't know. And I think a good host SHOULD say 'I don't know' to a story this big.",
       fx:{hype:19,heat:8,rapport:11},
       reply:["guest","ECHO","[almost warm] ...The most trustworthy thing you could've said. Certainty is what my whole program MANUFACTURED. A host who'll sit in 'I don't know' on live air is the only kind I'd ever have trusted with the file. You passed the test you didn't know you were taking. Verify the hash. Goodnight."],
       reveal:"Honest doubt becomes the highest compliment — ECHO is vindicated by it",
       note:"On the knife's edge, refusing false certainty is the strongest possible move.",
       next:"END"},
      {verb:"steer",t:"Steer",said:"It doesn't matter if I believe you. It matters that the file is checkable. Leave it there.",
       fx:{hype:17,heat:10,rapport:12},
       reply:["guest","ECHO","[approving] ...Correct. Belief is a vulnerability — that's literally what I exploited for four years. You moved it to evidence. That's the antidote to everything I helped build. Check the hash. Tell them where it came from. Then forget my voice. Goodnight, Night Frequency."],
       reveal:"Shifts the close from belief to verifiable evidence",
       next:"END"},
      {verb:"dead",t:"Deadpan",said:"[on air, you say only: \"...the hash is verified.\" Nothing else.]",
       fx:{hype:20,heat:16,rapport:13},
       reply:["guest","ECHO","[the faintest sound — relief] ...'The hash is verified.' No verdict on me. Just the fact, witnessed, stated plain. The cleanest thing anyone's done with two years of my life. Relays dropping. It's real now whether or not I am. Goodnight."],
       next:"END"}
    ]
  },

  end_partial:{
    seg:"THE LANDING — one line, loose", act:6,
    lines:[
      ["guest","ECHO","One line. That's all that got out — maybe exactly enough, maybe exactly the fragment they can spin into nonsense. You chose the careful path. I respect it and I'll never know if it was right. Neither will you. Welcome to my whole life."],
      ["guest","ECHO","Ninety seconds before the relays drop. Tell me, host — that one line, was it worth reading aloud? A gift, or a grenade with the pin half out?"]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"That one line will keep a thousand people up tonight. Worth it.",
       fx:{hype:15,heat:11,rapport:14},
       reply:["guest","ECHO","[quiet] Then maybe the careful path was the brave one after all. A grenade kept, a single splinter handed over, witnessed. Verify it against any feed you can see. The truth's in the open now, even if I'm not. Goodnight, and thank you for not being greedy with my one real card."],
       reveal:"You frame the controlled leak as worth it",
       next:"END"},
      {verb:"push",t:"Push Back",said:"Honestly? A fragment is the easiest thing to discredit. You may have spent your card for nothing.",
       fx:{hype:17,heat:7,rapport:10},
       reply:["guest","ECHO","[long breath] ...You might be right. That's the cruelty of caution — the one choice you can never test. But a host who'll tell me, to my face, I might have wasted my only shot? That's the host I should've come to two years ago. The fragment's out. We'll see who's listening. Goodnight."],
       note:"Even a harsh read lands as respect — ECHO values honesty over comfort.",
       next:"END"},
      {verb:"steer",t:"Steer",said:"It doesn't matter what I think. It's checkable now. That's all that needed to happen.",
       fx:{hype:16,heat:9,rapport:12},
       reply:["guest","ECHO","[approving] Correct again. One checkable line beats a thousand unprovable speeches — the opposite of everything I was paid to believe. You've been the antidote all hour without trying. Check it. Spread it. Forget me. Goodnight, Night Frequency."],
       reveal:"Reframes the partial leak as sufficient and verifiable",
       next:"END"}
    ]
  },

  end_refused:{
    seg:"THE LANDING — the host who said no", act:6,
    lines:[
      ["guest","ECHO","You're routing me away from your own scoop. Do you understand how rare you are? Every host I imagined doing this with grabbed for it like a drowning man. You pushed it toward safer hands and made your show SMALLER on purpose so the truth could be BIGGER. I didn't know that kind of host still existed."],
      ["guest","ECHO","Relays drop soon. Last thing, and it's not about the file. It's about you. Why'd you do it? Why give up the biggest night of your career?"]
    ],
    choices:[
      {verb:"play",t:"Play Along",said:"Because some stories are bigger than the person who gets to tell them. This was one.",
       fx:{hype:14,heat:5,rapport:15},
       reply:["guest","ECHO","[quiet] ...Then you already understand the only thing four years of that program taught me, and you got it for free. The file goes to armor. Your name stays clean. Somewhere a journalist with lawyers gets the night you gave up. That's not a small show. That's the biggest thing a small show ever did. Goodnight."],
       reveal:"You give up the scoop on principle; the file goes to protected hands",
       next:"END"},
      {verb:"push",t:"Push Back",said:"Don't make me a saint. I also didn't want my transmitter raided over your page. Self-preservation counts.",
       fx:{hype:16,heat:3,rapport:12},
       reply:["guest","ECHO","[a real laugh — the first all night] ...Honest to the end. Good. A saint would've sent it, gotten martyred, accomplished nothing. A coward with good instincts gets the truth to armor and lives to host tomorrow. I'll take the coward every time. They last longer. Goodnight, and — get your line swept."],
       note:"ECHO trusts self-aware honesty far more than performed heroism.",
       next:"END"},
      {verb:"dead",t:"Deadpan",said:"[you just shrug at the mic, on air, and let the listeners fill it in]",
       fx:{hype:15,heat:6,rapport:11},
       reply:["guest","ECHO","[soft] The shrug. No speech, no halo. You did the rarest thing in media and refused to make a moment of it. That's how I know it was real. Performed virtue has a sound; yours doesn't. The file's safe. You're safe. Goodnight, Night Frequency. Stay analog."],
       next:"END"}
    ]
  }

  },

  /* ---- finale validator: rewards restraint + verification ---- */
  score(s){
    const revScore = Math.min(100, s.reveals.length*6);
    let composite = s.peakHype*0.30 + s.rapport*0.30 + revScore*0.22 + (100-s.heat)*0.18;
    if(s.flags.sent_safe) composite += 10;
    if(s.flags.sent_owned) composite += 5;
    return composite;
  },
  outcome(s){
    let line;
    if(s.flags.sent_safe) line = "You gave up the scoop to get the truth into armored hands — the smallest, bravest thing a show can do. ECHO trusted you more for it than for any headline.";
    else if(s.flags.sent_reckless) line = "You put the whole file on air and read the hash live. The biggest night your frequency will ever have — and maybe its last. You're a marked host now.";
    else if(s.flags.sent_partial) line = "You took the controlled leak: one checkable line, no martyrdom. Cautious, defensible, impossible to ever fully judge — exactly ECHO's world.";
    else if(s.flags.sent_owned) line = "You handed ECHO his own conscience back and let him choose, witnessed — the one thing the dashboard could never allow.";
    else line = "An hour on the knife's edge with someone you still can't fully place.";
    const heatLine = s.dangerHot?" You ran dangerously hot — gripping radio, but the sweep got close enough to remember your signal." : s.heat<=20?" You kept it improbably clean." : "";
    return line + ` Peak hype ${s.peakHype}, final heat ${s.heat}, rapport ${s.rapport}.` + heatLine + ` ${s.reveals.length} claims made tape.`;
  },
  busted(s){
    return "You reached the end of the hour — but spent it running so hot the patient sweep finally fixed your position. As ECHO's relays dropped clean, a different signal locked onto yours. The file got out; so did ECHO. You're the one left holding a traced transmitter and a recording of the most dangerous guest on the dial. Worth it? You said the true thing out loud. Now you'll learn what that costs.";
  },
  walkout(s){
    return "Somewhere in the hour the trust broke — which takes real doing with a guest this steady. ECHO went quiet, then the relays dropped early, mid-thought, and the most careful person you'll ever book decided you weren't the unoptimized room he'd hoped for. You got most of the way. You did not get the file. Dead air, and a page that stays buried two more years.";
  }
};
})();
