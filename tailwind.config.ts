import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        jet: {
          950: "#08080A",
          900: "#101012",
          800: "#1B1B1E",
          700: "#28282C",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E8CE7A",
          dim: "#8A7220",
        },
        ivory: "#F4F1E8",
        slate: {
          400: "#9B9BA3",
          600: "#5B5B63",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #8A7220 0%, #C9A227 45%, #E8CE7A 100%)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(201,162,39,0.14) 0%, rgba(8,8,10,0) 60%)",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
