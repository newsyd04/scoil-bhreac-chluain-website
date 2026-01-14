/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sbc-blue': '#092145',
        'sbc-yellow': '#F5AB00',
      },
      fontFamily: {
        sketch: ['"Cabin Sketch"', 'cursive'],
        quicksand: ['"Quicksand"', 'sans-serif'],

      },
    },
  },
  plugins: [],
};
