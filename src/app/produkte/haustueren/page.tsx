// src/app/produkte/haustueren/page.tsx
import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/data/site.config"

type TileProps = {
  title: string
  subtitle?: string
  href: string
  imgAlt?: string
  imgSrc?: string
  external?: boolean
}

function Tile({ title, subtitle, href, imgAlt, imgSrc, external }: TileProps) {
  const Wrapper = external ? "a" : Link
  const wrapperProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href }

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[16/9] w-full bg-brand-light">
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={imgAlt || title}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 90vw"
          priority={false}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-brand">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-zinc-700">{subtitle}</p>}
        <div className="mt-3 inline-flex items-center text-sm font-medium text-brand">
          {external ? "Öffnen" : "Mehr erfahren"}
          <svg
            className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </Wrapper>
  )
}

export default function HaustuerenOverviewPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">Haustüren</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">
            Inotherm Haustüren (Aluminium)
          </h1>
          <p className="mt-4 text-zinc-600">
            Erstklassige Aluminium-Haustüren – individuell konfigurierbar, ausgezeichnet gedämmt
            und mit starker Sicherheitsausstattung. Wählen Sie Modell, Oberfläche, Griff, Glas
            und Smart-Zutritt, passend zu Architektur und Anspruch.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Angebot anfordern
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Jetzt anrufen
            </a>
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            {SITE.address.city} · {SITE.serviceArea}
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-brand-light shadow-sm">
          <Image
            src="/placeholder.svg"
            alt="Inotherm Aluminium-Haustür"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      </header>

      {/* 3 große Einstiegs-Kacheln: Konfigurator / Katalog / Modelllinie */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Tile
            title="Haustür-Konfigurator"
            subtitle="Modell wählen, Farben/Glas/Griff & Smart-Zutritt – Ergebnis teilen."
            href="https://doordesigner.inotherm-tuer.de/configurator/"
            imgAlt="Inotherm Haustür-Konfigurator"
            external
          />
          <Tile
            title="Katalog ansehen"
            subtitle="Über 400 Türmodelle & Varianten. Inspiration & Technik kompakt."
            href="https://www.inotherm-tuer.de/haustuer-katalog/"
            imgAlt="Inspiration & Modelle"
            external
          />
          <Tile
            title="Modelllinie EXCLUSIV"
            subtitle="Premium-Design, starke Dämmung, hochwertige Konstruktion."
            href="https://www.inotherm-tuer.de/haustueren/exclusiv/"
            imgAlt="EXCLUSIV Modellwelt"
            external
          />
        </div>
      </section>

      {/* Themen-Kacheln (interne Seiten) */}
      <section className="grid gap-6 md:grid-cols-2">
        <Tile
          title="InoSmart – Zugang per Finger, Code & App"
          subtitle="Komfort, Steuerung & Protokolle: das integrierte Smart-System."
          href="/produkte/haustueren/inosmart"
          imgAlt="InoSmart System"
        />
        <Tile
          title="Griffe & Designvarianten"
          subtitle="Stangen-, Bügel-, flächenbündige & beleuchtete Griffe."
          href="/produkte/haustueren/griffe"
          imgAlt="Inotherm Griffe"
        />
        <Tile
          title="Sicherheit & Schlösser"
          subtitle="Verriegelungen, Sicherheitsstufen, RC-Optionen."
          href="/produkte/haustueren/sicherheit-und-schliessung"
          imgAlt="Sicherheitsausstattung"
        />
        <Tile
          title="Verglasung & Lichteinfall (optional)"
          subtitle="Wärmeschutz-, Sicherheits- und Designgläser."
          href="/produkte/haustueren/verglasung"
          imgAlt="Verglasung"
        />
      </section>

      {/* Info-Blöcke: Bauarten / Design / Technik */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-brand">Bauarten & Elemente</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
            <li>Ein- und zweiflügelige Türen</li>
            <li>Seitenteile & Oberlichter kombinierbar</li>
            <li>Barrierearme Schwellenlösungen</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-brand">Design & Oberflächen</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
            <li>RAL, Feinstruktur, Holzdekore</li>
            <li>Applikationen, Nutungen, LED-Details</li>
            <li>Verglasungen: klar, satiniert, Ornament</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-brand">Dämmung & Sicherheit</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
            <li>Starke Türblätter & Dämmfüllungen</li>
            <li>Mehrpunktverriegelungen, RC-Optionen</li>
            <li>InoSmart mit Motorschloss & App</li>
          </ul>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section className="mt-12 rounded-2xl border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-brand">Ihre neue Haustür – maßgeschneidert</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir beraten zu Modellwahl, Sicherheit, Smart-Funktionen und Montage – inkl. Aufmaß und Angebot.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Termin anfragen
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
          >
            Telefon {SITE.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
