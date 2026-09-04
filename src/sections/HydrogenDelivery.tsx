import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Cite } from "@/components/Cite";
import { fadeUp, stagger } from "@/lib/motion";

const METHODS = [
  {
    label: "Hydrogen tablets",
    body: "Portable and simple. The tradeoff is that the water source, minerals, timing, and dissolved-hydrogen level still matter.",
  },
  {
    label: "Hydrogen inhalation",
    body: "Used in some research and wellness settings. It is a different delivery path and should be discussed with a qualified clinician.",
  },
  {
    label: "Hydrogen-rich water",
    body: "A practical daily format for studying dissolved molecular hydrogen. The question is how the hydrogen is generated and measured.",
  },
  {
    label: "Electrolyzed water systems",
    body: "The category I study most closely: filtration plus electrolysis, producing mineral-present water with dissolved hydrogen and reducing potential.",
  },
];

export function HydrogenDelivery() {
  return (
    <section
      data-section="delivery"
      data-section-label="Delivery Methods"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_50%_at_30%_30%,rgba(164,231,240,0.08),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="How Is Hydrogen Delivered?"
          title={
            <>
              The credible path is to compare the options{" "}
              <em className="not-italic text-aqua-300">before</em> naming the
              machine.
            </>
          }
          subtitle={
            <>
              <p>
                Molecular hydrogen can reach the body through several formats,
                and they are not interchangeable. Each option differs in
                practicality, concentration, timing, water source, and the kind
                of evidence available to evaluate it.
              </p>
              <p>
                Comparing that landscape first keeps the discussion honest. It
                gives Kangen a clear place in the story as the system I chose
                to study, rather than presenting a machine before the
                visitor understands the underlying question.
              </p>
            </>
          }
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {METHODS.map((method, index) => (
            <motion.div key={method.label} variants={fadeUp}>
              <GlassCard padding="lg" className="h-full">
                <div className="kicker">0{index + 1}</div>
                <h3 className="mt-4 font-display text-2xl leading-tight text-silver-100">
                  {method.label}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-silver-300/82">
                  {method.body}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-silver-400/70">
            Research links and citations are collected on the references page
            <Cite ids={[1, 3, 4, 25, 26, 27, 28, 29]} />. This section is
            educational, not medical advice or a product claim.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
