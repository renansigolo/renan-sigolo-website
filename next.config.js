// next.config.js

// Sourcemaps
const withSourceMaps = require('@zeit/next-source-maps')
module.exports = withSourceMaps({
  webpack(config) {
    return config
  },
})

// PWA
const withPWA = require('next-pwa')
module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
})
