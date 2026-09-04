import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoLightbox } from "@/components/VideoLightbox";

type Short = {
  id: string;
  label: string;
};

const SHORTS: Short[] = [
  {
    id: "Nbu3rnZsScE",
    label: "Short · Kangen in action",
  },
  {
    id: "c3_vF69NIhQ",
    label: "Short · Dr. Donaldson",
  },
  {
    id: "E9aEl1Kg3zk",
    label: "Short · Kangen water",
  },
];

export function VideoClips({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [active, setActive] = useState<Short | null>(null);

  return (
    <section id="ionizer-video" data-section="videos" data-section-label="Watch the Process" className="section-pad relative overflow-hidden scroll-mt-28">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_40%,rgba(111,215,230,0.08),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-400/20 to-transparent"
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          kicker="See It in Action"
          title={
            <>
              {featuredOnly ? "See how the system works. " : "Watch the clips. "}
              <em className="not-italic text-aqua-300">
                {featuredOnly ? "Then compare it." : "Bring questions."}
              </em>
            </>
          }
          subtitle={featuredOnly ? (
            <>
              <p>
                Before comparing models or price, follow the water from
                filtration through electrolysis and into two separate outlet
                streams. Captions are timed to the narration and the clip works
                with sound off.
              </p>
              <p>
                This is a process explainer, not evidence of a health outcome.
                The exact output still depends on the machine, settings, flow,
                and source water.
              </p>
            </>
          ) : (
            <>
              <p>
                These short clips put faces, voices, and everyday use around the
                ideas covered above. They can make the subject easier to
                understand and help visitors notice which questions they want
                to explore next.
              </p>
              <p>
                Personal stories remain personal stories. Watch them as context,
                not clinical proof; individual experiences vary, and health
                decisions should be made with a qualified professional.
              </p>
            </>
          )}
        />

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] shadow-2xl shadow-black/35 md:mt-20 md:rounded-3xl">
            <div className="relative aspect-video bg-black">
              <video
                className="ionizer-video h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster="/videos/kangen-electrolysis-polished-poster.jpg"
                aria-label="How a Kangen water ionizer uses filtration and electrolysis"
              >
                <source
                  src="/videos/kangen-electrolysis-polished.mp4"
                  type="video/mp4"
                />
                <track
                  default
                  kind="captions"
                  src="/videos/kangen-electrolysis-captions.vtt"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support embedded video.
              </video>
            </div>
            <div className="grid gap-4 border-t border-white/[0.07] px-5 py-5 sm:px-7 sm:py-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="kicker text-[10px] text-aqua-300">
                  Featured explainer · 1:31
                </div>
                <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
                  Inside the electrolysis chamber
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-silver-100/75 sm:text-base">
                  Follow the water from filtration through the platinum-coated
                  titanium plates, then see how the cathode and anode produce
                  two distinct outlet streams.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-silver-100/55">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua-300" />
                Phrase-timed captions · studio narration
              </div>
            </div>
          </div>
        </Reveal>

        {/* The supporting Shorts stay available only in the broader media view. */}
        {!featuredOnly && <Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:mt-16 md:grid-cols-3">
            {SHORTS.map((short) => (
              <button
                key={short.id}
                type="button"
                onClick={() => setActive(short)}
                aria-label={`Play ${short.label}`}
                className="group relative flex flex-col items-center gap-2 sm:gap-3 text-left focus:outline-none"
              >
                <span className="kicker text-[9px] sm:text-[10px] transition-colors group-hover:text-aqua-300">
                  {short.label}
                </span>
                <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl shadow-black/40 transition duration-500 ease-out group-hover:border-aqua-300/40 group-hover:shadow-aqua-400/20 group-focus-visible:ring-2 group-focus-visible:ring-aqua-300">
                  <div
                    className="relative w-full bg-navy-900"
                    style={{ paddingBottom: "177.78%" }}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${short.id}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    {/* Soft vignette + bottom fade for legibility */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-navy-950/10"
                    />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        aria-hidden
                        className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/95 text-navy-950 shadow-2xl shadow-black/50 transition duration-300 group-hover:scale-110 group-hover:bg-white"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="currentColor"
                        >
                          <path d="M6 4.5v13l12-6.5L6 4.5z" />
                        </svg>
                      </span>
                    </div>
                    {/* Bottom-right "Tap to play" hint */}
                    <div className="absolute bottom-2 right-2 left-2 flex justify-end">
                      <span className="text-[9px] tracking-ultra uppercase text-silver-100/80 bg-navy-950/55 backdrop-blur-sm px-2 py-1 rounded-full">
                        Tap to play
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Reveal>}
      </div>

      <VideoLightbox
        open={active !== null}
        videoId={active?.id ?? null}
        title={active?.label}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
