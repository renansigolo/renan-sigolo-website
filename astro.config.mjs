import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://renansigolo.com",
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ]
})
