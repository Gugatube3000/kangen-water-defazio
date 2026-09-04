import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";

export function TransparencyDisclosure() {
  return (
    <section
      data-section="transparency"
      data-section-label="Transparency"
      className="relative z-10 px-5 py-7 md:px-10 lg:px-16"
    >
      <Reveal>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl border border-aqua-200/20 bg-navy-950/55 p-5 shadow-glass backdrop-blur-2xl md:flex-row md:items-center md:justify-between md:p-7">
          <div className="max-w-4xl">
            <div className="kicker">Transparency before the first claim</div>
            <p className="mt-3 text-sm leading-relaxed text-silver-200/88 md:text-base">
              I am a physician educator and an authorized independent Enagic
              distributor. If you purchase through my organization, I may
              receive compensation. This site therefore separates established
              physiology, emerging research, personal experience, and product
              information so you can evaluate each on its own merits.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4 text-sm">
            <Link
              to="/references"
              className="inline-flex min-h-11 items-center font-semibold text-aqua-200 underline decoration-aqua-300/35 underline-offset-4 hover:text-aqua-100"
            >
              Review the sources
            </Link>
            <Link
              to="/business"
              className="inline-flex min-h-11 items-center font-semibold text-aqua-200 underline decoration-aqua-300/35 underline-offset-4 hover:text-aqua-100"
            >
              How compensation works
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
