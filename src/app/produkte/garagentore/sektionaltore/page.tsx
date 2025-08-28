// src/app/produkte/garagentore/sektionaltore/page.tsx
import Link from "next/link"
import Image from "next/image"

type Benefit = { t: string; d: string }
type Model = { code: string; title: string; desc: string }

const benefits: Benefit[] = [
  { t: "Wärmedämmung & Stabilität", d: "Doppelwandige Stahllamellen, PU-Ausschäumung und umlaufende Dichtungen sorgen für effiziente Dämmung und langlebige Funktion." },
  { t: "Sicherheit & Komfort", d: "Sicherheitsfunktionen wie Seilriss-/Federbruchsicherung, Fingerklemm-Schutz und zuverlässige Verriegelung – komfortabel mit Antrieb." },
  { t: "Smart-Home ready", d: "Mit passendem Antrieb per Funk oder App steuerbar – inklusive Statusabfrage und Automatisierungen." },
  { t: "Designvielfalt", d: "Viele Oberflächen, Strukturen, Applikationen, Fenster und Farbtöne – passend zur Fassade und zu Türen/Fenstern." },
  { t: "Leiser Lauf", d: "Ruhige, präzise Führung und robuste Beschlagtechnik für angenehme Bedienung – täglich." },
]

const models: Model[] = [
  { code: "PRIME", title: "Premium", desc: "High-End-Sektionaltor mit besonders hoher Wärmeeffizienz und umfangreichen Sicherheitsfeatures. Optional App-Steuerung über integriertes WLAN am passenden Antrieb." },
  { code: "UniTherm", title: "Energieeffizient", desc: "Für energieeffizientes bis passives Bauen optimiert – Paneltechnik mit erhöhter Dämmung und sehr stabiler Ausführung." },
  { code: "UniPro", title: "Universell", desc: "Bewährtes Allround-Tor: hohe Grunddämmung, viele Designoptionen und ein durchdachtes Sicherheitskonzept." },
]

const faq = [
  {
    q: "Sektionaltor oder Schwingtor?",
    a: "Sektionaltore laufen senkrecht nach oben und benötigen wenig Platz vor der Garage. Schwingtore schwenken aus – das kann in Einfahrten stören. Sektionaltore dämmen in der Regel besser und laufen leiser.",
  },
  {
    q: "Welche Dämmung ist sinnvoll?",
    a: "Bei beheizten oder mit dem Haus verbundenen Garagen empfehlen wir höher gedämmte Paneele und eine ‚Warme‘ Anschlussausführung. Für freistehende Garagen reicht oft die Standard-Dämmung.",
  },
  {
    q: "Kann ich das Tor per App steuern?",
    a: "Ja. Mit passenden Wiśniowski-Antrieben lässt sich das Tor per Funk und App steuern; Statusabfragen und Automationen sind möglich.",
  },
]

export default function SektionaltorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte/garagentore" className="hover:underline">Garagentore</Link></li>
          <li aria-hidden>/</li>
          <li className="text-zinc-700">Sektionaltore</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">WIŚNIOWSKI Sektionaltore</h1>
          <p className="mt-4 text-zinc-600">
            Komfortabel, leise und energieeffizient: Sektionaltore von WIŚNIOWSKI verbinden sichere Technik
            mit starker Optik. Ob Premium, energieoptimiert oder universell – wir konfigurieren Ihr Tor
            passgenau zu Haus und Nutzung.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kontakt" className="inline-flex items-center rounded-[8px] bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
              Beratung anfragen
            </Link>
            <Link href="/produkte" className="inline-flex items-center rounded-[8px] border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground">
              Weitere Produkte
            </Link>
          </div>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-[8px] border border-zinc-200 bg-brand-light md:h-auto">
          <Image src="/placeholder.svg" alt="Sektionaltor – moderne Garagenansicht" fill className="object-cover" />
        </div>
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

      {/* Modelle */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Modelllinien im Überblick</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {models.map((m) => (
            <div key={m.code} className="rounded-[8px] bg-brand-light p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{m.code}</div>
              <h3 className="mt-1 text-xl font-semibold text-brand">{m.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technik & Optionen */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Technik & Optionen</h2>
        <ul className="mt-4 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Paneeltechnik mit PU-Ausschäumung (verschiedene Dicken je Modell)</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Umlaufende Dichtungen, Bodendichtung und sauberer Wand-/Sturzanschluss</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Seilriss-/Federbruchsicherung & Fingerklemm-Schutz</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Antriebe & Steuerungen inkl. App-Funktion (z. B. WIŚNIOWSKI Connected)</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Fenster, Lichtfelder, Seitentüren/Schlupftür, Lüftungsgitter</li>
          <li className="rounded-[8px] bg-brand-light px-3 py-2">Oberflächen/Strukturen & Farbsysteme (z. B. HomeInclusive Abstimmung)</li>
        </ul>
      </section>

      {/* Design-Teaser */}
      <section className="mb-12">
        <div className="rounded-[8px] bg-brand-light p-6">
          <h2 className="text-2xl font-semibold text-brand">Design passend zu Ihrem Haus</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Glatte oder geprägte Paneele, feine Strukturen, Akzent-Applikationen und abgestimmte Farben:
            Wir gestalten Ihr Tor harmonisch zur Fassade – auf Wunsch passend zu Fenstern, Türen und Zaun.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-brand">FAQ Sektionaltore</h2>
        <div className="mt-4 space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group rounded-[8px] border border-zinc-200 p-4">
              <summary className="cursor-pointer font-semibold text-brand">{f.q}</summary>
              <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[8px] border border-accent bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Jetzt anfragen</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir empfehlen die passende Modelllinie und konfigurieren Dämmung, Antrieb, Sicherheit und Design für Ihre Garage.
        </p>
        <div className="mt-5">
          <Link href="/kontakt" className="inline-flex items-center rounded-[8px] bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
