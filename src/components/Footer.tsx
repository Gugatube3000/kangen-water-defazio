import { Link } from "react-router-dom";
import { PremiumButton } from "./PremiumButton";
import { CONTACT_MAILTO, TELEGRAM_URL } from "@/lib/motion";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-12 border-t border-silver-300/10 bg-navy-950/60 backdrop-blur-xl md:mt-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-10 md:py-16 lg:grid-cols-3 lg:gap-12 lg:px-16">
        <div>
          <div className="font-display text-2xl text-silver-100">
            Dr. David De Fazio
          </div>
          <div className="kicker mt-2">Wellness & Health Optimization</div>
          <p className="mt-5 text-sm text-silver-300/80 leading-relaxed max-w-sm">
            "Life without balance, is Life in pathology."
          </p>
          <p className="mt-4 text-xs text-silver-400/70 leading-relaxed max-w-sm">
            An educational resource on Electrolyzed Reduced Water and the
            science of cellular hydration, from a physician's perspective.
          </p>
        </div>

        <div>
          <div className="kicker">Explore</div>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 text-sm text-silver-300/80 sm:grid-cols-4 lg:mt-4 lg:block lg:space-y-1">
            {[
              ["/", "Home"],
              ["/ask-defazio", "HydroAIgen"],
              ["/library", "Library"],
              ["/science", "Science"],
              ["/solution", "Solution"],
              ["/stories", "Stories"],
              ["/business", "Opportunity"],
              ["/doctor", "Dr. De Fazio"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  className="inline-flex min-h-10 min-w-10 items-center py-2 hover:text-silver-100"
                  to={to}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="kicker">Get In Touch</div>
          <p className="mt-4 text-sm text-silver-300/80 leading-relaxed">
            Send Dr. De Fazio a note. He replies when he is off-call and can
            arrange an educational Zoom conversation if it makes sense. There
            is no fee or paywall to get in touch.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <PremiumButton href={CONTACT_MAILTO} variant="primary" size="md">
              Contact me
            </PremiumButton>
            <PremiumButton
              to="/ask-defazio"
              variant="ghost"
              size="md"
            >
              HydroAIgen
            </PremiumButton>
          </div>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex min-h-20 items-center gap-4 rounded-xl border border-white/[0.1] bg-white/[0.04] p-3 transition hover:border-aqua-300/30 hover:bg-aqua-300/[0.07]"
          >
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white">
              <img
                src="/contact/telegram-qr.jpg"
                alt="Telegram QR code for Dr. David De Fazio"
                width={591}
                height={1280}
                className="h-full w-full object-cover object-[center_37%]"
                loading="lazy"
              />
            </div>
            <span>
              <span className="block text-sm font-semibold text-silver-100">Message on Telegram</span>
              <span className="mt-1 block text-xs text-aqua-200">@DE_PHAZZ20</span>
            </span>
          </a>
        </div>
      </div>

      <div className="border-t border-silver-300/10">
        <div className="mx-auto max-w-7xl space-y-4 px-5 py-6 md:px-10 md:py-8 lg:px-16">
          <p className="text-[11px] leading-relaxed text-silver-400/70 max-w-4xl">
            <strong className="text-silver-300/90 font-medium">
              Medical Disclaimer:
            </strong>{" "}
            This site is educational. Electrolyzed Reduced Water is not a cure,
            and nothing here is medical advice, diagnosis, or treatment.
            Drinking ERW is not a substitute for medical care — always consult
            your healthcare professional regarding health decisions.
          </p>
          <p className="text-[11px] leading-relaxed text-silver-400/70 max-w-4xl">
            Kangen Water® and Enagic® are registered trademarks of Enagic Co.,
            Ltd. This site is independently operated for educational purposes
            and is not an official Enagic property. Enagic products are sold
            exclusively through authorized Enagic Independent Distributors.
            Dr. De Fazio is an independent distributor and may receive
            compensation from purchases made through his organization.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-[11px] text-silver-400/60">
              © {year} Dr. David De Fazio · Wellness & Health Optimization
            </p>
            <div className="flex items-center gap-4">
              <p className="text-[11px] text-silver-400/60 tracking-wide">
                "Change your water… change your life."
              </p>
              <span className="text-silver-400/20 text-[11px]">·</span>
              <a
                href="/privacy"
                className="inline-flex min-h-10 min-w-10 items-center text-[11px] text-silver-400/50 transition-colors hover:text-silver-300/80"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
