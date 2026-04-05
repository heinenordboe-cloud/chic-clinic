import Image from "next/image";
import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const logoSrc = siteConfig.brandLogoSrc;

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden pb-20 pt-[4.5rem]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.images.hero}
          alt="Frisør i arbeid hos Chic Clinic — profesjonell hårpleie i Trondheim"
          fill
          priority={true}
          fetchPriority="high"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
          sizes="100vw"
          quality={90}
        />
      </div>

      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-stone-950/75 via-transparent to-stone-950/25"
        aria-hidden
      />

      {/* Tillitsstripe + galleri — øverst i hero */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl justify-center gap-10 px-6 pt-5 md:gap-20 md:pt-6">
        <BlurFade delay={0} direction="down" offset={6}>
          <nav
            className="flex items-center gap-8 text-[10px] font-medium uppercase tracking-[0.35em] text-white/65 md:text-xs"
            aria-label="Hurtiglenker i hero"
          >
            <a
              href="#sertifiseringer"
              className="transition hover:text-gold-300"
            >
              Sertifiseringer
            </a>
            <span className="text-white/25" aria-hidden>
              ·
            </span>
            <a href="#galleri" className="transition hover:text-gold-300">
              Galleri
            </a>
          </nav>
        </BlurFade>
      </div>

      {/* Stor gjennomsiktig gull-logo — juster --chic-hero-logo-shift i globals.css for presis linje mot hero-bilde */}
      {logoSrc ? (
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-[5] flex justify-center px-4"
          aria-hidden
        >
          <div
            className="relative h-[min(32vh,280px)] w-[min(90vw,520px)]"
            style={{
              transform: "translateY(var(--chic-hero-logo-shift, 0px))",
            }}
          >
            <Image
              src={logoSrc}
              alt=""
              fill
              className="object-contain object-top opacity-[0.42]"
              sizes="(max-width: 768px) 90vw, 520px"
              priority
              style={{
                filter:
                  "brightness(1.12) sepia(0.4) saturate(1.65) hue-rotate(-5deg) drop-shadow(0 0 42px rgba(212,175,55,0.4))",
              }}
            />
          </div>
        </div>
      ) : null}

      <div className="relative z-10 mt-auto flex flex-1 flex-col justify-end md:justify-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
          <div className="max-w-xl">
            <BlurFade delay={0.15} direction="up" offset={10}>
              <p className="font-body text-sm font-medium text-gold-200/95 md:text-base">
                {siteConfig.owner.fullName}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.25em] text-white/55 md:text-sm md:tracking-[0.2em]">
                Frisør siden 2000 · over 26 års erfaring
              </p>
            </BlurFade>

            <BlurFade delay={0.25} direction="up" offset={12}>
              <h1
                id="hero-heading"
                className="mt-6 font-display text-5xl font-semibold italic leading-[1.1] text-white sm:text-6xl md:text-7xl"
              >
                <span className="sr-only">Frisør og skjønnhet i Trondheim — </span>
                {siteConfig.tagline}
              </h1>
            </BlurFade>

            <BlurFade delay={0.35} direction="up" offset={6}>
              <div className="my-7 flex items-center gap-4">
                <div className="h-px w-16 bg-gold-400/70" />
                <div className="h-1 w-1 rounded-full bg-gold-400/70" />
                <div className="h-px w-8 bg-gold-400/35" />
              </div>
            </BlurFade>

            <BlurFade delay={0.45} direction="up" offset={10}>
              <p className="font-body text-base leading-relaxed text-white/78 md:text-lg">
                Liten, intim hjemmesalong med gratis parkering. Book time på
                Timma når det passer deg — eller ring meg.
              </p>
            </BlurFade>

            <BlurFade delay={0.55} direction="up" offset={10}>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={siteConfig.booking.timmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-none border border-gold-400/85 bg-gold-400/12 px-8 py-3.5 font-body text-sm font-medium uppercase tracking-[0.2em] text-gold-100 backdrop-blur-sm transition-all duration-300 hover:border-gold-300 hover:bg-gold-400/22"
                >
                  {siteConfig.booking.label} · Timma
                </a>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="font-body text-sm text-white/55 underline underline-offset-4 transition hover:text-white/90"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={0.7} direction="up" offset={8}>
              <p className="mt-14 font-body text-[10px] font-normal uppercase tracking-[0.45em] text-white/45">
                Chic Clinic · Trondheim · Est. {siteConfig.established}
              </p>
            </BlurFade>
          </div>
        </div>
      </div>

      <BlurFade
        className="absolute bottom-8 right-8 z-10 hidden md:block"
        delay={0.85}
        direction="up"
        offset={8}
      >
        <a
          href="#tjenester"
          className="flex flex-col items-center gap-2 text-white/30 transition hover:text-white/60"
          aria-label="Scroll til tjenester"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </a>
      </BlurFade>
    </section>
  );
}
