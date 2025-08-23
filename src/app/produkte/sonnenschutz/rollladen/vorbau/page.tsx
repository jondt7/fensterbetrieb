// src/app/produkte/sonnenschutz/rollladen/vorbau/page.tsx
import Link from "next/link"

const usp = [
  { title: "Keine Wärmebrücke", text: "Außenliegende Montage vor dem Fenster – ideal für Neubau & Sanierung." },
  { title: "Designvielfalt", text: "Rund, eckig oder flächenbündig – Kastenformen passend zur Fassade." },
  { title: "Smart-Home & Solar", text: "Motor/Funk, App-Steuerung und auf Wunsch Solar-Antrieb – kabellos nachrüstbar." },
  { title: "Insektenschutz integrierbar", text: "Optionales, im Kasten geführtes Insektenschutzrollo." },
  { title: "Servicefreundlich", text: "Revision von außen – Wartung ohne Eingriff in den Innenausbau." },
]

type Model = {
  code: string
  name: string
  shape: string
  details: string[]
}

const models: Model[] = [
  {
    code: "RONDO",
    name: "RONDO",
    shape: "Runder Vorbaukasten",
    details: [
      "Weiche Rundform – harmonisch zu organischen Fassaden",
      "Außenrevision, ideal bei Sanierung",
      "Mit/ohne integrierten Insektenschutz",
    ],
  },
  {
    code: "PENTO",
    name: "PENTO",
    shape: "Schräge/Trapez-Optik",
    details: [
      "Markanter Look mit abgeschrägter Vorderkante",
      "Viele Sichtteil-Farben, Feinstruktur möglich",
      "Smart-Home-fähige Antriebe",
    ],
  },
  {
    code: "QUADRO",
    name: "QUADRO",
    shape: "Klar eckig",
    details: [
      "Kubische Architektur – moderne, gerade Linien",
      "Optional bündig in die Fassade integrierbar",
      "Auch mit Insektenschutz und Solar-Option",
    ],
  },
  {
    code: "INTEGO",
    name: "INTEGO",
    shape: "Putzträger/Einbaukasten",
    details: [
      "Teil- oder vollintegrierter Einbau – kaum sichtbarer Kasten",
      "Sehr dezente Ansicht, ideal im Neubau",
      "Revision von außen bleibt erhalten",
    ],
  },
]

export default function VorbauRollladenPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte/sonnenschutz" className="hover:underline">Sonnenschutz</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte/sonnenschutz/rollladen" className="hover:underline">Rollladen</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">Vorbaurollladen</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">ROMA Vorbaurollladen</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Vorbaurollladen werden vor das Fenster gesetzt. Das schützt vor Wärmebrücken,
          ermöglicht eine saubere Fassadengestaltung und ist perfekt für Neubau
          wie Sanierung. Wählen Sie zwischen runden, eckigen oder integrierten
          Kastenformen – inklusive Smart-Home- und Insektenschutz-Optionen.
        </p>
      </header>

      {/* USP */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Vorteile auf einen Blick</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {usp.map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modelle */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Kastenformen & Modellfamilien</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {models.map((m) => (
            <div key={m.code} className="rounded-2xl bg-brand-light p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{m.code}</div>
              <h3 className="mt-1 text-xl font-semibold text-brand">{m.name}</h3>
              <p className="text-sm text-zinc-700">{m.shape}</p>
              <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
                {m.details.map((d, i) => (<li key={i}>{d}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technik & Optionen */}
      <section className="mb-12 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-brand">Technik & Optionen</h2>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          <li className="rounded-lg bg-brand-light px-3 py-2">Motor-/Funkantrieb, App-Steuerung, Automatik mit Sonnen-/Windsensor</li>
          <li className="rounded-lg bg-brand-light px-3 py-2">Solar-Antrieb ohne Kabel – ideal zur Nachrüstung</li>
          <li className="rounded-lg bg-brand-light px-3 py-2">Integrierbarer Insektenschutz möglich</li>
          <li className="rounded-lg bg-brand-light px-3 py-2">Außenrevision für servicefreundliche Wartung</li>
          <li className="rounded-lg bg-brand-light px-3 py-2">Viele Farben/Strukturen, farblich abgestimmte Sichtteile</li>
          <li className="rounded-lg bg-brand-light px-3 py-2">Auf Wunsch erhöhte Einbruchhemmung/ Hochschiebehemmung</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Nächster Schritt: Aufsatz oder direkt Beratung</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Unsicher, welche Lösung passt? Wir zeigen Muster, Farben und Antriebe – vor Ort oder im Showroom.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/produkte/sonnenschutz/rollladen/aufsatz"
            className="inline-flex items-center rounded-xl border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
          >
            Aufsatzrollladen ansehen
          </Link>
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
