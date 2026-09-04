import { Cite } from "@/components/Cite";
import { ImageZoom } from "@/components/ImageZoom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const GUIDE = [
  {
    src: "/evidence-guide/evidence-pyramid.png",
    title: "Start with the evidence ladder",
    body: "Cell and animal experiments can suggest mechanisms. Human observational studies ask whether patterns travel into people. Randomized trials and systematic reviews ask progressively harder questions about cause, consistency, and clinical relevance.",
  },
  {
    src: "/evidence-guide/rct-explained.png",
    title: "Know what randomization does",
    body: "Random assignment and blinding reduce predictable sources of bias. They do not automatically rescue a tiny sample, a weak control, a short follow-up, or an outcome that matters only in a laboratory assay.",
  },
  {
    src: "/evidence-guide/biomarker-vs-outcome.png",
    title: "A biomarker is not an outcome",
    body: "A change in lactate, antioxidant capacity, inflammation markers, or oxidative-stress measures can be scientifically interesting without proving that a person feels better, performs better, or stays healthier.",
  },
  {
    src: "/webinar/mhi-metabolic-syndrome-rct-cropped.webp",
    title: "One trial is a lead, not a verdict",
    body: "This 24-week randomized trial in people with metabolic syndrome is more directly relevant than a cell or animal model. It still has to be weighed against its sample, methods, endpoints, replication, and the wider evidence base.",
  },
] as const;

export function EvidenceGuide() {
  return (
    <section
      data-section="evidence-guide"
      data-section-label="Reading the Evidence"
      className="section-pad relative overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_30%,rgba(111,215,230,0.075),transparent_68%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="From the presentation and source webinar"
          title={
            <>
              Four checks before turning a study into a {" "}
              <em className="not-italic text-aqua-300">health conclusion.</em>
            </>
          }
          subtitle={
            <>
              <p>
                The presentation supplied for this site is most useful as a
                reading guide. It separates plausible biology from proven
                benefit and puts the human evidence above mechanisms and
                testimonials.
              </p>
              <p>
                These graphics summarize the presentation; they are not
                independent proof. Use the linked primary papers and reviews on
                the References page for the underlying evidence.
              </p>
            </>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {GUIDE.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.06}>
              <article className="h-full overflow-hidden rounded-3xl border border-white/[0.1] bg-white/[0.04] shadow-glass backdrop-blur-2xl">
                <ImageZoom
                  src={item.src}
                  alt={`${item.title}. Authorized source visual supplied for Dr. De Fazio's educational website.`}
                  className="aspect-[1.78/1] rounded-none border-0 border-b border-white/[0.08] bg-white"
                  imageClassName="object-contain p-2 sm:p-4"
                />
                <div className="p-6 sm:p-7">
                  <div className="font-mono text-xs text-aqua-300/75">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-silver-100 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-300/82">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 grid gap-6 rounded-3xl border border-aqua-300/20 bg-aqua-300/[0.055] p-6 sm:p-8 lg:grid-cols-[1fr_.82fr] lg:items-center">
            <div>
              <div className="kicker">What the recent exercise reviews show</div>
              <h3 className="mt-3 font-display text-3xl text-silver-100 sm:text-4xl">
                Mixed results are still results.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-silver-300/85 sm:text-base">
                Recent meta-analyses found some promising exercise-related
                signals, but not broad improvement across every performance or
                oxidative-stress endpoint. Small samples, varied delivery
                methods, and heterogeneous protocols limit certainty.
                <Cite ids={[59, 60]} />
              </p>
            </div>
            <ImageZoom
              src="/evidence-guide/evidence-80-20.png"
              alt="Hydrogen belongs on top of health foundations, not in place of movement, nutrition, sleep, stress management, and connection."
              className="aspect-[1.42/1] bg-[#f7f5ef]"
              imageClassName="p-3 sm:p-5"
            />
          </div>
        </Reveal>

        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-relaxed text-silver-400/75">
          Visuals are adapted from “Molecular Hydrogen Presentation (71 slides)”
          and a Molecular Hydrogen Institute webinar, with permission from the
          authors and presenters.
        </p>
      </div>
    </section>
  );
}
