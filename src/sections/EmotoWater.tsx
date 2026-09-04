import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";

export function EmotoWater() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_55%_at_40%_45%,rgba(164,231,240,0.12),transparent_75%)]"
      />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          kicker="The Water You Are Made Of"
          title={
            <>
              Words, water, and the{" "}
              <em className="not-italic text-aqua-300">power of intention.</em>
            </>
          }
          subtitle="Dr. Masaru Emoto proposed that human words, music, and intention can affect water's structure. I wanted to include this conversation."
        />

        <Reveal>
          <div className="mt-12 max-w-2xl sm:mt-16">
            <GlassCard padding="lg">
              <div className="kicker text-aqua-300/90">The Idea</div>
              <h3 className="mt-3 font-display text-2xl text-silver-100">
                Masaru Emoto&apos;s Hidden Messages
              </h3>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-silver-300/85">
                <p>
                  Dr. Masaru Emoto, a Japanese author, became famous for proposing
                  that human words, thoughts, and music can influence the molecular
                  structure of water. His ideas were popularized in his book{" "}
                  <em>The Hidden Messages in Water</em>.
                </p>
                <p>
                  Emoto&apos;s experiments followed a simple process: expose water
                  samples to positive or negative words, freeze them, and photograph
                  the resulting ice crystals under a microscope.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="shrink-0 text-aqua-300">✦</span>
                    Water exposed to words like &quot;love,&quot; &quot;gratitude,&quot; or prayer
                    formed symmetrical, aesthetically pleasing crystals.
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-300/70">✦</span>
                    Water exposed to words like &quot;hate&quot; or harsh music formed
                    irregular, fragmented crystals.
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
