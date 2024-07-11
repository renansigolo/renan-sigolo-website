import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://renansigolo.com",
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }),
    icon({
      iconDir: "src/assets/icons"
    })
  ]
})
