import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CITATIONS, citationsByTopic } from "@/lib/citations";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/sections/FinalCTA";

const TOPIC_ORDER = [
  "Hydration Physiology",
  "Nutrition",
  "Molecular Hydrogen",
  "Selective Antioxidant",
  "Athletic Performance",
  "Water Structure",
  "Aquaporins",
  "Cellular Respiration",
  "Mitochondrial Biology",
  "Oxidative Stress",
  "Cell Biology",
  "Electromagnetic Fields",
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
      if (el) {
        const topic = el.closest("details.reference-topic") as HTMLDetailsElement | null;
        if (topic) topic.open = true;
        requestAnimationFrame(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        });
      }
    }
  }, [hash]);

  const grouped = citationsByTopic();
  const sortedTopics = TOPIC_ORDER.filter((t) => grouped[t]?.length);

  return (
    <>
      <section className="pb-8 pt-28 md:pb-16 md:pt-48">
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
          <nav className="glass mb-7 p-4 sm:p-6 md:mb-12">
            <div className="kicker mb-3">Jump to topic</div>
            <ul className="mobile-topic-strip flex gap-2 text-sm text-silver-200 md:flex-wrap">
              {sortedTopics.map((t) => (
                <li key={t}>
                  <a
                    href={`#topic-${t.replace(/\s+/g, "-").toLowerCase()}`}
                    onClick={() => {
                      const topic = document.getElementById(
                        `topic-${t.replace(/\s+/g, "-").toLowerCase()}`,
                      ) as HTMLDetailsElement | null;
                      if (topic) topic.open = true;
                    }}
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
              <details
                id={`topic-${topic.replace(/\s+/g, "-").toLowerCase()}`}
                className="reference-topic group mb-3 scroll-mt-24 md:mb-14"
              >
                <summary className="reference-topic-summary md:hidden">
                  <span>
                    <span className="block font-display text-2xl leading-tight text-silver-100">
                      {topic}
                    </span>
                    <span className="mt-1 block text-xs text-silver-400/75">
                      {grouped[topic].length} {grouped[topic].length === 1 ? "source" : "sources"}
                    </span>
                  </span>
                  <span className="reference-topic-chevron inline-flex h-9 w-9 items-center justify-center rounded-full border border-aqua-300/20 bg-aqua-300/[0.08] text-xl text-aqua-200 transition-transform">
                    +
                  </span>
                </summary>
                <div className="reference-topic-body">
                  <h2 className="mb-6 hidden border-b border-silver-300/15 pb-3 font-display text-2xl text-silver-100 md:block sm:text-3xl">
                    {topic}
                  </h2>
                  <ol className="space-y-5 md:space-y-6">
                    {grouped[topic].map((c) => (
                      <li
                        key={c.id}
                        id={`cite-${c.id}`}
                        className="grid scroll-mt-24 grid-cols-[2rem_1fr] gap-3 sm:gap-4"
                      >
                        <span className="font-display text-lg tabular-nums text-aqua-300">
                          [{c.id}]
                        </span>
                        <div>
                          {c.authors && (
                            <div className="font-medium text-silver-200">
                              {c.authors}
                            </div>
                          )}
                          <div className="mt-0.5 italic text-silver-100">
                            {c.title}
                          </div>
                          <div className="mt-1 text-sm text-silver-400/85">
                            {c.source}
                          </div>
                          {c.url && (
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex min-h-10 items-center text-sm leading-snug text-aqua-300 underline decoration-aqua-400/40 underline-offset-4 hover:text-aqua-200 md:break-all"
                            >
                              <span className="md:hidden">Open source ↗</span>
                              <span className="hidden md:inline">{c.url}</span>
                            </a>
                          )}
                          {c.doctorNote && (
                            <div className="mt-3 rounded-lg border-l-2 border-aqua-400/40 bg-aqua-400/[0.05] p-3 text-sm leading-relaxed text-silver-300/90">
                              <span className="mb-1 block text-[10px] font-medium uppercase tracking-ultra text-aqua-300">
                                Doctor's note
                              </span>
                              {c.doctorNote}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
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
