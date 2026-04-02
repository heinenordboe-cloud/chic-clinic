# TRADEMATCH — KOMPLETT HÅNDBOK
> Lim inn denne filen i hvilken som helst AI-agent, og den vil forstå alt om Tradematch uten å stille spørsmål.

---

## HVEM ER JEG?

Jeg heter **Heine Nordbø**. Jeg er en norsk student som bor i Indiana, USA (EST-tidssone). Jeg driver **Tradematch** — et digitalbyrå som bygger profesjonelle nettsider for håndverkere og småbedrifter i Trondheim, Norge (CET-tidssone).

Jeg er ikke utvikler. Jeg bruker AI-verktøy for å bygge nettsidene. Din jobb er å hjelpe meg drive og vokse Tradematch så effektivt som mulig.

---

## FORRETNINGSMODELL

**Hva jeg selger:**
Skreddersydde nettsider til håndverkere og småbedrifter i Trondheim.

**Prisstruktur:**
- Engangssum: 5 000 – 8 000 kr (snitt 6 500 kr)
- Månedlig vedlikehold: 500 kr/mnd per kunde
- Fakturering via: fiken.no

**Mål:**
- 70 000 kr profitt sommeren 2026
- ~10 leads per uke
- 10% konverteringsrate = ~1 salg per uke
- Ukentlig rutine: Mandag leads → Tirsdag demoer → Onsdag ring → Torsdag følg opp → Fredag lever

**Kontaktinfo Tradematch:**
- Telefon: +47 940 32 243
- E-post: post.tradematch@gmail.com
- Nettside: tradematch.no

---

## TEKNOLOGISTAKK

| Teknologi | Bruk |
|-----------|------|
| Next.js 14 (App Router) | Rammeverk |
| Tailwind CSS | Styling — aldri inline styles |
| shadcn/ui | Basis UI-komponenter |
| Magic UI | Animasjoner (BlurFade, BentoGrid) |
| TypeScript | Typesikkerhet |
| Vercel | Hosting og deployment |
| GitHub | Kildekode (heinenordboe-cloud/tradematch) |
| Cursor | Kodeverktøy (ikke Claude Code, ikke VS Code) |

**Base template lokasjon på PC:**
`C:\Users\heine\New folder\tradematch-base-template`

---

## VERKTØYENE JEG BRUKER

| Verktøy | Hva det gjør |
|---------|-------------|
| **Claude.ai (Projects)** | Planlegging, Cursor-prompts, WhatsApp-tekster, strategi |
| **Cursor** | Bygger selve nettsidekoden |
| **Vercel** | Deployer nettsiden automatisk fra GitHub |
| **GitHub** | Lagrer koden, trigger Vercel-deploy |
| **Outscraper.com** | Scraper Google Maps for leads automatisk |
| **Excel/Google Sheets** | CRM for leads og inntektssporing |
| **Fiken.no** | Fakturering av kunder |
| **WhatsApp** | Første kontakt med leads |

**Viktig:** Jeg bruker Claude.ai til planlegging og prompts — ikke til koding. All koding skjer i Cursor.

---

## KOMPLETT ARBEIDSFLYT (steg for steg)

### STEG 1 — Finn leads med Outscraper
Gå til outscraper.com → Google Maps Scraper
Bruk "Plain queries" og søk:
```
plumber Trondheim Norway
electrician Trondheim Norway
painter Trondheim Norway
carpenter Trondheim Norway
flooring contractor Trondheim Norway
cleaning service Trondheim Norway
```
Velg "Cold Calling Campaigns Pack" (telefonnummer + company insights).
Eksporter som CSV → importer til CRM.
Beste leads: bedrifter uten nettside eller med nettside fra før 2018.

### STEG 2 — Logg leads i CRM
CRM-kolonner: Bedriftsnavn, Bransje, Telefon, E-post, Har nettside?, Status, Demo-URL, WhatsApp sendt?, Notater.
Status-verdier: Ikke kontaktet → WhatsApp sendt → Sett demo → Interessert → Solgt ✅ / Avslått ❌

### STEG 3 — Gi Claude lead-info, få Cursor-prompt
Send dette til Claude:
```
Bedrift: [navn]
Bransje: [tjeneste]
Telefon: [nummer]
E-post: [e-post]
Adresse: [adresse]
År i bransjen: [antall]
Tjenester: [liste]
```
Claude lager en komplett Cursor Agent-prompt med riktig bransjestil, farger, fonter, SEO og alle tekniske krav.

