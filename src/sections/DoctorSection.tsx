import { SectionHeading } from "@/components/SectionHeading";
import { DoctorCard } from "@/components/DoctorCard";

type Props = { expanded?: boolean };

export function DoctorSection({ expanded = false }: Props) {
  return (
    <section
      data-section="doctor"
      data-section-label="My Perspective"
      className={`${expanded ? "px-5 pb-10 pt-4 sm:px-10 sm:pb-14 sm:pt-6 lg:px-16 md:pb-24" : "section-pad"} relative`}
    >
      <div className="absolute inset-0 bg-radial-aqua opacity-20 pointer-events-none" />
      {/* Ghost watermark */}
      <div
        aria-hidden
        className="absolute right-4 lg:right-12 top-16 font-display text-[14rem] lg:text-[22rem] leading-none text-silver-100/[0.02] select-none pointer-events-none"
      >
        03
      </div>
      <div className="mx-auto max-w-7xl relative">
        {expanded ? (
          <div className="max-w-2xl">
            <div className="kicker">The physician educator</div>
            <p className="mt-3 text-base leading-relaxed text-silver-300/80">
              A physician studying hydration, hydrogen science, and cellular health — sharing the material as education, not as a treatment promise.
            </p>
          </div>
        ) : (
          <SectionHeading
          kicker="The Physician Educator"
          title={
            <>
              The role is not distributor first.{" "}
              <em className="not-italic text-aqua-300">
                It is physician studying hydration, hydrogen science, and
                cellular health.
              </em>
            </>
          }
          subtitle={
            <>
              <p>
                I approach water through the lens of a physician educator. My
                role on this site is to connect basic biology, water chemistry,
                and the questions I have pursued in my own reading and lectures.
              </p>
              <p>
                Just as important, I separate what is established from what
                is emerging and from what remains personal observation. That
                distinction gives visitors room to learn without turning
                curiosity into a diagnosis or a treatment promise.
              </p>
            </>
          }
          />
        )}

        <div className={expanded ? "mt-8" : "mt-16"}>
          <DoctorCard variant={expanded ? "expanded" : "expanded"} />
        </div>

        <div className="mt-10 mx-auto max-w-3xl text-center text-xs text-silver-400/70 leading-relaxed">
          My interest in water quality is personal and educational.
          ERW is not a cure, and nothing on this site constitutes medical
          advice or treatment.
        </div>
      </div>
    </section>
  );
}
