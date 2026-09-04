import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ScienceVideo } from "@/components/ScienceVideo";
import { ImageZoom } from "@/components/ImageZoom";

// 20-molecule "tap" cluster — a dense grape-like bunch
const LARGE_CLUSTER = [
  { x: 0, y: 0 },
  { x: 30, y: -10 },
  { x: 60, y: 0 },
  { x: 90, y: -8 },
  { x: -15, y: 25 },
  { x: 18, y: 28 },
  { x: 50, y: 30 },
  { x: 80, y: 28 },
  { x: 110, y: 25 },
  { x: 0, y: 55 },
  { x: 35, y: 60 },
  { x: 70, y: 58 },
  { x: 100, y: 60 },
  { x: 18, y: 85 },
  { x: 55, y: 88 },
  { x: 88, y: 85 },
  { x: 35, y: 110 },
  { x: 70, y: 112 },
  { x: 15, y: 5 },
  { x: 95, y: 8 },
];

// 6-molecule ERW micro-cluster
const SMALL_CLUSTER = [
  { x: 0, y: 0 },
  { x: 28, y: -6 },
  { x: 14, y: 22 },
  { x: 42, y: 24 },
  { x: 56, y: 0 },
  { x: 28, y: 48 },
];

export function ClusterComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
  });

  // Aquaporin pulse: small cluster passes through the channel
  const passThroughY = useTransform(smooth, [0, 1], [0, 220]);

  // Membrane reveal
  const membraneOpacity = useTransform(smooth, [0, 0.4], [0, 1]);

  return (
    <section
      ref={ref}
      data-section="cluster"
      data-section-label="Micro-Clustering"
      className="section-pad relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="The Cluster of Grapes"
          title={
            <>
              The cluster-of-grapes{" "}
              <em className="not-italic text-aqua-300">teaching model.</em>
            </>
          }
          subtitle={
            <>
              Dr. Donaldson uses this analogy: pour a bunch of grapes into a 5-gallon Costco jug
              — they bunch up together and won't pass through the narrow opening. Remove one grape
              at a time and they all fit through easily. Electrolyzed reduced water is proposed to
              have smaller, more loosely associated clusters — like individual grapes — that pass
              through aquaporin channels more efficiently than the larger clusters of regular water.
              Treat this as an educational model, not a settled clinical claim.
            </>
          }
        />

        {/* Lead video — water clusters passing through an aquaporin channel */}
        <div className="mt-12 max-w-3xl mx-auto">
          <ScienceVideo
            src="/videos/aquaporin.mp4"
            badge="Cell membrane"
            caption="Molecular-biology animation of water clusters approaching an aquaporin channel in the phospholipid bilayer. Smaller, more loosely associated clusters pass through more readily — the visual basis for Dr. Donaldson's cluster-of-grapes teaching model. Presented as an educational model, not a settled clinical claim."
          />
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Left: Large cluster (tap) */}
          <ClusterCard
            label="Regular Water"
            sub="Disorganized Bulk Water"
            badge="Tap · RO · Bottled"
            badgeTone="yellow"
            order="order-1"
          >
            <div className="relative h-48 flex items-center justify-center rounded-2xl bg-navy-950/40 p-2 overflow-hidden border border-white/[0.04]">
              <ImageZoom
                src="/water_cluster_large.png"
                alt="Regular Water: Disorganized, bulky groups of water molecules clumping together, typical of tap, reverse osmosis, or bottled waters."
                className="h-full w-full"
                imageClassName="h-full w-full object-contain rounded-xl"
              />
            </div>
            <p className="mt-4 sm:mt-5 text-sm text-silver-300/80 leading-relaxed text-center">
              Large, disorganized networks of water molecules bonded loosely in bulk liquid states.
            </p>
          </ClusterCard>

          {/* Middle: Aquaporin channel animation — visually leads, narrative middle */}
          <div className="relative order-3 lg:order-2 flex flex-col justify-between">
            <div className="text-center mb-4">
              <div className="kicker text-aqua-300/90">Aquaporin Channel</div>
              <h3 className="mt-2 font-display text-xl sm:text-2xl text-silver-100">
                Cell Membrane Passage
              </h3>
            </div>
            <div className="relative h-48 rounded-3xl bg-navy-950/40 overflow-hidden border border-white/[0.04] p-2 flex items-center justify-center">
              <ImageZoom
                src="/aquaporin_passage.png"
                alt="Cell Membrane Passage: Aquaporin protein channels selectively conduct individual water molecules single-file through the cell wall."
                className="h-full w-full"
                imageClassName="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <p className="mt-4 sm:mt-5 text-sm text-silver-300/80 leading-relaxed text-center max-w-xs mx-auto">
              Aquaporins are selective membrane protein channels that filter and conduct water molecules into the cell.
            </p>
          </div>

          {/* Right: Small cluster (ERW) */}
          <ClusterCard
            label="ERW · Kangen"
            sub="Structured Micro-Water"
            badge="Electrolyzed Reduced Water"
            badgeTone="aqua"
            order="order-2 lg:order-3"
          >
            <div className="relative h-48 flex items-center justify-center rounded-2xl bg-navy-950/40 p-2 overflow-hidden border border-white/[0.04]">
              <ImageZoom
                src="/water_cluster_small.png"
                alt="ERW Kangen Water: Structured, smaller hexagonal arrangements of water molecules created through platinum plate electrolysis."
                className="h-full w-full"
                imageClassName="h-full w-full object-contain rounded-xl"
              />
            </div>
            <p className="mt-4 sm:mt-5 text-sm text-silver-300/80 leading-relaxed text-center">
              Ordered, highly structured hexagonal arrangements of water molecules created through electrolysis.
            </p>
          </ClusterCard>
        </div>
      </div>
    </section>
  );
}

