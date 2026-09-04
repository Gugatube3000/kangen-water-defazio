import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumButton } from "@/components/PremiumButton";
import { Reveal } from "@/components/Reveal";
import { suggestedQuestions } from "@/lib/defazioLibrary";
import { CONTACT_MAILTO } from "@/lib/motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const welcome =
  "Ask a question about water quality, ERW, ORP, molecular hydrogen, electrolysis, Kangen machines, or where to start. I will keep it educational and medically careful.";

const FAQ_ITEMS = [
  {
    category: "Science",
    q: "Why do you call it ERW instead of Kangen Water or alkaline water?",
    a: "Electrolyzed Reduced Water describes water created through electrolysis with reducing potential. 'Alkaline water' describes pH only. 'Kangen Water®' is Enagic's registered brand name. My point is that pH is only one part of the conversation; the process, molecular hydrogen, and negative ORP matter too.",
  },
  {
    category: "Science",
    q: "Are some kinds of drinking water scientifically 'alive' or 'dead'?",
    a: "No. 'Alive,' 'dead,' and 'charged water' are not standardized scientific categories. A useful comparison measures the properties that are actually present: source-water contaminants, filtration performance, dissolved minerals, pH, oxidation-reduction potential, and dissolved molecular hydrogen. Those measurements describe a sample; they do not make it alive or predict a medical outcome.",
  },
  {
    category: "Science",
    q: "Doesn't gastric acid neutralize alkaline hydrogen water?",
    a: "The stomach is strongly acidic and blood pH is tightly regulated, so drinking alkaline water should not be presented as a way to alkalize the blood. Research interest in electrolyzed reduced water focuses partly on dissolved molecular hydrogen and redox signaling. The proposed 'selective antioxidant' mechanism remains an active research question rather than a settled claim that hydrogen targets only harmful radicals.",
  },
  {
    category: "General",
    q: "How much water should I drink?",
    a: "There is no single body-weight formula that fits everyone. Fluid needs vary with food, activity, climate, pregnancy, medications, and health conditions. Drink regularly, respond to thirst, and follow individualized clinical guidance when you have heart, kidney, liver, endocrine, or fluid-balance concerns.",
  },
  {
    category: "General",
    q: "How far apart from meals should I drink water?",
    a: "Most people do not need to separate ordinary water from meals. Drink in a way that is comfortable and supports adequate intake. If swallowing, reflux, fluid restriction, or another medical issue affects when or how much you drink, follow advice from your clinician rather than a universal timing rule.",
  },
  {
    category: "Science",
    q: "What does reducing potential mean?",
    a: "ORP is a water-property measurement. Negative ORP indicates reducing potential; positive ORP indicates oxidizing potential. ERW is also associated with dissolved molecular hydrogen, which is an active area of research. These are chemistry concepts, not a promise of a medical outcome.",
  },
  {
    category: "General",
    q: "Is ERW a cure?",
    a: "No. ERW is not a cure. I frame better water as a foundational wellness choice: give the water in your body the best possible environment to work with. Healthy choices still matter. So does your doctor.",
  },
  {
    category: "Science",
    q: "What are aquaporins and why do they matter?",
    a: "Aquaporins are protein channels in cell membranes — I call them the high-speed plumbing system for cells. They help water move into and out of cells. I also use a smaller-cluster analogy when explaining water structure; treat that analogy as an educational model, not as settled proof of a medical outcome.",
  },
  {
    category: "Science",
    q: "What does ORP mean? And why is Kangen so negative?",
    a: "Oxidation-Reduction Potential is measured in millivolts. Positive values indicate oxidizing potential; negative values indicate reducing potential. The exact reading depends on the machine, settings, flow rate, and source water. My correction is that the K8 belongs near the −800 mV end of the discussion, not at −400 mV. Enagic's current US K8 page lists a negative ORP specification of −722 mV.",
  },
  {
    category: "Solution",
    q: "Why is Enagic worth the price over a cheaper ionizer?",
    a: "I have a detailed comparison discussion covering certification, plate construction, water outputs, warranties, and long-term ownership. Start with the official Enagic product links on the Solution page, then use my 15-question comparison checklist to verify current documents.",
  },
  {
    category: "General",
    q: "What does a consultation actually look like?",
    a: "An educational conversation. No pressure. Send me a note first; because my on-call schedule changes week to week, I reply when I am off-call and arrange a Zoom if it makes sense. There is no fee or paywall to contact me. No medical claims are made and there is no obligation to buy.",
  },
  {
    category: "Solution",
    q: "Is a Kangen ionizer a whole-home water filter?",
    a: "No. The countertop and under-counter ionizers are designed around kitchen drinking-water use. They are not a whole-home filtration system. Enagic separately offers the Anespa DX for bath and shower water. Start with the household use case you are actually trying to solve, then compare the official product pages.",
  },
  {
    category: "Solution",
    q: "What is the Anespa DX?",
    a: "The Anespa DX is Enagic's bathroom product: a mineral-ion water spa system for baths and showers. Enagic says its cartridge reduces chlorine and other substances in tap water and adds minerals. It complements a kitchen drinking-water machine; it does not turn the kitchen ionizer into a whole-home system.",
  },
];

