// src/app/produkte/fenster/verglasung/waermeschutz/page.tsx
import Link from "next/link"

const benefits = [
  { t: "Low-E & Edelgasfüllung", d: "Wärmestrahlung wird reflektiert, Wärmeverluste sinken – behagliches Raumklima." },
  { t: "2-fach & 3-fach Optionen", d: "Konfiguration passend zu Gebäude, Budget und Förderzielen." },
  { t: "Warme Kante", d: "Thermisch verbesserter Randverbund senkt Psi-Werte und Kondensatrisiko am Glasrand." },
]

const tips = [
  "Uw ergibt sich aus Zusammenspiel von Rahmenprofil, Glas (Ug), Randverbund (Ψ) und Elementgröße.",
  "Sonnenschutz (g-Wert), Tageslicht und Überhitzungsschutz immer gemeinsam betrachten.",
  "Für Passivhaus-Ziele werden i. d. R. 3-fach-Pakete mit Warmer Kante gewählt.",
]

export default function WaermeschutzPage() {
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
          <li className="text-zinc-700">Wärmeschutz</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">Wärmeschutzglas – effizient heizen & kühlen</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Mit Funktions-Isolierglas (Low-E, Edelgasfüllung) reduzieren wir den Energieverbrauch und erhöhen den
          Wohnkomfort. In Kombination mit „Warmer Kante“ sinken Wärmebrücken am Randverbund – sichtbar weniger
          Kondensat, bessere Optik.
        </p>
      </header>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Ihre Vorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{b.t}</h3>
              <p className="mt-2 text-sm text-zinc-700">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vergleich */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-brand">Vergleich: 2-fach vs. 3-fach (mit Warmer Kante)</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-brand-light">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Kriterium</th>
                <th className="px-4 py-3 text-left font-semibold">2-fach</th>
                <th className="px-4 py-3 text-left font-semibold">3-fach</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Wärmedämmung</td>
                <td className="px-4 py-3">Gut</td>
                <td className="px-4 py-3 font-semibold text-brand">Sehr gut</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Gewicht</td>
                <td className="px-4 py-3">Geringer</td>
                <td className="px-4 py-3">Höher (stärkere Bänder/Beschläge beachten)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Budget</td>
                <td className="px-4 py-3">Günstiger</td>
                <td className="px-4 py-3">Höher – bessere Energiebilanz</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Warme Kante (Ψ)</td>
                <td className="px-4 py-3">Empfehlenswert</td>
                <td className="px-4 py-3">Sehr empfehlenswert</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Hinweise */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Planungshinweise</h2>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          {tips.map((t) => (
            <li key={t} className="rounded-[8px] bg-brand-light px-3 py-2">• {t}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-[8px] border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Ihr Wärmeschutzpaket konfigurieren</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir kombinieren Glas, „Warme Kante“ und Profil optimal für Ihr Gebäude – inkl. Nachweis.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/produkte/fenster/verglasung/schallschutz" className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">Schallschutz</Link>
          <Link href="/produkte/fenster/verglasung/sicherheitsglas" className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">Sicherheitsglas</Link>
          <Link href="/kontakt" className="inline-flex items-center rounded-[8px] bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">Beratung anfragen</Link>
        </div>
      </section>
    </div>
  )
}
