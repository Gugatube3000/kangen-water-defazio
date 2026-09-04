import { type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "w-full max-w-3xl min-w-0",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <div className="flex items-center gap-3 justify-center">
            {align === "center" && (
              <span className="hairline w-12 hidden sm:block" />
            )}
            <span className="kicker">{kicker}</span>
            {align === "center" && (
              <span className="hairline w-12 hidden sm:block" />
            )}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.02] text-balance text-silver-100 [overflow-wrap:break-word]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <div className="mt-6 space-y-4 text-base md:text-lg text-silver-300/80 leading-relaxed text-balance">
            {subtitle}
          </div>
        </Reveal>
      )}
    </div>
  );
}
