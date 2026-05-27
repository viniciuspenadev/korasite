import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://kora.bluedigitalhub.com.br",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
