import Image from "next/image";
import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-[4.5rem] md:items-center md:pb-0"
      aria-labelledby="hero-heading"
    >
      {/* Hero-bilde */}
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

      {/* Varm vignette — editorial, ikke tech */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/20"
        aria-hidden
      />

      {/* Editorial innhold — venstrejustert */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
        <div className="max-w-xl">

          {/* Etikett øverst */}
          <BlurFade delay={0} direction="up" offset={8}>
            <p className="mb-8 font-body text-xs font-normal uppercase tracking-[0.4em] text-amber-300/80">
              Chic Clinic · Trondheim · Est. 2017
            </p>
          </BlurFade>

          {/* Tagline */}
          <BlurFade delay={0.2} direction="up" offset={12}>
            <h1
              id="hero-heading"
              className="font-display text-5xl font-semibold italic leading-[1.1] text-white sm:text-6xl md:text-7xl"
            >
              <span className="sr-only">Frisør og skjønnhet i Trondheim — </span>
              {siteConfig.tagline}
            </h1>
          </BlurFade>

          {/* Gull-dekorativ linje */}
          <BlurFade delay={0.35} direction="up" offset={6}>
            <div className="my-8 flex items-center gap-4">
              <div className="h-px w-16 bg-amber-400/60" />
              <div className="h-1 w-1 rounded-full bg-amber-400/60" />
              <div className="h-px w-8 bg-amber-400/30" />
            </div>
          </BlurFade>

          {/* Beskrivelse */}
          <BlurFade delay={0.45} direction="up" offset={10}>
            <p className="font-body text-base leading-relaxed text-white/75 md:text-lg">
              Eksklusiv salong med fokus på kvalitet, ro og personlig service.
              Book time når det passer deg.
            </p>
          </BlurFade>

          {/* CTA */}
          <BlurFade delay={0.6} direction="up" offset={10}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={siteConfig.booking.timmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-none border border-amber-400/80 bg-amber-400/10 px-8 py-3.5 font-body text-sm font-medium uppercase tracking-[0.2em] text-amber-200 backdrop-blur-sm transition-all duration-300 hover:bg-amber-400/20 hover:border-amber-300"
              >
                {siteConfig.booking.label}
              </a>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="font-body text-sm text-white/55 underline underline-offset-4 transition hover:text-white/90"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Scroll-indikator — diskret */}
      <BlurFade
        className="absolute bottom-8 right-8 z-10 hidden md:block"
        delay={0.8}
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
