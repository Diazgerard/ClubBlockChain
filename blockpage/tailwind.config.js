/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
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
