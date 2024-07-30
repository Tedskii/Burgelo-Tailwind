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
        montserrat:["Montserrat", 'sans-serif']
      },
      backgroundImage: {
        banner: "url('/dist/img/banner-img.webp')",
      },
    },
  },
  plugins: [],
};
