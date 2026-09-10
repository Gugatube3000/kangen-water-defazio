import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Cite } from "@/components/Cite";
import { fadeUp, stagger } from "@/lib/motion";

/**
 * Publicly reported use is a conversation starter, not clinical proof.
 * Photos are freely licensed portraits from Wikimedia Commons.
 */

type Athlete = { name: string; sport: string; img: string };

const ATHLETES: Athlete[] = [
  { name: "Tom Brady", sport: "NFL", img: "/athletes/brady.jpg" },
  { name: "LeBron James", sport: "NBA", img: "/athletes/lebron.jpg" },
  { name: "Tiger Woods", sport: "Golf", img: "/athletes/tigerwoods.jpg" },
  { name: "Floyd Mayweather", sport: "Boxing", img: "/athletes/mayweather.jpg" },
  { name: "Manny Pacquiao", sport: "Boxing", img: "/athletes/pacquiao.jpg" },
  { name: "Magic Johnson", sport: "NBA", img: "/athletes/magicjohnson.jpg" },
  { name: "Cristiano Ronaldo", sport: "Football", img: "/athletes/ronaldo.jpg" },
  { name: "Kamaru Usman", sport: "MMA", img: "/athletes/usman.png" },
  { name: "Bryson DeChambeau", sport: "Golf", img: "/athletes/dechambeau.jpg" },
  { name: "Kelly Slater", sport: "Surfing", img: "/athletes/kellyslater.jpg" },
  { name: "Kurt Warner", sport: "NFL", img: "/athletes/kurtwarner.jpg" },
  { name: "Miesha Tate", sport: "MMA", img: "/athletes/mieshatate.jpg" },
  { name: "Cris Cyborg", sport: "MMA", img: "/athletes/criscyborg.jpg" },
  { name: "Lyoto Machida", sport: "MMA", img: "/athletes/machida.jpg" },
  { name: "Michael Robinson", sport: "NFL", img: "/athletes/mrobinson.jpg" },
  { name: "Abner Mares", sport: "Boxing", img: "/athletes/abnermares.jpg" },
  { name: "Elvis Stojko", sport: "Figure Skating", img: "/athletes/stojko.jpg" },
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

        <Reveal>
          <article className="mt-10 rounded-3xl border border-white/15 bg-navy-950/50 p-6 sm:p-9">
            <div className="mx-auto max-w-4xl">
              <div className="kicker">Celebrity perspective</div>
              <h3 className="mt-3 font-display text-3xl text-silver-100">Access can spark curiosity. Evidence guides the decision.</h3>
              <p className="mt-4 text-base leading-relaxed text-silver-200">The presentation&apos;s core message was simple: elite athletes and celebrities often have access to specialist advice, intensive training, recovery support, and wellness products that many people do not. Their choices can spark curiosity and encourage us to ask better questions about hydration and recovery.</p>
              <p className="mt-4 text-base leading-relaxed text-silver-200">But visibility is not validation. A person’s appearance in a promotional gallery does not establish current use, a paid endorsement, or a health benefit. Popularity can begin the conversation; controlled research must guide any conclusion.</p>
              <p className="mt-4 text-sm text-silver-300">The external gallery includes figures such as Manny Pacquiao, Floyd Mayweather, Steven Tyler, and Pat Boone. These are the gallery publisher’s reports, not independently verified endorsements.</p>
              <a href="https://newtritionny.com/kangen-water-celebrities" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-aqua-200 underline underline-offset-4">See the full list of professional athletes and celebrities →</a>
              <p className="mt-2 text-sm text-silver-400">External promotional gallery; its claims are separate from the research reviewed here.</p>
            </div>
          </article>
        </Reveal>

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {ATHLETES.map((a) => (
            <motion.li key={a.name} variants={fadeUp}>
              <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-navy-900">
                <img
                  src={a.img}
                  alt={a.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                />
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
          This restored gallery brings together public figures previously shown
          on the site. Some names come from third-party promotional listings;
          appearance here does not establish current use, a paid endorsement,
          or a health or performance effect. Portraits were sourced from freely
          licensed Wikimedia Commons images.{" "}
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
