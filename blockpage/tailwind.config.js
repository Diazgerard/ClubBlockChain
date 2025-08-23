const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      width: {
        '10': '10px', 
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '90': '90px', 
        '100': '100px',
        '110': '110px',
        '120': '120px',
        '130': '140px',
        '140': '140px',
        '150': '150px', 
        '180': '180px',
        '200': '200px',
        '250': '250px',
        '280': '280px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '150': '150px', 
        '180': '180px',
        '200': '200px',
        '250': '250px',
        '280': '280px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
      
      },
      height: {
        '10': '10px', 
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '90': '90px', 
        '100': '100px',
        '110': '110px',
        '120': '120px',
        '130': '140px',
        '140': '140px',
        '150': '150px', 
        '180': '180px',
        '200': '200px',
        '250': '250px',
        '280': '280px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
      },
    },
  },
  plugins: [],
}
