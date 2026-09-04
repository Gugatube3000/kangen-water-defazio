import type { ReactNode } from "react";
import { Cite } from "@/components/Cite";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ElectricalVsChemical() {
  return (
    <section data-section="electrical-chemical" data-section-label="Electrical vs Chemical" className="section-pad relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="A visual model for electron transfer"
          title={<>The difference between <em className="not-italic text-aqua-300">a measurement</em> and a promise.</>}
          subtitle="Redox chemistry is about movement and balance, not a shortcut. This section separates what can be measured in water from what researchers are still investigating."
        />

        <div className="mt-12 max-w-5xl space-y-9 sm:mt-16">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/[0.1] bg-navy-950/30 p-6 sm:p-9">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-aqua-200/70"><span className="h-px w-9 bg-aqua-300/50" />How to read this topic</div>
              <div className="mt-7 grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
                <ExplanationStep number="01" title="Measure the water" body="ORP and pH describe properties of the water in the glass. They are useful measurements—not health outcomes." icon={<MeterIcon />} />
                <FlowArrow />
                <ExplanationStep number="02" title="Ask the research question" body="Researchers study dissolved molecular hydrogen and oxidative-stress signaling. The evidence is still being developed." icon={<MoleculeIcon />} tone="aqua" />
                <FlowArrow />
                <ExplanationStep number="03" title="Keep the conclusion honest" body="A measurement or mechanism does not prove a treatment, a diagnosis, or a replacement for clinical care." icon={<ScopeIcon />} />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.1] bg-white/[0.1] md:grid-cols-2">
            <Reveal>
              <article className="h-full bg-navy-950/45 p-7 sm:p-9">
                <div className="kicker text-yellow-200/80">Chemical context</div>
                <h3 className="mt-4 font-display text-3xl text-silver-100">Antioxidant systems are varied.</h3>
                <p className="mt-4 text-sm leading-7 text-silver-300/82">Food-derived and endogenous antioxidant systems participate in many chemical reactions. What matters depends on the molecule, the tissue, and the wider biological context.</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="h-full bg-aqua-300/[0.055] p-7 sm:p-9">
                <div className="kicker">Research context</div>
                <h3 className="mt-4 font-display text-3xl text-silver-100">Hydrogen is a question under study.</h3>
                <p className="mt-4 text-sm leading-7 text-silver-300/82">Molecular hydrogen is being studied for possible effects on oxidative-stress signaling and related pathways. It is not a literal “electron delivery” shortcut, and clinical effects remain an active research question.</p>
              </article>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mt-10 max-w-3xl border-l border-aqua-300/45 pl-5">
            <div className="kicker">Keep the model in its lane</div>
            <p className="mt-3 font-display text-lg leading-relaxed text-silver-100">Negative ORP is a water-property measurement. Molecular hydrogen is an active research area. Neither is a promise that ERW treats disease or replaces medical care. <Cite ids={4} /></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExplanationStep({ number, title, body, icon, tone = "silver" }: { number: string; title: string; body: string; icon: ReactNode; tone?: "aqua" | "silver" }) {
  const isAqua = tone === "aqua";
  return (
    <article className={`rounded-2xl border p-5 sm:p-6 ${isAqua ? "border-aqua-300/30 bg-aqua-300/[0.07]" : "border-white/[0.1] bg-white/[0.025]"}`}>
      <div className="flex items-center justify-between"><span className="font-mono text-xs text-aqua-300/80">{number}</span><span className={isAqua ? "text-aqua-200" : "text-silver-300"}>{icon}</span></div>
      <h3 className="mt-6 font-display text-2xl text-silver-100">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-silver-300/80">{body}</p>
    </article>
  );
}

function FlowArrow() {
  return <div aria-hidden className="hidden items-center justify-center md:flex"><svg viewBox="0 0 48 24" className="h-6 w-12 text-aqua-300/55" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12h38M32 5l8 7-8 7" /></svg></div>;
}

function MeterIcon() {
  return <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 24a10 10 0 0 1 20 0" /><path d="M16 14v7l5-3" /><path d="M5 24h22" /><circle cx="16" cy="14" r="1" fill="currentColor" /></svg>;
}

function MoleculeIcon() {
  return <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="16" r="5" /><circle cx="21" cy="16" r="5" /><path d="M16 16h1" /></svg>;
}

function ScopeIcon() {
  return <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="16" r="10" /><path d="M16 10v7M16 22h.01" strokeLinecap="round" /><path d="M6 6l20 20" /></svg>;
}
