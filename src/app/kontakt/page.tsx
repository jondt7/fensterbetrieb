// src/app/kontakt/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { SITE } from "@/data/site.config"

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      type ApiResponse = { ok: boolean; error?: string }
      const data: ApiResponse = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Senden fehlgeschlagen")
      }

      setSubmitted(true)
      form.reset()
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
            Ob Beratung zu neuen Fenstern, Haustüren, Rollläden oder Service – wählen Sie Ihr Anliegen und wir melden uns zeitnah.
          </p>
          <div className="mt-6 space-y-2">
            <a href={`tel:${SITE.phone}`} className="block text-lg font-semibold text-brand hover:underline">
              Telefon: {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="block text-lg font-semibold text-brand hover:underline">
              E-Mail: {SITE.email}
            </a>
          </div>
        </div>
        <div className="h-64 w-full bg-brand-light md:h-auto" />
      </header>

      {/* Formular */}
      {submitted ? (
        <div className="bg-brand-light p-8 text-center">
          <h2 className="text-2xl font-bold text-brand">Vielen Dank!</h2>
          <p className="mt-3 text-zinc-700">Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns zeitnah.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-brand">Kontaktformular</h2>
          <p className="mt-2 text-sm text-zinc-600">Bitte füllen Sie das Formular aus, damit wir Ihr Anliegen schnell bearbeiten können.</p>

          {/* Fehlermeldung */}
          {error && <p className="mt-4 bg-red-50 p-3 text-sm text-red-700">{error}</p>}

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-zinc-700">Thema *</label>
              <select name="topic" required className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm">
                <option value="">Bitte wählen</option>
                <option>Fenster (Aluminium)</option>
                <option>Fenster (Kunststoff)</option>
                <option>Haustüren (Inotherm)</option>
                <option>Rollladen & Raffstore (Roma)</option>
                <option>Garagentore (Wiśniowski)</option>
                <option>Service / Reparatur</option>
                <option>Sonstiges</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700">Art der Anfrage *</label>
              <select name="requestType" required className="mt-1 w-full border border-zinc-300 px-3 py-2 text-sm">
                <option value="">Bitte wählen</option>
                <option>Beratung / Angebot</option>
                <option>Reparatur / Wartung</option>
                <option>Rückruf</option>
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

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-zinc-700">Datei-Upload (optional, max. 8 MB)</label>
              <input name="file" type="file" className="mt-1 block w-full text-sm text-zinc-600" />
            </div>

            {/* Honeypot (unsichtbar für echte Nutzer) */}
            <div className="hidden">
              <label>Firma</label>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
            >
              {loading ? "Wird gesendet …" : "Anfrage absenden"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
