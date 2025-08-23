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
}

function Footer() {
  return (
    <footer className="w-full bg-brand-light">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-brand-dark">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-2 text-base font-semibold text-brand">{SITE.brand}</div>
            <p>{SITE.address.street}, {SITE.address.zip} {SITE.address.city}</p>
            <p className="mt-1">
              Tel.: <a href={`tel:${SITE.phone}`} className="text-brand hover:underline">{SITE.phone}</a>{" · "}
              <a href={`mailto:${SITE.email}`} className="text-brand hover:underline">{SITE.email}</a>
            </p>
            {Array.isArray(SITE.openingHours) && SITE.openingHours.length > 0 && (
              <p className="mt-2">{SITE.openingHours.join(" · ")}</p>
            )}
          </div>
          <div>
            <div className="mb-2 text-base font-semibold text-brand">Schnellzugriff</div>
            <ul className="space-y-1">
              <li><Link href="/produkte/fenster" className="hover:underline">Fenster</Link></li>
              <li><Link href="/produkte/sonnenschutz" className="hover:underline">Sonnenschutz</Link></li>
              <li><Link href="/produkte/haustueren" className="hover:underline">Haustüren</Link></li>
              <li><Link href="/produkte/garagentore/sektionaltore" className="hover:underline">Sektionaltore</Link></li>
              <li><Link href="/einzugsgebiet" className="hover:underline">Einzugsgebiet</Link></li>
              <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-base font-semibold text-brand">Servicegebiet</div>
            <p>{SITE.serviceArea}</p>
            <div className="mt-3 text-xs">
              <Link href="/impressum" className="hover:underline">Impressum</Link>{" · "}
              <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-brand-dark/80">
          © {new Date().getFullYear()} {SITE.legal.companyLegalName}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-white`}>
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
