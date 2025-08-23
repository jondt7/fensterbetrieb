// src/app/produkte/sonnenschutz/raffstoren/lamellen/page.tsx
import Link from "next/link"

const lamellen = [
  {
    code: "C-Lamelle",
    features: [
      "Klassische Form, seit Jahrzehnten bewährt",
      "Sehr gute Lichtlenkung, ideal für Wohnräume & Büros",
      "Leise Laufkultur, flexible Neigung",
      "Preislich attraktivster Einstieg",
    ],
    best: "Allrounder für Wohn- und Arbeitsräume",
  },
  {
    code: "Z-Lamelle",
    features: [
      "Mit Sicken für höhere Stabilität",
      "Sehr gute Abdunkelung möglich",
      "Robust auch bei größeren Flächen",
      "Mehr Sichtschutz als C-Lamelle",
    ],
    best: "Für Schlafräume & große Fensterflächen",
  },
  {
    code: "CDL – Comfort & Design Lamelle",
    features: [
      "Premium-Lösung von ROMA",
      "Sehr hohe Blickdichtheit auch tagsüber",
      "Hohe Windstabilität durch stabile Führung",
      "Sehr modernes, lineares Design",
      "Optimale Kombination aus Komfort und Sicherheit",
    ],
    best: "Premium-Variante für höchste Ansprüche & Straßenlagen",
  },
]

export default function LamellenPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte/sonnenschutz" className="hover:underline">Sonnenschutz</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte/sonnenschutz/raffstoren" className="hover:underline">Raffstoren</Link></li>
          <li aria-hidden>/</li>
          <li className="text-zinc-700">Lamellen</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">
          Lamellen im Detail – C, Z oder CDL?
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Die Wahl der Lamelle entscheidet über Komfort, Lichtlenkung und
          Privatsphäre. ROMA bietet drei Varianten – jede mit spezifischen
          Vorteilen. Erleben Sie, wie sich die Unterschiede in Blickdichtheit,
          Windstabilität und Abdunkelung bemerkbar machen.
        </p>
      </header>

      {/* Vergleichstabelle */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Vergleich der Lamellenarten</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse rounded-lg border border-zinc-200 bg-white text-sm">
            <thead className="bg-brand-light text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Eigenschaft</th>
                <th className="px-4 py-3 font-semibold">C-Lamelle</th>
                <th className="px-4 py-3 font-semibold">Z-Lamelle</th>
                <th className="px-4 py-3 font-semibold">CDL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Blickdichtheit</td>
                <td className="px-4 py-3">Mittel</td>
                <td className="px-4 py-3">Gut</td>
                <td className="px-4 py-3 font-semibold text-brand">Sehr hoch</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Windstabilität</td>
                <td className="px-4 py-3">Mittel</td>
                <td className="px-4 py-3">Hoch</td>
                <td className="px-4 py-3 font-semibold text-brand">Sehr hoch</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Abdunkelung</td>
                <td className="px-4 py-3">Begrenzt</td>
                <td className="px-4 py-3">Sehr gut</td>
                <td className="px-4 py-3">Gut</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Lichtlenkung</td>
                <td className="px-4 py-3">Sehr gut</td>
                <td className="px-4 py-3">Gut</td>
                <td className="px-4 py-3">Sehr gut</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Preisniveau</td>
                <td className="px-4 py-3">€</td>
                <td className="px-4 py-3">€€</td>
                <td className="px-4 py-3">€€€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detail-Abschnitte */}
      <section className="mb-14">
        {lamellen.map((l) => (
          <div key={l.code} className="mb-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand">{l.code}</h3>
            <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
              {l.features.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
            <p className="mt-3 text-sm font-semibold text-brand">Ideal: {l.best}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Jetzt Muster vergleichen</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Erleben Sie C-, Z- und CDL-Lamellen live. Wir zeigen Ihnen die Unterschiede
          in Lichtlenkung, Blickdichtheit und Design.
        </p>
        <div className="mt-5">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
