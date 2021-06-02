const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}', './public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: theme => ({
      white: theme('colors.white')
    }),

    extend: {
      colors: {
        black: "#070D1C",
        lightBlack: "#0B0E16"
      },
      backgroundColor: ['even'],
      keyframes: {
        'pop': {
          '0%': { transfrom: 'scale(0)' },
          '100%': { transfrom: 'scale(1)' }
        }
      },
      animation: {
        pop: 'pop 200ms ease-in-out forwards'
      },
      height: {
        lgg: '35rem',
        lggg: "40rem",
        mid: "35rem",
      },
      width: {
        lgg: '35rem',
        lggg: "40rem",
        mid: "35rem"
      },



    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
