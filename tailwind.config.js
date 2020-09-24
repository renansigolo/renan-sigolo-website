module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.jsx',
    './pages/**/*.js',
    './components/**/*.jsx',
    './components/**/*.js',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
