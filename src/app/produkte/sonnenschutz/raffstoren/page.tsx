// src/app/produkte/sonnenschutz/raffstoren/page.tsx
import Link from "next/link"
import Image from "next/image"

type Benefit = { title: string; text: string }
type Lamelle = { code: string; desc: string; imgSrc: string; imgAlt: string }

const benefits: Benefit[] = [
  { title: "Tageslicht lenken", text: "Lamellen stufenlos neigen – blendfrei arbeiten/wohnen bei angenehmem Tageslicht." },
  { title: "Sommerlicher Wärmeschutz", text: "Hitze bleibt draußen, Räume heizen weniger auf – spürbar bessere Raumtemperaturen." },
  { title: "Sicht- & Blendschutz", text: "Privatsphäre, ohne komplett zu verdunkeln. Optimal für Wohn- und Arbeitsräume." },
  { title: "Architektur & Design", text: "Klare Linien, viele Farben, integrierte Lösungen – modern und wertig an der Fassade." },
  { title: "Windstabilität (CDL)", text: "Comfort & Design Lamelle mit stabiler Führung und hoher Blickdichtheit." },
  { title: "Smart-Home", text: "Bedienung per Taster, Funk oder App. Automatik über Sonnen-/Windsensoren möglich." },
]

const lamellen: Lamelle[] = [
  {
    code: "GL-Lamelle",
    desc: "Gebördelte Lamelle (GL): robust, stabil und vielseitig – gute Lichtlenkung im Alltag.",
    imgSrc: "/produkte/roma/roma-lamelle-gl-detail-1x1.webp",
    imgAlt: "ROMA Raffstoren GL-Lamelle – Detailansicht quadratisch",
  },
  {
    code: "Z-Lamelle",
    desc: "Mit Sicken/Kantungen für höhere Stabilität und bessere Abdunkelung.",
    imgSrc: "/produkte/roma/roma-lamelle-z-detail-1x1.webp",
    imgAlt: "ROMA Raffstoren Z-Lamelle – Detailansicht quadratisch",
  },
  {
    code: "CDL",
    desc: "Comfort & Design Lamelle: sehr blickdicht, windstabil, designorientierte Führung.",
    imgSrc: "/produkte/roma/roma-lamelle-cdl-detail-1x1.webp",
    imgAlt: "ROMA Raffstoren CDL – Comfort & Design Lamelle, Detailansicht quadratisch",
  },
]

// 9 Punkte: Icon-Grid (Variante 1)
const extended = [
  {
    title: "Tageslichtlenkung & Dosierung",
    text: "Natürliches Licht präzise steuern: blendfrei, effizient und stimmungsvoll – ideal für Wohnen, Arbeit und große Glasflächen.",
    href: "/produkte/sonnenschutz/raffstoren/lichtsteuerung",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 6.95-1.41-1.41M7.46 7.46 6.05 6.05m10.49 0-1.41 1.41M7.46 16.54 6.05 17.95" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    cta: "Mehr über Lichtsteuerung",
  },
  {
    title: "Design & Fassadengestaltung",
    text: "Filigrane Lamellen betonen die Architektur – puristisch oder farbig. CDL verbindet klare Linien mit modernem Sicht- und Sonnenschutz.",
    href: "/produkte/sonnenschutz/raffstoren/design",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M4 5h16v6H4zM4 13h10v6H4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    cta: "Designideen entdecken",
  },
  {
    title: "Blendschutz",
    text: "Variable Lamellenstellungen vermeiden störende Blendung und erhalten Helligkeit – ideal für Bildschirmarbeitsplätze, Schulen und Wohnen.",
    href: "/produkte/sonnenschutz/raffstoren/blendschutz",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    cta: "Mehr über Blendschutz",
  },
  {
    title: "Abdunkelung nach Bedarf",
    text: "Für Schlaf- oder Konferenzräume: je nach Lamelle und Einbau dichte Schließgrade – besonders mit CDL für maximale Lichtkontrolle.",
    href: "/produkte/sonnenschutz/raffstoren/abdunkelung",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-9-9 6 6 0 0 0 9 9z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    cta: "Perfekte Abdunkelung",
  },
  {
    title: "Wärmeschutz & Energie",
    text: "Bis zu 75 % der Sonnenwärme bleiben vor der Scheibe – kühle Räume ohne Klimaanlage, im Winter geringere Wärmeverluste.",
    href: "/produkte/sonnenschutz/raffstoren/energie",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2v6l4 2-4 2v6l-4-8 4-8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    cta: "Energie clever sparen",
  },
  {
    title: "Sichtschutz mit Tageslicht",
    text: "Licht behalten, Blicke aussperren: ideal für Stadtlagen, bodentiefe Fenster und moderne Grundrisse.",
    href: "/produkte/sonnenschutz/raffstoren/sichtschutz",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    cta: "Sichtschutz-Lösungen",
  },
  {
    title: "Insektenschutz integriert",
    text: "Optionales Insektenschutzgitter für frische Luft ohne Mücken/Fliegen – unauffällig integriert, komfortabel bedienbar.",
    href: "/produkte/sonnenschutz/raffstoren/insektenschutz",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M4 4h16v16H4zM8 4v16M16 4v16M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    cta: "Insektenschutz entdecken",
  },
  {
    title: "Komfort & Bedienung",
    text: "Manuell, Funk, App oder Automatik mit Sensoren – Smart-Home-Integration macht die Steuerung besonders bequem.",
    href: "/produkte/sonnenschutz/raffstoren/smart-home",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M3 11l9-7 9 7v9H3zM9 20v-6h6v6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    cta: "Smart-Home Funktionen",
  },
  {
    title: "Qualität made in Germany",
    text: "Langlebige Materialien, präzise Verarbeitung und mehrfach ausgezeichnet – für Einfamilienhaus bis Großprojekt.",
    href: "/produkte/sonnenschutz/raffstoren/qualitaet",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    cta: "Mehr über Qualität",
  },
]

