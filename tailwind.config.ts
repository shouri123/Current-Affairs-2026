import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fredoka)", "Fredoka", "cursive", "sans-serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        cream: "#FFFDF5",
        ink: "#18181B",
        popYellow: "#FFE600",
        popPink: "#FF6B9E",
        popCyan: "#38BDF8",
        popMint: "#4ADE80",
        popPurple: "#C084FC",
        popOrange: "#FB923C",
        popCoral: "#FF5A5F",
        background: "#FFFDF5",
        foreground: "#18181B",
        border: "#18181B",
      },
      boxShadow: {
        brutal: "5px 5px 0px 0px #18181B",
        "brutal-lg": "8px 8px 0px 0px #18181B",
        "brutal-sm": "3px 3px 0px 0px #18181B",
        "brutal-hover": "2px 2px 0px 0px #18181B",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

