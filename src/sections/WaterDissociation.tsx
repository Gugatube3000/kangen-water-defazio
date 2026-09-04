import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Cite } from "@/components/Cite";
import { Reveal } from "@/components/Reveal";
import { ScienceVideo } from "@/components/ScienceVideo";

// Animated bubble component — rises from bottom to top of a chamber
function Bubble({
  x,
  delay,
  size,
  color,
  chamberTop,
  chamberBottom,
}: {
  x: number;
  delay: number;
  size: number;
  color: string;
  chamberTop: number;
  chamberBottom: number;
}) {
  return (
    <motion.circle
      cx={x}
      cy={chamberBottom}
      r={size}
      fill={color}
      fillOpacity={0.7}
      stroke={color}
      strokeOpacity={0.4}
      strokeWidth={0.5}
      initial={{ cy: chamberBottom, opacity: 0, scale: 0 }}
      animate={{
        cy: [chamberBottom, chamberBottom - (chamberBottom - chamberTop) * 0.5, chamberTop],
        opacity: [0, 0.8, 0],
        scale: [0.3, 1, 0.7],
      }}
      transition={{
        duration: 3.5 + delay * 0.4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 0.5,
      }}
    />
  );
}

// Ion label that floats down the chamber
function IonDrift({
  x,
  label,
  color,
  chamberTop,
  chamberBottom,
  delay,
}: {
  x: number;
  label: string;
  color: string;
  chamberTop: number;
  chamberBottom: number;
  delay: number;
}) {
  return (
    <motion.text
      x={x}
      y={chamberTop}
      textAnchor="middle"
      fontSize="7"
      fontFamily="Inter, sans-serif"
      fontWeight="600"
      fill={color}
      fillOpacity={0.9}
      initial={{ y: chamberTop, opacity: 0 }}
      animate={{ y: [chamberTop, chamberBottom - 10], opacity: [0, 1, 0] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "linear",
      }}
    >
      {label}
    </motion.text>
  );
}

