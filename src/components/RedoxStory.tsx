import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Cite } from "@/components/Cite";

type SceneId = 0 | 1 | 2 | 3;

const SCENES = [
  {
    eyebrow: "Start with the definition",
    title: "An unpaired electron makes a species a radical.",
    body: "A free radical can be an atom, molecule, or ion. The dot model is a teaching aid: real electron behavior depends on molecular structure and its surroundings.",
  },
  {
    eyebrow: "When reactions propagate",
    title: "One reaction can create the next reactive species.",
    body: "A radical can react with a nearby biomolecule and leave a new radical behind. When propagation outruns repair and antioxidant defenses, oxidative damage can accumulate.",
  },
  {
    eyebrow: "Antioxidant defense",
    title: "Biology uses networks, not a single magic electron donor.",
    body: "Some antioxidants transfer an electron or hydrogen atom. Enzymes and recycling systems then help terminate or safely manage the products of those reactions.",
  },
  {
    eyebrow: "Then ask the hydrogen question",
    title: "Molecular hydrogen is studied as a redox modulator.",
    body: "Research asks whether H₂ can influence particular oxidative-stress and signaling pathways. The mechanism and clinical relevance depend on the model and outcome; this is not proof of reversing disease or aging.",
  },
] as const;

const ELECTRON_PAIRS = [
  [-28, -40],
  [-14, -47],
  [38, -13],
  [41, 3],
  [-26, 41],
  [-11, 47],
] as const;

