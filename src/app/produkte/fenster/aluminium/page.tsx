// src/app/produkte/fenster/aluminium/page.tsx
import Link from "next/link"
import Image from "next/image"

export default function AluminiumFensterPage() {
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
          <li>
            <Link href="/produkte" className="hover:underline">
              Produkte
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/produkte/fenster" className="hover:underline">
              Fenster
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">Aluminium</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
            Schüco Aluminium-Fenster
          </h1>
          <p className="mt-4 text-zinc-600">
            Die Aluminium-Fenstersysteme von <strong>Schüco AWS</strong> verbinden
            modernes Design mit höchster Stabilität, schmalen Ansichten und
            Wärmedämmung bis Passivhausniveau. Ideal für energieeffiziente,
            sichere und langlebige Gebäude.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              Angebot anfordern
            </Link>
            <a
              href="tel:+490000000000"
              className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
          <Image
            src="/placeholder.svg"
            alt="Schüco Aluminium-Fenster"
            fill
            className="object-cover"
          />
        </div>
      </header>

      {/* Merkmale */}
      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-zinc-50 p-6">
          <h3 className="text-lg font-semibold text-zinc-900">Stabilität</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Aluminiumprofile ermöglichen große Formate und hohe
            Widerstandsfähigkeit – perfekt für moderne Architektur.
          </p>
        </div>
        <div className="rounded-2xl bg-zinc-50 p-6">
          <h3 className="text-lg font-semibold text-zinc-900">Energieeffizienz</h3>
          <p className="mt-2 text-sm text-zinc-600">
            U<sub>f</sub>-Werte bis 0,71 W/(m²K) – zertifiziert für Passivhaus,
            hervorragende Dämmung und Nachhaltigkeit.
          </p>
        </div>
        <div className="rounded-2xl bg-zinc-50 p-6">
          <h3 className="text-lg font-semibold text-zinc-900">Sicherheit</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Einbruchhemmung bis RC3, geprüfte Beschlagsysteme und
            Mehrfachverriegelung sorgen für Schutz und Komfort.
          </p>
        </div>
      </section>

      {/* Produktvarianten */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900">Produktvarianten</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-zinc-900">
              Schüco AWS 90.SI+
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              High-End System für Passivhäuser, Uf bis 0,71 W/(m²K), höchste
              Wärmedämmung und Komfort.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-zinc-900">
              Schüco AWS 75.SI+
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Das vielseitige Standardsystem mit hoher Dämmleistung und
              vielfältigen Öffnungsarten.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">
          Starten wir Ihr Fensterprojekt
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Kontaktieren Sie uns für eine kostenlose Erstberatung, Aufmaß und ein
          individuelles Angebot für Ihre neuen Schüco Aluminium-Fenster.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
          >
            Termin anfragen
          </Link>
          <a
            href="tel:+490000000000"
            className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
          >
            Telefon +49 000 0000000
          </a>
        </div>
      </section>
    </div>
  )
}
