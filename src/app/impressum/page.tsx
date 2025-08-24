// src/app/impressum/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum nach § 5 TMG und Informationen gemäß § 18 Abs. 2 MStV.",
  alternates: { canonical: "/impressum" },
}

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden>/</li>
          <li className="text-zinc-700">Impressum</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-brand md:text-4xl">Impressum</h1>

      <section className="prose prose-zinc mt-6 max-w-none">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          John Neufeldt<br />
          Rurstraße 57<br />
          52349 Düren<br />
          Deutschland
        </p>

        <p>
          E-Mail: <a href="mailto:info@meylen.de">info@meylen.de</a>
        </p>

        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
          {" "}
          <strong>DE453260541</strong>
        </p>

        <h2>Verantwortlich i.S.d. § 18 Abs. 2 MStV</h2>
        <p>
          John Neufeldt, Rurstraße 57, 52349 Düren, Deutschland
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          {" "}
          <a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">
            https://ec.europa.eu/consumers/odr
          </a>.
          Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
          TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte
          fremde Informationen zu überwachen oder nach Umständen zu forschen, die
          auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
          oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
          dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
          wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
          keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
          der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
          verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
          verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Links umgehend entfernen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
          privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
          dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
          Dritter beachtet.
        </p>

        <hr />

        <p className="text-xs text-zinc-500">
          
        </p>
      </section>
    </div>
  )
}
