# 🎨 frontend-design.md — Tradematch Designregler

> Bruk denne filen for å lage særpregede, produksjonsklare nettsider som unngår generisk AI-estetikk. Les alltid denne før du designer en ny kundeside.

---

## 🧠 Tenk før du koder

Før du skriver en eneste linje kode, bestem deg for én tydelig estetisk retning:

| Spørsmål | Hva du skal svare på |
|----------|----------------------|
| **Formål** | Hva løser denne nettsiden? Hvem bruker den? |
| **Tone** | Velg én: minimal, luksus, lekent, industrielt, redaksjonelt, rå/brutalistisk |
| **Differensiering** | Hva er det ÉNE folk husker etter å ha besøkt siden? |

**Regel:** Velg en tydelig retning og gjennomfør den med presisjon. Både fet maksimalisme og raffinert minimalisme fungerer — nøkkelen er intensjon.

---

## ✍️ Typografi

- Bruk **aldri** generiske fonter: Inter, Roboto, Arial, system-ui
- Velg **særpregede** fonter som løfter estetikken
- Par én display-font med én raffinert brødtekst-font
- Gode kilder: Google Fonts, Fontsource

### Anbefalte font-kombinasjoner for norske småbedrifter
| Display | Brødtekst | Stemning |
|---------|-----------|----------|
| Playfair Display | Lora | Tradisjonell, tillitsvekkende |
| Syne | DM Sans | Moderne, ung |
| Fraunces | Source Serif 4 | Varm, håndverksmessig |
| Cabinet Grotesk | Outfit | Ren, profesjonell |

---

## 🎨 Farge & Tema

- Bruk CSS-variabler for konsistens
- **Én dominerende farge + én skarp accentfarge** slår alltid timid fordeling
- Unngå lilla gradienter på hvit bakgrunn (klisjé)
- Tilpass alltid til kundens bransje:

| Bransje | Fargeretning |
|---------|--------------|
| Rørlegger / VVS | Dyp blå, stål, hvit |
| Elektriker | Gul accent, mørkegrå |
| Snekker / Tømrer | Varm brun, krem, grønn |
| Maler | Frisk, lys, luftig |
| Renholdsbyrå | Mint, hvit, turkis |

---

## 🎬 Animasjon & Bevegelse

- Bruk alltid **BlurFade** fra Magic UI for innlasting av seksjoner
- Stagger delays: `delay={0.25}`, `delay={0.5}`, `delay={0.75}` osv.
- Én gjennomtenkt sidelasting slår mange spredte mikro-interaksjoner
- Hover-states skal overraske positivt
- Scroll-triggering for seksjoner under fold

---

## 📐 Layout & Komposisjon

- Unngå forutsigbare layouts — bruk asymmetri og overlapp der det passer
- Generøs negativ plass ELLER kontrollert tetthet — ikke midt imellom
- **BentoGrid** alltid for tjenesteoversikt
- Bryt ut av rutenettet på Hero-seksjonen for å skape minneverdig førsteinntrykk

---

## 🌆 Bakgrunner & Visuelle detaljer

Skap atmosfære fremfor flate farger. Bruk:
- Gradient meshes
- Støyteksturer (noise)
- Geometriske mønstre
- Dramatiske skygger
- Dekorative kanter

---

## 🚫 Aldri gjør dette

- ❌ Generiske AI-layouts (hero + 3 kolonner + footer)
- ❌ Space Grotesk som font (overbrukt)
- ❌ Lilla/blå gradient på hvit bakgrunn
- ❌ Stockfoto-ikoner fra FontAwesome uten særpreg
- ❌ Cookie-cutter design som ikke reflekterer kundens bransje

---

## ✅ Sjekkliste før levering

- [ ] Særpreget font-par valgt (ikke Inter/Roboto)
- [ ] Fargepalett tilpasset kundens bransje
- [ ] BlurFade på alle seksjoner
- [ ] BentoGrid for tjenester
- [ ] Fungerer på mobil (responsive)
- [ ] All tekst på profesjonell norsk bokmål
- [ ] Kontaktinfo synlig: +47 940 32 243 / post.tradematch@gmail.com
