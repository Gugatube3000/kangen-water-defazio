import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

type WaterType = {
  id: string;
  label: string;
  ph: number;
  color: string;
  use: string;
  body: string;
};

const TYPES: WaterType[] = [
  {
    id: "strong-kangen",
    label: "Strong Kangen Water",
    ph: 11.5,
    color: "#A4E7F0",
    use: "Cooking, Cleaning & Food Prep",
    body: "pH 11.5 alkaline water. A non-drinking output that removes oil-based contaminants such as pesticides, herbicides, and fungicides from produce. Excellent for stain removal, degreasing, and pre-soaking rice and vegetables. Not for drinking.",
  },
  {
    id: "kangen",
    label: "Kangen Water (ERW)",
    ph: 9.0,
    color: "#6FD7E6",
    use: "Daily Hydration",
    body: "Electrolyzed Reduced Water at pH 8.5–9.5, associated with dissolved molecular hydrogen and negative ORP. I discuss smaller clusters as a teaching model, not a promised medical outcome. The primary drinking water output, used for daily hydration, tea, coffee, and cooking.",
  },
  {
    id: "neutral",
    label: "Clean (Neutral) Water",
    ph: 7.0,
    color: "#CFF3F7",
    use: "Medication & Infants",
    body: "Near-neutral filtered water free of chlorine and contaminants — use for taking medication, preparing infant formula, and any time alkalinity is not appropriate. Follow clinician and manufacturer guidance.",
  },
  {
    id: "beauty",
    label: "Beauty Water",
    ph: 5.5,
    color: "#E7ECF3",
    use: "Skin & Hair",
    body: "Slightly acidic at pH 5.5 — close to the skin's natural surface pH. Used as a gentle face wash, hair rinse, and mild astringent toner. Also useful as a plant mist for pH-sensitive houseplants.",
  },
  {
    id: "strong-acidic",
    label: "Strong Acidic Water",
    ph: 2.5,
    color: "#F4D3B3",
    use: "Sanitizing & Disinfection",
    body: "pH 2.5 — a non-drinking output with demonstrated antimicrobial properties. Research from Dr. Donaldson shows 2.5 pH Strong Acidic Water is a more powerful disinfectant than bleach alone and has been tested to kill microorganisms more effectively. Used for sanitizing surfaces, kitchen tools, and produce. Do not use this page as wound-care or veterinary guidance.",
  },
];

export function WaterExplorer() {
  const [active, setActive] = useState<WaterType>(TYPES[1]);
  const phPercent = (active.ph / 14) * 100;

  return (
    <section
      data-section="explorer"
      data-section-label="Water Types"
      className="section-pad relative"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Interactive - Five Waters from One Machine"
          title={
            <>
              One machine. Five waters.{" "}
              <em className="not-italic text-aqua-300">
                Five different jobs.
              </em>
            </>
          }
          subtitle="Tap any band to see the intended household role - from daily drinking water to non-drinking outputs for cleaning and sanitizing."
        />

        <div className="mt-16 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="glass overflow-hidden p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-ultra text-silver-300/70">
              <span>Five-output map</span>
              <span className="tabular-nums">Select a water type</span>
            </div>
            <div className="relative mt-7 space-y-2">
              <div
                aria-hidden
                className="absolute bottom-5 left-[1.12rem] top-5 w-px bg-gradient-to-b from-aqua-200/70 via-silver-200/30 to-yellow-200/60"
              />
              {TYPES.map((t) => {
                const isActive = active.id === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActive(t)}
                    className={`relative flex min-h-[76px] w-full items-center gap-4 rounded-2xl border px-3 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? "border-aqua-300/45 bg-aqua-300/[0.09]"
                        : "border-white/[0.06] bg-white/[0.025] hover:border-aqua-300/25 hover:bg-white/[0.045]"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span
                      aria-hidden
                      className={`relative z-10 h-3 w-3 shrink-0 rounded-full ring-4 transition ${
                        isActive ? "ring-aqua-300/20" : "ring-navy-800"
                      }`}
                      style={{
                        backgroundColor: t.color,
                        boxShadow: isActive ? `0 0 18px ${t.color}90` : "none",
                      }}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg text-silver-100">
                        {t.label}
                      </span>
                      <span className="mt-0.5 block text-[10px] uppercase tracking-ultra text-silver-400/75">
                        {t.use}
                      </span>
                    </span>
                    <span className="shrink-0 font-display text-xl tabular-nums text-silver-200">
                      {t.ph.toFixed(1)}
                      <span className="ml-1 text-[10px] uppercase tracking-ultra text-silver-400">
                        pH
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-silver-400/70">
              Each setting has a different household role. Drinking water is
              only one output from the machine.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {TYPES.map((t) => {
                const isActive = active.id === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActive(t)}
                    className={`min-h-10 rounded-full px-4 py-2 text-sm transition-all duration-300 border ${
                      isActive
                        ? "bg-aqua-400/20 border-aqua-400/60 text-aqua-200"
                        : "border-silver-300/15 text-silver-300/80 hover:border-aqua-400/40 hover:text-silver-100"
                    }`}
                    aria-pressed={isActive}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass p-7 md:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl text-silver-100">
                    {active.label}
                  </h3>
                  <span className="kicker">{active.use}</span>
                </div>
                <p className="mt-4 text-silver-300/85 leading-relaxed text-balance">
                  {active.body}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10">
              <div className="flex items-end justify-between text-[10px] uppercase tracking-ultra text-silver-400/70 mb-2">
                <span>Acidic 0</span>
                <span>Neutral 7</span>
                <span>Alkaline 14</span>
              </div>
              <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-red-500/50 via-yellow-500/40 via-30% via-[#F4F6FB] via-50% via-[#6FD7E6] via-70% to-[#A4E7F0]">
                <motion.div
                  initial={false}
                  animate={{ left: `${phPercent}%` }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 22,
                  }}
                  className="absolute -top-1.5 -translate-x-1/2"
                >
                  <div className="h-6 w-1.5 rounded-full bg-silver-100 ring-2 ring-navy-950 shadow-lg" />
                </motion.div>
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-silver-400/70 tabular-nums">
                <span>0</span>
                <span>7</span>
                <span>14</span>
              </div>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-silver-400/70">
              The body tightly regulates blood pH around 7.35–7.45 through homeostasis — 
              primarily via the lungs (CO₂ exhalation) and kidneys (bicarbonate regulation). 
              When the body is in a chronic acidic state (as with chronic diseases), it pulls 
              alkaline compounds from tissue: calcium carbonates and calcium phosphates from 
              bones, potentially contributing to conditions like osteoporosis. The body also 
              compensates by excreting more acidic urine. The pH of the water you drink is 
              just one input in this complex regulatory system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
