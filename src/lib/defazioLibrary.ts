export type LibraryItem = {
  title: string;
  source: string;
  type: "core lecture" | "video module" | "reference" | "business" | "protocol";
  status: "live" | "to condense" | "source material";
  duration?: string;
  href?: string;
  summary: string;
  priority: string;
};

export type ModuleScriptBeat = {
  time: string;
  label: string;
  visual: string;
  voiceover: string;
};

export type ModuleScriptDraft = {
  title: string;
  runtime: string;
  status: string;
  source: string;
  purpose: string;
  guardrails: string[];
  productionNotes: string[];
  beats: ModuleScriptBeat[];
};

export type ProductionStoryboardFrame = {
  number: number;
  time: string;
  label: string;
  visual: string;
  motion: string;
  caption: string;
  mobileCheck: string;
  artDirection: string;
  assetHref: string;
  variant:
    | "silhouette"
    | "split-body"
    | "comparison"
    | "electrolysis"
    | "cells"
    | "guardrail"
    | "close";
};

export const firstModuleScript: ModuleScriptDraft = {
  title: "The Water-Rich Body",
  runtime: "5:30",
  status: "Ready-to-produce draft",
  source: "Dr. De Fazio's core water-education framework",
  purpose:
    "Make a new visitor understand David's core argument before they hear about machines, pH, business, or protocols.",
  guardrails: [
    "Say ERW is not a cure.",
    "Frame personal stories as anecdotes, not proof.",
    "Do not tell viewers to stop medication or replace medical care.",
    "Keep the claim focused on water quality, electrolysis, hydration, and environment.",
  ],
  productionNotes: [
    "Preserve David's emphasis on water quality while stating that adult total body water averages about 55–60% and fat-free mass about 70–75% water.",
    "Avoid stock-medical fear imagery. Keep visuals luminous, structured, and calm.",
    "Add on-screen captions because this should work silently on mobile.",
    "Close with Ask DeFazio AI and consultation, not a hard product pitch.",
  ],
  beats: [
    {
      time: "00:00-00:35",
      label: "Cold open",
      visual:
        "Dark blue water field. A human silhouette slowly fills with clear luminous water while faint hexagonal structure appears.",
      voiceover:
        "What if the most important part of your health is not the part you can see in the mirror? Not muscle. Not bone. Not even the habits people usually talk about first. What if the real starting point is the water that makes up most of you?",
    },
    {
      time: "00:35-01:20",
      label: "Two body-water numbers",
      visual:
        "Split graphic: about 55–60% total body water in adults, and about 70–75% water in fat-free mass. Keep labels phone-readable.",
      voiceover:
        "The accurate teaching frame separates whole-body composition from tissue composition: adult total body water averages about 55–60%, while fat-free mass is about 70–75% water. Both vary, but both show how central water is to physiology.",
    },
    {
      time: "01:20-02:10",
      label: "Not all water is equal",
      visual:
        "Clean comparison row: distilled, reverse osmosis, filtered, chemically alkaline, generic ionized, then ERW highlighted.",
      voiceover:
        "That is why the conversation cannot stop at 'drink more water.' Distilled water, reverse osmosis water, filtered water, chemically alkalized water, and generic ionized water are not all the same thing. Water can be clean and still not be charged. It can be alkaline and still not be alive in the way David is talking about.",
    },
    {
      time: "02:10-03:05",
      label: "Introduce ERW",
      visual:
        "Electrolysis chamber animation with water moving across plates and separating into alkaline reducing and acidic oxidizing streams.",
      voiceover:
        "Electrolyzed Reduced Water is a different category. Filtered mineral-containing water passes through an ionizer and across platinum-coated titanium electrodes. Electrolysis produces an alkaline reducing stream that may contain dissolved molecular hydrogen and an acidic oxidizing stream for designated non-drinking uses.",
    },
    {
      time: "03:05-04:05",
      label: "The internal environment",
      visual:
        "Cells suspended in water. Nutrients and oxygen move in; waste and CO2 move out. The scene clears as the water becomes brighter.",
      voiceover:
        "David's deeper point is that water is not just something you drink. It is the medium of the body. It is the environment around your cells. It helps transport nutrients, helps waste move out, supports temperature regulation, and participates in the chemistry of energy. If that internal environment matters, then the quality of the water matters.",
    },
    {
      time: "04:05-04:55",
      label: "Conviction with guardrails",
      visual:
        "Plain text guardrail card over soft water motion: educational, not medical advice; ERW is not a cure.",
      voiceover:
        "This is not a cure claim or a replacement for medical care. The frame is foundational: understand the water-rich body, then ask careful questions about hydration and water quality.",
    },
    {
      time: "04:55-05:30",
      label: "Close and next step",
      visual:
        "Show EWG ZIP-code lookup, Ask DeFazio AI, and consultation CTA as three clean mobile-first cards.",
      voiceover:
        "If you want to understand this for your own home, start by asking what is in your water today. Then learn what electrolysis measurably changes and which machine, if any, fits your life. Health is the real wealth, and the first decision may be simpler than you think.",
    },
  ],
};

export const secondModuleScript: ModuleScriptDraft = {
  title: "Clean Your Fish Tank",
  runtime: "6:30",
  status: "Ready-to-produce draft",
  source:
    "Built from the local fish tank, aquaporin, and cellular respiration transcript",
  purpose:
    "Turn David's strongest analogy into a visual module that makes cellular environment and water quality easy to understand.",
  guardrails: [
    "Use the fish tank as an analogy, not as proof.",
    "Do not claim ERW detoxes disease or treats medical conditions.",
    "Explain cellular exchange in plain educational language.",
    "If viewers have symptoms or medical conditions, direct them to a qualified clinician.",
  ],
  productionNotes: [
    "Use a clean aquarium as the recurring visual metaphor: clear water, cloudy water, filtration, oxygen, and living cells.",
    "Keep aquaporins simple: water channels in cell membranes that help water move efficiently.",
    "Use captions and icons so the module still works silently on mobile.",
    "End by connecting the analogy back to measurable water properties and the Ask DeFazio AI.",
  ],
  beats: [
    {
      time: "00:00-00:45",
      label: "Aquarium hook",
      visual:
        "A pristine saltwater aquarium slowly becomes cloudy. Fish movement becomes slower, then the scene pauses before turning into a cellular water environment.",
      voiceover:
        "Think of your body like a saltwater aquarium. You can have life in the tank, filtration, oxygen, and nutrients. But if the water gets dirty, everything living in that tank has to work harder. David's question is simple: how clean is the water your cells are living in?",
    },
    {
      time: "00:45-01:35",
      label: "Cells are the fish",
      visual:
        "Aquarium fish dissolve into glowing cells suspended in water. The surrounding fluid becomes the focus, not the cell alone.",
      voiceover:
        "In this analogy, the cells are the fish. The water around those cells is the environment. That environment matters because every cell depends on movement: oxygen and nutrition have to get in, and carbon dioxide and waste products have to move out.",
    },
    {
      time: "01:35-02:30",
      label: "Cellular exchange",
      visual:
        "Simple cell membrane animation. Blue oxygen and nutrient particles move inward; gray CO2 and waste particles move outward.",
      voiceover:
        "This is not a disease claim. It is basic physiology. Cells are constantly exchanging with their environment. They need oxygen. They need nutrition. They produce carbon dioxide and waste. The cleaner and more supportive the environment, the better the conversation David wants people to understand.",
    },
    {
      time: "02:30-03:25",
      label: "Aquaporins",
      visual:
        "Cell membrane zoom-in with water channels opening. Water molecules pass through channels while larger clusters are shown as a simplified teaching model.",
      voiceover:
        "Aquaporins are tiny water channels in cell membranes. They are part of the body's high-speed plumbing system for water movement. David uses this to explain why the structure, charge, and quality of water matter in his teaching model.",
    },
    {
      time: "03:25-04:25",
      label: "Why water quality matters",
      visual:
        "Side-by-side water environments: visibly contaminated water versus clear moving water. Avoid implying that appearance proves a biological effect.",
      voiceover:
        "This is where the fish tank analogy becomes useful. The goal is to ask measurable questions: What is in the source water? What does the filter remove? What do pH, ORP, minerals, and dissolved-hydrogen measurements actually show?",
    },
    {
      time: "04:25-05:30",
      label: "Bring in ERW",
      visual:
        "Electrolysis plates create a luminous reducing stream. The stream feeds back into the clear cellular environment animation.",
      voiceover:
        "Electrolyzed Reduced Water is David's answer to that environment question. Through filtration and electrolysis, the drinking stream becomes alkaline and reducing and may contain dissolved molecular hydrogen. Those are properties to measure, not promises about what happens inside the body.",
    },
    {
      time: "05:30-06:05",
      label: "Guardrail",
      visual:
        "Minimal text over water motion: educational only; not medical advice; not a cure; consult your clinician.",
      voiceover:
        "This does not mean water is a cure. It does not replace medical care, medication, or a clinician's guidance. It means water quality is foundational. Before you chase complicated answers, ask whether the tank itself is clean.",
    },
    {
      time: "06:05-06:30",
      label: "Close",
      visual:
        "Three cards: Check your tap water, learn ERW, ask the AI. End on clear water and the Dr. De Fazio site.",
      voiceover:
        "Start with your water. Check what is coming out of your tap. Learn what electrolysis changes. Then ask better questions about the claims attached to each measurable property.",
    },
  ],
};

