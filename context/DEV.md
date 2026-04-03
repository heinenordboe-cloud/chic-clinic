# Utvikling og deploy

## Lokalt

```bash
npm install
npm run dev
```

Bygg før du deployer:

```bash
npm run build
```

## Produksjon (Vercel)

Fra prosjektroten (mappen med `.vercel` for dette prosjektet):

```bash
npx vercel deploy --prod --yes
```

Sørg for at du står i **riktig mappe** og er innlogget (`npx vercel login`) om nødvendig.
