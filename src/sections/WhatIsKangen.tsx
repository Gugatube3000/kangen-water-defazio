import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Cite } from "@/components/Cite";

const STEPS: { n: string; title: string; body: ReactNode }[] = [
  {
    n: "01",
    title: "Start with your incoming tap water",
    body: (
      <>
        The household source matters. Start by checking what your local records
        say, then decide whether an external pre-filter is appropriate for your
        water and home
        <Cite ids={16} />.
      </>
    ),
  },
  {
    n: "02",
    title: "Water passes through the machine's internal filter",
    body: (
      <>
        The ionizer's internal filter reduces common impurities before the
        water enters the electrolysis chamber. A kitchen ionizer is not a
        whole-home filtration system.
      </>
    ),
  },
  {
    n: "03",
    title: "Lightning strike in a box",
    body: (
      <>
        Electrical current passes through water against platinum-coated
        titanium plates inside the electrolysis chamber
        <Cite ids={2} />.
      </>
    ),
  },
  {
    n: "04",
    title: "The water molecule dis-associates",
    body: (
      <>
        At the cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻. At the anode: 2H₂O → O₂ +
        4H⁺ + 4e⁻. The separated streams have different water properties
        <Cite ids={[1, 2]} />.
      </>
    ),
  },
  {
    n: "05",
    title: "The machine routes distinct water streams",
    body: (
      <>
        The cathode side is the reducing, alkaline side associated with
        dissolved molecular hydrogen. The anode side is acidic and oxidizing.
        The machine routes those outputs for different household uses
        <Cite ids={[1, 20]} />.
      </>
    ),
  },
  {
    n: "06",
    title: "The drinking stream remains mineral-present",
    body: (
      <>
        The drinking stream is ERW: alkaline (pH 8.5–9.5), associated with
        dissolved molecular hydrogen, negative ORP, and naturally occurring
        minerals in the source water. It is not the same as demineralized
        reverse-osmosis water. For the K8 specifically, Enagic's current US
        product page lists a negative ORP specification of −722 mV
        <Cite ids={21} />.
      </>
    ),
  },
];

export function WhatIsKangen() {
  const stepsRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 80%", "end 30%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
  });

  return (
    <section
      data-section="kangen"
      data-section-label="Why Kangen"
      className="section-pad relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-aqua opacity-30 pointer-events-none" />
      <div
        aria-hidden
        className="absolute right-0 sm:-right-8 lg:right-10 top-20 font-display text-[14rem] lg:text-[22rem] leading-none text-silver-100/[0.02] select-none pointer-events-none"
      >
        02
      </div>
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          kicker="Why I chose Kangen"
          title={
            <>
              Only here do we talk about{" "}
              <em className="not-italic text-aqua-300">the system.</em>
            </>
          }
          subtitle={
            <>
              <p>
                By this point, the water-quality problem, the hydrogen research,
                and the available delivery methods have been separated. Now the
                machine can be understood in context: not as a mysterious box,
                but as a sequence of filtration, electrolysis, and water-stream
                separation.
              </p>
              <p>
                I study this ionizer category because it brings several
                measurable properties into one household system: mineral-present
                source water, dissolved molecular hydrogen, alkaline drinking
                settings, and reducing potential. The steps below show exactly
                where each property enters the process.
              </p>
            </>
          }
        />

        <div className="mt-16 max-w-3xl mx-auto">
          {/* Left: 6 Steps Sequence */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[1.05rem] top-2 bottom-2 w-px bg-silver-300/10 hidden md:block"
            />
            <motion.div
              aria-hidden
              style={{ scaleY: smooth }}
              className="absolute left-[1.05rem] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-aqua-300 via-aqua-400 to-aqua-500 hidden md:block"
            />

            <ol ref={stepsRef} className="space-y-8">
              {STEPS.map((s, i) => (
                <StepItem
                  key={s.n}
                  step={s}
                  index={i}
                  total={STEPS.length}
                  progress={smooth}
                />
              ))}
            </ol>
          </div>

        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-silver-300/80">
          Prefer motion to a static rendering? <a href="#ionizer-video" className="text-aqua-200 underline underline-offset-4">Watch the captioned ionizer explainer</a>.
        </p>
      </div>
    </section>
  );
}



type Step = (typeof STEPS)[number];

function StepItem({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const slot = 1 / total;
  const enterAt = index * slot;
  const fullyOn = enterAt + slot * 0.4;

  const numColor = useTransform(
    progress,
    [enterAt - 0.05, fullyOn],
    ["rgba(164,231,240,0.25)", "rgba(164,231,240,1)"]
  );
  const titleColor = useTransform(
    progress,
    [enterAt - 0.05, fullyOn],
    ["rgba(244,246,251,0.4)", "rgba(244,246,251,1)"]
  );
  const x = useTransform(progress, [enterAt - 0.05, fullyOn], [-8, 0]);
  const dotScale = useTransform(progress, [enterAt - 0.05, fullyOn], [0.6, 1]);
  const dotOpacity = useTransform(progress, [enterAt - 0.05, fullyOn], [0, 1]);

  return (
    <motion.li style={{ x }} className="flex gap-5 relative">
      <motion.span
        aria-hidden
        style={{ scale: dotScale, opacity: dotOpacity }}
        className="absolute left-[0.85rem] top-3.5 h-2.5 w-2.5 rounded-full bg-aqua-300 ring-2 ring-navy-950 hidden md:block"
      />
      <div className="shrink-0">
        <motion.div
          style={{ color: numColor }}
          className="font-display text-3xl tabular-nums"
        >
          {step.n}
        </motion.div>
      </div>
      <div>
        <motion.h3
          style={{ color: titleColor }}
          className="font-display text-2xl"
        >
          {step.title}
        </motion.h3>
        <p className="mt-2 text-silver-300/80 leading-relaxed text-balance max-w-md">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}
