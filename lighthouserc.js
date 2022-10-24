module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "is-crawlable": "off",
        "uses-responsive-images": "warn",
        "lcp-lazy-loaded": "warn",
        "csp-xss": "warn",
        "service-worker": "warn",
        deprecations: "warn"
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
}
