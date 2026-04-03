# Chic Clinic — prosjektkontekst

Offentlig nettside for **Chic Clinic AS** (frisør og skjønnhet, Trondheim).

## Teknisk stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS
- shadcn/ui, Magic UI (BlurFade, BentoGrid), Framer Motion der det er brukt

## Innhold og merkevare

- **Kilde for tekst, kontakt, NAP, SEO-grunnlag:** `src/lib/site-config.ts`
- **Sider og seksjoner:** `src/app/`, `src/components/sections/`
- **Bilder:** `public/images/`

## Retningslinjer for endringer

- All brukerrettet tekst: profesjonell **norsk bokmål**
- Bevar visuell profil (typografi, farger) som allerede er satt i komponentene — ikke gjør siden generisk «AI-mal»
- Ved SEO-endringer: se `context/seo.md` (lokal SEO, Trondheim)
