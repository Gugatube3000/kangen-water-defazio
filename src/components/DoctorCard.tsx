import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type DoctorCardProps = {
  variant?: "compact" | "expanded";
  className?: string;
};

export function DoctorCard({
  variant = "compact",
  className,
}: DoctorCardProps) {
  if (variant === "compact") {
    return (
      <Reveal>
        <div
          className={cn(
            "glass flex items-center gap-4 p-4 pr-6 max-w-md",
            className
          )}
        >
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-aqua-400/30">
            <img
              src="/doctor/dr-david-defazio.jpg"
              alt="Dr. David De Fazio in clinical scrubs"
              width={586}
              height={1280}
              className="h-full w-full object-cover object-[center_32%]"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <div className="kicker">Presented by</div>
            <div className="mt-1 font-display text-lg leading-tight text-silver-100">
              Dr. David De Fazio
            </div>
            <div className="text-[11px] text-silver-300/70 tracking-wide">
              Wellness & Health Optimization
            </div>
          </div>
        </div>
      </Reveal>
    );
  }

  return <ExpandedDoctor className={className} />;
}

function ExpandedDoctor({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "glass overflow-hidden grid md:grid-cols-[1fr_1.2fr] gap-0",
        className
      )}
    >
      <div className="relative aspect-square md:aspect-auto md:min-h-[480px] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-[#0B1730]">
        <img
          src="/doctor/dr-david-defazio.jpg"
          alt="Dr. David De Fazio in clinical scrubs"
          width={586}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,36,0.02)_20%,rgba(5,16,36,0.78)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
        <div className="absolute left-6 bottom-6">
          <div className="kicker">Wellness & Health Optimization</div>
          <div className="font-display text-3xl text-silver-100 mt-1">
            Dr. David De Fazio
          </div>
        </div>
      </div>
      <div className="p-8 md:p-10 lg:p-12 space-y-6">
        <div>
          <div className="kicker">Background</div>
          <ul className="mt-4 space-y-3 text-silver-200/90 text-sm leading-relaxed">
            <CredentialRow
              label="Bachelor of Science"
              value="University of California, Los Angeles (UCLA)"
              index={0}
            />
            <CredentialRow
              label="Medical School"
              value="United Kingdom"
              index={1}
            />
            <CredentialRow
              label="Anesthesiology"
              value="Rush University Medical Center (RUMC)"
              index={2}
            />
            <CredentialRow
              label="Cardiothoracic Fellowship"
              value="Cleveland Clinic Foundation"
              index={3}
            />
            <CredentialRow
              label="Pivot"
              value="Wellness and health optimization, after a 2018 tinnitus diagnosis"
              index={4}
            />
          </ul>
        </div>
        <div className="hairline" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-silver-300/85 leading-relaxed text-balance"
        >
          I am a cardiothoracic anesthesiologist who pivoted toward wellness and
          health optimization in 2018, after persistent tinnitus and the limits of
          conventional medicine sent me searching for answers in naturopathy,
          biofeedback, and the chemistry of water itself. I share this work
          as a teacher — not a treatment provider.
        </motion.p>
      </div>
    </div>
  );
}

function CredentialRow({
  label,
  value,
  index,
}: {
  label: string;
  value: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
    >
      <span className="text-silver-400 mr-3">{label}</span>
      {value}
    </motion.li>
  );
}
