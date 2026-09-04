import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

type Part =
  | { text: string; highlight?: boolean; italic?: boolean }
  | { br: true };

type MaskedHeadlineProps = {
  parts: Part[];
  className?: string;
  delay?: number;
  amount?: number;
  stagger?: number;
};

const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const word: Variants = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function MaskedHeadline({
  parts,
  className,
  delay = 0,
  amount = 0.3,
  stagger = 0.06,
}: MaskedHeadlineProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className={className}>
        {parts.map((p, i) => {
          if ("br" in p) return <br key={i} />;
          return (
            <span
              key={i}
              className={cn(
                p.highlight &&
                  "bg-gradient-to-r from-silver-100 via-aqua-200 to-aqua-400 bg-clip-text text-transparent",
                p.italic && "italic not-italic-fallback"
              )}
            >
              {p.text}{" "}
            </span>
          );
        })}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={container(stagger, delay)}
    >
      {parts.flatMap((part, partIdx) => {
        if ("br" in part) return [<br key={`br-${partIdx}`} />];
        const words = part.text.split(" ");
        return words.map((w, wi) => (
          <span
            key={`${partIdx}-${wi}`}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.14em", marginRight: "0.25em" }}
          >
            <motion.span
              variants={word}
              className={cn(
                "inline-block",
                part.highlight &&
                  "bg-gradient-to-r from-silver-100 via-aqua-200 to-aqua-400 bg-clip-text text-transparent",
                part.italic && "italic"
              )}
            >
              {w}
            </motion.span>
          </span>
        ));
      })}
    </motion.span>
  );
}
