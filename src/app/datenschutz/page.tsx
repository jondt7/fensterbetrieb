// src/app/datenschutz/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
}

export default function DatenschutzPage() {
  const stand = "August 2025"

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden>/</li>
          <li className="text-zinc-700">Datenschutzerklärung</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-brand md:text-4xl">Datenschutzerklärung</h1>

      <section className="prose prose-zinc mt-6 max-w-none">
        <p>
          Mit den folgenden Hinweisen informieren wir Sie über die Verarbeitung
          personenbezogener Daten bei Nutzung dieser Website und über die Ihnen
          zustehenden Rechte nach der Datenschutz-Grundverordnung (DSGVO).
        </p>

        <h2>1. Verantwortlicher</h2>
        <p>
          John Neufeldt<br />
          Rurstraße 57, 52349 Düren, Deutschland<br />
          E-Mail: <a href="mailto:info@meylen.de">info@meylen.de</a>
        </p>

        <h2>2. Begriffe</h2>
        <p>
          Im Sinne dieser Erklärung sind „personenbezogene Daten“ alle Informationen,
          die sich auf eine identifizierte oder identifizierbare natürliche Person
          beziehen (Art. 4 Nr. 1 DSGVO). Weitere Begriffe richten sich nach Art. 4 DSGVO.
        </p>

        <h2>3. Hosting & Server-Protokolle</h2>
        <p>
          Unsere Website wird bei einem Hosting-Anbieter in der EU betrieben
          (Auftragsverarbeitung). Beim Aufruf der Seiten werden durch den Server
          automatisch sogenannte Logfiles gespeichert: IP-Adresse, Datum und Uhrzeit
          des Zugriffs, Zeitzonendifferenz, Request-Zeile, HTTP-Statuscode, Referrer-URL,
          übertragene Datenmenge, User-Agent (Browser, Betriebssystem).
        </p>
        <p>
          <strong>Zweck</strong>: Sicherstellung des technischen Betriebs, IT-Sicherheit,
          Fehleranalyse. <strong>Rechtsgrundlage</strong>: Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse). <strong>Speicherdauer</strong>: Logfiles werden
          regelmäßig nach spätestens 30 Tagen gelöscht, sofern keine sicherheitsrelevante
          Auswertung erforderlich ist.
        </p>

        <h2>4. Kontaktaufnahme (E-Mail/Kontaktformular)</h2>
        <p>
          Wenn Sie uns per E-Mail oder über ein Kontaktformular ansprechen, verarbeiten
          wir die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, ggf.
          Telefonnummer und Nachricht) zur Bearbeitung Ihres Anliegens.
        </p>
        <p>
          <strong>Rechtsgrundlage</strong>: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Maßnahmen/Vertragserfüllung) oder lit. f DSGVO (berechtigtes Interesse an
          effizienter Kommunikation). <strong>Speicherdauer</strong>: entsprechend
          der Erforderlichkeit zur Bearbeitung sowie nach gesetzlichen Aufbewahrungsfristen.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Wir verwenden nur technisch notwendige Cookies, soweit dies für den Betrieb
          der Website erforderlich ist. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1
          lit. f DSGVO i.V.m. § 25 Abs. 2 Nr. 2 TTDSG (unbedingt erforderlich).
          Nicht notwendige Cookies (z. B. für Statistik/Marketing) setzen wir
          <strong> derzeit nicht</strong> ein.
        </p>

        <h2>6. Externe Dienste / Einbindungen</h2>
        <ul>
          <li>
            <strong>Webfonts</strong>: Schriftarten werden lokal eingebunden (z. B. via
            Next.js <code>next/font</code>). Dabei werden keine Daten an externe
            Font-CDNs übermittelt.
          </li>
          <li>
            <strong>Externe Inhalte</strong> (z. B. Karten, Videos) sind auf dieser
            Website aktuell nicht eingebunden. Sollten zukünftig Dienste Dritter
            eingebunden werden, informieren wir vorab und holen – soweit erforderlich –
            eine Einwilligung ein.
          </li>
        </ul>

        {/* --- OPTIONALE ABSCHNITTE: nur aktivieren, wenn genutzt --- */}
        <h3>Optional: Webanalyse (z. B. Google Analytics)</h3>
        <p>
          Derzeit setzen wir <strong>keine</strong> Webanalyse ein. Falls künftig eine
          Reichweitenmessung (z. B. Google Analytics) genutzt wird, erfolgt dies nur
          auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG).
          Details (Anbieter, Datenkategorien, Speicherdauer, Widerruf) werden dann an
          dieser Stelle ergänzt.
        </p>

        <h3>Optional: Bot-/Spam-Schutz (z. B. reCAPTCHA)</h3>
        <p>
          Aktuell nicht im Einsatz. Bei zukünftiger Nutzung informieren wir an dieser
          Stelle und holen eine Einwilligung ein.
        </p>
        {/* --- ENDE optionale Abschnitte --- */}

        <h2>7. Auftragsverarbeitung & Datenübermittlung</h2>
        <p>
          Wir setzen zur Bereitstellung der Website externe Dienstleister als
          Auftragsverarbeiter ein (z. B. Hosting, E-Mail). Mit diesen bestehen
          Verträge zur Auftragsverarbeitung gemäß Art. 28 DSGVO. Eine Übermittlung
          in Drittländer findet nur statt, wenn ein angemessenes Datenschutzniveau
          gegeben ist (z. B. EU-Standardvertragsklauseln oder Angemessenheitsbeschluss).
        </p>

        <h2>8. Ihre Rechte</h2>
        <ul>
          <li><strong>Auskunft</strong> (Art. 15 DSGVO) über die von uns verarbeiteten Daten,</li>
          <li><strong>Berichtigung</strong> (Art. 16 DSGVO) unrichtiger Daten,</li>
          <li><strong>Löschung</strong> (Art. 17 DSGVO) bzw. <strong>Einschränkung</strong> (Art. 18 DSGVO),</li>
          <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO),</li>
          <li><strong>Widerspruch</strong> (Art. 21 DSGVO) gegen Verarbeitungen auf Grundlage berechtigter Interessen,</li>
          <li><strong>Widerruf</strong> erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) mit Wirkung für die Zukunft.</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine Nachricht an:
          {" "}
          <a href="mailto:info@meylen.de">info@meylen.de</a>
        </p>

        <h2>9. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren. Zuständig ist insbesondere die Behörde Ihres gewöhnlichen
          Aufenthaltsortes oder des mutmaßlichen Verstoßes. Für NRW:
        </p>
        <p>
          Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)<br />
          Kavalleriestraße 2–4, 40213 Düsseldorf<br />
          <a href="https://www.ldi.nrw.de/" target="_blank" rel="noopener noreferrer">https://www.ldi.nrw.de/</a>
        </p>

        <h2>10. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir passen diese Erklärung an, sobald Änderungen der Datenverarbeitung dies
          erforderlich machen. Bitte informieren Sie sich daher regelmäßig über den
          aktuellen Stand.
        </p>

        <p className="mt-6 text-sm text-zinc-500">Stand: {stand}</p>

        <hr />

        <p className="text-xs text-zinc-500">
          Hinweis: Diese Datenschutzerklärung wurde nach bestem Wissen erstellt. Sie ersetzt
          keine Rechtsberatung. Bitte lassen Sie die Inhalte bei Bedarf rechtlich prüfen.
        </p>
      </section>
    </div>
  )
}
