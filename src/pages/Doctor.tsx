import { DoctorSection } from "@/sections/DoctorSection";
import { FinalCTA } from "@/sections/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export default function Doctor() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-8">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <SectionHeading
            kicker="About Dr. De Fazio"
            title={
              <>
                Cardiothoracic anesthesiologist. Then{" "}
                <em className="not-italic text-aqua-300">tinnitus</em> changed
                the path.
              </>
            }
          />
        </div>
      </section>
      <DoctorSection expanded />

      <section className="section-pad relative">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="glass p-8 md:p-12 space-y-6">
              <div className="kicker">My story</div>
              <p className="text-silver-200/90 leading-relaxed text-balance">
                I began my medical career with a strong foundation —
                a Bachelor of Science at UCLA, medical school in the United
                Kingdom, an anesthesiology program at Rush University Medical
                Center, and a cardiothoracic anesthesiology fellowship at the
                Cleveland Clinic.
              </p>
              <p className="text-silver-200/90 leading-relaxed text-balance">
                In 2018 my life took an unexpected turn: a debilitating
                high-frequency tinnitus that persisted despite extensive
                conventional investigation. The lack of answers became the
                catalyst for a deep dive into wellness and health optimization — sought
                out from naturopathic doctors, biofeedback systems, energy
                detox protocols, and bio-resonance devices.
              </p>
              <p className="text-silver-200/90 leading-relaxed text-balance">
                Those experiences opened my eyes to a more natural,
                unconventional approach — one that emphasizes the body's innate
                ability to heal when properly supported. As I describe it, "a
                blind unfolded over my head and empowered me with a new
                appreciation of the human body and how it operates" — a
                reminder that "our human bodies, linked as they are to the
                whole web of life on earth and the life of the living God, are
                indeed fearfully and wonderfully made." (Psalm 139:14)
              </p>
              <p className="text-silver-200/90 leading-relaxed text-balance">
                My experience with tinnitus, and my pursuit of answers through
                chemistry and self-care, changed the questions I ask. I share
                this site as an educator — not a treatment provider
                and not as proof of a particular medical outcome.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 glass p-8 md:p-12 space-y-5">
              <div className="kicker">The framing I prefer</div>
              <p className="font-display text-2xl md:text-3xl text-silver-100 leading-relaxed text-balance">
                "Life without balance, is life in pathology."
              </p>
              <p className="text-sm text-silver-300/80">— Dr. David De Fazio</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 glass p-8 md:p-12 space-y-5 border border-aqua-400/10">
              <div className="kicker">My philosophy on health</div>
              <blockquote className="font-display text-xl md:text-2xl text-silver-100 leading-relaxed text-balance italic">
                "Health is the foundation of everything we hope to achieve. It
                is not something you chase once you've lost it — Health is the
                quiet force that shapes the quality of every day you live. True
                wellness is the destination, and every meaningful journey begins
                with a single decision: to take ownership of your path. If
                Kangen water is part of that journey, then let it be the
                vehicle, but let your commitment be the driving force."
              </blockquote>
              <p className="text-sm text-silver-300/80">— Dr. David De Fazio, MD</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 glass p-8 md:p-12 space-y-5">
              <div className="kicker">Why I started checking the water</div>
              <p className="text-silver-200/90 leading-relaxed text-balance">
                As part of my search for answers, a
                naturopathic screening flagged a long list of concerns:
                atrazine, glyphosate, volatile organic compounds, heavy metals,
                PFAS, BPA, parasites, and other findings. I then looked up my municipal
                water report and called my city to understand what was being
                measured.
              </p>
              <p className="text-silver-300/82 text-sm leading-relaxed text-balance">
                This is my personal origin story, not proof that tap water
                caused a diagnosis and not a substitute for validated clinical
                testing. It is why the site starts with a practical question:
                what is actually coming out of your tap?
              </p>
              <a
                href="/#tap-water"
                className="inline-flex min-h-10 items-center text-sm font-semibold text-aqua-300 underline decoration-aqua-400/40 underline-offset-4 hover:text-aqua-200"
              >
                Check your local water sources →
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 glass p-8 md:p-12 space-y-5">
              <div className="kicker">A note on scope</div>
              <p className="text-silver-200/90 leading-relaxed text-balance">
                This site is educational. I am not prescribing, diagnosing, or
                treating any condition with water. ERW is not a cure. I share
                this material because the chemistry interests me, because my
                lecture has helped my peers understand it more deeply, and
                because I believe the water that supports a water-rich body
                deserves more attention than it usually gets.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
