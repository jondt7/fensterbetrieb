// src/app/produkte/fenster/verglasung/page.tsx
import Link from "next/link"
import Image from "next/image"

type Block = {
  title: string
  points: string[]
  img: { src: string; alt: string }
}

const sections: Block[] = [
  {
    title: "Wärmeschutz (Isolierglas)",
    points: [
      "Mehrscheiben-Isolierglas mit Low-E-Beschichtung und Edelgasfüllung sorgt für sehr niedrige Wärmedurchgangswerte.",
      "2-fach und 3-fach Verglasungen – passend für Neubau und Sanierung.",
      "Optimierbar über Randverbund („Warme Kante“) zur Reduktion von Randzonen-Kältebrücken.",
    ],
    img: {
      src: "/produkte/fenster-verglasung-waermeschutz-isolierglas-detail.webp",
      alt: "Detailaufnahme Wärmeschutz-Isolierglas mit Low-E-Beschichtung und Edelgasfüllung",
    },
  },
  {
    title: "Schallschutz (SEMCO Phone)",
    points: [
      "Abgestufte Glasaufbauten für unterschiedliche Lärmsituationen (Straße, Bahn, Flughafen).",
      "Spürbare Reduktion von Außengeräuschen bei passendem Glasaufbau.",
      "Kombinierbar mit Wärmeschutz und Sonnenschutz in einer Scheibe.",
    ],
    img: {
      src: "/produkte/fenster-verglasung-schallschutz-semco-phone-detail.webp",
      alt: "Detailaufnahme SEMCO Phone Schallschutzglas mit differenzierten Glasdicken",
    },
  },
  {
    title: "Sicherheitsglas (ESG / VSG)",
    points: [
      "ESG (Einscheiben-Sicherheitsglas) mit erhöhter Schlag-/Stoßfestigkeit, bricht in kleine Krümel.",
      "VSG (Verbund-Sicherheitsglas) mit reißfester Folie: Splitterbindung & Einbruchhemmung.",
      "Einbruchhemmende Klassen (z. B. P-Klassifizierung) je nach geforderter RC-Stufe des Fensters.",
    ],
    img: {
      src: "/produkte/fenster-verglasung-sicherheitsglas-esg-vsg-detail.webp",
      alt: "Detailaufnahme Verbundsicherheitsglas mit PVB-Folie und ESG-Scheibe",
    },
  },
  {
    title: "Sonnenschutzglas (Klimaglas)",
    points: [
      "Spezielle Beschichtungen reduzieren die sommerliche Aufheizung (g-Wert), bei gleichzeitig hohem Tageslichteintrag.",
      "Ideal bei Südfassaden und großen Glasflächen; kombinierbar mit Wärmeschutz.",
    ],
    img: {
      src: "/produkte/fenster-verglasung-sonnenschutzglas-klimaglas-detail.webp",
      alt: "Detailaufnahme Sonnenschutzglas mit selektiver Klimaglas-Beschichtung",
    },
  },
  {
    title: "Warme Kante (Warm-Edge)",
    points: [
      "Thermisch verbesserte Abstandhalter minimieren Wärmebrücken im Randverbund (bessere Psi-Werte).",
      "Weniger Kondensatneigung am Glasrand und harmonische Randoptik.",
    ],
    img: {
      src: "/produkte/fenster-verglasung-warme-kante-warm-edge-detail.webp",
      alt: "Detailaufnahme Warme-Kante Abstandhalter im Randverbund",
    },
  },
  {
    title: "Privatsphäre & Design",
    points: [
      "Satiniertes Glas und Ornamentgläser für Sichtschutz bei hohem Lichtdurchlass.",
      "Farb-/Designgläser möglich – abgestimmt auf Architektur und Innenraum.",
    ],
    img: {
      src: "/produkte/fenster-verglasung-privatsphaere-design-detail.webp",
      alt: "Detailaufnahme satiniertes Ornamentglas für Privatsphäre",
    },
  },
]

