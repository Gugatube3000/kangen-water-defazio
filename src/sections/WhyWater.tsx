import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Cite } from "@/components/Cite";
import { stagger, fadeUp } from "@/lib/motion";

const FUNCTIONS: { title: string; body: ReactNode }[] = [
  {
    title: "The cellular environment",
    body: (
      <>
        Water helps maintain the fluid environment where normal signaling,
        transport, and cellular-volume regulation take place.
      </>
    ),
  },
  {
    title: "Transport of nutrients",
    body: (
      <>
        Water participates in the systems that move oxygen and nutrients
        through the body. Aquaporins are membrane channels that help water cross
        cell membranes
        <Cite ids={6} />.
      </>
    ),
  },
  {
    title: "Removal of waste",
    body: (
      <>
        Water supports the transport and removal of metabolic byproducts
        <Cite ids={7} />.
      </>
    ),
  },
  {
    title: "Energy metabolism",
    body: (
      <>
        Water is part of the cellular environment in which normal energy
        metabolism takes place
        <Cite ids={3} />.
      </>
    ),
  },
  {
    title: "Temperature regulation",
    body: (
      <>
        Water helps the body regulate temperature through normal processes such
        as circulation and sweating.
      </>
    ),
  },
];

export function WhyWater() {
  return (
    <section id="why-water" data-section="why-water" data-section-label="Why Water" className="section-pad relative scroll-mt-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="kicker">Why the future of hydration starts here</div>
          <h2 className="mt-5 max-w-4xl font-display text-5xl md:text-7xl font-light leading-[1.02] text-silver-100 text-balance">
            Hydration is not only about <em className="not-italic text-aqua-300">quenching your thirst.</em>
          </h2>
          <div className="mt-7 max-w-2xl space-y-5 text-base md:text-lg leading-relaxed text-silver-300/85">
            <p>Enough water matters. So does understanding the water you use every day.
              Before looking at a product, start with three questions: what does water
              do in your body, what is in your water source, and what does the research actually show?</p>
            <p>For me, the future of hydration means asking better questions. This guide
              follows that path from the basics to my personal choice, with room to
              distinguish established knowledge from emerging research.</p>
          </div>
        </Reveal>
        <ol aria-label="The path through this guide" className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["01", "Understand your body", "Begin with body water and the everyday functions it supports."],
            ["02", "Know your water", "Look at your local water source before considering treatment options."],
            ["03", "Explore the evidence", "Learn the chemistry, then see the solution I chose and the questions to ask."],
          ].map(([n, title, body]) => (
            <li key={n} className="border-t border-aqua-300/25 pt-5">
              <span className="font-mono text-xs text-aqua-300">{n}</span>
              <h3 className="mt-3 font-display text-2xl text-silver-100">{title}</h3>
              <p className="mt-3 text-sm text-silver-300/80 leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WaterFunctions() {
  return (
    <section data-section="water-functions" data-section-label="What Water Does" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="kicker">From composition to function</div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl text-silver-100">What does that water do?</h2>
          <p className="mt-5 max-w-2xl text-silver-300/85 leading-relaxed">
            The percentages are a starting point. Water supports the processes below
            throughout the day. With that foundation in place, we can look at the water coming into your home.
          </p>
        </Reveal>
        <motion.ul variants={stagger(0.07)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="mt-12">
          {FUNCTIONS.map((item, i) => (
            <motion.li key={item.title} variants={fadeUp} className="grid grid-cols-[2rem_1fr] md:grid-cols-[3rem_16rem_1fr] gap-4 md:gap-8 py-6 border-b border-silver-300/10 first:border-t">
              <span className="font-mono text-aqua-300/65">0{i + 1}</span>
              <h3 className="font-display text-xl text-silver-100">{item.title}</h3>
              <p className="col-span-2 md:col-span-1 text-sm text-silver-300/80 leading-relaxed">{item.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
