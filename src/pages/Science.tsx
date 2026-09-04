import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function Science() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-8 md:pb-12">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <SectionHeading
            kicker="The Science · Educational · Referenced"
            title={<><em className="not-italic text-aqua-300">Inside the mitochondrion:</em>{" "}how cells make energy.</>}
            subtitle="Follow fuel, electrons, oxygen, protons, ATP, water, and reactive oxygen species through one coordinated cellular-respiration map—then separate established biology from the questions still under study."
          />
        </div>
      </section>

      <CellularRespiration compactIntro />
      <FreeRadicals />
      <ORPScale />
      <WaterDissociation />
      <ElectricalVsChemical />
      <EvidenceGuide />
      <KeyProperties />
      <ClusterComparison />
      <WaterExplorer />

      <FinalCTA />
    </>
  );
}
