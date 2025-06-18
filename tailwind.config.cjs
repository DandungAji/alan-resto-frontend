/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          100: "#E9F2EA",
          500: "#7CB082",
          600: "#6A9A70",
          700: "#58815D",
        },
        blue: {
          500: "#00ACEE",
          600: "#009AD5",
        },
      },
    },
  },
  plugins: [],
};
