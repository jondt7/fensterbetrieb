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
    items: [{ label: "Sektionaltore", href: "/produkte/garagentore/sektionaltore" }],
  },
]

// Top-Links (inkl. „Leistungen“)
const TOP_NAV: Item[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Einzugsgebiet", href: "/einzugsgebiet" },
  { label: "Kontakt", href: "/kontakt" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

/** --- Einfache Inline-Icons (kein zusätzliches Paket notwendig) --- */
function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function IconChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" {...props}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}
function IconChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" {...props}>
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}
function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22" {...props}>
      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/** --- Mobile-Menü: hierarchische Struktur --- */
type MobileMenuItem = {
  label: string
  href?: string
  children?: MobileMenuItem[]
}

// Manuell kuratierte Produkt-Hierarchie für mobile Navigation
const MOBILE_PRODUCTS: MobileMenuItem[] = [
  {
    label: "Fenster",
    href: "/produkte/fenster",
    children: [
      { label: "Aluminium", href: "/produkte/fenster/aluminium" },
      {
        label: "Kunststoff",
        href: "/produkte/fenster/kunststoff",
        children: [
          { label: "LivIng 82 AS", href: "/produkte/fenster/kunststoff/living-82-as" },
          { label: "LivIng 82 MD", href: "/produkte/fenster/kunststoff/living-82-md" },
        ],
      },
      { label: "Beschlag & Sicherheit", href: "/produkte/fenster/beschlag-sicherheit" },
      {
        label: "Verglasung",
        href: "/produkte/fenster/verglasung",
        children: [
          { label: "Wärmeschutz", href: "/produkte/fenster/verglasung/waermeschutz" },
          { label: "Schallschutz", href: "/produkte/fenster/verglasung/schallschutz" },
          { label: "Sicherheitsglas", href: "/produkte/fenster/verglasung/sicherheitsglas" },
        ],
      },
    ],
  },
  {
    label: "Sonnenschutz",
    href: "/produkte/sonnenschutz",
    children: [
      {
        label: "Rollladen",
        href: "/produkte/sonnenschutz/rollladen",
        children: [
          { label: "Aufsatzrollladen", href: "/produkte/sonnenschutz/rollladen/aufsatz" },
          { label: "Vorbaurollladen", href: "/produkte/sonnenschutz/rollladen/vorbau" },
        ],
      },
      {
        label: "Raffstoren",
        href: "/produkte/sonnenschutz/raffstoren",
        children: [
          { label: "Lamellen-Details", href: "/produkte/sonnenschutz/raffstoren/lamellen" },
          { label: "Aufsatzraffstoren", href: "/produkte/sonnenschutz/raffstoren/aufsatz" },
          { label: "Vorbauraffstoren", href: "/produkte/sonnenschutz/raffstoren/vorbau" },
        ],
      },
    ],
  },
  {
    label: "Haustüren",
    href: "/produkte/haustueren",
    children: [
      { label: "InoSmart", href: "/produkte/haustueren/inosmart" },
      { label: "Griffe", href: "/produkte/haustueren/griffe" },
      { label: "Sicherheit & Schlösser", href: "/produkte/haustueren/sicherheit-und-schliessung" },
      { label: "Verglasung", href: "/produkte/haustueren/verglasung" },
    ],
  },
  {
    label: "Garagentore",
    href: "/produkte/garagentore/sektionaltore",
    children: [{ label: "Sektionaltore", href: "/produkte/garagentore/sektionaltore" }],
  },
]

// Root-Ebene mobil: nur Hauptseiten wie auf Desktop
const MOBILE_ROOT: MobileMenuItem[] = [
  { label: "Produkte", children: MOBILE_PRODUCTS },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Einzugsgebiet", href: "/einzugsgebiet" },
  { label: "Kontakt", href: "/kontakt" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Hierarchiepfad für das mobile Menü (Breadcrumb-Stapel)
  const [mobilePath, setMobilePath] = useState<MobileMenuItem[]>([])

  const panelRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  // Bei Routenwechsel Menüs schließen & mobilen Pfad resetten
  useEffect(() => {
    setProductsOpen(false)
    setMobileOpen(false)
    setMobilePath([])
  }, [pathname])

  // ESC & Outside-Click fürs Mega-Menü
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setProductsOpen(false)
        setMobileOpen(false)
        setMobilePath([])
      }
    }
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return
      if (
        productsOpen &&
        !panelRef.current.contains(e.target as Node) &&
        !btnRef.current?.contains(e.target as Node)
      ) {
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

  // Body-Scroll sperren, wenn Mobile-Menü offen
  useEffect(() => {
    const original = document.documentElement.style.overflow
    if (mobileOpen) document.documentElement.style.overflow = "hidden"
    else document.documentElement.style.overflow = original
    return () => {
      document.documentElement.style.overflow = original
    }
  }, [mobileOpen])

  // Aktuelle Ebene und Titel für das mobile Menü
  const currentItems: MobileMenuItem[] =
    mobilePath.length === 0 ? MOBILE_ROOT : mobilePath[mobilePath.length - 1].children ?? []
  const currentTitle = mobilePath.length === 0 ? "Menü" : mobilePath[mobilePath.length - 1].label

  function openMobile() {
    setMobileOpen(true)
    setMobilePath([]) // immer auf Root starten
  }

  function closeMobile() {
    setMobileOpen(false)
    setMobilePath([])
  }

  function goDeeper(item: MobileMenuItem) {
    if (item.children && item.children.length > 0) {
      setMobilePath((p) => [...p, item])
    }
  }

  function goBack() {
    setMobilePath((p) => p.slice(0, -1))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-primary text-primary-foreground">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" aria-label={SITE.brand} className="flex items-center">
          <Image
            src="/branding/logo-light.svg"
            alt={`${SITE.brand} – Logo`}
            width={400}
            height={80}
            className="w-[180px] md:w-[220px] lg:w-[260px] h-auto"
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
              onClick={() => setProductsOpen((v) => !v)}
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
                productsOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none",
                "transition-all duration-150 ease-out",
              ].join(" ")}
            >
              <div className="mx-auto border border-border bg-background text-foreground shadow">
                <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[1fr_1fr_1fr_260px]">
                  {PRODUCTS.map((group) => (
                    <div key={group.title}>
                      <Link
                        href={group.overview}
                        className="text-[11px] font-semibold uppercase tracking-wider hover:text-primary"
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
                                isActive(pathname, it.href)
                                  ? "underline underline-offset-4"
                                  : "hover:bg-muted hover:text-primary",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                              ].join(" ")}
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
                    <p className="mt-1 text-xs opacity-80">
                      Produkte im Überblick oder direkt Kontakt aufnehmen.
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <Link
                        href="/produkte"
                        className="border border-primary px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-light hover:text-primary-foreground"
                      >
                        Produkte – Übersicht
                      </Link>
                      <Link
                        href="/kontakt"
                        className="bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
                      >
                        Kontakt / Angebot
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weitere Punkte (inkl. Leistungen) */}
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

        {/* Mobile Toggle: Burger-Icon ohne Umrandung */}
        <button
          aria-label="Menü öffnen"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => (mobileOpen ? closeMobile() : openMobile())}
          className="inline-flex items-center p-2 rounded md:hidden hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="sr-only">Menü</span>
          <IconMenu />
        </button>
      </div>

      {/* Mobile-Menü: fixed Overlay, hierarchische Navigation */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-x-0 top-16 bottom-0 z-[60] overflow-y-auto border-t border-border bg-background text-foreground md:hidden"
        >
          {/* Kopfzeile mit Zurück/Schließen */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-2 py-2 backdrop-blur">
            <div className="flex items-center gap-1">
              {mobilePath.length > 0 ? (
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-1 rounded px-2 py-1 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <IconChevronLeft />
                  <span>Zurück</span>
                </button>
              ) : (
                <span className="px-2 py-1 text-sm opacity-0">Zurück</span> // Platzhalter für Zentrierung
              )}
            </div>
            <div className="text-sm font-semibold">{currentTitle}</div>
            <button
              onClick={closeMobile}
              aria-label="Menü schließen"
              className="inline-flex items-center rounded p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <IconX />
            </button>
          </div>

          <nav className="container py-2" aria-label="Mobile Navigation">
            <ul className="divide-y divide-border">
              {currentItems.map((it) => {
                const isSubmenu = !!it.children && it.children.length > 0

                // Fall 1: Hat Untermenü UND eine eigene Seite -> Link (links) + Pfeil-Button (rechts)
                if (isSubmenu && it.href) {
                  return (
                    <li key={it.label}>
                      <div className="flex items-stretch">
                        <Link
                          href={it.href}
                          onClick={closeMobile}
                          className="flex-1 px-2 py-3 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <span className="font-medium">{it.label}</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => goDeeper(it)}
                          aria-label={`${it.label} Untermenü öffnen`}
                          className="px-2 py-3 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <IconChevronRight />
                        </button>
                      </div>
                    </li>
                  )
                }

                // Fall 2: Hat Untermenü, aber keine eigene Seite -> gesamte Zeile ist Button ins Untermenü
                if (isSubmenu && !it.href) {
                  return (
                    <li key={it.label}>
                      <button
                        type="button"
                        onClick={() => goDeeper(it)}
                        className="flex w-full items-center justify-between px-2 py-3 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-haspopup="true"
                        aria-label={`${it.label} öffnen`}
                      >
                        <span className="font-medium">{it.label}</span>
                        <IconChevronRight />
                      </button>
                    </li>
                  )
                }

                // Fall 3: Reiner Link (kein Untermenü)
                return (
                  <li key={it.href ?? it.label}>
                    <Link
                      href={it.href ?? "#"}
                      onClick={closeMobile}
                      className="flex items-center justify-between px-2 py-3 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="font-medium">{it.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* CTA unten */}
            <div className="mt-4">
              <a
                href={`tel:${SITE.phone}`}
                onClick={closeMobile}
                className="block bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Anrufen
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
