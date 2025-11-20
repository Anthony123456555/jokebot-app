// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // CETTE PROPRIÉTÉ EST LA CLÉ :
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ASSUREZ-VOUS QUE CECI EST PRÉSENT ET CORRECT
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
