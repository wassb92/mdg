/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/globals.css",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mawaqit: "#490094",
        brand: {
          light: "#E0F2FE", // light blue
          DEFAULT: "#2076c9", // deep teal
          dark: "#0E4C92", // navy blue
        },
        accent: {
          light: "#FFF8E1", // soft gold
          DEFAULT: "#F0B429", // warm gold
          dark: "#C2801C", // deep gold
        },
        sky: {
          light: "#E0F7FF",
          DEFAULT: "#38BDF8",
          dark: "#0E7490",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-gradient.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
