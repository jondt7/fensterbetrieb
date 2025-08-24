// src/app/leistungen/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen | Fensterbetrieb",
  description:
    "Beratung, Aufmaß, Montage und Service für Fenster, Türen und Rollladen. Reparaturen und Wartung – auch für Schüco Fenster und ROMA Rollladen.",
  openGraph: {
    title: "Leistungen | Fensterbetrieb",
    description:
      "Beratung, Aufmaß, Montage und Service für Fenster, Türen und Rollladen.",
    type: "website",
  },
};

export default function LeistungenPage() {
  const services = [
    {
      slug: "beratung",
      title: "Fachkundige Beratung",
      desc:
        "Individuelle Planung für Neubau und Sanierung – energieeffizient, sicher und förderfähig.",
      points: [
        "Bedarfsanalyse & Produktauswahl",
        "Wärmeschutz, Schallschutz, Sicherheit",
        "Fördermittel- & KfW-Hinweise (ohne Rechtsberatung)",
      ],
    },
    {
      slug: "aufmass",
      title: "Präzises Aufmaß",
      desc:
        "Millimetergenaue Aufnahme vor Ort als Grundlage für Produktion und Montage.",
      points: [
        "Vermaßung bestehender Öffnungen",
        "Bauanschluss & Laibungsprüfung",
        "Dokumentation mit Fotos/Skizzen",
      ],
    },
    {
      slug: "montage",
      title: "Professionelle Montage",
      desc:
        "Montage nach Stand der Technik und herstellerkonform – sauber, termintreu, haftungssicher.",
      points: [
        "Abdichtung innen/außen fachgerecht",
        "Demontage & Entsorgung Altfenster",
        "Funktionsprüfung & Einweisung",
      ],
    },
    {
      slug: "service",
      title: "Service & Wartung",
      desc:
        "Regelmäßige Wartung und Instandsetzung für langlebige, einwandfreie Funktion.",
      points: [
        "Beschlagpflege & Nachjustierung",
        "Dichtungswechsel & Glasersatz",
        "Wartungsverträge für Objekte",
      ],
    },
    {
      slug: "reparatur",
      title: "Reparaturen",
      desc:
        "Schnelle Hilfe bei Fehlfunktionen, Undichtigkeiten oder Beschädigungen.",
      points: [
        "Schüco-Fenster-Beschläge",
        "ROMA-Rollladen, Motoren, Gurte",
        "Notverglasung nach Verfügbarkeit",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 md:grid md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-500">Unser Angebot</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl">
              Leistungen rund um Fenster, Türen & Rollladen
            </h1>
            <p className="mt-4 text-neutral-700">
              Von der ersten Beratung über das präzise Aufmaß bis hin zur fachgerechten
              Montage und zuverlässigem Service: Wir begleiten Ihr Projekt ganzheitlich.
              Reparaturen übernehmen wir für unsere verbauten Produkte – und generell für
              <span className="font-medium"> Schüco Fenster</span> sowie <span className="font-medium">ROMA Rollladen</span>.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="#kontakt"
                className="inline-flex items-center px-5 py-3 bg-neutral-900 text-white hover:bg-black"
              >
                Termin anfragen
              </Link>
              <Link
                href="/produkte"
                className="inline-flex items-center px-5 py-3 border border-neutral-300 text-neutral-900 hover:bg-neutral-50"
              >
                Zu den Produkten
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <figure className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border">
              <img
                src="/images/leistungen/hero.webp"
                alt="Symbolbild: Fenster- und Rollladen-Projekt"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <figcaption className="sr-only">Hero-Bild für Leistungen</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.slug} className="border border-neutral-200 bg-white p-6">
                <figure className="relative mb-4 aspect-[16/9] overflow-hidden bg-neutral-100 border">
                  <img
                    src={`/images/leistungen/${s.slug}.webp`}
                    alt={`${s.title} – Symbolbild`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="sr-only">Bild: {s.title}</figcaption>
                </figure>
                <h2 className="text-lg font-semibold text-neutral-900">{s.title}</h2>
                <p className="mt-2 text-neutral-700">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-neutral-800">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none bg-neutral-900" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="underline underline-offset-2 hover:no-underline text-neutral-900"
                  >
                    Details ansehen
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid items-center gap-8 border border-neutral-200 bg-white p-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900">
                Projekt starten – kostenfreie Erstberatung sichern
              </h3>
              <p className="mt-2 text-neutral-700">
                Wir prüfen Ihre Anforderungen, beraten zu Produkten und klären den
                Ablauf bis zur Montage. Unverbindlich und transparent.
              </p>
              <div className="mt-4">
                <a href="#kontakt" className="px-5 py-3 bg-neutral-900 text-white hover:bg-black">
                  Erstgespräch anfragen
                </a>
              </div>
            </div>
            <figure className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border">
              <img
                src="/images/leistungen/cta.jpg"
                alt="Symbolbild: Montage- bzw. Serviceeinsatz"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <figcaption className="sr-only">CTA-Bild</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Kontakt – Ankerpunkt */}
      <section id="kontakt" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold text-neutral-900">Kontakt aufnehmen</h3>
            <p className="mt-2 text-neutral-700">
              Schreiben Sie uns mit Ihrem Anliegen – wir melden uns zeitnah.
            </p>
          </div>
          <form action="/api/kontakt" method="post" className="mt-6 grid gap-4 sm:max-w-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Ihr Name" className="border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900" />
              <input name="email" type="email" required placeholder="E-Mail" className="border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900" />
            </div>
            <input name="telefon" placeholder="Telefon (optional)" className="border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900" />
            <textarea name="nachricht" required placeholder="Ihr Anliegen" rows={5} className="border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900" />
            <button type="submit" className="inline-flex justify-center px-5 py-3 bg-neutral-900 text-white hover:bg-black">
              Nachricht senden
            </button>
            <p className="text-xs text-neutral-500">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung zu.</p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h3 className="text-2xl font-semibold text-neutral-900">Häufige Fragen</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="font-medium text-neutral-900">Bieten Sie Reparaturen auch ohne vorherige Lieferung durch Sie an?</h4>
              <p className="mt-2 text-neutral-700">
                Ja. Wir führen Reparaturen und Serviceaufträge an von uns gelieferten Produkten
                und generell an Schüco Fenstern sowie ROMA Rollladen durch – abhängig von
                Ersatzteilverfügbarkeit und Bauzustand.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900">Wie läuft die Montage ab?</h4>
              <p className="mt-2 text-neutral-700">
                Nach dem Aufmaß erhalten Sie ein verbindliches Angebot. Die Montage erfolgt
                nach Stand der Technik inklusive fachgerechter Abdichtung; anschließend
                nehmen wir die Funktionsprüfung vor und übergeben die Dokumentation.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900">Gibt es Wartungsverträge?</h4>
              <p className="mt-2 text-neutral-700">
                Ja, für Wohn- und Gewerbeobjekte bieten wir individuelle Wartungsintervalle
                inkl. Protokollierung an.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900">Unterstützen Sie Fördermittelanträge?</h4>
              <p className="mt-2 text-neutral-700">
                Wir informieren über gängige Förderprogramme (z. B. KfW) und liefern die
                nötigen technischen Nachweise. Eine Rechts- oder Steuerberatung leisten
                wir nicht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Fenster- & Rollladen-Leistungen",
            areaServed: "Deutschland",
            provider: {
              "@type": "Organization",
              name: "Fensterbetrieb",
            },
            serviceType: [
              "Beratung",
              "Aufmaß",
              "Montage",
              "Wartung",
              "Reparatur",
            ],
          }),
        }}
      />
    </main>
  );
}
