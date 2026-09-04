import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ENAGIC_CERTIFICATES_URL } from "@/lib/enagic";

const CERTIFICATES = [
  { code: "ISO 9001", title: "Quality management", body: "A standard for an organization's quality-management processes.", image: "/certifications/iso-9001.png" },
  { code: "ISO 14001", title: "Environmental management", body: "A standard for managing an organization's environmental responsibilities.", image: "/certifications/iso-14001.png" },
  { code: "ISO 13485", title: "Medical-device quality management", body: "A quality-management standard for medical devices and related services. It is not a clinical trial or a guarantee of a health outcome.", image: "/certifications/iso-13485.png" },
] as const;
const QUESTIONS = [
  ["Current certifications", "Which organization and activities does each certificate cover? Read the certificate's scope, issuer, and dates. A standard's name alone does not establish a product claim."],
  ["Independent product testing", "Which specific model and filter were tested, for which substances, and under which conditions? Ask for the current listing rather than assuming a badge covers every claim."],
  ["Health and endorsement claims", "Separate a physician's personal choice from clinical evidence. Ask for the original research behind a health claim; an endorsement does not establish effectiveness."],
  ["Plate construction", "Check the electrode material, coating, and construction in the manufacturer's documents. Do not infer that another design leaches metals or cannot work without testing."],
  ["Power, plates, and flow", "Compare specifications together. Plate count or wattage alone is not a measure of health benefit or a guarantee of output at every flow rate."],
  ["Materials in contact with water", "Request model-specific materials-safety information, including tubing, filter media, and the electrolysis chamber."],
  ["Long-term support", "Check the availability of replacement filters, parts, and repairs where you live. A company's age does not guarantee the lifespan of your unit."],
  ["Manufacturing and servicing", "Find out where the unit is made, who services it, and what shipping or service charges you would pay."],
  ["Operating limits", "Read the manual's limits for temperature, water pressure, and continuous use. Confirm the safeguards and maintenance instructions."],
  ["Production rate", "Look up the flow rate for the specific water setting you will use. Laboratory specifications may not describe your source water or installation."],
  ["Water outputs", "Learn which settings are intended for drinking and which are not. Follow the manual; a broad pH range is not a reason to drink every output."],
  ["Cleaning and maintenance", "Ask about filter replacement and cleaning for your water hardness and usage. Include supplies and any professional service in your budget."],
  ["Local water compatibility", "Start with your water report. Check the filter's tested capabilities and whether additional prefiltration or a different treatment approach is needed."],
  ["Ownership assumptions", "A 25-year calculator scenario is not a 25-year lifespan promise. Consider repair or replacement costs and compare shorter time horizons as well."],
  ["Warranty terms", "Read the written warranty for your model and region: duration, exclusions, required maintenance, and how to submit a claim."],
];

export function WhyEnagic() {
  return (
    <section id="verification" data-section="why-enagic" data-section-label="Why I Chose Kangen" className="section-pad relative scroll-mt-28 border-y border-white/[0.05] bg-white/[0.015]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Why I chose Kangen" title={<>My choice has context. <em className="not-italic text-aqua-300">Yours should too.</em></>}
          subtitle="For me, the practical questions are the construction of the system, its intended water outputs, maintenance, and the documentation behind it. Those are things we can examine together without treating a brand as a medical outcome." />
        <Reveal>
          <div className="mt-10 mx-auto max-w-4xl rounded-2xl border border-aqua-300/20 bg-aqua-300/[0.04] p-6 md:p-8">
            <h3 className="font-display text-2xl text-silver-100">What the manufacturer publishes</h3>
            <p className="mt-3 text-sm text-silver-300/85 leading-relaxed">Enagic lists ISO 9001, ISO 14001, and ISO 13485 on its certification page.
              Read the actual documents for scope and dates. ISO writes standards; external bodies perform certification.</p>
            <a href={ENAGIC_CERTIFICATES_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center text-aqua-200 text-sm underline underline-offset-4">View Enagic's published certificates →</a>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {CERTIFICATES.map(({ code, title, body, image }) => (
            <details key={code} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <summary className="cursor-pointer text-silver-100 marker:text-aqua-300">
                <img src={image} alt="" width={260} height={260} loading="lazy" className="mb-5 h-20 w-20 rounded-full object-contain" />
                <span className="font-mono text-sm text-aqua-300">{code}</span>
                <span className="mt-3 block font-display text-xl">{title}</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-silver-300/85">{body}</p>
            </details>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-silver-400 leading-relaxed">
          These standards are not exclusive to Enagic. We do not present them as proof of US medical-device approval or as evidence that this water treats disease.{" "}
          <a href="https://www.iso.org/certification.html" target="_blank" rel="noopener noreferrer" className="text-aqua-200 underline underline-offset-4">How ISO certification works</a>.
          {" "}Badge artwork is reproduced from Enagic's official certification page; verify the current certificate itself rather than relying on a badge.
        </p>
        <details className="group mt-10 mx-auto max-w-4xl glass p-6 md:p-8">
          <summary className="cursor-pointer marker:text-aqua-300 text-silver-100">
            <span className="font-display text-2xl md:text-3xl">The 15-question checklist</span>
            <span className="mt-2 block text-sm text-silver-400">Optional detail: questions to ask about any ionizer, including mine.</span>
          </summary>
          <ol className="mt-6 divide-y divide-white/10">
            {QUESTIONS.map(([title, body], i) => (
              <li key={title} className="py-4">
                <details>
                  <summary className="cursor-pointer text-silver-100 marker:text-aqua-300"><span className="mr-3 font-mono text-xs text-aqua-300">{String(i + 1).padStart(2, "0")}</span>{title}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-silver-300/85">{body}</p>
                </details>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}
