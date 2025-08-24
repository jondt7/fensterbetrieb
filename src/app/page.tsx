// src/app/page.tsx
import Image from "next/image"
import Link from "next/link"
import { SITE } from "@/data/site.config"

/** Optional: Revalidation für SSG/ISR (SEO & Performance) */
export const revalidate = 3600

type TileProps = {
  title: string
  subtitle?: string
  href: string
  imgSrc?: string
  imgAlt?: string
}

function ProductTile({ title, subtitle, href, imgSrc, imgAlt }: TileProps) {
  return (
    <li>
      <Link
        href={href}
        className="group block overflow-hidden border border-border bg-background transition hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative aspect-[16/9] w-full bg-muted">
          <Image
            src={imgSrc || "/placeholder.svg"}
            alt={imgAlt || title}
            fill
            className="object-cover transition group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, 50vw"
            priority={false}
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-3 inline-flex items-center text-sm font-medium text-primary">
            Mehr erfahren
            <svg
              className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.brand,
    image: `${SITE.seo.siteUrl}/hero/fenster-haustuer.webp`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.zip,
      addressLocality: SITE.address.city,
      addressCountry: "DE",
    },
    areaServed: SITE.serviceArea,
    url: SITE.seo.siteUrl,
  }

  return (
    <>
      {/* JSON-LD für Local SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="container grid grid-cols-1 gap-8 py-14 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <span className="mb-3 inline-flex items-center border border-primary px-3 py-1 text-xs font-medium text-primary">
              Beratung · Aufmaß · Montage · Service
            </span>

            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Fenster, Haustüren, Sonnenschutz & Garagentore
            </h1>

            <p className="mt-4 text-muted-foreground md:text-lg">
              {SITE.brand} – Ihr Fachpartner in {SITE.address.city} (Raum {SITE.serviceArea}) für{" "}
              <strong>Schüco</strong> Fenster (Aluminium & Kunststoff), <strong>Inotherm</strong> Haustüren,{" "}
              <strong>ROMA</strong> Rollladen & Raffstoren sowie <strong>WIŚNIOWSKI</strong> Sektionaltore.
              Effizient, sicher, ästhetisch.
            </p>

            {/* NAP/Adresse auf der Startseite (Local-SEO-Signal) */}
            <address className="mt-3 not-italic text-sm text-muted-foreground">
              {SITE.brand}, {SITE.address.street}, {SITE.address.zip} {SITE.address.city} · Tel.{" "}
              <a className="text-primary hover:text-primary-light" href={`tel:${SITE.phone}`}>
                {SITE.phone}
              </a>
            </address>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Angebot anfordern
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-light hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Jetzt anrufen
              </a>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              {SITE.address.city} · {SITE.serviceArea}
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-muted">
              <Image
                src="/hero/fenster-haustuer.webp"
                alt="Modernes Fenster & Haustür – Referenzprojekt"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUKT-KACHELN */}
      <section className="container py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Unsere Produkte</h2>
          <Link
            href="/produkte"
            className="text-sm font-medium text-primary hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Alle Produkte
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          <ProductTile
            title="Schüco Fenster – Aluminium"
            subtitle="Stabilität, schmale Ansichten, Top-Wärmedämmung"
            href="/produkte/fenster/aluminium"
            imgSrc="/produkte/fenster-aluminium.webp"
            imgAlt="Schüco Aluminium-Fenster"
          />
          <ProductTile
            title="Schüco Fenster – Kunststoff"
            subtitle="82 mm, 7-Kammer, starke Dämmung & Preis-Leistung"
            href="/produkte/fenster/kunststoff"
            imgSrc="/produkte/fenster-kunststoff.webp"
            imgAlt="Schüco Kunststoff-Fenster"
          />
          <ProductTile
            title="Inotherm Haustüren"
            subtitle="Aluminium-Design, Sicherheit & INOSMART"
            href="/produkte/haustueren"
            imgSrc="/produkte/haustuer-inotherm-dueren.webp"
            imgAlt="Inotherm Haustür"
          />
          <ProductTile
            title="ROMA Rollladen & Raffstoren"
            subtitle="Sicht- & Sonnenschutz, Smart-Home ready"
            href="/produkte/sonnenschutz"
            imgSrc="/produkte/sonnenschutz-roma-koeln.webp"
            imgAlt="ROMA Rollladen und Raffstoren"
          />
        </ul>

        {/* Weiterführende Inhalte: interne Verlinkung verstärken */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="text-sm text-muted-foreground">Das könnte Sie auch interessieren</div>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm">
            <li>
              <Link href="/produkte/fenster" className="text-primary hover:text-primary-light">
                Fenster – Übersicht
              </Link>
            </li>
            <li>
              <Link href="/produkte/sonnenschutz/rollladen" className="text-primary hover:text-primary-light">
                Rollladen – Übersicht
              </Link>
            </li>
            <li>
              <Link href="/einzugsgebiet" className="text-primary hover:text-primary-light">
                Unser Einzugsgebiet
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-primary hover:text-primary-light">
                Kontakt & Angebot
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* WARUM WIR */}
      <section className="border-y border-border bg-background">
        <div className="container grid grid-cols-1 gap-6 py-12 md:grid-cols-3 md:py-16">
          <div className="bg-muted p-6">
            <h3 className="text-lg font-semibold">Fachpartner</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Herstellerkompetenz: Schüco, Inotherm, ROMA & WIŚNIOWSKI – Beratung auf Augenhöhe.
            </p>
          </div>
          <div className="bg-muted p-6">
            <h3 className="text-lg font-semibold">Montage nach Stand der Technik</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sorgfältiger Bauanschluss (z. B. RAL-Richtlinien), Dichtigkeit, Funktionssicherheit.
            </p>
          </div>
          <div className="bg-muted p-6">
            <h3 className="text-lg font-semibold">Energie & Sicherheit</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Wärmedämmung, Schallschutz, RC-Sicherheitsoptionen & Smart-Home-Nachrüstung.
            </p>
          </div>
        </div>
      </section>

      {/* CTA-BANNER */}
      <section className="bg-background">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col items-start justify-between gap-6 border border-border bg-background p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h3 className="text-xl font-semibold">Starten wir Ihr Projekt</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Kostenlose Erstberatung · Schnelles Angebot · Termine nach Absprache
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Termin anfragen
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-light hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Telefon {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
