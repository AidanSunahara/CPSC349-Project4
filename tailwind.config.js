/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pb_public/**/*.{html,css,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
