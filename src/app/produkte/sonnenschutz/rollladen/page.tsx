// src/app/produkte/sonnenschutz/rollladen/page.tsx
import Link from "next/link"
import Image from "next/image"

type Benefit = { title: string; text: string }
type Profil = { code: string; desc: string; imgSrc: string; imgAlt: string }

const benefits: Benefit[] = [
  {
    title: "Energieeffizienz & Wärmeschutz",
    text:
      "Rollladen reduzieren Wärmeverluste im Winter und halten Sommerhitze vor der Scheibe – spürbar bessere Raumtemperaturen und geringere Betriebs­kosten.",
  },
  {
    title: "Sicherheit",
    text:
      "Geschlossene Rollladen erhöhen den Einbruchschutz – optional mit stabilen Profilen (z. B. ALUMINO protect) und Hochschiebehemmung.",
  },
  {
    title: "Schallschutz",
    text:
      "Ausgeschäumte Profile dämpfen Außengeräusche – spürbar ruhigeres Wohnen an Straßen, Bahnlinien oder in dichter Bebauung.",
  },
  {
    title: "Verdunkelung & Sichtschutz",
    text:
      "Nahezu vollständige Abdunkelung für Schlafräume und zuverlässige Privatsphäre auf Knopfdruck – tags und nachts.",
  },
  {
    title: "Design & Varianten",
    text:
      "Kastenformen (rund, eckig, integriert) und viele Farben ermöglichen eine harmonische Fassadengestaltung.",
  },
  {
    title: "Smart-Home & Solar",
    text:
      "Bedienung per Taster, Funk oder App – auf Wunsch automatisiert via Sensoren. Auch kabelloser Solarantrieb möglich.",
  },
]

const profile: Profil[] = [
  {
    code: "ALUMINO",
    desc:
      "Doppelwandiges Aluminiumprofil, ausgeschäumt – langlebig, witterungsbeständig und universell einsetzbar.",
    imgSrc: "/produkte/roma/roma-rollladenprofil-alumino-detail-1x1.webp",
    imgAlt:
      "ROMA Rollladenprofil ALUMINO – Detailansicht des doppelwandigen, ausgeschäumten Aluminiumprofils (quadratisch 1:1)",
  },
  {
    code: "ALUMINO protect",
    desc:
      "Extra stabile, hartgeschäumte Aluminiumprofile – für erhöhten Widerstand und mehr Sicherheit.",
    imgSrc:
      "/produkte/roma/roma-rollladenprofil-alumino-protect-detail-1x1.webp",
    imgAlt:
      "ROMA Rollladenprofil ALUMINO protect – Sicherheitsprofil in stabiler Ausführung, Detailansicht (1:1)",
  },
  {
    code: "Kunststoff",
    desc:
      "Leichte, stabile Kunststoffprofile – wirtschaftliche Lösung mit guter Dämmung und sauberer Optik.",
    imgSrc:
      "/produkte/roma/roma-rollladenprofil-kunststoff-detail-1x1.webp",
    imgAlt:
      "ROMA Rollladenprofil Kunststoff – Detailansicht des Behangs aus Kunststoff (1:1)",
  },
]

