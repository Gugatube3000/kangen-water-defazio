import { Cite } from "@/components/Cite";
import { Reveal } from "@/components/Reveal";

const bridgePoints = [
  {
    number: "01",
    title: "Start with the molecule.",
    body: "Molecular hydrogen (H₂) is the smallest neutral molecule. Researchers study how readily it can diffuse through biological membranes and distribute through tissues.",
  },
  {
    number: "02",
    title: "Ask about redox signaling.",
    body: "The central hypothesis is not that H₂ supplies cellular fuel. Researchers are testing whether it can influence oxidative-stress responses and signaling pathways while preserving useful reactive signals.",
  },
  {
    number: "03",
    title: "Separate mechanism from outcome.",
    body: "A plausible mechanism, a change in a biomarker, and a meaningful health result are three different levels of evidence. Each claim must be evaluated on its own.",
  },
];

export function MolecularHydrogenBridge() {
  return (
    <section
      id="why-molecular-hydrogen"
      data-section="why-molecular-hydrogen"
      data-section-label="Why Molecular Hydrogen"
      className="relative scroll-mt-24 overflow-hidden px-5 py-16 sm:px-10 md:py-24 lg:px-16"
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_75%_at_50%_45%,rgba(111,215,230,.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-aqua-200/30 bg-[#081D34]/90 shadow-2xl shadow-navy-950/35">
        <Reveal>
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:p-14">
            <div>
              <div className="kicker">The main education topic · Molecular hydrogen</div>
              <h2 className="mt-5 font-display text-4xl leading-[1.04] text-silver-100 sm:text-5xl lg:text-6xl">
                This is the bridge from cellular stress to the{" "}
                <em className="not-italic text-aqua-300">H₂ research question.</em>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-silver-200/90">
                Once we understand respiration, electron flow, and the difference between useful reactive signals and oxidative stress, we can ask the question at the heart of this guide: where might dissolved molecular hydrogen fit?
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-silver-300/80">
                Molecular hydrogen is not a vitamin, an alkalizing shortcut, or fuel for ATP production. It is being studied as a possible modulator of redox biology. That scientific distinction is why H₂—not pH alone—deserves the deeper discussion that follows. <Cite ids={[1, 4]} />
              </p>
            </div>

            <ol className="grid gap-4">
              {bridgePoints.map((point) => (
                <li key={point.number} className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-2xl border border-white/[.1] bg-white/[.04] p-5 sm:p-6">
                  <span className="font-mono text-xs text-aqua-300/75">{point.number}</span>
                  <div>
                    <h3 className="font-display text-2xl text-silver-100">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-silver-300/82">{point.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="border-t border-aqua-200/15 bg-aqua-300/[.06] px-7 py-5 text-center text-sm font-medium tracking-wide text-aqua-100 sm:px-10">
            Next: what H₂ is, how it moves, what researchers propose, and how to read the evidence without turning curiosity into a promise.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
