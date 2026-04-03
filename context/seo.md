# 🔍 seo.md — lokal SEO (Chic Clinic)

> Lokalt SEO for Chic Clinic i Trondheim. Målet er at bedriften dukker opp når folk søker etter relevante tjenester på Google.

---

## 🎯 Fokus: Lokal SEO

Chic Clinic trenger ikke å rangere globalt — målet er å dukke opp når folk i Trondheim (og nærområdet) søker etter relevante tjenester. Det er enklere og ofte mer verdifullt.

**Eksempelsøk det er naturlig å optimalisere mot:**
- "rørlegger Trondheim"
- "elektriker Trondheim pris"
- "snekker Trondheim erfaring"
- "maler leilighet Trondheim"

---

## 📄 Metadata (alltid inkluder dette)

```tsx
// app/layout.tsx eller app/page.tsx
export const metadata = {
  title: "[Tjeneste] i Trondheim | [Bedriftsnavn]",
  description: "[Bedriftsnavn] tilbyr profesjonell [tjeneste] i Trondheim. Rask respons, konkurransedyktige priser og [X] års erfaring. Ring oss i dag!",
  keywords: "[tjeneste] Trondheim, [tjeneste] pris Trondheim, [bedriftsnavn]",
  openGraph: {
    title: "[Tjeneste] i Trondheim | [Bedriftsnavn]",
    description: "...",
    url: "https://[domene].no",
    siteName: "[Bedriftsnavn]",
    locale: "nb_NO",
    type: "website",
  },
};
```

### Regler for tittel-tag
- Format: `[Primærtjeneste] i Trondheim | [Bedriftsnavn]`
- Maks 60 tegn
- Eksempel: `Rørlegger i Trondheim | Hansen VVS`

### Regler for meta description
- Maks 160 tegn
- Inkluder: tjeneste + by + én fordel + CTA
- Eksempel: `Hansen VVS tilbyr rørleggertjenester i Trondheim. Fast pris, rask respons og 15 års erfaring. Ring oss for gratis befaring!`

---

## 🏷️ Overskriftsstruktur (H1–H3)

```
H1: Én per side — primærsøkeord + by
    Eksempel: "Rørlegger i Trondheim"

H2: Seksjonsoverskrifter — støttesøkeord
    Eksempel: "Våre tjenester", "Hvorfor velge oss", "Kontakt oss"

H3: Underseksjoner
    Eksempel: "Baderomsmontasje", "Vannlekkasje", "Varmeanlegg"
```

**Aldri:** Hopp over overskriftsnivåer (f.eks. H1 → H3)

---

## 🗺️ Lokale SEO-elementer

### NAP — Name, Address, Phone (kritisk)
Sørg for at dette er konsistent på tvers av nettsiden og Google Business Profile:

```
Bedriftsnavn: [Eksakt samme navn overalt]
Adresse: [Gate, postnummer, by]
Telefon: +47 XX XX XX XX
```

### Google Business Profile
Anbefal alltid kunden å opprette/oppdatere sin Google Business Profile:
- Samme NAP som på nettsiden
- Legg til bilder av arbeid
- Be eksisterende kunder om anmeldelser

### Strukturerte data (Schema.org)
Legg alltid til LocalBusiness schema i `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Bedriftsnavn]",
  "telephone": "+47XXXXXXXX",
  "email": "post@bedrift.no",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Gate]",
    "addressLocality": "Trondheim",
    "postalCode": "[XXXX]",
    "addressCountry": "NO"
  },
  "url": "https://[domene].no",
  "description": "[Kort beskrivelse av tjeneste]"
}
</script>
```

---

## 🖼️ Bilder & Alt-tekst

- Alle bilder skal ha beskrivende `alt`-tekst
- Inkluder søkeord naturlig i alt-tekst
- Format: `alt="[beskrivelse av bilde] i Trondheim"`
- Eksempel: `alt="Rørlegger installerer baderom i Trondheim"`
- Bildenavn: `rorlegger-trondheim-baderom.jpg` (ikke `IMG_1234.jpg`)

---

## ⚡ Teknisk SEO

### Next.js 14 innebygde fordeler
- Automatisk server-side rendering (SSR) → god crawlbarhet
- `next/image` → automatisk bildekomprimering og lazy loading
- App Router → automatisk code splitting

### Alltid inkluder
```tsx
// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://[domene].no/sitemap.xml",
  };
}

// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: "https://[domene].no",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

---

## 📝 Innhold & Søkeord

### Søkeordtetthet
- Primærsøkeord (f.eks. "rørlegger Trondheim"): 2–4 ganger naturlig i teksten
- Aldri keyword stuffing — skriv for mennesker, ikke for Google

### Innholdslengde
- Hero-seksjon: 50–100 ord
- Tjenestebeskrivelser: 30–50 ord per tjeneste
- Om oss: 100–200 ord
- Totalt: minimum 300 ord på siden

---

## ✅ SEO-sjekkliste før levering

- [ ] Title tag: maks 60 tegn, inkluderer tjeneste + "Trondheim"
- [ ] Meta description: maks 160 tegn, inkluderer CTA
- [ ] H1 inneholder primærsøkeord + "Trondheim"
- [ ] Alle bilder har alt-tekst
- [ ] NAP synlig på siden (navn, adresse, telefon)
- [ ] LocalBusiness schema lagt til
- [ ] robots.ts og sitemap.ts opprettet
- [ ] OpenGraph-metadata satt (for deling på sosiale medier)
- [ ] Siden laster under 3 sekunder
