import { SectionHeading } from "@/components/SectionHeading";
import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";

export function AskDefazioSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_35%,rgba(164,231,240,0.14),transparent_70%)]"
      />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          kicker="HydroAIgen"
          title={
            <>
              The fastest way to understand{" "}
              <em className="not-italic text-aqua-300">
                hydrogen-rich water.
              </em>
            </>
          }
          subtitle="A public educational guide trained on this website, my lecture framing, the shared water materials, and the latest direction for the video library."
        />

        <Reveal>
          <div className="mt-14 mx-auto max-w-4xl glass p-6 md:p-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="kicker">Public Consultant AI</div>
              <p className="mt-3 text-silver-200/90 leading-relaxed">
                Ask about ERW, Kangen Water, ORP, Dr. Donaldson's teaching
                themes, tap-water contamination, or why I keep returning
                to the idea that "not all water is equal."
              </p>
              <p className="mt-3 text-xs text-silver-400/70 leading-relaxed">
                Educational only. Not medical advice, diagnosis, treatment, or
                an income promise.
              </p>
            </div>
            <PremiumButton to="/ask-defazio" size="lg" variant="primary">
              HydroAIgen
            </PremiumButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
