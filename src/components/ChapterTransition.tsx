import { Reveal } from "@/components/Reveal";

type ChapterTransitionProps = {
  next: string;
  quote: string;
  attribution: string;
  note?: string;
  align?: "left" | "right";
};

export function ChapterTransition({
  next,
  quote,
  attribution,
  note,
  align = "left",
}: ChapterTransitionProps) {
  const right = align === "right";

  return (
    <section
      aria-label={`Introduction to ${next}`}
      className="relative hidden overflow-hidden px-5 py-12 sm:py-16 md:block md:px-10 md:py-20 lg:px-16"
    >
      <div
        aria-hidden
        className={`absolute top-1/2 -translate-y-1/2 font-display text-[13rem] leading-none text-white/[0.025] select-none sm:text-[18rem] ${
          right ? "-left-6" : "-right-6"
        }`}
      >
        “
      </div>
      <Reveal>
        <div
          className={`mx-auto max-w-6xl border-y border-white/[0.12] py-9 sm:py-12 ${
            right ? "text-right" : "text-left"
          }`}
        >
          <div className={`flex items-center gap-3 ${right ? "justify-end" : ""}`}>
            {!right && <span className="h-px w-9 bg-aqua-300/70" />}
            <span className="kicker">Next · {next}</span>
            {right && <span className="h-px w-9 bg-aqua-300/70" />}
          </div>
          <blockquote
            className={`mt-5 max-w-4xl font-display text-3xl leading-tight text-silver-100 text-balance sm:text-4xl md:text-5xl ${
              right ? "ml-auto" : ""
            }`}
          >
            “{quote}”
          </blockquote>
          <footer
            className={`mt-5 text-xs uppercase tracking-[0.2em] text-aqua-100/75 ${
              right ? "ml-auto" : ""
            }`}
          >
            {attribution}
          </footer>
          {note && (
            <p
              className={`mt-2 max-w-2xl text-xs leading-relaxed text-silver-400/70 ${
                right ? "ml-auto" : ""
              }`}
            >
              {note}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
