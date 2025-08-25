// src/app/produkte/page.tsx
import Link from "next/link"
import Image from "next/image"

type TileProps = {
  title: string
  subtitle?: string
  href: string
  imgAlt: string
  imgSrc: string
}

function ProductTile({ title, subtitle, href, imgAlt, imgSrc }: TileProps) {
  return (
    <li>
      <Link
        href={href}
        className="group block overflow-hidden border border-border bg-background transition hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative aspect-[16/9] w-full bg-muted">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className="object-cover transition group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 90vw"
            priority={false}
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-3 inline-flex items-center text-sm font-medium text-primary">
            Mehr erfahren
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
      </Link>
    </li>
  )
}

export default function ProductsPage() {
  return (
    <div className="container py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Produkte</li>
        </ol>
      </nav>

      {/* Intro */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold md:text-4xl">Produkte</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Fenster von <strong>Schüco</strong> &amp; Haustüren von <strong>Inotherm</strong> sowie Sonnenschutz von <strong>ROMA</strong> 
          – fachgerecht geplant und montiert.
        </p>
      </header>

      {/* Fenster */}
      <section className="mb-10">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold">
            <Link href="/produkte/fenster" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Fenster (Schüco)
            </Link>
          </h2>
          <Link href="/produkte/fenster" className="text-sm font-medium text-primary hover:text-primary-light">
            Übersicht
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2" role="list">
          <ProductTile
            title="Schüco Fenster – Aluminium"
            subtitle="Stabilität, schmale Ansichten, Top-Wärmedämmung"
            href="/produkte/fenster/aluminium"
            imgAlt="Schüco Aluminium-Fenster"
            imgSrc="/produkte/fenster-aluminium.webp"
          />
          <ProductTile
            title="Schüco Fenster – Kunststoff"
            subtitle="LivIng 82 – starke Dämmung & Preis-Leistung"
            href="/produkte/fenster/kunststoff"
            imgAlt="Schüco Kunststoff-Fenster (LivIng 82)"
            imgSrc="/produkte/fenster-kunststoff.webp"
          />
        </ul>
      </section>

      {/* Haustüren */}
      <section className="mb-10">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold">
            <Link href="/produkte/haustueren" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Haustüren (Inotherm)
            </Link>
          </h2>
          <Link href="/produkte/haustueren" className="text-sm font-medium text-primary hover:text-primary-light">
            Übersicht
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <ProductTile
            title="Inotherm Haustüren"
            subtitle="Aluminium-Design, Sicherheit &amp; InoSmart"
            href="/produkte/haustueren"
            imgAlt="Inotherm Aluminium-Haustür – Übersicht"
            imgSrc="/produkte/haustueren-hero.webp"
          />
        </ul>
      </section>

      {/* Sonnenschutz */}
      <section className="mb-10">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold">
            <Link href="/produkte/sonnenschutz" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Sonnenschutz (ROMA)
            </Link>
          </h2>
          <Link href="/produkte/sonnenschutz" className="text-sm font-medium text-primary hover:text-primary-light">
            Übersicht
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2" role="list">
          <ProductTile
            title="Rollladen"
            subtitle="Aufsatz- &amp; Vorbausysteme – Dämmung, Sichtschutz"
            href="/produkte/sonnenschutz/rollladen"
            imgAlt="ROMA Rollladen – Aufsatz- und Vorbausysteme"
            imgSrc="/produkte/sonnenschutz-roma-koeln.webp"
          />
          <ProductTile
            title="Raffstoren"
            subtitle="Tageslicht steuern, Hitze reduzieren"
            href="/produkte/sonnenschutz/raffstoren"
            imgAlt="ROMA Raffstoren – Außenjalousien"
            imgSrc="/produkte/sonnenschutz-roma-koeln.webp"
          />
        </ul>
      </section>
    </div>
  )
}
