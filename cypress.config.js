const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    testIsolation: false,
    supportFile: false,
    baseUrl: "http://localhost:4321",
  },
});
