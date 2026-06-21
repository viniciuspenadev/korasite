# syntax=docker/dockerfile:1
# ─────────────────────────────────────────────────────────────────────────────
# Kora site (Astro) — Docker multi-stage build
#
# Stage 1: Build com Node 20 alpine (~120MB, descartado depois)
# Stage 2: Serve com nginx alpine (~25MB final, só HTML estático)
#
# Container final é pequeno e rápido — nginx servindo dist/ sem processo Node
# rodando em runtime. CDN-like performance num único container.
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copia manifests primeiro pra aproveitar cache de layer quando só código muda
COPY package.json package-lock.json* ./

# npm install em vez de npm ci — lock gerado no Windows não inclui
# deps opcionais Linux-only (ex: @emnapi/runtime via lightningcss)
RUN npm install --no-audit --no-fund

# Copia o resto do código e builda o site estático em /app/dist
COPY . .
RUN npm run build


# ── Stage 2: serve ──────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Remove default config do nginx (vamos usar nosso)
RUN rm /etc/nginx/conf.d/default.conf

# Copia nossa config customizada (gzip, cache, routing pra Astro)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia só o output do build do estágio anterior — node_modules nem vem junto
COPY --from=builder /app/dist /usr/share/nginx/html

# Permissões pra nginx ler os arquivos
RUN chown -R nginx:nginx /usr/share/nginx/html

# Porta padrão do nginx — EasyPanel/Traefik vai rotear o domínio pra cá
EXPOSE 80

# Healthcheck pro EasyPanel saber que o container subiu OK
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

# nginx em foreground (Docker quer processo principal não-daemon)
CMD ["nginx", "-g", "daemon off;"]
