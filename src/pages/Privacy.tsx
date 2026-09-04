import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <section className="section-pad relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl"
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-aqua-400/70" />
          <span className="kicker">Legal</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-light text-silver-100 leading-[1.05]">
          Privacy notice
        </h1>

        <div className="mt-10 space-y-8 text-sm text-silver-300/80 leading-relaxed">
          <div>
            <h2 className="font-medium text-silver-200 mb-3">Data collection</h2>
            <p>
              This site does not collect, store, or sell personal data. No
              accounts, no tracking cookies, no analytics beyond the aggregate
              diagnostics provided by Vercel's hosting infrastructure.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-silver-200 mb-3">Third-party services</h2>
            <p>
              Contact links open your email client so you can write to me
              directly. Google Fonts may log font requests; no personally
              identifiable information is shared with this site from those
              requests.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-silver-200 mb-3">Contact</h2>
            <p>
              Questions about this notice can be directed to me
              through the email links on this site.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-silver-200 mb-3">Medical disclaimer</h2>
            <p>
              Nothing on this site constitutes medical advice, diagnosis, or
              treatment. Consult a qualified healthcare professional for any
              health concern. Electrolyzed Reduced Water is not approved by the
              FDA to treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
