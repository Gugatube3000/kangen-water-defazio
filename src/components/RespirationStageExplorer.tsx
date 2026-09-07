import { useState } from "react";
import { Cite } from "@/components/Cite";

const STAGES = [
  {
    id: "glycolysis",
    label: "Glycolysis",
    location: "Cytosol",
    body: "Glucose is split into two pyruvate molecules. The pathway produces a small net amount of ATP and transfers electrons to NADH.",
  },
  {
    id: "pyruvate",
    label: "Pyruvate oxidation",
    location: "Mitochondrial matrix",
    body: "Pyruvate is converted to acetyl-CoA. Carbon dioxide is released and more electrons are transferred to NADH before the cycle begins.",
  },
  {
    id: "krebs",
    label: "Citric acid cycle",
    location: "Mitochondrial matrix",
    body: "Acetyl-CoA enters a cyclic pathway that releases carbon dioxide and loads NADH and FADH₂ for the next stage.",
  },
  {
    id: "etc",
    label: "Electron transport",
    location: "Inner mitochondrial membrane",
    body: "Electron flow helps build a proton gradient. Protons return through ATP synthase, oxygen accepts electrons at the end of the chain, and water forms.",
  },
] as const;

export function RespirationStageExplorer() {
  const [activeId, setActiveId] = useState<(typeof STAGES)[number]["id"]>("glycolysis");
  const active = STAGES.find((stage) => stage.id === activeId) ?? STAGES[0];

  return (
    <section aria-labelledby="respiration-stage-title" className="overflow-hidden rounded-[2rem] border border-white/[0.13] bg-[#0B1E36]/82 shadow-2xl shadow-navy-950/25">
      <div className="border-b border-white/[0.08] p-5 sm:p-7">
        <div className="kicker">Click or tap each stage</div>
        <h3 id="respiration-stage-title" className="mt-3 font-display text-3xl text-silver-100 sm:text-4xl">
          Four stages, one continuous system.
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-silver-300/80">
          Watch one continuous animation, then use the four stages below to
          review where each part occurs and what it contributes.
        </p>
      </div>

      <div className="border-b border-white/10 p-5 sm:p-7">
        <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-black shadow-2xl">
          <iframe className="aspect-video w-full" src="https://player.vimeo.com/video/161176017?title=0&byline=0&portrait=0" title="Cellular respiration: glycolysis, pyruvate oxidation, Krebs cycle, and electron transport" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-silver-300/82">This animation was identified in Dr. De Fazio’s supplied Telegram materials as a clear overview of the complete process. Use the stage notes below for current terminology and ATP estimates. <a href="https://vimeo.com/161176017" target="_blank" rel="noopener noreferrer" className="text-aqua-200 underline underline-offset-4">Watch directly on Vimeo ↗</a></p>
      </div>

      <div className="grid lg:grid-cols-[.58fr_.42fr]">
        <div className="grid grid-cols-2 gap-2 border-b border-white/[0.08] p-4 sm:p-5 lg:border-b-0 lg:border-r">
          {STAGES.map((stage, index) => {
            const selected = stage.id === active.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveId(stage.id)}
                aria-pressed={selected}
                className={`min-h-24 rounded-2xl border p-4 text-left transition sm:p-5 ${
                  selected
                    ? "border-aqua-300/45 bg-aqua-300/[0.11] text-silver-100"
                    : "border-white/[0.08] bg-white/[0.025] text-silver-300 hover:border-white/20 hover:text-silver-100"
                }`}
              >
                <span className="font-mono text-[10px] text-aqua-300/75">{String(index + 1).padStart(2, "0")}</span>
                <span className="mt-2 block font-display text-lg leading-tight sm:text-xl">{stage.label}</span>
                <span className="mt-1 hidden text-[10px] uppercase tracking-[0.14em] text-silver-400 sm:block">{stage.location}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-aqua-300/75">{active.location}</div>
          <h4 className="mt-3 font-display text-3xl text-silver-100">{active.label}</h4>
          <p className="mt-4 text-sm leading-relaxed text-silver-300/82">{active.body}</p>
          <p className="mt-5 text-xs leading-relaxed text-silver-400/72">The animation is simplified; molecule sizes, timing, and distances are not to scale. <Cite ids={53} /></p>
        </div>
      </div>
    </section>
  );
}
