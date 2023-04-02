/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {},
    screens: {
      "max-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "max-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "max-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "max-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }

      "min-xl": { min: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "min-lg": { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      "min-md": { min: "768px" },
      // => @media (min-width: 768px) { ... }

      "min-sm": { min: "640px" },
      // => @media (min-width: 640px) { ... }
    },
    fontFamily: {
      heading: ["Trap", "sans-serif"],
      sans: ["Poppins", "sans-serif"],
    },
  },
  daisyui: {
    styled: true,
    darkMode: false,
    themes: [
      {
        mytheme: {
          primary: "#000000",
          secondary: "#FFFFFF",
          // accent: "#276EF1",
          accent: "#E2AD35",
          // accent: "#572DF8",
          // neutral: "#f3f4f6",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#03703C",
          warning: "#FFC043",
          error: "#E11900",
          "--btn-text-case": "capitalize",
        },
      },
      "light",
    ],
    base: true,
    utils: true,
    logs: true,
  },
};