function ClusterCard({
  label,
  sub,
  badge,
  badgeTone,
  order,
  children,
}: {
  label: string;
  sub: string;
  badge: string;
  badgeTone: "aqua" | "yellow";
  order?: string;
  children: React.ReactNode;
}) {
  const tone =
    badgeTone === "aqua"
      ? "bg-aqua-400/15 text-aqua-200 border-aqua-400/40"
      : "bg-yellow-900/30 text-yellow-200/90 border-yellow-700/40";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`glass p-5 sm:p-7 ${order ?? ""}`}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className={`text-[9px] sm:text-[10px] tracking-ultra uppercase px-2 sm:px-2.5 py-1 rounded-full border ${tone}`}>
          {badge}
        </span>
      </div>
      <h3 className="font-display text-xl sm:text-2xl text-silver-100">{label}</h3>
      <div className="text-xs text-silver-400/80 mt-1">{sub}</div>
      <div className="my-6 sm:my-8">{children}</div>
    </motion.div>
  );
}

function WaterMolecule({
  cx,
  cy,
  bright,
  dimmed,
}: {
  cx: number;
  cy: number;
  bright?: boolean;
  dimmed?: boolean;
}) {
  const oColor = dimmed ? "#7A7A57" : "#48C7DC";
  const hColor = dimmed ? "#9A9A77" : "#A4E7F0";
  const intensity = bright ? 1 : dimmed ? 0.75 : 0.9;
  return (
    <g transform={`translate(${cx} ${cy})`} opacity={intensity}>
      {/* H */}
      <circle cx={-7} cy={-6} r={3.5} fill={hColor} />
      {/* O */}
      <circle cx={0} cy={0} r={6} fill={oColor} />
      {/* H */}
      <circle cx={7} cy={-6} r={3.5} fill={hColor} />
      {bright && (
        <circle cx={0} cy={0} r={9} fill="none" stroke={hColor} strokeOpacity="0.3" strokeWidth="1" />
      )}
    </g>
  );
}
