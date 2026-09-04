import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Cite } from "@/components/Cite";
import { Reveal } from "@/components/Reveal";

type WaterReport = {
  zip: string;
  city: string;
  state: string;
  stateName: string;
  county: string;
  epa: {
    systems: number;
    violations3yr: number;
    seriousViolators: number;
    enforcement: number;
  } | null;
  links: { ewg: string; waterway: string; ccr: string };
};

/**
 * Tap-water contamination — Dr. De Fazio's "what is actually flowing in your
 * pipe" lesson, rebuilt as an animated SVG infographic (replaces the older
 * archival photo). Pairs with the EWG.org/tapwater ZIP-code lookup he
 * explicitly endorses.
 */

type Contaminant = {
  name: string;
  detail: string;
  longDetail: string;
  filtration: string;
  color: string;
  /** vertical position % inside the pipe lumen */
  y: number;
  /** start position % along the pipe */
  x: number;
  /** size in svg units */
  r: number;
  citeIds: number[];
};

const CONTAMINANTS: Contaminant[] = [
  {
    name: "Lead",
    detail: "Neurotoxic — developmental harm",
    longDetail: "Lead is a toxic heavy metal that enters municipal water primarily through the corrosion of aging service lines and household plumbing. There is no safe level of lead exposure for children; it is linked to cognitive delays and behavioral issues.",
    filtration: "EPA recommends filters independently certified for lead reduction. Check the named lead claim and performance sheet, and replace cartridges as directed.",
    color: "#F4A05A",
    y: 38,
    x: 6,
    r: 10,
    citeIds: [40, 41],
  },
  {
    name: "Chlorine",
    detail: "Disinfectant with regulated limits",
    longDetail: "Utilities use chlorine to control microbes. Chlorine is regulated, and its reactions with organic matter can form separately regulated disinfection byproducts such as trihalomethanes and haloacetic acids.",
    filtration: "Check the product performance data for a certified chlorine or disinfection-byproduct reduction claim. No filter removes every contaminant.",
    color: "#A4E7F0",
    y: 64,
    x: 14,
    r: 8,
    citeIds: [40, 45],
  },
  {
    name: "Fluoride",
    detail: "Regulated mineral and water additive",
    longDetail: "Fluoride may occur naturally or be added for dental-health purposes. EPA sets a primary maximum contaminant level and a lower secondary standard addressing dental fluorosis.",
    filtration: "If fluoride reduction is your goal, select a system whose independent certification and performance sheet specifically name fluoride.",
    color: "#CFF3F7",
    y: 30,
    x: 22,
    r: 8,
    citeIds: [40, 45],
  },
  {
    name: "Glyphosate",
    detail: "Regulated herbicide runoff concern",
    longDetail: "Glyphosate is a widely used herbicide that can reach source water through runoff. EPA regulates glyphosate in public drinking water and lists kidney and reproductive effects above its maximum contaminant level.",
    filtration: "Use test results and a product performance sheet to confirm an independently certified glyphosate-reduction claim.",
    color: "#FFD27A",
    y: 70,
    x: 32,
    r: 10,
    citeIds: [40, 45],
  },
  {
    name: "Atrazine",
    detail: "Regulated crop-herbicide runoff",
    longDetail: "Atrazine is a crop herbicide that can reach drinking water through runoff. EPA regulates it and lists cardiovascular or reproductive problems as potential effects of long-term exposure above the federal limit.",
    filtration: "Choose a system whose certification and performance sheet explicitly include atrazine reduction, then replace it on schedule.",
    color: "#FFD27A",
    y: 48,
    x: 38,
    r: 8,
    citeIds: [40, 45],
  },
  {
    name: "Pharma residue",
    detail: "Hormones, antibiotics in supply",
    longDetail: "Trace pharmaceuticals can enter water sources through sewage, uncontrolled disposal, and agricultural runoff. WHO describes them as emerging contaminants and recommends risk-based monitoring.",
    filtration: "Treatment depends on the individual compound. Verify a device’s named reduction claims instead of assuming that a general carbon filter addresses every pharmaceutical.",
    color: "#E8B5F5",
    y: 36,
    x: 46,
    r: 8,
    citeIds: [44, 45],
  },
  {
    name: "Microplastics",
    detail: "Particles reported in tap and bottled water",
    longDetail: "Studies have reported microplastics in treated tap and bottled water. WHO identifies major evidence gaps about occurrence, exposure, and human-health risk rather than treating every reported particle as proof of harm.",
    filtration: "Particle capture varies with particle size, pore size, and treatment design. Confirm tested performance for the device you are considering.",
    color: "#FFFFFF",
    y: 60,
    x: 56,
    r: 7,
    citeIds: [43, 45],
  },
  {
    name: "PFAS",
    detail: "Forever chemicals — cancer, thyroid",
    longDetail: "PFAS are persistent 'forever chemicals' used in non-stick cookware and stain-resistant coatings. They accumulate in body tissue and are linked to thyroid damage, liver disease, and cancers.",
    filtration: "EPA identifies certified granular activated carbon, ion exchange, and reverse-osmosis options. Certification does not guarantee reduction below every current EPA limit; maintenance matters.",
    color: "#FF8E8E",
    y: 28,
    x: 66,
    r: 9,
    citeIds: [42, 45],
  },
  {
    name: "Arsenic",
    detail: "Carcinogen in US groundwater",
    longDetail: "Arsenic is a naturally occurring toxic metalloid that enters groundwater through mineral deposits or industrial operations. Long-term exposure is linked to skin, bladder, and lung cancers.",
    filtration: "Treatment is source- and chemistry-specific. Select a system with a certified arsenic-reduction claim based on a validated water test.",
    color: "#F4A05A",
    y: 70,
    x: 78,
    r: 7,
    citeIds: [40, 45],
  },
  {
    name: "Parasites",
    detail: "Screening concern — immuno risk",
    longDetail: "Waterborne parasites such as Cryptosporidium and Giardia can cause gastrointestinal illness. Cryptosporidium is especially resistant to chlorine, so effective treatment requires appropriate removal or inactivation.",
    filtration: "CDC points to reverse osmosis, an absolute one-micron filter, or NSF 53/58 cyst-reduction certification for Cryptosporidium. This does not guarantee removal of bacteria or viruses.",
    color: "#BFE6A8",
    y: 42,
    x: 88,
    r: 7,
    citeIds: [40, 46],
  },
];

