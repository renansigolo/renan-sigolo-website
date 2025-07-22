import { defineConfig } from "cypress";

const config = defineConfig({
  video: false,
  e2e: {
    testIsolation: false,
    supportFile: false,
    baseUrl: "http://localhost:4321",
  },
});

export default config;
