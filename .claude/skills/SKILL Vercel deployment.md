# Skill: Fix Vercel Deployment

## Description

Trigger this skill when a Vercel deploy fails, build logs are empty, the site shows 404/500 errors, or the user says "Vercel fungerer ikke", "build feiler", "siden er nede", "får feil på Vercel", "deployment failed". Always work through the checklist in order.

## Diagnostic checklist — always follow this order

### Check 1 — Build locally first

```bash
npm run build
```

Fix ALL errors here before pushing. Vercel fails for the same reason as local build.

### Check 2 — next.config.js

```js
// ✅ Correct — minimal and clean
const nextConfig = {}
module.exports = nextConfig

// ❌ These lines break Vercel deploy — REMOVE them
output: 'standalone'
i18n: { ... }
```

### Check 3 — globals.css

```css
/\\\* ❌ This breaks build \\\*/
border-color: hsl(var(--border));

/\\\* ✅ Replace with explicit color \\\*/
border-color: hsl(214, 32%, 91%);
```

### Check 4 — Vercel dashboard settings

Go to: Vercel Dashboard → Project → Settings → General

* Framework Preset: **Next.js**
* Install Command: `npm install` — **Override must be ON**
* Build Command: `npm run build`
* Output Directory: leave empty

### Check 5 — Empty build logs

This means Vercel cannot start the build at all.

Solution: Delete and recreate the project

1. Vercel Dashboard → Settings → Delete Project
2. Go to vercel.com/new
3. Import same GitHub repo
4. Set Install Command: `npm install` with Override ON

### Check 6 — Site builds but crashes in production

* Vercel Dashboard → Settings → Environment Variables
* All variables from `.env.local` must be added manually here

## Common errors and fixes

|Error|Fix|
|-|-|
|`Module not found`|Run `npm install` locally, push `package-lock.json`|
|`Type error`|Fix TypeScript errors locally with `npm run build`|
|`border-border` error|Remove from globals.css, use explicit color|
|Blank page in prod|Check if `"use client"` is missing on interactive components|
|404 on all routes|Check App Router structure is correct in `/app/`|
|Empty build logs|Delete and recreate Vercel project|

## Non-negotiable rules

* ❌ Never `output: standalone` in next.config.js
* ❌ Never `i18n` in next.config.js
* ❌ Never `border-border` in globals.css
* ✅ Always `npm run build` locally before pushing
* ✅ Always Override ON for Install Command in Vercel
* ✅ Install Command must always be `npm install`

