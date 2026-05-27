/**
 * Constantes da marca Kora. Tudo que aparece com frequência no site mora aqui
 * pra ficar fácil de ajustar (nome, frase, link do WhatsApp, etc).
 *
 * IMPORTANTE: todo botão CTA do site importa daqui via waLink(). Se for trocar
 * o número, mude APENAS em whatsappNumber abaixo — os 4+ CTAs atualizam juntos.
 */

export const BRAND = {
  name:     "Kora",
  tagline:  "O WhatsApp que vende e atende com IA",
  subline:  "Sem perder o toque humano.",
  domain:   "kora.bluedigitalhub.com.br",

  // CTA principal — link do WhatsApp comercial
  whatsappNumber: "5511987253394", // +55 11 98725-3394
  whatsappCta:    "Falar no WhatsApp",
  whatsappPrefill:"Oi! Quero saber mais sobre o Kora.",

  // Social
  instagram: "https://instagram.com/usekora",
  linkedin:  "https://linkedin.com/company/kora",

  // Entidade legal / contato
  legalEntity: "BlueDigitalHub",
  legalEmail:  "contato@bluedigitalhub.com.br",

  // Logos (em /public)
  logo:       "/logo_kora.png",        // wordmark azul (sobre fundo claro)
  logoWhite:  "/logo_kora_branco.png", // wordmark branco (sobre fundo escuro)
  logoMark:   "/logo_kora_curto.png",  // só o "k" em quadrado azul (favicon, espaços pequenos)
} as const

export const waLink = (prefill = BRAND.whatsappPrefill) =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(prefill)}`
