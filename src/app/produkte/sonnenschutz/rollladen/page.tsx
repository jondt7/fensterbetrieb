// src/app/produkte/sonnenschutz/rollladen/page.tsx
import Link from "next/link"

const benefits = [
  {
    title: "Energieeffizienz & Wärmeschutz",
    text: "Rollladen reduzieren Wärmeverluste im Winter und halten Räume im Sommer angenehm kühl. Sie sparen Heiz- und Klimakosten.",
    icon: "❄️",
  },
  {
    title: "Sicherheit",
    text: "Abgeschlossene Rollläden erschweren Einbrüche erheblich. Kombinierbar mit Hochschiebehemmung und Sicherheitsprofilen.",
    icon: "🔒",
  },
  {
    title: "Schallschutz",
    text: "ROMA-Rollladen senken Außengeräusche deutlich – ideal an Straßen oder in dichter Bebauung.",
    icon: "🔇",
  },
  {
    title: "Verdunkelung & Sichtschutz",
    text: "Perfekte Abdunkelung für Schlafräume und vollständige Privatsphäre auf Knopfdruck.",
    icon: "🌙",
  },
  {
    title: "Design & Varianten",
    text: "Kastenformen (rund, eckig, integriert) und viele Farben machen den Rollladen zum Designelement Ihrer Fassade.",
    icon: "🎨",
  },
  {
    title: "Smart-Home & Solar",
    text: "Steuerung per Schalter, Funk, App oder Sonnensensor. Auch kabellos über Solar-Antrieb möglich – ideal für Sanierungen.",
    icon: "📱",
  },
]

export default function RollladenPage() {
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
          <li className="text-zinc-700">Rollladen</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">
          ROMA Rollladen – Komfort, Sicherheit & Design
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Rollladen von ROMA sind weit mehr als nur Licht- und Sichtschutz. Sie
          verbessern die Energieeffizienz, schützen vor Einbrüchen und schaffen
          ein angenehmes Raumklima. Ob im Neubau oder bei der Sanierung – ROMA
          bietet passende Lösungen als Vorbau- oder Aufsatzsystem.
        </p>
      </header>

      {/* Benefits */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Ihre Vorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-brand">{b.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Systeme */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Systeme im Überblick</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-light p-6">
            <h3 className="text-xl font-semibold text-brand">Vorbaurollladen</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Außenliegende Montage, keine Wärmebrücke, ideal für Neubau &
              Sanierung. Verschiedene Kastenformen (rund, eckig, flach,
              integriert) und zertifizierte Passivhaus-Lösungen. Optional mit
              integriertem Insektenschutz.
            </p>
            <Link
              href="/produkte/sonnenschutz/rollladen/vorbau"
              className="mt-4 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Mehr zu Vorbaurollladen
            </Link>
          </div>
          <div className="rounded-2xl bg-brand-light p-6">
            <h3 className="text-xl font-semibold text-brand">Aufsatzrollladen</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Der Rollladenkasten wird direkt auf das Fenster montiert und als
              Einheit eingebaut. Besonders energieeffizient, wartungsfreundlich
              und mit vielen Varianten (PURO, TERMO, KARO, RA.2). Ideal für Neubau
              und Renovierung.
            </p>
            <Link
              href="/produkte/sonnenschutz/rollladen/aufsatz"
              className="mt-4 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Mehr zu Aufsatzrollladen
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-14 rounded-2xl border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-brand">Häufige Fragen</h2>
        <div className="mt-4 space-y-4">
          <details className="group rounded-lg border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">
              Was ist der Unterschied zwischen Vorbau- und Aufsatzrollladen?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              Vorbaurollladen werden außen vor das Fenster gesetzt, sind sehr
              flexibel und vermeiden Wärmebrücken. Aufsatzrollladen sitzen direkt
              auf dem Fenster und werden als Einheit montiert – ideal für Neubau
              oder Sanierung mit Fenstertausch.
            </p>
          </details>
          <details className="group rounded-lg border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">
              Können Rollläden nachgerüstet werden?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              Ja. Vorbaurollladen sind besonders für Nachrüstung und Sanierung
              geeignet, da sie unabhängig vom Fenster eingesetzt werden können.
            </p>
          </details>
          <details className="group rounded-lg border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">
              Gibt es eine smarte Steuerung?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              Ja. ROMA bietet Motor- und Funkantriebe, die sich in Smart-Home-
              Systeme integrieren lassen. Auch Solar-Antriebe sind möglich.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Jetzt Beratung anfragen</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Lassen Sie sich zu Vorbau- oder Aufsatzrollladen beraten. Wir zeigen
          Ihnen Muster, Farben und Technik live vor Ort.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
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
