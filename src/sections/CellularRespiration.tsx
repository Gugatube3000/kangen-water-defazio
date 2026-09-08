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
          </article>
        </Reveal>

        <Reveal>
          <figure className="mt-12 overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white shadow-2xl md:mt-16">
            <ImageZoom
              src="/science/mitochondrial-ros-production.jpeg"
              alt="Scientific figure showing mitochondrial electron transport, reactive oxygen species production, antioxidant defenses, controlled signaling, and oxidative stress."
              className="aspect-[1.78/1] rounded-none border-0 bg-white"
              imageClassName="object-contain"
            />
            <figcaption className="border-t border-slate-200 bg-white px-6 py-5 text-sm leading-relaxed text-slate-700 sm:px-8">
              Mitochondrial ROS production: normal electron flow can generate reactive oxygen species. At controlled levels they participate in signaling; excess production can overwhelm antioxidant defenses.
            </figcaption>
          </figure>
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
          <figure className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-white shadow-2xl">
            <ImageZoom
              src="/science/oxidative-stress-cellular-injury.jpeg"
              alt="Scientific figure showing how excess reactive oxygen species can damage membranes, proteins, DNA, and cellular organelles and promote inflammation."
              className="aspect-[1.2/1] rounded-none border-0 bg-white"
              imageClassName="object-contain"
            />
            <figcaption className="border-t border-slate-200 bg-white px-6 py-5 text-sm leading-relaxed text-slate-700 sm:px-8">
              When reactive oxygen species exceed the cell’s antioxidant and repair capacity, oxidative stress can damage membranes, proteins, DNA, and organelles and contribute to inflammatory signaling.
            </figcaption>
          </figure>
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
