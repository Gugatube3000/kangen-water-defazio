import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Cite } from "@/components/Cite";
import { ImageZoom } from "@/components/ImageZoom";
import { fadeUp, stagger } from "@/lib/motion";

/** Research-grounded overview of molecular hydrogen and redox signaling. */

/** Inline "?" that reveals a short plain-language explanation on click. */
function InfoTip({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="ml-1 inline-flex h-[1.15em] w-[1.15em] items-center justify-center rounded-full bg-aqua-400/20 align-middle text-[0.7em] font-semibold text-aqua-200 leading-none transition hover:bg-aqua-400/35"
        aria-label="What is this?"
      >
        ?
      </button>
      {open && (
        <span
          role="note"
          className="absolute left-1/2 bottom-full z-50 mb-2 w-72 max-w-[80vw] -translate-x-1/2 rounded-xl border border-aqua-400/30 bg-navy-900 p-3.5 text-left text-[12px] font-normal not-italic normal-case leading-snug text-silver-200 shadow-glass"
        >
          {children}
        </span>
      )}
    </span>
  );
}

type Block = {
  kicker: string;
  title: string;
  body: ReactNode;
};

const BLOCKS: Block[] = [
  {
    kicker: "01 · A hypothesis under study",
    title: "Redox modulation, not a universal shield",
    body: (
      <>
        Reactive oxygen species can participate in normal signaling as well as
        damage. Molecular hydrogen was initially proposed to react selectively
        with particularly reactive species; later work also studies whether it
        influences signaling pathways such as Nrf2. These mechanisms remain
        hypotheses to test, not proof that H₂ finds and removes only “bad”
        radicals in people <Cite ids={[1, 4, 49]} />.
      </>
    ),
  },
  {
    kicker: "02 · The water is the carrier",
    title: "Water acts as a solvent",
    body: (
      <>
        Think of the water as the truck and the hydrogen as the cargo. Water is
        a solvent — it dissolves and carries molecular hydrogen and minerals
        into the body and participates in normal transport and waste-removal
        processes.
        H₂ is a very small, nonpolar molecule that can diffuse through biological
        membranes in experimental models. Distribution does not guarantee a
        clinical effect <Cite ids={4} />. The minerals stay too:
        electrolyzed reduced water still carries magnesium, potassium, and
        sodium — it is <em>not</em> demineralized like reverse-osmosis water.
      </>
    ),
  },
  {
    kicker: "03 · Hydrogen, not alkalinity",
    title: "Why bottled “alkaline” water isn't the same",
    body: (
      <>
        Your blood pH is held near 7.35–7.45 no matter what you drink — alkaline
        water does not meaningfully change it. So what deserves closer study?
        I point visitors to the research on dissolved{" "}
        <em>molecular hydrogen</em>, rather than treating pH alone as the
        headline <Cite ids={[3, 25]} />. That's
        the difference between water made alkaline with chemicals (bottled
        “alkaline” water) and water that is{" "}
        produced by electrolysis and containing dissolved molecular hydrogen{" "}
        <Cite ids={36} />.
      </>
    ),
  },
];

const RESEARCH_LINKS = [
  {
    title: "Hydrogen Studies",
    body: "Search a condition or topic across a curated molecular-hydrogen research index.",
    href: "https://hydrogenstudies.com/",
  },
  {
    title: "Molecular Hydrogen Institute",
    body: "Start with Tyler LeBaron's educational research library.",
    href: "https://www.molecularhydrogeninstitute.org/",
  },
  {
    title: "PubMed",
    body: "Read the indexed primary literature from the U.S. National Library of Medicine.",
    href: "https://pubmed.ncbi.nlm.nih.gov/?term=molecular+hydrogen+water",
  },
  {
    title: "Google Scholar",
    body: "Search broadly across papers, reviews, and citing articles.",
    href: "https://scholar.google.com/scholar?q=molecular+hydrogen+water",
  },
];

