# ⌨️ commands.md — Tradematch Terminalkommandoer

> Alle relevante kommandoer for utvikling, installasjon, bygging og deployment.

---

## 🚀 Prosjektoppsett (ny kunde)

```bash
# Klon mal-repo eller opprett nytt Next.js-prosjekt
npx create-next-app@latest kundenavn --typescript --tailwind --eslint --app

# Gå inn i mappen
cd kundenavn

# Start dev-server
npm run dev
```

---

## 📦 shadcn/ui

```bash
# Initialiser shadcn/ui i prosjektet
npx shadcn@latest init

# Installer enkeltkomponenter
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add separator
npx shadcn@latest add navigation-menu
npx shadcn@latest add sheet          # Mobil-meny/drawer
npx shadcn@latest add accordion
npx shadcn@latest add dialog

# Installer flere på én gang
npx shadcn@latest add button card badge input textarea
```

---

## ✨ Magic UI

```bash
# Installer Magic UI-komponenter (CLI)
npx magicui-cli@latest add blur-fade
npx magicui-cli@latest add bento-grid
npx magicui-cli@latest add animated-gradient-text
npx magicui-cli@latest add animated-shiny-text
npx magicui-cli@latest add border-beam
npx magicui-cli@latest add number-ticker
npx magicui-cli@latest add shine-border
```

---

## 🏗️ Build & Produksjon

```bash
# Bygg for produksjon
npm run build

# Kjør produksjonsbygg lokalt (test før deploy)
npm run start

# Lint-sjekk
npm run lint
```

---

## ☁️ Vercel Deployment

```bash
# Installer Vercel CLI (én gang)
npm install -g vercel

# Logg inn
vercel login

# Deploy til preview (test)
vercel

# Deploy til produksjon
vercel --prod

# Sett miljøvariabler
vercel env add VARIABELNAVN

# Se alle deployments
vercel ls
```

---

## 🔀 Git-rutiner

```bash
# Standard commit-flyt
git add .
git commit -m "feat: legg til Hero-seksjon for [kundenavn]"
git push origin main

# Commit-typer (bruk konsekvent)
# feat:     Ny funksjon
# fix:      Feilretting
# style:    Styling/design-endringer
# refactor: Kodestruktur uten ny funksjon
# docs:     Oppdatering av .md-filer
# chore:    Konfig, avhengigheter

# Ny branch per kunde (anbefalt)
git checkout -b kunde/bedriftsnavn
git push origin kunde/bedriftsnavn
```

---

## 📦 Pakkebehandling

```bash
# Installer avhengigheter etter kloning
npm install

# Oppdater alle pakker
npm update

# Sjekk utdaterte pakker
npm outdated

# Installer spesifikk pakke
npm install pakkenavn

# Installer dev-avhengighet
npm install -D pakkenavn
```

---

## 🔍 Nyttige snarveier

```bash
# Se port som kjører
lsof -i :3000

# Drep prosess på port 3000 (om dev-server henger)
kill -9 $(lsof -t -i:3000)

# Tøm Next.js-cache
rm -rf .next && npm run dev
```
