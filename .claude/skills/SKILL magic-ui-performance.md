# Skill: Magic UI Performance & Animations

## Description
Trigger this skill when animations are slow or choppy, the site feels heavy on mobile, BlurFade is not working, BentoGrid looks wrong, or the user says "animasjoner funker ikke", "siden er treg", "ser dårlig ut på mobil", "BlurFade henger", "BentoGrid ser rar ut". Focus on performance, smooth animation flow, and mobile optimization.

## BlurFade — correct implementation

```tsx
import BlurFade from "@/components/magicui/blur-fade";

// Wrap every section with BlurFade
<BlurFade delay={0.1} inView>
  <section id="hero">...</section>
</BlurFade>

<BlurFade delay={0.25} inView>
  <section id="tjenester">...</section>
</BlurFade>

<BlurFade delay={0.4} inView>
  <section id="hvorfor-oss">...</section>
</BlurFade>

<BlurFade delay={0.55} inView>
  <section id="om-oss">...</section>
</BlurFade>

<BlurFade delay={0.7} inView>
  <section id="kontakt">...</section>
</BlurFade>
```

Key props:
- `inView` — animate only when section is visible, always use this
- `delay` — stagger so sections don't animate all at once
- `duration` — default 0.4s, increase to 0.6s for more dramatic effect

## BentoGrid — correct implementation

```tsx
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";

const tjenester = [
  {
    name: "Rørlegging",
    description: "Profesjonell installasjon og reparasjon",
    Icon: WrenchIcon,
    href: "#kontakt",
    cta: "Få tilbud",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-slate-800" />,
  },
];

<BentoGrid>
  {tjenester.map((t) => (
    <BentoCard key={t.name} {...t} />
  ))}
</BentoGrid>
```

Layout rules:
- 6 services: 2 large + 4 small (best visually)
- 3 services: all equal size (col-span-1)
- Always wrap in BlurFade

## Images — always use next/image

```tsx
// ✅ Correct
<Image
  src="/hero-bg.jpg"
  alt="Rørlegger i Trondheim"
  width={1200}
  height={800}
  priority  // Only on the hero image above the fold
  className="object-cover"
/>

// ❌ Never this
<img src="/hero-bg.jpg" />
```

## Mobile performance

Add to globals.css:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Mobile checklist (test at 375px)
- Hero text not clipped
- BentoGrid is single column on mobile
- Navbar has hamburger menu (shadcn Sheet)
- Phone number is clickable
- Buttons minimum 44px tall
- No horizontal scrolling

## Common problems and fixes

| Problem | Fix |
|---------|-----|
| BlurFade not animating | Check that `inView` prop is set |
| All sections animate at once | Increase stagger delay between sections |
| BentoGrid looks wrong on mobile | Add `grid-cols-1 md:grid-cols-3` |
| Site slow on mobile | Remove `priority` from all images except hero |
| Choppy animations | Reduce number of simultaneous animations |
| BlurFade import error | Check file exists in `components/magicui/` |

## Performance targets

| Metric | Target |
|--------|--------|
| Load time (mobile) | Under 3 seconds |
| Largest Contentful Paint | Under 2.5s |
| Cumulative Layout Shift | Under 0.1 |
| First Input Delay | Under 100ms |

Test at: https://pagespeed.web.dev
