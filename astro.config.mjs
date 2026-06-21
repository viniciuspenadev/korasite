import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// URLs antigas (slugs renomeados) → redirecionam pras novas, evitando 404.
// Só existem por causa da renomeação; se as antigas nunca foram publicadas,
// é seguro apagar este bloco.
const redirects = {
  "/recursos/crm": "/recursos/crm-whatsapp",
  "/recursos/agenda": "/recursos/agendamento-whatsapp",
  "/recursos/multiatendimento": "/recursos/multiatendimento-whatsapp",
}

export default defineConfig({
  site: "https://www.omnikora.com.br",
  redirects,
  vite: {
    plugins: [tailwindcss()],
  },
})
