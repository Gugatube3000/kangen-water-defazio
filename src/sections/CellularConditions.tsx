import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Cite } from "@/components/Cite";
import { ImageZoom } from "@/components/ImageZoom";

export function CellularConditions() {
  return (
    <section id="support-your-cells" data-section="support-your-cells" data-section-label="Support Your Cells" aria-labelledby="cellular-conditions-title" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="kicker">The big picture · Two simple visuals</div>
            <h2 id="cellular-conditions-title" className="mt-4 font-display text-4xl leading-tight text-silver-100 md:text-5xl">Support your cells.<br /><span className="text-aqua-200">Start with the conditions.</span></h2>
            <p className="mt-5 max-w-xl leading-relaxed text-silver-300/85">Your body has built-in systems for repair. Start with what cells need, then see where antioxidant defenses fit in.</p>
          </div>
        </Reveal>
        <div className="mt-9 space-y-8">
          <figure>
            <ImageZoom src="/science/cellular-environment-simple.png" alt="The cellular environment matters: water, nutrients, and oxygen enter a cell; waste leaves. Cells depend on exchange to function." className="aspect-[3/2] bg-[#faf9f4]" />
            <figcaption className="mt-3 text-sm leading-relaxed text-silver-300/85">01 · What cells need. A simplified view of the exchange that supports everyday function.</figcaption>
          </figure>
          <figure>
            <ImageZoom src="/science/antioxidant-balance-simple.png" alt="Antioxidants help maintain balance. A conceptual cell illustration represents reactive molecules, antioxidant defenses, and cellular balance. The goal is balance, not eliminating every reactive molecule." className="aspect-[3/2] bg-[#faf9f4]" />
            <figcaption className="mt-3 text-sm leading-relaxed text-silver-300/85">02 · Keeping reactions in balance. A conceptual illustration of antioxidant defenses, not a literal protective barrier.<Cite ids={49} /></figcaption>
          </figure>
        </div>
        <details className="mt-9 rounded-2xl border border-white/10 bg-white/[0.035] px-5 sm:px-6">
          <summary className="cursor-pointer py-5 text-sm font-medium text-silver-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua-300">Where do antioxidants fit in?</summary>
          <div className="max-w-3xl pb-6 text-sm leading-relaxed text-silver-300/85">
            <p>Cells produce reactive molecules during normal activity. Antioxidant defenses help keep these reactions in balance. When production exceeds the body’s defenses and repair capacity, oxidative damage can build up.<Cite ids={49} /></p>
            <p className="mt-3">The goal is balance: some reactive molecules also help cells communicate and adapt.</p>
            <Link to="/science" className="mt-4 inline-block text-aqua-200 underline decoration-aqua-300/40 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua-300">Explore the science →</Link>
          </div>
        </details>
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-silver-400">Inspired by the cellular-environment theme in Dr. Peggy Parker’s educational materials. Persistent symptoms can have many causes; this overview does not explain an individual illness or establish a benefit from a particular water product.</p>
      </div>
    </section>
  );
}
