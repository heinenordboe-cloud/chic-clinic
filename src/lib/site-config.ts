/**
 * Chic Clinic AS — eneste sted for merkevaretekst, priser og kontaktinfo.
 */

export type ServiceItem = {
  title: string;
  description: string;
  price: string | null;
  priceNote?: string;
};

export type ProductItem = {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
};

export type ReviewItem = {
  name: string;
  role?: string;
  rating: number;
  text: string;
};

/** Ekstra kompetansebokser under hovedsertifiseringene. */
export type QualificationBox = {
  title: string;
  body: string;
};

export const siteConfig = {
  name: "Chic Clinic AS",
  shortName: "CHIC",
  established: "2017",

  url: "https://chicclinic.no",

  tagline: "Din skjønnhet, min lidenskap",

  description:
    "Frisør og skjønnhet i Trondheim hos Ragnhild Katrine. Klipp, styling, vippeløft, microblading og microneedling. Book time på Timma.",

  email: "post@chicclinic.no",

  phoneDisplay: "+47 950 23 434",
  phoneTel: "+4795023434",

  address: {
    streetAddress: "Elgvegen 11",
    postalCode: "7021",
    city: "Trondheim",
    region: "Trøndelag",
    country: "NO",
    singleLine: "Elgvegen 11, 7021 Trondheim",
    parkingNote: "Gratis parkering ved salongen.",
  },

  owner: {
    firstName: "Ragnhild",
    fullName: "Ragnhild Katrine",
  },

  booking: {
    timmaUrl:
      "https://timma.no/salong/chic-clinic-as-removed-1585771537139-removed-1696322966728",
    label: "Book time",
  },

  images: {
    hero: "/images/chic-hero.jpeg",
    owner: "/images/chic-eier.jpeg",
    gallery: [
      {
        src: "/images/chic-styling.jpeg",
        alt: "Hårstyling og blow-dry hos Chic Clinic i Trondheim",
      },
      {
        src: "/images/chic-gallery-salong.jpeg",
        alt: "Farge og styling i salongen hos Chic Clinic i Trondheim",
      },
      {
        src: "/images/chic-bryllup-2.jpeg",
        alt: "Elegant bryllupslook — frisør og skjønnhet i Trondheim",
      },
    ],
  },

  /** Nøyaktig seks tjenester i denne rekkefølgen. */
  serviceItems: [
    {
      title: "Microneedling",
      description:
        "Profesjonell hudbehandling med fokus på glød og fornyelse. Kampanjepris inkluderer hjemmeserum.",
      price: "1 790,-",
      priceNote: "Kampanje · inkl. hjemmeserum · tidsbegrenset til juni",
    },
    {
      title: "Microblading",
      description:
        "Naturlige, vakre bryn med varig resultat. Utføres av sertifisert behandler.",
      price: "3 490,-",
      priceNote: "Refill 2 490,-",
    },
    {
      title: "Vippeløft",
      description:
        "Løft som åpner blikket — inkludert farge for et friskt, holdbart uttrykk.",
      price: "890,-",
    },
    {
      title: "Brynstyling",
      description: "Voks, form og farge — tilpasset ansiktet ditt.",
      price: "490–690,-",
      priceNote: "Avhengig av behandling",
    },
    {
      title: "Farge",
      description:
        "Farging og teknikker tilpasset hår og stil — vi avtaler omfang i salongen.",
      price: "790–2 500,-",
    },
    {
      title: "Klipp",
      description:
        "Klassisk klipp og form — alltid med dialog og trygg hånd.",
      price: "690–1 090,-",
    },
  ] satisfies ServiceItem[],

  /**
   * Produktbilder: legg JPG/WEBP/PNG i public/images/chic-clinic/ med eksakt filnavn.
   * (SVG hadde ugyldig tegn og feilet i noen nettlesere; JPG er mest stabilt på Vercel.)
   */
  products: [
    {
      title: "Gold-produkter",
      description: "Utvalgte pleieprodukter — spør i salongen.",
      price: "319,-",
      imageSrc: "/images/chic-clinic/product-gold.jpg",
      imageAlt: "Gold-produkter",
    },
    {
      title: "AP24 tannkrem",
      description:
        "Whitening-tannkrem fra Nu Skin (AP24) — spør i salongen for veiledning.",
      price: "200,-",
      imageSrc: "/images/chic-clinic/product-ap24.jpg",
      imageAlt: "AP24 tannkrem",
    },
    {
      title: "Amika styling",
      description: "Stylingprodukter — spør i salongen.",
      price: "329,-",
      imageSrc: "/images/chic-clinic/product-amika.jpg",
      imageAlt: "Amika styling",
    },
  ] satisfies ProductItem[],

  certifications: {
    elleebana: {
      title: "Elleebana Certified",
      subtitle: "One Shot Lash Lift",
      description:
        "Jeg er sertifisert i Elleebana One Shot Lash Lift — en trygg og anerkjent metode for vippeløft.",
    },
    microneedling: {
      title: "Microneedling",
      description:
        "Oppdaterte rutiner og kvalitetsprodukter for trygg hudpleie i min salong.",
    },
  },

  /** Tilleggsbokser: frisørkompetanse (struktur + tekst). */
  qualificationBoxes: [
    {
      title: "Lærlingetid",
      body: "Lærling hos Hannes Frisører i Trondheim og Agathon på Kolvereid — grunnlaget for faget mitt.",
    },
    {
      title: "Farge og videreutdanning",
      body: "Kursing i fargeteknikker med blant annet Wella og Cutrin.",
    },
    {
      title: "Spesialisering og klipp",
      body: "Brudefrisering med GHD. Klippekurs hos blant annet Dag Gustavsen og ved Alf Fjeld.",
    },
  ] satisfies QualificationBox[],

  about: {
    title: "Om meg",
    lead:
      "Jeg heter Ragnhild Katrine og driver Chic Clinic — en liten, intim hjemmesalong i Trondheim.",
    body: "Frisør siden 2000, lærlingetid på Hannes Frisører i Trondheim og Agathon på Kolvereid. Kursing i fargeteknikker i blant annet Wella og Cutrin. Brudefrisering GHD. Klippekurs hos blant annet Dag Gustavsen og ved Alf Fjeld. Ragnhild Katrine er også sertifisert i Elleebana One Shot Lash Lift. For meg handler det om håndverk, ro og at du skal bli sett — fra første hilsen til siste finish.",
  },

  /**
   * Facebook-omtaler: tom til Heine limer inn ekte sitater i site-config.
   * Da fylles denne tabellen med { name, role?, rating, text }.
   */
  reviews: [] as ReviewItem[],

  reviewsClosing:
    "For meg betyr hver tilbakemelding enormt mye. Er du fornøyd? Si det til alle. Er du misfornøyd? Si det til meg.",

  social: {
    instagram: "https://instagram.com/chicclinicas",
    instagramHandle: "@chicclinicas",
    facebook: "https://www.facebook.com/chicbrowglow",
    facebookLabel: "Facebook",
  },

  seo: {
    title: "Frisør og skjønnhet i Trondheim | Chic Clinic AS",
    description:
      "Chic Clinic AS i Trondheim — Ragnhild Katrine. Klipp, styling, microblading, microneedling og vippeløft. Book time via Timma.",
    keywords:
      "frisør Trondheim, skjønnhetssalong Trondheim, microblading Trondheim, microneedling Trondheim, Chic Clinic, Ragnhild Katrine",
  },

  footerCopyright: "© 2026 Chic Clinic AS",

  harmonizedPackageReference: {
    standard: "4 990 kr engang",
    premium: "7 990 kr engang",
    vedlikehold: "500 kr/mnd",
  },
};
