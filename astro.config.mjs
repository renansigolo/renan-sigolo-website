import image from "@astrojs/image"
import partytown from "@astrojs/partytown"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://renansigolo.com",
  integrations: [
    react(),
    image(),
    sitemap(),
    compress(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ]
})
