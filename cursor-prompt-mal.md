# Cursor-prompt-mal — Tradematch

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

─── INNHOLDS-KVALITETSSJEKK (kjør før du skriver NOEN tekst) ───
Før du skriver innhold på en nettside, still deg disse spørsmålene og svar ærlig:

1. TALL OG PÅSTANDER
   - Er alle tall vi bruker sanne?
   - Hvis ikke — fjern dem eller erstatt med noe ærlig
   - Aldri bruk "X kunder har valgt oss" hvis det ikke stemmer
   - Aldri bruk antall år, kunder eller prosjekter uten bekreftelse

2. PAKKER OG TJENESTER
   - Gir pakkenavnene mening for denne bedriften?
   - "1 side" vs "3 sider" — er dette relevant?
   - Oppfordrer noen punkter kunden til å IKKE kjøpe?
   - Er alle fordeler formulert fra kundens perspektiv?

3. VEDLIKEHOLD OG TILLEGGSTJENESTER
   - Aldri si "kan avsluttes når som helst" — det selger ikke
   - Fokus alltid på verdi og fred i sinnet, ikke tekniske detaljer
   - Aldri nevn at kunden kan gjøre noe selv

4. GENERELLE REGLER
   - Ingen klisjéoverskrifter som "Velkommen til vår nettside"
   - Ingen "vi" hvis én person driver bedriften
   - Alle CTA-tekster skal være spesifikke, ikke generiske
   - "Kom i gang" er OK — "Klikk her" er ikke OK
   - Kontaktinfo må være synlig og klikkbar overalt

5. LOGIKK-SJEKK
   - Henger alle seksjoner logisk sammen?
   - Er priser konsistente gjennom hele siden?
   - Er leveringstid nevnt samme sted som pris?

Ikke avslutt noen nettside uten å ha gått gjennom denne listen punkt for punkt.

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
