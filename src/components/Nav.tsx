import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumButton } from "./PremiumButton";
import { CONTACT_MAILTO } from "@/lib/motion";
import { cn } from "@/lib/cn";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/science", label: "Science" },
  { to: "/solution", label: "Solution" },
  { to: "/doctor", label: "Dr. De Fazio" },
  { to: "/qa", label: "Q&A", desktop: false },
  { to: "/references", label: "References", desktop: false },
  { to: "/stories", label: "Stories", desktop: false },
  { to: "/business", label: "Opportunity", desktop: false },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between transition-all duration-500",
          scrolled
            ? "glass rounded-full px-4 md:px-6 py-2"
            : "rounded-full border border-white/[0.08] bg-navy-950/15 px-4 py-2 backdrop-blur-[3px] md:px-6"
        )}
      >
        <Link
          to="/"
          className="group flex items-center gap-3 shrink-0"
          aria-label="Home"
        >
          <Logo />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base text-silver-100">
              Dr. David De Fazio
            </div>
            <div className="text-[10px] tracking-ultra uppercase text-aqua-400/80">
              Wellness & Health Optimization
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.filter((item) => item.desktop !== false).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                    "relative px-2.5 py-2 text-[12px] xl:text-[13px] text-silver-300/80 hover:text-silver-100 transition-colors whitespace-nowrap",
                  isActive && "text-silver-100"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-aqua-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <PremiumButton href={CONTACT_MAILTO} size="md" variant="primary">
              Contact me
            </PremiumButton>
          </div>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden h-10 w-10 rounded-full glass flex items-center justify-center"
          >
            <span className="relative block w-4 h-3">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-full bg-silver-100 transition-transform",
                  open && "translate-y-[5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-px w-full bg-silver-100 -translate-y-1/2 transition-opacity",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-px w-full bg-silver-100 transition-transform",
                  open && "-translate-y-[5px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mx-5 mt-3 glass max-h-[calc(100svh-5.5rem)] overflow-y-auto overscroll-contain rounded-3xl p-5 [scrollbar-width:none] sm:p-6 [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV.filter((item) => item.desktop !== false).map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block px-2 py-2.5 text-base text-silver-200 sm:py-3",
                        isActive && "text-aqua-300"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-3 sm:mt-4">
              <PremiumButton
                href={CONTACT_MAILTO}
                size="md"
                variant="primary"
                className="w-full"
              >
                Contact me
              </PremiumButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative inline-flex h-10 w-10 items-center justify-center">
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-aqua-300/60 via-aqua-500/20 to-transparent blur-md" />
      <svg
        viewBox="0 0 40 40"
        className="relative h-10 w-10"
        fill="none"
        aria-hidden
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="rgba(215,222,234,0.4)"
          strokeWidth="0.6"
        />
        <path
          d="M20 9c4 6 7 10 7 14a7 7 0 1 1-14 0c0-4 3-8 7-14z"
          fill="url(#g)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#A4E7F0" />
            <stop offset="100%" stopColor="#48C7DC" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}
