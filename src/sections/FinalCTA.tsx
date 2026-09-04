import { motion } from "framer-motion";
import { PremiumButton } from "@/components/PremiumButton";
import { MaskedHeadline } from "@/components/MaskedHeadline";
import { CONTACT_MAILTO } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_30%,rgba(111,215,230,0.18),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-400/40 to-transparent"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="kicker"
        >
          Next Step
        </motion.div>
        <h2 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-balance text-silver-100 leading-[1.02]">
          <MaskedHeadline
            parts={[
              { text: "Questions about" },
              { br: true },
              { text: "your", italic: false },
              { text: "water?", highlight: true, italic: true },
            ]}
            stagger={0.08}
          />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 mx-auto max-w-2xl text-base md:text-lg text-silver-300/85 leading-relaxed text-balance"
        >
          Email me with the questions this guide brings up. I will reply when my
          schedule allows, and we can arrange a Zoom conversation if that would
          help. There is no obligation to buy a system — understanding your water
          is a useful first step on its own.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <PremiumButton href={CONTACT_MAILTO} size="lg" variant="primary">
            Contact me
          </PremiumButton>
          <PremiumButton
            to="/ask-defazio"
            size="lg"
            variant="secondary"
          >
            Ask HydroAIgen
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}
