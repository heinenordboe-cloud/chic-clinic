import Image from "next/image";
import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";

const phoneClass =
  "whitespace-nowrap font-body text-sm text-white/80 underline underline-offset-4 transition hover:text-white";

export function Hero() {
  const logoSrc = siteConfig.brandLogoSrc;

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden pb-28 pt-[4.5rem] md:pb-32"
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
        className="absolute inset-0 z-[1] bg-gradient-to-r from-stone-950/88 via-stone-950/50 to-stone-950/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/35"
        aria-hidden
      />

      {/* Tydeligere leseflate for topp-lenker */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl justify-center px-6 pt-5 md:pt-6">
        <BlurFade delay={0} direction="down" offset={6}>
          <nav
            className="flex items-center gap-6 rounded-full border border-white/10 bg-stone-950/55 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-black/20 backdrop-blur-md md:gap-10 md:text-xs"
            aria-label="Hurtiglenker i hero"
          >
            <a
              href="#sertifiseringer"
              className="transition hover:text-gold-200"
            >
              Sertifiseringer
            </a>
            <span className="text-white/30" aria-hidden>
              ·
            </span>
            <a href="#galleri" className="transition hover:text-gold-200">
              Galleri
            </a>
          </nav>
        </BlurFade>
      </div>

      <div className="relative z-10 mt-auto flex flex-1 flex-col justify-end md:justify-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
          <div className="max-w-xl">
            <BlurFade delay={0.15} direction="up" offset={10}>
              <p className="font-body text-sm font-semibold text-white md:text-base">
                {siteConfig.owner.fullName}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.25em] text-white/70 md:text-sm md:tracking-[0.2em]">
                Frisør siden 2000 · over 26 års erfaring
              </p>
            </BlurFade>

            <BlurFade delay={0.25} direction="up" offset={12}>
              <h1
                id="hero-heading"
                className="mt-6 text-balance font-display text-5xl font-semibold italic leading-[1.1] text-white sm:text-6xl md:text-7xl"
              >
                <span className="sr-only">Frisør og skjønnhet i Trondheim — </span>
                {siteConfig.tagline}
              </h1>
            </BlurFade>

            <BlurFade delay={0.35} direction="up" offset={6}>
              <div className="my-7 flex items-center gap-4">
                <div className="h-px w-16 bg-gold-400/75" />
                <div className="h-1 w-1 rounded-full bg-gold-400/75" />
                <div className="h-px w-8 bg-gold-400/40" />
              </div>
            </BlurFade>

            <BlurFade delay={0.45} direction="up" offset={10}>
              <p className="text-balance font-body text-base leading-relaxed text-white/85 md:text-lg">
                Liten, intim hjemmesalong i Trondheim. Book time på Timma når det
                passer deg — eller ring meg.
              </p>
            </BlurFade>

            <BlurFade delay={0.55} direction="up" offset={10}>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={siteConfig.booking.timmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-none border border-gold-400/90 bg-gold-500/15 px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-black/25 backdrop-blur-sm transition-all duration-300 hover:border-gold-300 hover:bg-gold-500/25"
                >
                  {siteConfig.booking.label} · Timma
                </a>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className={phoneClass}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={0.7} direction="up" offset={8}>
              <p className="mt-12 font-body text-[10px] font-normal uppercase tracking-[0.45em] text-white/55">
                Chic Clinic · Trondheim · Est. {siteConfig.established}
              </p>
            </BlurFade>
          </div>
        </div>
      </div>

      {/* Original logo — sterk lesbarhet; «H»-streken justeres mot skjøt mot neste seksjon via --chic-hero-logo-h-nudge */}
      {logoSrc ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] flex justify-center px-4"
          aria-hidden
        >
          <div
            className="relative h-[min(20vh,200px)] w-[min(88vw,440px)] md:h-[min(24vh,240px)] md:w-[min(80vw,480px)]"
            style={{
              transform: "translateY(var(--chic-hero-logo-h-nudge, 0px))",
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl bg-stone-950/25 blur-xl"
              aria-hidden
            />
            <Image
              src={logoSrc}
              alt=""
              fill
              className="relative z-[1] object-contain object-bottom drop-shadow-[0_6px_32px_rgba(0,0,0,0.55)]"
              sizes="(max-width: 768px) 88vw, 480px"
              priority
            />
          </div>
        </div>
      ) : null}

      <BlurFade
        className="absolute bottom-8 right-8 z-10 hidden md:block"
        delay={0.85}
        direction="up"
        offset={8}
      >
        <a
          href="#tjenester"
          className="flex flex-col items-center gap-2 text-white/35 transition hover:text-white/65"
          aria-label="Scroll til tjenester"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/35 to-transparent" />
        </a>
      </BlurFade>
    </section>
  );
}
