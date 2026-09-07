import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export function ClusterComparison() {
  return (
    <section
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

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto items-stretch">
          <ClusterCard
            label="Regular Water"
            sub="A changing hydrogen-bond network"
            badge="Tap · RO · Bottled"
            badgeTone="yellow"
          >
            <p className="text-sm text-silver-300/80 leading-relaxed">
              In liquid water, hydrogen bonds form and break rapidly. A fixed picture of permanent “large clusters” does not represent the full behavior of bulk water.
            </p>
          </ClusterCard>

          <ClusterCard label="Aquaporins" sub="Water channels in cell membranes" badge="Established biology" badgeTone="aqua">
            <p className="text-sm text-silver-300/80 leading-relaxed">
              Aquaporins conduct individual water molecules through narrow protein channels. Their function is established; they do not require a permanent “micro-cluster” explanation.
            </p>
          </ClusterCard>

          <ClusterCard
            label="ERW · Kangen"
            sub="A claim to evaluate carefully"
            badge="Electrolyzed Reduced Water"
            badgeTone="aqua"
          >
            <p className="text-sm text-silver-300/80 leading-relaxed">
              Electrolysis changes measurable properties such as pH, ORP, dissolved gases, and ionic composition. Claims about stable smaller clusters require direct, reproducible evidence.
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
  children,
}: {
  label: string;
  sub: string;
  badge: string;
  badgeTone: "aqua" | "yellow";
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
      className="glass p-5 sm:p-7"
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className={`text-[9px] sm:text-[10px] tracking-ultra uppercase px-2 sm:px-2.5 py-1 rounded-full border ${tone}`}>
          {badge}
        </span>
      </div>
      <h3 className="font-display text-xl sm:text-2xl text-silver-100">{label}</h3>
      <div className="text-xs text-silver-400/80 mt-1">{sub}</div>
      <div className="mt-6 sm:mt-8">{children}</div>
    </motion.div>
  );
}
