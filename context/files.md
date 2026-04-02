# 📁 files.md — Tradematch Filstruktur

> Levende oversikt over prosjektets filstruktur. Oppdateres hver gang nye ruter eller store funksjoner legges til.

---

## 🗂️ Rotstruktur (Chic Clinic-demo / base-template)

```
tradematch-base-template/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Playfair + Lora, metadata, JSON-LD)
│   │   ├── page.tsx            # Forside Chic Clinic AS (/)
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── chic/
│   │   │   └── logo.tsx        # CHIC-sirkellogo (Est. 07.07.17)
│   │   ├── magic-ui/
│   │   │   ├── blur-fade.tsx   # BlurFade — seksjonsanimasjon
│   │   │   └── bento-grid.tsx  # BentoGrid — tjenester
│   │   ├── ui/
│   │   │   ├── button.tsx      # shadcn-stil Button
│   │   │   └── sheet.tsx       # Mobilmeny (Radix Dialog)
│   │   └── sections/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── Services.tsx    # BentoGrid + priser
│   │       ├── BookTime.tsx
│   │       ├── Certifications.tsx
│   │       ├── About.tsx
│   │       ├── Gallery.tsx
│   │       ├── Reviews.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── site-config.ts      # Chic Clinic — tekst, priser, bilder, Timma-URL
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── public/
│   └── images/                 # chic-*.jpeg.jpeg (hero, eier, galleri)
├── context/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⭐ Viktige komponenter

### Magic UI
| Komponent | Plassering | Bruk |
|-----------|------------|------|
| `BlurFade` | `src/components/magic-ui/blur-fade.tsx` | Seksjonsinnlasting |
| `BentoGrid` | `src/components/magic-ui/bento-grid.tsx` | Tjenesteoversikt |

### shadcn/ui
| Komponent | Plassering | Bruk |
|-----------|------------|------|
| `Button` | `src/components/ui/button.tsx` | CTA |
| `Sheet` | `src/components/ui/sheet.tsx` | Mobilnavigasjon |

---

## 🗺️ Sidestruktur (App Router)

| Rute | Fil | Status |
|------|-----|--------|
| `/` | `src/app/page.tsx` | Chic Clinic AS — aktiv demo |

---

## 📝 Endringslogg

| Dato | Endring | Oppdatert av |
|------|---------|--------------|
| 2026-03-31 | Initial oppsett av Context System | Claude |
| 2026-04-01 | Chic Clinic AS — full forside, BentoGrid, Timma, SEO | Cursor |
