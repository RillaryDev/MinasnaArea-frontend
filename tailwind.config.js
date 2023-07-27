/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          100:'#6D5A73',
          200:'#9A86B3'
        },
        green:{
          100:'#B3C79D'
        }
      },
    },
  },
  plugins: [],
}