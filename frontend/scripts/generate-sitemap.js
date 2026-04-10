import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { knownCatalogRoutes } from '../src/data/catalogSlugs.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicDir = path.resolve(__dirname, '..', 'public')
const sitemapPath = path.join(publicDir, 'sitemap.xml')
const baseUrl = 'https://grupopmpublicidad.mx'
const today = new Date().toISOString().slice(0, 10)

mkdirSync(publicDir, { recursive: true })

const routes = new Map()
const addRoute = (routePath, priority) => {
  if (!routePath || routes.has(routePath)) return
  routes.set(routePath, priority)
}

addRoute('/', '1.0')
addRoute('/catalogo', '0.8')
addRoute('/contacto', '0.8')
addRoute('/inflables-publicitarios-guadalajara', '0.8')

knownCatalogRoutes.forEach(slug => {
  if (!slug) return
  addRoute(`/${slug}`, '0.8')
})

const urlEntries = Array.from(routes.entries())
  .map(([routePath, priority]) => `  <url>\n    <loc>${baseUrl}${routePath}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`)
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Archivo generado por scripts/generate-sitemap.js -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`

writeFileSync(sitemapPath, `${xml}`)
console.log(`Sitemap generado con ${routes.size} rutas en ${sitemapPath}`)
