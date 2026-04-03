# 🧩 21st-dev.md — Komponentstil per bransje

> Brukes av Cursor for å velge riktig visuell stil basert på kundens bransje.
> Målet er at denne nettsiden beholder egenart og ikke ser ut som en generisk mal.

---

## 🎯 Hovedregel

Velg ALLTID komponentstil basert på bransje.
Aldri bruk generisk 3-kolonne AI-layout.
Hent inspirasjon fra 21st.dev sitt komponentbibliotek.

---

## 🎨 Bransjestiler

### 🔧 Rørlegger / VVS
- Bakgrunn: Mørk (slate-900 eller zinc-900)
- Typografi: Tung, kraftig — Cabinet Grotesk eller Syne
- Accent: Ren hvit eller isblå (#38BDF8)
- Hero-stil: Fullskjerm mørk med stor H1 og én tydelig CTA
- Detaljer: Stål-tekstur, geometriske linjer
- Layout: Fullskjerm hero + scroll

### ⚡ Elektriker
- Bakgrunn: Nesten svart (gray-950)
- Typografi: Teknisk, skarp — Syne eller DM Sans
- Accent: Gul (#FACC15) på mørk bakgrunn
- Hero-stil: Dramatisk kontrast, teknisk grid-mønster
- Detaljer: Lysglimt-effekter, elektriske linjer
- Layout: Fullskjerm hero + scroll

### 🪚 Snekker / Tømrer / Byggherre
- Bakgrunn: Varm beige eller krem (stone-50 / stone-100)
- Typografi: Håndverksmessig — Fraunces eller Playfair Display
- Accent: Varm brun (#92400E) eller skoggrønn (#166534)
- Hero-stil: Asymmetrisk layout med tekstur
- Detaljer: Tre-tekstur, naturlige farger
- Layout: Splittet hero (tekst venstre, bilde høyre)

### 🖌️ Maler
- Bakgrunn: Lys, luftig (white / slate-50)
- Typografi: Frisk og moderne — Cabinet Grotesk eller Outfit
- Accent: Fargerik splash — velg én sterk farge
- Hero-stil: Lys og åpen med fargedetaljer
- Detaljer: Pensel-inspirerte dekorative elementer
- Layout: Lys splittet hero

### 🧹 Renhold / Vaskebyrå
- Bakgrunn: Ren hvit eller mint (white / emerald-50)
- Typografi: Ren og enkel — DM Sans eller Outfit
- Accent: Mint (#10B981) eller turkis
- Hero-stil: Minimalistisk, mye luft
- Detaljer: Rene linjer, ingen støy
- Layout: Sentrert minimalistisk hero

### ✂️ Frisør / Skjønnhet / Negler
- Bakgrunn: Krem (stone-50) eller svart (zinc-950)
- Typografi: Elegant serif — Playfair Display eller Lora
- Accent: Gull (#D97706) eller rosa (#EC4899)
- Hero-stil: Luksus, sentrert, mye negativ plass
- Detaljer: Soft shadows, elegante borders
- Layout: Fullskjerm atmosfærisk, sentrert tekst

### 🍕 Restaurant / Café / Mat
- Bakgrunn: Mørk og atmosfærisk (stone-900)
- Typografi: Varm og innbydende — Fraunces eller Lora
- Accent: Varm oransje (#EA580C) eller rød
- Hero-stil: Fullskjerm med mat-fokusert atmosfære
- Detaljer: Varme gradienter, tekstur
- Layout: Fullskjerm overlay hero

### 🚗 Bilverksted / Mekaniker
- Bakgrunn: Mørk grå (zinc-800 / zinc-900)
- Typografi: Maskulin og direkte — Syne eller Cabinet Grotesk
- Accent: Rød (#DC2626) eller oransje (#EA580C)
- Hero-stil: Industriell, kraftig
- Detaljer: Metallisk tekstur, tekniske detaljer
- Layout: Fullskjerm mørk industriell

---

## 📐 Layout-variasjon (velg én per kunde)

| Layout | Passer til |
|--------|------------|
| Fullskjerm Hero + scroll | Rørlegger, Elektriker, Bilverksted |
| Splittet Hero (tekst venstre, bilde høyre) | Snekker, Maler |
| Sentrert minimalistisk Hero | Frisør, Renhold |
| Atmosfærisk fullskjerm med overlay | Restaurant, Café |

---

## 🧩 Komponentbibliotek (21st.dev)

Bla gjennom disse for inspirasjon før du bygger:
- Heroes: https://21st.dev/s/hero
- Features: https://21st.dev/s/features
- Calls to Action: https://21st.dev/s/call-to-action
- Pricing: https://21st.dev/s/pricing-section
- Footers: https://21st.dev/s/footer
- Navbars: https://21st.dev/s/navbar-navigation

---

## ✅ Sjekkliste

- [ ] Er stilen valgt basert på bransje (ikke generisk)?
- [ ] Ser denne siden annerledes ut enn forrige kunde?
- [ ] Er font-paret unikt for denne kunden?
- [ ] Er fargepaletten tilpasset bransjen?
- [ ] Er layout-varianten riktig for bransjen?
- [ ] Er **visuelt nivå** (1, 2 eller 3) valgt og gjennomført?

---

## 🎚️ Visuelt nivå per bransje

Bruk dette sammen med bransje-tabellen over. Claude/Cursor skal **velge nivå automatisk** ut fra bransje før komponenter plukkes.

### Nivå 1 — Funksjonell
**Typiske bransjer:** rørlegger, elektriker, bilverksted, renhold

- **BlurFade** og **BentoGrid:** ja
- **Aceternity UI** og **Framer Motion** utover det BlurFade allerede gjør: **nei**
- **Fokus:** telefonnummer synlig, tydelig CTA, pris, tillit (erfaring, garanti, osv.)

### Nivå 2 — Balansert
**Typiske bransjer:** snekker, maler, byggherre, tømrer

- **BlurFade** og **BentoGrid:** ja
- **Subtile hover** på kort / knapper: ja
- **Aceternity UI:** **nei**
- **Framer Motion:** kun enkle scroll-animasjoner allerede dekket av BlurFade — ikke ekstra «show»-effekter

### Nivå 3 — Visuell
**Typiske bransjer:** frisør, skjønnhet, restaurant, café, negler

- **Alt tillatt:** Aceternity (f.eks. gradient-rammer), Framer Motion der det løfter, Origin UI-inspirerte skjemaer
- **Fokus:** atmosfære, luksus, følelse — fortsatt med lesbar kontrast og ytelse i tankene
