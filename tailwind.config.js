/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'black': '#141615'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      height: {
        '6vh': '6vh',
        '94vh': '94vh',
        '70vh': '70vh',
        '60vh': '60vh',
      },
      zIndex: {
        '10':'10',
        '20': '20',
      }
    },
  },
  plugins: [],
}