export default function QA() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: welcome },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // FAQ states
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = ["All", "Science", "Solution", "General"];

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "All") return FAQ_ITEMS;
    return FAQ_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const visibleQuestions = useMemo(() => suggestedQuestions.slice(0, 5), []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/ask-defazio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "HydroAIgen is unavailable.");
      }
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void ask(input);
    }
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-32 pb-16 md:pt-40">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_42%_at_50%_10%,rgba(164,231,240,0.14),transparent_72%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 lg:px-16 space-y-16">
        {/* Header */}
        <div className="mx-auto w-full max-w-3xl text-center">
          <div className="kicker">Knowledge & Consultation</div>
          <h1 className="mt-2 font-display text-4xl leading-tight text-silver-100 sm:text-5xl md:text-6xl">
            Questions & Answers
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-silver-300/80">
            Use our interactive AI guide to query the latest water research or browse categorized frequently asked questions below.
          </p>
        </div>

        {/* AI Guide Section */}
        <div className="grid min-h-0 gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start max-w-6xl mx-auto">
          {/* Chat Window */}
          <Reveal className="min-h-0 min-w-0">
            <div className="flex h-[450px] sm:h-[500px] md:h-[550px] w-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] shadow-glass backdrop-blur-2xl">
              <div className="flex shrink-0 items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div>
                  <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80 font-semibold">
                    HydroAI Assistant
                  </div>
                  <div className="hidden text-xs text-silver-400/80 sm:block mt-0.5">
                    Real-time science guide on ERW, ORP, and molecular hydrogen
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-ultra text-aqua-200/90 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-aqua-300 animate-pulse" />
                  Online
                </div>
              </div>

              {/* Suggestions */}
              <div className="shrink-0 border-b border-white/[0.06] px-5 py-3 overflow-hidden">
                <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {visibleQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => {
                        setInput(question);
                        inputRef.current?.focus();
                      }}
                      className="rounded-full border border-silver-300/10 bg-white/[0.02] px-3.5 py-1.5 text-xs text-silver-300/90 hover:border-aqua-300/30 hover:bg-white/[0.05] transition whitespace-nowrap"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages area */}
              <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-5 [scrollbar-width:thin] scrollbar-thumb-white/10">
                {messages.map((message, index) => (
                  <motion.div
                    key={`${message.role}-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={
                      message.role === "user"
                        ? "ml-auto max-w-[85%] rounded-2xl bg-aqua-400/20 border border-aqua-400/30 px-4 py-3 text-silver-100"
                        : "mr-auto max-w-[90%] rounded-2xl border border-white/[0.05] bg-navy-950/40 px-4 py-3 text-silver-200"
                    }
                  >
                    <p className="whitespace-pre-wrap break-words text-xs sm:text-sm leading-relaxed">
                      {message.content}
                    </p>
                  </motion.div>
                ))}

                {loading && (
                  <div className="mr-auto max-w-[85%] rounded-2xl border border-white/[0.05] bg-navy-950/40 px-4 py-3 text-xs text-silver-400/80 animate-pulse">
                    Analyzing scientific notes...
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form
                onSubmit={submit}
                className="shrink-0 border-t border-white/[0.06] p-4 bg-navy-950/20"
              >
                {error && (
                  <p className="mb-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-xs text-red-200">
                    {error}
                  </p>
                )}

                <div className="flex gap-2 items-end">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={2}
                    placeholder="Type your question about water..."
                    className="max-h-24 min-h-[48px] w-full resize-none rounded-xl border border-white/[0.08] bg-navy-950/45 px-4 py-2.5 text-sm text-silver-100 outline-none placeholder:text-silver-400/40 focus:border-aqua-400/50 transition"
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="h-[48px] rounded-xl bg-gradient-to-r from-aqua-400 to-aqua-300 px-5 text-sm font-semibold text-navy-950 transition hover:brightness-110 disabled:opacity-45 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Educational Sidebar */}
          <Reveal delay={0.08} className="hidden lg:block">
            <aside className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 space-y-6 shadow-glass backdrop-blur-2xl">
              <div>
                <div className="kicker">Safety & Guidelines</div>
                <p className="mt-2 text-xs leading-relaxed text-silver-300/80">
                  This educational interface does not replace clinical consulting. It operates within strict safety parameters:
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                {["pH Balance", "ORP mV", "H2 Gas", "EWG Data", "Mitochondria", "Aquaporins"].map((label) => (
                  <div key={label} className="rounded-xl border border-white/[0.05] bg-white/[0.02] py-2.5 text-silver-300 font-medium">
                    {label}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-aqua-300/10 bg-aqua-300/[0.03] p-4 text-[11px] leading-relaxed text-silver-300/70">
                Water wellness claim limits: Molecular hydrogen is discussed strictly as an active biological research path, not as an active FDA diagnosis treatment.
              </div>

              <PremiumButton href={CONTACT_MAILTO} variant="secondary" size="md" className="w-full">
                Schedule Zoom Consult
              </PremiumButton>
            </aside>
          </Reveal>
        </div>

        {/* Structured FAQs */}
        <div className="max-w-4xl mx-auto space-y-8 pt-8">
          <div className="text-center space-y-2">
            <div className="kicker">Categorized Directory</div>
            <h2 className="font-display text-3xl text-silver-100">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedFaq(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition border ${
                  activeCategory === cat
                    ? "bg-aqua-400/20 border-aqua-400/55 text-aqua-200"
                    : "border-white/[0.06] bg-white/[0.02] text-silver-300/80 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Collapsible FAQ List */}
          <ul className="divide-y divide-white/[0.06] rounded-3xl border border-white/[0.08] bg-white/[0.03] overflow-hidden shadow-glass backdrop-blur-2xl">
            {filteredFaqs.map((item, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <li key={item.q} className="transition duration-300 hover:bg-white/[0.01]">
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base md:text-lg text-silver-100 group-hover:text-aqua-300 transition-colors">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="shrink-0 h-7 w-7 rounded-full border border-white/10 flex items-center justify-center text-silver-400"
                      aria-hidden
                    >
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="h-3 w-3">
                        <path d="M8 2v12M2 8h12" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm text-silver-300/85 leading-relaxed max-w-3xl">
                          {item.a}
                          {item.q.includes("consultation") && (
                            <>
                              {" "}
                              <a
                                href={CONTACT_MAILTO}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-aqua-300 hover:text-aqua-200 underline underline-offset-4"
                              >
                                Contact me →
                              </a>
                            </>
                          )}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
