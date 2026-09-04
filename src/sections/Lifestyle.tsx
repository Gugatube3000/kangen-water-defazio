import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";

const USES = [
  {
    title: "Morning Hydration",
    body: "Start the day with a glass of alkaline, hydrogen-rich water.",
  },
  {
    title: "Coffee & Tea",
    body: "Brew with cleaner-tasting water to bring out subtle flavor notes.",
  },
  {
    title: "Cooking",
    body: "Use clean, mineral-balanced water for soups, rice, and broths.",
  },
  {
    title: "Fitness Routine",
    body: "Support hydration before, during, and after movement.",
  },
  {
    title: "Family Hydration",
    body: "Encourage every member of the household to drink more water.",
  },
  {
    title: "Household Cleaning",
    body: "Different water types from the machine are designed for everyday tasks.",
  },
];

export function Lifestyle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      data-section="lifestyle"
      data-section-label="Lifestyle"
      className="section-pad relative"
    >
      {/* Ghost watermark */}
      <div
        aria-hidden
        className="absolute -left-6 top-12 font-display text-[14rem] lg:text-[22rem] leading-none text-silver-100/[0.02] select-none pointer-events-none"
      >
        04
      </div>
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          kicker="Lifestyle Transformation"
          title={
            <>
              Small daily habits shape{" "}
              <em className="not-italic text-aqua-300">long-term wellness.</em>
            </>
          }
          subtitle="This is not about a quick fix. It is about rethinking one of the most basic things you do every day: drinking water."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {USES.map((u, i) => (
            <LifestyleCard
              key={u.title}
              index={i}
              title={u.title}
              body={u.body}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LifestyleCard({
  index,
  title,
  body,
  progress,
}: {
  index: number;
  title: string;
  body: string;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  // Each card gets a different parallax magnitude in a checkerboard pattern.
  const direction = index % 2 === 0 ? 1 : -1;
  const magnitude = 20 + (index % 3) * 6;
  const y = useTransform(
    progress,
    [0, 1],
    reduce ? [0, 0] : [direction * magnitude, -direction * magnitude]
  );

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.06,
      }}
    >
      <GlassCard padding="md" className="h-full relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-aqua-400/10 blur-3xl"
        />
        <div className="flex items-center gap-3">
          <span className="font-display text-3xl text-aqua-300/80 tabular-nums">
            0{index + 1}
          </span>
          <span className="hairline w-12" />
        </div>
        <h3 className="mt-4 font-display text-2xl text-silver-100">{title}</h3>
        <p className="mt-3 text-sm text-silver-300/80 leading-relaxed">
          {body}
        </p>
      </GlassCard>
    </motion.div>
  );
}
