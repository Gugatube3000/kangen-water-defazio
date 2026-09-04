import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";
import { ENAGIC_MACHINES } from "@/lib/enagic";

const k8 = ENAGIC_MACHINES.find((machine) => machine.name === "LeveLuk K8")!;

export function MeetMachines() {
  return (
    <section id="machines" data-section="kitchen-solution" data-section-label="Kitchen · K8" className="section-pad relative scroll-mt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="The kitchen solution" title={<>One place to start. <em className="not-italic text-aqua-300">The LeveLuk K8.</em></>}
          subtitle="A countertop ionizer for the kitchen. Understand what it does, then look at the price and ownership assumptions below." />
        <Reveal>
          <article className="mt-12 glass overflow-hidden grid md:grid-cols-2" aria-labelledby="k8-product-title">
            <div className="bg-white p-8 md:p-12 flex items-center justify-center">
              <img src={k8.image} alt="Enagic LeveLuk K8 countertop water ionizer" loading="lazy" className="w-full max-h-96 object-contain" />
            </div>
            <div className="p-7 md:p-10">
              <div className="kicker">Drinking water · Countertop</div>
              <h3 id="k8-product-title" className="mt-4 font-display text-4xl text-silver-100">{k8.name}</h3>
              <p className="mt-4 text-silver-300/85 leading-relaxed">The K8 uses eight platinum-coated titanium plates for electrolysis.
                Source water and operating conditions affect its output. Review the manual and use only the settings intended for drinking.</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-white/10 py-5 text-sm">
                <div><dt className="text-silver-400">Electrode plates</dt><dd className="mt-1 text-silver-100">8</dd></div>
                <div><dt className="text-silver-400">Published warranty</dt><dd className="mt-1 text-silver-100">5 years · see terms</dd></div>
              </dl>
              <p className="mt-5 text-sm text-silver-300/85 leading-relaxed">This is a kitchen device, not a whole-house system. Shower water has a separate solution below.</p>
              <div className="mt-6"><PremiumButton href={k8.productUrl} variant="ghost">Read the official K8 specifications</PremiumButton></div>
              <Link to="/#kangen" className="mt-5 inline-flex min-h-11 items-center text-sm text-aqua-200 underline underline-offset-4">Revisit how electrolysis works →</Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
