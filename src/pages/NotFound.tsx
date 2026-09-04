import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PremiumButton } from "@/components/PremiumButton";

export default function NotFound() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-5 text-center overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_40%,rgba(111,215,230,0.12),transparent_65%)] pointer-events-none"
      />

      {/* Ghost number */}
      <div
        aria-hidden
        className="absolute font-display text-[20rem] leading-none text-silver-100/[0.025] select-none pointer-events-none"
      >
        404
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-xl"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-aqua-400/70" />
          <span className="kicker">Page not found</span>
          <span className="h-px w-10 bg-aqua-400/70" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-light text-silver-100 leading-[1.05] text-balance">
          This page doesn't{" "}
          <em className="not-italic text-aqua-300">exist.</em>
        </h1>

        <p className="mt-7 text-base md:text-lg text-silver-300/80 leading-relaxed text-balance">
          The water moved on. Let's get you back to where the science is.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PremiumButton to="/" size="lg" variant="primary">
            Back to home
          </PremiumButton>
          <PremiumButton to="/science" size="lg" variant="secondary">
            Science
          </PremiumButton>
        </div>
      </motion.div>
    </section>
  );
}
