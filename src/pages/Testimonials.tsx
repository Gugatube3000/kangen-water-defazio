import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Testimonials() {
  return (
    <>
      <section className="pb-10 pt-28 md:pb-14 md:pt-44">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <SectionHeading
            kicker="Stories · People behind the questions"
            title={<>Personal experiences.<br /><em className="not-italic text-aqua-300">A closer look.</em></>}
            subtitle="A family photograph, a physician’s turning point, and voices from public interviews. Explore what people describe, where each account comes from, and what it can tell us."
          />
          <nav aria-label="Browse stories" className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            {[["family-dog", "The family dog"], ["doctor-story", "Dr. De Fazio"], ["public-voices", "Public voices"]].map(([id, label]) => <a key={id} href={`#${id}`} className="rounded-full border border-aqua-200/25 bg-navy-950/50 px-5 py-3 text-aqua-100 transition hover:bg-aqua-300/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-aqua-200">{label} <span aria-hidden="true">↗</span></a>)}
          </nav>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-relaxed text-silver-200/85">These are individual accounts, not controlled studies or promises of results. Dr. De Fazio is an independent distributor and may receive compensation from purchases through his organization.</p>
        </div>
      </section>

      <section className="relative px-5 pb-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10 md:space-y-16">
          <Reveal>
            <article id="family-dog" className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-aqua-200/25 bg-[#0b2339]/95 shadow-2xl shadow-navy-950/20">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-5 sm:px-9">
                <span className="kicker">01 · From the family archive</span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-sm text-silver-200">Reported by Dr. De Fazio</span>
              </div>
              <div className="grid lg:grid-cols-[1.05fr_1fr]">
                <figure className="p-5 sm:p-8 lg:border-r lg:border-white/10">
                  <img src="/stories/family-dog-ear-comparison.jpg" alt="Two supplied close-up photographs of the same dog’s ear lesion, labeled June 17th and August 8th. A visible lesion remains in both photographs." width="1019" height="1019" className="h-auto w-full rounded-xl bg-white object-contain" fetchPriority="high" />
                  <figcaption className="mt-4 text-sm leading-relaxed text-silver-300">Original comparison supplied by Dr. De Fazio. The labels read June 17th and August 8th; no year is shown. <a href="/stories/family-dog-ear-comparison.jpg" target="_blank" rel="noopener noreferrer" className="text-aqua-200 underline underline-offset-4">Open full-size photograph ↗</a></figcaption>
                </figure>
                <div className="px-6 pb-8 sm:px-9 lg:py-9">
                  <h2 className="font-display text-3xl leading-tight text-silver-100 sm:text-4xl">His sister-in-law’s dog.<br /><span className="text-aqua-200">One family’s account.</span></h2>
                  <blockquote className="mt-6 border-l-2 border-aqua-200/60 pl-5 font-display text-2xl italic leading-relaxed text-aqua-100">“This is my sister-in-law’s dog.”</blockquote>
                  <p className="mt-5 text-base leading-relaxed text-silver-200">Dr. De Fazio shared these photographs with an account of a mass on the dog’s ear. He said his sister-in-law had taken the dog to a veterinarian, who discussed surgical removal.</p>
                  <p className="mt-4 text-base leading-relaxed text-silver-200">He reported that the family used acidic electrolyzed water topically, that the mass opened after several days, and that the area later healed. He recalled a period of about six weeks. The photograph labels themselves span 52 days.</p>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="font-semibold text-silver-100">What the photographs can tell us</h3>
                    <p className="mt-2 text-sm leading-relaxed text-silver-300">They document an apparent change in appearance. They do not establish the diagnosis, complete healing, or what caused the change. This account is not a recommendation to apply acidic water or delay veterinary care for a lump or wound.</p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article id="doctor-story" className="scroll-mt-28 grid overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b2339]/90 md:grid-cols-[.65fr_1fr]">
              <img src="/doctor/dr-david-defazio.jpg" alt="Dr. David De Fazio in clinical attire" loading="lazy" className="h-80 w-full object-cover object-top md:h-full md:max-h-[640px]" />
              <div className="p-6 sm:p-9">
                <div className="kicker">02 · A physician’s perspective</div>
                <h2 className="mt-4 font-display text-3xl leading-tight text-silver-100 sm:text-4xl">The health question that became a personal journey.</h2>
                <p className="mt-5 text-base leading-relaxed text-silver-200">In 2018, Dr. De Fazio developed persistent, high-frequency tinnitus. In his supplied biography, he describes how the search for answers broadened his interest in wellness, hydration, and the everyday environment.</p>
                <p className="mt-4 text-base leading-relaxed text-silver-200">Later, questions raised during a screening led him to read his municipal water report and contact his city. That curiosity helped shape this educational project.</p>
                <blockquote className="mt-6 border-l-2 border-aqua-200/60 pl-5 font-display text-xl italic leading-relaxed text-aqua-100">“My experience with tinnitus, and my pursuit of answers through chemistry and self-care, changed the questions I ask.”</blockquote>
                <p className="mt-5 text-sm leading-relaxed text-silver-300">This is his reason for exploring the subject, not a claim that a water product treated tinnitus. The screening does not establish exposure or a diagnosis.</p>
                <a className="mt-5 inline-flex min-h-11 items-center text-aqua-200 underline underline-offset-4" href="/doctor">Read his full background and perspective ↗</a>
              </div>
            </article>
          </Reveal>

          <div id="public-voices" className="scroll-mt-28">
            <div className="mb-7">
              <div className="kicker">In their own words</div>
              <h2 className="mt-3 font-display text-3xl text-silver-100 sm:text-4xl">Public voices, original sources.</h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-silver-200">Read or watch the original account alongside the context below. These historical accounts do not establish current use or a formal endorsement of this website.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal>
                <article className="flex h-full flex-col rounded-[2rem] border border-aqua-200/20 bg-[#102d43]/95 p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-3"><span className="kicker">03 · Published interview</span><span className="font-display text-3xl text-aqua-200/50" aria-hidden="true">“</span></div>
                  <h3 className="mt-5 font-display text-3xl text-silver-100">Giancarlo Giammetti</h3>
                  <p className="mt-2 text-sm text-silver-300">Former Valentino chairman · GQ, November 2013</p>
                  <blockquote className="my-7 font-display text-2xl italic leading-relaxed text-aqua-100">“Somebody suggested to me that I get one and I've been using it for a year now.”</blockquote>
                  <p className="text-base leading-relaxed text-silver-200">In GQ’s “10 Essentials,” Giammetti included a Kangen water machine among his personal choices and described feeling more energetic. This is his subjective account, not a measured health or performance result.</p>
                  <a href="https://www.gq.com/gallery/giancarlo-giammetti-10-essentials" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 items-center text-aqua-200 underline underline-offset-4">Read the original GQ interview ↗</a>
                </article>
              </Reveal>
              <Reveal delay={0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b2339]/95">
                  <iframe src="https://player.vimeo.com/video/204373726" title="Michael Robinson discusses Kangen water with Shan Stratton — promotional interview" loading="lazy" className="aspect-video w-full border-0 bg-black" allow="fullscreen; picture-in-picture" allowFullScreen />
                  <div className="p-6 sm:p-8">
                    <div className="kicker">04 · Video interview</div>
                    <h3 className="mt-4 font-display text-3xl text-silver-100">Michael Robinson</h3>
                    <p className="mt-2 text-sm text-silver-300">Former Seattle Seahawks player · Uploaded by Hydrationcrew</p>
                    <p className="mt-4 text-base leading-relaxed text-silver-200">Robinson discusses Kangen water with Shan Stratton in this publicly available interview. Watch the conversation in its original player rather than relying on a celebrity collage.</p>
                    <p className="mt-4 text-sm leading-relaxed text-silver-300">The upload is promotional material, not independent research. Any benefits described are testimonial claims, not established effects.</p>
                    <a href="https://vimeo.com/204373726" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center text-aqua-200 underline underline-offset-4">Watch the source video on Vimeo ↗</a>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <aside className="flex flex-col gap-6 rounded-3xl border border-aqua-200/20 bg-navy-950/80 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl"><h2 className="font-display text-2xl text-silver-100">A story can start a question.</h2><p className="mt-3 text-base leading-relaxed text-silver-200">To explore whether an effect is consistent, how it was measured, and who it might apply to, continue to the research library.</p></div>
              <PremiumButton to="/references" size="md" variant="primary">Explore the evidence</PremiumButton>
            </aside>
          </Reveal>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
