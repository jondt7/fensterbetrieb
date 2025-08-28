// src/app/produkte/sonnenschutz/page.tsx
import Link from "next/link"
import Image from "next/image"

type Tile = {
  title: string
  href: string
  imgAlt: string
  imgSrc: string
  desc: string
}

const tiles: Tile[] = [
  {
    title: "Rollladen",
    href: "/produkte/sonnenschutz/rollladen",
    imgAlt: "ROMA Rollladen – Waermeschutz, Sicherheit und Verdunkelung",
    imgSrc: "/produkte/roma/roma-rollladen-fassade-wohnhaus.webp",
    desc: "Wärmeschutz, Sicherheit, Verdunkelung & Smart-Home.",
  },
  {
    title: "Raffstoren",
    href: "/produkte/sonnenschutz/raffstoren",
    imgAlt: "ROMA Raffstoren – Tageslichtlenkung und Sichtschutz an der Fassade",
    imgSrc: "/produkte/roma/roma-raffstoren-architektur-fassade.webp",
    desc: "Tageslichtlenkung, Sichtschutz & moderne Fassadenoptik.",
  },
  {
    title: "Textilscreens",
    href: "/produkte/sonnenschutz/textilscreens",
    imgAlt: "Badezimmer in Dueren mit ROMA Zip Screens – Sicht- und Sonnenschutz",
    imgSrc: "/produkte/roma/roma-zip-screens-dueren-badezimmer.webp",
    desc: "Effektiver Hitzeschutz mit transparenten Stoffen.",
  },
]

export default function SonnenschutzOverviewPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden> / </li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden> / </li>
          <li className="text-zinc-700">Sonnenschutz</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">
            Sonnenschutz von ROMA
          </h1>
          <p className="mt-4 text-zinc-600">
            Außenliegender Sonnenschutz steigert Komfort, Effizienz und Wert Ihrer
            Immobilie. Wählen Sie zwischen Rollladen, Raffstoren und Textilscreens –
            jeweils in vielfältigen Designs, mit smarter Steuerung und optimaler
            Integration in Neubau oder Sanierung.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 rounded-[8px]"
            >
              Beratung anfragen
            </Link>
          <Link
            href="/produkte/sonnenschutz/rollladen"
            className="inline-flex items-center border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground rounded-[8px]"
          >
            Zu Rollladen
          </Link>
          </div>
        </div>

        {/* 4:3 Hero-Container ohne abgerundete Ecken */}
        <div className="relative w-full overflow-hidden border border-zinc-200 bg-brand-light aspect-[4/3] rounded-[8px]">
          <Image
            src="/produkte/roma/roma-sonnenschutz-hero-hausfassade-4x3.webp"
            alt="ROMA Sonnenschutz an moderner Fassade in Dueren – Rollladen, Raffstoren und Textilscreens"
            fill
            className="object-cover"
            priority={false}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </header>

      {/* Drei große Bereiche */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {tiles.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group block overflow-hidden border border-zinc-200 bg-white shadow-sm transition hover:shadow-md rounded-[8px]"
            >
              <div className="relative aspect-[16/10] w-full bg-brand-light">
                <Image
                  src={t.imgSrc}
                  alt={t.imgAlt}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 90vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-brand">{t.title}</h2>
                <p className="mt-1 text-sm text-zinc-700">{t.desc}</p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-brand">
                  Mehr erfahren
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Kurzinfo/Teaser-Bereich darunter */}
      <section className="border border-zinc-200 bg-white p-8 rounded-[8px]">
        <h2 className="text-xl font-semibold text-brand">Warum außenliegender Sonnenschutz?</h2>
        <div className="mt-3 grid gap-4 text-sm text-zinc-700 md:grid-cols-3">
          <div className="bg-brand-light p-4 rounded-[8px]">
            <div className="font-semibold text-brand">Energieeffizienz</div>
            <p className="mt-1">
              Reduziert Heiz- und Kühlbedarf – messbar bessere Dämmwerte und Raumklima.
            </p>
          </div>
          <div className="bg-brand-light p-4 rounded-[8px]">
            <div className="font-semibold text-brand">Komfort & Steuerung</div>
            <p className="mt-1">
              Manuell, Funk, App oder Automatik per Sonnen-/Windsensor – jederzeit optimale Bedingungen.
            </p>
          </div>
          <div className="bg-brand-light p-4 rounded-[8px]">
            <div className="font-semibold text-brand">Design-Integration</div>
            <p className="mt-1">
              Kastenformen, Farben und Lamellenvarianten passend zur Architektur – dezent bis markant.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/produkte/sonnenschutz/rollladen"
            className="inline-flex items-center bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 rounded-[8px]"
          >
            Rollladen ansehen
          </Link>
          <Link
            href="/produkte/sonnenschutz/raffstoren"
            className="inline-flex items-center border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground rounded-[8px]"
          >
            Raffstoren ansehen
          </Link>
          <Link
            href="/produkte/sonnenschutz/textilscreens"
            className="inline-flex items-center border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground rounded-[8px]"
          >
            Textilscreens ansehen
          </Link>
        </div>
      </section>
    </div>
  )
}