// Electric arc pulse across the electrode
function ElectricArc({ on }: { on: boolean }) {
  return (
    <AnimatePresence>
      {on && (
        <motion.path
          d="M 220 105 L 228 118 L 220 130 L 228 142 L 220 155 L 228 168 L 220 180"
          fill="none"
          stroke="#FFF176"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: [0, 1, 0.8, 1, 0], pathLength: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
}

export function WaterDissociation() {
  const [arcOn, setArcOn] = useState(false);

  // Pulse the electric arc every 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setArcOn(true);
      setTimeout(() => setArcOn(false), 700);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Chamber geometry (SVG coordinate space: 500 × 360)
  const LEFT_X1 = 50;   // left chamber left wall x
  const LEFT_X2 = 218;  // left chamber right wall x (membrane)
  const RIGHT_X1 = 232; // right chamber left wall x (membrane)
  const RIGHT_X2 = 450; // right chamber right wall x
  const CHAMBER_TOP = 95;
  const CHAMBER_BOTTOM = 240;
  const LEFT_CX = (LEFT_X1 + LEFT_X2) / 2;   // 134
  const RIGHT_CX = (RIGHT_X1 + RIGHT_X2) / 2; // 341

  return (
    <section
      data-section="dissociation"
      data-section-label="Inside the Kangen Ionizer"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(72,199,220,0.08),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          kicker="Electrolysis · Inside the Machine"
          title={
            <>
              What actually happens{" "}
              <em className="not-italic text-aqua-300">
                inside the Kangen ionizer.
              </em>
            </>
          }
          subtitle="When tap water passes through the machine, an electric current runs between platinum-titanium plates separated by a membrane. The membrane routes the two resulting streams: hydrogen-rich alkaline water for drinking on the cathode side, and acidic water for sanitizing on the anode side."
        />

        {/* Lead video — electrolysis cell animation */}
        <div className="mt-12 max-w-3xl mx-auto">
          <ScienceVideo
            src="/videos/electrolysis.mp4"
            badge="Inside the cell"
            caption="Cross-section of an electrolysis cell: platinum-titanium plates with water flowing in, hydrogen (H₂) bubbles rising on the cathode side and oxygen (O₂) on the anode side, splitting into two separate output streams. The labeled schematic below maps the same process step by step."
          />
        </div>

        <div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
          <div className="kicker text-center mb-6">The same process, labeled</div>
          <svg
            viewBox="0 0 500 360"
            className="w-full h-auto"
            aria-label="Cross-section diagram of a Kangen water ionizer showing electrolysis chambers"
          >
            <defs>
              <linearGradient id="machineBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E2A40" />
                <stop offset="100%" stopColor="#0B1228" />
              </linearGradient>
              <linearGradient id="cathodeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(72,199,220,0.18)" />
                <stop offset="100%" stopColor="rgba(72,199,220,0.06)" />
              </linearGradient>
              <linearGradient id="anodeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(244,160,90,0.06)" />
                <stop offset="100%" stopColor="rgba(244,160,90,0.18)" />
              </linearGradient>
              <linearGradient id="plateGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4A5568" />
                <stop offset="50%" stopColor="#718096" />
                <stop offset="100%" stopColor="#4A5568" />
              </linearGradient>
              <linearGradient id="alkOutflow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(72,199,220,0.8)" />
                <stop offset="100%" stopColor="rgba(72,199,220,0.2)" />
              </linearGradient>
              <linearGradient id="acidOutflow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(244,160,90,0.8)" />
                <stop offset="100%" stopColor="rgba(244,160,90,0.2)" />
              </linearGradient>
              <filter id="plateSheen">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                <feSpecularLighting in="blur" surfaceScale="4" specularConstant="1.5" specularExponent="20" result="spec">
                  <fePointLight x="200" y="50" z="80" />
                </feSpecularLighting>
                <feComposite in="spec" in2="SourceAlpha" operator="in" result="specClip" />
                <feBlend in="SourceGraphic" in2="specClip" mode="add" />
              </filter>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* ── Machine outer body ── */}
            <rect x="40" y="60" width="420" height="220" rx="10" fill="url(#machineBody)" stroke="#2D3A55" strokeWidth="1.5" />

            {/* Water IN pipe at top center */}
            <rect x="220" y="30" width="60" height="35" rx="4" fill="#2D3A55" stroke="#3D4E70" strokeWidth="1" />
            <text x="250" y="22" textAnchor="middle" fontSize="8" fontFamily="Inter, sans-serif" fill="#A0AEC0" letterSpacing="1">TAP WATER IN</text>
            <motion.g>
              {[0, 1, 2].map((i) => (
                <motion.line
                  key={i}
                  x1={238 + i * 11}
                  y1={32}
                  x2={238 + i * 11}
                  y2={60}
                  stroke="#48C7DC"
                  strokeWidth="1.5"
                  strokeOpacity={0.6}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: [0, 0.8, 0], y: [0, 8, 0] }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </motion.g>

            {/* ── LEFT CHAMBER (Cathode −) ── */}
            <rect x={LEFT_X1 + 2} y={CHAMBER_TOP} width={LEFT_X2 - LEFT_X1 - 4} height={CHAMBER_BOTTOM - CHAMBER_TOP} fill="url(#cathodeGrad)" rx="4" />

            {/* Cathode plate (left wall, platinum-titanium) */}
            <rect x={LEFT_X1 + 2} y={CHAMBER_TOP} width={12} height={CHAMBER_BOTTOM - CHAMBER_TOP} fill="url(#plateGrad)" rx="3" filter="url(#plateSheen)" />
            <text x={LEFT_X1 + 8} y={CHAMBER_TOP + (CHAMBER_BOTTOM - CHAMBER_TOP) / 2} textAnchor="middle" fontSize="7" fontFamily="Inter, sans-serif" fill="#A0AEC0" transform={`rotate(-90, ${LEFT_X1 + 8}, ${CHAMBER_TOP + (CHAMBER_BOTTOM - CHAMBER_TOP) / 2})`}>Pt–Ti Plate</text>

            {/* Cathode (−) label on plate */}
            <text x={LEFT_X1 + 8} y={CHAMBER_TOP - 6} textAnchor="middle" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" fill="#48C7DC">−</text>

            {/* H₂ bubbles rising in cathode chamber */}
            {[
              { x: LEFT_CX - 20, delay: 0,   size: 4.5 },
              { x: LEFT_CX,      delay: 0.9,  size: 3.5 },
              { x: LEFT_CX + 22, delay: 1.7,  size: 5 },
              { x: LEFT_CX - 8,  delay: 2.5,  size: 3 },
              { x: LEFT_CX + 10, delay: 0.4,  size: 4 },
            ].map((b, i) => (
              <Bubble
                key={i}
                x={b.x}
                delay={b.delay}
                size={b.size}
                color="#A4E7F0"
                chamberTop={CHAMBER_TOP + 10}
                chamberBottom={CHAMBER_BOTTOM - 10}
              />
            ))}

            {/* OH⁻ ions drifting */}
            <IonDrift x={LEFT_CX - 15} label="OH⁻" color="#A4E7F0" chamberTop={CHAMBER_TOP + 20} chamberBottom={CHAMBER_BOTTOM} delay={1} />
            <IonDrift x={LEFT_CX + 18} label="OH⁻" color="#A4E7F0" chamberTop={CHAMBER_TOP + 20} chamberBottom={CHAMBER_BOTTOM} delay={3} />

            {/* H₂ label */}
            <motion.text
              x={LEFT_CX}
              y={CHAMBER_TOP + 28}
              textAnchor="middle"
              fontSize="9"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fill="#A4E7F0"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              H₂ ↑
            </motion.text>

            {/* ── MEMBRANE in the middle ── */}
            {/* Membrane body */}
            <rect x={215} y={CHAMBER_TOP - 2} width={10} height={CHAMBER_BOTTOM - CHAMBER_TOP + 4} rx="2" fill="#2D3A55" stroke="#48C7DC" strokeOpacity={0.3} strokeWidth="1" />
            {/* Membrane pores */}
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse
                key={i}
                cx={220}
                cy={CHAMBER_TOP + 10 + i * 18}
                rx={2}
                ry={4}
                fill="#0B1228"
                stroke="#48C7DC"
                strokeOpacity={0.25}
                strokeWidth={0.5}
              />
            ))}
            <text x="220" y={CHAMBER_TOP - 8} textAnchor="middle" fontSize="7" fontFamily="Inter, sans-serif" fill="#718096" letterSpacing="0.5">MEMBRANE</text>

            {/* Electric arc (pulsed) */}
            <ElectricArc on={arcOn} />

            {/* ── RIGHT CHAMBER (Anode +) ── */}
            <rect x={RIGHT_X1 + 2} y={CHAMBER_TOP} width={RIGHT_X2 - RIGHT_X1 - 14} height={CHAMBER_BOTTOM - CHAMBER_TOP} fill="url(#anodeGrad)" rx="4" />

            {/* Anode plate (right wall) */}
            <rect x={RIGHT_X2 - 12} y={CHAMBER_TOP} width={12} height={CHAMBER_BOTTOM - CHAMBER_TOP} fill="url(#plateGrad)" rx="3" filter="url(#plateSheen)" />
            <text x={RIGHT_X2 - 6} y={CHAMBER_TOP - 6} textAnchor="middle" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" fill="#F4A05A">+</text>

            {/* O₂ bubbles rising in anode chamber */}
            {[
              { x: RIGHT_CX - 20, delay: 0.3,  size: 4 },
              { x: RIGHT_CX,      delay: 1.2,  size: 5 },
              { x: RIGHT_CX + 20, delay: 2.1,  size: 3.5 },
              { x: RIGHT_CX - 8,  delay: 0.7,  size: 3 },
              { x: RIGHT_CX + 8,  delay: 1.8,  size: 4.5 },
            ].map((b, i) => (
              <Bubble
                key={i}
                x={b.x}
                delay={b.delay}
                size={b.size}
                color="#F4A05A"
                chamberTop={CHAMBER_TOP + 10}
                chamberBottom={CHAMBER_BOTTOM - 10}
              />
            ))}

            {/* H⁺ ions drifting */}
            <IonDrift x={RIGHT_CX - 15} label="H⁺" color="#F4A05A" chamberTop={CHAMBER_TOP + 20} chamberBottom={CHAMBER_BOTTOM} delay={0.5} />
            <IonDrift x={RIGHT_CX + 18} label="H⁺" color="#F4A05A" chamberTop={CHAMBER_TOP + 20} chamberBottom={CHAMBER_BOTTOM} delay={2.5} />

            {/* O₂ label */}
            <motion.text
              x={RIGHT_CX}
              y={CHAMBER_TOP + 28}
              textAnchor="middle"
              fontSize="9"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fill="#F4A05A"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              O₂ ↑
            </motion.text>

            {/* ── Output spouts at bottom ── */}
            {/* Alkaline drinking water out (left) */}
            <rect x={LEFT_X1 + 30} y={CHAMBER_BOTTOM} width={70} height={20} rx="4" fill="#0B1228" stroke="#48C7DC" strokeOpacity={0.4} strokeWidth="1" />
            {[0, 1, 2].map((i) => (
              <motion.line
                key={i}
                x1={LEFT_X1 + 45 + i * 14}
                y1={CHAMBER_BOTTOM + 20}
                x2={LEFT_X1 + 45 + i * 14}
                y2={CHAMBER_BOTTOM + 38}
                stroke="#48C7DC"
                strokeWidth="2"
                strokeOpacity={0.7}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.9, 0] }}
                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            {/* Acid water out (right) */}
            <rect x={RIGHT_X1 + 50} y={CHAMBER_BOTTOM} width={70} height={20} rx="4" fill="#0B1228" stroke="#F4A05A" strokeOpacity={0.4} strokeWidth="1" />
            {[0, 1, 2].map((i) => (
              <motion.line
                key={i}
                x1={RIGHT_X1 + 65 + i * 14}
                y1={CHAMBER_BOTTOM + 20}
                x2={RIGHT_X1 + 65 + i * 14}
                y2={CHAMBER_BOTTOM + 38}
                stroke="#F4A05A"
                strokeWidth="2"
                strokeOpacity={0.7}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.9, 0] }}
                transition={{ duration: 1.5, delay: i * 0.3 + 0.4, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            {/* Output labels */}
            <text x={LEFT_X1 + 65} y={CHAMBER_BOTTOM + 54} textAnchor="middle" fontSize="8.5" fontFamily="Inter, sans-serif" fontWeight="700" fill="#48C7DC">ALKALINE DRINKING WATER</text>
            <text x={LEFT_X1 + 65} y={CHAMBER_BOTTOM + 65} textAnchor="middle" fontSize="7" fontFamily="Inter, sans-serif" fill="#A4E7F0">pH 8.5–9.5 · ORP −722 mV</text>

            <text x={RIGHT_X1 + 85} y={CHAMBER_BOTTOM + 54} textAnchor="middle" fontSize="8.5" fontFamily="Inter, sans-serif" fontWeight="700" fill="#F4A05A">ACIDIC WATER</text>
            <text x={RIGHT_X1 + 85} y={CHAMBER_BOTTOM + 65} textAnchor="middle" fontSize="7" fontFamily="Inter, sans-serif" fill="#F4A05A">pH 2.5–6.0 · Sanitizing use</text>

            {/* Chamber labels inside */}
            <text x={LEFT_CX} y={CHAMBER_TOP + 12} textAnchor="middle" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="600" fill="#A0AEC0" letterSpacing="1">CATHODE (−)</text>
            <text x={RIGHT_CX} y={CHAMBER_TOP + 12} textAnchor="middle" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="600" fill="#A0AEC0" letterSpacing="1">ANODE (+)</text>

            {/* Half-reaction labels */}
            <text x={LEFT_CX} y={CHAMBER_BOTTOM - 18} textAnchor="middle" fontSize="7" fontFamily="Inter, sans-serif" fill="#A4E7F0" fillOpacity={0.75}>2H₂O + 2e⁻ → H₂ + 2OH⁻</text>
            <text x={RIGHT_CX} y={CHAMBER_BOTTOM - 18} textAnchor="middle" fontSize="7" fontFamily="Inter, sans-serif" fill="#F4A05A" fillOpacity={0.75}>2H₂O → O₂ + 4H⁺ + 4e⁻</text>

            {/* Electric current arrow indicator */}
            <motion.path
              d="M 460 150 L 480 150"
              stroke="#FFF176"
              strokeWidth="1.5"
              markerEnd="url(#arrow)"
              strokeOpacity={0.7}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#FFF176" fillOpacity={0.7} />
              </marker>
            </defs>
            <text x="487" y="154" fontSize="7" fontFamily="Inter, sans-serif" fill="#FFF176" fillOpacity={0.7}>DC</text>

            {/* Title badge */}
            <rect x="150" y="68" width="200" height="20" rx="10" fill="#1A2540" stroke="#2D3A55" strokeWidth="1" />
            <text x="250" y="81" textAnchor="middle" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600" fill="#A0AEC0" letterSpacing="1.5">ENAGIC LeveLuk K8 — CROSS SECTION</text>
          </svg>
        </div>

        <Reveal>
          <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
            <div className="glass p-5 sm:p-6">
              <div className="kicker text-aqua-300/90">Cathode side · Drinking</div>
              <h3 className="mt-2 font-display text-lg text-silver-100">Alkaline · H₂-Rich</h3>
              <p className="mt-3 text-sm text-silver-300/80 leading-relaxed">
                Water molecules gain electrons at the platinum-coated cathode, splitting to release molecular hydrogen gas (H₂) and hydroxyl ions (OH⁻). This is the drinking-water stream — alkaline, negative ORP, hydrogen-saturated
                <Cite ids={21} />.
              </p>
            </div>
            <div className="glass p-5 sm:p-6">
              <div className="kicker">The membrane</div>
              <h3 className="mt-2 font-display text-lg text-silver-100">Selective Separation</h3>
              <p className="mt-3 text-sm text-silver-300/80 leading-relaxed">
                A semi-permeable membrane between the plates keeps the two streams separate while allowing ion exchange. The Enagic K8 uses medical-grade platinum-titanium plates to maximize electrode surface area and longevity.
              </p>
            </div>
            <div className="glass p-5 sm:p-6">
              <div className="kicker text-yellow-300/80">Anode side · Sanitizing</div>
              <h3 className="mt-2 font-display text-lg text-silver-100">Acidic · Oxidizing</h3>
              <p className="mt-3 text-sm text-silver-300/80 leading-relaxed">
                The anode draws electrons from water, producing oxygen gas (O₂) and hydrogen ions (H⁺) — creating acidic, oxidizing water studied for sanitizing surfaces and produce cleaning
                <Cite ids={[10, 11]} />. Not for drinking.
              </p>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs leading-relaxed text-silver-400/70 max-w-3xl mx-auto">
          Teaching schematic. The half-reactions shown are simplified educational representations of a more complex electrochemical process. The diagram is not a claim about bottled free-electron content in drinking water.
        </p>
      </div>
    </section>
  );
}
