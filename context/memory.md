# 🧠 memory.md — Tradematch Prosjekthukommelse

> Dette er "hjernen" til Tradematch-prosjektet. Les denne filen før du foreslår ny kode eller gjør endringer.

---

## 🏢 Prosjektoversikt

- **Prosjektnavn:** Tradematch
- **Domene:** tradematch.no
- **Formål:** Profesjonelle Next.js-nettsider for norske småbedrifter
- **Målgruppe:** Norske småbedrifter over hele Norge

---

## 💼 Forretningsregler

### Prisstruktur
- **Standard:** 4 990 kr engangssum — 1 side, levering 5–7 dager
- **Premium:** 7 990 kr engangssum — opptil 3 sider, levering 3–5 dager
- **Månedlig vedlikehold:** 500 kr/mnd
- **Kontakt:** +47 940 32 243 / post.tradematch@gmail.com

---

## 🎨 Design-filosofi

1. All tekst på profesjonell norsk bokmål
2. BlurFade på alle seksjoner (Magic UI — bruk @Docs)
3. BentoGrid for tjenesteoversikt (Magic UI — bruk @Docs) — **alle kort like store** med mindre kunden eksplisitt ber om annet
4. Aldri samme layout på to kundesider
5. Tailwind CSS — unngå inline styles der klasser dekker behovet (unntak: f.eks. `object-position` på `next/image` der det trengs)
6. `next/image` med `priority` på hero, riktig `sizes` overalt
7. `next/font` — aldri CDN-fonter
8. **Visuelt nivå (1 / 2 / 3)** velges etter bransje — se `context/21st-dev.md` (seksjon «Visuelt nivå per bransje»)

---

## 🛠️ Teknologistakk

| Teknologi | Versjon | Bruk |
|-----------|---------|------|
| Next.js | 15.x (App Router) | Rammeverk |
| Tailwind CSS | 3.x | Styling |
| shadcn/ui | Latest | UI-komponenter (Button, Sheet, Label, Input, Textarea, …) |
| Magic UI | Latest | BlurFade, BentoGrid (offisiell dokumentasjon) |
| Aceternity UI | Latest | Luksus-effekter (f.eks. Background Gradient) — **kun nivå 3** |
| Origin UI | Latest | Skjema-/feltmønstre (inspirasjon + shadcn/Radix i praksis) — **kun nivå 3** |
| Framer Motion | Latest | Animasjoner (BlurFade bygger på dette; ekstra motion **kun der nivå tillater det**) |
| TypeScript | 5.x | Typesikkerhet |
| Vercel | — | Hosting — **deploy med `npx vercel --prod`** (se kjente feil) |

---

## ⚠️ Kjente feil og løsninger

### Vercel / deploy
- **Deploy alltid via `npx vercel --prod`** fra prosjektmappen — **ikke** stol på GitHub-integrasjon som primær flyt (unngår rot med root directory og hook-feil).
- Aldri `output: "standalone"` i `next.config.js` (Vercel-standard).
- Aldri `i18n` i `next.config.js` uten eksplisitt behov.
- Aldri `border-border`-mønster i `globals.css` som bryter bygg (se CLAUDE.md).

### Pakker og bygg
- **Alle `package.json` dependencies må stemme med faktiske imports** (f.eks. `@radix-ui/react-dialog` for Sheet). Tom dependency + kun lockfile → **bygg feiler på Vercel**.
- Etter endring i `package.json`: `npm install`, commit både `package.json` og `package-lock.json`.
- **Rare byggfeil (f.eks. robots.txt / manglende modul):** slett `.next`, kjør `npm run build` på nytt.

### Bilder
- **Aldri doble filendelser** i filnavn (f.eks. `chic-hero.jpeg.jpeg`) — navngi én gang (`chic-hero.jpg` e.l.).
- Hero-bilde: alltid **`priority`** (og gjerne `fetchPriority="high"` der det støttes) + **`object-position: center 20%`** (eller tilsvarende `style` / Tailwind) så ansikt/hode ikke klippes feil.
- Alltid beskrivende `alt`-tekst på norsk.

### Dokumentasjon
- Bruk **@Docs** (Magic UI, shadcn, Next.js, Tailwind, Aceternity, Origin UI) for **komponent-props** — ikke gjett.

---

## 📋 Cursor-regler

Avslutt ALDRI før:
- `npm run build` gir **0** feil (kjør om nødvendig flere ganger etter fiks).
- Alle imports finnes i `package.json`.
- Alle tekster er på norsk bokmål.

---

## 🔧 Verktøyflyt

1. Finn lead → Outscraper (filtrer «has website: false») — se `context/prosess.md`
2. Gi Claude lead-info → Claude / mal i `cursor-prompt-mal.md` → Cursor-prompt
3. Cursor bygger demo (følg **visuelt nivå** fra `21st-dev.md`)
4. `npm run build` — 0 feil
5. `npx vercel --prod` → live URL
6. WhatsApp + ring — se `prosess.md`

---

## 📝 Endringslogg

| Dato | Endring |
|------|---------|
| 2026-04-01 | Første ekte kundeside: Chic Clinic AS (Ragnhild, Elgvegen 11, Timma, logo PNG) |
| 2026-04-01 | Oppgradert til Next.js 15; `@radix-ui/react-dialog` må ligge i `package.json` for Vercel-bygg |
| 2026-04-01 | Aceternity UI, Origin UI (mønstre), Framer Motion dokumentert i stack |
| 2026-04-01 | Deploy: `npx vercel --prod`; unngå GitHub-integrasjon som hovedkanal |
| **01.04.2026** | **Visuelt nivå 1–3** i `21st-dev.md`; mal i `cursor-prompt-mal.md`; strømlinjeformet `prosess.md` |
| **01.04.2026** | **Kjente feil:** doble filendelser, hero `center 20%`, `.next`-cache, package.json vs. imports |
| **01.04.2026** | **CLAUDE.md** utvidet med regler for nivå, @Docs, deploy og hero |
