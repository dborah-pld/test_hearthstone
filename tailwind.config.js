/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hs : {
          beige: "#E5D0A3",
          purple: "#21183F",
          red: "#581415",
        }
      }
    },
  },
  plugins: [],
}