# Cursor-prompt-mal — Tradematch (kopi i context/)

> Speiler **`cursor-prompt-mal.md`** i prosjektroten. Ved endring: oppdater begge filer.

Kopier alt i blokken under inn i Cursor (Ctrl+L). Fyll inn **FYLL INN HER** først.

---

```
@context/memory.md @context/CLAUDE.md @context/frontend-design.md
@context/ui-ux-pro-max.md @context/seo.md @context/21st-dev.md
@Magic UI @shadcn @nextjs @tailwind @aceternity @originui

─── FYLL INN HER ───
Navn: [BEDRIFTSNAVN]
Bransje: [BRANSJE]
Telefon: [TELEFON]
E-post: [EPOST]
Adresse: [ADRESSE]
År etablert: [ÅRSTALL]
Tjenester: [TJENESTE 1, TJENESTE 2, TJENESTE 3]
Spesielt: [noe unikt, eller "ingen"]

─── AUTOMATISKE REGLER ───
1. Les context/21st-dev.md
2. Finn bransjen og visuelt nivå (1, 2 eller 3)
3. Bruk KUN komponenter godkjent for det nivået
4. Bruk @Docs for ALLE komponent-props — aldri gjett

─── TEKNISKE KRAV ───
- Next.js 15 App Router
- Tailwind CSS — ingen inline styles
- next/image med priority på hero, object-position="center 20%"
- next/font — aldri CDN
- BlurFade på ALLE seksjoner
- BentoGrid for tjenester — alle kort like store
- Klikkbart telefonnummer: <a href="tel:+47XXXXXXXX">
- Sticky navbar med telefon synlig på desktop
- Kontaktskjema maks 4 felter
- LocalBusiness schema.org i head
- robots.ts og sitemap.ts

─── SIDESTRUKTUR ───
1. Navbar — logo + telefon + CTA-knapp (sticky)
2. Hero — tilpasset bransjestil og visuelt nivå
3. Tjenester — BentoGrid, alle kort like store
4. Hvorfor oss — 3 fordeler med ikon
5. Om oss — personlig tekst, "jeg" hvis én person driver
6. Kontakt — maks 4 felter
7. Footer — adresse, tlf, e-post

─── SEO ───
- H1: "[Bransje] i Trondheim"
- Title: "[Bransje] i Trondheim | [Bedriftsnavn]"
- Meta description maks 160 tegn med CTA
- Primærsøkeord 2–4 ganger naturlig i teksten

─── AVSLUTT ALLTID SLIK ───
1. npm run build
2. Fiks ALLE feil automatisk
3. npm run build på nytt
4. Ikke avslutt før 0 feil

All tekst på profesjonell norsk bokmål.
```