// 9 Punkte – Icon-Grid (gleich wie Raffstoren)
const extended = [
  {
    title: "Wärmeschutz & Energie",
    text:
      "Weniger Heiz- und Kühlbedarf: Rollladen halten Sommerhitze draußen und reduzieren Wärmeverluste im Winter.",
    href: "/produkte/sonnenschutz/rollladen/energie",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 2v6l4 2-4 2v6l-4-8 4-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    ),
    cta: "Energie clever sparen",
  },
  {
    title: "Einbruchhemmung",
    text:
      "Geschlossene Rollladen schrecken ab und erhöhen den mechanischen Widerstand – optional mit ALUMINO protect.",
    href: "/produkte/sonnenschutz/rollladen/sicherheit",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M6 10V7a6 6 0 1 1 12 0v3M5 10h14v9H5z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
    cta: "Mehr Sicherheit",
  },
  {
    title: "Schallschutz",
    text:
      "Ausgeschäumte Profile dämpfen Außengeräusche – für mehr Ruhe in Wohn- und Arbeitsräumen.",
    href: "/produkte/sonnenschutz/rollladen/schallschutz",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M3 10h4l5-4v12l-5-4H3zM16 9v6M20 8v8"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
    cta: "Leiser wohnen",
  },
  {
    title: "Abdunkelung",
    text:
      "Nahezu vollständige Verdunkelung für Schlafräume, Kinderzimmer oder Präsentationsräume.",
    href: "/produkte/sonnenschutz/rollladen/abdunkelung",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M21 12a9 9 0 1 1-9-9 6 6 0 0 0 9 9z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
    cta: "Perfekt abdunkeln",
  },
  {
    title: "Sichtschutz",
    text:
      "Volle Privatsphäre auf Knopfdruck – ideal für Stadtlagen und bodentiefe Fenster.",
    href: "/produkte/sonnenschutz/rollladen/sichtschutz",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
    cta: "Sichtschutz-Lösungen",
  },
  {
    title: "Wetterschutz",
    text:
      "Schützt Fenster und Fassade vor Wind, Regen und UV – für Werterhalt und dauerhaft schöne Optik.",
    href: "/produkte/sonnenschutz/rollladen/wetterschutz",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M3 11l9-7 9 7v9H3zM7 14h10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
    cta: "Mehr zum Wetterschutz",
  },
  {
    title: "Insektenschutz integriert",
    text:
      "Optionales, unauffälliges Insektenschutzgitter – frische Luft ohne Mücken & Fliegen.",
    href: "/produkte/sonnenschutz/rollladen/insektenschutz",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M4 4h16v16H4zM8 4v16M16 4v16M4 8h16M4 16h16"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
    cta: "Insektenschutz entdecken",
  },
  {
    title: "Komfort & Smart-Home",
    text:
      "Steuerung per Schalter, Funk oder App – automatisierbar mit Sonnen-, Zeit- und Windsensoren.",
    href: "/produkte/sonnenschutz/rollladen/smart-home",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M3 11l9-7 9 7v9H3zM9 20v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
    cta: "Smart steuern",
  },
  {
    title: "Solar-Antrieb",
    text:
      "Kabellos nachrüsten und unabhängig vom Stromnetz – ideal für Bestandsgebäude.",
    href: "/produkte/sonnenschutz/rollladen/solar",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 6.95-1.41-1.41M7.46 7.46 6.05 6.05m10.49 0-1.41 1.41M7.46 16.54 6.05 17.95"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
    cta: "Solar-Lösung prüfen",
  },
]

