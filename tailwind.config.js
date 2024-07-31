/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC139",
        dark: "#333333",
        light: "#FFFFFF",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('/dist/img/banner-img.webp')",
        offer1: "url('/dist/img/offer-2.png')",
        offer2: "url('/dist/img/offer-1.png')",
        offer3: "url('/dist/img/offer-3.png')",
      },
    },
  },
  plugins: [],
};
