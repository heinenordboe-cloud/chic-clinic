# 🚀 prosess.md — Tradematch arbeidsflyt

> Strømlinjeformet prosess fra lead til faktura. `context/` er kilde til sannhet sammen med `memory.md` og `CLAUDE.md`.

---

## STEG 1 — FINN LEAD (10 min)

- Outscraper → `"[bransje] Trondheim Norway"`
- Filter: **has website = false**, limit 50
- Beste lead: ingen eller gammel nettside, aktiv Google-profil
- Logg i CRM: navn, bransje, tlf, e-post

---

## STEG 2 — CLAUDE LAGER PROMPT (5 min)

- Send Claude: navn, bransje, tlf, e-post, adresse, tjenester
- Claude velger automatisk: bransjestil, font, farge, **animasjonsnivå (1–3)** — se `context/21st-dev.md`
- Kopier ferdig Cursor-prompt fra `cursor-prompt-mal.md` (rot) med utfylt **FYLL INN HER**

---

## STEG 3 — CURSOR BYGGER (15–30 min)

- Åpne `tradematch-base-template` i Cursor
- Ctrl+L → lim inn prompt
- Sjekk `localhost:3000` på mobil (375px i DevTools)
- `npm run build` → **0 feil**

---

## STEG 4 — DEPLOY (2 min)

- **`npx vercel --prod`** (aldri GitHub-integrasjon som primær deploy)
- Kopier live URL
- Logg URL i CRM

---

## STEG 5 — WHATSAPP (2 min)

```
Hei [Fornavn]! Jeg har laget en demo-nettside for 
[Bedriftsnavn] — tar 30 sekunder å se: [URL]. 
Hva synes du? 😊
```

- Maks 3 setninger, alltid fornavn, alltid live lenke
- Én oppfølging etter 2 dager hvis ingen svar

---

## STEG 6 — RING (5–10 min)

- Ring 09–16 norsk tid (03–10 EST)
- «Hei, jeg heter Heine fra Tradematch. Jeg har laget en gratis demo til dere — har du 2 minutter?»
- Send URL på SMS mens du snakker
- Pris: **6 000 kr** engang + **500 kr/mnd**

---

## STEG 7 — SALG → LEVER → FAKTURER

- Avklar: domene, logo, farger, tekst
- Tilpass og deploy ferdig nettside
- Send faktura via **fiken.no**

---

## UKENTLIG RUTINE

| Dag | Fokus |
|-----|--------|
| Man | 10 leads |
| Tir | 3 demoer |
| Ons | Ring |
| Tor | Følg opp |
| Fre | Lever |
