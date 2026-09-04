import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type VideoLightboxProps = {
  open: boolean;
  videoId: string | null;
  title?: string;
  onClose: () => void;
};

export function VideoLightbox({ open, videoId, title, onClose }: VideoLightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && videoId && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Video player"}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={onClose}
            className="absolute inset-0 cursor-zoom-out bg-navy-950/85 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[min(420px,92vw)] sm:max-w-[480px]"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60 bg-navy-950">
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  key={videoId}
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white`}
                  title={title ?? "YouTube video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>

            {title && (
              <p className="mt-4 text-center text-[11px] tracking-ultra uppercase text-silver-300/70">
                {title}
              </p>
            )}

            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/95 text-navy-950 shadow-lg shadow-black/40 flex items-center justify-center hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-aqua-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                <path
                  d="M3 3 L13 13 M13 3 L3 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
