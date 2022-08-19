import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://renansigolo.com",
  integrations: [react(), sitemap(), compress()]
})
