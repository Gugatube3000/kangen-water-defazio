import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Cite } from "@/components/Cite";
import { ScienceVideo } from "@/components/ScienceVideo";
import { ImageZoom } from "@/components/ImageZoom";

type Marker = {
  label: string;
  sub?: string;
  mv: number; // -800 .. +400
  symbol: string;
  good?: boolean;
  bad?: boolean;
  /** -1 = label below the bar, +1 = label above. Alternates to avoid collisions. */
  side: 1 | -1;
};

const MARKERS: Marker[] = [
  {
    label: "LeveLuk K8",
    sub: "official US spec: −722 mV",
    mv: -722,
    symbol: "K8",
    good: true,
    side: 1,
  },
  {
    label: "Reducing side",
    sub: "negative ORP",
    mv: -320,
    symbol: "−",
    side: 1,
  },
  {
    label: "Neutral point",
    sub: "0 mV",
    mv: 0,
    symbol: "0",
    side: -1,
  },
  {
    label: "Tap Water",
    sub: "+200 to +300 mV",
    mv: 250,
    symbol: "~",
    side: -1,
  },
  {
    label: "Soda",
    sub: "+200 to +600 mV",
    mv: 390,
    symbol: "!",
    bad: true,
    side: 1,
  },
];

const RANGE_MIN = -800;
const RANGE_MAX = 450;
function mvToPct(mv: number) {
  return ((mv - RANGE_MIN) / (RANGE_MAX - RANGE_MIN)) * 100;
}

