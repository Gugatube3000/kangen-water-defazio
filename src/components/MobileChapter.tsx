import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type MobileChapterProps = {
  number: string;
  title: string;
  summary: string;
  children: ReactNode;
  className?: string;
};

/**
 * Progressive disclosure for long-form mobile reading. The wrapper becomes
 * transparent at tablet widths so the desktop narrative is unchanged.
 */
export function MobileChapter({
  number,
  title,
  summary,
  children,
  className,
}: MobileChapterProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : true,
  );

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const syncViewport = (event: MediaQueryListEvent) => setOpen(event.matches);
    const revealHashTarget = () => {
      if (!window.location.hash || !detailsRef.current) return;
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = document.getElementById(id);
      if (target && detailsRef.current.contains(target)) {
        setOpen(true);
      }
    };

    revealHashTarget();
    desktopQuery.addEventListener("change", syncViewport);
    window.addEventListener("hashchange", revealHashTarget);
    return () => {
      desktopQuery.removeEventListener("change", syncViewport);
      window.removeEventListener("hashchange", revealHashTarget);
    };
  }, []);

  return (
    <details
      ref={detailsRef}
      className={cn("mobile-chapter group", className)}
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary className="mobile-chapter-summary">
        <span className="flex min-w-0 items-start gap-4">
          <span className="mt-1 font-mono text-xs text-aqua-300">{number}</span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[1.7rem] leading-[1.05] text-silver-100">
              {title}
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-silver-300/78">
              {summary}
            </span>
          </span>
          <span
            aria-hidden
            className="mobile-chapter-chevron mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-aqua-300/20 bg-aqua-300/[0.08] text-xl font-light text-aqua-200 transition-transform"
          >
            +
          </span>
        </span>
        <span className="mt-4 inline-flex items-center gap-2 pl-8 text-xs font-semibold uppercase tracking-[0.16em] text-aqua-200">
          <span className="group-open:hidden">Open chapter</span>
          <span className="hidden group-open:inline">Close chapter</span>
          <span aria-hidden>→</span>
        </span>
      </summary>
      <div className="mobile-chapter-body">{children}</div>
    </details>
  );
}
