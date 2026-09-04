import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Cite } from "@/components/Cite";
import { fadeUp, stagger } from "@/lib/motion";

/**
 * Publicly reported use is a conversation starter, not clinical proof.
 * Photos are freely licensed portraits from Wikimedia Commons.
 */

type Athlete = { name: string; sport: string; img?: string };

const ATHLETES: Athlete[] = [
  { name: "Tiger Woods", sport: "Golf" },
  { name: "Magic Johnson", sport: "NBA" },
  { name: "LeBron James", sport: "NBA", img: "/athletes/lebron.jpg" },
];

const RESEARCH_QUESTIONS = [
  {
    label: "What has not been shown",
    body: "A 2024 meta-analysis found no significant pooled improvement in VO₂max, aerobic endurance, 30-second anaerobic endurance, or muscular strength.",
  },
  {
    label: "Where signals appeared",
    body: "The same review reported a small effect for lower-limb explosive power and reductions in perceived exertion and blood lactate. Those signals need stronger confirmation.",
  },
  {
    label: "Oxidative-stress evidence",
    body: "A second 2024 review included only 76 participants. It found no significant reduction in d-ROMs, though antioxidant-potential capacity improved slightly.",
  },
];

export function Athletes() {
  return (
    <section
      data-section="athletes"
      data-section-label="Athletes"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_30%,rgba(111,215,230,0.10),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="Publicly reported Kangen Water use"
          title={
            <>
              Yes: these athletes are reported to drink{" "}
              <em className="not-italic text-aqua-300">Kangen Water.</em>
            </>
          }
          subtitle={
            <>
              <p>
                Enagic USA has publicly identified Tiger Woods, Magic Johnson,
                and LeBron James among Kangen Water users <Cite ids={39} />.
                This wording is deliberately specific to the brand rather than
                grouping all alkaline or hydrogen-water products together.
              </p>
              <p>
                Their value is as a doorway into better questions about
                hydration, exercise response, and recovery. The evidence still
                has to come from controlled research, and performance always
                depends on a much larger mix of training, nutrition, sleep, and
                individual biology.
              </p>
            </>
          }
        />

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-4 sm:grid-cols-3"
        >
          {ATHLETES.map((a) => (
            <motion.li key={a.name} variants={fadeUp}>
              <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-navy-900">
                {a.img ? <img src={a.img} alt={a.name} loading="lazy" className="aspect-[4/5] w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]" /> :
                  <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-aqua-300/20 to-navy-950 font-display text-7xl text-aqua-100/80" aria-hidden>{a.name.split(" ").map((part) => part[0]).join("")}</div>}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3">
                  <div className="font-display text-base leading-tight text-silver-100">
                    {a.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80">
                    {a.sport}
                  </div>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-5 text-center text-xs leading-relaxed text-silver-400/65 max-w-3xl mx-auto">
          Publicly reported use is not proof of a health or performance effect,
          and Enagic says celebrities do not have contracts to endorse the company.
          The LeBron James portrait is a freely licensed Wikimedia Commons image.{" "}
          <a
            href="/references#topic-athlete-claims"
            className="text-aqua-300 underline decoration-aqua-400/40 underline-offset-4 hover:text-aqua-200"
          >
            See the source and claim limits →
          </a>
        </p>

        <Reveal>
          <div className="mt-12 rounded-3xl border border-aqua-300/20 bg-aqua-300/[0.055] p-6 sm:p-8">
            <div className="kicker">Peer-reviewed evidence · updated reading</div>
            <h3 className="mt-3 max-w-3xl font-display text-3xl text-silver-100 sm:text-4xl">
              Interesting signals, not a settled performance advantage.
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-silver-300/85 sm:text-base">
              The broadest recent performance review pooled 27 publications
              involving 597 participants. A separate oxidative-stress review
              pooled six studies involving 76 participants. Both authors called
              for more rigorous research, and the interventions included
              different hydrogen-delivery methods—not only hydrogen-rich water.
              <Cite ids={[59, 60]} />
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {RESEARCH_QUESTIONS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.1] bg-white/[0.045] p-6 shadow-glass backdrop-blur-2xl"
              >
                <h3 className="font-display text-xl text-silver-100">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-300/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-center text-sm leading-relaxed text-silver-300/80 max-w-2xl mx-auto">
            Peer-reviewed studies and reviews discussing exercise-related markers are
            collected on the{" "}
            <a
              href="/references#topic-athletic-performance"
              className="text-aqua-300 underline decoration-aqua-400/40 underline-offset-4 hover:text-aqua-200"
            >
              references page
            </a>
            <Cite ids={[32, 59, 60]} />.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
