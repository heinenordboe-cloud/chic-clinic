/**
 * Chic Clinic AS — eneste sted for merkevaretekst, priser og kontaktinfo.
 */

export type ServiceItem = {
  title: string;
  description: string;
  price: string | null;
  priceNote?: string;
};

export const siteConfig = {
  name: "Chic Clinic AS",
  shortName: "CHIC",
  established: "07.07.17",

  /** Offisiell logo (PNG med høyest oppløsning blant leverte varianter) */
  brandLogoSrc: "/images/chic-logo.png",

  url: "https://chicclinic.no",

  tagline: "Din skjønnhet, min lidenskap",

  description:
    "Frisør og skjønnhet i Trondheim. Klipp, styling, vippeløft, microblading og microneedling — book time hos meg på Chic Clinic.",

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
  },

  booking: {
    timmaUrl: "https://timma.no/salong/chic-clinic-as",
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
      price: "1 790 kr",
      priceNote: "Kampanje · inkl. hjemmeserum",
    },
    {
      title: "Microblading",
      description:
        "Naturlige, vakre bryn med varig resultat. Utføres av sertifisert behandler.",
      price: "3 490 kr",
      priceNote: "Refill 2 490 kr",
    },
    {
      title: "Maskinklipp",
      description: "Presist og effektivt — moderne teknikk tilpasset deg.",
      price: "590 kr",
    },
    {
      title: "Fasongklipp",
      description: "Klassisk fasong som rammer ansiktet og holder seg fin mellom besøk.",
      price: "690 kr",
    },
    {
      title: "Barneklipp",
      description: "Rolig stemning og trygg hånd — for de minste.",
      price: "490 kr",
    },
    {
      title: "Brynstyling",
      description: "Form og finish som løfter blikket.",
      price: "690 kr",
    },
    {
      title: "Vippeløft og brynstyling",
      description:
        "Løft som varer — kombineres med bryn for et helhetlig uttrykk. Ta kontakt for pris.",
      price: null,
      priceNote: "Pris etter avtale",
    },
  ] satisfies ServiceItem[],

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
      "Jeg heter Ragnhild og har drevet Chic Clinic alene siden 2017. For meg har salongen alltid vært et sted der du skal kunne senke skuldrene og bli sett.",
    body: "Jeg tror på håndverk, detaljer og dialog. Når du kommer til meg for klipp, bryn, vippeløft eller hudbehandling, er det meg du møter — fra første hilsen til siste finish. Jeg brenner for faget og for at du skal gå herfra med en følelse av velvære. Velkommen til meg i Trondheim.",
  },

  reviews: [
    {
      name: "Kunde",
      role: "Plassholder",
      rating: 5,
      text: "Her kommer en ekte anmeldelse når den er klar. Jeg er stolt av tilbakemeldingene kundene mine gir meg.",
      placeholder: true,
    },
    {
      name: "Kunde",
      role: "Plassholder",
      rating: 5,
      text: "Del gjerne din opplevelse på Google eller Timma — det hjelper andre å finne meg.",
      placeholder: true,
    },
    {
      name: "Kunde",
      role: "Plassholder",
      rating: 5,
      text: "Takk for at du besøker meg. Jeg gleder meg til å høre fra deg etter neste time.",
      placeholder: true,
    },
  ],

  social: {
    instagram: "https://www.instagram.com/",
    instagramHandle: "@chicclinic",
  },

  seo: {
    title: "Frisør og skjønnhet i Trondheim | Chic Clinic AS",
    description:
      "Chic Clinic AS i Trondheim — klipp, styling, microblading, microneedling og vippeløft. Book time via Timma eller send meg en e-post.",
    keywords:
      "frisør Trondheim, skjønnhetssalong Trondheim, microblading Trondheim, microneedling Trondheim, Chic Clinic",
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
