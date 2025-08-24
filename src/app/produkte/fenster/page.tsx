// src/app/produkte/fenster/page.tsx
import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/data/site.config"

type Tile = {
  title: string
  href: string
  imgAlt: string
  imgSrc: string
  desc: string
}

const tiles: Tile[] = [
  {
    title: "Schüco Aluminium-Fenster",
    href: "/produkte/fenster/aluminium",
    imgAlt: "Schüco Aluminium-Fenster mit schlanken Profilansichten",
    imgSrc: "/produkte/fenster-aluminium-1.webp",
    desc: "Maximale Stabilität, schlanke Ansichten, hohe Langlebigkeit – ideal für anspruchsvolle Architektur.",
  },
  {
    title: "Schüco Kunststoff-Fenster",
    href: "/produkte/fenster/kunststoff",
    imgAlt: "Schüco Kunststoff-Fenster (LivIng 82 Plattform)",
    imgSrc: "/produkte/fenster-kunststoff.webp",
    desc: "Sehr gute Wärmedämmung, attraktives Preis-Leistungs-Verhältnis. Serien: LivIng 82 AS & LivIng 82 MD.",
  },
]

export const revalidate = 3600

export default function FensterOverviewPage() {
  return (
    <div className="container py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte" className="hover:text-primary">Produkte</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Fenster</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">Fenster von Schüco</h1>
          <p className="mt-4 text-muted-foreground">
            Hochwertige Fenster aus Aluminium und Kunststoff – energieeffizient, sicher und optisch hochwertig.
            Wir beraten zu Design, Dämmung, Sicherheit und Verglasung, abgestimmt auf Ihr Bauvorhaben.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Beratung anfragen
            </Link>
            <Link
              href="/produkte/fenster/aluminium"
              className="inline-flex items-center border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary-light hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Zu Aluminium
            </Link>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {SITE.address.city} · {SITE.serviceArea}
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-muted">
          <Image
            src="/produkte/fenster-aluminium.webp"
            alt="Schüco Aluminium-Fenster – Referenzansicht"
            fill
            className="object-cover"
            priority={false}
            sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 90vw"
          />
        </div>
      </header>

      {/* Kacheln */}
      <section className="mb-12">
        <ul className="grid gap-6 md:grid-cols-2" role="list">
          {tiles.map((t) => (
            <li key={t.title}>
              <Link
                href={t.href}
                className="group block overflow-hidden border border-border bg-background transition hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative aspect-[16/9] w-full bg-muted">
                  <Image
                    src={t.imgSrc}
                    alt={t.imgAlt}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 90vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold">{t.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                    Mehr erfahren
                    <svg className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Teaser auf Detailthemen */}
      <section className="border border-border bg-background p-8">
        <h2 className="text-xl font-semibold">Worauf es ankommt</h2>
        <div className="mt-3 grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
          <div className="border border-border bg-muted p-4">
            <div className="font-semibold text-foreground">Wärmedämmung &amp; Glas</div>
            <p className="mt-1">2- oder 3-fach-Verglasung, Warme Kante, g- und Ug-Werte passend zum Objekt.</p>
          </div>
          <div className="border border-border bg-muted p-4">
            <div className="font-semibold text-foreground">Sicherheit &amp; Beschlag</div>
            <p className="mt-1">RC-Optionen, Pilzkopfzapfen, abschließbare Griffe, Anbohrschutz – sinnvoll kombiniert.</p>
          </div>
          <div className="border border-border bg-muted p-4">
            <div className="font-semibold text-foreground">Design &amp; Komfort</div>
            <p className="mt-1">Schmale Ansichten, große Flügel, Oberflächen/Farben, Lüftung &amp; Automation.</p>
          </div>
        </div>

        {/* Deep-Links */}
        <div className="mt-6 text-sm">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-primary">
            <li><Link href="/produkte/fenster/kunststoff/living-82-as" className="hover:text-primary-light">LivIng 82 AS</Link></li>
            <li><Link href="/produkte/fenster/kunststoff/living-82-md" className="hover:text-primary-light">LivIng 82 MD</Link></li>
            <li><Link href="/produkte/fenster/beschlag-sicherheit" className="hover:text-primary-light">Beschlag &amp; Sicherheit</Link></li>
            <li><Link href="/produkte/fenster/verglasung" className="hover:text-primary-light">Verglasung – Übersicht</Link></li>
          </ul>
        </div>
      </section>
    </div>
  )
}