### STEG 4 — Cursor bygger nettsiden
1. Åpne tradematch-base-template i Cursor
2. Ctrl+L (ny chat)
3. Lim inn Cursor-prompten fra Claude
4. La Cursor bygge
5. Test: `npm run dev`
6. Sjekk mobil (375px), norsk tekst, kontaktinfo

### STEG 5 — Deploy til Vercel
```bash
npm run build   # Alltid lokalt først — fiks alle feil
git add .
git commit -m "feat: demo for [bedriftsnavn]"
git push origin main
```
Vercel deployer automatisk. Kopier URL: `https://[navn].vercel.app`

**Kritiske Vercel-regler:**
- Install Command: `npm install` med Override PÅ
- Aldri `output: standalone` i next.config.js
- Aldri `i18n` i next.config.js
- Aldri `border-border` i globals.css
- Tomme build-logger = slett og recreate Vercel-prosjekt

### STEG 6 — Send WhatsApp til lead
```
Hei [Fornavn]! Jeg har laget en demo-nettside for [Bedriftsnavn] 
— tar 30 sekunder å se: [URL]. Hva synes du? 😊
```
Regler: Maks 3 setninger. Alltid fornavn. Alltid demo-link. Én oppfølging max etter 2 dager.

### STEG 7 — Ring og pitch
Ring 09–16 CET (03–10 EST for meg).
Mal: "Hei, jeg heter Heine og ringer fra Tradematch. Vi lager nettsider for håndverkere i Trondheim. Jeg har laget en gratis demo til dere — har du 2 minutter?"
Pris: "6 000 kr engang + 500 kr/mnd for vedlikehold og hosting."

### STEG 8 — Salg → Lever → Fakturer
1. Avklar domene, logo, farger, tekst
2. Tilpass nettsiden
3. Koble domene til Vercel
4. Send faktura via fiken.no

---

## DESIGNREGLER (aldri bryt disse)

### Alltid
- All tekst på profesjonell norsk bokmål
- BlurFade fra Magic UI på ALLE seksjoner
- BentoGrid fra Magic UI for tjenesteoversikt
- next/image for alle bilder
- next/font for alle fonter — aldri CDN
- Fargekontrast minimum 4.5:1 (WCAG AA)
- Semantisk HTML: header, main, section, footer

### Aldri
- Inter, Roboto, Arial eller system-ui som font
- Generisk 3-kolonne AI-layout
- Lilla/blå gradient på hvit bakgrunn
- Inline styles eller CSS-moduler
- Samme visuelle stil på to forskjellige kundesider

### Bransjestiler (velg riktig per kunde)
| Bransje | Bakgrunn | Font | Accent |
|---------|----------|------|--------|
| Rørlegger/VVS | Mørk slate-900 | Cabinet Grotesk / Syne | Isblå / hvit |
| Elektriker | Gray-950 | Syne | Gul #FACC15 |
| Snekker/Tømrer | Varm stone-50 | Fraunces / Playfair Display | Brun / grønn |
| Maler | Hvit / slate-50 | Cabinet Grotesk / Outfit | Sterk accentfarge |
| Renhold | Hvit / emerald-50 | DM Sans / Outfit | Mint / turkis |
| Frisør/Skjønnhet | Krem / zinc-950 | Playfair Display / Lora | Gull / rosa |
| Restaurant/Café | Stone-900 | Fraunces / Lora | Oransje / rød |
| Bilverksted | Zinc-800 | Syne | Rød / oransje |

---

## CURSOR-PROMPT MAL

Bruk denne malen for å bygge hver kundedemo:

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
Velg riktig visuell stil basert på bransje (se bransjestiler over).
Denne siden skal IKKE se lik ut som en generisk AI-nettside.

─── TEKNISKE KRAV ───
- Next.js 14 App Router
- Tailwind CSS (ingen inline styles)
- shadcn/ui for basis-komponenter
- Magic UI BlurFade på ALLE seksjoner med stagger delays
- Magic UI BentoGrid for tjenesteoversikt
- next/image for alle bilder
- next/font for alle fonter (aldri CDN)
- "use client" kun der det er absolutt nødvendig

─── SEO ───
- H1: "[BRANSJE] i Trondheim"
- Title: "[BRANSJE] i Trondheim | [BEDRIFTSNAVN]"
- Meta description maks 160 tegn med CTA
- LocalBusiness schema.org i head
- robots.ts og sitemap.ts
- Fargekontrast 4.5:1, alt-tekst på bilder, semantisk HTML

