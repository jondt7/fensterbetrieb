// src/app/robots.ts
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = process.env.SITE_URL || "https://www.meylen.de"

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Optional: AI-/Bot-Whitelisting (anpassen, wenn nicht gewünscht)
      { userAgent: ["GPTBot", "CCBot", "ChatGPT-User"], allow: "/" },
    ],
    sitemap: [`${base}/sitemap.xml`],
  }
}
