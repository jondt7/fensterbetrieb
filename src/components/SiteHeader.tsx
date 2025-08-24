// src/components/SiteHeader.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { SITE } from "@/data/site.config"

type Item = { label: string; href: string; desc?: string }
type Group = { title: string; overview: string; items: Item[] }

const PRODUCTS: Group[] = [
  {
    title: "Fenster",
    overview: "/produkte/fenster",
    items: [
      { label: "Aluminium", href: "/produkte/fenster/aluminium" },
      { label: "Kunststoff", href: "/produkte/fenster/kunststoff" },
      { label: "LivIng 82 AS", href: "/produkte/fenster/kunststoff/living-82-as" },
      { label: "LivIng 82 MD", href: "/produkte/fenster/kunststoff/living-82-md" },
      { label: "Beschlag & Sicherheit", href: "/produkte/fenster/beschlag-sicherheit" },
      { label: "Verglasung – Übersicht", href: "/produkte/fenster/verglasung" },
      { label: "– Wärmeschutz", href: "/produkte/fenster/verglasung/waermeschutz" },
      { label: "– Schallschutz", href: "/produkte/fenster/verglasung/schallschutz" },
      { label: "– Sicherheitsglas", href: "/produkte/fenster/verglasung/sicherheitsglas" },
    ],
  },
  {
    title: "Sonnenschutz",
    overview: "/produkte/sonnenschutz",
    items: [
      { label: "Rollladen – Übersicht", href: "/produkte/sonnenschutz/rollladen" },
      { label: "– Aufsatzrollladen", href: "/produkte/sonnenschutz/rollladen/aufsatz" },
      { label: "– Vorbaurollladen", href: "/produkte/sonnenschutz/rollladen/vorbau" },
      { label: "Raffstoren – Übersicht", href: "/produkte/sonnenschutz/raffstoren" },
      { label: "– Lamellen-Details", href: "/produkte/sonnenschutz/raffstoren/lamellen" },
      { label: "– Aufsatzraffstoren", href: "/produkte/sonnenschutz/raffstoren/aufsatz" },
      { label: "– Vorbauraffstoren", href: "/produkte/sonnenschutz/raffstoren/vorbau" },
    ],
  },
  {
    title: "Haustüren",
    overview: "/produkte/haustueren",
    items: [
      { label: "InoSmart", href: "/produkte/haustueren/inosmart" },
      { label: "Griffe", href: "/produkte/haustueren/griffe" },
      { label: "Sicherheit & Schlösser", href: "/produkte/haustueren/sicherheit-und-schliessung" },
      { label: "Verglasung", href: "/produkte/haustueren/verglasung" },
    ],
  },
  {
    title: "Garagentore",
    overview: "/produkte/garagentore/sektionaltore",
    items: [
      { label: "Sektionaltore", href: "/produkte/garagentore/sektionaltore" },
    ],
  },
]

// Top-Links
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
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setProductsOpen(false)
        setMobileOpen(false)
      }
    }
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" aria-label={SITE.brand} className="flex items-center">
          <Image
            src="/branding/logo-light.svg"
            alt={`${SITE.brand} – Logo`}
            width={280}
            height={56}
            className="h-14 w-auto md:h-16"
            priority
          />
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Hauptnavigation">
          {/* Produkte (Mega-Menü) */}
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
              className={[
                "px-3 py-2 text-sm font-medium",
                productsOpen ? "underline underline-offset-4" : "hover:text-primary-light",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              ].join(" ")}
            >
              Produkte
            </button>

            {/* Mega-Panel */}
            <div
              ref={panelRef}
              className={[
                "absolute left-1/2 top-full z-50 w-[92vw] -translate-x-1/2 md:w-[960px]",
                productsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none",
                "transition-all duration-150 ease-out",
              ].join(" ")}
            >
              <div className="mx-auto border border-border bg-background text-foreground shadow">
                <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[1fr_1fr_1fr_260px]">
                  {PRODUCTS.map((group) => (
                    <div key={group.title}>
                      {/* Titel = Link zur Übersicht */}
                      <Link
                        href={group.overview}
                        className="text-[11px] font-semibold uppercase tracking-wider hover:text-primary"
                        onClick={() => setProductsOpen(false)}
                      >
                        {group.title}
                      </Link>

                      <ul className="mt-3 space-y-0.5">
                        {group.items.map((it) => (
                          <li key={it.href}>
                            <Link
                              href={it.href}
                              className={[
                                "block px-2 py-2 text-sm",
                                isActive(pathname, it.href) ? "underline underline-offset-4" : "hover:bg-muted hover:text-primary",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                              ].join(" ")}
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
                  <div className="border border-border bg-background p-4">
                    <div className="text-sm font-semibold text-primary">Schnellzugriff</div>
                    <p className="mt-1 text-xs opacity-80">Produkte im Überblick oder direkt Kontakt aufnehmen.</p>
                    <div className="mt-3 flex flex-col gap-2">
                      <Link
                        href="/produkte"
                        className="border border-primary px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-light hover:text-primary-foreground"
                        onClick={() => setProductsOpen(false)}
                      >
                        Produkte – Übersicht
                      </Link>
                      <Link
                        href="/kontakt"
                        className="bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
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
                "px-3 py-2 text-sm font-medium",
                isActive(pathname, item.href) ? "underline underline-offset-4" : "hover:text-primary-light",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop-CTA */}
        <div className="hidden md:block">
          <a
            href={`tel:${SITE.phone}`}
            className="bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Anrufen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Menü öffnen"
          onClick={() => setMobileOpen(v => !v)}
          className="inline-flex items-center border border-primary-foreground/40 px-3 py-2 text-sm md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Menü
        </button>
      </div>

      {/* Mobile-Menü */}
      {mobileOpen && (
        <div className="border-t border-border bg-background text-foreground md:hidden">
          <nav className="container py-3" aria-label="Mobile Navigation">
            <details open className="group">
              <summary className="cursor-pointer list-none px-2 py-2 text-sm font-semibold text-primary">
                Produkte
              </summary>

              <div className="mt-2 space-y-4">
                {PRODUCTS.map((g) => (
                  <div key={g.title}>
                    {/* Titel = Übersicht */}
                    <Link
                      href={g.overview}
                      onClick={() => setMobileOpen(false)}
                      className="block px-2 py-2 text-sm font-semibold hover:text-primary"
                    >
                      {g.title}
                    </Link>

                    <ul className="mt-1">
                      {g.items.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-2 py-2 text-sm hover:bg-muted hover:text-primary"
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
              <li>
                <Link
                  href="/einzugsgebiet"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 text-sm font-medium hover:bg-muted hover:text-primary"
                >
                  Einzugsgebiet
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 text-sm font-medium hover:bg-muted hover:text-primary"
                >
                  Kontakt
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={`tel:${SITE.phone}`}
                  onClick={() => setMobileOpen(false)}
                  className="block bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground"
                >
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
