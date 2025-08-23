// src/app/produkte/fenster/page.tsx
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
    title: "Schüco Aluminium-Fenster",
    href: "/produkte/fenster/aluminium",
    imgAlt: "Schüco Aluminium-Fenster",
    imgSrc: "/placeholder.svg",
    desc: "Maximale Stabilität, schlanke Ansichten, hohe Langlebigkeit – ideal für anspruchsvolle Architektur.",
  },
  {
    title: "Schüco Kunststoff-Fenster",
    href: "/produkte/fenster/kunststoff",
    imgAlt: "Schüco Kunststoff-Fenster",
    imgSrc: "/placeholder.svg",
    desc: "Sehr gute Wärmedämmung, attraktives Preis-Leistungs-Verhältnis. Serien: Living 82 AS & Living 82 MD.",
  },
]

export default function FensterOverviewPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden> / </li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden> / </li>
          <li className="text-zinc-700">Fenster</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">Fenster von Schüco</h1>
          <p className="mt-4 text-zinc-600">
            Hochwertige Fenster aus Aluminium und Kunststoff – energieeffizient, sicher und optisch hochwertig.
            Wir beraten zu Design, Dämmung, Sicherheit und Verglasung, abgestimmt auf Ihr Bauvorhaben.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kontakt" className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
              Beratung anfragen
            </Link>
            <Link href="/produkte/fenster/aluminium" className="inline-flex items-center rounded-xl border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">
              Zu Aluminium
            </Link>
          </div>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-brand-light md:h-auto">
          <Image src="/placeholder.svg" alt="Moderne Fensteransicht" fill className="object-cover"/>
        </div>
      </header>

      {/* Kacheln */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {tiles.map((t) => (
            <Link key={t.title} href={t.href} className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[16/10] w-full bg-brand-light">
                <Image src={t.imgSrc} alt={t.imgAlt} fill className="object-cover transition group-hover:scale-105"/>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-brand">{t.title}</h2>
                <p className="mt-1 text-sm text-zinc-700">{t.desc}</p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-brand">
                  Mehr erfahren
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Teaser auf Detailthemen */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Worauf es ankommt</h2>
        <div className="mt-3 grid gap-4 text-sm text-zinc-700 md:grid-cols-3">
          <div className="rounded-lg bg-brand-light p-4">
            <div className="font-semibold text-brand">Wärmedämmung & Glas</div>
            <p className="mt-1">2- oder 3-fach-Verglasung, Warme Kante, g- und Ug-Werte passend zum Objekt.</p>
          </div>
          <div className="rounded-lg bg-brand-light p-4">
            <div className="font-semibold text-brand">Sicherheit & Beschlag</div>
            <p className="mt-1">RC-Optionen, Pilzkopfzapfen, abschließbare Griffe, Anbohrschutz – sinnvoll kombiniert.</p>
          </div>
          <div className="rounded-lg bg-brand-light p-4">
            <div className="font-semibold text-brand">Design & Komfort</div>
            <p className="mt-1">Schmale Ansichten, große Flügel, Oberflächen/Farben, Lüftung & Automation.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/produkte/fenster/verglasung" className="inline-flex items-center rounded-xl border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">
            Verglasung
          </Link>
          <Link href="/produkte/fenster/beschlag-sicherheit" className="inline-flex items-center rounded-xl border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">
            Beschlag & Sicherheit
          </Link>
        </div>
      </section>
    </div>
  )
}