const faq = [
  {
    q: "2-fach oder 3-fach Verglasung?",
    a: "Für hohe Energieeffizienz ist 3-fach Standard. In Bestandsbauten kann 2-fach sinnvoll sein – abhängig von Rahmen, Beschattung und Budget. Wir berechnen die optimale Kombination objektbezogen.",
  },
  {
    q: "Brauche ich Sicherheitsglas (VSG/ESG)?",
    a: "Bei bodentiefen Elementen, Seitenteilen an Türen, Überkopfverglasung oder für RC-geprüfte Elemente ist Sicherheitsglas meist vorgeschrieben. Für RC2/RC3 ist i. d. R. VSG nach entsprechender P-Klasse erforderlich.",
  },
  {
    q: "Wie erreiche ich guten Schallschutz?",
    a: "Schallschutz ergibt sich aus Glasaufbau, Dickendifferenzen, Scheibenzwischenraum und Folien. Wir wählen SEMCO Phone-Aufbauten passend zur Lärmsituation und kombinieren sie bei Bedarf mit Wärmeschutz/Sonnenschutz.",
  },
]

export default function VerglasungPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden> / </li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden> / </li>
          <li><Link href="/produkte/fenster" className="hover:underline">Fenster</Link></li>
          <li aria-hidden> / </li>
          <li className="text-zinc-700">Verglasung</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">
            Verglasung für Schüco Fenster – mit SEMCO
          </h1>
          <p className="mt-4 text-zinc-600">
            Mit SEMCO Funktionsgläsern kombinieren wir Energieeffizienz, Komfort und Sicherheit:
            vom hocheffizienten Isolierglas über Schallschutz bis zu Sicherheits- und Sonnenschutzgläsern.
            Alle Pakete konfigurieren wir objektbezogen – inklusive „Warmer Kante“ im Randverbund.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kontakt" className="inline-flex items-center bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
              Beratung anfragen
            </Link>
            <Link href="/produkte/fenster/beschlag-sicherheit" className="inline-flex items-center border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-light">
              Beschlag &amp; Sicherheit
            </Link>
          </div>
        </div>

        {/* Hero-Bild 4:3 (1600x1200) */}
        <figure className="relative hidden w-full border border-zinc-200 md:block rounded-[8px] overflow-hidden">
          <Image
            src="/produkte/fenster-verglasung-semcoglas-schueco-dueren-hero.webp"
            alt="SEMCO Verglasung für Schüco Fenster in Düren – Wärmeschutz, Schallschutz, Sicherheitsglas und Warme Kante"
            width={1600}
            height={1200}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </figure>
      </header>

      {/* Themenblöcke mit Bild rechts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-brand">Glaslösungen im Überblick</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {sections.map((s) => (
            <article
              key={s.title}
              className="flex flex-col justify-between border border-zinc-200 bg-white p-6 shadow-sm md:flex-row rounded-[8px]"
            >
              <div className="md:w-2/3">
                <h3 className="text-lg font-semibold text-brand">{s.title}</h3>
                <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
                  {s.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
              <figure className="relative mt-4 h-40 w-full md:mt-0 md:ml-6 md:w-1/3 rounded-[8px] overflow-hidden">
                <Image
                  src={s.img.src}
                  alt={s.img.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 300px, (min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </article>
          ))}
        </div>
      </section>

      {/* Praxis-Hinweise */}
      <section className="mb-12 border border-zinc-200 bg-white p-8 rounded-[8px]">
        <h2 className="text-xl font-semibold text-brand">Wichtige Planungsdetails</h2>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          <li className="bg-brand-light px-3 py-2">Uw-Werte hängen vom Zusammenspiel aus Rahmenprofil, Glas (Ug), Randverbund (Psi) und Elementgröße ab.</li>
          <li className="bg-brand-light px-3 py-2">Bei RC-Prüfungen gilt der Nachweis immer für das gesamte Element (Profil, Beschlag, Glas, Montage).</li>
          <li className="bg-brand-light px-3 py-2">Schallschutzwerte (Rw) ergeben sich aus spezifischen Glasaufbauten – wir wählen passende SEMCO Phone-Varianten.</li>
          <li className="bg-brand-light px-3 py-2">Sonnenschutz (g-Wert) und Tageslicht sollten im Raumkonzept gemeinsam betrachtet werden.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-12 border border-zinc-200 bg-white p-8 rounded-[8px]">
        <h2 className="text-2xl font-semibold text-brand">FAQ Verglasung</h2>
        <div className="mt-4 space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-zinc-200 p-4">
              <summary className="cursor-pointer font-semibold text-brand">{f.q}</summary>
              <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border border-brand bg-white p-8 shadow-sm rounded-[8px]">
        <h2 className="text-lg font-semibold text-brand">Ihr Glas-Paket konfigurieren</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir empfehlen die optimale Kombination aus Wärmeschutz, Schallschutz, Sicherheit und Sonnenschutz – inklusive „Warmer Kante“.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark rounded-[8px]"
          >
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
