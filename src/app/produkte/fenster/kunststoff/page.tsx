// src/app/produkte/fenster/kunststoff/page.tsx
import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/data/site.config"

export default function KunststoffFensterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/produkte/fenster" className="hover:underline">Fenster</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Kunststoff</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">
            Schüco Kunststoff-Fenster
          </h1>
          <p className="mt-4 text-muted-foreground">
            Die <strong>Schüco LivIng</strong>-Serie steht für höchste Energieeffizienz, modernes Design und langlebige Qualität. 
            Mit 82 mm Bautiefe und innovativer 7-Kammer-Technologie erreichen Sie exzellente Dämmwerte und maximalen Wohnkomfort.
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

        <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-muted shadow-sm rounded-[8px]">
          <Image
            src="/produkte/fenster-kunststoff.webp"
            alt="Schüco Kunststoff-Fenster"
            fill
            className="object-cover"
          />
        </div>
      </header>

      {/* Merkmale */}
      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="bg-muted p-6 rounded-[8px]">
          <h3 className="text-lg font-semibold">Energieeffizienz</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            7-Kammer-Profile mit 82 mm Bautiefe erreichen U<sub>f</sub>-Werte bis 0,79 W/(m²K) und erfüllen höchste Anforderungen an Wärmedämmung.
          </p>
        </div>
        <div className="bg-muted p-6 rounded-[8px]">
          <h3 className="text-lg font-semibold">Komfort</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Optionaler Schallschutz bis 47 dB, langlebige EPDM-Dichtungen, pflegeleicht und wartungsarm.
          </p>
        </div>
        <div className="bg-muted p-6 rounded-[8px]">
          <h3 className="text-lg font-semibold">Design</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Große Farb- und Oberflächenvielfalt, optional mit Aluminium-Deckschalen.
          </p>
        </div>
      </section>

      {/* Varianten */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Produktvarianten</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="border border-border bg-background p-6 rounded-[8px]">
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">LivIng 82 AS</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Anschlagdichtungssystem (AS) mit 2 Dichtungsebenen, gute Dämmung
                  und hervorragendes Preis-Leistungs-Verhältnis.
                </p>
              </div>
              <div className="relative aspect-square w-28 border border-border bg-muted rounded-[8px] overflow-hidden">
                <Image
                  src="/produkte/living-82-as.webp"
                  alt="Schüco LivIng 82 AS Kunststoff-Fenster"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border border-border bg-background p-6 rounded-[8px]">
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">LivIng 82 MD</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mitteldichtungssystem (MD) mit zusätzlicher Dichtungsebene für
                  optimale Wärmedämmung, Schallschutz und Luftdichtheit.
                </p>
              </div>
              <div className="relative aspect-square w-28 border border-border bg-muted rounded-[8px] overflow-hidden">
                <Image
                  src="/produkte/living-82-md.webp"
                  alt="Schüco LivIng 82 MD Kunststoff-Fenster"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beschlag */}
      <section className="mb-12">
        <details className="border border-border bg-background p-6 rounded-[8px]">
          <summary className="cursor-pointer text-lg font-semibold">
            Beschlag & Sicherheit
          </summary>
          <div className="mt-3 text-sm text-muted-foreground">
            <p>
              Infos zu Beschlägen, RC-Sicherheitsklassen und optionalen
              Sicherheitsausstattungen (RC2, RC3, Pilzkopfverriegelung) finden Sie
              auf unserer{" "}
              <Link href="/produkte/fenster/beschlag-sicherheit" className="text-primary hover:text-primary-dark">
                Beschlag-Seite
              </Link>.
            </p>
          </div>
        </details>
      </section>

      {/* Verglasung */}
      <section className="mb-12">
        <details className="border border-border bg-background p-6 rounded-[8px]">
          <summary className="cursor-pointer text-lg font-semibold">
            Verglasung
          </summary>
          <div className="mt-3 text-sm text-muted-foreground">
            <p>
              Details zu Wärmeschutz-, Schallschutz- und Sicherheitsglas finden
              Sie auf unserer{" "}
              <Link href="/produkte/fenster/verglasung" className="text-primary hover:text-primary-dark">
                Verglasungs-Seite
              </Link>.
            </p>
          </div>
        </details>
      </section>

      {/* CTA */}
      <section className="border border-border bg-background p-8 rounded-[8px]">
        <h2 className="text-xl font-semibold">
          Starten wir Ihr Fensterprojekt
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Kontaktieren Sie uns für eine kostenlose Erstberatung, Aufmaß und ein
          individuelles Angebot für Ihre neuen Schüco Kunststoff-Fenster.
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
