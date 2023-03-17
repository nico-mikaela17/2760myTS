/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
    './index.html'
  ],
  theme: {
    fontFamily: {
      'Staatliches': ['Staatliches', 'cursive'],
      'Rubik': ['Rubik']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}