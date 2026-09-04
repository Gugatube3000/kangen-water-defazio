import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PremiumButton } from "@/components/PremiumButton";

const steps = [
  {
    number: "01",
    title: "Learn the product first.",
    description:
      "The conversation starts with water quality, the machine lineup, and the household use case. Health education comes before any business discussion.",
    color: "text-aqua-300/60",
  },
  {
    number: "02",
    title: "Share through education and service.",
    description:
      "Independent distributors explain the products, answer questions, and help customers work through official Enagic purchasing channels.",
    color: "text-aqua-300/50",
  },
  {
    number: "03",
    title: "Commissions come from product sales.",
    description:
      "Enagic's official US business page says distributors earn commissions from product sales, not recruitment. The company describes a patented 8-point compensation plan.",
    color: "text-aqua-300/40",
  },
  {
    number: "04",
    title: "Build at your own pace.",
    description:
      "Distributors are independent contractors. They decide how and when to work, while using official tools, policies, and training resources.",
    color: "text-aqua-300/30",
  },
  {
    number: "05",
    title: "Keep the claims grounded.",
    description:
      "Results vary. There is no income guarantee, and this page does not estimate earnings. Read Enagic's official opportunity page and disclosure before making a decision.",
    color: "text-aqua-300/20",
  },
];

export function BusinessSection({
  showPageLink = true,
}: {
  showPageLink?: boolean;
}) {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          kicker="Health - Wealth - The Opportunity"
          title={
            <>
              Your greatest wealth{" "}
              <em className="not-italic text-aqua-300">is your health.</em>
            </>
          }
          subtitle={
            <>
              <p>
                The business conversation comes last for a reason. A person
                should first understand the water, the research, the machine,
                and the responsibilities that come with making health-related
                claims.
              </p>
              <p>
                I see health and financial wellness as connected,
                but the opportunity is still a product-sales business with no
                guaranteed result. The steps below explain the model in plain
                language, beginning with education and ending with realistic
                expectations.
              </p>
            </>
          }
        />

        {/* Editorial numbered steps — no cards */}
        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr] gap-4 md:gap-8 py-8 border-b border-silver-300/10 first:border-t">
                <span
                  className={`font-display text-4xl md:text-5xl font-light leading-none tabular-nums ${step.color} -mt-1`}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-silver-100 leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-silver-300/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Summary quote — editorial, no card */}
        <Reveal>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="hairline" />
            <blockquote className="py-10 md:py-14 font-display text-2xl md:text-3xl text-silver-100 leading-relaxed text-balance text-center">
              "Our biggest wealth is our health -{" "}
              <em className="not-italic text-aqua-300">
                so let's tie the two together."
              </em>
            </blockquote>
            <div className="kicker text-center pb-8">
              Dr. David De Fazio, MD
            </div>
            <div className="hairline" />
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-center text-xs text-silver-400/55 leading-relaxed max-w-2xl mx-auto">
            The business opportunity described here reflects Enagic's
            independent distributor model. Commissions are based on product
            sales, not recruitment. Results vary. This is educational and does
            not constitute a financial guarantee or income promise.
          </p>
        </Reveal>
        {showPageLink && (
          <Reveal>
            <div className="mt-8 text-center">
              <PremiumButton to="/business" size="md" variant="ghost">
                Understand the Business Model
              </PremiumButton>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
