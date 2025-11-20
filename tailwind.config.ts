// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E0E11",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
      boxShadow: {
        "soft-glow": "0 0 120px rgba(56,189,248,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;