export default function RollladenPage() {
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
          <li className="text-zinc-700">Rollladen</li>
        </ol>
      </nav>

      {/* Hero (4:3, ohne abgerundete Ecken) */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">
            ROMA Rollladen – Komfort, Sicherheit, Energie sparen
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-600">
            Rollladen von ROMA sind moderner Sonnen-, Sicht- und Wärmeschutz. Mit unterschiedlichen
            Systemen für Neubau und Sanierung (Vorbau, Aufsatz) sowie Profilvarianten
            aus Aluminium oder Kunststoff entsteht ein langlebiger, automatisierbarer Schutz –
            elegant integriert in die Fassade.
          </p>
        </div>
        <div className="relative w-full overflow-hidden border border-zinc-200 bg-brand-light aspect-[4/3] rounded-[8px]">
          <Image
            src="/produkte/roma/roma-rollladen-hero-4x3.webp"
            alt="ROMA Rollladen an moderner Fassade – Wärmeschutz, Sicherheit und Verdunkelung im 4:3-Format"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={false}
          />
        </div>
      </header>

      {/* Vorteile – 6 Punkte */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Ihre Vorteile</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="border border-zinc-200 bg-white p-6 shadow-sm rounded-[8px]">
              <h3 className="text-lg font-semibold text-brand">{b.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rollladenprofile – quadratische Detailbilder */}
      <section className="mb-14 border border-zinc-200 bg-white p-6 rounded-[8px]">
        <h2 className="text-2xl font-semibold text-brand">Rollladenprofile</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Wählen Sie den passenden Behang: <strong>ALUMINO</strong> (doppelwandiges Aluminium),
          <strong> ALUMINO protect</strong> (extra stabil) oder <strong>Kunststoff</strong>.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {profile.map((p) => (
            <div key={p.code} className="border border-zinc-200 bg-white p-5 rounded-[8px]">
              <div className="flex items-start gap-4">
                {/* Rahmen explizit quadratisch */}
                <div className="relative h-20 w-20 aspect-square border border-zinc-200 bg-white rounded-[8px] overflow-hidden">
                  <Image
                    src={p.imgSrc}
                    alt={p.imgAlt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{p.code}</div>
                  <p className="mt-1 text-sm text-zinc-700">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <Link
            href="/produkte/sonnenschutz/rollladen/profile"
            className="inline-flex items-center border border-brand-dark px-4 py-2 text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
          >
            Profile im Detail (optional)
          </Link>
        </div>
      </section>

      {/* Systeme & Einbauarten – 3 Spalten, Bilder quadratisch */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-brand">Systeme &amp; Einbauarten</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Vorbaurollladen */}
          <div className="border border-zinc-200 bg-white p-6">
            <div className="relative mb-4 aspect-square w-full border border-zinc-200 bg-brand-light">
              <Image
                src="/produkte/roma/roma-vorbaurollladen-kasten-eckig-1x1.webp"
                alt="ROMA Vorbaurollladen – eckige Kastenform an moderner Fassade (1:1)"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-brand">Vorbaurollladen</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Außenliegende Montage ohne Eingriff in die Gebäudehülle – vermeidet Wärmebrücken,
              flexibel im Neubau und bei der Nachrüstung. Kastenformen: rund, eckig, integriert.
              Optional mit Insektenschutz und Smart-Home/Automatik.
            </p>
            <Link
              href="/produkte/sonnenschutz/rollladen/vorbau"
              className="mt-4 inline-block bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 rounded-[8px]"
            >
              Mehr zu Vorbaurollladen
            </Link>
          </div>

          {/* Aufsatzrollladen (PURO) */}
          <div className="border border-zinc-200 bg-white p-6">
            <div className="relative mb-4 aspect-square w-full border border-zinc-200 bg-brand-light">
              <Image
                src="/produkte/roma/roma-aufsatzrollladen-puro-1x1.webp"
                alt="ROMA Aufsatzrollladen PURO – vollständig eingeputzter Kasten, energieeffiziente Lösung (1:1)"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-brand">Aufsatzrollladen (PURO)</h3>
            <p className="mt-2 text-sm text-zinc-700">
              PURO 2/PURO 2.XR – Aufsatzsystem mit sehr guten Wärme- und Schalldämmwerten.
              Innen- oder Außenrevision je nach Variante, dezente Optik, integrierbarer Insektenschutz.
            </p>
            <Link
              href="/produkte/sonnenschutz/rollladen/aufsatz"
              className="mt-4 inline-block bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 rounded-[8px]"
            >
              Mehr zu Aufsatzrollladen
            </Link>
          </div>

          {/* Aufsatzrollladen Kunststoff (Bild: KARO, Hinweis auf RA.2) */}
          <div className="border border-zinc-200 bg-white p-6">
            <div className="relative mb-4 aspect-square w-full border border-zinc-200 bg-brand-light">
              <Image
                src="/produkte/roma/roma-aufsatzrollladen-karo-1x1.webp"
                alt="ROMA Aufsatzrollladen KARO – Kunststoff-Aufsatzkasten mit optionaler Außenblende (1:1)"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-brand">Aufsatzrollladen Kunststoff</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Kunststoff-Aufsatzsysteme wie <strong>KARO</strong> oder <strong>RA.2</strong> – ideal beim Fenstertausch.
              Optional mit Putzträgern oder Aluminium-Außenblende, sehr gute Dämm- und Schalldämmwerte.
            </p>
            <Link
              href="/produkte/sonnenschutz/rollladen/aufsatz"
              className="mt-4 inline-block bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 rounded-[8px]"
            >
              Mehr zu Aufsatzrollladen
            </Link>
          </div>
        </div>
      </section>

      {/* Mehr als Sonnenschutz – 9 Punkte */}
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
                <Link
                  href={item.href}
                  className="mt-1 inline-block text-sm font-semibold text-brand hover:underline"
                >
                  {item.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ – erweitert & recherchiert */}
      <section className="mb-14 border border-zinc-200 bg-white p-8 rounded-[8px]">
        <h2 className="text-2xl font-semibold text-brand">Häufige Fragen</h2>
        <div className="mt-4 space-y-4">
          <details className="group border border-zinc-200 p-4 rounded-[8px]">
            <summary className="cursor-pointer font-semibold text-brand">
              Vorbau oder Aufsatz – was passt besser?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              Vorbaurollladen werden außen vor das Fenster gesetzt – sehr flexibel (Neubau &amp; Nachrüstung) und ohne
              Wärmebrücke. Aufsatzrollladen bilden eine Einheit mit dem Fenster – besonders energieeffizient und
              optisch dezent, ideal bei Neubau oder Sanierung mit Fenstertausch.
            </p>
          </details>

          <details className="group border border-zinc-200 p-4 rounded-[8px]">
            <summary className="cursor-pointer font-semibold text-brand">
              Innen- vs. Außenrevision bei PURO – was bedeutet das?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              PURO 2 hat die Revision raumseitig (innen), PURO 2.XR außen. Beides erleichtert Wartung und Reinigung – die Wahl
              richtet sich nach Einbausituation und Vorlieben (z. B. Putzaufbau, Zugänglichkeit).
            </p>
          </details>

          <details className="group border border-zinc-200 p-4 rounded-[8px]">
            <summary className="cursor-pointer font-semibold text-brand">
              Können Rollladen nachgerüstet werden – auch ohne Stromanschluss?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              Ja. Vorbaurollladen sind ideal zur Nachrüstung. Zudem sind Solar-Antriebe verfügbar – kabellos und damit
              ohne Eingriff in die Elektroinstallation.
            </p>
          </details>

          <details className="group border border-zinc-200 p-4 rounded-[8px]">
            <summary className="cursor-pointer font-semibold text-brand">
              Welche Kunststoff-Aufsatzsysteme gibt es?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              KARO und RA.2 sind Kunststoff-Aufsatzkästen. Beide lassen sich mit Putzträgern oder einer Aluminium-Außenblende
              kombinieren und eignen sich besonders beim Fenstertausch.
            </p>
          </details>

          <details className="group border border-zinc-200 p-4 rounded-[8px]">
            <summary className="cursor-pointer font-semibold text-brand">
              Gibt es integrierten Insektenschutz?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              Ja. Je nach System ist ein integriertes Insektenschutzgitter optional verfügbar und nahezu unsichtbar im Kasten geschützt.
            </p>
          </details>

          <details className="group border border-zinc-200 p-4 rounded-[8px]">
            <summary className="cursor-pointer font-semibold text-brand">
              Welche Kastenformen gibt es bei Vorbaurollladen?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              Rund, eckig oder integriert in die Fassade – so fügt sich der Rollladen stimmig in unterschiedliche Architekturen ein.
              Vorbau-Systeme gelten als besonders energieeffizient, da keine Wärmebrücken entstehen.
            </p>
          </details>

          <details className="group border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">
              Sind ROMA Vorbaurollladen für Passivhäuser geeignet?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              Ja. ROMA Vorbaurollladen sind als Passivhaus-Komponenten zertifiziert – ideal für besonders hohe Anforderungen an den Wärmeschutz.
            </p>
          </details>

          <details className="group border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand">
              Welche Steuerungen sind möglich – auch Smart-Home?
            </summary>
            <p className="mt-2 text-sm text-zinc-700">
              Von klassischem Schalter über Funk bis zur App mit Smart-Home-Integration. Automatische Abläufe sind per Zeit-, Sonnen- oder Windsensoren möglich.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="border border-brand bg-white p-8 shadow-sm rounded-[8px]">
        <h2 className="text-lg font-semibold text-brand">Beratung &amp; Muster ansehen</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir zeigen Ihnen Kastenformen, Profile (ALUMINO, ALUMINO protect, Kunststoff), Farben und Antriebe –
          und empfehlen das passende System für Ihr Gebäude.
        </p>
        <div className="mt-5">
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