export const thirdModuleScript: ModuleScriptDraft = {
  title: "Electrical vs. Chemical Water",
  runtime: "6:00",
  status: "Ready-to-produce draft",
  source:
    "Built from the local electrical vs. chemical water transcript and electrolysis site material",
  purpose:
    "Clarify David's most important distinction for skeptical viewers: chemically alkalized water and water changed by electrolysis are not the same conversation.",
  guardrails: [
    "Keep the claim about process and water properties, not disease outcomes.",
    "Do not say ERW treats illness or replaces medical care.",
    "Avoid promising that ERW changes blood pH or bypasses normal digestion.",
    "Frame micro-clustering and rapid absorption as David's educational model, not settled medical proof.",
  ],
  productionNotes: [
    "Open with a clean split-screen: additives on one side, electrolysis plates on the other.",
    "Make pH secondary. The main story is electrical charge, molecular hydrogen, negative ORP, and reducing potential.",
    "Use simple molecule/electron animation, not dense chemistry slides.",
    "Credit source educators when using Donaldson-style terminology or visuals.",
  ],
  beats: [
    {
      time: "00:00-00:35",
      label: "The distinction",
      visual:
        "Two glasses of water on a dark surface. One is labeled chemically alkalized; the other electrolyzed. A line of light separates them.",
      voiceover:
        "Chemically alkalized water and electrolyzed water are not the same conversation. That is the distinction David wants people to understand before they compare pH numbers or machine claims.",
    },
    {
      time: "00:35-01:20",
      label: "What chemically alkalized means",
      visual:
        "Mineral drops and powders fall into a glass. The pH number rises, but the water remains visually flat and uncharged.",
      voiceover:
        "Chemically alkalized water is usually water changed by additives: minerals, drops, powders, or other chemistry that raises pH. That may make water alkaline, but in David's teaching, pH alone is not the whole story.",
    },
    {
      time: "01:20-02:20",
      label: "What electrolysis changes",
      visual:
        "Water flows through a clean electrolysis chamber with platinum-coated titanium plates. Charge moves through the water.",
      voiceover:
        "Electrically changed water is made through electrolysis. Filtered mineral water passes across plates inside the ionizer. Electricity changes the water environment and separates it into different streams with different properties.",
    },
    {
      time: "02:20-03:10",
      label: "The split stream",
      visual:
        "A single water flow becomes two luminous paths: alkaline reducing water and acidic oxidizing water. Keep labels large and phone-readable.",
      voiceover:
        "On one side, you get alkaline reducing water for drinking. On the other side, acidic oxidizing water for non-drinking uses. This is why David says the machine is not just making one kind of water. It is creating water for different jobs.",
    },
    {
      time: "03:10-04:05",
      label: "Why pH is not the headline",
      visual:
        "A pH meter fades behind an ORP meter, hydrogen bubbles, and electron icons. The pH number remains visible but smaller.",
      voiceover:
        "The pH matters, but David does not want the conversation reduced to pH. The deeper conversation is molecular hydrogen, negative ORP, and reducing potential. In simple language, it is water with an electrical story, not just an alkaline number.",
    },
    {
      time: "04:05-04:55",
      label: "Simple analogies",
      visual:
        "A lightning strike over water, then a bunch of grapes being separated into smaller pieces, then static hair spreading apart.",
      voiceover:
        "David uses vivid analogies here: a lightning strike charging water, grapes separating from a cluster, static causing hair to spread out. The point is not to overcomplicate it. Electricity changes how the water behaves in his educational model.",
    },
    {
      time: "04:55-05:35",
      label: "Guardrail",
      visual:
        "Minimal disclaimer card over an electrolysis animation: educational only; not medical advice; properties, not cures.",
      voiceover:
        "This is educational. It is not a disease claim, and it is not a reason to ignore medical care. The safest way to explain it is this: chemically alkalized water changes pH through additives. Electrolyzed Reduced Water is created through electrolysis, which electrically charges the water and gives it measured reducing properties.",
    },
    {
      time: "05:35-06:00",
      label: "Close",
      visual:
        "Return to the two glasses. The electrolyzed-water glass connects to the Library, Ask DeFazio AI, and consultation cards.",
      voiceover:
        "So before you ask, 'Is it alkaline?' ask the better question: how was it made? Chemical or electrical? Additives or electrolysis? That is where the real water conversation begins.",
    },
  ],
};

