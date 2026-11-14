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
        display: ["var(--font-fredoka)"],
        serif: ["var(--font-serif)"],
        sans: ["system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        cream: "#FFFDF5",
        ink: "#18181B",
        muted: "#5D5C5C",
        brand: "#38BDF8",
        popYellow: "#FFE600",
        popPink: "#FF6B9E",
        popCyan: "#38BDF8",
        popMint: "#4ADE80",
        popPurple: "#C084FC",
        popOrange: "#FB923C",
        popCoral: "#FF5A5F",
        background: "#FFFDF5",
        foreground: "#18181B",
        border: "rgba(24, 24, 27, 0.15)",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(24, 24, 27, 0.05)",
        card: "0 2px 6px 0 rgba(24, 24, 27, 0.06)",
        dropdown: "0 10px 25px -5px rgba(24, 24, 27, 0.1)",
        "brutal-sm": "2px 2px 0px #18181B",
        "brutal-md": "3px 3px 0px #18181B",
        "brutal-lg": "4px 4px 0px #18181B",
      },
    },
  },
  plugins: [],
};

export default config;
