// src/app/produkte/fenster/verglasung/sicherheitsglas/page.tsx
import Link from "next/link"

const tiles = [
  {
    title: "ESG – Einscheiben-Sicherheitsglas",
    points: [
      "Thermisch vorgespannt, erhöhte Stoß-/Schlagfestigkeit",
      "Bricht in kleine, stumpfe Krümel – geringeres Verletzungsrisiko",
      "Einsatz u. a. bei Überkopf/Innenbereichen, als Scheibenkomponente",
    ],
  },
  {
    title: "VSG – Verbund-Sicherheitsglas",
    points: [
      "Mehrere Scheiben mit reißfester Folie (PVB/ionoplast)",
      "Splittersicherheit & Resttragfähigkeit – Einbruchhemmung möglich",
      "Pflichtbestandteil für RC-geprüfte Elemente in definierten Klassen",
    ],
  },
  {
    title: "Durchwurf-/Durchbruchhemmung (P-Klassen)",
    points: [
      "Klassifizierungen je Prüfung (z. B. P4A … P7B) gemäß Norm",
      "Auswahl nach Risikoanalyse (Erreichbarkeit, Lage, Nutzung)",
      "In Kombination mit Beschlag & Profil zur RC2/RC3-Gesamtkonfiguration",
    ],
  },
]

const notes = [
  "RC-Nachweise gelten immer für das Gesamtelement (Profil, Verglasung, Beschlag, Montage).",
  "Seitenteile/Nebeneingänge und bodentiefe Verglasungen erfordern oft VSG.",
  "Sicherheitsglas lässt sich mit Schallschutz- und Sonnenschutzfunktionen kombinieren.",
]

export default function SicherheitsglasPage() {
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
          <li className="text-zinc-700">Sicherheitsglas</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">Sicherheitsglas – ESG, VSG & P-Klassen</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Für Einbruchhemmung, Personenschutz und statische Anforderungen setzen wir SEMCO-Sicherheitsgläser ein.
          Je nach Risiko und RC-Ziel kombinieren wir ESG/VSG sowie P-klassifizierte Aufbauten – stets als
          geprüfte Gesamtlösung mit Profil, Beschlag und Montage.
        </p>
      </header>

      {/* Kacheln */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Glasarten & Funktionen</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {tiles.map((t) => (
            <div key={t.title} className="rounded-sm border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{t.title}</h3>
              <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
                {t.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Hinweise */}
      <section className="mb-12 rounded-sm border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Wichtige Hinweise</h2>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          {notes.map((n) => (
            <li key={n} className="rounded-sm bg-brand-light px-3 py-2">• {n}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-sm border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Sicherheitskonzept festlegen</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir stimmen Glas, Beschlag & Profil auf die gewünschte RC-Stufe ab – inklusive Nachweis und Montagekonzept.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/produkte/fenster/beschlag-sicherheit" className="inline-flex items-center rounded-sm border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">Beschlag &amp; Sicherheit</Link>
          <Link href="/produkte/fenster/verglasung/schallschutz" className="inline-flex items-center rounded-sm border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">Schallschutz</Link>
          <Link href="/kontakt" className="inline-flex items-center rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">Beratung anfragen</Link>
        </div>
      </section>
    </div>
  )
}
