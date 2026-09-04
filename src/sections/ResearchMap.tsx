import { Cite } from "@/components/Cite";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  { number: "01", title: "Start with the cell", body: "Learn the foundations first: ATP, mitochondria, and the balance between useful cellular signals and excess stress.", href: "/science", action: "Explore the science" },
  { number: "02", title: "Then assess the water", body: "Look up your municipal report and ask practical questions about source water, filtration, and the measurable properties of a system.", href: "#tap-water", action: "Check your water" },
  { number: "03", title: "Read the research", body: "Molecular hydrogen is an emerging topic. Follow the citations, compare study designs, and bring personal health questions to your clinician.", href: "/references", action: "Open the references" },
];

export function ResearchMap() {
  return (
    <section data-section="start-here" data-section-label="Start Here" className="section-pad relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(45%_65%_at_75%_45%,rgba(72,199,220,0.11),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading kicker="A clearer way to explore" title={<>Begin with <em className="not-italic text-aqua-300">curiosity, not certainty.</em></>} subtitle="This site follows my preferred sequence: understand the biology, examine the water, then evaluate the evidence for yourself." />
        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-3">
          {STEPS.map((step, index) => <Reveal key={step.number} delay={index * 0.06}><a href={step.href} className="glass group block h-full p-6 transition-colors hover:border-aqua-300/35 hover:bg-white/[0.07] md:p-7"><div className="flex items-center justify-between gap-4"><span className="font-display text-3xl text-aqua-300/70">{step.number}</span><span className="text-[10px] uppercase tracking-ultra text-aqua-200/60">Guided path</span></div><h3 className="mt-6 font-display text-2xl text-silver-100">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-silver-300/82">{step.body}</p><span className="mt-6 inline-flex text-sm font-semibold text-aqua-200 transition group-hover:text-aqua-100">{step.action} <span aria-hidden className="ml-2">→</span></span></a></Reveal>)}
        </div>
        <div className="mt-7 max-w-3xl border-l border-aqua-300/45 pl-4">
          <p className="font-display text-xl leading-snug text-silver-100">Healthspan is an ecosystem — not one molecule.</p>
          <p className="mt-2 text-xs leading-relaxed text-silver-400/70">The foundation remains movement, food quality, sleep, recovery, stress management, preventive care, and careful scientific curiosity. Molecular hydrogen belongs in that broader conversation, not above it <Cite ids={[4, 28]} />.</p>
        </div>
      </div>
    </section>
  );
}
