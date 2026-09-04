import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Section = { id: string; label: string; el: HTMLElement };

export function SectionRail() {
  const { pathname } = useLocation();
  const [sections, setSections] = useState<Section[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("[data-section]")
      );
      const list: Section[] = els.map((el) => ({
        id: el.dataset.section!,
        label: el.dataset.sectionLabel || el.dataset.section!,
        el,
      }));
      setSections(list);
      setActiveId(list[0]?.id ?? null);

      const io = new IntersectionObserver(
        (entries) => {
          const sorted = entries
            .filter((e) => e.isIntersecting)
            .sort(
              (a, b) =>
                Math.abs(a.boundingClientRect.top) -
                Math.abs(b.boundingClientRect.top)
            );
          if (sorted[0])
            setActiveId(sorted[0].target.getAttribute("data-section"));
        },
        {
          rootMargin: "-35% 0px -50% 0px",
          threshold: [0, 0.1, 0.5, 1],
        }
      );
      list.forEach((s) => io.observe(s.el));
      // store for cleanup
      (window as any).__sectionRailIO?.disconnect?.();
      (window as any).__sectionRailIO = io;
    });

    return () => {
      cancelAnimationFrame(handle);
      (window as any).__sectionRailIO?.disconnect?.();
      delete (window as any).__sectionRailIO;
    };
  }, [pathname]);

  if (sections.length < 2) return null;

  const scrollTo = (el: HTMLElement) => {
    const top =
      el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      className="group/rail fixed right-2 lg:right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-0.5"
      onPointerLeave={() => {
        // Optional: clear any hover states if needed, but CSS handles it
      }}
    >
      {sections.map((s) => {
        const active = activeId === s.id;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => scrollTo(s.el)}
            className="group relative flex h-6 w-48 items-center justify-end gap-3 cursor-pointer"
            aria-label={`Jump to ${s.label}`}
          >
            <span
              className={cn(
                "absolute right-8 whitespace-nowrap text-[9px] font-semibold tracking-ultra uppercase pointer-events-none transition-all duration-300",
                active
                  ? "opacity-100 translate-x-0 text-white drop-shadow-md"
                  : "opacity-0 translate-x-2 text-silver-400 group-hover/rail:opacity-60 group-hover/rail:translate-x-0 group-hover:!opacity-100 group-hover:!text-white"
              )}
            >
              {s.label}
            </span>
            <span
              className={cn(
                "block h-[2px] transition-all duration-500 origin-right rounded-full",
                active
                  ? "w-6 bg-aqua-300 shadow-[0_0_8px_rgba(164,231,240,0.6)]"
                  : "w-3 bg-silver-500/30 group-hover:w-5 group-hover:bg-silver-300/80 group-hover/rail:bg-silver-400/50"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
