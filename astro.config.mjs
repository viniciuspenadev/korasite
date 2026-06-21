import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"

// URLs antigas (slugs renomeados) → redirecionam pras novas, evitando 404
// em quem (ou o Google) ainda tem as antigas. Em build estático, o Astro gera
// uma página de redirecionamento para cada uma.
const OLD_SLUGS = {
  "/recursos/crm": "/recursos/crm-whatsapp",
  "/recursos/agenda": "/recursos/agendamento-whatsapp",
  "/recursos/multiatendimento": "/recursos/multiatendimento-whatsapp",
}

export default defineConfig({
  site: "https://www.omnikora.com.br",
  redirects: OLD_SLUGS,
  integrations: [
    sitemap({
      // Defaults globais; o serialize ajusta por seção.
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      // Não inclui as URLs antigas (que só redirecionam) no sitemap.
      filter: (page) => !Object.keys(OLD_SLUGS).some((p) => page.endsWith(p + "/")),
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