export const fourthModuleScript: ModuleScriptDraft = {
  title: "Hydrogen, ORP, and Cellular Energy",
  runtime: "6:45",
  status: "Ready-to-produce draft",
  source:
    "Built from the local hydrogen, ORP, active oxygen, and cellular energy transcript plus Donaldson-style teaching themes",
  purpose:
    "Explain why David puts molecular hydrogen and reducing potential at the center of the ERW conversation without turning research interest into disease claims.",
  guardrails: [
    "Describe molecular hydrogen research as research interest, not treatment advice.",
    "Do not claim ERW treats Parkinson's, MS, autism, fatigue, cardiac disease, metabolic disease, or any diagnosis.",
    "Keep ATP and Krebs cycle language high-level: oxygen supports normal energy metabolism.",
    "Frame ORP as measured reducing potential, not a guarantee of clinical outcomes.",
  ],
  productionNotes: [
    "Open with hydrogen bubbles and a simple ORP meter so the viewer sees the headline before the chemistry.",
    "Use a battery-style positive/negative visual for ORP: positive oxidizing, negative reducing.",
    "Keep the mitochondria animation clean and simple; avoid dense biochemical pathways.",
    "When mentioning PubMed or disease research, show it as 'research interest' with a visible educational-only caption.",
  ],
  beats: [
    {
      time: "00:00-00:40",
      label: "Hydrogen is the headline",
      visual:
        "Close-up hydrogen bubbles rise through luminous water. A simple title appears: hydrogen, ORP, cellular energy.",
      voiceover:
        "When David talks about Electrolyzed Reduced Water, hydrogen is the headline. Not hype. Not magic. Molecular hydrogen is the small, simple molecule that makes this conversation different from ordinary alkaline water.",
    },
    {
      time: "00:40-01:35",
      label: "Why small matters",
      visual:
        "A tiny H2 molecule moves through water, past larger particles, and toward a clean cell membrane diagram.",
      voiceover:
        "Hydrogen is tiny. In David's teaching model, that matters because the conversation is not only about pH. It is about charge, reducing potential, and the way water can support the environment around the cell.",
    },
    {
      time: "01:35-02:30",
      label: "ORP made simple",
      visual:
        "A large readable ORP meter moves from positive red to negative blue. Electron icons appear on the negative side.",
      voiceover:
        "ORP means oxidation-reduction potential. Positive ORP is more oxidizing and negative ORP more reducing under the measurement conditions. ORP describes a water sample; it is not proof of antioxidant action in the body.",
    },
    {
      time: "02:30-03:25",
      label: "Electrons and antioxidants",
      visual:
        "A free radical icon searches for an electron. A reducing-water stream offers an electron without showing disease imagery.",
      voiceover:
        "Oxidation is an electron problem. Free radicals are unstable because they are missing electrons. Antioxidants help by donating electrons. ERW is discussed in that same reducing-potential framework because of molecular hydrogen and negative ORP.",
    },
    {
      time: "03:25-04:25",
      label: "Oxygen and energy",
      visual:
        "Simplified mitochondria animation. Oxygen enters, ATP coins light up, and the Krebs cycle is shown as a clean rotating loop without dense labels.",
      voiceover:
        "The transcript also connects this to energy. Oxygen is required for normal cellular energy metabolism. At a high level, your cells use oxygen in the process of making ATP, the body's energy currency. Keep it simple: oxygen helps the fire burn cleanly.",
    },
    {
      time: "04:25-05:20",
      label: "Research interest, not cure language",
      visual:
        "A PubMed-style search page appears abstracted in the background. A clear caption reads: research interest, not treatment claim.",
      voiceover:
        "There is real scientific interest in molecular hydrogen. You can find research around oxidative stress, inflammation pathways, and many health conditions. But the right language matters: research interest is not the same as a treatment claim. ERW is not a cure and does not replace medical care.",
    },
    {
      time: "05:20-06:10",
      label: "Bring it back to water quality",
      visual:
        "Electrolysis plates create a reducing stream. Hydrogen bubbles, a negative ORP meter, and a cell-water environment appear together.",
      voiceover:
        "David's point is foundational. If water is essential to physiology, its source and measurable properties deserve attention. Molecular hydrogen, ORP, filtration, and mineral content should each be discussed separately and with their limits visible.",
    },
    {
      time: "06:10-06:45",
      label: "Close",
      visual:
        "Three mobile-first cards: read the references, explore the library, ask DeFazio AI. End on luminous moving water.",
      voiceover:
        "So when someone asks what makes this different, do not start with a miracle claim. Start with the water chemistry: hydrogen, reducing potential, and a better internal environment to learn about. Then ask good questions, read the references, and speak with a qualified clinician for medical decisions.",
    },
  ],
};

export const fifthModuleScript: ModuleScriptDraft = {
  title: "Free Radicals and Electron Donation",
  runtime: "5:45",
  status: "Ready-to-produce draft",
  source:
    "Built from the local physician free-radical / antioxidant / ORP transcript plus the site's oxidation-reduction teaching",
  purpose:
    "Make oxidation, free radicals, antioxidants, and negative ORP understandable without repeating disease-treatment claims from the source material.",
  guardrails: [
    "Use free radicals and oxidation as general educational physiology, not diagnosis-specific claims.",
    "Do not claim ERW treats atherosclerosis, acid reflux, wounds, diabetic ulcers, infection, or any disease.",
    "Do not encourage home wound care or medical use of acidic water; direct those questions to a clinician.",
    "If comparing ORP to foods or green tea, frame it as source-material language and avoid implying equivalent clinical benefit.",
  ],
  productionNotes: [
    "Open with familiar oxidation visuals: apple browning, metal rusting, and a clean electron animation.",
    "Avoid graphic artery, wound, or infection visuals; keep the module elegant and foundational.",
    "Use one large readable ORP meter and a simple electron-donation handoff.",
    "Close with David's broader frame: water quality is foundational, but medical decisions stay with qualified clinicians.",
  ],
  beats: [
    {
      time: "00:00-00:35",
      label: "Oxidation made visible",
      visual:
        "An apple browns, a metal tool rusts, then both dissolve into a clean animation of one missing electron.",
      voiceover:
        "Oxidation sounds complicated until you see it. An apple browns. Metal rusts. In the body, oxidation is part of normal life too. The simple idea is this: electrons matter.",
    },
    {
      time: "00:35-01:20",
      label: "What free radicals want",
      visual:
        "A neutral molecule loses one electron and becomes unstable. The missing electron is highlighted with a simple open circle.",
      voiceover:
        "A free radical is an unstable molecule with an electron problem. It is missing what it wants, so it looks for an electron somewhere else. That is why David connects free radicals to the broader conversation about oxidation, reduction, and water quality.",
    },
    {
      time: "01:20-02:15",
      label: "Antioxidants donate",
      visual:
        "Colorful antioxidant icons from fruits, vegetables, and tea donate electrons to unstable molecules. The scene stabilizes.",
      voiceover:
        "Antioxidants are famous because they can donate electrons. They help neutralize unstable molecules in the chemistry conversation. This is the bridge to ORP: are we talking about something oxidizing, or something reducing?",
    },
    {
      time: "02:15-03:15",
      label: "ORP as reducing potential",
      visual:
        "A clean ORP meter slides from positive oxidizing red to negative reducing blue. A negative millivolt readout appears beside electron icons.",
      voiceover:
        "ORP means oxidation-reduction potential, measured in millivolts. Positive values are more oxidizing and negative values more reducing under the test conditions. ORP does not identify dissolved hydrogen or predict a clinical outcome.",
    },
    {
      time: "03:15-04:05",
      label: "Where ERW fits",
      visual:
        "Electrolysis plates create a luminous drinking stream. Hydrogen bubbles, a negative ORP meter, and electron icons appear together.",
      voiceover:
        "Electrolyzed Reduced Water is discussed in this reducing-potential framework because the drinking stream is associated with molecular hydrogen and negative ORP. The point is not to make a miracle claim. The point is to understand what the water is doing chemically and electrically.",
    },
    {
      time: "04:05-04:55",
      label: "Handle big claims carefully",
      visual:
        "A source-material folder opens, then sensitive claim cards move behind a clinician-consult label: arteries, reflux, wounds, infection.",
      voiceover:
        "Some older source materials use medical examples: arteries, reflux, wounds, bacteria, ulcers. Those examples need real caution. They belong in a clinician-guided conversation, not in a public promise about drinking water. This module stays with the foundation: oxidation, electrons, ORP, and water quality.",
    },
    {
      time: "04:55-05:25",
      label: "David's safe frame",
      visual:
        "Return to the body-water silhouette from Module 1, now surrounded by electron and ORP visuals.",
      voiceover:
        "David's safe frame is still the strongest one: if water is the medium of the body, then the properties of that water matter. Clean. Mineral-present. Electrically changed. Reducing. Charged and alive.",
    },
    {
      time: "05:25-05:45",
      label: "Close",
      visual:
        "Three cards: learn the references, ask DeFazio AI, talk with your clinician. End on clear moving water.",
      voiceover:
        "Change the question from 'what miracle does this claim?' to 'what environment am I giving my cells?' Learn the chemistry, review the references, and bring medical questions to a qualified clinician.",
    },
  ],
};