function Species({
  x,
  y,
  radical = false,
  label,
}: {
  x: number;
  y: number;
  radical?: boolean;
  label: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="58" fill="#122847" stroke={radical ? "#F6B76B" : "#A4E7F0"} strokeWidth="2" />
      <circle r="21" fill={radical ? "#784127" : "#1F5B73"} stroke={radical ? "#F6B76B" : "#6FD7E6"} strokeWidth="1.5" />
      {ELECTRON_PAIRS.map(([cx, cy], index) => (
        <circle key={index} cx={cx} cy={cy} r="5" fill="#DDF8FB" />
      ))}
      {radical ? (
        <motion.circle
          cx="0"
          cy="-72"
          r="6"
          fill="#F6B76B"
          animate={{ opacity: [0.55, 1, 0.55], scale: [0.9, 1.18, 0.9] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
      <text y="95" textAnchor="middle" fill="#F4F6FB" fontSize="17" fontWeight="650">
        {label}
      </text>
      <text y="118" textAnchor="middle" fill={radical ? "#F6B76B" : "#9CDDE8"} fontSize="12">
        {radical ? "unpaired electron" : "paired-electron example"}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const headX = x2 - Math.cos(angle) * 10;
  const headY = y2 - Math.sin(angle) * 10;
  const leftX = headX - Math.cos(angle - Math.PI / 2) * 6;
  const leftY = headY - Math.sin(angle - Math.PI / 2) * 6;
  const rightX = headX - Math.cos(angle + Math.PI / 2) * 6;
  const rightY = headY - Math.sin(angle + Math.PI / 2) * 6;
  return (
    <g>
      <line x1={x1} y1={y1} x2={headX} y2={headY} stroke="#8FDCE8" strokeWidth="2" />
      <path d={`M ${leftX} ${leftY} L ${x2} ${y2} L ${rightX} ${rightY}`} fill="none" stroke="#8FDCE8" strokeWidth="2" />
    </g>
  );
}

function RadicalDefinition() {
  return (
    <>
      <Species x={270} y={230} label="Non-radical example" />
      <Arrow x1={365} y1={230} x2={500} y2={230} />
      <text x="432" y="208" textAnchor="middle" fill="#B7C9D8" fontSize="13">reaction or bond change</text>
      <Species x={690} y={230} radical label="Radical species" />
    </>
  );
}

function ChainReaction() {
  return (
    <>
      <Species x={190} y={235} radical label="Radical" />
      <Arrow x1={285} y1={235} x2={380} y2={235} />
      <g transform="translate(480 235)">
        <rect x="-82" y="-50" width="164" height="100" rx="50" fill="#183A53" stroke="#7ED7E5" strokeWidth="2" />
        <circle cx="-34" cy="0" r="18" fill="#2B7183" />
        <circle cx="34" cy="0" r="18" fill="#2B7183" />
        <line x1="-16" y1="0" x2="16" y2="0" stroke="#DDF8FB" strokeWidth="3" />
        <text y="88" textAnchor="middle" fill="#F4F6FB" fontSize="17" fontWeight="650">Nearby biomolecule</text>
      </g>
      <Arrow x1={580} y1={235} x2={675} y2={235} />
      <g transform="translate(775 235)">
        <rect x="-82" y="-50" width="164" height="100" rx="50" fill="#4A2C2A" stroke="#F6B76B" strokeWidth="2" />
        <circle cx="-34" cy="0" r="18" fill="#7A453B" />
        <circle cx="34" cy="0" r="18" fill="#7A453B" />
        <motion.circle cx="72" cy="-60" r="6" fill="#F6B76B" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <text y="88" textAnchor="middle" fill="#F4F6FB" fontSize="17" fontWeight="650">New reactive product</text>
      </g>
      <motion.circle
        r="5"
        fill="#DDF8FB"
        animate={{ cx: [390, 470, 560], cy: [220, 235, 220], opacity: [0, 1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <text x="480" y="380" textAnchor="middle" fill="#B7C9D8" fontSize="14">Propagation can continue until a defense or termination reaction interrupts it.</text>
    </>
  );
}

function AntioxidantDefense() {
  return (
    <>
      <Species x={185} y={230} radical label="Reactive species" />
      <g transform="translate(475 230)">
        <circle r="68" fill="#143C4C" stroke="#75D7C6" strokeWidth="2" />
        <text y="-5" textAnchor="middle" fill="#E7FFFA" fontSize="27" fontWeight="700">AH</text>
        <text y="20" textAnchor="middle" fill="#A4E7F0" fontSize="12">antioxidant example</text>
        <motion.circle cx="-73" cy="0" r="6" fill="#DDF8FB" animate={{ cx: [-73, -120, -190], opacity: [0.3, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} />
      </g>
      <Arrow x1={395} y1={230} x2={295} y2={230} />
      <Arrow x1={555} y1={230} x2={650} y2={230} />
      <g transform="translate(760 230)">
        <circle r="74" fill="#122847" stroke="#7ED7E5" strokeWidth="2" />
        <path d="M -28 0 L -8 20 L 34 -24" fill="none" stroke="#75D7C6" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <text y="108" textAnchor="middle" fill="#F4F6FB" fontSize="17" fontWeight="650">Managed by a defense network</text>
      </g>
      <text x="340" y="190" textAnchor="middle" fill="#9CDDE8" fontSize="13">transfer</text>
      <text x="605" y="190" textAnchor="middle" fill="#9CDDE8" fontSize="13">recycling / termination</text>
      <text x="480" y="380" textAnchor="middle" fill="#B7C9D8" fontSize="14">The donor and reaction products are handled by connected antioxidant and enzyme systems.</text>
    </>
  );
}

function HydrogenResearch() {
  return (
    <>
      <g transform="translate(190 230)">
        <circle cx="-30" r="34" fill="#153E57" stroke="#9CE8F0" strokeWidth="2" />
        <circle cx="30" r="34" fill="#153E57" stroke="#9CE8F0" strokeWidth="2" />
        <text x="-30" y="8" textAnchor="middle" fill="#F4F6FB" fontSize="24" fontWeight="700">H</text>
        <text x="30" y="8" textAnchor="middle" fill="#F4F6FB" fontSize="24" fontWeight="700">H</text>
        <text y="92" textAnchor="middle" fill="#F4F6FB" fontSize="17" fontWeight="650">Molecular hydrogen</text>
      </g>
      <path d="M 285 230 C 365 230, 390 190, 465 190" fill="none" stroke="#8FDCE8" strokeWidth="2" strokeDasharray="7 8" />
      <g transform="translate(680 230)">
        <rect x="-185" y="-112" width="370" height="224" rx="34" fill="#102944" stroke="#6FD7E6" strokeWidth="2" />
        <text y="-68" textAnchor="middle" fill="#A4E7F0" fontSize="13" letterSpacing="2">RESEARCH QUESTION</text>
        <g transform="translate(-110 -12)">
          <circle r="29" fill="#55352F" stroke="#F6B76B" />
          <text y="5" textAnchor="middle" fill="#FFF1DF" fontSize="12">ROS</text>
        </g>
        <Arrow x1={-70} y1={-12} x2={-12} y2={-12} />
        <g transform="translate(48 -12)">
          <circle r="34" fill="#17435B" stroke="#7ED7E5" />
          <text y="5" textAnchor="middle" fill="#E7F8FB" fontSize="12">signal</text>
        </g>
        <Arrow x1={92} y1={-12} x2={130} y2={-12} />
        <text y="72" textAnchor="middle" fill="#F4F6FB" fontSize="16" fontWeight="650">Can H₂ influence specific redox pathways?</text>
      </g>
      <text x="480" y="395" textAnchor="middle" fill="#B7C9D8" fontSize="14">Promising mechanisms are hypotheses to test—not automatic clinical outcomes.</text>
    </>
  );
}

function SceneGraphic({ scene }: { scene: SceneId }) {
  return (
    <svg
      viewBox="0 0 960 470"
      role="img"
      aria-label={SCENES[scene].title}
      className="h-auto w-full"
    >
      <AnimatePresence mode="wait">
        <motion.g
          key={scene}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {scene === 0 ? <RadicalDefinition /> : null}
          {scene === 1 ? <ChainReaction /> : null}
          {scene === 2 ? <AntioxidantDefense /> : null}
          {scene === 3 ? <HydrogenResearch /> : null}
        </motion.g>
      </AnimatePresence>
    </svg>
  );
}

export function RedoxStory({ compact = false }: { compact?: boolean }) {
  const [scene, setScene] = useState<SceneId>(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setTimeout(
      () => setScene((current) => ((current + 1) % SCENES.length) as SceneId),
      6200,
    );
    return () => window.clearTimeout(timer);
  }, [scene, paused, reduceMotion]);

  const current = SCENES[scene];

  return (
    <figure
      className="overflow-hidden rounded-[2rem] border border-white/[0.13] bg-[#0B1E36]/80 shadow-2xl shadow-navy-950/25 backdrop-blur-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-aqua-300" />
          <span className="text-[10px] font-semibold uppercase tracking-ultra text-aqua-100/85">
            Interactive redox explainer
          </span>
        </div>
        <span className="font-mono text-xs text-silver-300/55">
          {String(scene + 1).padStart(2, "0")} / 04
        </span>
      </div>

      <div
        className="relative overflow-x-auto bg-[linear-gradient(rgba(164,231,240,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(164,231,240,.045)_1px,transparent_1px)] bg-[size:32px_32px] px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-5"
      >
        <div className="min-w-[640px] sm:min-w-0">
          <SceneGraphic scene={scene} />
        </div>
        <span className="pointer-events-none sticky bottom-3 left-3 inline-flex rounded-full border border-white/10 bg-navy-950/80 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-aqua-100 backdrop-blur sm:hidden">
          Swipe diagram →
        </span>
      </div>

      <figcaption className="border-t border-white/[0.08] px-5 py-6 sm:px-7 sm:py-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className={compact ? "" : "grid gap-4 lg:grid-cols-[.72fr_1.28fr]"}
          >
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-ultra text-aqua-300/75">
                {current.eyebrow}
              </div>
              <h3 className="mt-2 font-display text-2xl leading-tight text-silver-100 sm:text-3xl">
                {current.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-silver-300/78 sm:text-base">
              {current.body} {scene === 3 ? <Cite ids={[1, 49]} /> : <Cite ids={49} />}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 grid grid-cols-4 gap-2" role="tablist" aria-label="Redox animation steps">
          {SCENES.map((item, index) => {
            const active = scene === index;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Step ${index + 1}: ${item.eyebrow}`}
                onClick={() => setScene(index as SceneId)}
                className={`relative min-h-11 overflow-hidden rounded-xl border px-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition sm:px-3 ${
                  active
                    ? "border-aqua-300/40 bg-aqua-300/[0.1] text-aqua-100"
                    : "border-white/[0.08] bg-white/[0.025] text-silver-300/55 hover:border-white/20 hover:text-silver-200"
                }`}
              >
                <span className="relative z-10 hidden sm:inline">{index + 1}. {item.eyebrow}</span>
                <span className="relative z-10 sm:hidden">{String(index + 1).padStart(2, "0")}</span>
                {active && !reduceMotion && !paused ? (
                  <motion.span
                    key={`progress-${scene}`}
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-aqua-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6.2, ease: "linear" }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-silver-400/68">
          This deliberately simplified vector model does not claim that drinking
          water changes cellular pH, that loose electrons circulate in a glass,
          or that a water product restores the body's healing systems.
        </p>
      </figcaption>
    </figure>
  );
}
