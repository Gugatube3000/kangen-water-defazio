import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function ImageZoom({ src, alt, className = "", imageClassName = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`group relative cursor-zoom-in overflow-hidden rounded-2xl bg-navy-950/20 border border-white/[0.04] transition-all duration-300 hover:border-aqua-400/30 ${className}`}
        role="button"
        tabIndex={0}
        aria-label={`Enlarge ${alt}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(true);
          }
        }}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-[1.03] ${imageClassName}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-navy-950/90 backdrop-blur text-[10px] uppercase tracking-ultra text-aqua-300 px-3.5 py-2 rounded-full border border-aqua-400/30 flex items-center gap-1.5 font-semibold shadow-xl">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <circle cx="7" cy="7" r="4" />
              <path d="M14 14l-3.5-3.5" />
              <path d="M7 5v4M5 7h4" />
            </svg>
            Click to Zoom
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-5 sm:p-8 backdrop-blur-sm cursor-zoom-out"
          >
            {/* Close affordance outside modal */}
            <div className="absolute top-6 right-6 text-xs text-silver-400 tracking-ultra uppercase pointer-events-none hidden sm:block">
              Click anywhere to close
            </div>

            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image itself
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
              />
              <p className="text-center text-silver-300 text-xs sm:text-sm mt-4 leading-relaxed max-w-2xl px-4">
                {alt}
              </p>
              
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-4 sm:absolute sm:mt-0 sm:top-4 sm:right-4 bg-navy-950/90 text-silver-100 h-9 w-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-navy-900 transition-colors shadow-lg"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