export const moduleScriptDrafts: ModuleScriptDraft[] = [
  firstModuleScript,
  secondModuleScript,
  thirdModuleScript,
  fourthModuleScript,
  fifthModuleScript,
];

export const libraryItems: LibraryItem[] = [
  {
    title: "Dr. Michael Donaldson - ERW Fundamentals",
    source: "David's preferred educator",
    type: "video module",
    status: "to condense",
    duration: "Target: 5-7 min",
    href: "https://youtu.be/Br8D1QPEkX8",
    summary:
      "David repeatedly calls Donaldson's material informative. Use it as a source for electrolysis, alkaline vs. alkalized water, PEU, plate quality, free radicals, cellular respiration, and the fish-tank analogy.",
    priority:
      "Rebuild the ideas with modern graphics, music, captions, and credit. Do not repost full copyrighted videos.",
  },
  {
    title: "Dr. Michael Donaldson - Water Knowledge Vimeo Series",
    source: "Public Vimeo group research",
    type: "video module",
    status: "source material",
    duration: "3 public source videos",
    href: "https://vimeo.com/groups/792950",
    summary:
      "A public Vimeo group titled Water Knowledge lists three Donaldson videos: electrolysis and ionizer comparison, why Kangen water is effective, and Enagic versus the competition.",
    priority:
      "Use this as a source map for the Donaldson library path. Summarize, transform, and credit any material used.",
  },
  {
    title: "David's Water-Rich-Body Opening",
    source: "Dr. De Fazio's core water-education framework",
    type: "core lecture",
    status: "to condense",
    duration: "Target: 5-7 min",
    summary:
      "David opens with the distinction between adult total body water and water in fat-free mass, then explains why he continued comparing different water-treatment approaches.",
    priority:
      "Make this the first condensed module because it explains why the site begins with water before machines, business, or protocols.",
  },
  {
    title: "Fish Tank and Cellular Respiration",
    source: "Local materials transcript",
    type: "core lecture",
    status: "to condense",
    duration: "Target: 5-7 min",
    summary:
      "David's saltwater-aquarium analogy connects dirty water, cellular respiration, aquaporins, oxygen/nutrition moving in, and CO2/toxins moving out.",
    priority:
      "Turn this into the main animated explainer: cells as fish, water as environment, and aquaporins as cellular plumbing.",
  },
  {
    title: "Hydrogen, ORP, and Cellular Energy",
    source: "Local materials transcript",
    type: "video module",
    status: "to condense",
    duration: "Target: 5-7 min",
    summary:
      "A source clip says hydrogen is the primary ERW benefit, connects it to electrochemical potential, antioxidant/free-radical language, oxygen, ATP, and Krebs cycle.",
    priority:
      "Keep the conviction but add medical guardrails: cite hydrogen research as research interest, not disease treatment.",
  },
  {
    title: "Electrical vs. Chemical Water",
    source: "Local materials transcript",
    type: "video module",
    status: "to condense",
    duration: "Target: 5-7 min",
    summary:
      "A David-source clip distinguishes electrolyzed water from chemically alkalized water, using electrolysis, dissociation, molecular hydrogen, active oxygen, hydroxyl ions, and rapid-absorption language.",
    priority:
      "Make this a clean animation with molecule/electron visuals. Keep claims tied to electrolysis and avoid disease-outcome language.",
  },
  {
    title: "Electrical-Potential Demonstration",
    source: "Dr. De Fazio's educational archive",
    type: "video module",
    status: "source material",
    duration: "Short source",
    summary:
      "LED-probe clips contrast samples with different electrical conductivity and then extend the idea into living foods versus highly processed foods.",
    priority:
      "Use as a visual metaphor and hook, not standalone proof. Pair it with a measured explanation of electrical potential and water quality.",
  },
  {
    title: "Free Radicals and Electron Donation",
    source: "Local materials transcript",
    type: "core lecture",
    status: "to condense",
    duration: "Target: 5-7 min",
    summary:
      "A physician source explains free radicals as electron-seeking entities, antioxidants as electron donors, and ORP as a way to discuss reducing/electron-donating potential.",
    priority:
      "Build the module around oxidation and electrons, while keeping any cardiovascular or disease examples general and properly guarded.",
  },
  {
    title: "Bioelectricity and Cellular Voltage",
    source: "Dr. De Fazio's educational archive",
    type: "reference",
    status: "source material",
    summary:
      "Archive material mentions Otto Warburg, Robert O. Becker, cellular voltage, salamander/frog regeneration, and bioelectric current.",
    priority:
      "Treat as sensitive historical context only. Do not imply ERW treats cancer, regenerates tissue, or replaces medical care.",
  },
  {
    title: "Cellular Respiration Animation",
    source: "Shared Vimeo animation",
    type: "video module",
    status: "source material",
    duration: "6 min source",
    href: "https://vimeo.com/161176017",
    summary:
      "A simple visual explanation of glycolysis, Krebs cycle, and the electron transport chain. Useful for showing where oxidative stress interrupts energy production.",
    priority:
      "Condense into a module that connects hydration, oxygen, H2, and mitochondrial energy without making disease claims.",
  },
  {
    title: "Free Radicals and Antioxidants",
    source: "Shared educational animation",
    type: "video module",
    status: "source material",
    duration: "Short source",
    href: "https://youtu.be/8Sn-EpbGwsg",
    summary:
      "Explains free radicals, oxidative stress, and antioxidant electron donation. Relevant to David's 'simple truth about oxidation' section.",
    priority:
      "Use as conceptual inspiration for a cleaner ERW-specific animation.",
  },
  {
    title: "Dr. Mojka Renaud - Kangen Science",
    source: "David shared as useful science insight",
    type: "video module",
    status: "to condense",
    href: "https://vimeo.com/384264341",
    summary:
      "Holistic nutrition perspective on Kangen water and ERW benefits. David flagged it as good insight into the science and power of Kangen water.",
    priority:
      "Summarize carefully and separate research-backed claims from educator opinion.",
  },
  {
    title: "Dr. Pinky's Audio Presentation",
    source: "Dr. De Fazio's media archive",
    type: "core lecture",
    status: "source material",
    summary:
      "Content-rich Doctors on Kangen presentation with voiceover. David likes the material but says it is long, outdated, and not captivating enough.",
    priority:
      "Use as source material for a more professional deck and shorter modules.",
  },
  {
    title: "Enagic Business Model 2024",
    source: "Dr. De Fazio's media archive",
    type: "business",
    status: "source material",
    summary:
      "Business model presentation. David wants business included for people drawn to the opportunity, but health should remain the primary frame.",
    priority:
      "Keep results-vary/no-income-guarantee language visible.",
  },
  {
    title: "15 Questions for Comparing Ionizers",
    source: "David document",
    type: "reference",
    status: "source material",
    summary:
      "David's older comparison sheet is preserved as source material. The public page now turns it into a current-document checklist covering certifications, plate construction, servicing, warranty, water outputs, and household fit.",
    priority:
      "Use as a question bank, not as a source of truth. Verify claims against current manufacturer and issuing-body records.",
  },
  {
    title: "EWG Tap Water Database",
    source: "David-recommended public database",
    type: "reference",
    status: "live",
    href: "https://www.ewg.org/tapwater/",
    summary:
      "David's recommended first step for users to inspect what is in their municipal water by ZIP code.",
    priority:
      "Keep this free, obvious, and central to the tap-water section.",
  },
  {
    title: "Molecular Hydrogen Institute",
    source: "Recommended by Dr. De Fazio",
    type: "reference",
    status: "live",
    href: "https://www.hydrogenstudies.com/",
    summary:
      "Tyler LeBaron's science-education hub on molecular hydrogen — the source behind David's 'selective antioxidant' framing and a curated index of H₂ research.",
    priority:
      "Lead reference for the hydrogen conversation. Present as research education, not treatment claims.",
  },
  {
    title: "PubMed — Molecular Hydrogen Research",
    source: "David-recommended search engine",
    type: "reference",
    status: "live",
    href: "https://pubmed.ncbi.nlm.nih.gov/?term=molecular+hydrogen+water",
    summary:
      "The U.S. National Library of Medicine database. David points people here to read the primary literature on hydrogen-rich and electrolyzed reduced water for themselves.",
    priority:
      "Let curious readers verify claims at the source — 'documentation beats conversation.'",
  },
  {
    title: "Google Scholar — ERW & Hydrogen Water",
    source: "David-recommended search engine",
    type: "reference",
    status: "live",
    href: "https://scholar.google.com/scholar?q=electrolyzed+reduced+water+hydrogen",
    summary:
      "A broad academic search across journals and citations for electrolyzed reduced water and molecular hydrogen studies.",
    priority:
      "Secondary research entry point alongside PubMed for readers who want to go deeper.",
  },
  {
    title: "Hydrogen & Athletic Recovery",
    source: "Dr. De Fazio's research list",
    type: "reference",
    status: "live",
    href: "https://pubmed.ncbi.nlm.nih.gov/?term=hydrogen+rich+water+exercise+recovery",
    summary:
      "Research interest in hydrogen-rich water for exercise performance, recovery, and fatigue. David wants a section for athletes — framed as emerging research, with results that vary by study.",
    priority:
      "Build the athlete angle on the literature, not testimonials. Keep claims measured.",
  },
  {
    title: "Molecular Hydrogen Webinar",
    source: "Recommended by Dr. De Fazio",
    type: "video module",
    status: "live",
    href: "https://vimeo.com/884715490/d4c26ad56a",
    summary:
      "A science-based presentation on molecular hydrogen David flagged as well done. Note the host also promotes H₂ tablets, so separate the science from the product pitch.",
    priority:
      "Use as a science explainer reference; credit the source and keep it educational.",
  },
  {
    title: "The Science of Negative Ions",
    source: "Recommended by Dr. De Fazio",
    type: "reference",
    status: "live",
    href: "https://pubs.acs.org/doi/10.1021/acsnano.3c00820",
    summary:
      "Why moving water — waterfalls, surf, rivers — charges the surrounding air with negative ions. Peer-reviewed work on negative-ion generation and effects, the science behind David's 'restorative medicine of nature' theme.",
    priority:
      "Anchor the negative-ion idea to the literature. Keep it about air/water chemistry, not disease cures.",
  },
  {
    title: "Alkaline vs. Alkalyzed Water",
    source: "Recommended by Dr. De Fazio",
    type: "video module",
    status: "live",
    href: "https://youtu.be/GRCeLKuH6AE",
    summary:
      "A video on the difference between chemically induced 'alkaline' water and electrically induced 'alkalyzed' water — the same distinction David teaches: ask how the water was made, not just its pH.",
    priority:
      "Reinforces the electrical-vs-chemical module. Summarize and credit.",
  },
  {
    title: "The Body Is Electrical",
    source: "Dr. De Fazio's educational framework",
    type: "reference",
    status: "live",
    summary:
      "David's recurring concept: the body runs on bioelectricity. His clinical example — a defibrillator revives cardiac arrest with ~200 joules — ties to Dr. Jerry Tennant's 'Healing Is Voltage' idea about cellular voltage. Presented as a teaching framework, not a treatment claim.",
    priority:
      "Keep this conceptual and physiological. Do not imply ERW treats disease or 'recharges' the body medically.",
  },
  {
    title: "Anti-Aging Study (Doctors on Kangen)",
    source: "Dr. Pinky — David shared",
    type: "reference",
    status: "live",
    href: "https://www.doctorsonkangen.com/2021/08/23/how-to-look-10-years-younger-in-2-days/",
    summary:
      "Dr. Pinky's write-up on the cosmetic/anti-aging angle of Kangen water. Educator content David likes for the style; read the underlying study critically.",
    priority:
      "Present as educator material, not proof. Separate any study data from marketing language.",
  },
  {
    title: "Doctors on Kangen — Studies & Research",
    source: "David-recommended index",
    type: "reference",
    status: "live",
    href: "https://www.doctorsonkangen.com/studies-and-research/",
    summary:
      "A curated index of Kangen and ERW studies maintained by the Doctors on Kangen community — a jumping-off point for the research David references.",
    priority:
      "Useful source map. Cross-check claims against primary literature on PubMed.",
  },
  {
    title: "Words, Water & Self-Talk",
    source: "Recommended by Dr. De Fazio",
    type: "reference",
    status: "live",
    summary:
      "A mind-body theme David likes: since the body is mostly water, the language we use on ourselves matters. Framed as a wellness/mindset idea — encouragement over criticism — not a physical or medical claim.",
    priority:
      "Keep clearly in the mindset/wellness lane, separate from the chemistry and any medical framing.",
  },
  {
    title: "Kangen Water Protocol",
    source: "Dr. De Fazio's media archive",
    type: "protocol",
    status: "source material",
    summary:
      "Protocol PDF shared in the archive. Should inform educational context, but any health-specific use must be guarded and reviewed.",
    priority:
      "Do not present as medical treatment instructions without David-approved wording.",
  },
];