export function TapWaterPipe() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
  });
  const flowProgress = useTransform(smooth, [0, 1], [0, 1]);
  const [zip, setZip] = useState("");
  const [activeContaminant, setActiveContaminant] = useState<Contaminant | null>(CONTAMINANTS[0]);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<WaterReport | null>(null);
  const [reportErr, setReportErr] = useState<string | null>(null);

  const runReport = async (e: FormEvent) => {
    e.preventDefault();
    const z = zip.trim();
    if (z.length !== 5) {
      setReportErr("Enter a 5-digit ZIP code.");
      return;
    }
    setLoading(true);
    setReportErr(null);
    setReport(null);
    try {
      const r = await fetch(`/api/water-report?zip=${z}`);
      const data = await r.json();
      if (!r.ok) setReportErr(data?.error || "Couldn't generate a report.");
      else setReport(data as WaterReport);
    } catch {
      setReportErr("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      id="tap-water"
      data-section="tap-water"
      data-section-label="Tap Water Reality"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_30%,rgba(244,160,90,0.06),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          kicker="What's actually in your tap"
          title={
            <>
              The pipe bringing water to your house —{" "}
              <em className="not-italic text-yellow-300/90">
                doesn't look the way you think.
              </em>
            </>
          }
          subtitle={
            <>
              Heavy metals, pesticides, fluoride, chlorine, pharmaceutical
              residues. Even a passing municipal report cannot answer every household
              question. I recommend pulling your ZIP code through EWG's Tap
              Water Database before deciding what treatment, if any, fits your
              source water <Cite ids={[16, 40]} />.
            </>
          }
        />

        <div className="mt-12 sm:mt-16 grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
          {/* Real footage of unfiltered water + floating contaminant legend */}
          <div>
            <PipeVideo
              activeContaminant={activeContaminant}
              setActiveContaminant={setActiveContaminant}
            />
            <p className="mt-4 rounded-2xl border border-aqua-300/20 bg-aqua-300/[0.05] px-4 py-3 text-center text-xs leading-relaxed text-aqua-100/85">
              <strong className="font-semibold text-aqua-100">Click or tap each contaminant.</strong>{" "}
              Its panel opens below with a sourced health-hazard explanation,
              regulatory context, and filtration notes.
            </p>
          </div>

          {/* EWG lookup callout */}
          <div className="space-y-6">
            <div>
              <div className="kicker">Step 1 · Verify before you trust</div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl text-silver-100 leading-tight">
                Look up your tap water by ZIP code
              </h3>
              <p className="mt-3 text-silver-300/85 leading-relaxed">
                The Environmental Working Group provides a practical starting
                point for looking up municipal-water concerns by ZIP code,
                including regulated <em>and</em> unregulated chemicals{" "}
                <Cite ids={16} />. This is the database I used for my own city.
              </p>
            </div>

            <form onSubmit={runReport} className="glass p-5 sm:p-6">
              <label htmlFor="zip" className="kicker block mb-3">
                Your ZIP code
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="zip"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value.replace(/[^0-9]/g, ""));
                    setReportErr(null);
                  }}
                  placeholder="e.g. 33602"
                  className="flex-1 rounded-full bg-navy-900/60 border border-silver-300/15 px-5 py-3 text-silver-100 placeholder:text-silver-400/40 outline-none focus:border-aqua-400/60 transition"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-300 text-navy-950 font-medium hover:brightness-110 transition whitespace-nowrap disabled:opacity-60"
                >
                  {loading ? "Generating…" : "Generate report"}
                </button>
              </div>
              <p className="mt-3 text-xs text-silver-400/70">
                Builds a live report right here from official EPA records — no
                site to leave, no account. We pull your county's public-water-system
                data and pre-fill the deeper sources (EWG, EPA, your city's report)
                for you.
              </p>
              {reportErr && (
                <p className="mt-3 text-xs text-yellow-300/90">{reportErr}</p>
              )}
            </form>

            {loading && (
              <div className="glass p-6 animate-pulse">
                <div className="h-3 w-40 rounded bg-white/10" />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="h-16 rounded-xl bg-white/[0.06]" />
                  ))}
                </div>
              </div>
            )}

            {report && !loading && <WaterReportCard report={report} />}

            <div className="flex overflow-x-auto gap-2 sm:flex-wrap pb-4 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 sm:mx-0 sm:px-0">
              {[
                "Chlorine",
                "Fluoride",
                "Lead",
                "Glyphosate",
                "Atrazine",
                "Arsenic",
                "Pharmaceuticals",
                "Microplastics",
                "PFAS",
                "Parasites",
              ].map((c) => (
                <span
                  key={c}
                  className="shrink-0 whitespace-nowrap text-[11px] tracking-ultra uppercase px-3 py-1.5 rounded-full bg-yellow-900/20 border border-yellow-700/30 text-yellow-200/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Contaminant Detail Panel */}
        {activeContaminant && (
          <Reveal>
            <div className="mt-8 p-6 rounded-3xl border border-white/[0.08] bg-navy-950/40 backdrop-blur-md grid md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto text-left">
              <div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-full shrink-0 animate-pulse"
                    style={{
                      backgroundColor: activeContaminant.color,
                      boxShadow: `0 0 10px ${activeContaminant.color}`,
                    }}
                  />
                  <h4 className="font-display text-2xl text-silver-100">
                    {activeContaminant.name}
                  </h4>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-silver-300/85 leading-relaxed">
                  {activeContaminant.longDetail} <Cite ids={activeContaminant.citeIds} />
                </p>
              </div>
              <div className="rounded-2xl border border-aqua-400/10 bg-aqua-300/[0.03] p-5 space-y-2 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-ultra text-aqua-300 font-semibold">
                    Filtration standard
                  </div>
                  <p className="text-xs sm:text-sm text-silver-200 mt-2 leading-relaxed">
                    {activeContaminant.filtration}
                  </p>
                </div>
                <div className="text-[10px] text-silver-400/60 leading-normal pt-2 border-t border-white/[0.04] mt-2">
                  Click any contaminant in the list or pipe graphic to open its sourced health context and filtration details.
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-12 sm:mt-16 mx-auto max-w-3xl glass p-6 sm:p-8">
            <div className="kicker">Why this is personal for me</div>
            <p className="mt-3 text-sm leading-relaxed text-silver-300/85">
              During my search for answers around tinnitus and sleep, a
              naturopathic screening flagged atrazine, glyphosate,
              volatile organic compounds, heavy metals, PFAS, BPA, parasites,
              and other concerns. I then looked up my municipal report and
              called my city. My takeaway was practical: inspect the
              available records, ask better questions, and make informed
              household decisions.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-silver-400/70">
              Personal account only. It does not establish a diagnosis, a
              source of exposure, or a medical outcome.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContaminantPipe({
  progress,
}: {
  progress: import("framer-motion").MotionValue<number>;
}) {
  // Pipe lumen runs from x=60 to x=540 (480 wide). Particles drift along it.
  const driftX = useTransform(progress, [0, 1], [0, 40]);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900/80 via-navy-800/60 to-navy-900/80 ring-1 ring-yellow-700/30 p-5 sm:p-7"
    >
      {/* Top badge */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="inline-flex items-center gap-2 text-[10px] tracking-ultra uppercase px-3 py-1.5 rounded-full bg-yellow-900/40 border border-yellow-700/50 text-yellow-100/90 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse" />
          Inside a municipal service line
        </span>
        <span className="text-[10px] tracking-ultra uppercase text-silver-300/60">
          280+ contaminants tracked
        </span>
      </div>

      <svg
        viewBox="0 0 600 300"
        className="w-full h-auto"
        role="img"
        aria-label="Cross-section of a municipal water pipe with labeled contaminants flowing inside"
      >
        <defs>
          <linearGradient id="pipe-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5C6478" />
            <stop offset="50%" stopColor="#383E50" />
            <stop offset="100%" stopColor="#22283A" />
          </linearGradient>
          <linearGradient id="pipe-inner" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3F2A1A" />
            <stop offset="40%" stopColor="#7C4E2C" />
            <stop offset="60%" stopColor="#A2683A" />
            <stop offset="100%" stopColor="#3F2A1A" />
          </linearGradient>
          <linearGradient id="water-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(72,199,220,0.15)" />
            <stop offset="50%" stopColor="rgba(111,215,230,0.45)" />
            <stop offset="100%" stopColor="rgba(72,199,220,0.15)" />
          </linearGradient>
          <radialGradient id="rust" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A2683A" />
            <stop offset="100%" stopColor="rgba(124, 78, 44, 0)" />
          </radialGradient>
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Pipe outer body (top wall) */}
        <rect x="40" y="60" width="520" height="22" fill="url(#pipe-metal)" rx="3" />
        {/* Pipe outer body (bottom wall) */}
        <rect x="40" y="218" width="520" height="22" fill="url(#pipe-metal)" rx="3" />

        {/* Pipe lumen (interior — corroded) */}
        <rect x="40" y="82" width="520" height="136" fill="url(#pipe-inner)" />

        {/* Corrosion pock marks along inner walls */}
        {Array.from({ length: 14 }).map((_, i) => (
          <ellipse
            key={`pock-top-${i}`}
            cx={60 + i * 36}
            cy={88 + (i % 2) * 4}
            rx={8 + (i % 3) * 2}
            ry={3 + (i % 2)}
            fill="url(#rust)"
            opacity={0.55}
          />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <ellipse
            key={`pock-bot-${i}`}
            cx={70 + i * 35}
            cy={210 - (i % 2) * 4}
            rx={9 + (i % 3) * 2}
            ry={3 + (i % 2)}
            fill="url(#rust)"
            opacity={0.55}
          />
        ))}

        {/* Water flow band — animated highlight crossing left→right */}
        <rect x="40" y="125" width="520" height="50" fill="url(#water-flow)" opacity={0.5} />
        <motion.rect
          x="40"
          y="135"
          width="120"
          height="30"
          fill="rgba(167, 230, 240, 0.35)"
          style={{ x: useTransform(progress, [0, 1], [-80, 480]) }}
          filter="url(#soft-glow)"
        />

        {/* Contaminant particles — drift with scroll */}
        {CONTAMINANTS.map((c, i) => {
          const baseX = 60 + (c.x / 100) * 480;
          const yPos = 85 + (c.y / 100) * 130;
          return (
            <motion.g
              key={c.name}
              style={{ x: driftX }}
              transform={`translate(${baseX} ${yPos})`}
            >
              <motion.circle
                cx={0}
                cy={0}
                r={c.r}
                fill={c.color}
                opacity={0.92}
                animate={{
                  cy: [0, -3, 0, 3, 0],
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
              <circle
                cx={0}
                cy={0}
                r={c.r}
                fill="none"
                stroke={c.color}
                strokeOpacity={0.45}
                strokeWidth={1}
                strokeDasharray="2 3"
              />
            </motion.g>
          );
        })}

        {/* End-cap (cross-section ring on the right) */}
        <ellipse cx="560" cy="150" rx="12" ry="80" fill="url(#pipe-metal)" />
        <ellipse cx="560" cy="150" rx="6" ry="68" fill="#22283A" />
      </svg>

      {/* Legend chips */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {CONTAMINANTS.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-2 text-[10px] tracking-ultra uppercase text-silver-200/80"
          >
            <span
              aria-hidden
              className="h-2 w-2 rounded-full shrink-0"
              style={{ backgroundColor: c.color, boxShadow: `0 0 8px ${c.color}80` }}
            />
            <div className="min-w-0">
              <div className="text-silver-100/95 truncate">{c.name}</div>
              <div className="text-silver-300/55 normal-case tracking-normal text-[9px] truncate">
                {c.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      <figcaption className="mt-4 text-[10px] tracking-ultra uppercase text-silver-300/55">
        Schematic · per EWG Tap Water Database categories
      </figcaption>
    </motion.figure>
  );
}

function PipeVideo({
  activeContaminant,
  setActiveContaminant,
}: {
  activeContaminant: Contaminant | null;
  setActiveContaminant: (c: Contaminant) => void;
}) {
  const floats = CONTAMINANTS.slice(0, 6);
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl ring-1 ring-yellow-700/30 bg-navy-950"
    >
      <div className="relative aspect-[4/3] w-full">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/pipe-poster.jpg"
          aria-label="Real footage of unfiltered tap water flowing through a pipe"
        >
          <source media="(max-width: 767px)" src="/pipe-mobile.mp4" type="video/mp4" />
          <source src="/pipe.mp4" type="video/mp4" />
        </video>
        {/* Darkening scrim for legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/40"
        />

        {/* Top badge */}
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-700/50 bg-yellow-900/50 px-3 py-1.5 text-[10px] uppercase tracking-ultra text-yellow-100/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-300" />
            Unfiltered tap water · click labels to investigate
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-ultra text-silver-200/70">
            no filter
          </span>
        </div>

        {/* Floating contaminant labels */}
        {floats.map((c, i) => {
          const isActive = activeContaminant?.name === c.name;
          return (
            <motion.button
              key={c.name}
              type="button"
              onClick={() => setActiveContaminant(c)}
              className={`absolute rounded-full border px-2.5 py-1 text-[10px] tracking-ultra uppercase backdrop-blur-sm transition-all duration-300 z-10 ${
                isActive
                  ? "border-aqua-400 bg-navy-900 text-aqua-200 shadow-[0_0_12px_rgba(164,231,240,0.35)] scale-105 font-bold"
                  : "border-white/15 bg-navy-950/55 text-silver-200 hover:border-white/30 hover:bg-navy-950/70"
              }`}
              style={{
                left: `${10 + (i % 3) * 30}%`,
                top: `${22 + (i % 2) * 34 + (i % 3) * 6}%`,
              }}
              animate={{ x: [0, 14, 0], y: [0, -6, 0] }}
              transition={{
                duration: 6 + (i % 4),
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              {c.name}
            </motion.button>
          );
        })}
      </div>

      {/* Legend strip */}
      <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4 bg-navy-950/30 border-t border-white/[0.04]">
        {CONTAMINANTS.map((c) => {
          const isActive = activeContaminant?.name === c.name;
          return (
            <button
              key={c.name}
              type="button"
              onClick={() => setActiveContaminant(c)}
              className={`flex items-center gap-2 text-[10px] uppercase tracking-ultra text-left p-1.5 rounded-xl transition ${
                isActive
                  ? "bg-white/[0.06] ring-1 ring-white/10"
                  : "hover:bg-white/[0.02]"
              }`}
            >
              <span
                aria-hidden
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: c.color, boxShadow: `0 0 8px ${c.color}80` }}
              />
              <div className="min-w-0">
                <div className="truncate text-silver-100/95 font-semibold">{c.name}</div>
                <div className="truncate text-[9px] normal-case tracking-normal text-silver-300/55">
                  {c.detail}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </motion.figure>
  );
}

/* In-site water report generated from live EPA / Census data. */
function WaterReportCard({ report }: { report: WaterReport }) {
  const e = report.epa;
  const stats = e
    ? [
        { label: "Public water systems", value: e.systems, tone: "neutral" as const },
        { label: "With violations (3 yr)", value: e.violations3yr, tone: e.violations3yr > 0 ? "warn" : "ok" as const },
        { label: "Serious violators", value: e.seriousViolators, tone: e.seriousViolators > 0 ? "warn" : "ok" as const },
        { label: "Enforcement actions", value: e.enforcement, tone: "neutral" as const },
      ]
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass p-6 sm:p-7"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="kicker text-aqua-300/90">Your water report</div>
          <h3 className="mt-1 font-display text-2xl text-silver-100">
            {report.city}, {report.state}
            {report.county ? (
              <span className="text-silver-300/70 text-lg"> · {report.county} County</span>
            ) : null}
          </h3>
        </div>
        <span className="text-[10px] uppercase tracking-ultra text-silver-400/60">
          Live · EPA ECHO
        </span>
      </div>

      {e ? (
        <>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl border p-4 ${
                  s.tone === "warn"
                    ? "border-yellow-600/40 bg-yellow-900/15"
                    : s.tone === "ok"
                    ? "border-aqua-500/30 bg-aqua-400/[0.06]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div
                  className={`font-display text-3xl tabular-nums ${
                    s.tone === "warn" ? "text-yellow-200" : "text-silver-100"
                  }`}
                >
                  {s.value.toLocaleString()}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-ultra text-silver-300/70 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-silver-400/70">
            Counts cover the public water systems the EPA tracks in your county
            (ECHO Safe Drinking Water records). Violations are reported against
            federal limits — they don't capture unregulated contaminants, which
            is exactly why I check the detailed sources below.
          </p>
        </>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-silver-300/80">
          We found your area but couldn't pull live county statistics this time.
          The detailed sources below still work for {report.city}.
        </p>
      )}

      {/* Deep links — the contaminant-level detail lives here */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ReportLink
          href={report.links.ewg}
          title="EWG levels"
          sub="Contaminant amounts by ZIP — click your city/utility on the results page."
        />
        <ReportLink
          href={report.links.waterway}
          title="EPA · How's My Waterway"
          sub="Official EPA watershed & water-system condition for your area."
        />
        <ReportLink
          href={report.links.ccr}
          title="Your city's CCR"
          sub="The annual Consumer Confidence Report your utility is required to publish."
        />
      </div>
    </motion.div>
  );
}

function ReportLink({
  href,
  title,
  sub,
}: {
  href: string;
  title: string;
  sub: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-aqua-400/40 hover:bg-aqua-400/[0.06]"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-silver-100">{title}</span>
        <span className="text-aqua-300 transition group-hover:translate-x-0.5">→</span>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-silver-300/70">{sub}</p>
    </a>
  );
}