export function MolecularHydrogen() {
  return (
    <section
      id="molecular-hydrogen"
      data-section="molecular-hydrogen"
      data-section-label="Molecular Hydrogen"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_30%,rgba(72,199,220,0.10),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="What Is Molecular Hydrogen?"
          title={
            <>
              Lead with the research,{" "}
              <em className="not-italic text-aqua-300">
                not the product.
              </em>
            </>
          }
          subtitle={
            <>
              <p>
                The area that makes me most curious is molecular hydrogen
                dissolved in water. This small molecule is being studied in
                relation to oxidative stress, redox signaling, exercise
                response, metabolic health, and healthy aging.
              </p>
              <p>
                Interest is not the same as certainty. The useful task here is
                to understand why researchers are asking these questions, what
                early findings can and cannot establish, and why dissolved
                hydrogen matters more to this discussion than “alkaline” on a
                bottle label.
              </p>
            </>
          }
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-5 lg:grid-cols-3"
        >
          {BLOCKS.map((b) => (
            <motion.div key={b.title} variants={fadeUp}>
              <GlassCard padding="lg" className="h-full">
                <div className="kicker">{b.kicker}</div>
                <h3 className="mt-4 font-display text-2xl text-silver-100 leading-tight">
                  {b.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-silver-300/85">
                  {b.body}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <div className="mt-10 grid gap-6 rounded-3xl border border-aqua-300/18 bg-aqua-300/[0.045] p-5 sm:p-7 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
            <div>
              <div className="kicker">Small enough to diffuse</div>
              <h3 className="mt-3 font-display text-3xl text-silver-100">
                Movement is plausible. Benefit is a separate question.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-silver-300/82">
                Molecular hydrogen is small and nonpolar, so researchers expect
                it to cross biological membranes by simple diffusion. That helps
                explain how H₂ may distribute through tissues; it does not, by
                itself, establish a clinical effect <Cite ids={4} />.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-silver-400/70">
                Molecular Hydrogen Institute webinar visual, supplied with
                publication authorization.
              </p>
            </div>
            <ImageZoom
              src="/webinar/mhi-hydrogen-membrane-diffusion-cropped.webp"
              alt="Molecular Hydrogen Institute teaching slide comparing simple diffusion across a cell membrane with facilitated diffusion and active transport."
              className="aspect-[1.78/1] bg-white"
              imageClassName="object-contain"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-5 rounded-3xl border border-white/[0.1] bg-white/[0.035] p-5 sm:p-7 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
            <ImageZoom
              src="/evidence-guide/hydrogen-history.png"
              alt="Short history of molecular-hydrogen research, from early observations to modern human trials and systematic reviews."
              className="aspect-[1.96/1] bg-[#f7f5ef]"
              imageClassName="p-3 sm:p-4"
            />
            <div>
              <div className="kicker">A small field with a long backstory</div>
              <h3 className="mt-3 font-display text-3xl text-silver-100">History is context, not evidence strength.</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-300/82">
                Early observations, mechanistic papers, and a growing number of
                human studies explain why the topic attracts attention. The
                quality of the current human evidence—not the age or volume of
                the field—determines what conclusions are justified.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Structured / Exclusion-Zone water — with inline click-to-explain */}
        <Reveal>
          <div className="mt-10 glass p-7 md:p-9">
            <div className="kicker">A note on the water you're made of</div>
            <p className="mt-4 max-w-3xl text-silver-200/90 leading-relaxed text-balance">
              The water touching cells is not a simple glass-of-tap-water
              picture. One area of active discussion is{" "}
              <span className="text-aqua-300">structured water</span>
              <InfoTip>
                Also called <strong>Exclusion-Zone (EZ) water</strong>. Some
                educators describe structured interfacial layers as a "fourth
                phase" beyond the familiar solid, liquid, and gas categories.
                I use the idea as a teaching model. Treat it as an active
                research discussion, not as a settled medical claim or a
                promised outcome from drinking hydrogen-rich water.
              </InfoTip>
              . When people ask “what kind of water supports my water-rich body?”,
              it is a useful doorway into a more careful conversation about
              water quality, hydration, and what the research can actually show.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 mx-auto max-w-2xl text-center text-xs text-silver-400/70 leading-relaxed">
            Educational only. Molecular hydrogen is a promising but still-emerging
            area of research; it is not a cure and nothing here is medical advice.
            Always consult a qualified physician about your specific condition.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-12 glass p-7 md:p-9">
            <div className="kicker">Research It for Yourself</div>
            <h3 className="mt-3 max-w-3xl font-display text-3xl text-silver-100 md:text-4xl">
              See studies associated with molecular hydrogen and your health
              questions.
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-silver-300/82">
              I want to offer a practical research path, not a promise. Use
              these tools to explore the literature, then bring condition-
              specific questions to a qualified clinician.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {RESEARCH_LINKS.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-aqua-300/35 hover:bg-aqua-300/[0.06]"
                >
                  <div className="text-sm font-semibold text-aqua-200">
                    {link.title} →
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-silver-300/75">
                    {link.body}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
