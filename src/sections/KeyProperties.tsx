import type { ReactNode } from "react";
import { Cite } from "@/components/Cite";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type PropertyEntry = { number: string; label: string; body: ReactNode; limit: string };

const PROPS: PropertyEntry[] = [
  { number: "01", label: "Reducing potential", body: <>Negative ORP indicates reducing potential. The exact reading depends on the machine, settings, flow rate, and source water; Enagic&apos;s current US K8 page lists a negative ORP specification of -722 mV <Cite ids={21} />. Molecular hydrogen is an active area of research <Cite ids={[1, 4]} />.</>, limit: "A meter reading describes the water. It does not predict a medical outcome." },
  { number: "02", label: "Structure teaching model", body: <>I use a cluster-of-grapes analogy to explain why water structure interests me. Electrolysis, minerals, and ions can affect how water molecules associate <Cite ids={5} />. Treat the smaller-cluster idea as an educational model, not a medical-outcome promise.</>, limit: "The grape-cluster image is an analogy, not a literal molecular picture." },
  { number: "03", label: "Alkaline pH", body: <>Kangen drinking-water settings are alkaline, commonly pH 8.5–9.5. That is a description of the water, not a promise to change the body&apos;s tightly regulated pH. My ERW conversation also includes electrolysis, molecular hydrogen, and reducing potential <Cite ids={3} />.</>, limit: "The body regulates blood pH tightly; drinking-water pH is not a health result." },
  { number: "04", label: "Interfacial water", body: <>Exclusion Zone (EZ) water is a proposed structured layer next to hydrophilic surfaces such as cell membranes. I treat it as an interesting teaching model for discussing water at biological interfaces, rather than a promised outcome from a product.</>, limit: "Interfacial-water concepts are an active research discussion, not a settled therapy." },
];

export function KeyProperties() {
  return (
    <section id="properties" data-section="properties" data-section-label="Measured Properties" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Measured Properties, Not Miracle Claims" title={<>Before any promise, ask <em className="not-italic text-aqua-300">better questions.</em></>} subtitle={<><p>The machine produces water with properties that can be described, tested, and compared. pH, oxidation-reduction potential, dissolved hydrogen, and mineral content belong to that measurable conversation.</p><p>Measurements still have limits. They describe the water coming from a particular source and setting; they do not predict what will happen in an individual body. Keeping that boundary visible is how useful education stays credible.</p></>} />
        <div className="mt-12 border-y border-white/[0.12] md:mt-16">
          {PROPS.map((property, index) => (
            <Reveal key={property.label} delay={index * 0.05}>
              <article className="grid gap-5 border-b border-white/[0.1] py-7 last:border-0 md:grid-cols-[minmax(13rem,.65fr)_minmax(0,1.35fr)] md:gap-12 md:py-10">
                <div className="flex gap-5"><span className="pt-1 font-mono text-xs text-aqua-300/80">{property.number}</span><div><div className="text-[10px] uppercase tracking-[0.24em] text-silver-400/65">A useful measurement</div><h3 className="mt-3 font-display text-3xl leading-tight text-silver-100 md:text-4xl">{property.label}</h3></div></div>
                <div className="max-w-2xl"><p className="text-sm leading-7 text-silver-200/88 md:text-[15px]">{property.body}</p><p className="mt-5 border-l border-aqua-300/45 pl-4 text-xs leading-5 text-silver-400/80"><span className="font-semibold text-aqua-200">Keep in mind: </span>{property.limit}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-7 max-w-3xl text-xs leading-relaxed text-silver-400/70">A reading can be useful without being a promise. That distinction is the starting point for responsible health education.</p>
      </div>
    </section>
  );
}