export const productionVisualTreatments = [
  {
    moduleTitle: "The Water-Rich Body",
    runtime: "5:30",
    aspect: "Master in 16:9, crop-safe for 9:16",
    visualMotifs: [
      "body-water silhouette",
      "hexagonal water structure",
      "soft mineral shimmer",
      "clear EWG lookup cards",
    ],
    visualBrief:
      "Premium luminous medical-wellness animation of a human silhouette filling with clear structured water, subtle hexagonal molecular patterns, calm blue-white light, clean editorial captions, no fear imagery.",
    motionNotes:
      "Slow water-fill reveal, gentle hexagonal drift, smooth transition from water types into electrolysis.",
    soundTone:
      "Quiet cinematic water bed, low pulse, no dramatic alarm tones.",
    captionRule:
      "Every core phrase must work silently on a phone: 55–60% whole body, 70–75% fat-free mass, ERW is not a cure.",
    guardrailOverlay:
      "Educational only. ERW is not a cure and does not replace medical care.",
  },
  {
    moduleTitle: "Clean Your Fish Tank",
    runtime: "6:30",
    aspect: "Master in 16:9, keep fish/cell action centered",
    visualMotifs: [
      "clear aquarium",
      "cell membrane",
      "aquaporin channels",
      "oxygen in and waste out",
    ],
    visualBrief:
      "Elegant aquarium-to-cell animation, clear water environment transforming into glowing cells suspended in fluid, simple aquaporin channels, oxygen and nutrients moving in, waste moving out, calm scientific style.",
    motionNotes:
      "Begin with cloudy-to-clear water, then match that movement to cellular exchange through a membrane.",
    soundTone:
      "Soft underwater texture with light kinetic clicks for molecule movement.",
    captionRule:
      "Keep analogy labels simple: cells are the fish, water is the environment, clean the tank.",
    guardrailOverlay:
      "The fish tank is an analogy, not proof of detox or disease treatment.",
  },
  {
    moduleTitle: "Electrical vs. Chemical Water",
    runtime: "6:00",
    aspect: "Master in 16:9 with split-screen safe zones",
    visualMotifs: [
      "additive drops",
      "electrolysis plates",
      "split alkaline and acidic streams",
      "ORP meter behind pH",
    ],
    visualBrief:
      "Split-screen comparison of chemically alkalized and electrolyzed water, mineral drops on one side, platinum-coated titanium electrodes on the other, with the stream separating into alkaline reducing and acidic oxidizing paths.",
    motionNotes:
      "Use the split-screen as the anchor. Let pH fade behind hydrogen, negative ORP, and reducing potential.",
    soundTone:
      "Precise, clean, lightly electrical, with restrained water movement.",
    captionRule:
      "Ask how the water was made. Chemical or electrical? Additives or electrolysis?",
    guardrailOverlay:
      "Claims stay about process and measured water properties, not disease outcomes.",
  },
  {
    moduleTitle: "Hydrogen, ORP, and Cellular Energy",
    runtime: "6:45",
    aspect: "Master in 16:9, produce a 9:16 short cutdown",
    visualMotifs: [
      "hydrogen bubbles",
      "negative ORP meter",
      "electron paths",
      "simple mitochondria",
    ],
    visualBrief:
      "Luminous molecular hydrogen bubbles rising through clear water, negative ORP meter in clean blue interface, electron paths flowing toward a simplified mitochondria, premium science explainer, no disease imagery.",
    motionNotes:
      "Start with hydrogen bubbles, move into ORP/electrons, then simplify ATP with a gentle energy pulse.",
    soundTone:
      "Light airy water tones with a subtle rising energy motif.",
    captionRule:
      "Use 'research interest' whenever PubMed or conditions enter the script.",
    guardrailOverlay:
      "Hydrogen research is research interest, not treatment advice.",
  },
  {
    moduleTitle: "Free Radicals and Electron Donation",
    runtime: "5:45",
    aspect: "Master in 16:9, crop-safe centered electron handoff",
    visualMotifs: [
      "apple browning",
      "metal rusting",
      "electron handoff",
      "negative ORP meter",
    ],
    visualBrief:
      "Clean oxidation explainer showing apple browning and metal rusting, then abstract free radicals seeking electrons, antioxidants donating electrons, negative ORP water as a reducing-potential visual, elegant and non-clinical.",
    motionNotes:
      "Move from everyday oxidation to an electron handoff, then connect gently to ERW without medical imagery.",
    soundTone:
      "Minimal scientific pulse, soft electron chimes, no urgent medical drama.",
    captionRule:
      "Keep captions on the chemistry: oxidation, electrons, antioxidants, negative ORP.",
    guardrailOverlay:
      "Do not claim ERW treats reflux, wounds, infection, ulcers, arteries, or any disease.",
  },
];

