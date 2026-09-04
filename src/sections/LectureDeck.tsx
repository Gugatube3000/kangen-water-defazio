import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PremiumButton } from "@/components/PremiumButton";
import { lectureDeck } from "@/lib/defazioLibrary";

// A few signature slides for the homepage teaser; the full deck lives in /library.
const FEATURED_NUMBERS = [3, 6, 13, 18, 19];
const featured = FEATURED_NUMBERS.map(
  (n) => lectureDeck.slides.find((s) => s.number === n)!
).filter(Boolean);

export function LectureDeck() {
  return (
    <section
      data-section="lecture"
      data-section-label="The Lecture"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(111,215,230,0.07),transparent_70%)]"
      />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          kicker="From the Lecture"
          title={
            <>
              The whole argument,{" "}
              <em className="not-italic text-aqua-300">on slides.</em>
            </>
          }
          subtitle="I teach Electrolyzed Reduced Water from my own working deck. These reviewed frames preserve the useful analogies and references while a refreshed presentation is prepared."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((slide, index) => (
            <Reveal key={slide.number} delay={(index % 3) * 0.05}>
              <a
                href={slide.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-aqua-300/35"
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
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80">
                    Slide {slide.number}
                  </div>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-silver-100">
                    {slide.title}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <PremiumButton to="/library" size="lg" variant="primary">
            See the full presentation
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}
