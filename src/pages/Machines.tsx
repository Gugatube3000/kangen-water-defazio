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

export default function Machines() {
  return (
    <>
      <section data-section="solution" data-section-label="My Solution" className="pt-36 md:pt-48 pb-16 px-5 md:px-10 lg:px-16">
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
          <ol className="mt-12 grid gap-5 md:grid-cols-3" aria-label="How I approach a water system">
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
      <WhatIsKangen />
      <VideoClips featuredOnly />
      <WhyEnagic />
      <MeetMachines />
      <PaymentOptions />
      <K8CostComparison />
      <HouseholdWaterPlan />
      <section data-section="other-machines" data-section-label="Ask About Options" className="section-pad">
        <Reveal>
          <div className="mx-auto max-w-4xl glass p-8 md:p-12 text-center">
            <div className="kicker">A smaller selection, a more useful conversation</div>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-silver-100">A different setup in mind?</h2>
            <p className="mx-auto mt-5 max-w-xl text-silver-300/85 leading-relaxed">I have kept this page focused on the K8 and the separate Anespa shower system.
              If neither fits your space or budget, email me. We can discuss other models without working through a whole catalog here.</p>
            <div className="mt-7"><PremiumButton href={OTHER_MACHINES_MAILTO} size="lg">Ask me for other machines</PremiumButton></div>
            <p className="mt-4 text-xs text-silver-400">Email first. A Zoom conversation can follow if it would be helpful.</p>
          </div>
        </Reveal>
      </section>
      <FinalCTA />
    </>
  );
}
