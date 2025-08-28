// src/app/produkte/haustueren/inosmart/page.tsx
import Link from "next/link"
import Image from "next/image"

export default function InoSmartPage() {
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
          <li className="text-zinc-700">InoSmart</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">
            InoSmart – das intelligente Türsystem
          </h1>
          <p className="mt-4 text-zinc-600">
            Mit dem <strong>InoSmart-System</strong> von Inotherm öffnen Sie Ihre
            Haustür komfortabel per Fingerabdruck, Zahlencode oder Smartphone.
            Automatische Mehrfachverriegelung, App-Steuerung und Ereignisprotokolle
            sorgen für maximale Sicherheit und Komfort.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Beratung anfragen
            </Link>
            <a
              href="tel:+490000000000"
              className="inline-flex items-center rounded-sm border border-brand-dark bg-white px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
            >
              Telefon +49 000 0000000
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-zinc-200 bg-brand-light shadow-sm">
          <Image
            src="/placeholder.svg"
            alt="InoSmart Haustürsystem"
            fill
            className="object-cover"
          />
        </div>
      </header>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-brand">Hauptfunktionen</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-sm bg-brand-light p-6">
            <h3 className="text-lg font-semibold text-brand">Fingerabdruck</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Präziser 3D-Sensor, bis zu 100 Nutzer, manipulationssicher.
            </p>
          </div>
          <div className="rounded-sm bg-brand-light p-6">
            <h3 className="text-lg font-semibold text-brand">Zahlencode</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Individuelle PINs, zeitlich beschränkte Zugänge möglich.
            </p>
          </div>
          <div className="rounded-sm bg-brand-light p-6">
            <h3 className="text-lg font-semibold text-brand">Smartphone</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Steuerung via Bluetooth & App, inkl. Ereignisprotokoll.
            </p>
          </div>
          <div className="rounded-sm bg-brand-light p-6">
            <h3 className="text-lg font-semibold text-brand">Automatische Verriegelung</h3>
            <p className="mt-2 text-sm text-zinc-700">
              5-fach-Verriegelung aktiviert sich nach jedem Schließen automatisch.
            </p>
          </div>
          <div className="rounded-sm bg-brand-light p-6">
            <h3 className="text-lg font-semibold text-brand">App-Verwaltung</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Nutzerverwaltung, Zeitpläne, Berechtigungen – alles per App steuerbar.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-light p-6">
            <h3 className="text-lg font-semibold text-brand">Ereignisarchiv</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Alle Öffnungen werden dokumentiert – volle Transparenz und Kontrolle.
            </p>
          </div>
        </div>
      </section>

      {/* Technik */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-brand">Technische Details</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-700">
          <li>✔ 3D-Fingerabdrucksensor – sicher & schnell</li>
          <li>✔ Bluetooth-Verbindung mit InoSmart-App</li>
          <li>✔ Kapazität: bis 100 Nutzer</li>
          <li>✔ Zeitpläne & temporäre PINs möglich</li>
          <li>✔ Manipulationsgeschützt (Außeneinheit getrennt vom Innenmodul)</li>
          <li>✔ Optional LED-Beleuchtung der Bedienfelder</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-sm border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-brand">Jetzt InoSmart erleben</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Vereinbaren Sie einen Termin zur Live-Demo oder lassen Sie sich ein
          unverbindliches Angebot erstellen.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Termin anfragen
          </Link>
          <a
            href="tel:+490000000000"
            className="inline-flex items-center rounded-sm border border-brand-dark bg-white px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
          >
            Telefon +49 000 0000000
          </a>
        </div>
      </section>
    </div>
  )
}
