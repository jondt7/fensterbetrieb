// src/app/produkte/fenster/kunststoff/living-82-as/page.tsx
import Link from "next/link"

const usp = [
  { t: "82 mm Bautiefe, 7-Kammer-System", d: "Sehr gute Dämmung und Stabilität für Neubau & Sanierung." },
  { t: "Anschlagdichtung (2 Ebenen)", d: "Bewährte Dichtungstechnik mit guter Luft- und Schlagregendichtheit." },
  { t: "Flexible, schweißbare EPDM-Dichtungen", d: "Saubere Ecken, langlebige Dichtwirkung, wertige Optik." },
  { t: "3-fach-Verglasung möglich", d: "Hoher Wärmeschutz; Glasstärken bis ca. 52 mm realisierbar." },
  { t: "Design-Varianten", d: "Mehrere Flügelkonturen und große Farb-/Dekorauswahl." },
]

const highlights = [
  "Schmale Ansichtsbreiten für mehr Tageslicht",
  "Gute Schallschutzwerte je nach Glasaufbau",
  "Kompatibel mit einbruchhemmender Beschlagtechnik (RC-Optionen)",
  "Wartungsfreundliche, langlebige Systemkomponenten",
]

export default function Living82ASPage() {
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
          <li className="text-zinc-700">Schüco LivIng 82 AS</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">Schüco LivIng 82 AS (Anschlagdichtung)</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Das LivIng 82 AS ist ein bewährtes Kunststoff-Fenstersystem mit 82 mm Bautiefe und 7-Kammer-Profil.
          Die Ausführung mit Anschlagdichtung (2 Ebenen) kombiniert solide Dämmwerte, langlebige Dichtungstechnik
          und eine große Variantenvielfalt bei Design und Verglasung.
        </p>
      </header>

      {/* Vorteile */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Systemvorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {usp.map((b) => (
            <div key={b.t} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{b.t}</h3>
              <p className="mt-2 text-sm text-zinc-700">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Highlights</h2>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          {highlights.map((h) => (
            <li key={h} className="rounded-[8px] bg-brand-light px-3 py-2">• {h}</li>
          ))}
        </ul>
      </section>

      {/* Nächste Schritte */}
      <section className="rounded-[8px] border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Nächste Schritte</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir planen Glas, Beschlag/Sicherheit, Farben und Maße exakt für Ihr Projekt.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/produkte/fenster/kunststoff/living-82-md" className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light">
            Zu LivIng 82 MD (Mitteldichtung)
          </Link>
          <Link href="/produkte/fenster/verglasung" className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light">
            Verglasung
          </Link>
          <Link href="/produkte/fenster/beschlag-sicherheit" className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light">
            Beschlag & Sicherheit
          </Link>
          <Link href="/kontakt" className="inline-flex items-center rounded-[8px] bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
