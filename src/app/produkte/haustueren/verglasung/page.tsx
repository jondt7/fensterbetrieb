// src/app/produkte/haustueren/verglasung/page.tsx
import Link from "next/link"

type Spec = { title: string; points: string[] }

const specs: Spec[] = [
  {
    title: "Wärmeschutzglas (Dreifach)",
    points: [
      "Sehr gute Dämmung, energieeffizienter Eingang",
      "Ug-Wert je nach Paket (z. B. 0,5–0,7 W/(m²K))",
      "Warme Kante (Thermo-Abstandhalter) zur Minimierung von Randzonen-Kondensat",
    ],
  },
  {
    title: "Sicherheitsglas",
    points: [
      "ESG (Einscheiben-Sicherheitsglas) – hohe Schlag-/Stoßfestigkeit",
      "VSG (Verbundsicherheitsglas) – reißfeste Folie, Splitterbindung, Einbruchhemmung",
      "Option: einbruchhemmende Klassen (z. B. P4A) passend zu RC2/RC3",
    ],
  },
  {
    title: "Schallschutzglas",
    points: [
      "Spürbare Reduktion von Außengeräuschen",
      "Rw je nach Glasaufbau (z. B. 36–44 dB) – ideal an befahrenen Straßen",
      "Zusammen mit Dichtungen hervorragender Komfort",
    ],
  },
  {
    title: "Sonnenschutz & Privatsphäre",
    points: [
      "Sonnenschutzbeschichtungen zur Reduktion von Aufheizung",
      "Satiniertes/Ornamentglas (Chinchilla, Master-Carré, etc.)",
      "Spiegel-/Reflex-Optiken (sichtschutzabhängig)",
    ],
  },
  {
    title: "Design & Lichtausschnitte",
    points: [
      "Schmale bis großflächige Ausschnitte, harmonisch zum Türblatt-Design",
      "Seitenteile & Oberlicht für mehr Tageslicht",
      "Optional LED-Akzente in Griffmulden/Seitenteilen",
    ],
  },
]

const faq = [
  {
    q: "Welche Verglasung ist für Sicherheitsanforderungen sinnvoll?",
    a: "Für erhöhte Sicherheit empfiehlt sich VSG und – je nach Risiko – einbruchhemmendes Glas (z. B. P4A) in Kombination mit RC2/RC3-Türkonstruktion.",
  },
  {
    q: "Worauf achten bei Wärmeschutz?",
    a: "Ein niedriger Ug-Wert (z. B. 0,5–0,7), 3-fach-Aufbau und Warme-Kante-Abstandhalter verbessern die Dämmung und reduzieren Randzonen-Kondensat.",
  },
  {
    q: "Kann man Schallschutz mit Sicherheit kombinieren?",
    a: "Ja. Mehrschalige Gläser lassen sich so konfigurieren, dass sowohl Schallschutz als auch Sicherheitsanforderungen erfüllt werden.",
  },
  {
    q: "Wie wird Privatsphäre gewahrt, ohne Licht zu verlieren?",
    a: "Satiniertes oder strukturiertes Ornamentglas streut Licht und schützt vor Einblicken. Auch Teilflächen-Designs sind möglich.",
  },
]

export default function VerglasungPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte/haustueren" className="hover:underline">Haustüren</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">Verglasung</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">Verglasung für Inotherm-Haustüren</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Die richtige Verglasung entscheidet über Energieeffizienz, Sicherheit, Schallschutz und Design.
          Wählen Sie aus leistungsfähigen Wärmeschutzpaketen, Sicherheits- und Schallschutzglas sowie
          vielfältigen Ornament- und Sonnenschutz-Optionen – abgestimmt auf Ihr Türdesign.
        </p>
      </header>

      {/* Specs */}
      <section className="space-y-6">
        {specs.map((s) => (
          <div key={s.title} className="rounded-[8px] border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-brand">{s.title}</h2>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
              {s.points.map((p, i) => (
                <li key={i} className="rounded-[8px] bg-brand-light px-3 py-2">• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Hinweise zu Seitenteilen/Oberlicht */}
      <section className="mt-12 rounded-[8px] border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-brand">Seitenteile & Oberlicht</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Seitenteile und Oberlicht bringen Tageslicht in den Eingangsbereich und betonen die Fassadenarchitektur.
          Je nach Sicherheitsbedarf werden VSG/Sicherheitsglas und stabile Profilaufbauten kombiniert – passend zu RC2/RC3.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-12 rounded-[8px] border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-brand">FAQ zur Verglasung</h2>
        <div className="mt-4 divide-y divide-zinc-200">
          {faq.map((f) => (
            <details key={f.q} className="group py-3">
              <summary className="cursor-pointer list-none text-sm font-semibold text-brand">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-[8px] border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Glas-Paket passend zu Ihrer Tür</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir empfehlen das ideale Glas-Paket (Wärme, Sicherheit, Schallschutz, Design) für Ihre Anforderungen.
          Vereinbaren Sie jetzt eine unverbindliche Beratung.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/kontakt" className="inline-flex items-center rounded-[8px] bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
            Beratung anfragen
          </Link>
          <Link href="/produkte/haustueren/sicherheit-und-schliessung" className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light">
            Sicherheit & Schlösser
          </Link>
        </div>
      </section>
    </div>
  )
}
