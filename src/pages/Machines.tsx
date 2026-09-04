import { Link } from "react-router-dom";
import { MeetMachines } from "@/sections/MeetMachines";
import { WhyEnagic } from "@/sections/WhyEnagic";
import { FinalCTA } from "@/sections/FinalCTA";
import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";
import { PaymentOptions } from "@/sections/PaymentOptions";
import { HouseholdWaterPlan } from "@/sections/HouseholdWaterPlan";
import { K8CostComparison } from "@/sections/K8CostComparison";
import { WhatIsKangen } from "@/sections/WhatIsKangen";
import { VideoClips } from "@/sections/VideoClips";
import { OTHER_MACHINES_MAILTO } from "@/lib/motion";
import { MobileChapter } from "@/components/MobileChapter";

export default function Machines() {
  return (
    <>
      <section data-section="solution" data-section-label="My Solution" className="px-5 pb-10 pt-28 md:px-10 md:pb-16 md:pt-48 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="kicker">My solution · Dr. David De Fazio</div>
            <h1 className="mt-5 max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.02] text-silver-100 text-balance">
              What was <em className="not-italic text-aqua-300">my solution?</em>
            </h1>
            <div className="mt-7 max-w-2xl space-y-5 text-base md:text-lg text-silver-300/85 leading-relaxed">
              <p>I wanted to connect what I was learning about water with a practical choice at home.
                I chose a Kangen system. Here is how I think about that choice, the role of filtration,
                and the questions I would want answered before spending anything.</p>
              <p>My experience is a starting point for a conversation, not a promise about your health.
                Your water source, household needs, maintenance, and budget all matter.</p>
            </div>
            <p className="mt-6 text-sm text-silver-400">New to the subject? <Link to="/" className="text-aqua-200 underline underline-offset-4">Start with why water matters.</Link></p>
          </Reveal>
          <ol className="mobile-snap-row mt-8 grid gap-5 md:mt-12 md:grid-cols-3" aria-label="How I approach a water system">
            {[
              ["01", "Start with the source", "Read your local water report. Identify the specific concern before choosing a filter or a device."],
              ["02", "Separate filtration from electrolysis", "Consider suitable prefiltration first. An ionizer is not a universal contaminant-removal system; check the filter's tested scope."],
              ["03", "Choose for your household", "I chose Kangen. Below are the product details, the documents to check, and a transparent cost example so you can form your own view."],
            ].map(([n, title, body]) => (
              <li key={n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="font-mono text-xs text-aqua-300">{n}</div>
                <h2 className="mt-3 font-display text-2xl text-silver-100">{title}</h2>
                <p className="mt-3 text-sm text-silver-300/85 leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="px-5 pb-4 md:hidden">
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-silver-300/75">
          Open the details that matter to your household and budget.
        </p>
      </div>

      <MobileChapter
        number="01"
        title="How the system works"
        summary="Follow filtration, electrolysis, and the separate water streams in a concise visual sequence."
      >
        <WhatIsKangen />
        <VideoClips featuredOnly />
      </MobileChapter>
      <MobileChapter
        number="02"
        title="How I evaluated it"
        summary="The current documents, certifications, construction, service, and comparison questions I use."
      >
        <WhyEnagic />
      </MobileChapter>
      <MobileChapter
        number="03"
        title="K8 and payment options"
        summary="See the kitchen system, published price, deposit, payment schedule, and costs that remain separate."
      >
        <MeetMachines />
        <PaymentOptions />
      </MobileChapter>
      <MobileChapter
        number="04"
        title="Cost calculator"
        summary="Compare your bottled-water spending with transparent assumptions and no guaranteed savings claim."
      >
        <K8CostComparison />
      </MobileChapter>
      <MobileChapter
        number="05"
        title="Build a household plan"
        summary="Separate kitchen drinking water from bath and shower needs, then ask about a different setup if necessary."
      >
        <HouseholdWaterPlan />
        <section data-section="other-machines" data-section-label="Ask About Options" className="section-pad">
          <Reveal>
            <div className="mx-auto max-w-4xl glass p-6 text-center md:p-12">
              <div className="kicker">A smaller selection, a more useful conversation</div>
              <h2 className="mt-5 font-display text-3xl text-silver-100 md:text-5xl">A different setup in mind?</h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-silver-300/85">I have kept this page focused on the K8 and the separate Anespa shower system.
                If neither fits your space or budget, email me. We can discuss other models without working through a whole catalog here.</p>
              <div className="mt-7"><PremiumButton href={OTHER_MACHINES_MAILTO} size="lg">Ask me for other machines</PremiumButton></div>
              <p className="mt-4 text-xs text-silver-400">Email first. A Zoom conversation can follow if it would be helpful.</p>
            </div>
          </Reveal>
        </section>
      </MobileChapter>
      <FinalCTA />
    </>
  );
}
