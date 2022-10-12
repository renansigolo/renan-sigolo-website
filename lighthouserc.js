module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended"
    },
    collect: {
      staticDistDir: "./dist",
      startServerCommand: "npm start",
      url: ["http://localhost:8080"]
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
}
