import { CellularRespiration } from "@/sections/CellularRespiration";
import { WaterDissociation } from "@/sections/WaterDissociation";
import { ClusterComparison } from "@/sections/ClusterComparison";
import { ElectricalVsChemical } from "@/sections/ElectricalVsChemical";
import { FreeRadicals } from "@/sections/FreeRadicals";
import { ORPScale } from "@/sections/ORPScale";
import { KeyProperties } from "@/sections/KeyProperties";
import { WaterExplorer } from "@/sections/WaterExplorer";
import { EvidenceGuide } from "@/sections/EvidenceGuide";
import { FinalCTA } from "@/sections/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { MobileChapter } from "@/components/MobileChapter";

export default function Science() {
  return (
    <>
      <section className="pb-7 pt-28 md:pb-12 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <SectionHeading
            kicker="The Science · Educational · Referenced"
            title={<><em className="not-italic text-aqua-300">Inside the mitochondrion:</em>{" "}how cells make energy.</>}
            subtitle="Follow fuel, electrons, oxygen, protons, ATP, water, and reactive oxygen species through one coordinated cellular-respiration map—then separate established biology from the questions still under study."
          />
        </div>
      </section>

      <div className="px-5 pb-4 md:hidden">
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-silver-300/75">
          Choose a chapter for the full diagrams and source-backed explanation.
        </p>
      </div>

      <MobileChapter
        number="01"
        title="Cellular energy"
        summary="Follow glucose, oxygen, electrons, protons, ATP, water, and reactive oxygen species through one coordinated map."
      >
        <CellularRespiration compactIntro />
      </MobileChapter>
      <MobileChapter
        number="02"
        title="Free radicals and ORP"
        summary="See how oxidation, antioxidants, and reducing potential fit together without oversimplifying the biology."
      >
        <FreeRadicals />
        <ORPScale />
      </MobileChapter>
      <MobileChapter
        number="03"
        title="Inside electrolysis"
        summary="Understand the ionizer chamber, its two water streams, and the difference between chemical and electrical processes."
      >
        <WaterDissociation />
        <ElectricalVsChemical />
      </MobileChapter>
      <MobileChapter
        number="04"
        title="Reading the evidence"
        summary="Use the evidence ladder, trial design, biomarkers, and outcomes to judge a claim more carefully."
      >
        <EvidenceGuide />
      </MobileChapter>
      <MobileChapter
        number="05"
        title="Water properties and types"
        summary="Compare pH, ORP, dissolved hydrogen, structure models, and the water outputs of an ionizer."
      >
        <KeyProperties />
        <ClusterComparison />
        <WaterExplorer />
      </MobileChapter>

      <FinalCTA />
    </>
  );
}
