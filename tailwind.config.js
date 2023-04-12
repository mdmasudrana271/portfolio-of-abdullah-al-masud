/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/image/banner-bg.jpg')",
        'footer-bg': "url('/src/assets/image/psychedelic-paper-shapes-with-copy-space.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
