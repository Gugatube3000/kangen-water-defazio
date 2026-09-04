import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp, stagger } from "@/lib/motion";

/** Short proverbs selected for the site's educational narrative. */
const PROVERBS: { quote: string; author: string }[] = [
  {
    quote: "Water is the driving force of all nature.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "Water is life's matter and matrix, mother and medium. There is no life without water.",
    author: "Albert Szent-Györgyi, Nobel Laureate",
  },
  {
    quote: "We never know the worth of water till the well is dry.",
    author: "Thomas Fuller",
  },
  {
    quote:
      "Nothing in the world is softer than water, yet nothing is better at overcoming the hard and strong.",
    author: "Lao Tzu",
  },
  {
    quote: "Necessity is the mother of invention.",
    author: "Proverb — the spirit behind every doctor who went looking for a better way",
  },
  {
    quote: "Documentation always beats conversation.",
    author: "My rule — why every claim here is referenced",
  },
];

export function Proverbs() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Proverbs on Water"
          title={
            <>
              Older than the science,{" "}
              <em className="not-italic text-aqua-300">
                and pointing the same way.
              </em>
            </>
          }
        />

        <motion.ul
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROVERBS.map((p) => (
            <motion.li key={p.quote} variants={fadeUp}>
              <figure className="glass h-full p-7">
                <blockquote className="font-display text-xl leading-snug text-silver-100 text-balance">
                  “{p.quote}”
                </blockquote>
                <figcaption className="mt-4 text-[11px] uppercase tracking-ultra text-aqua-300/75">
                  {p.author}
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
