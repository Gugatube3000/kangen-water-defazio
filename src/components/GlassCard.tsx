import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  padding?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const padMap = {
  sm: "p-5 md:p-6",
  md: "p-7 md:p-8",
  lg: "p-8 md:p-10",
} as const;

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  padding = "md",
  onClick,
}: GlassCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      onClick={onClick}
      whileHover={
        hover && !reduce
          ? { y: -6, transition: { duration: 0.4, ease: "easeOut" } }
          : undefined
      }
      className={cn(
        "glass relative overflow-hidden group",
        padMap[padding],
        glow && "shadow-premium",
        className
      )}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-aqua-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
