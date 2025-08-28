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
  const className =
    "group block overflow-hidden border border-border bg-background transition hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-[8px]"

  const media = (
    <div className="relative aspect-[16/9] w-full bg-muted">
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={imgAlt || title}
        fill
        className="object-cover transition group-hover:scale-105"
        sizes="(min-width: 1024px) 33vw, 90vw"
        priority={false}
      />
    </div>
  )

  const body = (
    <div className="p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      <div className="mt-3 inline-flex items-center text-sm font-medium text-primary">
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
  )

  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {media}
          {body}
        </a>
      ) : (
        <Link href={href} className={className}>
          {media}
          {body}
        </Link>
      )}
    </li>
  )
}

export default function HaustuerenOverviewPage() {
  return (
    <div className="container py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte" className="hover:text-primary">Produkte</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Haustüren</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">
            Inotherm Haustüren in {SITE.address.city} – Aluminium-Haustür vom Fachbetrieb
          </h1>
          <p className="mt-4 text-muted-foreground">
            Ihre <strong>Inotherm Haustür in Düren</strong> – individuell konfigurierbar, hervorragend gedämmt und mit starker
            Sicherheitsausstattung. Wir beraten zu Modell, Oberfläche, Griffen, Verglasung und Smart-Zutritt (InoSmart) –
            optimal abgestimmt auf Architektur und Anspruch im Raum {SITE.serviceArea}.
          </p>

          {/* NAP / Lokalsignal */}
          <address className="mt-3 not-italic text-sm text-muted-foreground">
            {SITE.brand}, {SITE.address.street}, {SITE.address.zip} {SITE.address.city} · Tel.{" "}
            <a className="text-primary hover:text-primary-light" href={`tel:${SITE.phone}`}>{SITE.phone}</a>
          </address>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-[8px]"
            >
              Angebot anfordern
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-light hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-[8px]"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>

        {/* Hero-Bild */}
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-muted rounded-[8px]">
          <Image
            src="/produkte/haustueren-hero.webp"
            alt="Inotherm Aluminium-Haustür – Referenzprojekt in Düren"
            fill
            priority
            sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 90vw"
            className="object-cover"
          />
        </div>
      </header>

      {/* 3 große Einstiegs-Kacheln: Konfigurator / Katalog / Modelllinie */}
      <section className="mb-12">
        <ul className="grid gap-6 md:grid-cols-3" role="list">
          <Tile
            title="Haustür-Konfigurator (Inotherm)"
            subtitle="Modell wählen, Farben/Glas/Griff & Smart-Zutritt – Ergebnis teilen."
            href="https://doordesigner.inotherm-tuer.de/configurator/"
            imgAlt="Inotherm Haustür-Konfigurator für Kunden in Düren"
            imgSrc="/produkte/haustueren-konfigurator.webp"
            external
          />
          <Tile
            title="Katalog ansehen"
            subtitle="Über 400 Türmodelle & Varianten. Inspiration & Technik kompakt."
            href="https://www.inotherm-tuer.de/haustuer-katalog/"
            imgAlt="Inotherm Haustüren Katalog – Modelle & Inspiration"
            imgSrc="/produkte/haustueren-katalog.webp"
            external
          />
          <Tile
            title="Modelllinie EXCLUSIV"
            subtitle="Premium-Design, starke Dämmung, hochwertige Konstruktion."
            href="https://www.inotherm-tuer.de/haustueren/exclusiv/"
            imgAlt="Inotherm EXCLUSIV Haustüren – Premium-Design"
            imgSrc="/produkte/haustueren-exclusiv.webp"
            external
          />
        </ul>
      </section>

      {/* Themen-Kacheln (interne Seiten) */}
      <section>
        <ul className="grid gap-6 md:grid-cols-2" role="list">
          <Tile
            title="InoSmart – Zugang per Finger, Code & App"
            subtitle="Komfort, Steuerung & Protokolle: das integrierte Smart-System."
            href="/produkte/haustueren/inosmart"
            imgAlt="InoSmart Zutrittssystem an Inotherm Haustür in Düren"
            imgSrc="/produkte/haustueren-inosmart.webp"
          />
          <Tile
            title="Griffe & Designvarianten"
            subtitle="Stangen-, Bügel-, flächenbündige & beleuchtete Griffe."
            href="/produkte/haustueren/griffe"
            imgAlt="Griffvarianten für Inotherm Haustüren – Stange, Bügel, bündig"
            imgSrc="/produkte/haustueren-griffe.webp"
          />
          <Tile
            title="Sicherheit & Schlösser"
            subtitle="Verriegelungen, Sicherheitsstufen, RC-Optionen."
            href="/produkte/haustueren/sicherheit-und-schliessung"
            imgAlt="Sicherheitsverriegelung und Schloss – Inotherm Haustür"
            imgSrc="/produkte/haustueren-sicherheit.webp"
          />
          <Tile
            title="Verglasung & Lichteinfall"
            subtitle="Wärmeschutz-, Sicherheits- und Designgläser."
            href="/produkte/haustueren/verglasung"
            imgAlt="Verglasungsvarianten für Inotherm Haustüren – satiniert & klar"
            imgSrc="/produkte/haustueren-verglasung.webp"
          />
        </ul>
      </section>

      {/* Info-Blöcke */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="border border-border bg-background p-6 rounded-[8px]">
          <h2 className="text-lg font-semibold">Bauarten & Elemente</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-muted-foreground">
            <li>Ein- und zweiflügelige Haustüren</li>
            <li>Seitenteile & Oberlichter kombinierbar</li>
            <li>Barrierearme Schwellenlösungen</li>
          </ul>
        </div>
        <div className="border border-border bg-background p-6 rounded-[8px]">
          <h2 className="text-lg font-semibold">Design & Oberflächen</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-muted-foreground">
            <li>RAL, Feinstruktur, Holzdekore</li>
            <li>Applikationen, Nutungen, LED-Details</li>
            <li>Verglasungen: klar, satiniert, Ornament</li>
          </ul>
        </div>
        <div className="border border-border bg-background p-6 rounded-[8px]">
          <h2 className="text-lg font-semibold">Dämmung & Sicherheit</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-muted-foreground">
            <li>Starke Türblätter & Dämmfüllungen</li>
            <li>Mehrpunktverriegelungen, RC-Optionen</li>
            <li>InoSmart mit Motorschloss & App</li>
          </ul>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section className="mt-12 border border-border bg-background p-8 rounded-[8px]">
        <h2 className="text-xl font-semibold">Ihre Inotherm Haustür in {SITE.address.city}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Wir beraten zu Modellwahl, Sicherheit, Smart-Funktionen und Montage – inkl. Aufmaß und Angebot für Düren & Umgebung.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark rounded-[8px]"
          >
            Termin anfragen
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-light hover:text-primary-foreground rounded-[8px]"
          >
            Telefon {SITE.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
