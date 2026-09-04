import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const HYDROGEN_BUBBLES = Array.from({ length: 14 }, (_, index) => index);

/** One luminous water surface shared by every route. */
export function WaterBackground() {
  const video = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const syncPlayback = () => {
      if (paused || reducedMotion || document.hidden) element.pause();
      // An effect cleanup can interrupt play during mount. Keep the poster and
      // manual control available instead of permanently removing the video.
      else element.play().catch(() => {});
    };
    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      document.removeEventListener("visibilitychange", syncPlayback);
      element.pause();
    };
  }, [paused, reducedMotion]);

  return (
    <>
      <div className={`water-background ${paused ? "is-paused" : ""}`} aria-hidden="true">
        <img src="/hero-water-poster.jpg" alt="" className="water-background-media" />
        {!reducedMotion && !unavailable && (
          <video ref={video} className="water-background-media" muted loop playsInline
            preload="metadata" poster="/hero-water-poster.jpg" onError={() => setUnavailable(true)}>
            <source src="/hero-water.mp4" type="video/mp4" />
          </video>
        )}
        <div className="water-background-wash" />
        <div className="water-background-caustics" />
        <div className="hydrogen-bubble-field">
          {HYDROGEN_BUBBLES.map((bubble) => (
            <span key={bubble} className="hydrogen-bubble">
              {bubble === 3 || bubble === 9 ? <span>H₂</span> : null}
            </span>
          ))}
        </div>
      </div>
      {!reducedMotion && !unavailable && (
        <button type="button" onClick={() => setPaused(!paused)}
          className="fixed bottom-3 left-3 z-40 min-h-10 rounded-full border border-white/20 bg-navy-950/75 px-4 text-xs text-silver-100 backdrop-blur-md sm:bottom-5 sm:left-5"
          aria-pressed={paused} aria-label={paused ? "Play water background" : "Pause water background"}>
          {paused ? "Play water" : "Pause water"}
        </button>
      )}
    </>
  );
}
