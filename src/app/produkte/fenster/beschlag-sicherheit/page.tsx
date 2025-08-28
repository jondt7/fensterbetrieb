// src/app/produkte/fenster/beschlag-sicherheit/page.tsx
import Link from "next/link"

type Card = { title: string; points: string[] }

const packages: Card[] = [
  {
    title: "Basisbeschlag (Grundsicherheit)",
    points: [
      "Moderne Dreh-Kipp-Funktion, angenehm leichtgängige Bedienung",
      "Mehrere Schließpunkte, Grundschutz gegen Aufhebeln",
      "Erweiterbar auf höhere Sicherheitsstufen",
    ],
  },
  {
    title: "Sicherheitsstufe 2 (≈ RC2 N)",
    points: [
      "Pilzkopf-Verriegelungen & Sicherheits-Schließteile umlaufend",
      "Abschließbarer Griff (Anbohrschutz empfohlen)",
      "Keine Pflicht für Sicherheitsverglasung – ideal, wenn kein Glasangriff zu erwarten ist",
    ],
  },
  {
    title: "RC2 (polizeiliche Empfehlung)",
    points: [
      "Erhöhte Anzahl Pilzkopfzapfen & Sicherheits-Schließteile",
      "Sicherheitsverglasung nach EN 356 (z. B. P4A/VSG) notwendig",
      "Sehr guter Schutz gegen einfache Hebelwerkzeuge (mind. ~3 Min. Prüfzeit)",
    ],
  },
  {
    title: "RC3 (für höhere Anforderungen)",
    points: [
      "Noch mehr Verriegelungspunkte & verstärkte Bauteile",
      "Zusätzliche Anforderungen an Beschlag & Verglasung",
      "Geprüfter Schutz auch gegen schwerere Werkzeuge (mind. ~5 Min. Prüfzeit)",
    ],
  },
]

const hingeSides: Card[] = [
  {
    title: "Sichtbarer Beschlag (TITAN PVC Bandseite)",
    points: [
      "Bewährte, robuste Bandseite mit hoher Tragfähigkeit",
      "Kosteneffizient & servicefreundlich",
      "Design-Abdeckkappen in passenden Oberflächen möglich",
    ],
  },
  {
    title: "Verdeckter Beschlag (TITAN axxent 24+)",
    points: [
      "Keine sichtbaren Bänder – klare Optik, leichter zu reinigen",
      "Hohe Traglast für große, schwere Flügel",
      "Wertige Anmutung, ideal für designorientierte Architektur",
    ],
  },
]

const addons: Card[] = [
  {
    title: "Spaltlüftung mit RC2-Schutz (TITAN vent secure)",
    points: [
      "Gekippte Lüftungsstellung bleibt einbruchhemmend (RC2-konzeptbasiert)",
      "Komfortlüften ohne Sicherheitskompromiss",
    ],
  },
  {
    title: "Kontaktüberwachung (AEROCONTROL)",
    points: [
      "Verdeckt integrierte Magnetkontakte",
      "Anbindung an Alarm-/Gebäudetechnik (z. B. Öffnungs- & Verriegelungsstatus)",
    ],
  },
  {
    title: "Oberflächen: TITAN Silver / E-Look",
    points: [
      "Hochwertiger Korrosionsschutz für anspruchsvolle Umgebungen",
      "Langlebige Optik passend zu Griffen & Beschlagteilen",
    ],
  },
]

export default function BeschlagSicherheitPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produkte/fenster" className="hover:underline">Fenster</Link></li>
          <li aria-hidden>/</li>
          <li className="text-zinc-700">Beschlag &amp; Sicherheit</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">Beschlag &amp; Sicherheit – SIEGENIA TITAN</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Wir verbauen SIEGENIA TITAN Beschläge für PVC-Fenster: leichtgängige Bedienung, hohe Stabilität und
          skalierbare Einbruchhemmung – vom Basisbeschlag bis zu geprüften Sicherheitsstufen.
        </p>
      </header>

      {/* Sicherheitspakete */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Sicherheitspakete</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {packages.map((p) => (
            <div key={p.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{p.title}</h3>
              <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
                {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          *Hinweis: RC-Klassen erfordern eine geprüfte Gesamtkonfiguration (Profil, Verglasung, Beschlag, Montage).
          Details klären wir objektbezogen.
        </p>
      </section>

      {/* Bandseiten */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Sichtbarer vs. verdeckter Beschlag</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {hingeSides.map((c) => (
            <div key={c.title} className="rounded-[8px] bg-brand-light p-6">
              <h3 className="text-lg font-semibold text-brand">{c.title}</h3>
              <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
                {c.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Komfort & Sicherheit – Optionen</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {addons.map((a) => (
            <div key={a.title} className="rounded-[8px] bg-brand-light p-5">
              <div className="text-sm font-semibold text-brand">{a.title}</div>
              <ul className="mt-2 list-inside list-disc text-sm text-zinc-700">
                {a.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[8px] border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Individuelles Sicherheitspaket konfigurieren</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir stimmen Beschlag, Griff, Glas und Montage exakt auf Ihr Objekt ab – inkl. Nachweis der RC-Stufe.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/produkte/fenster/verglasung" className="inline-flex items-center rounded-[8px] border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">
            Verglasung (Sicherheitsglas)
          </Link>
          <Link href="/kontakt" className="inline-flex items-center rounded-[8px] bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
