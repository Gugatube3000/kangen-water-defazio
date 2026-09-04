import { motion } from "framer-motion";
import { Cite } from "@/components/Cite";
import { RedoxStory } from "@/components/RedoxStory";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageZoom } from "@/components/ImageZoom";

const EVERYDAY_CONTEXT = [
  {
    n: "01",
    title: "Normal biology",
    body: "Mitochondria, immune cells, and enzyme systems generate reactive species as part of metabolism, defense, and signaling.",
  },
  {
    n: "02",
    title: "Environmental load",
    body: "Tobacco smoke, air pollution, ultraviolet light, ionizing radiation, and some toxic exposures can increase oxidative burden.",
  },
  {
    n: "03",
    title: "Built-in defenses",
    body: "Glutathione, antioxidant enzymes, dietary compounds, repair systems, and normal turnover work together rather than acting as one universal shield.",
  },
] as const;

export function FreeRadicals() {
  return (
    <section
      data-section="free-radicals"
      data-section-label="Free Radicals"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_35%,rgba(244,160,90,0.07),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="Free Radicals · Oxidation · Antioxidants"
          title={
            <>
              See the reaction clearly—without{" "}
              <em className="not-italic text-aqua-200">oversimplifying biology.</em>
            </>
          }
          subtitle="This rebuilt explainer keeps the useful teaching sequence, corrects oversimplified chemistry, and separates established redox biology from questions still being studied."
        />

        <Reveal>
          <div className="mx-auto mt-12 max-w-5xl">
            <RedoxStory />
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 rounded-3xl border border-white/[0.1] bg-white/[0.035] p-5 sm:p-7 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <ImageZoom
              src="/webinar/mhi-benefits-of-ros-cropped.webp"
              alt="Molecular Hydrogen Institute teaching slide showing reactive oxygen species participating in mitochondrial signaling, immunity, blood flow, and recovery."
              className="aspect-[1.78/1] bg-white"
              imageClassName="object-contain"
            />
            <div>
              <div className="kicker">The balance matters</div>
              <h3 className="mt-3 font-display text-3xl text-silver-100">Not every reactive species is an enemy.</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-300/82">
                Controlled reactive species help cells signal and adapt. The
                problem is oxidative distress: production, defenses, and repair
                fall out of balance and molecular damage accumulates.
                <Cite ids={49} />
              </p>
              <p className="mt-3 text-xs leading-relaxed text-silver-400/70">
                Molecular Hydrogen Institute webinar visual, supplied with
                publication authorization.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {EVERYDAY_CONTEXT.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-3xl border border-white/[0.1] bg-white/[0.045] p-6 shadow-glass backdrop-blur-2xl"
            >
              <div className="font-mono text-xs text-aqua-300/65">{item.n}</div>
              <h3 className="mt-3 font-display text-2xl text-silver-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-300/78">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 rounded-3xl border border-white/[0.1] bg-white/[0.035] p-5 sm:p-7 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <ImageZoom
              src="/webinar/mhi-nrf2-pathway-cropped.webp"
              alt="Molecular Hydrogen Institute teaching slide mapping a proposed relationship between molecular hydrogen and the Nrf2 cellular stress-response pathway."
              className="aspect-[1.78/1] bg-white"
              imageClassName="object-contain"
            />
            <div>
              <div className="kicker">From chemistry to signaling</div>
              <h3 className="mt-3 font-display text-3xl text-silver-100">
                Nrf2 is a mechanism to test—not a promised result.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-silver-300/82">
                The Nrf2 pathway helps regulate cellular defenses and adaptation
                to stress. Researchers are studying whether H₂ influences that
                signaling network, but a pathway diagram cannot show that a
                person will experience every downstream effect <Cite ids={[4, 49]} />.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-silver-400/70">
                Molecular Hydrogen Institute webinar visual, supplied with
                publication authorization.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-8 max-w-5xl rounded-3xl border border-aqua-300/18 bg-navy-950/30 p-6 sm:p-8">
            <div className="kicker">How the evidence was evaluated</div>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl text-silver-100">Kept</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-300/78">
                  The visual progression from an unpaired electron, to a chain
                  reaction, to antioxidant defense, and finally to the molecular
                  hydrogen research question.
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-silver-100">Corrected</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-300/78">
                  Ordinary non-ionizing EMF is not presented as equivalent to
                  ionizing radiation. The page does not claim that acidic waste
                  dehydrates cells, that antioxidants inevitably become harmful
                  radicals, or that ionized water supplies circulating loose
                  electrons and reactivates self-healing <Cite ids={[1, 49]} />.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
