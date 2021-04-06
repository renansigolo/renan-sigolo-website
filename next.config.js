// next.config.js

// Sourcemaps
module.exports = {
  future: {
    webpack5: true,
  },
  productionBrowserSourceMaps: true
}

// PWA
const withPWA = require('next-pwa')
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
})
