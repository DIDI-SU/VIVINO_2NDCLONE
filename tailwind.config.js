/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'footer-top': '#f7f3f0',
      'footer-bottom': '#EAE0DA',
    },
  },
  plugins: [require('daisyui')],
};
