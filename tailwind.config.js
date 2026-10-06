/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#060913",
        secondary: "#0A0F1A",
        card: "#0B1220",
        accent: "#D4AF37",
        accent2: "#F5D76E",
        ink: "#F5F3EE",
        muted: "#A39C8E",
        line: "rgba(244,242,240,0.08)",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(212,175,55,0.16) 0%, rgba(6,9,19,0) 70%)",
        "accent-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5D76E 55%, #FFF5C3 100%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(212,175,55,0.45)",
        card: "0 8px 30px -12px rgba(0,0,0,0.55)",
        "card-hover": "0 20px 45px -15px rgba(212,175,55,0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3.5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        // Entrance for above-the-fold headings: pure CSS so text paints without waiting for JS.
        rise: "rise 0.7s cubic-bezier(0.25, 1, 0.5, 1) both",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.06)" },
        },
        rise: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
