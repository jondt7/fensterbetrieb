// src/app/produkte/page.tsx
import Link from "next/link"
import Image from "next/image"

type TileProps = {
  title: string
  subtitle?: string
  href: string
  imgAlt?: string
  imgSrc?: string
}

function ProductTile({ title, subtitle, href, imgAlt, imgSrc }: TileProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[16/9] w-full bg-zinc-100">
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={imgAlt || title}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 90vw"
          priority={false}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>}
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

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">
              Start
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">Produkte</li>
        </ol>
      </nav>

      {/* Intro */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">Produkte</h1>
        <p className="mt-3 max-w-3xl text-zinc-600">
          Entdecken Sie unsere Kernsortimente – von Schüco Fenstern über Inotherm
          Haustüren bis zu ROMA Sicht-/Sonnenschutz und WIŚNIOWSKI Sektionaltoren.
        </p>
      </header>

      {/* Kachel-Gruppen */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Fenster */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Fenster (Schüco)</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Aluminium für maximale Stabilität und schlanke Ansichten. Kunststoff für
            starke Dämmwerte und Top Preis-Leistung.
          </p>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <ProductTile
              title="Schüco Fenster – Aluminium"
              subtitle="Stabil, sicher, designstark (AWS Plattform)"
              href="/produkte/fenster/aluminium"
              imgAlt="Schüco Aluminium-Fenster"
            />
            <ProductTile
              title="Schüco Fenster – Kunststoff"
              subtitle="82 mm, 7-Kammer, LivIng Plattform"
              href="/produkte/fenster/kunststoff"
              imgAlt="Schüco Kunststoff-Fenster"
            />
          </div>
        </div>

        {/* Haustüren */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Haustüren (Inotherm)</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Aluminium-Design, hohe Sicherheit, starke Dämmung – auf Wunsch mit
            INOSMART (z. B. Fingerprint).
          </p>
          <div className="mt-5">
            <ProductTile
              title="Inotherm Haustüren"
              subtitle="> 400 Designs, Seitenteile, Oberlichter"
              href="/produkte/haustueren"
              imgAlt="Inotherm Haustür"
            />
          </div>
        </div>

        {/* Sonnenschutz */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Rollladen & Raffstoren (ROMA)</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Sicht- und Sonnenschutz mit Aufsatz- und Vorbausystemen, Smart-Home-ready.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <ProductTile
              title="Rollladen"
              subtitle="Aufsatz & Vorbau – Dämmung, Schallschutz"
              href="/produkte/sonnenschutz/rollladen"
              imgAlt="ROMA Rollladen"
            />
            <ProductTile
              title="Raffstoren"
              subtitle="Tageslicht lenken, Hitze reduzieren"
              href="/produkte/sonnenschutz/raffstoren"
              imgAlt="ROMA Raffstoren"
            />
          </div>
        </div>

        {/* Garagentore */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Garagentore (WIŚNIOWSKI)</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Sektionaltore für Neubau & Sanierung – UniPro, UniTherm, PRIME.
          </p>
          <div className="mt-5">
            <ProductTile
              title="Sektionaltore"
              subtitle="Dämmung, Sicherheit, App-Steuerung optional"
              href="/produkte/garagentore/sektionaltore"
              imgAlt="WIŚNIOWSKI Sektionaltor"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
