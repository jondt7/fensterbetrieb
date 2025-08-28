// src/app/einzugsgebiet/[slug]/page.tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { CITIES } from "@/data/cities"
import { SITE } from "@/data/site.config"

type Params = { params: { slug: string } }

// Optional: Seite darf dynamisch bleiben (kein SSG nötig)
export const dynamic = "force-dynamic"

export default function CityPage({ params }: Params) {
  const city = CITIES.find((c) => c.slug === params.slug)
  if (!city) return notFound()

  // JSON-LD nur als Service (kein eigener Standort!)
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fenster, Haustüren & Sonnenschutz – Beratung, Aufmaß, Montage",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: SITE.brand,             // ← korrigiert
      url: SITE.seo.siteUrl,        // ← korrigiert
      telephone: SITE.phone,
      email: SITE.email,
    },
    areaServed: { "@type": "City", name: city.name },
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/einzugsgebiet" className="hover:underline">Einzugsgebiet</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">{city.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">
          Fenster & Haustüren in {city.name}
        </h1>
        <p className="mt-3 max-w-3xl text-zinc-600">
          {city.intro}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-[8px] bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Beratung anfragen
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light"
          >
            Telefon {SITE.phone}
          </a>
        </div>
      </header>

      {/* Leistungen */}
      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-brand">Fenster</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Schüco Aluminium & Kunststoff (LivIng 82 AS/MD), Beschlag & Verglasung.
          </p>
          <Link
            href="/produkte/fenster"
            className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
          >
            Mehr zu Fenstern
          </Link>
        </div>
        <div className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-brand">Sonnenschutz</h2>
          <p className="mt-2 text-sm text-zinc-700">
            ROMA Rollladen & Raffstoren (CDL/C/Z) und Steuerung, Textilscreens optional.
          </p>
          <Link
            href="/produkte/sonnenschutz"
            className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
          >
            Mehr zu Sonnenschutz
          </Link>
        </div>
        <div className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-brand">Haustüren</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Inotherm Aluminium: InoSmart, Sicherheitsstufen, Griff-Designs.
          </p>
          <Link
            href="/produkte/haustueren"
            className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
          >
            Mehr zu Haustüren
          </Link>
        </div>
      </section>

      {/* Lokaler Mehrwert */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Warum wir in {city.name}?</h2>
        <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
          <li>Kurze Wege: schnelle Termine für Beratung & Aufmaß</li>
          <li>Erfahrung mit regionalen Bauweisen (Altbau, Denkmalschutz, Neubau)</li>
          <li>Referenzen in {city.name} – auf Wunsch einsehbar</li>
        </ul>
      </section>

      {/* Abschluss-CTA */}
      <section className="rounded-[8px] border border-brand bg-white p-8">
        <h2 className="text-lg font-semibold text-brand">Termin in {city.name} vereinbaren</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir kommen zu Ihnen, nehmen Maße und erstellen ein verbindliches Angebot.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-[8px] bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Beratung anfragen
          </Link>
          <Link
            href="/produkte"
            className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light"
          >
            Produkte ansehen
          </Link>
        </div>
      </section>
    </div>
  )
}
