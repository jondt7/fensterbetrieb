// src/app/kontakt/page.tsx
"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/data/site.config"

type ApiResponse = { ok: boolean; error?: string }

const TOPIC_PRESETS = [
  "Fenster (Aluminium)",
  "Fenster (Kunststoff)",
  "Haustüren (Inotherm)",
  "Rollladen & Raffstore (Roma)",
  "Garagentore (Wiśniowski)",
  "Service / Reparatur",
]

const REQUEST_TYPES = ["Beratung / Angebot", "Reparatur / Wartung", "Rückruf"] as const

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Form-State
  const [topic, setTopic] = useState("")
  const [requestType, setRequestType] = useState("")
  const [preferredContact, setPreferredContact] = useState<"Telefon" | "E-Mail" | "egal" | "">("")
  const [callbackTime, setCallbackTime] = useState("")
  const [fileName, setFileName] = useState<string | null>(null)
  const [consent, setConsent] = useState(false)

  const onDropFile = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (!file) return
    if (file.size > 8 * 1024 * 1024) {
      setError("Datei ist größer als 8 MB.")
      return
    }
    const input = document.querySelector<HTMLInputElement>('input[name="file"]')
    if (input && file) {
      const dt = new DataTransfer()
      dt.items.add(file)
      input.files = dt.files
      setFileName(file.name)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    if (!consent) {
      setError("Bitte stimmen Sie der Datenverarbeitung zu.")
      return
    }

    setLoading(true)
    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      formData.set("topic", topic)
      formData.set("requestType", requestType)
      if (preferredContact) formData.set("preferredContact", preferredContact)
      if (callbackTime) formData.set("callbackTime", callbackTime)

      const file = formData.get("file") as File | null
      if (file && file.size > 8 * 1024 * 1024) {
        throw new Error("Datei ist größer als 8 MB.")
      }

      const res = await fetch("/api/contact", { method: "POST", body: formData })
      const data: ApiResponse = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || "Senden fehlgeschlagen")

      setSubmitted(true)
      form.reset()
      setTopic("")
      setRequestType("")
      setPreferredContact("")
      setCallbackTime("")
      setFileName(null)
      setConsent(false)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unerwarteter Fehler"
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700">Kontakt</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-10 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand md:text-4xl">Kontaktieren Sie uns</h1>
          <p className="mt-4 text-zinc-600">
            Ob Beratung zu Fenstern, Haustüren, Rollläden/Raffstoren (ROMA) oder Service – wählen Sie Ihr Anliegen, wir melden uns zeitnah.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-light">
              Telefon: {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
              E-Mail: {SITE.email}
            </a>
          </div>

          {/* Schnellauswahl */}
          <div className="mt-6">
            <div className="text-sm font-semibold text-brand">Schnellauswahl Thema</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {TOPIC_PRESETS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTopic(t)}
                  className={`px-3 py-1 text-sm border ${topic === t ? "border-brand-dark text-brand-dark" : "border-zinc-300 text-zinc-700"} hover:bg-brand-light`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4:3 Hero-Bild (kantig) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-zinc-200 bg-brand-light">
          <Image
            src="/images/kontakt/kontakt-hero-4x3.webp"
            alt="Beratung und Kontakt – Ansprechpartner am Telefon und per E-Mail"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={false}
          />
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        {/* Formular */}
        <section aria-labelledby="kontaktformular">
          {submitted ? (
            <div className="border border-zinc-200 bg-brand-light p-8 text-center" role="status" aria-live="polite">
              <h2 id="kontaktformular" className="text-2xl font-bold text-brand">Vielen Dank!</h2>
              <p className="mt-3 text-zinc-700">Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns zeitnah.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-zinc-200 bg-white p-8 shadow-sm"
              aria-labelledby="kontaktformular"
              aria-describedby={error ? "form-error" : undefined}
            >
              <h2 id="kontaktformular" className="text-xl font-semibold text-brand">Kontaktformular</h2>
              <p className="mt-2 text-sm text-zinc-600">Bitte füllen Sie das Formular aus, damit wir Ihr Anliegen schnell bearbeiten können.</p>

              {/* Fehlermeldung */}
              {error && (
                <p id="form-error" className="mt-4 bg-red-50 p-3 text-sm text-red-700" role="alert" aria-live="assertive">
                  {error}
                </p>
              )}

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Thema *</label>
                  <select
                    name="topic"
                    required
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm"
                  >
                    <option value="">Bitte wählen</option>
                    {TOPIC_PRESETS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700">Art der Anfrage *</label>
                  <select
                    name="requestType"
                    required
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm"
                  >
                    <option value="">Bitte wählen</option>
                    {REQUEST_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700">Name *</label>
                  <input name="name" type="text" required className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700">Telefon *</label>
                  <input name="phone" type="tel" required className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700">E-Mail *</label>
                  <input name="email" type="email" required className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700">Adresse / PLZ</label>
                  <input name="address" type="text" className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700">Nachricht</label>
                  <textarea name="message" rows={4} className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm" />
                </div>

                {/* Bevorzugter Kontakt & Rückrufzeit */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Bevorzugte Kontaktart</label>
                  <select
                    name="preferredContact"
                    value={preferredContact}
                    onChange={(e) => setPreferredContact(e.target.value as typeof preferredContact)}
                    className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm"
                  >
                    <option value="">egal</option>
                    <option>Telefon</option>
                    <option>E-Mail</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700">Gewünschte Rückrufzeit</label>
                  <select
                    name="callbackTime"
                    value={callbackTime}
                    onChange={(e) => setCallbackTime(e.target.value)}
                    className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm"
                  >
                    <option value="">egal</option>
                    <option>Vormittags (09–12 Uhr)</option>
                    <option>Nachmittags (12–16 Uhr)</option>
                    <option>Abends (16–19 Uhr)</option>
                  </select>
                </div>

                {/* Datei-Upload mit Drag&Drop */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700">Datei-Upload (optional, max. 8 MB)</label>
                  <label
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDropFile}
                    className="mt-1 flex cursor-pointer items-center justify-between border border-dashed border-zinc-300 px-3 py-3 text-sm text-zinc-700"
                  >
                    <span>{fileName ? `Ausgewählt: ${fileName}` : "Datei hierher ziehen oder klicken"}</span>
                    <input name="file" type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)} />
                  </label>
                </div>

                {/* Honeypot */}
                <div className="hidden">
                  <label>Firma</label>
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                {/* DSGVO */}
                <div className="md:col-span-2">
                  <label className="flex items-start gap-2 text-sm text-zinc-700">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1"
                      aria-required="true"
                    />
                    <span>
                      Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für mögliche Rückfragen dauerhaft gespeichert werden.
                      Weitere Informationen in der <Link href="/datenschutz" className="text-brand hover:underline">Datenschutzerklärung</Link>.
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
                  aria-busy={loading}
                >
                  {loading ? "Wird gesendet …" : "Anfrage absenden"}
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Leitfaden-Spalte */}
        <aside className="space-y-6">
          <div className="border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-brand">Schnell zum Angebot – so geht’s</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Je genauer Ihre Unterlagen, desto schneller erhalten Sie ein qualifiziertes Angebot. Diese Angaben helfen uns besonders:
            </p>

            {/* Neubau */}
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-zinc-900">Neubau</h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-zinc-300">✓</span>
                  <span><strong>Pläne des Hauses:</strong> Grundrisse <em>jeder Etage</em></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-zinc-300">✓</span>
                  <span><strong>Schnittzeichnung:</strong> Deckenhöhen und Fußbodenaufbau erkennbar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-zinc-300">✓</span>
                  <span><strong>Wunschfarbe:</strong> z. B. RAL (optional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-zinc-300">ℹ</span>
                  <span>Am liebsten: Pläne senden – den Rest klären wir <strong>telefonisch oder persönlich</strong>.</span>
                </li>
              </ul>
            </div>

            {/* Altbau */}
            <div className="mt-6 border-t border-zinc-200 pt-5">
              <h3 className="text-sm font-semibold text-zinc-900">Altbau</h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-zinc-300">✓</span>
                  <span><strong>Laibungsmaße je Fenster:</strong> Öffnungsbreite sowie Höhe <em>vom Boden/Fensterbank bis zum Rollladenkastendeckel</em></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-zinc-300">✓</span>
                  <span><strong>Fotos:</strong> je 2–3 Bilder <em>von innen und außen</em></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center border border-zinc-300">ℹ</span>
                  <span>Details besprechen wir bevorzugt <strong>telefonisch oder persönlich</strong>.</span>
                </li>
              </ul>
            </div>

            <p className="mt-5 text-xs text-zinc-500">
              Dateiformate: PDF, JPG, WebP. Max. Upload im Formular: 8&nbsp;MB. Bei größeren Dateien gern per E-Mail.
            </p>
          </div>

          {/* Optionaler Hinweis */}
          <div className="border border-zinc-200 bg-white p-6">
            <h3 className="text-sm font-semibold text-zinc-900">Tipp</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Benennen Sie Dateien aussagekräftig, z. B. <code>EG-grundriss.pdf</code>, <code>schnitt_hoehen.pdf</code>, <code>fenster_wohnzimmer_aussen.jpg</code>.
              So können wir Ihr Anliegen schneller zuordnen.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
