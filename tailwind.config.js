/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'black2': '#141615',
        'black-gray': '#141601e3',
      },
      backgroundColor: {
        'blue-flag': '#1E4785',
        'red-flag': '#AD1D25',
        'light-gray': '#C4C4C4',
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
      },
      backgroundImage: {
        'about-us-bg': "url('./src/assets/about-us-bg.png')",
        'bike-people': "URL('./src/assets/bike-people.png')",
        'hero-section': "URL('./src/assets/hero-section.png')",
        'maintenance-section': "URL('src/assets/home2.png')"
      }
    },
  },
  plugins: [],
}

