import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode, createElement } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  once?: boolean;
  as?: "div" | "section" | "article" | "li";
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  variants = defaultVariants,
  once = true,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return createElement(as, { className }, children);
  }

  const motionVariants = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    li: motion.li,
  } as const;
  const MotionTag = motionVariants[as];

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
