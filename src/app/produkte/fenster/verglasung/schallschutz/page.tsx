// src/app/produkte/fenster/verglasung/schallschutz/page.tsx
import Link from "next/link"

const benefits = [
  { t: "Spürbar leiser", d: "Mehrschalige Glasaufbauten reduzieren Außenlärm – angenehm wohnen & arbeiten." },
  { t: "Abgestuft nach Lärmbelastung", d: "Straße, Bahn, Flughafen – der Aufbau wird individuell gewählt." },
  { t: "Kombinierbar", d: "Schallschutz lässt sich mit Wärmeschutz und Sonnenschutz kombinieren." },
]

const steps = [
  "Lärmquelle & Pegel ermitteln (z. B. Straßen- oder Bahnverkehr).",
  "Raumnutzung berücksichtigen (Schlaf-, Wohn- oder Arbeitsraum).",
  "Passenden Glasaufbau wählen (Dicken, Scheibenzwischenraum, Folien).",
  "Fensterprofil, Dichtungen und Montagequalität mit einbeziehen.",
]

const faq = [
  {
    q: "Welche dB-Werte sind sinnvoll?",
    a: "Das hängt von der Lärmsituation ab. Für Schlafzimmer sind höhere Rw-Werte sinnvoll als für Wohnräume. Wir empfehlen den Aufbau nach einer kurzen Bestandsaufnahme.",
  },
  {
    q: "Geht Schallschutz auch mit 3-fach Glas?",
    a: "Ja. Je nach Aufbau können 3-fach-Pakete sehr gute Schallschutzwerte erzielen – die Details sind konfigurationsabhängig.",
  },
  {
    q: "Spürt man den Unterschied wirklich?",
    a: "Ja. Richtig dimensionierter Schallschutz sorgt für merklich ruhigere Räume und bessere Erholung/Arbeitsleistung.",
  },
]

export default function SchallschutzPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte/fenster" className="hover:underline">Fenster</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte/fenster/verglasung" className="hover:underline">Verglasung</Link></li>
          <li aria-hidden>/</li>
          <li className="text-zinc-700">Schallschutz</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">Schallschutzglas – Ruhe für Ihr Zuhause</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          SEMCO-Schallschutzgläser („Phone“) werden passend zur Lärmquelle gewählt. Über Glasdicken,
          Scheibenzwischenräume und Folien erreichen wir hörbar leisere Innenräume – kombinierbar mit
          Wärme- und Sonnenschutz.
        </p>
      </header>

      {/* Vorteile */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Ihre Vorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-sm border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{b.t}</h3>
              <p className="mt-2 text-sm text-zinc-700">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vorgehen */}
      <section className="mb-12 rounded-sm border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">So planen wir Ihren Schallschutz</h2>
        <ol className="mt-3 list-inside list-decimal text-sm text-zinc-700">
          {steps.map((s) => (<li key={s} className="mb-2">{s}</li>))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="mb-12 rounded-sm border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-brand">FAQ</h2>
        <div className="mt-4 space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group rounded-sm border border-zinc-200 p-4">
              <summary className="cursor-pointer font-semibold text-brand">{f.q}</summary>
              <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-sm border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Schallschutz passend zu Ihrer Lärmsituation</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir empfehlen den geeigneten Glasaufbau – inklusive Abstimmung mit Rahmen, Dichtungen und Montage.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/produkte/fenster/verglasung/waermeschutz" className="inline-flex items-center rounded-sm border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">Wärmeschutz</Link>
          <Link href="/produkte/fenster/verglasung/sicherheitsglas" className="inline-flex items-center rounded-sm border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">Sicherheitsglas</Link>
          <Link href="/kontakt" className="inline-flex items-center rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">Beratung anfragen</Link>
        </div>
      </section>
    </div>
  )
}
