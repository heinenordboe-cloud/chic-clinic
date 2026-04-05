import Image from "next/image";
import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";

const phoneClass =
  "whitespace-nowrap font-body text-sm text-white/80 underline underline-offset-4 transition hover:text-white";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden pb-16 pt-[4.5rem] md:pb-20"
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

      <div className="relative z-10 flex flex-1 flex-col justify-end md:justify-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
          <div className="max-w-xl">
            <BlurFade delay={0.1} direction="up" offset={10}>
              <p className="font-body text-sm font-semibold text-white md:text-base">
                {siteConfig.owner.fullName}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.25em] text-white/70 md:text-sm md:tracking-[0.2em]">
                Frisør siden 2000 · over 26 års erfaring
              </p>
            </BlurFade>

            <BlurFade delay={0.2} direction="up" offset={12}>
              <h1
                id="hero-heading"
                className="mt-6 text-balance font-display text-5xl font-semibold italic leading-[1.1] text-white sm:text-6xl md:text-7xl"
              >
                <span className="sr-only">Frisør og skjønnhet i Trondheim — </span>
                {siteConfig.tagline}
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} direction="up" offset={6}>
              <div className="my-6 flex items-center gap-4 md:my-7">
                <div className="h-px w-16 bg-gold-400/75" />
                <div className="h-1 w-1 rounded-full bg-gold-400/75" />
                <div className="h-px w-8 bg-gold-400/40" />
              </div>
            </BlurFade>

            <BlurFade delay={0.4} direction="up" offset={10}>
              <p className="text-balance font-body text-base leading-relaxed text-white/85 md:text-lg">
                Liten, intim hjemmesalong i Trondheim. Book time på Timma når det
                passer deg — eller ring meg.
              </p>
            </BlurFade>

            <BlurFade delay={0.5} direction="up" offset={10}>
              <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center">
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

            <BlurFade delay={0.65} direction="up" offset={8}>
              <p className="mt-10 font-body text-[10px] font-normal uppercase tracking-[0.45em] text-white/55 md:mt-12">
                Chic Clinic · Trondheim · Est. {siteConfig.established}
              </p>
            </BlurFade>
          </div>
        </div>
      </div>

      <BlurFade
        className="absolute bottom-6 right-6 z-10 hidden md:block"
        delay={0.75}
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
