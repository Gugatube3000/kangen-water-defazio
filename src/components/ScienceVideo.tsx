import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  src: string;
  caption: string;
  badge?: string;
  /** Aspect ratio of the video frame. */
  aspect?: string;
  className?: string;
};

/**
 * A looping, muted science clip with viewport-aware playback to reduce
 * bandwidth and battery usage.
 */
export function ScienceVideo({
  src,
  caption,
  badge,
  aspect = "16/9",
  className = "",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-3xl ring-1 ring-aqua-400/20 bg-navy-950 ${className}`}
    >
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={caption}
        />
        {/* Subtle scrim for caption legibility */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/90 to-transparent"
        />
        {badge && (
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-navy-950/60 px-3 py-1.5 text-[10px] uppercase tracking-ultra text-aqua-200/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua-300 animate-pulse" />
              {badge}
            </span>
          </div>
        )}
        {/* Play affordance until in view (in case autoplay is blocked) */}
        {!inView && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-navy-950/50 backdrop-blur-sm ring-1 ring-white/10" />
          </div>
        )}
      </div>
      <figcaption className="px-5 py-4 text-xs leading-relaxed text-silver-300/75">
        {caption}
      </figcaption>
    </motion.figure>
  );
}
