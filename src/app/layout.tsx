// src/app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { SITE } from "@/data/site.config"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/SiteHeader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.seo.siteUrl),
  title: {
    default: SITE.seo.defaultTitle,
    template: `%s | ${SITE.brand}`,
  },
  description: SITE.seo.defaultDescription,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE.seo.siteUrl,
    title: SITE.seo.defaultTitle,
    description: SITE.seo.defaultDescription,
    siteName: SITE.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.seo.defaultTitle,
    description: SITE.seo.defaultDescription,
  },
  alternates: {
    canonical: SITE.seo.siteUrl,
  },

  // ★ Icons (liegen unter /public) – keine /public-Präfixe verwenden
  icons: {
    icon: [
      { url: "/favicon.ico" }, // enthält mehrere Größen
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  // (optional, aber sinnvoll für Mobile-UI-Farbe)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#132830" },
    { media: "(prefers-color-scheme: dark)", color: "#132830" },
  ],
}

function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-primary-foreground">
      <div className="container py-10 text-sm">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-2 text-base font-semibold">{SITE.brand}</div>
            <p>
              {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
            </p>
            <p className="mt-1">
              Tel.:{" "}
              <a href={`tel:${SITE.phone}`} className="hover:text-primary-light">
                {SITE.phone}
              </a>
              {" · "}
              <a href={`mailto:${SITE.email}`} className="hover:text-primary-light">
                {SITE.email}
              </a>
            </p>
            {Array.isArray(SITE.openingHours) && SITE.openingHours.length > 0 && (
              <p className="mt-2">{SITE.openingHours.join(" · ")}</p>
            )}
          </div>

          <div>
            <div className="mb-2 text-base font-semibold">Schnellzugriff</div>
            <ul className="space-y-1">
              <li><Link href="/produkte/fenster" className="hover:text-primary-light">Fenster</Link></li>
              <li><Link href="/produkte/sonnenschutz" className="hover:text-primary-light">Sonnenschutz</Link></li>
              <li><Link href="/produkte/haustueren" className="hover:text-primary-light">Haustüren</Link></li>
              <li><Link href="/produkte/garagentore/sektionaltore" className="hover:text-primary-light">Sektionaltore</Link></li>
              <li><Link href="/einzugsgebiet" className="hover:text-primary-light">Einzugsgebiet</Link></li>
              <li><Link href="/kontakt" className="hover:text-primary-light">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-2 text-base font-semibold">Servicegebiet</div>
            <p>{SITE.serviceArea}</p>
            <div className="mt-3 text-xs">
              <Link href="/impressum" className="hover:text-primary-light">Impressum</Link>{" · "}
              <Link href="/datenschutz" className="hover:text-primary-light">Datenschutz</Link>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs opacity-80">
          © {new Date().getFullYear()} {SITE.legal.companyLegalName}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
