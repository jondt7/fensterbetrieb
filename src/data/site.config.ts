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
    brand: "Meylen",
    phone: "+49 173 5490084",
    email: "info@meylen.de",
    address: {
      street: "Rurstraße 57",
      zip: "52349",
      city: "Düren",
      country: "DE",
    },
    openingHours: ["Mo–Fr 08:00–17:00"],
    serviceArea: "Düren + 100 km Umkreis",
    socials: {
      google: "https://maps.google.com/?cid=...", // optional
      instagram: "",
      facebook: "",
      youtube: "",
    },
    seo: {
      siteUrl: "https://www.meylen.de",
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
      companyLegalName: "Meylen Fenster & Türen",
      representative: "John Neufeldt",
      registerInfo: "HRB 00000, Amtsgericht Musterstadt",
      vatId: "DE453260541",
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
  