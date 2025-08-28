// src/app/produkte/sonnenschutz/rollladen/aufsatz/page.tsx
import Link from "next/link"
import Image from "next/image"

const benefits = [
  { title: "Hervorragende Dämmung", text: "Minimiert Wärmebrücken durch direkte Fensterintegration – effizient im Sommer & Winter." },
  { title: "Schallschutz", text: "Geschlossener Kasten dämpft Lärm deutlich – ideal an stark befahrenen Lagen." },
  { title: "Unauffälliges Design", text: "Kasten verschwindet elegant in der Fassade – puristisch, harmonisch, modern." },
  { title: "Smart & flexibel", text: "Motor, Funk, App oder Solar – Steuerung nach Bedarf, auch zur Nachrüstung." },
  { title: "Nachhaltige Materialien", text: "Langlebige Systeme mit sehr guten Dämmwerten." },
  { title: "Insektenschutz optional", text: "Werkseitig integrierbar oder nachrüstbar – formschön eingebunden." },
]

const models = [
  { code: "PURO 2", desc: "Innenliegende Revision, exzellente Dämmung, komplett integriert." },
  { code: "PURO 2.XR", desc: "Außenliegende Revision – sehr servicefreundlich, flacher Kasten." },
  { code: "PURO 2.K", desc: "Variante für Klinkerfassaden – optisch passend + energieeffizient." },
  { code: "RA.2", desc: "Bewährtes Kunststoff-Aufsatzsystem mit stabiler Konstruktion." },
  { code: "KARO", desc: "Aufsatzkasten mit Hohlkammern, optional Insektenschutz – ideal bei Fenstertausch." },
]

export default function AufsatzRollladenPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden> / </li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden> / </li>
          <li><Link href="/produkte/sonnenschutz" className="hover:underline">Sonnenschutz</Link></li>
          <li aria-hidden> / </li>
          <li><Link href="/produkte/sonnenschutz/rollladen" className="hover:underline">Rollladen</Link></li>
          <li aria-hidden> / </li>
          <li className="text-zinc-700">Aufsatzrollladen</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-12 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">
            ROMA Aufsatzrollladen – integriert & effizient
          </h1>
          <p className="mt-4 text-zinc-600">
            Der Rollladenkasten sitzt direkt auf dem Fenster – für beste Wärmedämmung,
            dezentes Design und eine saubere Montage. Ideal im Neubau und bei Sanierung
            mit Fenstertausch.
          </p>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-[8px] border border-zinc-200 bg-brand-light">
          <Image
            src="/placeholder.svg"        // <- hier später echtes Bild eintragen, z. B. /images/aufsatz-querschnitt.jpg
            alt="Aufsatzrollladen – Querschnitt"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      </header>

      {/* Benefits */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Vorteile auf einen Blick</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{b.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modelle */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Modellübersicht</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {models.map((m) => (
            <div key={m.code} className="rounded-[8px] bg-brand-light p-6">
              <div className="text-sm font-semibold text-brand-accent">{m.code}</div>
              <p className="mt-1 text-sm text-zinc-700">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[8px] border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Nächstes: Modelle vergleichen oder Beratung</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir helfen bei der Systemwahl (Revision innen/außen, Dämmung, Insektenschutz, Smart-Home, Solar).
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/produkte/sonnenschutz/rollladen/vorbau" className="inline-flex items-center rounded-[8px] border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground">
            Vorbaurollladen ansehen
          </Link>
          <Link href="/kontakt" className="inline-flex items-center rounded-[8px] bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
