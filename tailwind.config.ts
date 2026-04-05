import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#D4AF37",
          foreground: "#1c1917",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#fbf9f2",
          100: "#f5efd9",
          200: "#eadfb8",
          300: "#dfc97a",
          400: "#D4AF37",
          500: "#c9a227",
          600: "#b8962e",
          700: "#9a7d26",
          800: "#7c651f",
          900: "#5e4d18",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-lora)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
