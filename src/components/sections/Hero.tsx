import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { HeroSpotlight } from "@/components/aceternity/hero-spotlight";
import { BlurFade } from "@/components/magic-ui/blur-fade";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-[4.5rem]"
      aria-labelledby="hero-heading"
    >
      <Image
        src={siteConfig.images.hero}
        alt="Frisør i arbeid hos Chic Clinic — profesjonell hårpleie i Trondheim"
        fill
        priority={true}
        fetchPriority="high"
        className="object-cover"
        style={{ objectPosition: "center 20%" }}
        sizes="100vw"
        quality={85}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-stone-900/55 via-stone-900/45 to-stone-900/65"
        aria-hidden
      />
      <HeroSpotlight />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <BlurFade delay={0} direction="up" offset={10}>
          <p className="mb-6 font-display text-sm font-medium uppercase tracking-[0.35em] text-white/85">
            Chic Clinic · Trondheim · siden 2017
          </p>
        </BlurFade>
        <BlurFade delay={0.25} direction="up" offset={10}>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl md:leading-[1.08]"
          >
            <span className="sr-only">Frisør og skjønnhet i Trondheim — </span>
            {siteConfig.tagline}
          </h1>
        </BlurFade>
        <BlurFade delay={0.5} direction="up" offset={10}>
          <p className="mx-auto mt-8 max-w-xl font-body text-lg leading-relaxed text-white/90">
            Eksklusiv salong med fokus på kvalitet, ro og personlig service. Book
            time når det passer deg.
          </p>
        </BlurFade>
        <BlurFade delay={0.75} direction="up" offset={10}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="pointer-events-auto bg-amber-600 hover:bg-amber-700"
            >
              <a
                href={siteConfig.booking.timmaUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.booking.label}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="pointer-events-auto border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              <a href="#tjenester">Se tjenester</a>
            </Button>
          </div>
        </BlurFade>
      </div>

      <BlurFade
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        delay={0.75}
        direction="up"
        offset={12}
      >
        <a
          href="#tjenester"
          className="flex flex-col items-center gap-1 text-white/80 transition hover:text-white"
          aria-label="Scroll til tjenester"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Utforsk
          </span>
          <ChevronDown
            className="h-6 w-6 motion-safe:animate-bounce"
            aria-hidden
          />
        </a>
      </BlurFade>
    </section>
  );
}
