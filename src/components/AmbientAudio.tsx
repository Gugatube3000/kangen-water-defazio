import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * AmbientAudio — plays Dr. De Fazio's chosen background track ("Rainwater
 * Epilogue", added June 2 2026) on a gentle loop. Replaces the earlier
 * fully-synthesized pad, which David found too monotone.
 *
 * The track is user-initiated (a floating button), loops seamlessly, and
 * fades in/out so toggling never feels abrupt. It is loaded lazily on first
 * play so it never blocks initial page load.
 */

const AMBIENT_SRC = "/ambient.mp3";
const TARGET_VOL = 0.45;
const FADE_IN_MS = 2400;
const FADE_OUT_MS = 900;

export function AmbientAudio() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);

  const fadeTo = (
    el: HTMLAudioElement,
    target: number,
    ms: number,
    onDone?: () => void
  ) => {
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    const start = el.volume;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / ms);
      el.volume = Math.max(0, Math.min(1, start + (target - start) * k));
      if (k < 1) {
        fadeRef.current = requestAnimationFrame(step);
      } else {
        fadeRef.current = null;
        onDone?.();
      }
    };
    fadeRef.current = requestAnimationFrame(step);
  };

  const toggle = async () => {
    let el = audioRef.current;
    if (!el) {
      el = new Audio(AMBIENT_SRC);
      el.loop = true;
      el.preload = "auto";
      el.volume = 0;
      audioRef.current = el;
    }

    if (playing) {
      fadeTo(el, 0, FADE_OUT_MS, () => el?.pause());
      setPlaying(false);
      return;
    }

    try {
      el.volume = 0;
      await el.play();
      fadeTo(el, TARGET_VOL, FADE_IN_MS);
      setPlaying(true);
    } catch {
      // Autoplay blocked or file unavailable — leave it muted, no crash.
      setPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute ambient music" : "Play ambient music"}
      className="ambient-audio-btn fixed bottom-3 right-3 z-40 flex h-10 w-10 items-center justify-center rounded-full glass text-silver-100 transition-colors hover:text-aqua-300 sm:bottom-5 sm:right-5 sm:h-11 sm:w-11"
    >
      <AnimatePresence mode="wait" initial={false}>
        {playing ? (
          <motion.svg
            key="on"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18 }}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M15.5 8.5a5 5 0 010 7" />
            <path d="M19 5a9 9 0 010 14" />
          </motion.svg>
        ) : (
          <motion.svg
            key="off"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18 }}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="22" y1="9" x2="16" y2="15" />
            <line x1="16" y1="9" x2="22" y2="15" />
          </motion.svg>
        )}
      </AnimatePresence>

      {playing && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full border border-aqua-400/40"
          animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </button>
  );
}
