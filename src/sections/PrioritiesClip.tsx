import { Reveal } from "@/components/Reveal";

export function PrioritiesClip() {
  return (
    <section
      id="priorities"
      aria-labelledby="priorities-title"
      className="relative scroll-mt-24 px-5 pb-14 pt-8 sm:px-10 sm:pb-20 md:pt-4 lg:px-16"
    >
      <Reveal>
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-white/[0.12] bg-[#0B1E36]/82 shadow-2xl shadow-navy-950/25 md:grid-cols-[0.82fr_1.18fr]">
          <div className="flex flex-col justify-center p-6 sm:p-9 md:p-10 lg:p-12">
            <div className="kicker">Perspective · priorities</div>
            <blockquote
              id="priorities-title"
              className="mt-4 font-display text-3xl italic leading-tight text-silver-100 sm:text-4xl"
            >
              “We don’t lose the important things because we don’t love them;
              we lose them because we keep making room for things that matter
              less.”
            </blockquote>
            <p className="mt-5 text-sm leading-relaxed text-silver-300/82 sm:text-base">
              The familiar jar demonstration makes one point clearly: when the
              small demands fill every space first, the priorities that matter
              most become harder to fit. Health habits deserve a place before
              the calendar fills itself.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-silver-400/72">
              Revised from the supplied clip with a cleaner frame, a smaller
              caption treatment, and improved playback quality. {" "}
              <a
                href="https://youtu.be/SqGRnlXplx0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aqua-200 underline underline-offset-4"
              >
                Watch the original video on YouTube ↗
              </a>
            </p>
          </div>

          <div className="border-t border-white/[0.08] bg-black/30 p-4 sm:p-6 md:border-l md:border-t-0 lg:p-8">
            <div className="mx-auto max-w-[26rem] overflow-hidden rounded-2xl border border-white/[0.12] bg-black shadow-2xl">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/videos/priorities-mindset-poster.jpg"
                className="aspect-[40/53] w-full bg-black object-contain"
                aria-label="The priorities jar demonstration"
              >
                <source src="/videos/priorities-mindset.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
