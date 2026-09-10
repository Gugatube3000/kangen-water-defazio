import { Cite } from "@/components/Cite";
import { ImageZoom } from "@/components/ImageZoom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { RespirationStageExplorer } from "@/components/RespirationStageExplorer";

type CellularRespirationProps = { compactIntro?: boolean };

export function CellularRespiration({ compactIntro = false }: CellularRespirationProps) {
  return (
    <section id="cellular" data-section="cellular" data-section-label="Cellular Respiration" className={`${compactIntro ? "px-5 py-14 sm:px-10 md:py-20 lg:px-16" : "section-pad"} relative scroll-mt-24`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Cellular respiration · the central map"
          title={<><em className="not-italic text-aqua-300">Energy, electrons, oxygen,</em>{" "}and the life of a cell.</>}
          subtitle="Cellular respiration is not one isolated reaction. It is a linked system that converts fuel into ATP while coordinating oxygen use, carbon metabolism, redox signaling, and reactive oxygen species."
        />

        <Reveal>
          <article className="mt-12 overflow-hidden rounded-[2rem] border border-aqua-200/20 bg-[#0B2540]/82 shadow-2xl shadow-navy-950/25 md:mt-16">
            <div className="grid lg:grid-cols-[.92fr_1.08fr]">
              <div className="relative flex min-h-[340px] flex-col justify-center overflow-hidden border-b border-white/[.08] bg-[radial-gradient(circle_at_50%_45%,rgba(111,215,230,.16),transparent_58%)] p-7 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="kicker">Bioelectricity · ions in motion</div>
                <h3 className="mt-5 font-display text-3xl leading-tight text-silver-100 sm:text-4xl">Your cells create electrical signals by moving charged ions.</h3>
                <p className="mt-5 text-sm leading-relaxed text-silver-300/82">A cell membrane separates different concentrations of sodium, potassium, calcium, and chloride. When protein channels open, ions cross the membrane and briefly change its voltage. That traveling voltage change is an action potential.</p>
              </div>

              <div className="p-7 sm:p-10">
                <p className="font-display italic text-3xl leading-tight text-silver-100 sm:text-4xl">
                  “Without bioelectricity, there would be no coordinated movement.”
                </p>
                <p className="mt-5 text-base leading-relaxed text-silver-300/85">
                  The core idea is real: tiny ion currents across cell membranes allow nerves to transmit signals and muscles to contract. Sodium, potassium, calcium, chloride, and other ions carry charge; channels and ATP-powered pumps maintain the gradients that make rapid signaling possible. Those signals help us move, sense, think, and coordinate organ function. <Cite ids={57} />
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Gradients", "Na⁺, K⁺ and Ca²⁺ are kept at unequal concentrations across membranes."],
                    ["Signals", "Opening ion channels changes membrane voltage and carries information."],
                    ["Energy", "ATP powers pumps that restore and maintain those ion gradients."],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-2xl border border-white/[.09] bg-white/[.035] p-4">
                      <h3 className="font-display text-lg text-aqua-100">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-silver-300/78">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/[.08] bg-white/[.025] px-7 py-6 sm:px-10">
              <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-start">
                <span className="inline-flex w-fit rounded-full border border-amber-200/25 bg-amber-200/[.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-amber-100">Language check</span>
                <p className="text-sm leading-relaxed text-silver-300/82">
                  Food supplies <strong className="text-silver-100">chemical energy</strong>, not a special electrical charge determined by whether it is “alkaline.” During metabolism, NADH and FADH₂ carry electrons to the mitochondrial respiratory chain, which helps convert food energy into ATP. Fruits, vegetables, legumes, nuts, and seeds can be excellent foods because of their nutrients and dietary pattern—not because their pH makes the body alkaline. Cooked food is not “dead food”: preparation may decrease some nutrients while improving the safety, digestibility, or availability of others. <Cite ids={[53, 58]} />
                </p>
              </div>
            </div>

            <div className="border-t border-white/[.08] bg-[linear-gradient(135deg,rgba(111,215,230,.07),rgba(255,255,255,.018))] px-7 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
                <div>
                  <div className="kicker">An interpretive lens · clearly labeled</div>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-silver-100 sm:text-3xl">
                    Where “healing is voltage” fits—and where it goes further.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-silver-300/82">
                    Dr. Jerry Tennant uses a memorable chain—electrical potential → cellular function → energy → repair—to connect bioelectricity with health. It is a useful prompt for exploring cell biology, but the whole-body disease framework and his specific voltage thresholds are <strong className="text-silver-100">Tennant’s proposed model</strong>, not universal clinical reference ranges. <Cite ids={61} />
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=e9CabCf0jB0&t=460s"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-aqua-200 transition hover:text-aqua-100"
                  >
                    Watch the core bridge · 07:40–18:54 <span aria-hidden>↗</span>
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      label: "Established",
                      title: "Cells are electrochemical systems.",
                      body: "Ion gradients create membrane potentials; mitochondrial proton gradients help drive ATP synthesis.",
                      tone: "border-aqua-200/20 bg-aqua-300/[.055]",
                    },
                    {
                      label: "Actively studied",
                      title: "Voltage can carry biological information.",
                      body: "Endogenous bioelectric signals influence growth, patterning, cell migration, wound healing, and regeneration in experimental systems.",
                      tone: "border-white/[.1] bg-white/[.035]",
                    },
                    {
                      label: "Keep distinct",
                      title: "pH, redox state, and voltage are related—not interchangeable.",
                      body: "Each describes a different property and requires its own measurement. No single millivolt value diagnoses chronic disease.",
                      tone: "border-amber-200/20 bg-amber-200/[.045]",
                    },
                  ].map(({ label, title, body, tone }) => (
                    <article key={label} className={`rounded-2xl border p-5 ${tone}`}>
                      <div className="text-[10px] font-semibold uppercase tracking-[.16em] text-aqua-300/85">{label}</div>
                      <h4 className="mt-3 font-display text-lg leading-snug text-silver-100">{title}</h4>
                      <p className="mt-3 text-xs leading-relaxed text-silver-300/78">
                        {body} {label === "Actively studied" && <Cite ids={62} />}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal><div className="mt-8"><RespirationStageExplorer /></div></Reveal>

        <Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <article className="rounded-[1.75rem] border border-aqua-300/20 bg-aqua-300/[.055] p-6 sm:p-8">
              <div className="kicker">Function, dysfunction, and disease</div>
              <h3 className="mt-4 font-display text-2xl text-silver-100 sm:text-3xl">Mitochondria are central—without being the only determinant of health.</h3>
              <p className="mt-4 text-sm leading-relaxed text-silver-300/85 sm:text-base">
                Mitochondria support ATP production, calcium handling, redox signaling, and programmed cell death. When electron flow and antioxidant defenses become imbalanced, excess reactive oxygen species can damage lipids, proteins, and DNA. Mitochondrial dysfunction is involved in many inflammatory, metabolic, neurodegenerative, and age-related conditions, but it is one part of complex disease biology—not a single master cause. <Cite ids={[51, 52, 49]} />
              </p>
              <p className="mt-4 text-sm leading-relaxed text-silver-300/78">
                A current textbook estimate is roughly <strong className="text-silver-100">30–32 ATP per glucose</strong> in aerobic mammalian cells, with the exact yield varying by cell type, shuttle systems, substrate, and physiological conditions. That is why the older “34–36 ATP” figure has been removed. <Cite ids={53} />
              </p>
            </article>

            <aside className="overflow-hidden rounded-[1.75rem] border border-white/[.1] bg-[#10243B]/75">
              <ImageZoom
                src="/science/mitochondria-ros-signaling.jpeg"
                alt="Scientific figure identifying major mitochondrial sources of reactive oxygen species and contrasting normal signaling with oxidative stress."
                className="aspect-square rounded-none border-0 bg-white"
                imageClassName="object-contain"
              />
              <div className="p-6 sm:p-8">
              <div className="kicker">A crucial distinction</div>
              <h3 className="mt-4 font-display text-2xl text-silver-100">ROS are signals and stressors.</h3>
              <p className="mt-4 text-sm leading-relaxed text-silver-300/82">
                Mitochondria can generate superoxide and hydrogen peroxide at several sites, including respiratory complexes I and III. Controlled ROS participate in normal signaling. Oxidative stress describes the damaging imbalance that arises when oxidant production exceeds the cell’s control and repair capacity. <Cite ids={[49, 52]} />
              </p>
              </div>
            </aside>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-[1.75rem] border border-white/[.1] bg-[#0C2037]/80 p-6 sm:p-8">
            <div className="kicker">Where the product conversation fits</div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div><h3 className="font-display text-xl text-silver-100">Molecular hydrogen</h3><p className="mt-3 text-sm leading-relaxed text-silver-300/80">H₂ is studied as a possible redox-signaling modulator. It is not NADH, a free electron supply, or a normal fuel in the human respiratory chain. Mechanistic interest does not prove a clinical result. <Cite ids={[1, 49]} /></p></div>
              <div><h3 className="font-display text-xl text-silver-100">What can be measured</h3><p className="mt-3 text-sm leading-relaxed text-silver-300/80">Water pH and ORP describe a water sample. V̇O₂ describes oxygen use at the body or tissue level. ATP production, mitochondrial membrane potential, ROS, and clinical outcomes require their own biological measurements.</p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
