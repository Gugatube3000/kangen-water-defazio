import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PremiumButton } from "@/components/PremiumButton";
import {
  libraryItems,
  moduleOneStoryboardFrames,
  moduleScriptDrafts,
  lectureDeck,
  selectiveAntioxidant,
} from "@/lib/defazioLibrary";

const publicDeckSlides = lectureDeck.slides.filter((s) => !s.publicHold);

const startHereCards = [
  {
    title: "Check your water",
    body: "Start with what is actually coming out of the tap. The EWG Tap Water Database helps you look up local water-quality concerns by ZIP code.",
    href: "https://www.ewg.org/tapwater/",
    action: "Open EWG database",
  },
  {
    title: "Learn the water types",
    body: "Understand the difference between filtered, reverse osmosis, chemically alkaline, generic ionized, and Electrolyzed Reduced Water.",
    href: "/competition",
    action: "Compare water types",
  },
  {
    title: "Ask a question",
    body: "Use the public AI guide to ask about ERW, ORP, hydrogen, electrolysis, machine differences, or where to begin.",
    href: "/ask-defazio",
    action: "HydroAIgen",
  },
];

const publicSources = libraryItems.filter(
  (item) => item.href || item.status === "live",
);

const statusLabels: Record<(typeof libraryItems)[number]["status"], string> = {
  live: "Available",
  "to condense": "Learning source",
  "source material": "Reference material",
};

const publicLessonSummaries = [
  "Start with the foundation: the body is mostly water, and the quality of that water shapes the environment every cell lives in.",
  "Use the fish-tank analogy to understand why the fluid around your cells matters for normal exchange, hydration, and everyday physiology.",
  "Learn why chemically alkalized water and water changed by electrolysis are different conversations, and why pH is only one part of the story.",
  "Understand molecular hydrogen, negative ORP, electron donation, and cellular energy in careful, plain language.",
  "See oxidation and free radicals in simple terms, then learn how reducing potential fits into the water-quality conversation.",
];

function ModuleVisual({ index }: { index: number }) {
  const frame =
    moduleOneStoryboardFrames[index % moduleOneStoryboardFrames.length];

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-white/[0.08] bg-navy-950/55">
      <img
        src={frame.assetHref}
        alt=""
        width={1920}
        height={1080}
        className="h-full w-full object-cover opacity-[0.88]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/72 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3 right-3">
        <div className="text-[10px] uppercase tracking-ultra text-aqua-200/80">
          {frame.label}
        </div>
      </div>
    </div>
  );
}

