import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type Focus = "overview" | "fuel" | "etc" | "ros" | "context";

const VIEWS: { id: Focus; label: string }[] = [
  { id: "overview", label: "Live overview" },
  { id: "fuel", label: "Fuel + Krebs" },
  { id: "etc", label: "Electron transport" },
  { id: "ros", label: "ROS balance" },
  { id: "context", label: "H₂ context" },
];

function FlowDot({ path, delay = 0, color = "#9CE8F0", duration = 4 }: { path: string; delay?: number; color?: string; duration?: number }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;
  return <motion.circle r="5" fill={color} filter="url(#mito-glow)"><animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" path={path} /></motion.circle>;
}

function Label({ x, y, children, anchor = "middle", small = false }: { x: number; y: number; children: React.ReactNode; anchor?: "start" | "middle" | "end"; small?: boolean }) {
  return <text x={x} y={y} textAnchor={anchor} fill={small ? "#AFC3D1" : "#EAF8FA"} fontSize={small ? 11 : 14} fontWeight={small ? 500 : 650}>{children}</text>;
}

function Pathway({ d, active = true, color = "#66D5E5", dashed = false }: { d: string; active?: boolean; color?: string; dashed?: boolean }) {
  return <path d={d} fill="none" stroke={color} strokeWidth={active ? 2.5 : 1.25} strokeOpacity={active ? .85 : .16} strokeDasharray={dashed ? "7 7" : undefined} />;
}

