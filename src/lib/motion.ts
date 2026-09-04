import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } },
};

export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.08 } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

export const CONTACT_EMAIL = "consultation@defaziowellness.com";
export const CONTACT_MAILTO =
  `mailto:${CONTACT_EMAIL}` +
  "?subject=Water%20wellness%20%E2%80%94%20a%20question%20for%20Dr.%20De%20Fazio" +
  "&body=" + encodeURIComponent("Hi Dr. De Fazio,\n\nI read your water guide and have a question:\n\n");
export const OTHER_MACHINES_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("A question about other water systems")}&body=${encodeURIComponent("Hi Dr. De Fazio,\n\nI read about the K8 and Anespa on your site. Could we discuss other options for my home?\n\nMy question:\n")}`;
export const TELEGRAM_URL = "https://t.me/DE_PHAZZ20";

// Retained for compatibility with components that still use the original name.
export const CALENDLY_URL = CONTACT_MAILTO;

export const DOCTOR_NAME = "Dr. David De Fazio";
export const DOCTOR_TAGLINE = "Wellness & Health Optimization";
