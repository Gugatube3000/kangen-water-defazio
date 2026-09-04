import { useState } from "react";
import { Cite } from "@/components/Cite";
import { ScienceVideo } from "@/components/ScienceVideo";

const STAGES = [
  {
    id: "glycolysis",
    label: "Glycolysis",
    location: "Cytosol",
    src: "/videos/glycolysis.mp4",
    body: "Glucose is split into two pyruvate molecules. The pathway produces a small net amount of ATP and transfers electrons to NADH.",
  },
  {
    id: "pyruvate",
    label: "Pyruvate oxidation",
    location: "Mitochondrial matrix",
    src: "/videos/pyruvate-oxidation.mp4",
    body: "Pyruvate is converted to acetyl-CoA. Carbon dioxide is released and more electrons are transferred to NADH before the cycle begins.",
  },
  {
    id: "krebs",
    label: "Citric acid cycle",
    location: "Mitochondrial matrix",
    src: "/videos/krebs-cycle.mp4",
    body: "Acetyl-CoA enters a cyclic pathway that releases carbon dioxide and loads NADH and FADH₂ for the next stage.",
  },
  {
    id: "etc",
    label: "Electron transport",
    location: "Inner mitochondrial membrane",
    src: "/videos/electron-transport.mp4",
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
          Choose a stage to focus the animation and explanation. The overview
          above shows how they remain connected.
        </p>
      </div>

      <div className="grid lg:grid-cols-[.38fr_.62fr]">
        <div className="grid grid-cols-2 gap-2 border-b border-white/[0.08] p-4 sm:p-5 lg:grid-cols-1 lg:border-b-0 lg:border-r">
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

        <div className="p-4 sm:p-6">
          <ScienceVideo
            key={active.id}
            src={active.src}
            badge={`${active.label} · ${active.location}`}
            caption={active.body}
            className="rounded-2xl"
          />
          <p className="mt-4 text-xs leading-relaxed text-silver-400/72">
            Simplified educational animation; molecule sizes, timing, and
            distances are not to scale. <Cite ids={53} />
          </p>
        </div>
      </div>
    </section>
  );
}
