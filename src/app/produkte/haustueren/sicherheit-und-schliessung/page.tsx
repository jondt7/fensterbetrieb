// src/app/produkte/haustueren/sicherheit-und-schliessung/page.tsx
import Link from "next/link"

export default function SicherheitPage() {
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
          <li className="text-zinc-700">Sicherheit & Schlösser</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">
          Sicherheit & Schlösser
        </h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Inotherm-Haustüren bieten bereits in der Standardausstattung ein hohes
          Maß an Sicherheit. Mit optionalen Aufrüstungen bis zur
          <strong> Widerstandsklasse RC3</strong> erreichen Sie ein Maximum an
          Schutz vor Einbruch. Moderne Mehrfachverriegelungen, geprüfte
          Sicherheitszylinder und Bandseitensicherungen ergänzen das
          Sicherheitskonzept optimal.
        </p>
      </header>

      {/* Sicherheitsstufen */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Sicherheitsstufen</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-sm bg-brand-light p-6">
            <h3 className="text-lg font-semibold text-brand">RC2</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Hoher Basisschutz, geprüft gegen Gelegenheitstäter mit einfachem
              Werkzeug. Erfüllt die Anforderungen der Polizei-Empfehlungen für
              Einbruchschutz.
            </p>
            <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
              <li>Getestet nach DIN EN 1627</li>
              <li>Mehrfachverriegelung + Sicherheitszylinder</li>
              <li>Einbruchhemmende Verglasung (P4A)</li>
            </ul>
          </div>
          <div className="rounded-sm bg-brand-light p-6">
            <h3 className="text-lg font-semibold text-brand">RC3</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Erhöhte Sicherheit, auch gegen erfahrene Täter mit schwerem
              Werkzeug. Ideal für freistehende Häuser oder exponierte Lagen.
            </p>
            <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
              <li>Widerstand über 5 Minuten</li>
              <li>Zusätzliche Verriegelungspunkte</li>
              <li>Hochsicherheitsglas & massive Beschläge</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Verriegelungen */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Mehrfachverriegelung</h2>
        <p className="mt-3 max-w-3xl text-sm text-zinc-700">
          Jede Inotherm-Tür wird serienmäßig mit einer 5-fach-Verriegelung
          ausgestattet. Beim Zuziehen schließen massive Riegel und Bolzen in den
          Rahmen ein und sichern Türblatt und Bandseite zuverlässig.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          <li className="rounded-lg bg-brand-light px-3 py-2">• Automatische Verriegelung beim Zuziehen</li>
          <li className="rounded-lg bg-brand-light px-3 py-2">• Mehrere massive Schwenkriegel</li>
          <li className="rounded-lg bg-brand-light px-3 py-2">• Kombination mit InoSmart möglich</li>
          <li className="rounded-lg bg-brand-light px-3 py-2">• Wartungsarm & langlebig</li>
        </ul>
      </section>

      {/* Zylinder & Schließsysteme */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Zylinder & Schließsysteme</h2>
        <p className="mt-3 max-w-3xl text-sm text-zinc-700">
          Hochwertige Schließzylinder schützen gegen Aufbohren, Schlag- und
          Ziehversuche. Auf Wunsch kombinierbar mit Schließanlagen für
          Mehrfamilienhäuser oder Nebeneingänge.
        </p>
        <ul className="mt-4 list-disc list-inside text-sm text-zinc-700">
          <li>Profilzylinder mit Not- und Gefahrenfunktion</li>
          <li>Optional: Aufbohr- und Ziehschutz</li>
          <li>Kombinierbar mit InoSmart-Motorschloss</li>
        </ul>
      </section>

      {/* Bandseitensicherung */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Bandseitensicherung</h2>
        <p className="mt-3 max-w-3xl text-sm text-zinc-700">
          Auch die Bandseite der Tür ist durch massive Sicherungsbolzen
          geschützt. Selbst wenn die Türbänder manipuliert würden, bleibt die
          Tür fest im Rahmen verankert.
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-sm border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Mehr Sicherheit für Ihr Zuhause</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir beraten Sie zu den passenden Sicherheitsstufen, Verriegelungen und
          Smart-Home-Lösungen. Vereinbaren Sie jetzt einen unverbindlichen
          Termin.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Beratung anfragen
          </Link>
         <Link
            href="/produkte/haustueren/inosmart"
            className="inline-flex items-center rounded-sm border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
          >
            Mehr zu InoSmart
          </Link>
        </div>
      </section>
    </div>
  )
}
