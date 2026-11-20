import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07070d",
        panel: "#0d0d18",
        border: "#242438",
        text: "#e8eaf6",
        muted: "#8b8fa8",
        cyan: "#00f0ff",
        magenta: "#ff2bd6",
        purple: "#8b5cff",
        green: "#39ff88",
      },
      fontFamily: {
        sans: ["var(--font-chakra)", "system-ui", "sans-serif"],
        display: ["var(--font-chakra)", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
