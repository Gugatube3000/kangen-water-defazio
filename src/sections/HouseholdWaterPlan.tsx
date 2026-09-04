import { Cite } from "@/components/Cite";
import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ENAGIC_MACHINES, ANESPA_PRICE, ENAGIC_PRICE_LIST_URL } from "@/lib/enagic";
const anespa = ENAGIC_MACHINES.find((machine) => machine.name === "Anespa DX")!;

export function HouseholdWaterPlan() {
  return (
    <section id="household-water" data-section="household-water" data-section-label="Shower · Anespa" className="section-pad relative scroll-mt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="A separate solution for the shower" title={<>Drinking water and shower water. <em className="not-italic text-aqua-300">Two different jobs.</em></>}
          subtitle="The K8 serves the kitchen. Anespa is a separate bath-and-shower product, with its own cartridges and maintenance. Neither turns the other into a whole-house system." />
        <Reveal>
          <article className="mt-12 grid md:grid-cols-2 glass overflow-hidden" aria-labelledby="anespa-product-title">
            <div className="bg-white p-8 md:p-12 flex items-center justify-center">
              <img src={anespa.image} alt="Anespa DX bath and shower cartridge system" className="w-full max-h-96 object-contain" loading="lazy" />
            </div>
            <div className="p-7 md:p-10">
              <div className="kicker">Bath & shower · Separate purchase</div>
              <h3 id="anespa-product-title" className="mt-4 font-display text-4xl text-silver-100">Anespa DX</h3>
              <p className="mt-4 text-silver-300/85 leading-relaxed">Enagic describes a cartridge system for reducing chlorine and adding minerals to bath or shower water.
                It has no electrolysis plates and is not a drinking-water hydrogen generator<Cite ids={37} />.</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="kicker">Published US product price</div>
                <p className="mt-3 font-display text-4xl text-silver-100">{ANESPA_PRICE}</p>
                <p className="mt-3 text-xs text-silver-400 leading-relaxed">August 1, 2026 customer price list. Tax, shipping, and ongoing cartridge costs are additional.
                  Confirm the current price and terms with Enagic. Not included in the K8 cost calculator.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <PremiumButton href={anespa.productUrl} variant="ghost">Official Anespa details</PremiumButton>
                <PremiumButton href={ENAGIC_PRICE_LIST_URL} variant="ghost">Published price list</PremiumButton>
              </div>
            </div>
          </article>
        </Reveal>
        <p className="mt-7 mx-auto max-w-3xl text-center text-sm text-silver-400 leading-relaxed">For a home, spa, or wellness space, evaluate drinking water and shower water separately.
          Match any filtration to the source-water report and the product's tested scope. These are product roles, not treatment claims.</p>
      </div>
    </section>
  );
}
