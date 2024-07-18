/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #ECF15E 10%, #000000 100%)",
      },
      colors: {
        brandprimary: "#ECF15E",
        brandsecondary: "#D6DD13",
        blacksoft: "#0E0F11",
        accentaccent: "#8996A9",
        accentsecondary: "#ECF15E",
      },
      fontFamily: {
        sans: ["Onest", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