export default function Library() {
  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <SectionHeading
            kicker="Educational Library"
            title={
              <>
                The water{" "}
                <em className="not-italic text-aqua-300">library</em>
              </>
            }
            subtitle="A public place to learn the basics of water quality, Electrolyzed Reduced Water, hydrogen, ORP, electrolysis, and the questions worth asking before choosing what you drink."
          />
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 min-w-0">
            <div className="grid min-w-0 gap-5 md:grid-cols-3">
              {startHereCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-h-[14rem] min-w-0 flex-col rounded-lg border border-white/[0.1] bg-white/[0.045] p-5 shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-aqua-300/35 hover:bg-aqua-300/[0.07]"
                >
                  <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80">
                    Start here
                  </div>
                  <h2 className="mt-4 font-display text-3xl leading-tight text-silver-100">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-silver-300/80">
                    {card.body}
                  </p>
                  <div className="mt-auto pt-5 text-sm font-semibold text-aqua-200 underline decoration-aqua-300/35 underline-offset-4 group-hover:text-aqua-100">
                    {card.action}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* ---------- Lecture / Presentation Gallery ---------- */}
          <div className="mb-8 flex min-w-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <div className="kicker">Dr. De Fazio's Lecture</div>
              <h2 className="mt-3 max-w-4xl font-display text-4xl leading-tight text-silver-100 md:text-5xl">
                The full presentation, slide by slide.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-silver-300/80">
                {lectureDeck.title} — {lectureDeck.author}. Tap any reviewed
                slide to view it full size. The original PDF is being refreshed
                before it returns to the public library.
              </p>
            </div>
          </div>

          <div className="mb-14 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publicDeckSlides.map((slide, index) => (
              <Reveal
                key={slide.number}
                delay={(index % 3) * 0.04}
                className="min-w-0"
              >
                <a
                  href={slide.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block min-w-0 overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.045] shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-aqua-300/35"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={slide.src}
                      alt={`${slide.title} — lecture slide ${slide.number}`}
                      width={1600}
                      height={900}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-navy-950/70 px-2.5 py-1 text-[10px] font-medium tracking-wide text-silver-200 backdrop-blur">
                      {slide.number} / {lectureDeck.slides.length}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-xl leading-tight text-silver-100">
                      {slide.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-silver-300/75">
                      {slide.caption}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mb-8 flex min-w-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <div className="kicker">Featured Learning Path</div>
              <h2 className="mt-3 max-w-4xl font-display text-4xl leading-tight text-silver-100 md:text-5xl">
                Five short lessons for understanding better water.
              </h2>
            </div>
            <PremiumButton to="/ask-defazio" variant="secondary" size="md">
              Ask about a topic
            </PremiumButton>
          </div>

          <div className="mb-14 grid min-w-0 gap-5 lg:grid-cols-2">
            {moduleScriptDrafts.map((module, index) => (
              <Reveal
                key={module.title}
                delay={(index % 4) * 0.04}
                className="min-w-0"
              >
                <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.045] shadow-glass backdrop-blur-2xl">
                  <ModuleVisual index={index} />
                  <div className="flex flex-1 min-w-0 flex-col p-5 md:p-6">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <span className="inline-flex min-h-9 items-center rounded-full border border-aqua-300/20 bg-aqua-300/[0.07] px-3 text-[11px] font-medium text-aqua-200">
                        Lesson {index + 1}
                      </span>
                      <span className="inline-flex min-h-9 items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3 text-[11px] text-silver-300/75">
                        {module.runtime}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-3xl leading-tight text-silver-100">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-silver-300/82">
                      {publicLessonSummaries[index] ?? module.purpose}
                    </p>

                    <div className="mt-5">
                      <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80">
                        What you will learn
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {module.beats.slice(0, 4).map((beat) => (
                          <span
                            key={beat.label}
                            className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[11px] leading-relaxed text-silver-300/78"
                          >
                            {beat.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-5">
                      <a
                        href="/ask-defazio"
                        className="inline-flex min-h-10 w-full items-center justify-center rounded-full border border-aqua-300/25 bg-aqua-300/[0.08] px-4 text-xs font-semibold text-aqua-100 transition hover:bg-aqua-300/15"
                      >
                        Ask about this lesson
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mb-8 min-w-0">
            <div className="kicker">Visual Guide</div>
            <h2 className="mt-3 max-w-4xl font-display text-4xl leading-tight text-silver-100 md:text-5xl">
              The first lesson in pictures.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-silver-300/80">
              A simple visual walk-through of the core idea: the body is mostly
              water, not all water is equal, and the process that creates ERW
              matters.
            </p>
          </div>

          <div className="mb-14 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moduleOneStoryboardFrames.map((frame, index) => (
              <Reveal
                key={frame.number}
                delay={(index % 4) * 0.035}
                className="min-w-0"
              >
                <a
                  href={frame.assetHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block min-w-0 overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.045] shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-aqua-300/35"
                >
                  <img
                    src={frame.assetHref}
                    alt={`${frame.label} visual guide`}
                    width={1920}
                    height={1080}
                    className="aspect-video w-full object-contain bg-navy-950/65"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80">
                      Step {frame.number}
                    </div>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-silver-100">
                      {frame.label}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-silver-300/75">
                      {frame.caption}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* ---------- Molecular Hydrogen: selective antioxidant ---------- */}
          <div className="mb-14 min-w-0 overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.045] p-6 shadow-glass backdrop-blur-2xl md:p-10">
            <div className="kicker">{selectiveAntioxidant.kicker}</div>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-silver-100 md:text-5xl">
              {selectiveAntioxidant.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-silver-300/82">
              {selectiveAntioxidant.intro}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {selectiveAntioxidant.points.map((point) => (
                <div
                  key={point.label}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-5"
                >
                  <h3 className="font-display text-2xl leading-tight text-silver-100">
                    {point.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver-300/80">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-silver-400/70">
              Educational summary of an active research area. It is not medical
              advice, and molecular hydrogen is not presented here as a treatment
              or cure.
            </p>
          </div>

          <div className="mb-8 flex min-w-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <div className="kicker">Public References</div>
              <h2 className="mt-3 max-w-4xl font-display text-4xl leading-tight text-silver-100 md:text-5xl">
                Sources and further learning.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-silver-300/75 md:text-right">
              These links and references are starting points for learning. They
              are educational and do not replace medical advice.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {publicSources.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 6) * 0.035}
                className="min-w-0"
              >
                <article className="flex h-full min-w-0 flex-col rounded-lg border border-white/[0.1] bg-white/[0.045] p-5 shadow-glass backdrop-blur-2xl md:p-6">
                  <div className="flex min-w-0 items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="kicker">{item.type}</div>
                      <h3 className="mt-3 font-display text-2xl leading-tight text-silver-100">
                        {item.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-aqua-300/20 bg-aqua-300/[0.06] px-3 py-1 text-[10px] uppercase tracking-ultra text-aqua-200/85">
                      {statusLabels[item.status]}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-silver-300/80">
                    {item.summary}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-silver-400/70">
                    <span>{item.duration || item.source}</span>
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center text-aqua-300 underline decoration-aqua-300/35 underline-offset-4 hover:text-aqua-200"
                      >
                        Open source
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
