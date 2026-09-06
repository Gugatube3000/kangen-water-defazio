import { useState } from "react";
import { Cite } from "./Cite";

const PHASES = [
  { title: "1 · Rest", voltage: "About −70 mV", text: "A resting neuron is slightly negative inside. Unequal ion concentrations and selective channels create this voltage.", ion: "Na⁺ outside · K⁺ inside", x: 80, y: 160 },
  { title: "2 · Trigger", voltage: "Threshold reached", text: "A strong enough stimulus opens voltage-sensitive sodium channels. Positive sodium ions enter: the voltage rises rapidly.", ion: "Na⁺ ↓ enters", x: 195, y: 90 },
  { title: "3 · Recover", voltage: "Voltage falls", text: "Sodium channels inactivate. Potassium channels let positive potassium ions leave, making the inside negative again.", ion: "K⁺ ↑ leaves", x: 290, y: 140 },
  { title: "4 · Ready again", voltage: "Return to rest", text: "Potassium channels close after a brief undershoot. ATP-powered pumps continually maintain the ion gradients for future signals.", ion: "ATP → pumps maintain gradients", x: 395, y: 160 },
];

export function ActionPotential() {
  const [phase, setPhase] = useState(0);
  const active = PHASES[phase];
  return <div className="mt-5">
    <h3 className="font-display text-2xl text-silver-100">How a nerve cell sends a signal</h3>
    <svg viewBox="0 0 460 235" className="my-4 w-full" role="img" aria-label={`Action potential graph. ${active.voltage}. ${active.ion}.`}>
      <path d="M45 30V195H435" fill="none" stroke="#819bad" />
      <path d="M45 160H435" stroke="#819bad" strokeDasharray="5 5" opacity=".5" />
      <text x="5" y="22" fill="#b8d3e4" fontSize="13">mV</text><text x="4" y="165" fill="#b8d3e4" fontSize="13">−70</text>
      <path d="M45 160H130 Q160 160 175 125 L210 40 Q220 20 230 55 L280 130 Q310 210 345 175 Q365 158 395 160H435" fill="none" stroke="#6fd7e6" strokeWidth="4" />
      <circle cx={active.x} cy={active.y} r="9" fill="#f3cf77" stroke="#fff" strokeWidth="2" />
      <text x="235" y="226" textAnchor="middle" fill="#b8d3e4" fontSize="14">Time → a few milliseconds (schematic)</text>
    </svg>
    <div className="grid grid-cols-2 gap-2">{PHASES.map((p, i) => <button type="button" key={p.title} aria-pressed={i === phase} onClick={() => setPhase(i)} className={`rounded-xl border p-3 text-left text-sm ${i === phase ? "border-aqua-200 bg-aqua-300/15 text-white" : "border-white/20 text-silver-200"}`}>{p.title}</button>)}</div>
    <div aria-live="polite" className="mt-4 min-h-44 text-base leading-relaxed text-silver-200"><p className="font-semibold text-aqua-200">{active.ion}</p><p className="mt-2">{active.text}</p></div>
    <p className="text-sm text-silver-300">This is a typical neuron; voltages differ between cell types. A wave of channel opening carries the signal along the nerve. <a className="text-aqua-200 underline" href="https://www.ncbi.nlm.nih.gov/books/NBK538143/" target="_blank" rel="noopener noreferrer">Physiology source</a></p>
    <p className="mt-3 text-sm text-silver-300">A water ionizer uses electricity to drive reactions in water. Drinking its output has not been shown to recharge membrane voltage. Dr. Jerry Tennant’s “Healing is Voltage” analogy should not be taken as evidence of that effect.</p>
  </div>;
}

