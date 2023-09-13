/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Existing content patterns
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Corsa-Grotesk': 'Corsa Grotesk'
      },
      colors: {
        brand: {
          primary: '#3A56CD'
        }
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        '8xl': '1440px'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
