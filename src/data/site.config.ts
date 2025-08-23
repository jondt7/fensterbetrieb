// src/data/site.config.ts

export type Address = {
    street: string
    zip: string
    city: string
    country: "DE" | string
  }
  
  export type SiteConfig = {
    brand: string
    phone: string
    email: string
    address: Address
    openingHours: string[]
    serviceArea: string
    socials: {
      google?: string
      instagram?: string
      facebook?: string
      youtube?: string
    }
    seo: {
      siteUrl: string
      defaultTitle: string
      defaultDescription: string
    }
    theme: {
      primary: string // Akzentfarbe (Grün)
      base?: "zinc" | "neutral" | "gray" | "stone" | "slate"
    }
    legal: {
      companyLegalName: string // z. B. Muster Fensterbau GmbH
      representative?: string  // Geschäftsführer
      registerInfo?: string    // HRB / Amtsgericht (optional)
      vatId?: string           // USt-IdNr. (optional)
    }
  }
  
  export const SITE: SiteConfig = {
    brand: "Ihr Fensterbetrieb",
    phone: "+49 000 0000000",
    email: "info@beispiel.de",
    address: {
      street: "Beispielstraße 1",
      zip: "12345",
      city: "Musterstadt",
      country: "DE",
    },
    openingHours: ["Mo–Fr 08:00–17:00"],
    serviceArea: "Musterstadt + 40 km Umkreis",
    socials: {
      google: "https://maps.google.com/?cid=...", // optional
      instagram: "",
      facebook: "",
      youtube: "",
    },
    seo: {
      siteUrl: "https://www.ihre-domain.de",
      defaultTitle:
        "Fenster, Haustüren, Sonnenschutz & Garagentore",
      defaultDescription:
        "Beratung, Aufmaß, Montage & Service. Schüco Fenster (Alu & Kunststoff), Inotherm Haustüren, ROMA Rollladen & Raffstore, WIŚNIOWSKI Sektionaltore.",
    },
    theme: {
      primary: "#16a34a", // Akzentgrün
      base: "zinc",
    },
    legal: {
      companyLegalName: "Ihr Fensterbetrieb Muster GmbH",
      representative: "Max Mustermann",
      registerInfo: "HRB 00000, Amtsgericht Musterstadt",
      vatId: "DE000000000",
    },
  } as const
  
  /**
   * Hilfswerte für Local SEO, z. B. City-Pages und strukturierte Daten.
   * Können wir später per CMS/JSON befüllen.
   */
  export const SERVICE_CITIES: { slug: string; name: string }[] = [
    { slug: "musterstadt", name: "Musterstadt" },
    { slug: "stadtteil-nord", name: "Stadtteil Nord" },
    { slug: "beispielhausen", name: "Beispielhausen" },
  ]
  
  /**
   * Hersteller/Produkte für Navigation & Schema.org (später für Sitemaps/Meta).
   */
  export const BRANDS = {
    windows: {
      vendor: "Schüco",
      materials: ["Aluminium", "Kunststoff"],
    },
    doors: {
      vendor: "Inotherm",
      type: "Aluminium-Haustüren",
    },
    shading: {
      vendor: "ROMA",
      types: ["Rollladen", "Raffstoren"],
    },
    garage: {
      vendor: "WIŚNIOWSKI",
      types: ["Sektionaltore"],
    },
  } as const
  