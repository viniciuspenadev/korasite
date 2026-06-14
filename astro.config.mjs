import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://www.omnikora.com.br",
  integrations: [
    sitemap({
      // Defaults globais; o serialize ajusta por seção.
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === "https://www.omnikora.com.br/") {
          item.priority = 1.0
          item.changefreq = "daily"
        } else if (item.url.includes("/recursos/")) {
          item.priority = 0.9
        } else if (item.url.includes("/blog/")) {
          item.priority = 0.8
        } else if (/(lgpd|privacidade|termos)/.test(item.url)) {
          item.priority = 0.3
          item.changefreq = "yearly"
        }
        return item
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
