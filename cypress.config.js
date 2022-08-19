const { defineConfig } = require("cypress")

module.exports = defineConfig({
  video: false,
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:3000"
  }
})