─── SIDESTRUKTUR ───
1. Navbar — logo + telefon + "Kontakt oss" (sticky, hamburger mobil)
2. Hero — tilpasset bransjestil
3. Tjenester — BentoGrid
4. Hvorfor oss — 3 fordeler med ikon
5. Om oss — kort menneskelig tekst
6. Kontakt — maks 4 felter (Navn, Telefon, Melding)
7. Footer — adresse, tlf, e-post, org.nr

─── VERCEL-REGLER ───
- Ingen output: standalone i next.config.js
- Ingen i18n i next.config.js
- globals.css bruker IKKE border-border
- Kjør npm run build med 0 feil før du avslutter

All tekst på profesjonell norsk bokmål.
```

---

## SEO-REGLER

Alle nettsider optimaliseres for lokal SEO i Trondheim.

- Title: "[Tjeneste] i Trondheim | [Bedriftsnavn]" (maks 60 tegn)
- Description: maks 160 tegn, inkluder tjeneste + by + fordel + CTA
- H1: alltid "[tjeneste] i Trondheim"
- NAP synlig på siden: navn, adresse, telefon
- LocalBusiness schema.org alltid med
- robots.ts og sitemap.ts alltid med
- Primærsøkeord brukt 2–4 ganger naturlig i teksten

---

## UX-REGLER

- Mobil-først alltid (70%+ av trafikk er mobil)
- Klikkbart telefonnummer: `<a href="tel:+47XXXXXXXX">`
- CTA synlig uten scroll (above the fold)
- Sticky navbar med telefonnummer synlig på desktop
- Kontaktskjema maks 4 felter
- Spesifikke CTA-tekster: "Få gratis befaring", "Ring oss nå", "Be om tilbud"
- Aldri: "Velkommen til vår nettside" som overskrift

---

## WHATSAPP SALGSPSYKOLOGI

| Prinsipp | Bruk |
|----------|------|
| Lav terskel | "Tar 30 sekunder å se" |
| Konkret verdi | "Én ny kunde betaler for hele nettsiden" |
| Alltid fornavn | Aldri "Hei der" |
| Én CTA | Aldri spør om to ting |
| Maks 2 meldinger | Aldri mas |

---

## VANLIGE INNVENDINGER OG SVAR

| Innvending | Svar |
|------------|------|
| "Har ikke råd" | "Mange tjener inn prisen på én ny kunde de får via nettsiden." |
| "Har allerede nettside" | "Jeg vet det — vil du se hva en oppdatert versjon ville sett ut?" |
| "Må tenke på det" | "Absolutt. Kan jeg sende demoen på SMS så du kan se i ro og mak?" |
| "Trenger ikke nettside" | "Helt forståelig. Tilbudet er der hvis det endrer seg." |

---

## FILSTRUKTUR I PROSJEKTET

```
tradematch-base-template/
├── CLAUDE.md                    ← Kontrolltårn for AI-agenter
├── context/
│   ├── memory.md                ← Prosjekthukommelse
│   ├── files.md                 ← Filstruktur
│   ├── commands.md              ← Terminalkkommandoer
│   ├── tools.md                 ← Verktøydokumentasjon
│   ├── frontend-design.md       ← Designregler
│   ├── ui-ux-pro-max.md         ← UX-regler
│   ├── seo.md                   ← SEO-regler
│   └── 21st-dev.md              ← Bransjestiler
├── .claude/
│   └── skills/
│       ├── generate-demo.md     ← Skill: lag Cursor-prompt
│       ├── fix-vercel-deployment.md
│       ├── lead-to-whatsapp-copy.md
│       └── magic-ui-performance.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                      ← shadcn/ui
│   ├── magicui/                 ← Magic UI
│   └── sections/                ← Hero, Services, About, Contact, Footer
└── context/ (se over)
```

---

## HVA JEG TRENGER HJELP MED

Når jeg henvender meg til en AI-agent trenger jeg typisk hjelp med én av disse:

1. **"Lag demo for [bedrift]"** → Generer komplett Cursor-prompt
2. **"Skriv WhatsApp til [fornavn]"** → Generer ferdig melding
3. **"Vercel feiler"** → Feilsøk deployment
4. **"Animasjoner henger"** → Fiks Magic UI ytelse
5. **"Finn leads"** → Hjelp med Outscraper-søk eller leadstrategi
6. **"Oppdater CRM"** → Hjelp med Excel/Google Sheets

Du trenger aldri spørre meg om kontekst — alt er i denne filen.
Svar alltid på norsk bokmål med mindre jeg skriver på engelsk.
