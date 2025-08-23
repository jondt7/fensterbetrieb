// src/data/cities.ts
export type City = {
    slug: string
    name: string
    intro: string
    isHQ?: boolean
    neighborhoods?: string[]
  }
  
  export const CITIES: City[] = [
    {
      slug: "dueren",
      name: "Düren",
      intro: "Hauptstandort: Beratung, Ausstellung, Aufmaß & Montage durch unser eigenes Team.",
      isHQ: true,
    },
    {
      slug: "koeln",
      name: "Köln",
      intro: "Schüco Fenster & ROMA Sonnenschutz für Stadtlagen – Fokus auf Schallschutz, Design und Energieeffizienz.",
      neighborhoods: ["Sülz", "Nippes", "Ehrenfeld", "Rodenkirchen"],
    },
    {
      slug: "neuss",
      name: "Neuss",
      intro: "Energetische Modernisierung im Bestand, robuste Lösungen für Mehrfamilienhäuser & Eigentümergemeinschaften.",
    },
    {
      slug: "duesseldorf",
      name: "Düsseldorf",
      intro: "Designorientierte Aluminiumlösungen, verdeckte Beschläge, große Glasflächen und Premium-Haustüren.",
    },
    {
      slug: "euskirchen",
      name: "Euskirchen",
      intro: "Sanierung & Neubau mit Schwerpunkt Wärmeschutz, komfortable Steuerungen und langlebige Materialien.",
    },
    {
      slug: "bad-muenstereifel",
      name: "Bad Münstereifel",
      intro: "Sanierung historischer Bausubstanz: Denkmalschutz, schmale Ansichten und unauffällige Sicherheitslösungen.",
    },
    {
      slug: "bonn",
      name: "Bonn",
      intro: "Schallschutz an Hauptverkehrsstraßen, hochwertige Aluminium-Haustüren mit InoSmart & Motorschloss.",
    },
    {
      slug: "kerpen",
      name: "Kerpen",
      intro: "Familienhäuser & Anbauten: Kunststoff LivIng 82 AS/MD, RC2-Pakete und pflegeleichte Oberflächen.",
    },
    {
      slug: "huerth",
      name: "Hürth",
      intro: "Energie & Komfort: ROMA Raffstoren/Textilscreens, Automatik per Sonnen-/Windsensor und App.",
    },
    {
      slug: "aachen",
      name: "Aachen",
      intro: "Energetische Sanierung im Bestand, Schallschutz nahe Verkehrsachsen, großformatige Alu-Fenster.",
    },
  ]
  