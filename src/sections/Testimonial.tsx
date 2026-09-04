import { Reveal } from "@/components/Reveal";
import { PremiumButton } from "@/components/PremiumButton";

export function Testimonial() {
  return (
    <section
      className="section-pad relative overflow-hidden"
    >
      {/* Ambient aqua pull */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(111,215,230,0.07),transparent_65%)] pointer-events-none"
      />

      <div className="mx-auto max-w-4xl text-center relative">

        {/* Giant typographic quote mark */}
        <Reveal>
          <div
            aria-hidden
            className="font-display text-[9rem] md:text-[12rem] leading-none text-aqua-400/15 select-none"
          >
            "
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <blockquote className="-mt-6 md:-mt-10 font-display text-xl md:text-2xl lg:text-3xl text-silver-100/95 leading-relaxed text-balance italic">
            ERW is not a cure. It was not the only thing involved. But it was
            the one change after the other healthy choices were already in
            place. Give your water-rich body the best environment you can.
          </blockquote>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="hairline w-12" />
            <span className="kicker">Dr. David De Fazio, MD</span>
            <span className="hairline w-12" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-xs text-silver-400/55 leading-relaxed max-w-xl mx-auto">
            Personal educational framing. Not a treatment recommendation, not
            a medical claim, and not a substitute for medical care.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-7">
            <PremiumButton to="/stories" size="md" variant="ghost">
              Read Stories Carefully
            </PremiumButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
