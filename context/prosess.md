# 🚀 prosess.md — Tradematch arbeidsflyt

> Strømlinjeformet prosess fra lead til faktura. `context/` er kilde til sannhet sammen med `memory.md` og `CLAUDE.md`.

---

## GIT-RUTINE PER KUNDE

**Før du starter ny kunde**

1. Kopier `tradematch-base-template` til ny mappe (bytt ut `kundenavn` med f.eks. `hansen-vvs`):

   ```text
   xcopy /E /I tradematch-base-template kundenavn
   ```

2. Opprett nytt GitHub-repo: [github.com/new](https://github.com/new) — navn: `kundenavn` (f.eks. `hansen-vvs`).

3. I den nye mappen (slett evt. medkopiert `.git` fra malen først, så du får et rent repo):

   ```text
   cd kundenavn
   git init
   git branch -M main
   git add .
   git commit -m "feat: initiell oppsett [kundenavn]"
   git remote add origin https://github.com/heinenordboe-cloud/kundenavn.git
   git push -u origin main
   ```

**Etter hver arbeidsøkt — alltid lagre til GitHub**

```text
git add .
git commit -m "feat: [beskriv endring]"
git push origin main
npx vercel --prod
```

Aldri jobb kun lokalt — push til GitHub etter hver økt. Hvis PC krasjer og koden ikke er pushet, er arbeid tapt.

---

## REPO-STRUKTUR

GitHub: **heinenordboe-cloud**

- `tradematch-base-template` — mal; **aldri rediger direkte** (kopier til ny kundemappe)
- `tradematch` — tradematch.no salgsnettside
- `chic-clinic` — Ragnhild, Elgvegen 11
- `[kundenavn]` — ny repo per kunde

---

## NY PC / NY MASKIN

For å gjenopprette alt på ny PC:

1. Installer: Node.js, Git, Cursor, Vercel CLI
2. `git clone https://github.com/heinenordboe-cloud/tradematch-base-template`
3. `git clone https://github.com/heinenordboe-cloud/chic-clinic`
4. `npm install` i hver mappe der det trengs
5. `npx vercel login`

Da er miljøet tilbake på omtrent ti minutter.

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

- For **ny kunde**: jobb i kundens mappe (kopi fra malen), ikke direkte i `tradematch-base-template` — se **GIT-RUTINE PER KUNDE** over.
- Åpne kundemappen i Cursor
- Ctrl+L → lim inn prompt
- Sjekk `localhost:3000` på mobil (375px i DevTools)
- `npm run build` → **0 feil**

---

## STEG 4 — DEPLOY (2 min)

- Commit og push til GitHub (se **GIT-RUTINE PER KUNDE**)
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
