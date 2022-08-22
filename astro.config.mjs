import partytown from "@astrojs/partytown"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://renansigolo.com",
  integrations: [
    react(),
    sitemap(),
    compress(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ]
})
