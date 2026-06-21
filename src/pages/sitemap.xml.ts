import type { APIRoute } from "astro"
import { getCollection } from "astro:content"

const SITE = "https://www.omnikora.com.br"

// Páginas fixas do site (as renomeadas antigas NÃO entram — elas só redirecionam).
// Ao criar uma página nova fora do blog, adicione-a aqui.
const staticPages: { path: string; priority: string; changefreq: string }[] = [
  { path: "/",                                    priority: "1.0", changefreq: "daily" },
  { path: "/recursos/",                           priority: "0.9", changefreq: "weekly" },
  { path: "/recursos/multiatendimento-whatsapp/", priority: "0.9", changefreq: "weekly" },
  { path: "/recursos/agendamento-whatsapp/",      priority: "0.9", changefreq: "weekly" },
  { path: "/recursos/crm-whatsapp/",              priority: "0.9", changefreq: "weekly" },
  { path: "/recursos/atendimento-ia-whatsapp/",   priority: "0.9", changefreq: "weekly" },
  { path: "/blog/",                               priority: "0.8", changefreq: "weekly" },
  { path: "/termos/",                             priority: "0.3", changefreq: "yearly" },
  { path: "/privacidade/",                        priority: "0.3", changefreq: "yearly" },
  { path: "/lgpd/",                               priority: "0.3", changefreq: "yearly" },
]

export const GET: APIRoute = async () => {
  const now = new Date().toISOString()

  // Posts do blog entram sozinhos (lastmod = data do post).
  const posts = await getCollection("blog")
  const blog = posts.map((p) => ({
    path: `/blog/${p.slug}/`,
    priority: "0.8",
    changefreq: "monthly",
    lastmod: p.data.date.toISOString(),
  }))

  const urls = [
    ...staticPages.map((p) => ({ ...p, lastmod: now })),
    ...blog,
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
