// src/app/produkte/fenster/kunststoff/page.tsx
import Link from "next/link"
import Image from "next/image"

export default function KunststoffFensterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">Start</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/produkte" className="hover:underline">Produkte</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/produkte/fenster" className="hover:underline">Fenster</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">Kunststoff</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
            Schüco Kunststoff-Fenster
          </h1>
          <p className="mt-4 text-zinc-600">
            Die <strong>Schüco LivIng</strong>-Serie steht für höchste
            Energieeffizienz, modernes Design und langlebige Qualität. Mit 82 mm
            Bautiefe und innovativer 7-Kammer-Technologie erreichen Sie exzellente
            Dämmwerte und maximalen Wohnkomfort.
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
            alt="Schüco Kunststoff-Fenster"
            fill
            className="object-cover"
          />
        </div>
      </header>

      {/* Merkmale */}
      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-zinc-50 p-6">
          <h3 className="text-lg font-semibold text-zinc-900">Energieeffizienz</h3>
          <p className="mt-2 text-sm text-zinc-600">
            7-Kammer-Profile mit 82 mm Bautiefe erreichen U<sub>f</sub>-Werte bis 0,79 W/(m²K) und erfüllen höchste Anforderungen an Wärmedämmung.
          </p>
        </div>
        <div className="rounded-2xl bg-zinc-50 p-6">
          <h3 className="text-lg font-semibold text-zinc-900">Komfort</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Optionaler Schallschutz bis 47 dB, langlebige EPDM-Dichtungen, pflegeleicht und wartungsarm.
          </p>
        </div>
        <div className="rounded-2xl bg-zinc-50 p-6">
          <h3 className="text-lg font-semibold text-zinc-900">Design</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Große Farb- und Oberflächenvielfalt, optional mit Aluminium-Deckschalen.
          </p>
        </div>
      </section>

      {/* Varianten */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900">Produktvarianten</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-zinc-900">LivIng 82 AS</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Anschlagdichtungssystem (AS) mit 2 Dichtungsebenen, gute Dämmung
              und hervorragendes Preis-Leistungs-Verhältnis.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-zinc-900">LivIng 82 MD</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Mitteldichtungssystem (MD) mit zusätzlicher Dichtungsebene für
              optimale Wärmedämmung, Schallschutz und Luftdichtheit.
            </p>
          </div>
        </div>
      </section>

      {/* Platzhalter-Sektion: Beschlag & Sicherheit */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900">Beschlag & Sicherheit</h2>
        <p className="mt-3 max-w-3xl text-sm text-zinc-600">
          Hier fügen wir später Details zu Beschlägen, RC-Sicherheitsklassen und
          optionalen Sicherheitsausstattungen ein (z. B. RC2, RC3, Pilzkopfverriegelung).
        </p>
      </section>

      {/* Platzhalter-Sektion: Glas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900">Verglasung</h2>
        <p className="mt-3 max-w-3xl text-sm text-zinc-600">
          Informationen zu Wärmeschutz-, Schallschutz- und Sicherheitsglas
          sowie optionaler Sonnenschutz- und Dekorgläser folgen hier.
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">
          Starten wir Ihr Fensterprojekt
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Kontaktieren Sie uns für eine kostenlose Erstberatung, Aufmaß und ein
          individuelles Angebot für Ihre neuen Schüco Kunststoff-Fenster.
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