export function MitochondrialRespirationStory() {
  const [focus, setFocus] = useState<Focus>("overview");
  const reduceMotion = useReducedMotion();
  const on = (...views: Focus[]) => focus === "overview" || views.includes(focus);
  const fuel = on("fuel");
  const etc = on("etc");
  const ros = on("ros");
  const context = on("context");

  return (
    <figure className="overflow-hidden rounded-[2rem] border border-white/[0.14] bg-[#081A2E]/90 shadow-2xl shadow-navy-950/35">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.09] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <motion.span className="h-2.5 w-2.5 rounded-full bg-aqua-300" animate={reduceMotion ? undefined : { opacity: [.45, 1, .45] }} transition={{ duration: 1.8, repeat: Infinity }} />
          <span className="text-[10px] font-semibold uppercase tracking-ultra text-aqua-100/90">Living mitochondrial map · pathways run together</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[.16em] text-silver-300/65">Simplified · not to scale</span>
      </div>

      <div className="relative overflow-x-auto bg-[linear-gradient(rgba(164,231,240,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(164,231,240,.04)_1px,transparent_1px)] bg-[size:32px_32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <svg viewBox="0 0 1180 650" role="img" aria-labelledby="mito-title mito-desc" className="min-w-[920px] w-full">
          <title id="mito-title">Animated map of cellular respiration in and around a mitochondrion</title>
          <desc id="mito-desc">Glucose becomes pyruvate, pyruvate feeds the Krebs cycle, NADH and FADH2 carry electrons to the respiratory chain, protons drive ATP synthase, oxygen becomes water, and a small branch shows mitochondrial reactive oxygen species.</desc>
          <defs>
            <filter id="mito-glow"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <linearGradient id="mito-fill" x1="0" x2="1"><stop stopColor="#102D47" /><stop offset="1" stopColor="#153A50" /></linearGradient>
            <linearGradient id="mito-membrane" x1="0" x2="1"><stop stopColor="#3AA5B8" /><stop offset="1" stopColor="#82E3E8" /></linearGradient>
          </defs>

          <text x="48" y="55" fill="#7DC8D5" fontSize="12" fontWeight="700" letterSpacing="3">CYTOSOL</text>
          <g opacity={fuel ? 1 : .22}>
            <rect x="42" y="93" width="170" height="82" rx="24" fill="#12324A" stroke="#5FCADA" strokeWidth="2" />
            <Label x={127} y={124}>Glucose</Label><Label x={127} y={148} small>6-carbon fuel</Label>
            <Pathway d="M 212 134 C 250 134, 260 134, 292 134" active={fuel} />
            <rect x="292" y="88" width="185" height="92" rx="25" fill="#12324A" stroke="#5FCADA" strokeWidth="2" />
            <Label x={384} y={119}>Glycolysis</Label><Label x={384} y={143} small>net 2 ATP + 2 NADH</Label><Label x={384} y={160} small>2 pyruvate</Label>
            <FlowDot path="M 215 134 C 250 134, 260 134, 288 134" />
          </g>

          <path d="M 505 80 C 670 26, 1020 58, 1100 218 C 1182 380, 1055 564, 782 594 C 558 620, 423 522, 452 342 C 469 236, 428 106, 505 80 Z" fill="url(#mito-fill)" stroke="#68D6E3" strokeWidth="3" opacity=".96" />
          <text x="1032" y="93" textAnchor="end" fill="#8ADCE6" fontSize="12" fontWeight="700" letterSpacing="2.5">MITOCHONDRION</text>

          <g opacity={fuel ? 1 : .22}>
            <Pathway d="M 477 134 C 520 134, 520 190, 563 190" active={fuel} />
            <FlowDot path="M 480 134 C 520 134, 520 190, 559 190" delay={.8} />
            <rect x="560" y="151" width="176" height="78" rx="23" fill="#17384C" stroke="#65D4DF" strokeWidth="2" />
            <Label x={648} y={181}>Pyruvate → acetyl-CoA</Label><Label x={648} y={204} small>NADH + CO₂</Label>
            <Pathway d="M 648 229 C 648 258, 648 270, 648 293" active={fuel} />
            <circle cx="648" cy="385" r="91" fill="#0C263D" stroke="#65D4DF" strokeWidth="2.5" />
            <circle cx="648" cy="385" r="67" fill="none" stroke="#4DB6C7" strokeWidth="2" strokeDasharray="8 7" />
            <motion.circle cx="648" cy="318" r="7" fill="#9CE8F0" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "648px 385px" }} />
            <Label x={648} y={378}>Krebs / TCA cycle</Label><Label x={648} y={401} small>per glucose: 6 NADH</Label><Label x={648} y={418} small>2 FADH₂ + 2 GTP/ATP</Label><Label x={543} y={350} small>CO₂ out</Label>
          </g>

          <g opacity={etc ? 1 : .22}>
            <Pathway d="M 718 326 C 770 278, 810 246, 842 224" active={etc} color="#F3CF77" /><Label x={760} y={275} small>NADH</Label>
            <Pathway d="M 729 414 C 793 398, 817 353, 862 337" active={etc} color="#E9A86D" /><Label x={783} y={397} small>FADH₂</Label>
            <path d="M 760 160 C 805 205, 824 150, 867 195 C 910 240, 930 151, 978 199 C 1027 247, 1046 169, 1082 205" fill="none" stroke="url(#mito-membrane)" strokeWidth="9" strokeLinecap="round" opacity=".55" />
            <path d="M 760 224 C 805 269, 824 214, 867 259 C 910 304, 930 215, 978 263 C 1027 311, 1046 233, 1082 269" fill="none" stroke="url(#mito-membrane)" strokeWidth="9" strokeLinecap="round" opacity=".55" />
            <Label x={924} y={144} small>INTERMEMBRANE SPACE · H⁺ reservoir</Label>
            {[805, 882, 960, 1035].map((x, i) => <g key={x}><rect x={x - 22} y="175" width="44" height="78" rx="14" fill="#173B52" stroke="#86E2E8" strokeWidth="2" /><Label x={x} y={220}>{i === 3 ? "IV" : i === 2 ? "III" : i === 1 ? "II" : "I"}</Label></g>)}
            <Pathway d="M 805 214 C 834 197, 852 236, 882 214 C 910 192, 931 236, 960 214 C 988 192, 1007 236, 1035 214" active={etc} color="#F3CF77" />
            <FlowDot path="M 805 214 C 834 197, 852 236, 882 214 C 910 192, 931 236, 960 214 C 988 192, 1007 236, 1035 214" color="#FFE18B" duration={3.5} />
            <Label x={918} y={286} small>electron flow</Label>
            {[805, 960, 1035].map((x, i) => <motion.text key={x} x={x} y="164" textAnchor="middle" fill="#9CE8F0" fontSize="13" fontWeight="700" animate={reduceMotion ? undefined : { y: [172, 132], opacity: [0, 1, 0] }} transition={{ duration: 2.5, delay: i * .45, repeat: Infinity }}>H⁺</motion.text>)}
            <Label x={1100} y={205} anchor="start">O₂</Label><Label x={1100} y={225} anchor="start" small>final acceptor</Label><Pathway d="M 1082 214 L 1112 270" active={etc} /><Label x={1120} y={290} anchor="end">H₂O</Label>
            <g transform="translate(912 474)"><rect x="-31" y="-105" width="62" height="100" rx="21" fill="#173B52" stroke="#87E4E9" strokeWidth="2" /><motion.g animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}><circle cy="16" r="39" fill="#12364B" stroke="#87E4E9" strokeWidth="2" /><path d="M 0 -12 V 44 M -28 16 H 28" stroke="#87E4E9" strokeWidth="3" /></motion.g><Label x={0} y={74}>ATP synthase</Label><Label x={0} y={94} small>ADP + Pi → ATP</Label></g>
            <Pathway d="M 912 145 L 912 362" active={etc} color="#9CE8F0" /><FlowDot path="M 912 145 L 912 360" delay={1.2} color="#B9F6F2" duration={2.8} />
            <motion.g animate={reduceMotion ? undefined : { y: [0, -7, 0], opacity: [.65, 1, .65] }} transition={{ duration: 2, repeat: Infinity }}><rect x="1010" y="450" width="105" height="54" rx="20" fill="#1B4D59" stroke="#83E0D2" /><Label x={1062} y={482}>ATP</Label></motion.g><Pathway d="M 952 474 L 1008 474" active={etc} color="#83E0D2" />
          </g>

          <g opacity={ros ? 1 : .18}>
            <Pathway d="M 960 233 C 999 315, 1025 338, 1062 350" active={ros} color="#F6A66D" dashed />
            <motion.circle cx="1064" cy="350" r="30" fill="#4A2E2A" stroke="#F6A66D" animate={reduceMotion ? undefined : { scale: [.96, 1.05, .96] }} transition={{ duration: 2.3, repeat: Infinity }} />
            <Label x={1064} y={345}>O₂•⁻</Label><Label x={1064} y={365} small>superoxide</Label>
            <rect x="987" y="390" width="158" height="46" rx="17" fill="#342B31" stroke="#C78768" /><Label x={1066} y={410} small>signal at controlled levels</Label><Label x={1066} y={426} small>stress when defenses lose balance</Label>
          </g>

          <g opacity={context ? 1 : .2}>
            <rect x="45" y="267" width="355" height="280" rx="30" fill="#0C263D" stroke="#557C91" strokeWidth="1.5" />
            <text x="72" y="302" fill="#8ADCE6" fontSize="11" fontWeight="700" letterSpacing="2">KEEP THE SYMBOLS STRAIGHT</text>
            {[["H⁺", "proton · powers ATP synthase"], ["H₂O", "water · product at Complex IV"], ["•OH", "hydroxyl radical · highly reactive"], ["OH⁻", "hydroxide ion · not the hydroxyl radical"], ["H₂", "molecular hydrogen · separate research topic"], ["V̇O₂", "oxygen-use measurement · not a metabolite"]].map(([symbol, meaning], i) => <g key={symbol} transform={`translate(72 ${340 + i * 35})`}><text fill={i === 4 ? "#F3CF77" : "#DDF8FB"} fontSize="16" fontWeight="750">{symbol}</text><text x="58" fill="#AFC3D1" fontSize="12">{meaning}</text></g>)}
          </g>
        </svg>
        <span className="pointer-events-none sticky bottom-3 left-3 inline-flex rounded-full border border-white/10 bg-navy-950/85 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-aqua-100 backdrop-blur lg:hidden">Swipe diagram →</span>
      </div>

      <figcaption className="border-t border-white/[0.09] px-5 py-6 sm:px-7">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Focus the mitochondrial map">
          {VIEWS.map((view) => <button key={view.id} type="button" role="tab" aria-selected={focus === view.id} onClick={() => setFocus(view.id)} className={`min-h-11 rounded-xl border px-4 text-[10px] font-semibold uppercase tracking-[.13em] transition ${focus === view.id ? "border-aqua-300/45 bg-aqua-300/[.12] text-aqua-100" : "border-white/[.09] bg-white/[.025] text-silver-300/70 hover:border-white/20 hover:text-silver-100"}`}>{view.label}</button>)}
        </div>
        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-silver-300/82">The map keeps every pathway visible because respiration is continuous and coupled. Use the controls to emphasize one layer; dimmed pathways remain part of the same system.</p>
      </figcaption>
    </figure>
  );
}
