import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Cite } from "@/components/Cite";
import { RedoxStory } from "@/components/RedoxStory";
import { fadeUp, stagger } from "@/lib/motion";

const STEPS = [
  {
    n: "01",
    title: "Oxidation is an electron-transfer story.",
    body: "Reactive molecules can participate in electron-transfer reactions. Some are normal and useful; others can contribute to oxidative stress when the balance is disrupted.",
  },
  {
    n: "02",
    title: "Free radicals are not automatically the enemy.",
    body: "The body produces reactive species during normal metabolism and immune defense. The goal is not to eliminate every oxidant. The useful question is whether damaging reactions are outpacing the body's own defenses.",
  },
  {
    n: "03",
    title: "Antioxidants help control chain reactions.",
    body: "Some antioxidants can stabilize radicals through electron or hydrogen-atom transfer; antioxidant enzymes use other pathways. The important point is balance: defenses can limit damage without trying to erase every useful reactive signal.",
  },
  {
    n: "04",
    title: "Molecular hydrogen is being studied in redox biology.",
    body: "Researchers are testing whether molecular hydrogen can influence particular oxidative-stress and signaling pathways. Results vary by model and outcome; this is an active research question, not proof that ERW reverses inflammation, cellular damage, aging, or disease.",
  },
  {
    n: "05",
    title: "Bring the conversation back to measured properties.",
    body: "ERW is a water-quality conversation: electrolysis, dissolved molecular hydrogen, and oxidation-reduction potential. Those properties can be discussed and measured without promising a medical outcome.",
  },
];

export function SimpleTruth() {
  return (
    <section
      data-section="simple-truth"
      data-section-label="The Simple Truth"
      className="section-pad relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl relative">

        {/* Centered heading — no kicker */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] text-balance text-silver-100">
              Before hydrogen,{" "}
              <em className="not-italic text-aqua-300">
                understand the chemistry.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-silver-300/80 text-balance md:text-lg">
              <p>
                Before discussing a water system, it helps to understand the
                chemistry that gives the conversation meaning. Oxidation,
                antioxidants, and free radicals are ordinary parts of biology,
                not simple labels for “bad” and “good.”
              </p>
              <p>
                The sequence below follows the teaching arc I use in my
                lectures: begin with electron transfer, separate normal
                signaling from oxidative stress, and only then ask where
                molecular hydrogen fits. It is a framework for reading the
                research, not a promise that one product resolves illness.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 max-w-5xl">
            <RedoxStory />
          </div>
        </Reveal>

        {/* Steps — large numbered editorial list, no cards */}
        <motion.ol
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          {STEPS.map((s) => (
            <motion.li
              key={s.n}
              variants={fadeUp}
              className="grid grid-cols-[3rem_1fr] md:grid-cols-[7rem_1fr] gap-4 md:gap-10 py-8 border-b border-silver-300/10 first:border-t"
            >
              <span className="font-display text-5xl md:text-7xl text-aqua-300/20 tabular-nums leading-none -mt-1">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-silver-100 leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-silver-300/75 leading-relaxed max-w-2xl">
                  {s.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        {/* Warburg context — kept historically accurate and medically careful. */}
        <Reveal>
          <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
            <div className="hairline" />
            <div className="py-10 md:py-14">
              <div className="kicker">Historical context · Otto Warburg</div>
              <blockquote className="mt-5 border-l border-aqua-200/60 pl-5 font-display text-3xl italic leading-tight text-aqua-100 text-balance md:text-5xl">
                “How does the metabolism of growing tissue differ from that of
                resting?”
                <footer className="mt-4 font-sans text-xs not-italic uppercase tracking-ultra text-silver-300/65">
                  Otto Warburg · 1925 <Cite ids={50} />
                </footer>
              </blockquote>
              <h3 className="mt-5 font-display text-2xl md:text-4xl text-silver-100 leading-relaxed text-balance">
                Cancer metabolism is worth understanding. It is not a reason to
                claim alkaline water treats cancer.
              </h3>
              <p className="mt-6 text-sm text-silver-300/65 leading-relaxed max-w-2xl">
                Otto Warburg's work helped shape the study of altered cancer
                metabolism. He received the 1931 Nobel Prize for his discovery
                of the nature and mode of action of the respiratory enzyme, not
                for proving that an alkaline drink cures cancer. Blood pH is
                tightly regulated, and ERW does not replace oncology care
                <Cite ids={[38, 50]} />.
              </p>
            </div>
            <div className="hairline" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
