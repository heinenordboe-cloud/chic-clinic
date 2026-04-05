/**
 * Chic Clinic AS — eneste sted for merkevaretekst, priser og kontaktinfo.
 */

export type ServiceItem = {
  title: string;
  description: string;
  price: string | null;
  priceNote?: string;
  /** Vises som egen linje under beskrivelsen (f.eks. sertifisering). */
  certification?: string;
};

export type ProductItem = {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
};

export const siteConfig = {
  name: "Chic Clinic AS",
  shortName: "CHIC",
  established: "2017",

  /** Offisiell logo (PNG med høyest oppløsning blant leverte varianter) */
  brandLogoSrc: "/images/chic-logo.png",

  url: "https://chicclinic.no",

  tagline: "Din skjønnhet, min lidenskap",

  description:
    "Frisør og skjønnhet i Trondheim hos Ragnhild Katrine — intim hjemmesalong med gratis parkering. Klipp, styling, vippeløft, microblading og microneedling. Book time på Timma.",

  email: "post@chicclinic.no",

  phoneDisplay: "+47 950 23 434",
  phoneTel: "+4795023434",

  address: {
    streetAddress: "Elgvegen 11",
    postalCode: "7021",
    city: "Trondheim",
    region: "Trøndelag",
    country: "NO",
    /** Én linje i kontakt og footer */
    singleLine: "Elgvegen 11, 7021 Trondheim",
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
      certification:
        "Behandlingen utføres av sertifisert utøver med dokumentert opplæring i microblading.",
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
      priceNote: "Fra · avhengig av behandling",
    },
    {
      title: "Farge",
      description:
        "Farging og teknikker tilpasset hår og stil — vi avtaler omfang i salongen.",
      price: "790–2 500,-",
      priceNote: "Fra · etter konsultasjon",
    },
    {
      title: "Klipp",
      description:
        "Klassisk klipp og form — alltid med dialog og trygg hånd.",
      price: "690–1 090,-",
      priceNote: "Fra · etter konsultasjon",
    },
  ] satisfies ServiceItem[],

  products: [
    {
      title: "Gold-produkter",
      description: "Utvalgte pleieprodukter — spør i salongen.",
      price: "319,-",
      imageSrc: "/images/chic-clinic/product-gold.svg",
      imageAlt: "Plassholder — Gold-produkter",
    },
    {
      title: "AP Whitening (AP24)",
      description: "Tannbleking — referansebilde image_6.png (byttes når klart).",
      price: "200,-",
      imageSrc: "/images/chic-clinic/product-ap24.svg",
      imageAlt: "Plassholder — AP Whitening AP24",
    },
    {
      title: "Amika styling",
      description: "Stylingprodukter — referansebilde image_5.png (byttes når klart).",
      price: "329,-",
      imageSrc: "/images/chic-clinic/product-amika.svg",
      imageAlt: "Plassholder — Amika styling",
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

  about: {
    title: "Om meg",
    lead:
      "Jeg heter Ragnhild Katrine og har drevet Chic Clinic som en liten, intim hjemmesalon i Trondheim siden 2017 — med gratis parkering rett ved.",
    body: "Frisør siden 2000, lærlingetid på Hannes Frisører i Trondheim og Agathon på Kolvereid. Kursing i fargeteknikker i blant annet Wella og Cutrin. Brudefrisering GHD. Klippekurs hos blant annet Dag Gustavsen og ved Alf Fjeld. Ragnhild Katrine er også sertifisert i Elleebana One Shot Lash Lift. For meg handler det om håndverk, ro og at du skal bli sett — fra første hilsen til siste finish.",
  },

  reviews: [
    {
      name: "Facebook-kunde",
      role: "Plassholder",
      rating: 5,
      text: "Plassholder for første Facebook-omtale — tekst limes inn når den er klar.",
      placeholder: true,
    },
    {
      name: "Facebook-kunde",
      role: "Plassholder",
      rating: 5,
      text: "Plassholder for andre Facebook-omtale — tekst limes inn når den er klar.",
      placeholder: true,
    },
    {
      name: "Facebook-kunde",
      role: "Plassholder",
      rating: 5,
      text: "Plassholder for tredje Facebook-omtale — tekst limes inn når den er klar.",
      placeholder: true,
    },
  ],

  reviewsClosing:
    "For meg betyr hver tilbakemelding enormt mye. Er du fornøyd? Si det til alle. Er du misfornøyd? Si det til meg🙏",

  social: {
    instagram: "https://www.instagram.com/",
    instagramHandle: "@chicclinic",
    facebook: "https://www.facebook.com/",
    facebookLabel: "Facebook",
  },

  seo: {
    title: "Frisør og skjønnhet i Trondheim | Chic Clinic AS",
    description:
      "Chic Clinic AS i Trondheim — Ragnhild Katrine. Intim hjemmesalong med gratis parkering. Klipp, styling, microblading, microneedling og vippeløft. Book time via Timma.",
    keywords:
      "frisør Trondheim, skjønnhetssalong Trondheim, microblading Trondheim, microneedling Trondheim, Chic Clinic, Ragnhild Katrine",
  },

  footerCopyright: "© 2026 Chic Clinic AS",

  /**
   * Harmoniser referansepriser (mal / partner — ikke vist på salongsidene):
   * Standard 4 990 kr engang, Premium 7 990 kr engang, Vedlikehold 500 kr/mnd.
   */
  harmonizedPackageReference: {
    standard: "4 990 kr engang",
    premium: "7 990 kr engang",
    vedlikehold: "500 kr/mnd",
  },
};
