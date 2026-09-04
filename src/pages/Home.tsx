import { Hero } from "@/sections/Hero";
import { WhyWater, WaterFunctions } from "@/sections/WhyWater";
import { TapWaterPipe } from "@/sections/TapWaterPipe";
import { FishTankSection } from "@/sections/FishTankSection";
import { SimpleTruth } from "@/sections/SimpleTruth";
import { KeyProperties } from "@/sections/KeyProperties";
import { MolecularHydrogen } from "@/sections/MolecularHydrogen";
import { HydrogenDelivery } from "@/sections/HydrogenDelivery";
import { OrganWater } from "@/sections/OrganWater";
import { Athletes } from "@/sections/Athletes";
import { Testimonial } from "@/sections/Testimonial";
import { DoctorSection } from "@/sections/DoctorSection";
import { AskDefazioSection } from "@/sections/AskDefazioSection";
import { Proverbs } from "@/sections/Proverbs";
import { EmotoWater } from "@/sections/EmotoWater";
import { FinalCTA } from "@/sections/FinalCTA";
import {
  CuriosityPreface,
  HydrationIntroduction,
} from "@/sections/HydrationIntroduction";
import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";
import { ChapterTransition } from "@/components/ChapterTransition";
import { CellularRespiration } from "@/sections/CellularRespiration";
import { TransparencyDisclosure } from "@/sections/TransparencyDisclosure";
import { MobileChapter } from "@/components/MobileChapter";

export default function Home() {
  return (
    <>
      <Hero />
      <TransparencyDisclosure />
      <div className="px-5 pb-4 pt-7 md:hidden">
        <div className="mx-auto max-w-xl">
          <div className="kicker">Choose your depth</div>
          <h2 className="mt-3 font-display text-3xl leading-tight text-silver-100">
            A shorter path on your phone.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-silver-300/78">
            Open only the chapters you want. Every source, diagram, and detailed
            explanation is still here.
          </p>
        </div>
      </div>

      <MobileChapter
        number="01"
        title="Hydration fundamentals"
        summary="How water moves through the body, what it supports, and why one percentage never describes everyone."
      >
        <HydrationIntroduction />
        <ChapterTransition
          next="Why water matters"
          quote="You can have a thousand problems in life—until you have a health problem. Then you only have one."
          attribution="Traditional saying · commonly attributed to Confucius"
          note="This modern wording is widely circulated; a reliable primary attribution has not been established."
        />
        <WhyWater />
        <ChapterTransition
          next="The cellular view"
          quote="The greatest discoveries in medicine often occur when we learn to see what was always there but previously remained invisible."
          attribution="Dr. David De Fazio · Molecular Hydrogen Master Guide"
          align="right"
        />
        <OrganWater />
        <WaterFunctions />
      </MobileChapter>

      <MobileChapter
        number="02"
        title="How cells make energy"
        summary="A visual tour of mitochondria, ATP, oxygen, electron transport, and reactive oxygen species."
      >
        <ChapterTransition
          next="How cells turn fuel into life"
          quote="Every heartbeat, every thought, every movement, and every moment of healing begins with biological processes occurring inside trillions of cells."
          attribution="Dr. David De Fazio · Molecular Hydrogen Master Guide"
          align="right"
        />
        <CellularRespiration compactIntro />
      </MobileChapter>

      <MobileChapter
        number="03"
        title="Know your tap water"
        summary="Inspect common concerns, generate a local report, and learn which questions to ask before choosing a system."
      >
        <ChapterTransition
          next="Your water source"
          quote="Health isn’t expensive—your priorities are. You’re either paying for it on the front end with food, sleep, movement, and prevention… or you’re paying for it later."
          attribution="Dr. Raymond Nichols"
          note="Excerpted from the social post supplied for this guide."
        />
        <TapWaterPipe />
      </MobileChapter>

      <MobileChapter
        number="04"
        title="Oxidation and molecular hydrogen"
        summary="Understand free radicals, redox balance, and what hydrogen research can—and cannot—show."
      >
        <ChapterTransition
          next="Oxidative balance"
          quote="Life exists in the balance between challenge and repair. Too little stress prevents adaptation. Too much stress overwhelms resilience."
          attribution="Dr. David De Fazio · Molecular Hydrogen Master Guide"
          align="right"
        />
        <SimpleTruth />
        <ChapterTransition
          next="The molecular-hydrogen question"
          quote="Some of the most fascinating discoveries in science occur when we realize that something we considered simple may be far more complex than we imagined."
          attribution="Dr. David De Fazio · Molecular Hydrogen Master Guide"
        />
        <CuriosityPreface />
        <MolecularHydrogen />
        <HydrogenDelivery />
      </MobileChapter>

      <MobileChapter
        number="05"
        title="Measured water properties"
        summary="Compare pH, ORP, dissolved hydrogen, electrolysis, and the fish-tank teaching analogy."
      >
        <ChapterTransition
          next="Measured properties"
          quote="The first step toward understanding any technology is separating the language of chemistry from the language of marketing."
          attribution="Dr. David De Fazio · Molecular Hydrogen Master Guide"
          align="right"
        />
        <KeyProperties />
        <ChapterTransition
          next="Water and the cellular environment"
          quote="A molecule’s journey through the body is a story of movement, interaction, and biological conversation."
          attribution="Dr. David De Fazio · Molecular Hydrogen Master Guide"
          align="right"
        />
        <FishTankSection />
      </MobileChapter>

      <MobileChapter
        number="06"
        title="My practical solution"
        summary="See the system I chose, the role of filtration, and the costs and tradeoffs to review."
      >
        <ChapterTransition
          next="From understanding to action"
          quote="The measure of aging is not only the years we accumulate, but the capacity we preserve to experience them fully."
          attribution="Dr. David De Fazio · Molecular Hydrogen Master Guide"
        />
        <section data-section="personal-solution" data-section-label="My Solution" className="section-pad">
          <Reveal>
            <div className="mx-auto max-w-4xl glass p-6 text-center md:p-12">
              <div className="kicker">From understanding to a practical choice</div>
              <h2 className="mt-5 font-display text-4xl text-silver-100 md:text-5xl">What was my solution?</h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-silver-300/85">
                Now that you have the context, I can explain why I chose a Kangen
                system, how I think about filtration, and what the costs look like.
                It is my experience to share, not a decision you need to make today.
              </p>
              <div className="mt-7"><PremiumButton to="/solution" variant="primary">Explore my solution</PremiumButton></div>
            </div>
          </Reveal>
        </section>
        <DoctorSection />
      </MobileChapter>

      <MobileChapter
        number="07"
        title="Athletes and emerging evidence"
        summary="Separate reported use from clinical proof and see what recent performance reviews actually found."
      >
        <Athletes />
      </MobileChapter>

      <MobileChapter
        number="08"
        title="Stories, perspective, and proverbs"
        summary="Personal context and memorable ideas, clearly separated from medical evidence."
      >
        <Testimonial />
        <EmotoWater />
        <Proverbs />
      </MobileChapter>
      <AskDefazioSection />
      <FinalCTA />
    </>
  );
}
