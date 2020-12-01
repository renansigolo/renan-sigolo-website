const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.jsx',
    './pages/**/*.js',
    './components/**/*.jsx',
    './components/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      gray: colors.gray,
      pink: colors.pink,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
