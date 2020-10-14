module.exports = {
  future: {
    defaultLineHeights: true,
    standardFontWeights: true,
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
