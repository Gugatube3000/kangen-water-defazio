import { useState } from "react";
import { Link } from "react-router-dom";
import { citationById } from "@/lib/citations";

type CiteProps = {
  /** One or more citation IDs to render as a comma-separated superscript */
  ids: number | number[];
  /** Optional override anchor text — default is the numeric id(s) */
  label?: string;
};

/**
 * Inline citation: renders a small superscript pill (e.g. ⁽¹⁾ or ⁽³⸴⁴⁾)
 * that, on hover/focus, reveals a tooltip with author, title, and link.
 * Tap-friendly: also navigates to /references#cite-N on click as a fallback.
 */
export function Cite({ ids, label }: CiteProps) {
  const list = Array.isArray(ids) ? ids : [ids];
  const [open, setOpen] = useState(false);
  const cites = list.map(citationById).filter(Boolean);
  if (cites.length === 0) return null;

  const text = label ?? cites.map((c) => c!.id).join(",");
  const firstId = cites[0]!.id;

  return (
    <span className="relative inline-block">
      <Link
        to={`/references#cite-${firstId}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        data-inline-citation="true"
        className="relative inline-flex align-super text-[0.65em] leading-none ml-0.5 px-1 py-0.5 rounded bg-aqua-400/15 text-aqua-300 hover:bg-aqua-400/30 hover:text-aqua-200 transition tabular-nums font-medium no-underline after:absolute after:-inset-2.5 after:content-['']"
        aria-label={`Reference ${text}`}
      >
        [{text}]
      </Link>
      {open && (
        <span
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 max-w-[80vw] z-50 p-3.5 rounded-xl bg-navy-900 border border-aqua-400/30 shadow-glass text-[12px] leading-snug text-silver-200 text-left normal-case font-normal pointer-events-none"
        >
          {cites.map((c, i) => (
            <span key={c!.id} className="block">
              {i > 0 && <span className="block my-2 h-px bg-silver-300/10" />}
              <span className="text-aqua-300 font-semibold">
                [{c!.id}] {c!.topic}
              </span>
              {c!.authors && (
                <span className="block text-silver-300/90 mt-1">
                  {c!.authors}
                </span>
              )}
              <span className="block italic text-silver-100 mt-0.5">
                {c!.title}
              </span>
              <span className="block text-silver-400/80 mt-0.5">
                {c!.source}
              </span>
              {c!.url && (
                <span className="block text-aqua-400/90 mt-1 break-all">
                  {c!.url.replace(/^https?:\/\//, "")}
                </span>
              )}
            </span>
          ))}
        </span>
      )}
    </span>
  );
}
