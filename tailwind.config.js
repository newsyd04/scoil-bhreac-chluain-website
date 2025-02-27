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
        'sbc-yellow': '#f3c744',
      }
    },
  },
  plugins: [],
};