export const moduleOnePilotPacket = {
  title: "Module 1 Pilot Packet: The Water-Rich Body",
  runtime: "5:30",
  objective:
    "Turn the first completed script into a real editor-ready video pilot that David can review before producing the full module series.",
  exportSpecs: [
    "Master 16:9 at 1920x1080 for website/library embedding.",
    "Crop-safe 9:16 at 1080x1920 for future Shorts/Reels cutdowns.",
    "Keep all captions inside the centered 80% safe zone.",
    "Use quiet music, water movement, and no fear-based medical imagery.",
  ],
  sprintSteps: [
    "Prepare seven still/storyboard frames from the shot list.",
    "Record or synthesize a calm temporary narration for timing only.",
    "Build a rough 5:30 animatic with captions and guardrail overlays.",
    "Review with David for tone, claim safety, and whether it sounds like him.",
    "Only after approval, replace temp narration with David-approved voice audio.",
  ],
  assetChecklist: [
    "Human silhouette filling with clear water.",
    "Structured/hexagonal water texture loop.",
    "Water-type comparison cards.",
    "Electrolysis chamber and split-stream animation.",
    "Cellular water environment animation.",
    "EWG lookup / Ask DeFazio AI / consultation close cards.",
  ],
  reviewChecklist: [
    "The script says ERW is not a cure.",
    "Anecdotes are not presented as proof.",
    "The first 10 seconds make the two body-water numbers clear on mobile.",
    "Every caption is readable at 390px width.",
    "The close invites questions instead of making a hard product pitch.",
  ],
};

