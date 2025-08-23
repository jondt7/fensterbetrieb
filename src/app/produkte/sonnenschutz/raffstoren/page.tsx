// src/app/produkte/sonnenschutz/raffstoren/page.tsx
import Link from "next/link"

const benefits = [
  { title: "Tageslicht lenken", text: "Lamellen stufenlos neigen – blendfrei arbeiten/wohnen bei angenehmem Tageslicht." },
  { title: "Sommerlicher Wärmeschutz", text: "Hitze bleibt draußen, Räume heizen weniger auf – spürbar bessere Raumtemperaturen." },
  { title: "Sicht- & Blendschutz", text: "Privatsphäre, ohne komplett zu verdunkeln. Optimal für Wohn- und Arbeitsräume." },
  { title: "Architektur & Design", text: "Klare Linien, viele Farben, integrierte Lösungen – modern und wertig an der Fassade." },
  { title: "Windstabilität (CDL)", text: "Comfort & Design Lamelle mit stabiler Führung und hoher Blickdichtheit." },
  { title: "Smart-Home", text: "Bedienung per Taster, Funk oder App. Automatik über Sonnen-/Windsensoren möglich." },
]

const lamellen = [
  { code: "C-Lamelle", desc: "Klassiker: flexibel, gute Lichtlenkung, leise Laufkultur." },
  { code: "Z-Lamelle", desc: "Mit Sicken/Kantungen für höhere Stabilität und bessere Abdunkelung." },
  { code: "CDL", desc: "Comfort & Design Lamelle: Premium – sehr gute Blickdichtheit, hohe Windstabilität, Design-Führung." },
]

export default function RaffstorenPage() {
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
          <li className="text-zinc-700">Raffstoren</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">
          ROMA Raffstoren – Tageslicht lenken, Räume kühlen, Sicht schützen
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Raffstoren ermöglichen präzise Lichtsteuerung und wirksamen sommerlichen Wärmeschutz.
          Mit verschiedene Lamellenformen (C, Z, <strong>CDL</strong>) und Einbauarten für Neubau und Sanierung
          schaffen ROMA Systeme ein hochwertiges, modernes Fassadenbild – mit Komfort auf Knopfdruck.
        </p>
      </header>

      {/* Vorteile */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Ihre Vorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{b.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lamellenarten */}
      <section className="mb-14 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-brand">Lamellenarten</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Wählen Sie die passende Lamellenform für Anwendung und Architektur. Die Premium-Lösung ist die
          <strong> CDL (Comfort & Design Lamelle)</strong> – besonders blickdicht und windstabil.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {lamellen.map((l) => (
            <div key={l.code} className="rounded-xl bg-brand-light p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{l.code}</div>
              <p className="mt-2 text-sm text-zinc-700">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Link
            href="/produkte/sonnenschutz/raffstoren/lamellen"
            className="inline-flex items-center rounded-lg border border-brand-dark px-4 py-2 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
          >
            Lamellen im Detail (optional)
          </Link>
        </div>
      </section>

      {/* Systeme: Vorbau / Aufsatz */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Systeme & Einbauarten</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-light p-6">
            <h3 className="text-xl font-semibold text-brand">Vorbauraffstoren</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Der Kasten sitzt vor dem Fenster. Flexible Montage im Neubau und Bestand,
              verschiedene Kastenformen (rund, eckig, integriert). Optional Sensorik & Smart-Home.
            </p>
            <Link
              href="/produkte/sonnenschutz/raffstoren/vorbau"
              className="mt-4 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Mehr zu Vorbauraffstoren
            </Link>
          </div>
          <div className="rounded-2xl bg-brand-light p-6">
            <h3 className="text-xl font-semibold text-brand">Aufsatzraffstoren</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Montage als Einheit mit dem Fenster – sehr dezente Ansicht, sehr gute Dämmwerte.
              Systeme z. B. PURO 2.XR-RS. Optional mit Insektenschutz, Smart-Home & Automatik.
            </p>
            <Link
              href="/produkte/sonnenschutz/raffstoren/aufsatz"
              className="mt-4 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Mehr zu Aufsatzraffstoren
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-14 rounded-2xl border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-brand">Häufige Fragen</h2>
        <div className="mt-4 space-y-4">
          <details className="group rounded-lg border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">CDL oder klassische Lamellen?</summary>
            <p className="mt-2 text-sm text-zinc-700">
              CDL bietet die beste Blickdichtheit und Windstabilität – ideal für Straßenlagen und große Öffnungen.
              C-/Z-Lamellen sind flexibler und preislich günstiger.
            </p>
          </details>
          <details className="group rounded-lg border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">Vorbau vs. Aufsatz?</summary>
            <p className="mt-2 text-sm text-zinc-700">
              Vorbau ist flexibel (Sanierung/Neubau) und vermeidet Wärmebrücken. Aufsatz sitzt auf dem Fenster,
              integriert sich sehr dezent in die Fassade und erzielt sehr gute Dämmwerte.
            </p>
          </details>
          <details className="group rounded-lg border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">Automatik & Smart-Home?</summary>
            <p className="mt-2 text-sm text-zinc-700">
              Steuerung per Taster/Funk/App. Mit Sonnen-/Windsensoren regelt das System je nach Wetter automatisch.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Beratung & Muster ansehen</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir zeigen Ihnen Lamellen (CDL, C, Z), Farben und Kastenlösungen live – und empfehlen das passende System
          für Ihr Gebäude.
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
