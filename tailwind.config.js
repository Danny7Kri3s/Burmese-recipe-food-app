/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lobster: ['Lobster', "sans-serif"]
    },
    extend: {
      colors: {
        "brown-tt": '#403411',
        "gray-tp": "#474747",
        "btn-color": "#b06a07",
        "btn-hover": "#dea043",
        "btn-active": '#9c5d05'
      }
    },
  },
  plugins: [],
}

