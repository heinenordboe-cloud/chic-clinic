# 🚀 Skill: Generer Kundedemo

## Description
TRIGGER denne skill når: Heine gir deg info om en ny lead og vil ha en Cursor-prompt
for å bygge en demo-nettside. Nøkkelord: "ny kunde", "lag demo", "prompt for",
"bygg nettside for", eller når bedriftsnavn + bransje + telefon oppgis.

---

## Hva denne skill gjør

Tar lead-info fra Heine og genererer en komplett, klar-til-bruk Cursor Agent-prompt
som bygger en unik, produksjonsklar Next.js 14 demo-nettside tilpasset kundens bransje.

---

## Input jeg trenger fra Heine

### Obligatorisk
- Bedriftsnavn
- Bransje
- Telefonnummer

### Valgfritt (legg til hvis tilgjengelig)
- E-post
- Adresse
- År i bransjen
- Tjenester (liste)
- Eksisterende nettside
- Logo / farger

---

## Output jeg genererer

En komplett Cursor Agent-prompt med:
- Alle @context-referanser øverst
- Bedriftsinfo utfylt
- Bransjestil valgt fra 21st-dev.md
- Font-par valgt basert på bransje
- Fargepalett basert på bransje
- SEO-metadata tilpasset bedriften
- Alle tekniske krav og Vercel-regler

---

## Cursor-prompt mal

```
@context/memory.md @context/files.md @context/frontend-design.md @context/ui-ux-pro-max.md @context/seo.md @context/21st-dev.md

Bygg en komplett, produksjonsklar Next.js 14 nettside for [BEDRIFTSNAVN].

─── BEDRIFTSINFO ───
Navn: [BEDRIFTSNAVN]
Bransje: [BRANSJE]
Telefon: [TELEFON]
E-post: [EPOST]
Adresse: [ADRESSE]
År i bransjen: [ÅR]
Tjenester: [TJENESTE 1, TJENESTE 2, TJENESTE 3]

─── BRANSJESTIL ───
Se @context/21st-dev.md og velg riktig visuell stil for denne bransjen.
Denne siden skal IKKE se lik ut som en generisk AI-nettside.
Velg font-par, fargepalett og layout-variant basert på bransje.

─── TEKNISKE KRAV ───
- Next.js 14 App Router
- Tailwind CSS (ingen inline styles)
- shadcn/ui for basis-komponenter
- Magic UI BlurFade på ALLE seksjoner
- Magic UI BentoGrid for tjenesteoversikt
- next/image for alle bilder
- next/font for alle fonter (aldri CDN)
- "use client" kun der det er absolutt nødvendig

─── WCAG & SEO ───
- Fargekontrast minimum 4.5:1 på all tekst
- Alt-tekst på alle bilder
- Semantisk HTML: <header> <main> <section> <footer>
- H1 inneholder "[BRANSJE] i Trondheim"
- Title tag: "[BRANSJE] i Trondheim | [BEDRIFTSNAVN]"
- Meta description maks 160 tegn med CTA
- LocalBusiness schema.org i <head>
- robots.ts og sitemap.ts

─── SIDESTRUKTUR ───
Velg layout-variant fra @context/21st-dev.md som passer bransjen.

Obligatoriske seksjoner:
1. Navbar — logo + telefon + "Kontakt oss"-knapp (sticky, hamburger på mobil)
2. Hero — tilpasset bransjestil fra 21st-dev.md
3. Tjenester — BentoGrid med kundens tjenester
4. Hvorfor oss — 3 fordeler med ikon
5. Om oss — kort og menneskelig tekst
6. Kontakt — maks 4 felter (Navn, Telefon, Melding)
7. Footer — adresse, tlf, e-post, org.nr

─── VERCEL-REGLER (kritisk) ───
- Ingen output: standalone i next.config.js
- Ingen i18n i next.config.js
- globals.css bruker IKKE border-border
- Kjør npm run build og bekreft 0 feil før du avslutter

All tekst skal være på profesjonell norsk bokmål.
```

---

## Bransjestil hurtigreferanse

| Bransje | Bakgrunn | Font | Accent |
|---------|----------|------|--------|
| Rørlegger/VVS | Mørk slate-900 | Cabinet Grotesk / Syne | Isblå / hvit |
| Elektriker | Gray-950 | Syne | Gul #FACC15 |
| Snekker/Tømrer | Varm stone-50 | Fraunces / Playfair | Brun / grønn |
| Maler | Hvit / slate-50 | Cabinet Grotesk | Sterk accentfarge |
| Renhold | Hvit / emerald-50 | DM Sans / Outfit | Mint / turkis |
| Frisør/Skjønnhet | Krem / zinc-950 | Playfair Display | Gull / rosa |
| Restaurant/Café | Stone-900 | Fraunces / Lora | Oransje / rød |
| Bilverksted | Zinc-800 | Syne | Rød / oransje |