export const moduleOneStoryboardFrames: ProductionStoryboardFrame[] = [
  {
    number: 1,
    time: "00:00-00:35",
    label: "Cold open",
    variant: "silhouette",
    visual:
      "Human silhouette fills with luminous water while subtle structured-water geometry appears behind it.",
    motion:
      "Start almost still, then let water rise slowly as the body-water distinction appears.",
    caption:
      "What if the starting point is the water that makes up most of you?",
    mobileCheck:
      "The silhouette and caption must still read clearly at 390px width.",
    artDirection:
      "Luminous medical-wellness storyboard frame, human silhouette filling with clear structured water, subtle hexagonal molecular pattern, deep blue background, premium scientific editorial style, no disease imagery.",
    assetHref:
      "/production/storyboard/module-01-frame-01-cold-open.svg",
  },
  {
    number: 2,
    time: "00:35-01:20",
    label: "Two body-water numbers",
    variant: "split-body",
    visual:
      "Body graphic compares about 55–60% total body water in adults with about 70–75% water in fat-free mass.",
    motion:
      "The two ranges build one at a time, then the fat-free-mass range becomes the visual anchor.",
    caption: "Adults average about 55–60% total body water; fat-free mass is about 70–75% water.",
    mobileCheck:
      "Numbers should be large enough to read without zooming on a phone.",
    artDirection:
      "Minimal premium body-water infographic with large 55–60% whole-body and 70–75% fat-free-mass labels, luminous water, dark blue scientific wellness design, and mobile-readable typography.",
    assetHref:
      "/production/storyboard/module-01-frame-02-72-percent.svg",
  },
  {
    number: 3,
    time: "01:20-02:10",
    label: "Not all water is equal",
    variant: "comparison",
    visual:
      "Water-type comparison row moves from distilled, RO, filtered, chemically alkaline, generic ionized, and ERW.",
    motion:
      "Let the first five options stay neutral, then give ERW a quiet blue-white pulse without attacking the others.",
    caption: 'The conversation cannot stop at "drink more water."',
    mobileCheck:
      "Use short labels only, with ERW centered inside the 9:16 safe zone.",
    artDirection:
      "Clean water-category storyboard, six glass cards labeled distilled, RO, filtered, chemically alkaline, generic ionized, and ERW, ERW softly highlighted, premium dark blue interface, elegant and non-combative.",
    assetHref:
      "/production/storyboard/module-01-frame-03-water-types.svg",
  },
  {
    number: 4,
    time: "02:10-03:05",
    label: "Introduce ERW",
    variant: "electrolysis",
    visual:
      "Electrolysis chamber shows filtered mineral water crossing plates and splitting into reducing and oxidizing streams.",
    motion:
      "Follow water through the plates, then reveal hydrogen bubbles and a negative ORP cue.",
    caption: "Electrolysis changes measurable properties of the water.",
    mobileCheck:
      "Keep the plate stack and two stream labels in the center 80% crop-safe zone.",
    artDirection:
      "Premium storyboard frame of an electrolysis chamber with filtered mineral water flowing across platinum-coated titanium plates, hydrogen bubbles, alkaline reducing stream, acidic oxidizing stream, negative ORP cue.",
    assetHref:
      "/production/storyboard/module-01-frame-04-electrolysis.svg",
  },
  {
    number: 5,
    time: "03:05-04:05",
    label: "Internal environment",
    variant: "cells",
    visual:
      "Cells float in a clear water environment while oxygen and nutrients move in and CO2 and waste move out.",
    motion:
      "Begin slightly cloudy, then clarify the water around the cells as exchange arrows move calmly.",
    caption: "Water is the medium around every cell.",
    mobileCheck:
      "Do not crowd the arrows; preserve one clear cell as the focal point.",
    artDirection:
      "Clean non-medical cellular water environment, glowing cells suspended in clear water, oxygen and nutrients moving inward, carbon dioxide and waste moving outward, calm luminous blue scientific style.",
    assetHref:
      "/production/storyboard/module-01-frame-05-internal-environment.svg",
  },
  {
    number: 6,
    time: "04:05-04:55",
    label: "Conviction with guardrails",
    variant: "guardrail",
    visual:
      "Soft moving water carries a simple educational-only safety overlay with no scary imagery.",
    motion:
      "Hold the overlay long enough to read, then fade back into water movement.",
    caption: "Educational only. ERW is not a cure and does not replace medical care.",
    mobileCheck:
      "This is the legal clarity moment; never make the caption small.",
    artDirection:
      "Elegant dark blue water motion storyboard with a clear safety overlay, educational only, ERW is not a cure, does not replace medical care, premium typography, calm and trustworthy.",
    assetHref:
      "/production/storyboard/module-01-frame-06-guardrails.svg",
  },
  {
    number: 7,
    time: "04:55-05:30",
    label: "Close",
    variant: "close",
    visual:
      "Three mobile-first cards close the module: check tap water, learn ERW, Ask DeFazio AI or consultation.",
    motion:
      "Cards rise one by one over clear moving water, then hold on the Ask DeFazio AI path.",
    caption: "Start with your water. Then ask better questions.",
    mobileCheck:
      "Each card must be tappable-looking and readable in a vertical crop.",
    artDirection:
      "Premium mobile-first closing storyboard, three clean interface cards over clear water labeled check tap water, learn ERW, Ask DeFazio AI, consultation path, calm scientific wellness design.",
    assetHref:
      "/production/storyboard/module-01-frame-07-close.svg",
  },
];

export const moduleOneAnimaticCues = [
  {
    number: 1,
    start: "00:00",
    end: "00:35",
    durationSeconds: 35,
    label: "Cold open",
    frameHref:
      "/production/storyboard/module-01-frame-01-cold-open.svg",
    caption:
      "What if the starting point is the water that makes up most of you?",
    narrationCue:
      "Open with the two body-water ranges. Let the viewer understand that water is both something consumed and a regulated medium of the body.",
    transition:
      "Slow water rise, then a soft bloom into the body-water percentage graphic.",
    audioCue:
      "Quiet water bed, low pulse enters after the first sentence.",
    reviewGate:
      "The first 10 seconds must make the body-water idea obvious on mobile.",
  },
  {
    number: 2,
    start: "00:35",
    end: "01:20",
    durationSeconds: 45,
    label: "Two body-water numbers",
    frameHref:
      "/production/storyboard/module-01-frame-02-72-percent.svg",
    caption: "Adults average about 55–60% total body water; fat-free mass is about 70–75% water.",
    narrationCue:
      "Use David's framing: if the healthiest and sickest person are both mostly water, then the quality of that water matters.",
    transition:
      "Build 55–60% first, then introduce 70–75% for fat-free mass without feeling flashy.",
    audioCue:
      "Add one soft tonal lift when the fat-free-mass range appears.",
    reviewGate:
      "Both percentage ranges and their labels must be readable in 9:16 crop-safe framing.",
  },
  {
    number: 3,
    start: "01:20",
    end: "02:10",
    durationSeconds: 50,
    label: "Not all water is equal",
    frameHref:
      "/production/storyboard/module-01-frame-03-water-types.svg",
    caption: 'The conversation cannot stop at "drink more water."',
    narrationCue:
      "Move through distilled, reverse osmosis, filtered, chemically alkaline, generic ionized, and ERW without attacking the other categories.",
    transition:
      "Neutral card sweep, then quiet blue-white pulse on ERW.",
    audioCue:
      "Light glass-water ticks for each category, warmer tone on ERW.",
    reviewGate:
      "This scene should sound educational, not salesy or combative.",
  },
  {
    number: 4,
    start: "02:10",
    end: "03:05",
    durationSeconds: 55,
    label: "Introduce ERW",
    frameHref:
      "/production/storyboard/module-01-frame-04-electrolysis.svg",
    caption: "Electrolysis changes measurable properties of the water.",
    narrationCue:
      "Explain that filtered mineral water passes across plates and separates into alkaline reducing and acidic oxidizing streams.",
    transition:
      "Follow water through the plates, then reveal hydrogen bubbles and negative ORP as measured-property cues.",
    audioCue:
      "Subtle electrical shimmer under the water bed.",
    reviewGate:
      "Keep claims about process and water properties, not medical outcomes.",
  },
  {
    number: 5,
    start: "03:05",
    end: "04:05",
    durationSeconds: 60,
    label: "Internal environment",
    frameHref:
      "/production/storyboard/module-01-frame-05-internal-environment.svg",
    caption: "Water is the medium around every cell.",
    narrationCue:
      "Connect water quality to the internal environment around cells, with oxygen and nutrients moving in and CO2 and waste moving out.",
    transition:
      "Slightly cloudy cellular water clarifies as exchange arrows move calmly.",
    audioCue:
      "Soft underwater movement with gentle molecule ticks.",
    reviewGate:
      "Use cell-environment language only; avoid detox or disease promises.",
  },
  {
    number: 6,
    start: "04:05",
    end: "04:55",
    durationSeconds: 50,
    label: "Conviction with guardrails",
    frameHref:
      "/production/storyboard/module-01-frame-06-guardrails.svg",
    caption:
      "Educational only. ERW is not a cure and does not replace medical care.",
    narrationCue:
      "Say the guardrail plainly while keeping conviction: ERW is foundational water-quality education, not a cure claim.",
    transition:
      "Hold the safety overlay long enough to read, then fade back to luminous water.",
    audioCue:
      "Drop the music slightly so the safety line feels clear and trustworthy.",
    reviewGate:
      "The medical/legal line must be full-size and unmissable on mobile.",
  },
  {
    number: 7,
    start: "04:55",
    end: "05:30",
    durationSeconds: 35,
    label: "Close",
    frameHref:
      "/production/storyboard/module-01-frame-07-close.svg",
    caption: "Start with your water. Then ask better questions.",
    narrationCue:
      "Close with practical next steps: check local tap water, learn ERW, ask the AI, or schedule a consultation.",
    transition:
      "Three cards rise one by one, ending with Ask DeFazio AI as the calm action path.",
    audioCue:
      "Resolve the pulse into clear water movement and a gentle final tone.",
    reviewGate:
      "The close should invite questions instead of pushing a hard product pitch.",
  },
];

