/**
 * Centralized bibliography. Each citation gets a stable numeric id so the
 * superscripts on the page stay consistent with the /references page order.
 *
 * Sources reflect material the doctor explicitly endorses (PubMed for molecular
 * hydrogen and ERW, Dr. Peggy Parker's book on oxidation, Environmental Working
 * Group for tap water, Dr. Hiromi Shinya, doctorsonkangen.com — used here with
 * permission from the cited doctor).
 */
export type Citation = {
  id: number;
  topic: string;
  authors?: string;
  title: string;
  source: string;
  url?: string;
  /** Quick callout the doctor uses when referencing this source */
  doctorNote?: string;
};

export const CITATIONS: Citation[] = [
  // ---- Molecular Hydrogen & ERW ----
  {
    id: 1,
    topic: "Molecular Hydrogen",
    authors: "Ohsawa I, Ishikawa M, Takahashi K, et al.",
    title:
      "Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals",
    source: "Nature Medicine. 2007;13(6):688–694.",
    url: "https://pubmed.ncbi.nlm.nih.gov/17486089/",
    doctorNote:
      "The seminal molecular-hydrogen paper. H₂ selectively neutralizes hydroxyl radicals — the most damaging free radical — without disrupting beneficial ROS signaling.",
  },
  {
    id: 2,
    topic: "Molecular Hydrogen",
    authors: "Shirahata S, Kabayama S, Nakano M, et al.",
    title:
      "Electrolyzed–reduced water scavenges active oxygen species and protects DNA from oxidative damage",
    source:
      "Biochemical and Biophysical Research Communications. 1997;234(1):269–274.",
    url: "https://pubmed.ncbi.nlm.nih.gov/9169001/",
    doctorNote:
      "Original lab work showing ERW directly scavenges reactive oxygen species in cell culture.",
  },
  {
    id: 3,
    topic: "Molecular Hydrogen",
    title:
      "Effectiveness of hydrogen-rich water on antioxidant status of subjects with potential metabolic syndrome — an open label pilot study",
    source: "Journal of Clinical Biochemistry and Nutrition. 2010;46(2):140–149.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2831093/",
    doctorNote:
      "8-week consumption of hydrogen-rich water produced a 39% increase in SOD (superoxide dismutase) and 43% decrease in urinary TBARS — markers of oxidative damage.",
  },
  {
    id: 4,
    topic: "Molecular Hydrogen",
    authors: "Ichihara M, Sobue S, Ito M, et al.",
    title:
      "Beneficial biological effects and the underlying mechanisms of molecular hydrogen — comprehensive review",
    source: "Medical Gas Research. 2015;5:12.",
    url: "https://pubmed.ncbi.nlm.nih.gov/26483953/",
    doctorNote:
      "Review tracking the >1,500 PubMed articles on molecular hydrogen across 170+ disease models.",
  },

  // ---- Cluster size / hydration ----
  {
    id: 5,
    topic: "Water Structure",
    title:
      "Effect of ions on the structure of water — University of Ljubljana, Slovenia",
    source: "Faculty of Chemistry and Chemical Technology, University of Ljubljana.",
    url: "https://pubmed.ncbi.nlm.nih.gov/12371874/",
    doctorNote:
      "Lab work documenting how ionization restructures water clusters — the basis for the 'cluster of grapes' analogy.",
  },

  // ---- Aquaporins ----
  {
    id: 6,
    topic: "Aquaporins",
    authors: "Agre P.",
    title:
      "Aquaporin water channels (Nobel Lecture)",
    source: "Angewandte Chemie Int. Ed. 2004;43(33):4278–4290.",
    url: "https://pubmed.ncbi.nlm.nih.gov/15368374/",
    doctorNote:
      "Peter Agre's Nobel work establishing aquaporins — the membrane channels that allow water to cross cell membranes orders of magnitude faster than passive diffusion.",
  },

  // ---- Anti-microbial / digestive ----
  {
    id: 7,
    topic: "Digestive & Microflora",
    authors: "Vorobjeva NV.",
    title:
      "Selective stimulation of the growth of anaerobic microflora in the human intestinal tract by electrolyzed reducing water",
    source: "Medical Hypotheses. 2005;64(3):543–546.",
    url: "https://pubmed.ncbi.nlm.nih.gov/15617863/",
    doctorNote:
      "Lomonosov Moscow State University — ERW selectively supports beneficial gut flora.",
  },
  {
    id: 8,
    topic: "Cell Biology",
    title:
      "Electrolyzed reduced water induces mitochondrial damage and apoptosis in HL-60 leukemia cells",
    source:
      "Cytotechnology / J Cellular Biochemistry. 2009.",
    url: "https://pubmed.ncbi.nlm.nih.gov/19202298/",
    doctorNote:
      "Differential effect of ERW on cancerous vs. healthy cell lines.",
  },
  {
    id: 9,
    topic: "Animal Studies",
    title:
      "Electrolyzed hydrogen-saturated water improves oxidative stress markers in feeding tests",
    source: "Biochemical & Biophysical Research / rat model studies.",
    url: "https://pubmed.ncbi.nlm.nih.gov/16244454/",
  },

  // ---- Strong Acidic / sanitization (Enagic's secondary outputs) ----
  {
    id: 10,
    topic: "Strong Acidic Water",
    title:
      "Efficacy of electrolyzed oxidizing water for sanitizing tableware versus chemical sanitizers",
    source: "Department of Food Science and Technology, Ohio State University.",
    url: "https://pubmed.ncbi.nlm.nih.gov/19610348/",
  },
  {
    id: 11,
    topic: "Strong Acidic Water",
    authors: "Sakashita M, Iwasawa A, Nakamura Y.",
    title:
      "Antimicrobial effects and efficacy on habitually hand-washing of strong acidic electrolyzed water",
    source: "Showa University Fujigaoka Hospital, Department of Nursing.",
    url: "https://pubmed.ncbi.nlm.nih.gov/12073573/",
  },
  {
    id: 12,
    topic: "Strong Acidic Water",
    authors: "Pangloli P, Hung YC, Beuchat LR, et al.",
    title:
      "Reduction of Escherichia coli O157:H7 on produce by electrolyzed water",
    source: "University of Georgia, Department of Food Science and Technology.",
    url: "https://pubmed.ncbi.nlm.nih.gov/19777886/",
  },

  // ---- Strong Kangen Water (pesticide cleaning) ----
  {
    id: 13,
    topic: "Strong Kangen Water",
    authors: "Hao J, Liu H, Chen T, et al.",
    title:
      "Effectiveness of electrolyzed water on pesticide residue reduction — acephate, omethoate, DDVP",
    source: "Food Chemistry.",
    url: "https://pubmed.ncbi.nlm.nih.gov/22420563/",
    doctorNote:
      "Strong Kangen Water at pH 11.5 measurably reduces organophosphate pesticide residues on produce.",
  },

  // ---- Books & frameworks the doctor explicitly endorses ----
  {
    id: 14,
    topic: "Book",
    authors: "Parker P, ND.",
    title:
      "If Bodies Heal Themselves, Why Am I Still Sick? The Simple Truth about Oxidation",
    source: "Healing Quest Press.",
    doctorNote:
      "My recommended primer. I think it does a good job of explaining antioxidants and ionized water.",
  },
  {
    id: 15,
    topic: "Book",
    authors: "Shinya H, MD.",
    title: "The Enzyme Factor",
    source: "Council Oak Books, 2007.",
    doctorNote:
      "Cited by Dr. Shinya in the context of obesity management and digestive enzyme activity with Kangen water.",
  },

  // ---- Tap water / regulatory ----
  {
    id: 16,
    topic: "Tap Water",
    title:
      "Environmental Working Group — Tap Water Database",
    source: "EWG.org — federally regulated and unregulated contaminants by ZIP code.",
    url: "https://www.ewg.org/tapwater/",
    doctorNote:
      "This is the website I used to check my municipal water.",
  },

  // ---- Quotes the doctor uses ----
  {
    id: 17,
    topic: "Historical",
    authors: "Edison T.",
    title:
      "'The doctor of the future will give no medicine, but will instruct his patient in the care of the human frame, in diet, and the cause and prevention of disease.'",
    source: "Attributed quote.",
  },
  {
    id: 18,
    topic: "Historical",
    authors: "Szent-Györgyi A.",
    title:
      "'Water is life's matter and matrix, mother and medium. There is no life without water.'",
    source: "Nobel Laureate in Medicine, 1937.",
  },
  // ---- Reference site (used with permission) ----
  {
    id: 20,
    topic: "Allied Materials",
    title: "Doctors on Kangen — research & studies index",
    source: "doctorsonkangen.com (referenced with permission)",
    url: "https://www.doctorsonkangen.com/studies",
    doctorNote:
      "Curated by allied physicians. Used here with permission to cross-reference primary literature.",
  },
  // ---- Official Enagic product and business materials ----
  {
    id: 21,
    topic: "Official Enagic",
    title: "LeveLuk K8 product specifications",
    source: "Enagic USA official product page.",
    url: "https://www.enagic.com/en_US/products/leveluk-k8",
    doctorNote:
      "The current Enagic USA product page lists the K8 negative ORP specification as -722 mV. My correction is that the K8 belongs near the -800 mV end of the conversation, not at -400 mV.",
  },
  {
    id: 22,
    topic: "Official Enagic",
    title: "Kangen 8 Enagic Payment System chart",
    source: "Enagic USA. Updated Jan. 22, 2026.",
    url: "https://www.enagic.com/pdf/us/enagic-payment-kangen8.pdf?v=66967500f31f8",
    doctorNote:
      "Current K8 example: full payment or 3, 6, 10, 12, 20, and 24 monthly payments. Confirm final terms through official Enagic channels.",
  },
  {
    id: 23,
    topic: "Official Enagic",
    title: "Why Become an Enagic Independent Distributor",
    source: "Enagic USA official business opportunity page.",
    url: "https://www.enagic.com/en_US/business-opportunity",
    doctorNote:
      "Official framing: independent distributors earn commissions from product sales, not recruitment.",
  },
  {
    id: 24,
    topic: "Official Enagic",
    title: "Enagic USA Earnings Disclosure Statement",
    source: "Enagic USA. Updated May 19, 2025.",
    url: "https://www.enagic.com/en_US/distributors-earnings-disclosure-statement",
    doctorNote:
      "Review the official disclosure before evaluating the opportunity. Results vary and there is no income guarantee.",
  },

  // ---- Selective antioxidant / hydrogen-not-alkalinity ----
  {
    id: 25,
    topic: "Molecular Hydrogen",
    authors: "Brecka G, LeBaron TW.",
    title:
      "Hydrogen, not alkalinity: molecular hydrogen as a selective antioxidant (The Ultimate Human podcast)",
    source: "The Ultimate Human, April 2026 episode.",
    url: "https://podcasts.apple.com/us/podcast/the-ultimate-human-with-gary-brecka",
    doctorNote:
      "My core point: blood pH is tightly regulated, so the research question is molecular hydrogen rather than alkalinity alone.",
  },
  {
    id: 26,
    topic: "Search Tools",
    title: "Molecular Hydrogen Institute",
    source: "molecularhydrogeninstitute.org — Tyler LeBaron's research library.",
    url: "https://www.molecularhydrogeninstitute.org/",
    doctorNote:
      "My recommended starting point for the science of molecular hydrogen.",
  },
  {
    id: 27,
    topic: "Search Tools",
    title: "Hydrogen Studies — molecular hydrogen research database",
    source: "hydrogenstudies.com — searchable index of H₂ studies by condition.",
    url: "https://hydrogenstudies.com/",
    doctorNote:
      "Look up your own chronic health challenge and see whether molecular-hydrogen studies exist for it.",
  },
  {
    id: 28,
    topic: "Search Tools",
    title: "PubMed — molecular hydrogen / electrolyzed reduced water",
    source: "U.S. National Library of Medicine.",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=molecular+hydrogen+water",
    doctorNote:
      "Search engine for the primary literature. Over 1,500 H₂ papers across 170+ disease models.",
  },
  {
    id: 29,
    topic: "Search Tools",
    title: "Google Scholar — electrolyzed reduced water",
    source: "scholar.google.com",
    url: "https://scholar.google.com/scholar?q=electrolyzed+reduced+water",
    doctorNote:
      "Broader academic search engine — useful for reviews and citing-article counts.",
  },
  {
    id: 30,
    topic: "Search Tools",
    title: "SlideShare — Electrolyzed Reduced Water decks & PDFs",
    source: "slideshare.net (search: electrolyzed reduced water).",
    url: "https://www.slideshare.net/search?q=electrolyzed+reduced+water",
    doctorNote:
      "I searched ERW here and was impressed by how much information was available.",
  },

  // ---- Athletic performance & recovery ----
  {
    id: 31,
    topic: "Athletic Performance",
    title: "Why athletes drink hydrogen-rich water — performance & recovery",
    source: "waterwellnessadvocate.com (educational overview + linked studies).",
    url: "https://www.waterwellnessadvocate.com/kangen-water/why-athletes-should-drink-hydrogen-rich-water",
    doctorNote:
      "Hydrogen-rich water is studied in relation to exercise-response and recovery markers. Reported athlete use is context, not clinical proof.",
  },
  {
    id: 32,
    topic: "Athletic Performance",
    authors: "Aoki K, Nakao A, Adachi T, et al.",
    title:
      "Pilot study: effects of hydrogen-rich water on muscle fatigue caused by acute exercise in elite athletes",
    source: "Medical Gas Research. 2012;2:12.",
    url: "https://pubmed.ncbi.nlm.nih.gov/22520831/",
    doctorNote:
      "Peer-reviewed trial in elite athletes: hydrogen-rich water blunted the rise in blood lactate and the drop in peak torque after intense exercise.",
  },

  // ---- Bioelectricity / "the body is electrical" ----
  {
    id: 33,
    topic: "Bioelectricity",
    authors: "Tennant JL, MD.",
    title: "Healing Is Voltage: The Handbook",
    source: "3rd edition, 2013.",
    doctorNote:
      "I use bioelectricity as an educational framing, not as a treatment claim.",
  },
  {
    id: 34,
    topic: "Bioelectricity",
    authors: "Zhang Z, et al.",
    title:
      "Personal microenvironment management by smart textiles with negative oxygen ions releasing and radiative cooling performance",
    source: "ACS Nano. 2023;17(9).",
    url: "https://pubs.acs.org/doi/10.1021/acsnano.3c00820",
    doctorNote:
      "Peer-reviewed work on negative oxygen ions — the science behind why moving water (waterfalls, showers) negatively charges the surrounding air.",
  },

  // ---- Allied / doctor-curated ----
  {
    id: 35,
    topic: "Allied Materials",
    title: "Doctors on Kangen — anti-aging observational write-up",
    source: "doctorsonkangen.com (referenced with permission).",
    url: "https://www.doctorsonkangen.com/2021/08/23/how-to-look-10-years-younger-in-2-days/",
    doctorNote:
      "Dr. Pinky's site. Presented as an educational anecdote, not a clinical proof.",
  },
  {
    id: 36,
    topic: "Allied Materials",
    title:
      "Alkaline (chemically induced) vs. alkalyzed (electrically induced) water — explainer",
    source: "YouTube educational video I selected for this guide.",
    url: "https://youtu.be/GRCeLKuH6AE",
    doctorNote:
      "The distinction I make: electrically ionized water is not the same as bottled water made alkaline with additives.",
  },
  {
    id: 37,
    topic: "Official Enagic",
    title: "Anespa DX Mineral Ion Water Spa",
    source: "Enagic USA official product page.",
    url: "https://www.enagic.com/en_US/products/anespadx-mineral-ion-water-spa",
    doctorNote:
      "Enagic positions the Anespa DX as the bath-and-shower complement to its kitchen drinking-water machines. The official page describes a cartridge system for reducing chlorine and other substances in tap water and adding minerals.",
  },
  {
    id: 38,
    topic: "Historical",
    authors: "Koppenol WH, Bounds PL, Dang CV.",
    title: "Otto Warburg's contributions to current concepts of cancer metabolism",
    source: "Nature Reviews Cancer. 2011;11:325-337.",
    url: "https://www.nature.com/articles/nrc3038",
    doctorNote:
      "Warburg's work remains important historical context for cancer metabolism. He received the 1931 Nobel Prize for his discovery of the nature and mode of action of the respiratory enzyme, not for proving that alkaline water treats cancer.",
  },
  {
    id: 39,
    topic: "Athlete Claims",
    title: "Enagic USA post showing Kangen Water at the Brewers Celebrity Golf Outing",
    source: "Enagic USA official Facebook account. Public social-media record; not a clinical source or endorsement contract.",
    url: "https://www.facebook.com/EnagicUSA/videos/enagic-branded-carafes-filled-with-kangen-water-and-two-k8s-are-located-at-brewe/954190949189927/",
    doctorNote: "The post names Tiger Woods, Magic Johnson, and LeBron James among public figures reported to use Kangen Water. Enagic separately states that celebrities do not have endorsement contracts with the company.",
  },
  {
    id: 40,
    topic: "Tap Water",
    title: "National Primary Drinking Water Regulations",
    source: "U.S. Environmental Protection Agency.",
    url: "https://www.epa.gov/ground-water-and-drinking-water/national-primary-drinking-water-regulations",
    doctorNote: "EPA source and health-context table for lead, disinfectants and disinfection byproducts, fluoride, atrazine, glyphosate, arsenic, and waterborne microorganisms.",
  },
  {
    id: 41,
    topic: "Tap Water",
    title: "Consumer tool for filters certified to reduce lead in drinking water",
    source: "U.S. Environmental Protection Agency. June 2024.",
    url: "https://www.epa.gov/water-research/consumer-tool-identifying-point-use-and-pitcher-filters-certified-reduce-lead",
  },
  {
    id: 42,
    topic: "Tap Water",
    title: "Identifying drinking-water filters certified to reduce PFAS",
    source: "U.S. Environmental Protection Agency.",
    url: "https://www.epa.gov/water-research/identifying-drinking-water-filters-certified-reduce-pfas",
  },
  {
    id: 43,
    topic: "Tap Water",
    title: "Microplastics in drinking-water",
    source: "World Health Organization. 2019 technical report.",
    url: "https://www.who.int/publications/i/item/9789241516198",
  },
  {
    id: 44,
    topic: "Tap Water",
    title: "Information sheet: Pharmaceuticals in drinking-water",
    source: "World Health Organization. 2013.",
    url: "https://www.who.int/publications/m/item/information-sheet-pharmaceuticals-in-drinking-water",
  },
  {
    id: 45,
    topic: "Tap Water",
    title: "About choosing home water filters",
    source: "U.S. Centers for Disease Control and Prevention. 2024.",
    url: "https://www.cdc.gov/drinking-water/prevention/about-choosing-home-water-filters.html",
    doctorNote: "Choose and maintain a filter based on the specific germs or chemicals confirmed in the source water and the product's certified reduction claims.",
  },
  {
    id: 46,
    topic: "Tap Water",
    title: "Filtering Cryptosporidium from drinking water",
    source: "U.S. Centers for Disease Control and Prevention.",
    url: "https://www.cdc.gov/cryptosporidium/prevention/commercial-settings-boil-water.html",
  },
  {
    id: 47,
    topic: "Hydration Physiology",
    authors: "Jéquier E, Constant F.",
    title: "Water as an essential nutrient: the physiological basis of hydration",
    source: "European Journal of Clinical Nutrition. 2010;64(2):115–123.",
    url: "https://pubmed.ncbi.nlm.nih.gov/19724292/",
    doctorNote:
      "Review of water balance and water's roles as a building material, solvent, reaction medium, nutrient-and-waste carrier, thermoregulator, lubricant, and shock absorber.",
  },
  {
    id: 48,
    topic: "Hydration Physiology",
    authors: "Lorenzo I, Serra-Prat M, Yébenes JC.",
    title: "The Role of Water Homeostasis in Muscle Function and Frailty: A Review",
    source: "Nutrients. 2019;11(8):1857.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6723611/",
    doctorNote:
      "Total body water is approximately 60% of body weight in adult men and 55% in adult women, while lean or fat-free mass is approximately 70–75% water. The values vary with age, sex, body composition, and health.",
  },
  {
    id: 49,
    topic: "Oxidative Stress",
    authors: "Sies H, Jones DP.",
    title: "Reactive oxygen species (ROS) as pleiotropic physiological signalling agents",
    source: "Nature Reviews Molecular Cell Biology. 2020;21(7):363–383.",
    url: "https://pubmed.ncbi.nlm.nih.gov/32231263/",
    doctorNote:
      "ROS have normal roles in signaling and adaptation at physiological levels; elevated formation can produce molecular damage. The review distinguishes oxidative eustress from oxidative distress.",
  },
  {
    id: 50,
    topic: "Historical",
    authors: "Warburg O.",
    title: "The Metabolism of Carcinoma Cells",
    source: "The Journal of Cancer Research. 1925;9(1):148–163.",
    url: "https://aacrjournals.org/jcancerres/article/9/1/148/450038/The-Metabolism-of-Carcinoma-Cells1",
    doctorNote:
      "Warburg's original metabolic question helped establish cancer metabolism as a field. Modern cancer biology is broader than Warburg's early hypothesis, and this history does not support alkaline-water treatment claims.",
  },
  {
    id: 51,
    topic: "Mitochondrial Biology",
    authors: "Duchen MR.",
    title: "Mitochondria and calcium: from cell signalling to cell death",
    source: "The Journal of Physiology. 2000;529(Pt 1):57–68.",
    url: "https://pubmed.ncbi.nlm.nih.gov/11080251/",
    doctorNote: "Review of mitochondrial calcium handling, energy metabolism, reactive oxygen species, and cell-death signaling.",
  },
  {
    id: 52,
    topic: "Mitochondrial Biology",
    authors: "Brand MD.",
    title: "Mitochondrial generation of superoxide and hydrogen peroxide as the source of mitochondrial redox signaling",
    source: "Free Radical Biology and Medicine. 2016;100:14–31.",
    url: "https://pubmed.ncbi.nlm.nih.gov/27085844/",
    doctorNote: "Reviews mitochondrial ROS generation at multiple respiratory and substrate-oxidation sites and its roles in signaling and pathology.",
  },
  {
    id: 53,
    topic: "Cellular Respiration",
    authors: "Mergenthaler P, Lindauer U, Dienel GA, Meisel A.",
    title: "Sugar for the brain: the role of glucose in physiological and pathological brain function",
    source: "Trends in Neurosciences. 2013;36(10):587–597.",
    url: "https://pubmed.ncbi.nlm.nih.gov/23968694/",
    doctorNote: "Reviews glycolysis and mitochondrial glucose oxidation, including the approximate modern accounting of 2 ATP from glycolysis plus about 30 ATP from mitochondrial metabolism.",
  },
  {
    id: 54,
    topic: "Electromagnetic Fields",
    authors: "Pall ML.",
    title: "Electromagnetic fields act via activation of voltage-gated calcium channels to produce beneficial or adverse effects",
    source: "Journal of Cellular and Molecular Medicine. 2013;17(8):958–965.",
    url: "https://pubmed.ncbi.nlm.nih.gov/23802593/",
    doctorNote: "A proposed VGCC mechanism based on a review of experimental literature; it should be presented as a hypothesis rather than settled causal proof for ordinary consumer exposures.",
  },
  {
    id: 55,
    topic: "Electromagnetic Fields",
    authors: "International Commission on Non-Ionizing Radiation Protection.",
    title: "Guidelines for limiting exposure to electromagnetic fields (100 kHz to 300 GHz)",
    source: "Health Physics. 2020;118(5):483–524.",
    url: "https://www.icnirp.org/en/publications/article/rf-guidelines-2020.html",
    doctorNote: "Current international radiofrequency exposure limits and review of established biological and health effects.",
  },
  {
    id: 56,
    topic: "Electromagnetic Fields",
    title: "Radiation: Electromagnetic fields — questions and answers",
    source: "World Health Organization.",
    url: "https://www.who.int/news-room/questions-and-answers/item/radiation-electromagnetic-fields",
    doctorNote: "WHO overview: biological effects are not automatically health hazards, and low-level long-term exposure has not been confirmed to cause adverse health effects.",
  },
  {
    id: 57,
    topic: "Bioelectricity",
    authors: "Catterall WA, Wisedchaisri G, Zheng N.",
    title: "The chemical basis for electrical signaling",
    source: "Nature Chemical Biology. 2017;13(5):455–463.",
    url: "https://pubmed.ncbi.nlm.nih.gov/28406893/",
    doctorNote: "Review of how ion currents through voltage-gated sodium, calcium, and potassium channels generate and terminate rapid electrical signals.",
  },
  {
    id: 58,
    topic: "Nutrition",
    authors: "Coe S, Spiro A.",
    title: "Cooking at home to retain nutritional quality and minimise nutrient losses: A focus on vegetables, potatoes and pulses",
    source: "Nutrition Bulletin. 2022;47(4):538–562.",
    url: "https://pubmed.ncbi.nlm.nih.gov/36299246/",
    doctorNote: "Cooking can have desirable or undesirable effects on nutrient content depending on the food, method, temperature, time, and nutrient being considered.",
  },
  {
    id: 59,
    topic: "Athletic Performance",
    authors: "Zhou C, Shang Z, Yuan Y, et al.",
    title: "Can molecular hydrogen supplementation enhance physical performance in healthy adults? A systematic review and meta-analysis",
    source: "Frontiers in Nutrition. 2024;11:1387657.",
    url: "https://pubmed.ncbi.nlm.nih.gov/38903627/",
    doctorNote: "Across 27 publications and 597 participants, pooled results were mixed: no significant improvement in aerobic endurance, 30-second anaerobic endurance, or strength; small or modest signals appeared for lower-limb explosive power, perceived exertion, and blood lactate. The authors call for more rigorous trials.",
  },
  {
    id: 60,
    topic: "Athletic Performance",
    authors: "Li Y, Bing R, Liu M, et al.",
    title: "Can molecular hydrogen supplementation reduce exercise-induced oxidative stress in healthy adults? A systematic review and meta-analysis",
    source: "Frontiers in Nutrition. 2024;11:1328705.",
    url: "https://pubmed.ncbi.nlm.nih.gov/38590828/",
    doctorNote: "Six studies with 76 participants found no significant reduction in the measured oxidative-stress marker d-ROMs, while a small pooled improvement appeared in biological antioxidant potential. The evidence remains limited and heterogeneous.",
  },
];

export function citationById(id: number): Citation | undefined {
  return CITATIONS.find((c) => c.id === id);
}

export function citationsByTopic(): Record<string, Citation[]> {
  return CITATIONS.reduce<Record<string, Citation[]>>((acc, c) => {
    (acc[c.topic] ??= []).push(c);
    return acc;
  }, {});
}
