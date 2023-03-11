/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.80s cubic-bezier(0.36, 0.7, .19, 0.97) both',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%,50%,  70%': {
            transform: 'translate3d(-10px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(10px, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}
