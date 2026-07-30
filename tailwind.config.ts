import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        jet: {
          950: "#08080A", // fusoliera - nero quasi assoluto, sfondo principale
          900: "#101012", // pannello - card e sezioni
          800: "#1B1B1E", // bordo/separatore su sfondo scuro
        },
        gold: {
          DEFAULT: "#C9A227", // ottone anticato - colore primario di accento
          light: "#E8CE7A", // luce riflessa - hover, evidenze
          dim: "#8A7220", // ottone in ombra - testo secondario dorato
        },
        ivory: "#F4F1E8", // testo principale su sfondo scuro
        slate: {
          400: "#9B9BA3", // testo secondario
          600: "#5B5B63", // testo terziario / caption
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #8A7220 0%, #C9A227 45%, #E8CE7A 100%)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(201,162,39,0.12) 0%, rgba(8,8,10,0) 60%)",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
