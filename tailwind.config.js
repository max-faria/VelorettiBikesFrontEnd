import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      color: {
        'black2': '#141615',
        'black-gray': '#141601e3',
        'green-musgo': '#606160',
        'cream': '#DDD9CD'
      },
      backgroundColor: {
        'blue-flag': '#1E4785',
        'red-flag': '#AD1D25',
        'light-gray': '#C4C4C4',
        'light-gray2': '#EBEDEE',
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
      maxWidth: {
        695: '495px',
        0.8: '80%',
      },
      backgroundImage: {
        'about-us-bg': "url('../src/assets/about-us-bg.png')",
        'bike-people': "url('../src/assets/bike-people.png')",
        'hero-section': "url('../src/assets/hero-section.png')",
        'maintenance-section': "url('../src/assets/home2.png')"
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