export default function RaffstorenPage() {
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
          <li className="text-zinc-700">Raffstoren</li>
        </ol>
      </nav>

      {/* Hero (4:3, ohne abgerundete Ecken) */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">
            ROMA Raffstoren – Tageslicht lenken, Räume kühlen, Sicht schützen
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-600">
            Raffstoren ermöglichen präzise Lichtsteuerung und wirksamen sommerlichen Wärmeschutz.
            Mit verschiedenen Lamellenformen (GL, Z, <strong>CDL</strong>) und Einbauarten für Neubau und Sanierung
            entsteht ein hochwertiges, modernes Fassadenbild – mit Komfort auf Knopfdruck.
          </p>
        </div>
        <div className="relative w-full overflow-hidden border border-zinc-200 bg-brand-light aspect-[4/3]">
          <Image
            src="/produkte/roma/roma-raffstoren-hero-4x3.webp"
            alt="ROMA Raffstoren an moderner Fassade – Tageslichtlenkung und Sonnenschutz im 4:3-Format"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={false}
          />
        </div>
      </header>

      {/* Vorteile – ursprüngliche 6 Punkte */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Ihre Vorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">{b.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lamellenarten inkl. quadratische Detailbilder */}
      <section className="mb-14 border border-zinc-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-brand">Lamellenarten</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Wählen Sie die passende Lamellenform für Anwendung und Architektur. Die Premium-Lösung ist die
          <strong> CDL (Comfort &amp; Design Lamelle)</strong> – besonders blickdicht und windstabil.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {lamellen.map((l) => (
            <div key={l.code} className="border border-zinc-200 bg-white p-5">
              <div className="flex items-start gap-4">
                {/* Rahmen explizit quadratisch */}
                <div className="relative h-20 w-20 aspect-square border border-zinc-200 bg-white">
                  <Image
                    src={l.imgSrc}
                    alt={l.imgAlt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{l.code}</div>
                  <p className="mt-1 text-sm text-zinc-700">{l.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <Link
            href="/produkte/sonnenschutz/raffstoren/lamellen"
            className="inline-flex items-center border border-brand-dark px-4 py-2 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
          >
            Lamellen im Detail (optional)
          </Link>
        </div>
      </section>

      {/* Systeme & Einbauarten – 3 Spalten, Bilder quadratisch */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Systeme &amp; Einbauarten</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Vorbau */}
          <div className="border border-zinc-200 bg-white p-6">
            <div className="relative mb-4 aspect-square w-full border border-zinc-200 bg-brand-light">
              <Image
                src="/produkte/roma/roma-vorbauraffstoren-kasten-eckig-1x1.webp"
                alt="ROMA Vorbauraffstoren – eckiger Kasten an moderner Fassade"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-brand">Vorbauraffstoren</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Der Kasten sitzt vor dem Fenster. Flexible Montage im Neubau und Bestand,
              verschiedene Kastenformen (rund, eckig, integriert). Optional Sensorik &amp; Smart-Home.
            </p>
            <Link
              href="/produkte/sonnenschutz/raffstoren/vorbau"
              className="mt-4 inline-block bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Mehr zu Vorbauraffstoren
            </Link>
          </div>

          {/* Aufsatz */}
          <div className="border border-zinc-200 bg-white p-6">
            <div className="relative mb-4 aspect-square w-full border border-zinc-200 bg-brand-light">
              <Image
                src="/produkte/roma/roma-aufsatzraffstoren-integriert-1x1.webp"
                alt="ROMA Aufsatzraffstoren – integrierte Lösung mit sehr dezenter Ansicht"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-brand">Aufsatzraffstoren</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Montage als Einheit mit dem Fenster – sehr dezente Ansicht, sehr gute Dämmwerte.
              Systeme z. B. PURO 2.XR-RS. Optional mit Insektenschutz, Smart-Home &amp; Automatik.
            </p>
            <Link
              href="/produkte/sonnenschutz/raffstoren/aufsatz"
              className="mt-4 inline-block bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Mehr zu Aufsatzraffstoren
            </Link>
          </div>

          {/* Modulraffstoren */}
          <div className="border border-zinc-200 bg-white p-6">
            <div className="relative mb-4 aspect-square w-full border border-zinc-200 bg-brand-light">
              <Image
                src="/produkte/roma/roma-modulraffstoren-1x1.webp"
                alt="ROMA Modulraffstoren – vorkonfektionierte Module für Fassaden- und Fensterbänder"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-brand">Modulraffstoren</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Vorkonfektionierte Module für den Objekt- und Serienbau. Präzise Optik, schnelle Montage und flexible Integration.
            </p>
            <Link
              href="/produkte/sonnenschutz/raffstoren/modul"
              className="mt-4 inline-block bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Mehr zu Modulraffstoren
            </Link>
          </div>
        </div>
      </section>

      {/* Mehr als Sonnenschutz: 9 Punkte – Icon-Grid */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Mehr als Sonnenschutz: Die Vorteile im Überblick</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {extended.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center border border-zinc-300">
                {item.icon}
              </span>
              <div>
                <h3 className="text-base font-semibold text-brand">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-700">{item.text}</p>
                <Link href={item.href} className="mt-1 inline-block text-sm font-semibold text-brand hover:underline">
                  {item.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-14 border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-brand">Häufige Fragen</h2>
        <div className="mt-4 space-y-4">
          <details className="group border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">CDL oder klassische Lamellen?</summary>
            <p className="mt-2 text-sm text-zinc-700">
              CDL bietet die beste Blickdichtheit und Windstabilität – ideal für Straßenlagen und große Öffnungen.
              GL-/Z-Lamellen sind flexibler und preislich günstiger.
            </p>
          </details>
          <details className="group border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">Vorbau vs. Aufsatz?</summary>
            <p className="mt-2 text-sm text-zinc-700">
              Vorbau ist flexibel (Sanierung/Neubau) und vermeidet Wärmebrücken. Aufsatz sitzt auf dem Fenster,
              integriert sich sehr dezent in die Fassade und erzielt sehr gute Dämmwerte.
            </p>
          </details>
          <details className="group border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">Automatik &amp; Smart-Home?</summary>
            <p className="mt-2 text-sm text-zinc-700">
              Steuerung per Taster/Funk/App. Mit Sonnen-/Windsensoren regelt das System je nach Wetter automatisch.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="border border-brand bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Beratung &amp; Muster ansehen</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir zeigen Ihnen Lamellen (CDL, GL, Z), Farben und Kastenlösungen live – und empfehlen das passende System
          für Ihr Gebäude.
        </p>
        <div className="mt-5">
          <Link
            href="/kontakt"
            className="inline-flex items-center bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Beratung anfragen
          </Link>
        </div>
      </section>
    </div>
  )
}
