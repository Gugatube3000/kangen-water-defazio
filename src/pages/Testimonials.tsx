import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/sections/FinalCTA";

const stories = [
  {
    title: "Support the water-rich body",
    source: "My lecture framing",
    body: "When I discuss a personal wellness story, I say ERW was not a cure and was not the only healthy choice involved. My careful takeaway is simpler: give a water-rich body the best environment you reasonably can.",
  },
  {
    title: "Why I started checking the tap",
    source: "Personal origin story",
    body: "A personal screening experience pushed me to look more closely at municipal water reports and ask what was actually coming out of my tap. It is context for my curiosity, not proof of exposure, diagnosis, or causation.",
  },
  {
    title: "Stories belong beside sources",
    source: "Editorial standard",
    body: "Personal experiences can explain why someone became curious. They cannot prove a medical result. The reference library remains the place to review research and continue the conversation carefully.",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="pb-8 pt-28 md:pb-16 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <SectionHeading
            kicker="Stories"
            title={
              <>
                Personal experiences,{" "}
                <em className="not-italic text-aqua-300">
                  kept in their proper place.
                </em>
              </>
            }
            subtitle="I wanted a place for testimonials. These stories are presented as anecdotes only: they are not proof, medical advice, treatment instructions, or promises of any outcome."
          />
        </div>
      </section>

      <section className="section-pad pt-0 relative">
        <div className="mx-auto max-w-6xl">
          <div className="mobile-snap-row grid gap-5 md:grid-cols-3">
            {stories.map((story, index) => (
              <Reveal key={story.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-white/[0.1] bg-white/[0.045] p-6 shadow-glass backdrop-blur-2xl">
                  <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80">
                    {story.source}
                  </div>
                  <h2 className="mt-4 font-display text-3xl leading-tight text-silver-100">
                    {story.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-silver-300/82">
                    {story.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-2xl border border-aqua-300/18 bg-aqua-300/[0.055] p-6 text-center md:p-8">
              <p className="mx-auto max-w-3xl text-sm leading-relaxed text-silver-300/82">
                For questions about water quality, ERW, hydrogen, ORP, or
                machine differences, use the educational AI guide. For medical
                decisions, speak with a qualified clinician.
              </p>
              <div className="mt-6">
                <PremiumButton to="/ask-defazio" size="md" variant="primary">
                  Ask HydroAIgen
                </PremiumButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
