// src/app/produkte/sonnenschutz/raffstoren/vorbau/page.tsx
import Link from "next/link"

const usp = [
  { title: "Flexibel einsetzbar", text: "Für Neubau & Sanierung geeignet – der Kasten sitzt vor dem Fenster." },
  { title: "Keine Wärmebrücke", text: "Außenliegende Montage verhindert Wärmeverluste am Baukörper." },
  { title: "Designvarianten", text: "Rund, eckig, abgeschrägt oder flächenbündig – passend zur Architektur." },
  { title: "Lamellen frei wählbar", text: "C-, Z- oder CDL-Lamellen – perfekt abgestimmt auf Licht, Sicht & Design." },
  { title: "Smart-Home ready", text: "Steuerung per Taster, Funk oder App – Automatik mit Sensorik möglich." },
  { title: "Optional Insektenschutz", text: "Auf Wunsch integrierbar im Kasten – ohne Platzverlust." },
]

const modelle = [
  {
    code: "RONDO.RS",
    desc: "Vorbauraffstore mit rundem Kasten – harmonisch für Fassaden mit weichen Formen.",
  },
  {
    code: "PENTO.RS",
    desc: "Vorbauraffstore mit abgeschrägter Vorderkante – markante Architektur.",
  },
  {
    code: "QUADRO.RS",
    desc: "Kubischer Kasten – moderne, klare Linien. Perfekt für zeitgenössische Architektur.",
  },
  {
    code: "INTEGO.RS",
    desc: "Teil- oder vollintegrierter Einbau in die Fassade – nahezu unsichtbar.",
  },
]

export default function VorbauRaffstorenPage() {
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
          <li className="text-zinc-700">Vorbauraffstoren</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">
          ROMA Vorbauraffstoren – flexibel, modern, effizient
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Vorbauraffstoren werden vor dem Fenster angebracht. Sie sind ideal für Neubau
          und Sanierung, vermeiden Wärmebrücken und erlauben eine flexible Fassadengestaltung
          mit unterschiedlichen Kastenformen. Kombinierbar mit C-, Z- oder CDL-Lamellen.
        </p>
      </header>

      {/* Vorteile */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Ihre Vorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {usp.map((item) => (
            <div
              key={item.title}
              className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modellübersicht */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Kastenformen & Modelle</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {modelle.map((m) => (
            <div key={m.code} className="rounded-[8px] bg-brand-light p-6">
              <div className="text-sm font-semibold text-brand-accent">{m.code}</div>
              <p className="mt-2 text-sm text-zinc-700">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technik */}
      <section className="mb-14 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Technische Merkmale</h2>
        <ul className="mt-4 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Außenrevision – servicefreundlich</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Kombinierbar mit Insektenschutz</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Motor-/Funkantriebe + Smart-Home möglich</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Viele Farben & Strukturen – auch Sonderfarben</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Wahlweise C-, Z- oder CDL-Lamellen</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Sehr gute Wärmedämmwerte durch außenliegende Montage</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-[8px] border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Jetzt das passende System wählen</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Ob runder, eckiger oder integrierter Kasten – wir zeigen Ihnen Muster,
          Lamellen und Farben live. Vereinbaren Sie eine persönliche Beratung.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/produkte/sonnenschutz/raffstoren/aufsatz"
            className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
          >
            Aufsatzraffstoren ansehen
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-[8px] bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
