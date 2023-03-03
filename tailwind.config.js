/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './pages/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',],
  theme: {
    extend: {
      boxShadow: {
        'header': '0px 2px 8px rgba(240, 241, 242, 1)',
      }
    },
  },
  plugins: [],
}
