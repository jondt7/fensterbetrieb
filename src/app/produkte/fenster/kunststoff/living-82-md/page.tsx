// src/app/produkte/fenster/kunststoff/living-82-md/page.tsx
import Link from "next/link"

const usp = [
  { t: "82 mm Bautiefe, 7-Kammer-System", d: "Hervorragende Wärmedämmung und Stabilität." },
  { t: "Mitteldichtung (3 Ebenen)", d: "Zusätzliche Dichtung in der Mitte für optimierte Luft-/Schlagregendichtheit." },
  { t: "Sehr gute Energieeffizienz", d: "Passend konfiguriert ist das System für sehr hohe Effizienzanforderungen geeignet." },
  { t: "3-fach-Verglasung & große Glasdicken", d: "Gläser bis ca. 54 mm realisierbar – ideal für Wärme- oder Schallschutz." },
  { t: "Premium-Dichtungen (EPDM, thermisch verschweißbar)", d: "Dauerhafte Dichtwirkung mit sauberer Eckausbildung." },
]

const highlights = [
  "Sehr gute Schallschutzwerte je nach Glasaufbau",
  "Schmale Ansichten, mehrere Flügelkonturen (Designvarianten)",
  "Kombinierbar mit RC-Sicherheitsausstattung",
  "Komfortoptionen wie verdeckt liegende Beschläge oder Lüftung möglich",
]

export default function Living82MDPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte/fenster" className="hover:underline">Fenster</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte/fenster/kunststoff" className="hover:underline">Kunststoff</Link></li>
          <li aria-hidden>/</li>
          <li className="text-zinc-700">Schüco LivIng 82 MD</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">Schüco LivIng 82 MD (Mitteldichtung)</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          LivIng 82 MD mit Mitteldichtung setzt in der Kunststoffklasse Maßstäbe:
          drei Dichtungsebenen für zusätzliche Dichtheit, sehr gute Dämmwerte
          sowie vielfältige Möglichkeiten bei Design, Beschlag und Verglasung.
        </p>
      </header>

      {/* Vorteile */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Systemvorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {usp.map((b) => (
            <div key={b.t} className="rounded-sm border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{b.t}</h3>
              <p className="mt-2 text-sm text-zinc-700">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mb-12 rounded-sm border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Highlights</h2>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          {highlights.map((h) => (
            <li key={h} className="rounded-sm bg-brand-light px-3 py-2">• {h}</li>
          ))}
        </ul>
      </section>

      {/* Nächste Schritte */}
      <section className="rounded-sm border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Nächste Schritte</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir stimmen Verglasung, Sicherheitspaket und Design exakt auf Ihr Objekt ab.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/produkte/fenster/kunststoff/living-82-as" className="inline-flex items-center rounded-sm border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light">
            Zu LivIng 82 AS (Anschlagdichtung)
          </Link>
          <Link href="/produkte/fenster/verglasung" className="inline-flex items-center rounded-sm border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light">
            Verglasung
          </Link>
          <Link href="/produkte/fenster/beschlag-sicherheit" className="inline-flex items-center rounded-sm border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light">
            Beschlag & Sicherheit
          </Link>
          <Link href="/kontakt" className="inline-flex items-center rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
