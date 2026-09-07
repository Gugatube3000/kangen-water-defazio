import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function FishTankSection() {
  return (
    <section
      data-section="fish-tank"
      data-section-label="Fish Tank = Your Cells"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_30%,rgba(72,199,220,0.10),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          kicker="My favorite analogy"
          title={
            <>
              Your body is a fish tank.{" "}
              <em className="not-italic text-aqua-300">
                Your cells are the fish.
              </em>
            </>
          }
          subtitle="The aquarium is my teaching model: when the water quality changes, everything living in the tank has to respond. It is a memorable way to ask better questions about hydration and environment, not proof of a medical outcome."
        />

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 max-w-4xl mx-auto">
          <Reveal>
            <article className="h-full rounded-3xl border border-amber-200/15 bg-amber-200/[0.04] p-6 sm:p-8">
              <div className="kicker text-yellow-300/80 text-[9px] sm:text-[11px]">
                Dirty Water
              </div>
              <h3 className="mt-3 font-display text-2xl text-silver-100 leading-tight">
                Cloudy Environment
              </h3>
              <p className="mt-4 text-sm text-silver-300/80 leading-relaxed">
                A neglected aquarium makes environmental quality visible. The analogy is a prompt to learn what is in your water and maintain the systems that treat it.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full rounded-3xl border border-aqua-300/15 bg-aqua-300/[0.04] p-6 sm:p-8">
              <div className="kicker text-aqua-300/90 text-[9px] sm:text-[11px]">
                Maintained Water
              </div>
              <h3 className="mt-3 font-display text-2xl text-silver-100 leading-tight">
                Clearer Environment
              </h3>
              <p className="mt-4 text-sm text-silver-300/80 leading-relaxed">
                A maintained tank reminds us that water quality depends on source, filtration, testing, cleaning, and ongoing care—not on appearance alone.
              </p>
            </article>
          </Reveal>

        </div>

        <Reveal>
          <p className="mt-16 mx-auto max-w-2xl text-center text-silver-300/75 italic font-display text-xl">
            “If you don’t filter the water, your body becomes the filter.”
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-silver-400/70">The aquarium is a teaching analogy. It is not a test of any drinking-water product and does not demonstrate a human-health outcome.</p>
        </Reveal>
      </div>
    </section>
  );
}
