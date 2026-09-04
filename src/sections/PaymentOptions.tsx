import { GlassCard } from "@/components/GlassCard";
import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ENAGIC_K8_PAYMENT_URL,
  ENAGIC_PAYMENT_METHODS_URL,
  K8_DEPOSIT,
  K8_PAYMENT_OPTIONS,
  K8_PRICE,
} from "@/lib/enagic";

export function PaymentOptions() {
  return (
    <section
      id="payment-options"
      data-section="payment-options"
      data-section-label="Payment Options"
      className="section-pad relative overflow-hidden scroll-mt-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_42%,rgba(164,231,240,0.12),transparent_72%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="The price, before the comparison"
          title={
            <>
              What does the{" "}
              <em className="not-italic text-aqua-300">K8 cost?</em>
            </>
          }
          subtitle="Start with the published price. Then consider the ongoing costs and your household's actual needs. The figures below come from Enagic's January 22, 2026 payment chart; confirm current terms before making a decision."
        />

        <Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
            <GlassCard padding="lg" className="h-full">
              <div className="kicker">LeveLuk K8 - Published Example</div>
              <div className="mt-5 font-display text-5xl text-silver-100">
                {K8_PRICE}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-silver-300/82">
                Enagic's January 22, 2026 K8 payment chart lists a {K8_DEPOSIT}{" "}
                deposit for monthly plans. Sales tax and shipping are
                additional. The processing charge is $20 per month.
              </p>
              <div className="mt-4 rounded-2xl border-l-2 border-aqua-400/40 bg-aqua-400/[0.05] p-4">
                <div className="kicker text-aqua-300/90">How to read this</div>
                <p className="mt-2 text-xs leading-relaxed text-silver-300/85">
                  The {K8_DEPOSIT} <strong>down payment is only part of the upfront amount</strong>:
                  add the plan's processing charge, sales tax, and shipping shown in the official chart.
                  The remaining product balance is split into the number of monthly
                  payments you choose. So a “3 payments” plan means the deposit
                  up front, then three monthly installments — not three payments
                  total.
                </p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-silver-400/72">
                Pricing and processing fees are from the Jan 22, 2026 chart and
                can change — always confirm current terms through official Enagic
                channels. The published schedule does not include a 9-month K8
                plan, so we don't estimate one.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PremiumButton
                  href={ENAGIC_K8_PAYMENT_URL}
                  size="md"
                  variant="primary"
                >
                  Open Official K8 Chart
                </PremiumButton>
                <PremiumButton
                  href={ENAGIC_PAYMENT_METHODS_URL}
                  size="md"
                  variant="ghost"
                >
                  Payment Methods
                </PremiumButton>
              </div>
            </GlassCard>

            <div className="grid gap-3 sm:grid-cols-2">
              {K8_PAYMENT_OPTIONS.map((option) => (
                <div
                  key={option.label}
                  className="rounded-2xl border border-white/[0.1] bg-white/[0.045] p-4 shadow-glass backdrop-blur-2xl"
                >
                  <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80">
                    {option.label}
                  </div>
                  <div className="mt-3 font-display text-2xl text-silver-100">
                    {option.monthlyPayment}
                  </div>
                  <div className="mt-2 text-xs leading-relaxed text-silver-400/75">
                    Processing charge: {option.processingCharge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
