module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended"
    },
    collect: {
      staticDistDir: ""
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
}
