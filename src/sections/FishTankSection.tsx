import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { FishTank } from "@/components/FishTank";
import { Reveal } from "@/components/Reveal";

export function FishTankSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
  });

  // Left (dirty) slides in from the left as we enter
  const dirtyX = useTransform(smooth, [0, 0.5], ["-6%", "0%"]);
  const dirtyOpacity = useTransform(smooth, [0, 0.4], [0, 1]);
  // Right (clean) slides in from the right
  const cleanX = useTransform(smooth, [0, 0.5], ["6%", "0%"]);
  const cleanOpacity = useTransform(smooth, [0, 0.4], [0, 1]);
  // Center "vs" rotation
  const vsRotate = useTransform(smooth, [0, 1], [0, 180]);

  return (
    <section
      ref={ref}
      data-section="fish-tank"
      data-section-label="Fish Tank = Your Cells"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_30%,rgba(72,199,220,0.10),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          kicker="My favorite analogy"
          title={
            <>
              Your body is a fish tank.{" "}
              <em className="not-italic text-aqua-300">
                Your cells are the fish.
              </em>
            </>
          }
          subtitle="The aquarium is my teaching model: when the water quality changes, everything living in the tank has to respond. It is a memorable way to ask better questions about hydration and environment, not proof of a medical outcome."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-6 lg:gap-10 items-start max-w-5xl mx-auto">
          <motion.div style={{ x: dirtyX, opacity: dirtyOpacity }}>
            <FishTank variant="dirty" />
            <div className="mt-3 sm:mt-5 text-center">
              <div className="kicker text-yellow-300/80 text-[9px] sm:text-[11px]">
                Dirty Water
              </div>
              <h3 className="mt-1 sm:mt-2 font-display text-base sm:text-2xl text-silver-100 leading-tight">
                Cloudy Environment
              </h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-silver-300/80 leading-relaxed max-w-xs mx-auto px-1">
                Cloudy water and an algae-heavy tank make a neglected
                environment immediately visible.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ rotate: vsRotate }}
            className="hidden lg:flex h-16 w-16 rounded-full glass items-center justify-center font-display text-xl text-aqua-300 self-center"
            aria-hidden
          >
            vs
          </motion.div>

          <motion.div style={{ x: cleanX, opacity: cleanOpacity }}>
            <FishTank variant="clean" />
            <div className="mt-3 sm:mt-5 text-center">
              <div className="kicker text-aqua-300/90 text-[9px] sm:text-[11px]">
                Maintained Water
              </div>
              <h3 className="mt-1 sm:mt-2 font-display text-base sm:text-2xl text-silver-100 leading-tight">
                Clearer Environment
              </h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-silver-300/80 leading-relaxed max-w-xs mx-auto px-1">
                Clear water and active fish make freshness, cleanliness, and
                life immediately visible.
              </p>
            </div>
          </motion.div>

        </div>

        <Reveal>
          <p className="mt-16 mx-auto max-w-2xl text-center text-silver-300/75 italic font-display text-xl">
            “If you don’t filter the water, your body becomes the filter.”
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-silver-400/70">
            This paired photograph is a teaching analogy created for this site.
            Aquarium maintenance is not a test of any drinking-water product and
            does not demonstrate a human-health outcome.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
