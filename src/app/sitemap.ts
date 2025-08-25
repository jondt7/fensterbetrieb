// src/app/sitemap.ts
import type { MetadataRoute } from "next"
import fs from "node:fs/promises"
import path from "node:path"
import fg from "fast-glob"

export const runtime = "nodejs"      // erlaubt FS-Zugriff
export const revalidate = 3600       // 1h: Sitemap regeneriert sich regelmäßig

type UrlItem = {
  url: string
  lastModified?: string | Date
  changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"]
  priority?: number
  alternates?: {
    languages?: Record<string, string>
  }
}

// 1) Statische Seiten (manuell)
function getStaticPages(): UrlItem[] {
  return [
    { url: "/", priority: 1.0, changeFrequency: "daily" },
    { url: "/kontakt", changeFrequency: "monthly", priority: 0.5 },
    { url: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
    { url: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  ]
}

// 2) Automatisch: Next.js App-Router-Dateien
//    - findet src/app/**/page.{tsx,mdx,md}
//    - ignoriert API/Meta/Media/Group-Routen
async function getAppRouterPages(): Promise<UrlItem[]> {
  const ROOT = process.cwd()
  const files = await fg(
    [
      "src/app/**/page.{tsx,mdx,md}",
      "!src/app/(api)/**",
      "!src/app/**/sitemaps/**",
      "!src/app/**/sitemap.*",
      "!src/app/**/robots.*",
      "!src/app/**/manifest.*",
      "!src/app/**/opengraph-image.*",
      "!src/app/**/icon.*",
      "!src/app/**/apple-icon.*",
    ],
    { cwd: ROOT }
  )

  const items: UrlItem[] = []
  for (const file of files) {
    // Route aus Dateipfad ableiten
    let route =
      file.replace(/^src\/app/, "").replace(/\/page\.(tsx|mdx|md)$/i, "") || "/"

    // Route Groups entfernen: /(group) -> /
    route = route.replace(/\/\([^/]+\)/g, "")

    // dynamische Segmente (z. B. /[slug]) überspringen
    if (route.includes("[")) continue

    route = route.replace(/\/+/g, "/")
    if (route === "") route = "/"

    const stat = await fs.stat(path.join(ROOT, file)).catch(() => null)
    const lastModified = stat?.mtime ?? new Date()

    items.push(score({ url: route, lastModified }))
  }

  // Duplikate entfernen
  const seen = new Set<string>()
  return items.filter((i) => {
    if (seen.has(i.url)) return false
    seen.add(i.url)
    return true
  })
}

// 3) Optional: Content/Blog aus /content (MDX)
async function getContentPages(): Promise<UrlItem[]> {
  const ROOT = process.cwd()
  const files = await fg(["content/**/index.mdx", "content/**/*.mdx"], { cwd: ROOT })
  const items: UrlItem[] = []

  for (const file of files) {
    let url = "/" + file.replace(/^content\//, "").replace(/\.mdx$/i, "")
    url = url.replace(/\/index$/i, "")
    const stat = await fs.stat(path.join(ROOT, file)).catch(() => null)
    const lastModified = stat?.mtime ?? new Date()
    items.push(score({ url, lastModified }))
  }
  return items
}

// 4) Optional: DB/CMS – hier echte Slugs + updatedAt einspeisen
async function getCmsOrDbPages(): Promise<UrlItem[]> {
  // Beispiel:
  // const products = await db.product.findMany({ select: { slug: true, updatedAt: true } })
  // return products.map(p => score({ url: `/produkte/${p.slug}`, lastModified: p.updatedAt }))
  return []
}

// Heuristik für changefreq/priority
function score(item: UrlItem): UrlItem {
  const u = item.url
  if (u === "/") return { ...item, priority: 1.0, changeFrequency: "daily" }
  if (u.startsWith("/produkte")) return { ...item, priority: 0.8, changeFrequency: "weekly" }
  if (u.startsWith("/blog")) return { ...item, priority: 0.7, changeFrequency: "daily" }
  return { ...item, priority: item.priority ?? 0.5, changeFrequency: item.changeFrequency ?? "monthly" }
}

// Export: Google-konforme Sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.SITE_URL || "https://www.meilen.de"

  const [staticPages, appPages, contentPages, cmsPages] = await Promise.all([
    Promise.resolve(getStaticPages()),
    getAppRouterPages(),
    getContentPages(),
    getCmsOrDbPages(),
  ])

  const items = [...staticPages, ...appPages, ...contentPages, ...cmsPages]

  const normalized: MetadataRoute.Sitemap = items.map((i) => ({
    url: new URL(i.url, base).toString(),
    lastModified: i.lastModified ?? new Date(),
    changeFrequency: i.changeFrequency,
    priority: i.priority,
    alternates: i.alternates,
  }))

  normalized.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0) || a.url.localeCompare(b.url))
  return normalized
}
