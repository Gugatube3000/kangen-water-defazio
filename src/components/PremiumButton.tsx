import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

type ButtonProps =
  | (CommonProps & { to: string; href?: never; onClick?: never })
  | (CommonProps & { href: string; to?: never; onClick?: never })
  | (CommonProps & { onClick: () => void; to?: never; href?: never });

const variantClasses = {
  primary:
    "bg-gradient-to-b from-aqua-300 to-aqua-500 text-navy-950 shadow-premium hover:shadow-[0_30px_80px_-20px_rgba(72,199,220,0.7)]",
  secondary:
    "glass text-silver-100 hover:text-white",
  ghost:
    "border border-silver-300/20 text-silver-100 hover:border-aqua-400/50 hover:text-aqua-300 bg-transparent",
} as const;

const sizeClasses = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
} as const;

export function PremiumButton(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon,
  } = props;
  const reduce = useReducedMotion();

  const inner = (
    <motion.span
      whileTap={!reduce ? { scale: 0.97 } : undefined}
      transition={{ type: "spring", duration: 0.3, bounce: 0.15 }}
      className={cn(
        "premium-btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide select-none isolate overflow-hidden",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(255,255,255,0.5),transparent)]"
        />
      )}
      <span>{children}</span>
      {icon && <span className="opacity-80">{icon}</span>}
    </motion.span>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className="inline-block">
        {inner}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    const external = props.href.startsWith("http");
    return (
      <a
        href={props.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={"onClick" in props ? props.onClick : undefined}
      className="inline-block"
    >
      {inner}
    </button>
  );
}
