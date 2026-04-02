# 🛠️ tools.md — Tradematch Verktøydokumentasjon

> Dokumentasjon for teknologistakken og instrukser for korrekt bruk av Cursor @Docs for å unngå hallusinering av kode.

---

## 🖥️ Cursor — Primærverktøy

Cursor er hovedverktøyet for all kodeutvikling i Tradematch-prosjektet.

### Bruk av @Docs i Cursor

For å unngå hallusinering av komponent-APIer og props — bruk alltid `@Docs` i Cursor-prompten din for å referere til oppdatert dokumentasjon.

```
# Eksempel på korrekt Cursor-prompt:
"Lag en Hero-seksjon med @Magic UI BlurFade og @shadcn/ui Button. 
All tekst skal være på norsk bokmål."
```

### Legg til disse @Docs-kildene i Cursor

Gå til **Cursor Settings → Docs → Add Doc** og legg til:

| Navn | URL |
|------|-----|
| Magic UI | `https://magicui.design/docs` |
| shadcn/ui | `https://ui.shadcn.com/docs` |
| Next.js 14 | `https://nextjs.org/docs` |
| Tailwind CSS | `https://tailwindcss.com/docs` |

> ⚠️ **Viktig:** Referer alltid til @Docs når du ber Cursor skrive kode med shadcn/ui eller Magic UI. Uten dette kan Cursor finne på props og komponentnavn som ikke eksisterer.

---

## ✨ Magic UI

**Docs:** https://magicui.design/docs  
**GitHub:** https://github.com/magicuidesign/magicui

### Regler for bruk
- `BlurFade` skal brukes på **alle** seksjoner for konsistent innlasting
- `BentoGrid` skal brukes for **alle** tjenesteoversikter

### BlurFade — korrekt bruk
```tsx
import BlurFade from "@/components/magicui/blur-fade";

// Wrap seksjoner med BlurFade og stagger delay
<BlurFade delay={0.25} inView>
  <section>...</section>
</BlurFade>

<BlurFade delay={0.5} inView>
  <section>...</section>
</BlurFade>
```

### BentoGrid — korrekt bruk
```tsx
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";

<BentoGrid>
  {tjenester.map((tjeneste) => (
    <BentoCard
      key={tjeneste.name}
      name={tjeneste.name}
      description={tjeneste.description}
      Icon={tjeneste.icon}
      href={tjeneste.href}
      cta="Les mer"
      background={tjeneste.background}
      className={tjeneste.className}
    />
  ))}
</BentoGrid>
```

---

## 🎨 shadcn/ui

**Docs:** https://ui.shadcn.com/docs  
**Komponentliste:** https://ui.shadcn.com/docs/components

### Regler for bruk
- Alle komponenter installeres via CLI: `npx shadcn@latest add [komponent]`
- Komponenter havner automatisk i `components/ui/`
- Aldri kopier kode manuelt fra nettsiden — bruk alltid CLI

### Vanligste komponenter i Tradematch
| Komponent | Bruk |
|-----------|------|
| `Button` | CTA-knapper, skjema-knapper |
| `Card` | Innholdskort, prisoversikt |
| `Badge` | Tjenestetags |
| `Input` + `Textarea` | Kontaktskjema |
| `NavigationMenu` | Desktop-navigasjon |
| `Sheet` | Mobil-meny (hamburger) |

---

## ⚡ Next.js 14 (App Router)

**Docs:** https://nextjs.org/docs  

### Regler for bruk
- Bruk alltid **App Router** (ikke Pages Router)
- Server Components som standard — legg til `"use client"` kun ved behov (interaktivitet, hooks)
- Metadata via `export const metadata` i layout/page-filer

```tsx
// app/layout.tsx — standard oppsett
export const metadata = {
  title: "Bedriftsnavn | Tradematch",
  description: "Profesjonell nettside for [bedriftsnavn]",
};
```

---

## 🎨 Tailwind CSS

**Docs:** https://tailwindcss.com/docs  

### Regler for bruk
- Ingen inline styles eller CSS-moduler (med mindre absolutt nødvendig)
- Bruk `cn()` fra `lib/utils.ts` for conditional classes

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

---

## ☁️ Vercel

**Docs:** https://vercel.com/docs  
**Dashboard:** https://vercel.com/dashboard

### Deployment-flyt
1. Push til `main` → automatisk produksjonsdeploy
2. Push til annen branch → preview-deploy (unik URL)
3. Bruk Vercel Dashboard for miljøvariabler og domenetilknytning

### Domene
- Koble `tradematch.no` (og kundedomener) via **Vercel → Project → Domains**

---

## 📊 Fiken (Regnskap)

**URL:** https://fiken.no  
**Bruk:** Fakturering av kunder (5–8k kr engangs + 500 kr/mnd)

---

## 📋 Google Sheets CRM

**Bruk:** Sporing av leads, kunder og inntekter  
**Faner:** Leverandører | Kunder | Inntekter
