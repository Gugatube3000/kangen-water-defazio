import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ENAGIC_BUSINESS_URL,
  ENAGIC_EARNINGS_DISCLOSURE_URL,
} from "@/lib/enagic";
import { BusinessSection } from "@/sections/BusinessSection";
import { FinalCTA } from "@/sections/FinalCTA";

const officialPoints = [
  {
    title: "Product sales, not recruitment",
    body: "Enagic's official US business page says distributors earn commissions from product sales, not recruitment.",
  },
  {
    title: "Independent business",
    body: "Distributors are independent contractors who set their own pace and build through education, service, and product knowledge.",
  },
  {
    title: "8-point compensation plan",
    body: "Enagic describes a patented 8-point commission system. Review the official opportunity page and earnings disclosure before making any business decision.",
  },
  {
    title: "No income guarantee",
    body: "Results vary. This site does not estimate income, promise earnings, or replace the official Enagic documents.",
  },
];

export default function Business() {
  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <SectionHeading
            kicker="The Opportunity"
            title={
              <>
                How the Enagic business model{" "}
                <em className="not-italic text-aqua-300">actually works.</em>
              </>
            }
            subtitle="A plain-language overview for people who want to understand the independent-distributor model without hype. Health comes first; business claims stay grounded in Enagic's official materials."
          />
        </div>
      </section>

      <BusinessSection showPageLink={false} />

      <section className="section-pad pt-0 relative">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {officialPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-2xl border border-white/[0.1] bg-white/[0.045] p-6 shadow-glass backdrop-blur-2xl"
                >
                  <h2 className="font-display text-2xl text-silver-100">
                    {point.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-silver-300/82">
                    {point.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 rounded-2xl border border-aqua-300/18 bg-aqua-300/[0.055] p-6 md:p-8">
              <div className="kicker">Official Resources</div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-silver-300/82">
                Read Enagic's own opportunity page and earnings disclosure
                before evaluating the business. Wellness-product affiliate
                links can be added later, once David supplies and approves the
                exact destinations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PremiumButton
                  href={ENAGIC_BUSINESS_URL}
                  size="md"
                  variant="primary"
                >
                  Official Opportunity Page
                </PremiumButton>
                <PremiumButton
                  href={ENAGIC_EARNINGS_DISCLOSURE_URL}
                  size="md"
                  variant="ghost"
                >
                  Earnings Disclosure
                </PremiumButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
