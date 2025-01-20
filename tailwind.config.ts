import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        primary: {
          // ywllow
          /*
                    100: "#fef9c3",
                    300: "#fde047",
                    400: "#facc15",
                    500: "#eab308",
                    */

          // blue

          100: "#dbeafe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",

          // green
          /*                    
                    100: "#dcfce7",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    */
        },
      },
    },
  },

  darkMode: "class",
  plugins: [addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
