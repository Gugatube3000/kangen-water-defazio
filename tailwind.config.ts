import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Lighter, teal-tinted navy for comfortable long-form reading.
        navy: {
          950: "#0E1A36",
          900: "#172446",
          800: "#1F305C",
          700: "#2A4078",
          600: "#385396",
        },
        silver: {
          400: "#B4BCCB",
          300: "#D7DEEA",
          200: "#E7ECF3",
          100: "#F4F6FB",
        },
        aqua: {
          500: "#48C7DC",
          400: "#6FD7E6",
          300: "#A4E7F0",
          200: "#CFF3F7",
          100: "#E7F8FB",
        },
        mist: "#EAF4F8",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.32em",
      },
      borderRadius: {
        "4xl": "2.25rem",
      },
      boxShadow: {
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px -32px rgba(72,199,220,0.45), 0 12px 32px -16px rgba(6,11,26,0.8)",
        premium: "0 30px 80px -30px rgba(72,199,220,0.55)",
        hairline: "inset 0 0 0 1px rgba(215,222,234,0.12)",
      },
      backgroundImage: {
        "radial-aqua":
          "radial-gradient(circle at 50% 0%, rgba(111,215,230,0.28), transparent 60%)",
        "hero-grid":
          "linear-gradient(to right, rgba(215,222,234,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(215,222,234,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        breathe: "breathe 4s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
