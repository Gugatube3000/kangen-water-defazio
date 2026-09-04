import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CITATIONS, citationsByTopic } from "@/lib/citations";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/sections/FinalCTA";

const TOPIC_ORDER = [
  "Hydration Physiology",
  "Molecular Hydrogen",
  "Selective Antioxidant",
  "Athletic Performance",
  "Water Structure",
  "Aquaporins",
  "Cell Biology",
  "Animal Studies",
  "Digestive & Microflora",
  "Bioelectricity",
  "Strong Kangen Water",
  "Strong Acidic Water",
  "Tap Water",
  "Athlete Claims",
  "Book",
  "Historical",
  "Allied Materials",
  "Search Tools",
  "Official Enagic",
];

export default function References() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el)
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }
  }, [hash]);

  const grouped = citationsByTopic();
  const sortedTopics = TOPIC_ORDER.filter((t) => grouped[t]?.length);

  return (
    <>
      <section className="pt-40 md:pt-48 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <SectionHeading
            kicker="References · Bibliography"
            title={
              <>
                Every claim on this site,{" "}
                <em className="not-italic text-aqua-300">sourced.</em>
              </>
            }
            subtitle={
              <>
                Numbered citations across the site link here. Most entries are
                peer-reviewed papers indexed on PubMed; the rest are books and
                public-record databases I use. Where
                a doctor has given permission to cross-reference allied
                educational material, that material is acknowledged below.
              </>
            }
          />
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-4xl">
          {/* Quick jump nav */}
          <nav className="glass p-5 sm:p-6 mb-12">
            <div className="kicker mb-3">Jump to topic</div>
            <ul className="flex flex-wrap gap-2 text-sm text-silver-200">
              {sortedTopics.map((t) => (
                <li key={t}>
                  <a
                    href={`#topic-${t.replace(/\s+/g, "-").toLowerCase()}`}
                    className="inline-flex min-h-10 items-center rounded-full border border-silver-300/12 bg-white/[0.035] px-3 py-2 leading-tight transition hover:border-aqua-300/35 hover:text-aqua-300"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {sortedTopics.map((topic) => (
            <Reveal key={topic}>
              <section
                id={`topic-${topic.replace(/\s+/g, "-").toLowerCase()}`}
                className="mb-14"
              >
                <h2 className="font-display text-2xl sm:text-3xl text-silver-100 border-b border-silver-300/15 pb-3 mb-6">
                  {topic}
                </h2>
                <ol className="space-y-6">
                  {grouped[topic].map((c) => (
                    <li
                      key={c.id}
                      id={`cite-${c.id}`}
                      className="grid grid-cols-[2rem_1fr] gap-3 sm:gap-4 scroll-mt-24"
                    >
                      <span className="font-display text-aqua-300 text-lg tabular-nums">
                        [{c.id}]
                      </span>
                      <div>
                        {c.authors && (
                          <div className="text-silver-200 font-medium">
                            {c.authors}
                          </div>
                        )}
                        <div className="italic text-silver-100 mt-0.5">
                          {c.title}
                        </div>
                        <div className="text-silver-400/85 text-sm mt-1">
                          {c.source}
                        </div>
                        {c.url && (
                          <a
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex min-h-10 items-center text-aqua-300 text-sm leading-snug hover:text-aqua-200 underline decoration-aqua-400/40 underline-offset-4 break-all"
                          >
                            {c.url}
                          </a>
                        )}
                        {c.doctorNote && (
                          <div className="mt-3 p-3 rounded-lg bg-aqua-400/[0.05] border-l-2 border-aqua-400/40 text-sm text-silver-300/90 leading-relaxed">
                            <span className="text-aqua-300 text-[10px] tracking-ultra uppercase font-medium block mb-1">
                              Doctor's note
                            </span>
                            {c.doctorNote}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <div className="glass p-6 sm:p-8 mt-12">
              <div className="kicker">Editorial standard</div>
              <h3 className="mt-3 font-display text-xl text-silver-100">
                What counts as a citation here
              </h3>
              <p className="mt-3 text-silver-300/85 text-sm leading-relaxed">
                Quantitative claims (ORP values, % changes in biomarkers,
                molecule-cluster sizes, PubMed counts) are bound to a primary
                source. Mechanistic claims (aquaporins, electron donation,
                cellular respiration) are bound to either the seminal paper or
                a peer-reviewed review. Historical attributions are kept as
                attributions, not as proofs. Where a claim is my personal
                observation, it is labeled as such and not
                cited as research.
              </p>
              <p className="mt-3 text-silver-400/75 text-xs italic">
                This page is not medical advice. Always consult a qualified
                physician about your specific condition.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 text-center text-silver-400/70 text-sm">
            {CITATIONS.length} citations · Reviewed for this educational guide
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
