// src/components/SiteHeader.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { SITE } from "@/data/site.config"

type Item = { label: string; href: string; desc?: string }
type Group = { title: string; items: Item[] }

const PRODUCTS: Group[] = [
  {
    title: "Fenster",
    items: [
      { label: "Übersicht", href: "/produkte/fenster" },
      { label: "Aluminium", href: "/produkte/fenster/aluminium" },
      { label: "Kunststoff", href: "/produkte/fenster/kunststoff" },
      { label: "LivIng 82 AS", href: "/produkte/fenster/kunststoff/living-82-as" },
      { label: "LivIng 82 MD", href: "/produkte/fenster/kunststoff/living-82-md" },
      { label: "Beschlag & Sicherheit", href: "/produkte/fenster/beschlag-sicherheit" },
      { label: "Verglasung (Übersicht)", href: "/produkte/fenster/verglasung" },
      { label: "– Wärmeschutz", href: "/produkte/fenster/verglasung/waermeschutz" },
      { label: "– Schallschutz", href: "/produkte/fenster/verglasung/schallschutz" },
      { label: "– Sicherheitsglas", href: "/produkte/fenster/verglasung/sicherheitsglas" },
    ],
  },
  {
    title: "Sonnenschutz",
    items: [
      { label: "Übersicht", href: "/produkte/sonnenschutz" },
      { label: "Rollladen (Übersicht)", href: "/produkte/sonnenschutz/rollladen" },
      { label: "– Aufsatzrollladen", href: "/produkte/sonnenschutz/rollladen/aufsatz" },
      { label: "– Vorbaurollladen", href: "/produkte/sonnenschutz/rollladen/vorbau" },
      { label: "Raffstoren (Übersicht)", href: "/produkte/sonnenschutz/raffstoren" },
      { label: "– Lamellen-Details", href: "/produkte/sonnenschutz/raffstoren/lamellen" },
      { label: "– Aufsatzraffstoren", href: "/produkte/sonnenschutz/raffstoren/aufsatz" },
      { label: "– Vorbauraffstoren", href: "/produkte/sonnenschutz/raffstoren/vorbau" },
    ],
  },
  {
    title: "Haustüren",
    items: [
      { label: "Übersicht", href: "/produkte/haustueren" },
      { label: "InoSmart", href: "/produkte/haustueren/inosmart" },
      { label: "Griffe", href: "/produkte/haustueren/griffe" },
      { label: "Sicherheit & Schlösser", href: "/produkte/haustueren/sicherheit-und-schliessung" },
      { label: "Verglasung", href: "/produkte/haustueren/verglasung" },
    ],
  },
  {
    title: "Garagentore",
    items: [{ label: "Sektionaltore", href: "/produkte/garagentore/sektionaltore" }],
  },
]

// nur die notwendigen Top-Links
const TOP_NAV = [
  { label: "Einzugsgebiet", href: "/einzugsgebiet" },
  { label: "Kontakt", href: "/kontakt" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export function SiteHeader() {
  const pathname = usePathname()
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setProductsOpen(false) }
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return
      if (productsOpen && !panelRef.current.contains(e.target as Node) && !btnRef.current?.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [productsOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/20 bg-brand text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="text-lg font-bold tracking-tight">{SITE.brand}</Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              ref={btnRef}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen(v => !v)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:text-brand-light"
            >
              Produkte
            </button>

            {/* Mega Panel – poliert */}
            <div
              ref={panelRef}
              className={[
                "pointer-events-auto absolute left-1/2 top-full z-50 w-[92vw] -translate-x-1/2 md:w-auto",
                productsOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1",
                "transition-all duration-150 ease-out",
              ].join(" ")}
            >
              <div className="mx-auto max-w-6xl rounded-b-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 text-zinc-800 shadow-2xl ring-1 ring-black/5">
                <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[1fr_1fr_1fr_260px]">
                  {PRODUCTS.map((group) => (
                    <div key={group.title} className="px-1">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-brand/80">{group.title}</div>
                      <ul className="mt-3 space-y-0.5">
                        {group.items.map((it) => (
                          <li key={it.href}>
                            <Link
                              href={it.href}
                              className="block rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-brand-light/60 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                              onClick={() => setProductsOpen(false)}
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* CTA-Spalte */}
                  <div className="rounded-xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                    <div className="text-sm font-semibold text-brand">Schnellzugriff</div>
                    <p className="mt-1 text-xs text-zinc-700">Produkte im Überblick oder direkt Kontakt aufnehmen.</p>
                    <div className="mt-3 flex flex-col gap-2">
                      <Link
                        href="/produkte"
                        className="rounded-lg border border-brand px-3 py-2 text-sm font-semibold text-brand hover:bg-white"
                        onClick={() => setProductsOpen(false)}
                      >
                        Produkte – Übersicht
                      </Link>
                      <Link
                        href="/kontakt"
                        className="rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
                        onClick={() => setProductsOpen(false)}
                      >
                        Kontakt / Angebot
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {TOP_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-md px-3 py-2 text-sm font-medium",
                isActive(pathname, item.href) ? "underline decoration-brand-light" : "hover:text-brand-light",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop-CTA */}
        <div className="hidden md:block">
          <a href={`tel:${SITE.phone}`} className="rounded-xl bg-brand-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
            Anrufen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Menü öffnen"
          onClick={() => setMobileOpen(v => !v)}
          className="inline-flex items-center rounded-md border border-white/30 px-3 py-2 text-sm md:hidden"
        >
          Menü
        </button>
      </div>

      {/* Mobile-Menü */}
      {mobileOpen && (
        <div className="border-t border-brand/20 bg-white text-zinc-800 md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-3">
            <details open className="group">
              <summary className="cursor-pointer list-none rounded-md px-2 py-2 text-sm font-semibold text-brand">
                Produkte
              </summary>
              <div className="mt-2 space-y-4">
                {PRODUCTS.map((g) => (
                  <div key={g.title}>
                    <div className="px-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">{g.title}</div>
                    <ul className="mt-2">
                      {g.items.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-2 py-2 text-sm hover:bg-brand-light hover:text-brand"
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>

            <ul className="mt-4 space-y-1">
              <li><Link href="/einzugsgebiet" onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-2 text-sm font-medium hover:bg-brand-light hover:text-brand">Einzugsgebiet</Link></li>
              <li><Link href="/kontakt" onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-2 text-sm font-medium hover:bg-brand-light hover:text-brand">Kontakt</Link></li>
              <li className="pt-2">
                <a href={`tel:${SITE.phone}`} onClick={() => setMobileOpen(false)} className="block rounded-xl bg-brand px-3 py-2 text-center text-sm font-semibold text-white">
                  Anrufen
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
