// src/app/produkte/fenster/aluminium/page.tsx
import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/data/site.config"

export const revalidate = 3600

export default function AluminiumFensterPage() {
  return (
    <div className="container py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte" className="hover:text-primary">Produkte</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte/fenster" className="hover:text-primary">Fenster</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Aluminium</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">
            Schüco Aluminium-Fenster (AWS Plattform)
          </h1>
          <p className="mt-4 text-muted-foreground">
            Aluminium von <strong>Schüco</strong> steht für <em>schlanke Ansichten</em>, <em>maximale Stabilität</em> und
            <em>sehr hohe Dämmwerte</em> bis hin zur Passivhaus-Tauglichkeit (je nach Ausführung).
            Ideal für hochwertige Wohn- und Objektbauten mit großen Elementen.
          </p>

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

        <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-muted rounded-[8px]">
          <Image
            src="/produkte/fenster-aluminium-1.webp"
            alt="Schüco Aluminium-Fenster – Referenzprojekt mit schlanken Profilansichten"
            fill
            priority
            sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 90vw"
            className="object-cover"
          />
        </div>
      </header>

      {/* Warum Aluminium? */}
      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="border border-border bg-background p-6 rounded-[8px]">
          <h3 className="text-lg font-semibold">Große Formate & Stabilität</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Hohe Eigensteifigkeit ermöglicht <strong>große Festfelder und Flügel</strong> bei gleichzeitig
            <strong>schmalen Profilansichten</strong> – perfekt für moderne Architektur.
          </p>
        </div>
        <div className="border border-border bg-background p-6 rounded-[8px]">
          <h3 className="text-lg font-semibold">Dämmung & Sicherheit</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Hochwärmegedämmte Systeme mit geprüfter <strong>Einbruchhemmung</strong> (je nach Ausführung); optional
            Smart-Home-fähige Beschläge.
          </p>
        </div>
        <div className="border border-border bg-background p-6 rounded-[8px]">
          <h3 className="text-lg font-semibold">Design, Farbe, Langlebigkeit</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            <strong>Große Farb- &amp; Oberflächenvielfalt</strong> (z.&nbsp;B. Feinstruktur, Eloxal),
            <strong>geringer Pflegeaufwand</strong> und sehr hohe Lebensdauer.
          </p>
        </div>
      </section>

      {/* Systeme im Fokus */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Systeme im Fokus</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* AWS 75.SI+ */}
          <Link href="/produkte/fenster/aluminium/aws-75-si-plus" className="group grid grid-cols-[110px_1fr] gap-4 border border-border bg-background p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-[8px]">
            <div className="relative h-[110px] w-[110px] border border-border bg-muted rounded-[8px] overflow-hidden">
              <Image
                src="/produkte/aws-75-si-plus.webp"
                alt="Schüco AWS 75.SI+ – 75 mm Bauteiltiefe, hochwärmegedämmt"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary">Schüco AWS&nbsp;75.SI+</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Der <strong>75 mm</strong> Allrounder der AWS-Plattform: hochwärmegedämmt, vielseitige
                Öffnungsarten (z.&nbsp;B. Dreh-/Kipp), kombinierbar als Fassadeneinsatz oder Lochfenster.
              </p>
              <div className="mt-2 text-sm font-medium text-primary">Details ansehen →</div>
            </div>
          </Link>

          {/* AWS 90.SI+ */}
          <Link href="/produkte/fenster/aluminium/aws-90-si-plus" className="group grid grid-cols-[110px_1fr] gap-4 border border-border bg-background p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-[8px]">
            <div className="relative h-[110px] w-[110px] border border-border bg-muted rounded-[8px] overflow-hidden">
              <Image
                src="/produkte/aws-90-si-plus.webp"
                alt="Schüco AWS 90.SI+ – 90 mm Bauteiltiefe, höchste Dämmung"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary">Schüco AWS&nbsp;90.SI+</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>90 mm</strong> Top-Dämmvariante mit sehr hohem Energiestandard, schlanken Ansichten
                und breitem Profilspektrum – ideal für ambitionierte Neubauten.
              </p>
              <div className="mt-2 text-sm font-medium text-primary">Details ansehen →</div>
            </div>
          </Link>
        </div>

        {/* Deep-Links zur Vertiefung */}
        <div className="mt-6 text-sm">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-primary">
            <li><Link href="/produkte/fenster/beschlag-sicherheit" className="hover:text-primary-light">Beschlag &amp; Sicherheit</Link></li>
            <li><Link href="/produkte/fenster/verglasung" className="hover:text-primary-light">Verglasung – Übersicht</Link></li>
            <li><Link href="/produkte/fenster/verglasung/waermeschutz" className="hover:text-primary-light">Wärmeschutzglas</Link></li>
            <li><Link href="/produkte/fenster/verglasung/schallschutz" className="hover:text-primary-light">Schallschutzglas</Link></li>
            <li><Link href="/produkte/fenster/verglasung/sicherheitsglas" className="hover:text-primary-light">Sicherheitsglas</Link></li>
          </ul>
        </div>
      </section>

      {/* Einsatzbereiche / Für welche Projekte eignet sich Aluminium? */}
      <section className="mb-12 border border-border bg-background p-6 rounded-[8px]">
        <h2 className="text-xl font-semibold">Für welche Projekte ist Aluminium ideal?</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
          <li>• Neubau &amp; hochwertige Sanierung mit <strong>großen Fensterformaten</strong></li>
          <li>• <strong>Schmale Profilansichten</strong> für maximale Lichtausbeute</li>
          <li>• <strong>Hohe Beanspruchung</strong> (Witterung, Nutzung) – langlebig &amp; formstabil</li>
          <li>• Anspruchsvolle Gestaltungen: spezielle Farben/Oberflächen, bündige Optiken</li>
          <li>• Kombination mit <strong>Sicherheits-</strong> und <strong>Smart-Home</strong>-Ausstattung</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="border border-border bg-background p-8 rounded-[8px]">
        <h2 className="text-xl font-semibold">Starten wir Ihr Aluminium-Fensterprojekt</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Beratung, Aufmaß und individuelles Angebot – {SITE.address.city} &amp; Umgebung.
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
