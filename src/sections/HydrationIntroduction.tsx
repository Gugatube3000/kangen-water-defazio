import { Cite } from "@/components/Cite";
import { Reveal } from "@/components/Reveal";

const HYDRATION_PATH = [
  {
    title: "Intake",
    body: "Water enters through drinks and water-rich foods, joining the fluid already moving through the digestive tract.",
  },
  {
    title: "Absorption",
    body: "Most ingested water crosses the intestinal lining and enters the circulation rather than moving straight into a cell.",
  },
  {
    title: "Distribution",
    body: "Blood plasma and interstitial fluid distribute water between organs, tissues, and the spaces surrounding cells.",
  },
  {
    title: "Cellular exchange",
    body: "Osmotic gradients and aquaporin channels help water move across cell membranes as local conditions change.",
  },
  {
    title: "Regulation",
    body: "Thirst, the kidneys, and hormones continually adjust water intake, retention, and loss to protect fluid balance.",
  },
];

export function HydrationIntroduction() {
  return (
    <section
      id="hydration-introduction"
      data-section="hydration-introduction"
      data-section-label="What Hydration Is"
      className="section-pad relative scroll-mt-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_58%_at_75%_32%,rgba(164,231,240,0.14),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="kicker">What hydration is</div>
          <h2 className="mt-5 max-w-5xl font-display text-5xl font-light leading-[1.02] text-silver-100 text-balance md:text-7xl">
            Water is the medium in which{" "}
            <em className="not-italic text-aqua-300">life happens.</em>
          </h2>
          <div className="mt-7 max-w-3xl space-y-5 text-base leading-relaxed text-silver-200/90 md:text-lg">
            <p>
              Hydration is one of the most fundamental requirements for life.
              Every cell, tissue, organ, and biochemical system depends on a
              carefully regulated balance of water.
            </p>
            <p>
              There are two percentages that are often confused. Total body
              water averages about 60% of body weight in adult men and 55% in
              adult women, while fat-free mass is about 70–75% water. Age, sex,
              body composition, health, and hydration status all shift the
              number. So 72% is a useful description of lean tissue—not a
              universal percentage for the whole person <Cite ids={48} />.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {HYDRATION_PATH.map((stage, index) => (
              <div
                key={stage.title}
                className="rounded-2xl border border-white/[0.1] bg-white/[0.045] p-5 shadow-glass backdrop-blur-2xl"
              >
                <div className="font-mono text-[10px] text-aqua-300/75">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-xl text-silver-100">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-100/90">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-silver-400/70">
            This is the route from drinking water to regulated body water. The
            separate “What does the water do?” chapter below focuses on water's
            physiological jobs <Cite ids={[6, 47, 48]} />.
          </p>
        </Reveal>

        <Reveal>
          <blockquote className="mx-auto mt-14 max-w-5xl rounded-3xl border border-aqua-200/25 bg-navy-950/32 p-7 shadow-2xl shadow-navy-950/20 backdrop-blur-2xl sm:p-10 md:p-14">
            <p className="font-display text-3xl leading-tight text-white text-balance sm:text-4xl md:text-5xl">
              “Hydration isn’t just about the water you drink. It’s about the
              water that actually reaches your cells. Aquaporins are microscopic
              gateways that make rapid water movement across many cell membranes
              possible—helping cells maintain the balance they need to function,
              adapt, and thrive.”
            </p>
            <footer className="mt-6 flex flex-wrap items-center gap-2 text-xs leading-relaxed text-aqua-100/80">
              <span className="uppercase tracking-ultra">My hydration philosophy</span>
              <span aria-hidden>·</span>
              <span>Aquaporin mechanism</span>
              <Cite ids={6} />
            </footer>
          </blockquote>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-2xl leading-relaxed text-silver-100 text-balance md:text-3xl">
            Without adequate hydration, cells have a harder time maintaining
            volume, electrolyte balance, transport, and communication. In simple
            terms, life as we know it cannot exist without water.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function CuriosityPreface() {
  return (
    <section
      data-section="curiosity-preface"
      data-section-label="A Journey From Curiosity"
      className="section-pad relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="glass p-7 sm:p-10 md:p-14">
            <div className="kicker">A journey from curiosity to understanding</div>
            <h2 className="mt-5 font-display text-4xl leading-tight text-silver-100 text-balance sm:text-5xl md:text-6xl">
              This guide was born from curiosity.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-silver-200/88 md:text-lg">
              <p>
                A curiosity to understand how something as simple as molecular
                hydrogen—a molecule composed of only two hydrogen atoms—could
                lead to much larger questions about biology, aging, resilience,
                and the human experience.
              </p>
              <p>
                The journey into molecular hydrogen is not simply a journey into
                chemistry. It is a journey into understanding how life works at
                its most fundamental level. Every heartbeat, thought, movement,
                and repair process depends on countless events occurring inside
                trillions of cells. Within many of those cells, mitochondria
                continually transform nutrients and oxygen into usable energy.
              </p>
              <p>
                Life is not static. Every cell exists in constant conversation
                with its environment—responding to challenges, repairing damage,
                adapting to stress, and maintaining balance. Over time, changes
                in cellular stress, repair, inflammation, and resilience are
                studied as parts of the biology of aging.
              </p>
            </div>
            <blockquote className="mt-9 border-l border-aqua-200/65 pl-6">
              <p className="font-display text-3xl italic leading-tight text-aqua-100 text-balance md:text-4xl">
                “Can we better understand and support the biological systems
                that allow the human body to maintain resilience throughout life?”
              </p>
              <p className="mt-5 text-sm leading-relaxed text-silver-300/80">
                Molecular hydrogen is one fascinating piece of this larger
                conversation—an active area of research, not a treatment promise
                <Cite ids={4} />.
              </p>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
