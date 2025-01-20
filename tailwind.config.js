/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'primary': '#E2CBFF',
          'secondary': '#393bb2'
        }
      },
    },
    plugins: [require('tailwindcss-motion')]
  }