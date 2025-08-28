// src/app/produkte/sonnenschutz/raffstoren/aufsatz/page.tsx
import Link from "next/link"

const usp = [
  { title: "Dezente Integration", text: "Der Kasten sitzt auf dem Fenster und verschwindet harmonisch in der Fassade." },
  { title: "Sehr gute Dämmwerte", text: "Aufsatzbauweise reduziert Wärmebrücken und verbessert den Energiehaushalt." },
  { title: "Einbau als Einheit", text: "Fenster + Raffstore werden gemeinsam montiert – sauber und effizient." },
  { title: "Smart-Home & Automatik", text: "Motor/Funk/App sowie Sonnen-/Windsensoren für komfortable Steuerung." },
  { title: "Insektenschutz optional", text: "Nach Bedarf integrierbar – elegant im System geführt." },
  { title: "Lamellen frei wählbar", text: "C-, Z- oder CDL-Lamelle – passend zu Nutzung und Design." },
]

type Model = { code: string; desc: string }

const modelle: Model[] = [
  { code: "PURO 2.XR-RS", desc: "Aufsatzraffstore mit außenliegender Revision – servicefreundlich und flache Ansicht." },
  { code: "PURO 2.XRK-RS", desc: "Variante für besondere Anschlussdetails (z. B. Klinker) – technisch wie XR-RS." },
  { code: "RA.2-RS", desc: "Bewährtes Aufsatzsystem für Raffstoren, robuste Konstruktion, gute Dämmwerte." },
  // Optional erweiterbar, sobald weitere Linien relevant sind
]

export default function AufsatzRaffstorenPage() {
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
          <li className="text-zinc-700">Aufsatzraffstoren</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">
          ROMA Aufsatzraffstoren – integriert, leise, effizient
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Aufsatzraffstoren werden direkt auf dem Fenster montiert und als Einheit eingesetzt.
          Das sorgt für eine dezente Ansicht, sehr gute Dämmwerte und eine schnelle Montage.
          In Kombination mit C-, Z- oder <strong>CDL</strong>-Lamellen steuern Sie das Tageslicht präzise.
        </p>
      </header>

      {/* Vorteile */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Ihre Vorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {usp.map((item) => (
            <div key={item.title} className="rounded-sm border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modellübersicht */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Systeme & Modelllinien</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {modelle.map((m) => (
            <div key={m.code} className="rounded-sm bg-brand-light p-6">
              <div className="text-sm font-semibold text-brand-accent">{m.code}</div>
              <p className="mt-2 text-sm text-zinc-700">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technik */}
      <section className="mb-14 rounded-sm border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Technische Merkmale</h2>
        <ul className="mt-4 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          <li className="rounded-sm bg-brand-light px-3 py-2">Revision außen – schnelle Wartung ohne Innenarbeiten</li>
          <li className="rounded-sm bg-brand-light px-3 py-2">Sehr gute Dämmung durch Aufsatzbauweise</li>
          <li className="rounded-sm bg-brand-light px-3 py-2">Kompatibel mit Insektenschutz</li>
          <li className="rounded-sm bg-brand-light px-3 py-2">Motor, Funk, App; Automatik mit Sonnen-/Windsensor</li>
          <li className="rounded-sm bg-brand-light px-3 py-2">CDL als Premium-Lamelle für hohe Blickdichtheit & Windstabilität</li>
          <li className="rounded-sm bg-brand-light px-3 py-2">Viele Farben & Strukturen der sichtbaren Teile</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-sm border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Vorbau vergleichen oder direkt beraten lassen</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir zeigen Unterschiede zwischen Aufsatz- und Vorbauraffstoren, Lamellen (CDL, C, Z) und Steuerungen –
          inklusive Mustern vor Ort.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/produkte/sonnenschutz/raffstoren/vorbau"
            className="inline-flex items-center rounded-sm border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
          >
            Vorbauraffstoren ansehen
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
