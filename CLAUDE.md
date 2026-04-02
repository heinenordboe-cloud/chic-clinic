# 🧠 CLAUDE.md — Tradematch Kontrolltårn

> Leses automatisk av Cursor ved oppstart. Alt er her.

---

## 🏢 Prosjekt

**Eier:** Heine Nordbø (student i Indiana, USA — EST)  
**Marked:** Norske småbedrifter, Trondheim  
**Kontakt:** post.tradematch@gmail.com / +47 940 32 243  
**Mål sommeren 2026:** 70 000 kr profitt

---

## 📁 Kontekstfiler

| Fil | Innhold |
|-----|---------|
| `context/memory.md` | Prosjekthukommelse, priser, kjente feil |
| `context/files.md` | Filstruktur |
| `context/commands.md` | Terminalkommandoer |
| `context/frontend-design.md` | Designregler |
| `context/ui-ux-pro-max.md` | UX-prinsipper |
| `context/seo.md` | Lokal SEO Trondheim |
| `context/tools.md` | Verktøydokumentasjon |
| `context/21st-dev.md` | Bransjestiler + **visuelt nivå 1–3** |
| `context/prosess.md` | Lead → demo → salg |
| `cursor-prompt-mal.md` | Kopierbar Cursor-prompt |

---

## 🛠️ Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS
- shadcn/ui + Magic UI + (Aceternity / Origin UI / ekstra Framer Motion **kun nivå 3**)
- Framer Motion (BlurFade bygger på dette)
- Vercel — deploy: **`npx vercel --prod`**
- TypeScript

---

## ⚠️ Kritiske regler

1. All tekst på profesjonell norsk bokmål  
2. Alltid **BlurFade** på alle seksjoner — bruk **@Magic UI** docs  
3. Alltid **BentoGrid** for tjenester — alle kort **like store** — bruk **@Magic UI** docs  
4. Aldri `output: standalone` i `next.config.js`  
5. Aldri `border-border` i `globals.css` (som bryter bygg)  
6. Aldri CDN-fonter — alltid `next/font`  
7. Alltid `npm run build` med **0 feil** før avslutning — fiks og bygg på nytt til det er rent  
8. **package.json** må inneholde alle brukte pakker (f.eks. `@radix-ui/react-dialog` for Sheet)  
9. Ved rare byggfeil: **slett `.next`** og kjør `npm run build` igjen  
10. **Bilder:** aldri doble filendelser (f.eks. `.jpeg.jpeg`)  
11. Les **`cursor-prompt-mal.md`** og **`context/prosess.md`** for lead → demo → deploy  
12. **Visuelt nivå** velges automatisk fra **`context/21st-dev.md`** basert på bransje (nivå 1 / 2 / 3)  
13. Deploy alltid via **`npx vercel --prod`** — **aldri** GitHub-integrasjon  
14. Bruk alltid **@Docs** for komponent-props — **aldri gjett**  
15. **Hero-bilde:** alltid `priority` + `object-position="center 20%"` (eller tilsvarende som sikrer god utsnitt)  

---

## 🚀 Cursor-prompt (start)

```
@context/memory.md @context/CLAUDE.md @context/frontend-design.md
@context/ui-ux-pro-max.md @context/seo.md @context/21st-dev.md
@Magic UI @shadcn @nextjs @tailwind @aceternity @originui
```

Full mal med **FYLL INN HER** ligger i **`cursor-prompt-mal.md`** (prosjektrot).

Etter bygg: `npm run build` → fiks alle feil → `npm run build` igjen til **0 feil**.

---

## 📊 Leads — beste målgrupper

- Bedrifter uten nettside (Outscraper: «has website: false»)
- Nettside fra før 2018
- Ingen mobilvennlig side
- Bransjer: rørlegger, elektriker, tannlege, fysioterapeut, regnskapsfører, frisør, bilverksted, snekker
