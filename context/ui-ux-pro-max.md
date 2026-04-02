# 🖥️ ui-ux-pro-max.md — Tradematch UX-regler

> Profesjonelle UX-prinsipper for nettsider vi bygger for norske småbedrifter. En vakker nettside som ikke konverterer er verdiløs — denne filen sørger for at vi bygger begge deler.

---

## 🎯 Hovedmål for hver kundeside

Hver nettside vi bygger har **ett primært mål:** at besøkende tar kontakt med bedriften.

Alt annet er sekundært.

---

## 📱 Mobil først — alltid

Over 70% av besøkende på lokale bedriftssider kommer fra mobil. Design alltid mobil først.

### Mobilregler
- Stor, tydelig CTA-knapp — synlig uten å scrolle
- Klikkbar telefonnummer-lenke: `<a href="tel:+4712345678">`
- Klikkbar e-post-lenke: `<a href="mailto:post@bedrift.no">`
- Ingen horisontalt scrollende elementer
- Minimum 16px skriftstørrelse på brødtekst
- Minimum 44px touch-targets på knapper

---

## 🏗️ Sidestruktur (optimal rekkefølge)

```
1. NAVBAR          — Logo + Telefonnummer + "Kontakt oss"-knapp
2. HERO            — Tydelig overskrift + underoverskrift + CTA-knapp
3. TJENESTER       — BentoGrid med 3–6 tjenester
4. HVORFOR OSS     — 3 enkle fordeler (ikon + tittel + tekst)
5. OM OSS          — Kort, menneskelig tekst + bilde (valgfritt)
6. KONTAKT         — Skjema ELLER telefon/e-post tydelig fremhevet
7. FOOTER          — Adresse, telefon, e-post, org.nr
```

---

## ✍️ Copywriting-regler

### Hero-overskrift
- Skal svare på: "Hva gjør dere, og for hvem?"
- Eksempel: "Profesjonell rørlegging i Trondheim"
- Maks 6–8 ord
- Unngå: "Velkommen til [bedriftsnavn]" — dette sier ingenting

### Underoverskrift
- Utdyp verdiforslaget: hva gjør dere bedre/annerledes?
- Eksempel: "Rask respons, fast pris og 10 års erfaring"
- Maks 1–2 setninger

### CTA-knapper
- Vær spesifikk: "Få gratis befaring" slår alltid "Kontakt oss"
- Andre gode eksempler:
  - "Ring oss nå"
  - "Be om tilbud"
  - "Send melding"
  - "Book time"

---

## 🎨 UX-detaljer som utgjør forskjellen

### Navbar
- Telefonnummeret skal alltid være synlig i navbar på desktop
- Sticky navbar (følger med ved scroll)
- Hamburger-meny på mobil (bruk shadcn `Sheet`)

### Hero
- Bakgrunnsfarge eller -bilde som skaper kontrast mot tekst
- CTA-knapp i accentfarge — aldri grå
- Scroll-indikator (pil ned) om Hero er fullskjerm

### Kontaktskjema
- Maks 3–4 felter: Navn, Telefon, Melding (+ evt. Tjeneste)
- Unngå å be om mer enn nødvendig
- Tydelig bekreftelsesmelding etter innsending

### Sosiale bevis (hvis tilgjengelig)
- Google-anmeldelser / stjerner
- Antall fornøyde kunder
- År i bransjen

---

## ⚡ Ytelse & Tilgjengelighet

- Bilder: alltid bruk `next/image` med `alt`-tekst
- Fargekontrast: minimum 4.5:1 for tekst (WCAG AA)
- Semantisk HTML: `<header>`, `<main>`, `<section>`, `<footer>`
- Alle klikkbare elementer har synlig fokus-state

---

## 🚫 Vanlige UX-feil å unngå

- ❌ For mange CTA-knapper (forvirrer brukeren)
- ❌ Autoplay-video med lyd
- ❌ Pop-ups som blokkerer innholdet
- ❌ Tekst på lav-kontrast bakgrunn
- ❌ Kontaktinfo kun i footer
- ❌ "Velkommen til vår nettside" som overskrift
- ❌ Lange, uoversiktlige skjemaer

---

## ✅ UX-sjekkliste før levering

- [ ] Telefonnummer klikkbart på mobil
- [ ] CTA synlig uten scroll (above the fold)
- [ ] Tydelig verdiforslag i Hero (maks 8 ord)
- [ ] BentoGrid for tjenester
- [ ] Kontaktskjema maks 4 felter
- [ ] Sticky navbar
- [ ] Fungerer på iPhone og Android
- [ ] Footer inneholder adresse, tlf, e-post, org.nr