export function ROSDiagram() {
  return <figure className="mt-5">
    <div className="rounded-2xl border border-aqua-200/40 p-4 text-center text-sm text-silver-100">
      <p className="text-aqua-200">Inside the mitochondrion</p>
      <p className="mt-3">Complex I · Complex III · other fuel-processing enzymes</p>
      <p className="my-2 text-amber-200">A small share of electrons reacts with oxygen ↓</p>
      <p className="text-lg">O₂•⁻ <span className="text-sm">Superoxide</span></p>
      <p className="my-2 text-aqua-200">↓ Superoxide dismutase (SOD)</p>
      <p className="text-lg">H₂O₂ <span className="text-sm">Hydrogen peroxide</span></p>
    </div>
    <div className="grid grid-cols-2 gap-3 pt-3 text-sm leading-relaxed">
      <div className="rounded-xl border border-aqua-200/30 p-3"><p className="font-semibold text-aqua-200">↓ Brief, controlled</p><p className="mt-2">Local messages help cells adapt. Antioxidant enzymes limit and clear the signal.</p></div>
      <div className="rounded-xl border border-amber-200/30 p-3"><p className="font-semibold text-amber-200">↓ Excess, prolonged</p><p className="mt-2">Oxidants overwhelm control and repair, contributing to cellular damage.</p></div>
    </div>
    <figcaption className="mt-3 text-sm text-silver-300">Hydrogen peroxide is a ROS, but is not a free radical. Location, amount, and duration matter. <Cite ids={[49, 52]} /></figcaption>
  </figure>;
}

export function OxidativeDamage() {
  const [damage, setDamage] = useState(false);
  return <section className="mt-10 rounded-3xl border border-white/15 bg-navy-950/50 p-6 sm:p-8" aria-label="Oxidative damage at the cellular level">
    <h3 className="font-display text-3xl text-silver-100">When oxidation overwhelms a cell</h3>
    <div className="mt-5 flex flex-wrap gap-3">{[false, true].map(v => <button type="button" key={String(v)} aria-pressed={damage === v} onClick={() => setDamage(v)} className={`rounded-xl border px-4 py-3 ${damage === v ? "border-aqua-200 bg-aqua-300/15 text-white" : "border-white/20 text-silver-200"}`}>{v ? "Excess oxidative stress" : "Balanced signaling"}</button>)}</div>
    <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
      <svg viewBox="0 0 460 280" role="img" aria-label={damage ? "Cell with membrane disruption, altered proteins and DNA damage" : "Cell with intact membrane, proteins and DNA"} className="w-full">
        <ellipse cx="230" cy="140" rx="204" ry="112" fill="#122d43" stroke={damage ? "#f3b276" : "#80dccc"} strokeWidth="5" strokeDasharray={damage ? "35 12 70 7" : undefined} />
        <ellipse cx="220" cy="145" rx="69" ry="64" fill="#243956" stroke="#b0c0f4" strokeWidth="2" />
        <path d={damage ? "M192 106L230 123M211 144L246 174M246 106L211 131M222 152L192 174" : "M192 106L246 174M246 106L192 174M204 121H234M209 156H233"} stroke="#c6d6ff" strokeWidth="4" />
        <path d={damage ? "M75 148L95 121L110 159L137 124" : "M75 140Q90 112 105 140T137 140"} fill="none" stroke="#80dccc" strokeWidth="6" />
        <text x="197" y="230" fill="#dcecf6" fontSize="15">DNA</text><text x="59" y="189" fill="#dcecf6" fontSize="15">Protein</text><text x="282" y="63" fill="#dcecf6" fontSize="15">Membrane</text>
        {(damage ? [[60,75],[140,80],[300,130],[354,100],[360,180],[140,215]] : [[320,140],[135,75]]).map(([x,y]) => <g key={`${x}-${y}`}><circle cx={x} cy={y} r="13" fill={damage ? "#f3b276" : "#6fd7e6"}/><text x={x} y={y+5} textAnchor="middle" fontSize="14" fill="#10243b">•</text></g>)}
      </svg>
      <div aria-live="polite" className="text-base leading-relaxed text-silver-200"><p>{damage ? "Excess oxidation can start chain reactions in membrane fats, change protein function, and damage DNA. Defenses and repair systems determine whether injury persists." : "Small, localized ROS signals help regulate cell activity. Antioxidant networks and repair systems keep these reactions under control."}</p><p className="mt-4">Some antioxidants donate an electron or hydrogen atom to interrupt radical reactions. Their products are then stabilized or recycled by other defenses. This simplified diagram shows a mechanism, not a product’s effect. <Cite ids={[49, 52]} /></p></div>
    </div>
  </section>;
}
