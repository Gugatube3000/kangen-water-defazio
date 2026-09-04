import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

/** Broad educational organ-water ranges based on USGS reference values. */
const ORGANS: { label: string; pct: number; icon: string }[] = [
  { label: "Lungs", pct: 83, icon: "M12 4c-3 4-5 6-5 10a5 5 0 0010 0c0-4-2-6-5-10z" },
  { label: "Blood", pct: 83, icon: "M12 3s6 7 6 11a6 6 0 01-12 0c0-4 6-11 6-11z" },
  { label: "Kidneys", pct: 79, icon: "M9 4c-3 1-4 4-4 8s2 8 5 8 2-4 2-8-0-7-3-8z" },
  { label: "Muscle", pct: 79, icon: "M5 8c4-2 10-2 14 0M5 16c4 2 10 2 14 0" },
  { label: "Brain", pct: 73, icon: "M12 3a4 4 0 00-4 4 3 3 0 000 6 4 4 0 008 0 3 3 0 000-6 4 4 0 00-4-4z" },
  { label: "Heart", pct: 73, icon: "M12 20s-7-4.5-7-10a4 4 0 017-2 4 4 0 017 2c0 5.5-7 10-7 10z" },
  { label: "Skin", pct: 64, icon: "M4 7h16v10H4z" },
  { label: "Bones", pct: 31, icon: "M7 4a2 2 0 00-2 3l8 8a2 2 0 003 3" },
];

export function OrganWater() {
  return (
    <section
      data-section="organ-water"
      data-section-label="Water in Your Body"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_55%_at_30%_30%,rgba(72,199,220,0.10),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="Start with the body"
          title={
            <>
              Body water is not distributed evenly.{" "}
              <em className="not-italic text-aqua-300">
                The tissue-by-tissue view is worth seeing.
              </em>
            </>
          }
          subtitle={
            <>
              <p>
                Water makes up about 60% of an adult man's body and about 55%
                of an adult woman's body in the USGS overview. It varies with age, body composition, and
                the tissue being measured. The familiar idea that the body is
                “mostly water” is therefore a useful starting point, not a
                single number that applies equally to everyone.
              </p>
              <p>
                Looking organ by organ makes the idea more concrete. Water is
                woven through circulation, temperature control, transport, and
                the physical environment of cells, which is why the quality of
                a daily water source deserves careful attention.
              </p>
            </>
          }
        />

        <div className="mt-14 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {ORGANS.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua-400/10 text-aqua-300"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={o.icon} />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-silver-100">{o.label}</span>
                  <span className="font-display text-xl text-aqua-300 tabular-nums">
                    {o.pct}%
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${o.pct}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-aqua-500 to-aqua-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-silver-400/65">
          Approximate water content by tissue; not one percentage for every person.{" "}
          <a href="https://www.usgs.gov/water-science-school/science/water-you-water-and-human-body" target="_blank" rel="noopener noreferrer" className="text-aqua-200 underline underline-offset-4">Read the USGS body-water overview</a>.
        </p>
      </div>
    </section>
  );
}
