// src/app/leistungen/montage/page.tsx
import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/data/site.config"

export const metadata = {
  title: "Montage nach RAL/ift – Abdichtung, Befestigung, Bauanschluss",
  description:
    "Fachgerechte Fenstermontage nach RAL- und ift-Leitfaden (2020): Ebenenmodell, Abdichtung, Befestigung, barrierefreie Schwellen, Schallschutz, Wärmebrücken und Qualitätssicherung.",
}

export default function MontagePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/leistungen" className="hover:underline">Leistungen</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">Montage</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">
            Fenstermontage nach RAL und ift (2020)
          </h1>
          <p className="mt-4 text-zinc-600">
            Unsere Montage orientiert sich am RAL-Montageleitfaden sowie am aktualisierten ift-Leitfaden (2020). 
            Beides dokumentiert den Stand der Technik für Abdichtung, Befestigung, Wärmeschutz, Schallschutz und 
            sichere Baukörperanschlüsse – für langlebige, energieeffiziente und schadensfreie Fensterlösungen.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kontakt" className="inline-flex items-center bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 rounded-[8px]">
              Beratung anfragen
            </Link>
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground rounded-[8px]">
              Telefon {SITE.phone}
            </a>
          </div>
        </div>

        <figure className="relative aspect-[4/3] w-full overflow-hidden border border-zinc-200 bg-brand-light rounded-[8px]">
          <Image
            src="/images/leistungen/montage.webp"
            alt="Fenstermontage nach RAL/ift – fachgerechter Baukörperanschluss mit Abdichtung und Befestigung"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={false}
          />
        </figure>
      </header>

      {/* Ebenenmodell */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Ebenenmodell der Abdichtung</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Kern der Leitfäden ist das dreiteilige Ebenenmodell für dauerhaft funktionierende Anschlüsse:
        </p>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-3">
          <li className="rounded-[8px] bg-brand-light p-4">
            <span className="font-semibold text-brand">Innen: luftdicht</span>
            <p className="mt-1">verhindert Feuchteeintrag in die Fuge und Tauwasserschäden.</p>
          </li>
          <li className="rounded-[8px] bg-brand-light p-4">
            <span className="font-semibold text-brand">Mitte: wärmedämmend</span>
            <p className="mt-1">sorgt für Dämmung und füllt Bewegungsfugen dauerhaft.</p>
          </li>
          <li className="rounded-[8px] bg-brand-light p-4">
            <span className="font-semibold text-brand">Außen: schlagregendicht, diffusionsoffen</span>
            <p className="mt-1">führt Feuchte nach außen ab, bleibt wetterdicht.</p>
          </li>
        </ul>
        <p className="mt-3 text-sm text-zinc-700">
          Je nach Bauteil und Untergrund kommen Fugendichtbänder, Multifunktionsbänder, Folien oder Dichtstoffe zum Einsatz. 
          Bewegungen durch Temperatur und Feuchte werden konstruktiv berücksichtigt (Fugenbreite, Banddimensionierung, Haftflächen).
        </p>
      </section>

      {/* Bauphysik & Normen */}
      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <article className="rounded-[8px] border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-brand">Bauphysik & Nachweise</h3>
          <ul className="mt-2 list-inside list-disc text-sm text-zinc-700">
            <li>Luftdichtheit des Gebäudes, Vermeidung von Konvektion</li>
            <li>fRSI-Faktor am Anschluss zur Schimmelvermeidung</li>
            <li>Wärmebrücken/Ψ-Werte nach DIN 4108 Beiblatt 2</li>
          </ul>
        </article>
        <article className="rounded-[8px] border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-brand">Schallschutz (DIN 4109)</h3>
          <p className="mt-2 text-sm text-zinc-700">
            Fugen dürfen die Schalldämmung des Fensters um höchstens 1&nbsp;dB verschlechtern. 
            Abdichtungssystem und Anschlussdetails werden entsprechend geplant und geprüft.
          </p>
        </article>
        <article className="rounded-[8px] border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-brand">Brandschutz & Feuchteschutz</h3>
          <p className="mt-2 text-sm text-zinc-700">
            Planung gemäß DIN 4102 (Brandschutz) und DIN 4108 (Feuchteschutz). 
            Materialien und Anschlussdetails werden objektspezifisch abgestimmt.
          </p>
        </article>
      </section>

      {/* Schwellen / Sonderkonstruktionen */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Bodentiefe Elemente & barrierefreie Schwellen</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Schwellen sind hoch beanspruchte Bauteile und erfordern objektspezifische Planung. 
          Barrierefreie Schwellen nach DIN&nbsp;18040 gelten als Sonderkonstruktionen: Anschluss an die Bauwerksabdichtung 
          (z. B. DIN&nbsp;18531, Flachdachrichtlinie) muss geplant, nachgewiesen und ausgeführt werden. 
          Im Neubau sind bodenbündige Lösungen Standard – höhere Schwellen gelten als Planungsfehler.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <figure className="relative aspect-[16/9] w-full overflow-hidden border border-zinc-200 bg-brand-light rounded-[8px]">
            <Image src="/images/leistungen/aufmass.webp" alt="Planung bodentiefer Elemente – Anschluss an Bauwerksabdichtung" fill className="object-cover" />
          </figure>
          <figure className="relative aspect-[16/9] w-full overflow-hidden border border-zinc-200 bg-brand-light rounded-[8px]">
            <Image src="/images/leistungen/service.webp" alt="Schwellenlösung – barrierearm, entwässert und wärmebrückenarm" fill className="object-cover" />
          </figure>
        </div>
      </section>

      {/* Zweistufiger Einbau */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Zweistufiger Einbau mit Vorab-Montagezargen</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Um Bauschäden in der Rohbauphase zu vermeiden, empfiehlt der ift-Leitfaden Einbaurahmen/Zargen: 
          Zuerst wird die Zarge luft-/schlagregendicht und tragfähig eingebaut, das Fenster folgt in der trockenen Ausbauphase. 
          Vorteile: Schutz der Elemente, klarer Bauablauf, leichterer Austausch in der Nutzung.
        </p>
      </section>

      {/* Befestigung & Sicherheit */}
      <section className="mb-12 rounded-[8px] border border-zinc-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-brand">Befestigung, Absturzsicherung & Materialien</h2>
        <ul className="mt-2 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
          <li className="rounded-[8px] bg-brand-light p-3">Standardfälle für eine eindeutige Bemessung der Befestigung</li>
          <li className="rounded-[8px] bg-brand-light p-3">Bagatellfall: unkritische Fenster ohne aufwändige Dimensionierung</li>
          <li className="rounded-[8px] bg-brand-light p-3">Kontaktkorrosion vermeiden (Materialpaarungen beachten)</li>
          <li className="rounded-[8px] bg-brand-light p-3">Befestigung in hochwärmedämmenden Mauersteinen: zugelassene Systeme</li>
        </ul>
      </section>

      {/* Fehlervermeidung & Qualität */}
      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-[8px] border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-brand">Häufige Fehler vermeiden</h3>
          <ul className="mt-2 list-inside list-disc text-sm text-zinc-700">
            <li>Zeitdruck statt Standarddetails – fehlende Anschlussskizzen</li>
            <li>Ungeeignete Materialien oder falsche Dimensionierung</li>
            <li>Mangelnde Einweisung/Weiterbildung auf der Baustelle</li>
            <li>Unzureichende Bauleitung/Abnahme der Anschlussdetails</li>
          </ul>
        </article>
        <article className="rounded-[8px] border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-brand">Qualitätssicherung</h3>
          <p className="mt-2 text-sm text-zinc-700">
            Checklisten, Musterdetails und der ift-Montageplaner unterstützen Planung und Nachweis (Befestigungskräfte, 
            bauphysikalische Anforderungen). Eine ift-Montagefachkraft im Team wird empfohlen; Betriebe mit RAL-Gütezeichen 
            müssen mindestens eine solche Fachkraft nachweisen.
          </p>
        </article>
      </section>

      {/* Abschluss-CTA */}
      <section className="rounded-[8px] border border-accent bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-brand">Projekt starten – fachgerechte Montage sichern</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Wir planen Bauanschlüsse objektbezogen und montieren nach dem Stand der Technik – inklusive Nachweisen bei Bedarf.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/kontakt" className="inline-flex items-center bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 rounded-[8px]">
            Kontakt & Angebot
          </Link>
          <Link href="/leistungen" className="inline-flex items-center border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground rounded-[8px]">
            Zur Übersicht Leistungen
          </Link>
        </div>
      </section>
    </div>
  )
}