/**
 * Dr. De Fazio's ERW lecture deck, rendered to images and served from
 * /public/deck. `publicHold: true` keeps a slide out of the public gallery —
 * used for Slide 16, a family testimonial that makes a medical-outcome claim
 * the rest of the site is careful never to make.
 */
export type DeckSlide = {
  number: number;
  src: string;
  title: string;
  caption: string;
  publicHold?: boolean;
};

export const lectureDeck = {
  title: "Electrolyzed Reduced Water — A Working Lecture",
  author: "Dr. David De Fazio, MD",
  slides: [
    { number: 1, src: "/deck/slide-01.jpg", title: "Electrolyzed Reduced Water", caption: "Cells, electrons, and free radicals — a starting point for understanding my water-quality framework." },
    { number: 2, src: "/deck/slide-02.jpg", title: "The doctor of the future", caption: "An Edison line, with my edit: food, fresh air, Electrolyzed Reduced Water, and exercise." },
    { number: 3, src: "/deck/slide-03.jpg", title: "The water-rich body", caption: "Original slide held while its universal 72% claim is replaced with the adult whole-body and fat-free-mass ranges.", publicHold: true },
    { number: 4, src: "/deck/slide-04.jpg", title: "Five jobs. Every second. Every cell.", caption: "Water supports cellular volume, nutrient transport, waste removal, normal energy metabolism, and temperature regulation." },
    { number: 5, src: "/deck/slide-05.jpg", title: "What's actually in your tap", caption: "Chlorine, fluoride, heavy metals, pesticides, pharmaceuticals, microplastics — and how to check yours on EWG." },
    { number: 6, src: "/deck/slide-06.jpg", title: "Your body is a fish tank", caption: "My favorite analogy: your cells are the fish, and the water around them is the environment." },
    { number: 7, src: "/deck/slide-07.jpg", title: "How cells produce ATP", caption: "Glycolysis, Krebs cycle, electron transport — and where free radicals come from." },
    { number: 8, src: "/deck/slide-08.jpg", title: "The dissociation of the water molecule", caption: "Working slide held for refresh. Use the site's reviewed electrolysis explainer for the simplified cathode and anode half-reactions.", publicHold: true },
    { number: 9, src: "/deck/slide-09.jpg", title: "A lightning strike in a box", caption: "This static ionizer slide has been removed in favor of the reviewed, captioned process video.", publicHold: true },
    { number: 10, src: "/deck/slide-10.jpg", title: "Three properties that define ERW", caption: "Working slide held for refresh. Use current model-specific ORP documents and treat clustering language as an educational model.", publicHold: true },
    { number: 11, src: "/deck/slide-11.jpg", title: "ORP: reducing and oxidizing potential", caption: "Working slide held for refresh. Negative ORP describes reducing potential; it is not a claim that free electrons remain as a bottled ingredient.", publicHold: true },
    { number: 12, src: "/deck/slide-12.jpg", title: "The cluster-of-grapes teaching model", caption: "Working slide held for refresh. Cluster-count comparisons need careful sourcing and should remain an analogy, not proof of faster absorption.", publicHold: true },
    { number: 13, src: "/deck/slide-13.jpg", title: "Aquaporins — the cell's hi-speed plumbing", caption: "Peter Agre won the 2003 Nobel Prize for discovering the protein channels that move water through cells." },
    { number: 14, src: "/deck/slide-14.jpg", title: "Electrical vs. chemical antioxidants", caption: "Working slide held for refresh. Use the site's reviewed redox teaching model and keep molecular-hydrogen claims within the cited research.", publicHold: true },
    { number: 15, src: "/deck/slide-15.jpg", title: "Compare the hardware", caption: "Working slide held for refresh. Compare current product documents, plate construction, water outputs, warranty, support, and household fit.", publicHold: true },
    { number: 16, src: "/deck/slide-16.jpg", title: "Personal story held for review", caption: "This veterinary anecdote is not public guidance. Do not use acidic water as a wound-care or veterinary treatment instruction.", publicHold: true },
    { number: 17, src: "/deck/slide-17.jpg", title: "Water quality is foundational", caption: "The careful takeaway: hydration and water quality can be part of a broader wellness conversation." },
    { number: 18, src: "/deck/slide-18.jpg", title: "There is no life without water", caption: "Albert Szent-Györgyi, Nobel Laureate in Medicine, 1937: water is life's matter and matrix." },
    { number: 19, src: "/deck/slide-19.jpg", title: "Every claim, sourced", caption: "The reference slide — Ohsawa (Nature Medicine, 2007), Shirahata (1997), Agre's Nobel lecture, and more." },
  ] as DeckSlide[],
};

/**
 * Curated, reference-grounded overview of Tyler LeBaron and the Molecular
 * Hydrogen Institute. Kept deliberately careful:
 * molecular hydrogen is framed as an active research area, not a treatment.
 */
export const selectiveAntioxidant = {
  kicker: "From David's notes · Molecular Hydrogen",
  title: "The “selective antioxidant” idea",
  intro:
    "One concept David keeps returning to is that molecular hydrogen (H₂) may not behave like an ordinary antioxidant. Rather than mopping up every reactive molecule, the research interest is whether it preferentially interacts with the most damaging oxidants while leaving useful redox signaling intact. This is the educational framing associated with Tyler LeBaron and the Molecular Hydrogen Institute.",
  points: [
    {
      label: "Not all oxidants are bad",
      body: "Reactive molecules like nitric oxide and hydrogen peroxide play real roles in mitochondrial signaling, exercise adaptation, and immune function. Suppressing all of them is not obviously good.",
    },
    {
      label: "Targeted, not broad",
      body: "The proposed mechanism is direct scavenging of the most destructive radicals (like the hydroxyl radical) plus support of the body's own antioxidant pathways (Nrf2) — redox balance, not blanket suppression.",
    },
    {
      label: "Hydrogen, not alkalinity",
      body: "A recurring theme: blood pH is tightly regulated and is not meaningfully changed by drinking alkaline water. Where benefits show up in studies, they track with dissolved molecular hydrogen more than with pH itself.",
    },
    {
      label: "Still an open question",
      body: "Many studies are encouraging, but the quality of evidence varies and mechanistic questions remain. This is presented as an active area of research — not a cure, and not medical advice.",
    },
  ],
};

export const suggestedQuestions = [
  "What makes ERW different from regular alkaline water?",
  "Why does Dr. De Fazio say the water should be charged and alive?",
  "Explain ORP like I am new to this.",
  "What is the fish-tank analogy?",
  "Why does David care so much about Dr. Donaldson's videos?",
  "Compare the official Enagic machine options.",
  "What K8 payment options are currently published?",
  "How does the Enagic independent distributor model work?",
];
