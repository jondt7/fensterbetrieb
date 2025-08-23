// src/app/page.tsx
import Image from "next/image"
import Link from "next/link"
import { SITE } from "@/data/site.config"

type TileProps = {
  title: string
  subtitle?: string
  href: string
  imgSrc?: string
  imgAlt?: string
}

function ProductTile({ title, subtitle, href, imgSrc, imgAlt }: TileProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[16/9] w-full bg-zinc-100">
        {/* Platzhalterbild – kann später durch echtes Bild ersetzt werden */}
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
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
        )}
        <div className="mt-3 inline-flex items-center text-sm font-medium text-green-600">
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
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Beratung · Aufmaß · Montage · Service
            </span>
            <h1 className="text-3xl font-bold leading-tight text-zinc-900 md:text-5xl">
              Fenster, Haustüren, Sonnenschutz & Garagentore
            </h1>
            <p className="mt-4 text-zinc-600 md:text-lg">
              {SITE.brand} – Ihr Fachpartner für{" "}
              <strong>Schüco</strong> Fenster (Aluminium & Kunststoff),{" "}
              <strong>Inotherm</strong> Haustüren,{" "}
              <strong>ROMA</strong> Rollladen & Raffstoren sowie{" "}
              <strong>WIŚNIOWSKI</strong> Sektionaltore. Effizient, sicher, ästhetisch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                Angebot anfordern
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
              >
                Jetzt anrufen
              </a>
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              {SITE.address.city} · {SITE.serviceArea}
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
              <Image
                src="/placeholder.svg"
                alt="Modernes Fenster & Haustür – Visual"
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
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
            Unsere Produkte
          </h2>
          <Link
            href="/produkte"
            className="text-sm font-medium text-green-600 hover:underline"
          >
            Alle Produkte
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProductTile
            title="Schüco Fenster – Aluminium"
            subtitle="Stabilität, schmale Ansichten, Top-Wärmedämmung"
            href="/produkte/fenster/aluminium"
            imgAlt="Schüco Aluminium-Fenster"
          />
          <ProductTile
            title="Schüco Fenster – Kunststoff"
            subtitle="82 mm, 7-Kammer, starke Dämmung & Preis-Leistung"
            href="/produkte/fenster/kunststoff"
            imgAlt="Schüco Kunststoff-Fenster"
          />
          <ProductTile
            title="Inotherm Haustüren"
            subtitle="Aluminium-Design, Sicherheit & INOSMART"
            href="/produkte/haustueren"
            imgAlt="Inotherm Haustür"
          />
          <ProductTile
            title="ROMA Rollladen & Raffstoren"
            subtitle="Sicht- & Sonnenschutz, Smart-Home ready"
            href="/produkte/sonnenschutz"
            imgAlt="ROMA Rollladen und Raffstoren"
          />
        </div>
      </section>

      {/* WARUM WIR */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-3 md:py-16">
          <div className="rounded-2xl bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Fachpartner</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Herstellerkompetenz: Schüco, Inotherm, ROMA & WIŚNIOWSKI – Beratung auf Augenhöhe.
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Montage nach Stand der Technik</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Sorgfältiger Bauanschluss (z. B. RAL-Richtlinien), Dichtigkeit, Funktionssicherheit.
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Energie & Sicherheit</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Wärmedämmung, Schallschutz, RC-Sicherheitsoptionen & Smart-Home-Nachrüstung.
            </p>
          </div>
        </div>
      </section>

      {/* CTA-BANNER */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:p-8">
            <div>
              <h3 className="text-xl font-semibold text-zinc-900">
                Starten wir Ihr Projekt
              </h3>
              <p className="mt-1 text-sm text-zinc-600">
                Kostenlose Erstberatung · Schnelles Angebot · Termine nach Absprache
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                Termin anfragen
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
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
