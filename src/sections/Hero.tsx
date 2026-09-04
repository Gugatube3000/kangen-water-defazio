import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { PremiumButton } from "@/components/PremiumButton";
import { DoctorCard } from "@/components/DoctorCard";
import { MaskedHeadline } from "@/components/MaskedHeadline";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    mass: 0.4,
  });
  const textY = useTransform(smooth, [0, 1], ["0%", reduce ? "0%" : "-30%"]);
  const textOpacity = useTransform(smooth, [0, 0.7], [1, reduce ? 1 : 0]);

  return (
    <section
      ref={ref}
      data-section="hero"
      data-section-label="Welcome"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_62%_88%_at_22%_46%,rgba(5,25,44,0.48),rgba(6,29,49,0.18)_58%,transparent_82%)]"
      />
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 lg:px-16 pt-32 md:pt-44 pb-20 md:pb-28 min-h-[100svh] flex flex-col justify-between"
      >
        <div className="max-w-3xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 max-w-2xl border-l border-aqua-200/70 pl-5 font-display text-xl italic leading-relaxed text-white [text-shadow:0_2px_12px_rgba(3,20,37,0.72)] sm:text-2xl"
          >
            “Water is life’s matter and matrix, mother and medium. There is no life without water.”
            <cite className="mt-2 block font-sans text-[10px] not-italic uppercase tracking-ultra text-aqua-100/85">
              Albert Szent-Györgyi · Nobel laureate in medicine
            </cite>
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-aqua-400/70" />
            <span className="kicker">Evidence-Based Hydration Education</span>
          </motion.div>

          <h1 className="mt-6 font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.98] tracking-tight text-balance text-silver-100">
            <MaskedHeadline
              parts={[
                { text: "The future" },
                { br: true },
                { text: "of", italic: true },
                { text: "hydration.", highlight: true, italic: true },
              ]}
              stagger={0.07}
              delay={0.1}
            />
          </h1>

          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.18,
            }}
            className="mt-7 max-w-2xl font-display text-xl leading-relaxed text-silver-100 text-balance [text-shadow:0_1px_8px_rgba(14,26,54,0.6)] sm:text-2xl md:text-3xl"
          >
            Here’s a question most people have never been asked: “Is the water
            you’re drinking simply{" "}
            <em className="text-white">quenching your thirst</em>, or is it truly{" "}
            <em className="text-aqua-100">supporting hydration and healthy cellular function</em>?”
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.28,
            }}
            className="mt-5 max-w-xl text-sm text-aqua-300/80 italic font-display"
          >
            A personal guide to the questions, the evidence, and the solution
            I chose — at your own pace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.36,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <PremiumButton href="#hydration-introduction" size="lg" variant="primary">
              What hydration means
            </PremiumButton>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-0 self-start md:self-end">
          <DoctorCard variant="compact" />
        </div>
      </motion.div>
    </section>
  );
}
