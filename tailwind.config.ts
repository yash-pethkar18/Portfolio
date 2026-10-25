import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070b14",
        surface: "#0d1424",
        card: "#101a2e",
        line: "#1e2a44",
        ink: "#e6ebf5",
        muted: "#93a0ba",
        accent: "#5eead4",
        accent2: "#818cf8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(94,234,212,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
