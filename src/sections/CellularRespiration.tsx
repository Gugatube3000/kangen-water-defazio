import { Cite } from "@/components/Cite";
import { MitochondrialRespirationStory } from "@/components/MitochondrialRespirationStory";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { RespirationStageExplorer } from "@/components/RespirationStageExplorer";

type CellularRespirationProps = { compactIntro?: boolean };

export function CellularRespiration({ compactIntro = false }: CellularRespirationProps) {
  return (
    <section data-section="cellular" data-section-label="Cellular Respiration" className={`${compactIntro ? "px-5 py-14 sm:px-10 md:py-20 lg:px-16" : "section-pad"} relative`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Cellular respiration · the central map"
          title={<><em className="not-italic text-aqua-300">Energy, electrons, oxygen,</em>{" "}and the life of a cell.</>}
          subtitle="Cellular respiration is not one isolated reaction. It is a linked system that converts fuel into ATP while coordinating oxygen use, carbon metabolism, redox signaling, and reactive oxygen species."
        />

        <Reveal>
          <article className="mt-12 overflow-hidden rounded-[2rem] border border-aqua-200/20 bg-[#0B2540]/82 shadow-2xl shadow-navy-950/25 md:mt-16">
            <div className="grid lg:grid-cols-[.92fr_1.08fr]">
              <div className="relative min-h-[340px] overflow-hidden border-b border-white/[.08] bg-[radial-gradient(circle_at_50%_45%,rgba(111,215,230,.16),transparent_58%)] p-7 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="kicker">Bioelectricity · ions in motion</div>
                <svg viewBox="0 0 520 260" role="img" aria-label="Cell membrane diagram showing sodium, potassium and calcium ions participating in electrical signaling" className="mt-6 h-auto w-full">
                  <defs>
                    <linearGradient id="bio-membrane" x1="0" x2="1"><stop stopColor="#61C9D8" /><stop offset="1" stopColor="#B0F0F1" /></linearGradient>
                  </defs>
                  <path d="M 30 106 C 110 76, 177 137, 255 104 C 333 71, 404 139, 490 101" fill="none" stroke="url(#bio-membrane)" strokeWidth="9" strokeLinecap="round" opacity=".7" />
                  <path d="M 30 153 C 110 123, 177 184, 255 151 C 333 118, 404 186, 490 148" fill="none" stroke="url(#bio-membrane)" strokeWidth="9" strokeLinecap="round" opacity=".45" />
                  <rect x="218" y="78" width="76" height="104" rx="27" fill="#12364D" stroke="#9CE8F0" strokeWidth="2" />
                  <path d="M 241 98 L 271 98 L 271 162 L 241 162 Z" fill="#0A2138" stroke="#66D5E5" strokeWidth="1.5" />
                  <text x="256" y="207" textAnchor="middle" fill="#AFCBD8" fontSize="12">ION CHANNEL</text>
                  {[
                    [105, 57, "Na⁺", "#9CE8F0"],
                    [256, 42, "Ca²⁺", "#F3CF77"],
                    [410, 66, "K⁺", "#85DECD"],
                    [116, 219, "K⁺", "#85DECD"],
                    [389, 220, "Na⁺", "#9CE8F0"],
                  ].map(([x, y, label, color]) => (
                    <g key={String(label) + String(x)}>
                      <circle cx={Number(x)} cy={Number(y)} r="24" fill="#14354C" stroke={String(color)} strokeWidth="2" />
                      <text x={Number(x)} y={Number(y) + 5} textAnchor="middle" fill="#F3FBFC" fontSize="13" fontWeight="700">{String(label)}</text>
                    </g>
                  ))}
                  <path d="M 256 54 L 256 74" stroke="#F3CF77" strokeWidth="2" />
                  <path d="M 248 66 L 256 75 L 264 66" fill="none" stroke="#F3CF77" strokeWidth="2" />
                  <text x="35" y="26" fill="#8ADCE6" fontSize="11" fontWeight="700" letterSpacing="2">OUTSIDE THE CELL</text>
                  <text x="35" y="252" fill="#8ADCE6" fontSize="11" fontWeight="700" letterSpacing="2">INSIDE THE CELL</text>
                </svg>
              </div>

              <div className="p-7 sm:p-10">
                <p className="font-display text-3xl leading-tight text-silver-100 sm:text-4xl">
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

        <Reveal><div className="mt-12 md:mt-16"><MitochondrialRespirationStory /></div></Reveal>
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

            <aside className="rounded-[1.75rem] border border-white/[.1] bg-[#10243B]/75 p-6 sm:p-8">
              <div className="kicker">A crucial distinction</div>
              <h3 className="mt-4 font-display text-2xl text-silver-100">ROS are signals and stressors.</h3>
              <p className="mt-4 text-sm leading-relaxed text-silver-300/82">
                Mitochondria can generate superoxide and hydrogen peroxide at several sites, including respiratory complexes I and III. Controlled ROS participate in normal signaling. Oxidative stress describes the damaging imbalance that arises when oxidant production exceeds the cell’s control and repair capacity. <Cite ids={[49, 52]} />
              </p>
            </aside>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-[1.75rem] border border-white/[.1] bg-[#0C2037]/80 p-6 sm:p-8">
            <div className="kicker">Where the product conversation fits</div>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <div><h3 className="font-display text-xl text-silver-100">Molecular hydrogen</h3><p className="mt-3 text-sm leading-relaxed text-silver-300/80">H₂ is studied as a possible redox-signaling modulator. It is not NADH, a free electron supply, or a normal fuel in the human respiratory chain. Mechanistic interest does not prove a clinical result. <Cite ids={[1, 49]} /></p></div>
              <div><h3 className="font-display text-xl text-silver-100">nnEMF and emGuarde</h3><p className="mt-3 text-sm leading-relaxed text-silver-300/80">VGCC activation has been proposed as a mechanism for some non-thermal EMF effects, but it is not established that ordinary compliant exposures cause the chain of calcium influx, DNA damage, inflammation, and aging described in some presentations. Current exposure guidance and health reviews do not establish that consumer EMF products prevent those outcomes. <Cite ids={[54, 55, 56]} /></p></div>
              <div><h3 className="font-display text-xl text-silver-100">What can be measured</h3><p className="mt-3 text-sm leading-relaxed text-silver-300/80">Water pH and ORP describe a water sample. V̇O₂ describes oxygen use at the body or tissue level. ATP production, mitochondrial membrane potential, ROS, and clinical outcomes require their own biological measurements.</p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
