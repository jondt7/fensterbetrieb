// src/app/einzugsgebiet/page.tsx
import Link from "next/link"
import { CITIES } from "@/data/cities"

export const metadata = {
  title: "Einzugsgebiet & Service-Städte",
  description:
    "Beratung, Aufmaß, Montage im Umkreis von ca. 100 km ab Düren. Wählen Sie Ihre Stadt für Leistungen, Referenzen und Kontakt.",
}

export default function EinzugsgebietOverviewPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Start</Link></li>
          <li aria-hidden>/</li>
          <li className="text-zinc-700">Einzugsgebiet</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-brand md:text-4xl">Einzugsgebiet & Service-Städte</h1>
        <p className="mt-3 max-w-3xl text-zinc-600">
          Wir sind in einem Radius von ca. 100&nbsp;km ab Düren für Sie unterwegs. Wählen Sie Ihre Stadt
          für individuelle Informationen und eine schnelle Terminvereinbarung.
        </p>
      </header>

      {/* City grid */}
      <section className="grid gap-4 md:grid-cols-3">
        {CITIES.map((c) => (
          <Link
            key={c.slug}
            href={`/einzugsgebiet/${c.slug}`}
            className="rounded-[8px] border border-zinc-200 bg-white p-5 transition hover:shadow-sm"
          >
            <div className="flex items-center gap-2">
              {c.isHQ && <span className="rounded-[8px] bg-brand px-2 py-0.5 text-xs font-semibold text-white">Hauptstandort</span>}
              <div className="text-lg font-semibold text-brand">{c.name}</div>
            </div>
            <div className="mt-1 text-sm text-zinc-600">{c.intro}</div>
          </Link>
        ))}
      </section>
    </div>
  )
}
