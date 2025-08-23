// src/app/produkte/haustueren/griffe/page.tsx
import Link from "next/link"

type Grip = {
  name: string
  desc: string
  features: string[]
}

const gripGroups: { title: string; items: Grip[] }[] = [
  {
    title: "Stangengriffe (Außen)",
    items: [
      {
        name: "Rund – Edelstahl",
        desc:
          "Zeitloser Klassiker mit sehr guter Haptik, in verschiedenen Längen.",
        features: [
          "Längen z. B. 600–1800 mm",
          "Befestigung verdeckt (innen verschraubt)",
          "Optional: Schwarz matt, Feinstruktur-Lack",
        ],
      },
      {
        name: "Quadrat – modern",
        desc:
          "Kantiges Design für eine klare, reduzierte Optik an modernen Türblättern.",
        features: [
          "Längen z. B. 800–1600 mm",
          "Schraubpunkte verdeckt",
          "Optional LED-Beleuchtung an der Griffmulde",
        ],
      },
      {
        name: "Flächenbündig / integriert",
        desc:
          "Im Türblatt vertieft – minimalistisch, bündig und besonders pflegeleicht.",
        features: [
          "Sehr geringe Anstoßtiefe",
          "Hervorragend kombinierbar mit Fingerprint (InoSmart)",
          "Perfekt für klare Fassadenlinien",
        ],
      },
    ],
  },
  {
    title: "Bügelgriffe & Innendrücker (Innen)",
    items: [
      {
        name: "Bügelgriff – ergonomisch",
        desc:
          "Innen als Bügelgriff für sichere Handhabung; außen Stangengriff möglich.",
        features: [
          "Angenehme Griffweite",
          "Rutschfeste Haptik",
          "Optional Oberfläche Schwarz matt",
        ],
      },
      {
        name: "Innendrücker – klassisch",
        desc:
          "Als Türklinke innen; kombinierbar mit beliebigen Außen-Griffen.",
        features: [
          "Schlanke Rosette",
          "Gute Kraftübertragung",
          "Viele Oberflächen (Edelstahl, Schwarz, Bronze)",
        ],
      },
    ],
  },
  {
    title: "Design & Ausstattung",
    items: [
      {
        name: "LED-Beleuchtung",
        desc:
          "Sicheres Auffinden bei Dunkelheit, dezente Lichtkante am Griff-/Muldenbereich.",
        features: ["Warmweiß / neutral", "Niedervolt", "Energiesparend"],
      },
      {
        name: "Materialien & Finishes",
        desc:
          "Edelstahl, Aluminium lackiert (z. B. Schwarz matt), Holzapplikationen, Bronze.",
        features: [
          "Feinstruktur-Beschichtungen",
          "UV- und wetterbeständig",
          "Harmoniert mit Türblatt-Designs",
        ],
      },
      {
        name: "Griff-Positionierung",
        desc:
          "Senkrecht (Standard) oder waagerecht; auf Wunsch symmetrisch zum Lichtausschnitt.",
        features: [
          "Architektur- und Designbezug",
          "Auf Maß abstimmbar",
          "Stimmige Linienführung",
        ],
      },
    ],
  },
]

const safetyNotes = [
  "Durchgehende, innenliegende Verschraubung gegen Demontage von außen",
  "Massive Träger für Zug-/Druckbelastungen",
  "Sicherheitsrosetten möglich",
  "Kombinierbar mit Mehrfachverriegelung & InoSmart-Fingerprint",
]

export default function GriffePage() {
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
            <Link href="/produkte/haustueren" className="hover:underline">Haustüren</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">Griffe & Designvarianten</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">
          Griffe & Designvarianten
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Griffdesign prägt die Wirkung der Haustür – von klassisch bis ultramodern.
          Außen Griffstange (rund/quadrat/integriert), innen wahlweise Bügelgriff
          oder Innendrücker. Auf Wunsch LED-Beleuchtung, vielfältige Finishes und
          Kombination mit <strong>InoSmart</strong> (Fingerprint/Code/Smartphone).
        </p>
      </header>

      {/* Gruppen */}
      <section className="space-y-8">
        {gripGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-brand">{group.title}</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {group.items.map((g) => (
                <div key={g.name} className="rounded-xl bg-brand-light p-5">
                  <h3 className="text-lg font-semibold text-brand">{g.name}</h3>
                  <p className="mt-2 text-sm text-zinc-700">{g.desc}</p>
                  <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
                    {g.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Sicherheit & Montagehinweise */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-brand">Sicherheit & Montage</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Griffe werden hochbelastbar am Türblatt befestigt. In Kombination mit
          Sicherheitsrosetten, Mehrfachverriegelungen und InoSmart erreichen Sie
          ein sehr hohes Sicherheitsniveau.
        </p>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          {safetyNotes.map((n, i) => (
            <li key={i} className="rounded-lg bg-brand-light px-3 py-2">• {n}</li>
          ))}
        </ul>
      </section>

      {/* Vergleich / Auswahlhilfe */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-brand">Auswahlhilfe</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 p-4">
            <div className="text-sm font-semibold text-brand">Minimalistisch</div>
            <p className="mt-2 text-sm text-zinc-700">
              Flächenbündig/integr. Griff + Innendrücker. Passt zu glatten Türblättern.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <div className="text-sm font-semibold text-brand">Klassisch</div>
            <p className="mt-2 text-sm text-zinc-700">
              Runder Stangengriff (außen) + Innendrücker (innen). Zeitlos & ergonomisch.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <div className="text-sm font-semibold text-brand">Statement</div>
            <p className="mt-2 text-sm text-zinc-700">
              Quadratische Griffstange, Schwarz matt, optional LED – starke Akzente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Griff-Design live erleben</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir zeigen Varianten, Oberflächen und Beleuchtung an Mustern und beraten
          zur Kombination mit InoSmart & Sicherheitsausstattung.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Termin anfragen
          </Link>
          <Link
            href="/produkte/haustueren/inosmart"
            className="inline-flex items-center rounded-xl border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
          >
            Mehr zu InoSmart
          </Link>
        </div>
      </section>
    </div>
  )
}