export function ORPScale() {
  return (
    <section
      data-section="orp"
      data-section-label="ORP Scale"
      className="section-pad relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Oxidation–Reduction Potential"
          title={
            <>
              Read the spectrum from oxidizing to{" "}
              <em className="not-italic text-aqua-300">
                reducing potential.
              </em>
            </>
          }
          subtitle="ORP is an electrode measurement, reported in millivolts, of a water sample under specific conditions. Negative values indicate reducing conditions and positive values indicate oxidizing conditions—but the number is not a direct measure of clinical antioxidant benefit."
        />

        {/* Outer wrapper — extra horizontal padding on mobile so extreme-end
            markers (Kangen at −400, Soda at +400) have room to extend without
            clipping the section edge. The bar itself sits inside this padded
            zone; markers are absolutely positioned relative to it. */}
        <div className="mt-16 lg:mt-24 relative max-w-5xl mx-auto px-10 sm:px-8 md:px-8 lg:px-4">
          {/* Top labels */}
          <div className="flex justify-between text-[9px] sm:text-[10px] tracking-ultra uppercase text-silver-400/70 mb-3">
            <span className="text-aqua-300">Reducing</span>
            <span className="hidden sm:inline">0 mV</span>
            <span className="text-yellow-300/80">Oxidizing</span>
          </div>

          {/* Top-side markers (above bar) */}
          <div className="relative h-32 sm:h-36">
            {MARKERS.filter((m) => m.side === 1).map((m, idx) => (
              <MarkerPin
                key={m.label + idx}
                marker={m}
                delay={idx * 0.08}
                placement="top"
              />
            ))}
          </div>

          {/* The bar */}
          <div className="relative h-3 sm:h-4 rounded-full overflow-hidden bg-gradient-to-r from-aqua-300 via-aqua-200/40 via-50% to-[#F4A05A]">
            <div
              aria-hidden
              className="absolute top-0 bottom-0 w-px bg-silver-100/60"
              style={{ left: "50%" }}
            />

            {/* Tick markers ON the bar */}
            {MARKERS.map((m, idx) => (
              <div
                key={"tick-" + idx}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-silver-100/70 rounded-full"
                style={{ left: `${mvToPct(m.mv)}%` }}
              />
            ))}
          </div>

          {/* Tick number labels */}
          <div className="relative h-4 mt-1 hidden sm:block">
            {[-800, -600, -400, -200, 0, 200, 400].map((mv) => (
              <div
                key={mv}
                className="absolute top-0 -translate-x-1/2 text-[9px] tabular-nums text-silver-400/60"
                style={{ left: `${mvToPct(mv)}%` }}
              >
                {mv > 0 ? `+${mv}` : mv}
              </div>
            ))}
          </div>
          <div className="relative h-4 mt-1 sm:hidden flex justify-between px-1 text-[9px] tabular-nums text-silver-400/60">
            <span>−800</span>
            <span>0</span>
            <span>+400</span>
          </div>

          {/* Bottom-side markers (below bar) */}
          <div className="relative h-32 sm:h-36 mt-2">
            {MARKERS.filter((m) => m.side === -1).map((m, idx) => (
              <MarkerPin
                key={m.label + idx}
                marker={m}
                delay={idx * 0.08 + 0.3}
                placement="bottom"
              />
            ))}
          </div>

        </div>

        <Reveal>
          <p className="mt-12 sm:mt-16 mx-auto max-w-2xl text-center text-silver-300/75 italic font-display text-base sm:text-xl px-4">
            Current product specifications are a starting point, not a health
            conclusion. Source-water chemistry, pH, temperature, flow, and
            machine settings can all affect the reading.
            <Cite ids={21} />
          </p>
        </Reveal>

        {/* Oxidation analogy explanation */}
        <Reveal>
          <div className="mt-16 max-w-5xl mx-auto glass p-6 sm:p-10">
            <div className="kicker text-yellow-400/80">What an ORP number can—and cannot—say</div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl text-silver-100 leading-tight text-balance">
              The meter describes the sample.{" "}
              <em className="not-italic text-aqua-300">It does not diagnose the body.</em>
            </h3>
            <p className="mt-5 text-sm text-silver-300/80 leading-relaxed max-w-3xl">
              Redox reactions involve electron transfer, but a single ORP value
              compresses the effects of the chemical species present, their
              concentrations, and pH into one electrode reading. A negative ORP
              does not mean that bottled “free electrons” are being delivered to
              cells, and it does not identify molecular hydrogen by itself.
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
              <ImageZoom
                src="/evidence-guide/orp-is-not-hydrogen.png"
                alt="Why a negative ORP is not unique to molecular hydrogen: different reducing substances can also produce negative readings."
                className="aspect-[2.08/1] bg-[#f7f5ef]"
                imageClassName="p-3"
              />
              <div className="rounded-2xl border border-white/[0.1] bg-white/[0.035] p-5 sm:p-6">
                <h4 className="font-display text-2xl text-silver-100">Measure hydrogen separately.</h4>
                <p className="mt-3 text-sm leading-relaxed text-silver-300/82">
                  ORP can support process monitoring, but it cannot tell you how
                  much dissolved H₂ is present. Hydrogen concentration requires
                  an appropriate hydrogen-specific measurement, and neither
                  measurement alone establishes a health outcome.
                </p>
              </div>
            </div>

            {/* Oxidation in nature — apple, banana, iron, and skin cells */}
            <div className="mt-8">
              <ScienceVideo
                src="/videos/oxidation.mp4"
                badge="Oxidation in nature"
                caption="Familiar oxidation can make an abstract redox idea easier to see. Biological oxidation is more regulated and complex than food browning or rust, so the analogy is a starting point—not a literal model of aging."
              />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Apple turns brown",
                  body: "After an apple is cut, enzymes and oxygen participate in reactions that form brown pigments. It is a visible redox example, not a model of every biological oxidation pathway.",
                  tone: "border-yellow-600/20 bg-yellow-900/10",
                },
                {
                  n: "02",
                  title: "Iron rusts",
                  body: "Iron corrosion is another electron-transfer example. Water and oxygen help convert metallic iron into oxidized compounds over time.",
                  tone: "border-orange-600/20 bg-orange-900/10",
                },
                {
                  n: "03",
                  title: "Cells regulate redox",
                  body: "Cells generate reactive species during normal metabolism and signaling. Damage becomes more likely when oxidant production exceeds antioxidant defenses and repair—not whenever any ROS appears.",
                  tone: "border-red-600/20 bg-red-900/10",
                },
              ].map((item) => (
                <div key={item.n} className={`rounded-2xl border p-5 ${item.tone}`}>
                  <div className="font-display text-2xl text-yellow-400/50 tabular-nums">{item.n}</div>
                  <h4 className="mt-2 font-display text-lg text-silver-100">{item.title}</h4>
                  <p className="mt-2 text-xs text-silver-300/75 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl border border-aqua-400/20 bg-aqua-900/20">
              <p className="text-sm text-aqua-200/85 leading-relaxed">
                <strong className="text-aqua-200">The manufacturer lists the K8 at −722 mV</strong> under its specified conditions.
                That supports describing the output as reducing water. It does
                not, by itself, show a clinical antioxidant effect or predict a
                change inside the body. Molecular hydrogen and biological
                outcomes have to be measured separately. <Cite ids={[4, 21, 49]} />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MarkerPin({
  marker,
  delay,
  placement,
}: {
  marker: Marker;
  delay: number;
  placement: "top" | "bottom";
}) {
  const pct = mvToPct(marker.mv);
  const goodColor = marker.good
    ? "text-aqua-300"
    : marker.bad
      ? "text-yellow-400/90"
      : "text-silver-300/90";
  const isTop = placement === "top";

  // Edge-aware alignment: markers within 10% of either edge anchor their label
  // to that edge so it never clips. Center-aligned otherwise.
  const isNearLeftEdge = pct < 12;
  const isNearRightEdge = pct > 88;
  const xTranslate = isNearLeftEdge
    ? "translate-x-0"
    : isNearRightEdge
      ? "-translate-x-full"
      : "-translate-x-1/2";
  const textAlign = isNearLeftEdge
    ? "items-start text-left"
    : isNearRightEdge
      ? "items-end text-right"
      : "items-center text-center";
  const markerLeft = isNearLeftEdge
    ? `calc(${pct}% + 0.5rem)`
    : isNearRightEdge
      ? `calc(${pct}% - 0.5rem)`
      : `${pct}%`;

  return (
    <motion.div
      initial={{ opacity: 0, y: isTop ? 8 : -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${xTranslate} flex ${
        isTop ? "flex-col-reverse bottom-0" : "flex-col top-0"
      } ${textAlign} pointer-events-none w-20 sm:w-28`}
      style={{ left: markerLeft }}
    >
      {/* Tick line connecting label to bar — stays anchored at the actual pct */}
      <div
        className={`h-3 sm:h-4 w-px bg-silver-300/40 ${
          isNearLeftEdge ? "self-start" : isNearRightEdge ? "self-end" : ""
        }`}
      />
      <div className="my-1 font-display text-lg leading-none sm:text-2xl">
        {marker.symbol}
      </div>
      {/* Label */}
      <div
        className={`font-display text-[11px] sm:text-sm ${goodColor} leading-tight`}
      >
        {marker.label}
      </div>
      {marker.sub && (
        <div className="text-[9px] sm:text-[10px] text-silver-400/70 leading-tight mt-0.5">
          {marker.sub}
        </div>
      )}
    </motion.div>
  );
}
