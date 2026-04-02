import { BlurFade } from "@/components/magic-ui/blur-fade";
import { BackgroundGradient } from "@/components/aceternity/background-gradient";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { CalendarHeart } from "lucide-react";

export function BookTime() {
  return (
    <section
      id="book-time"
      className="scroll-mt-24 border-t border-stone-200/80 bg-stone-100/80 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <BackgroundGradient
          animate
          className="px-8 py-16 sm:px-14 sm:py-20"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 z-0 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 z-0 h-56 w-56 rounded-full bg-stone-200/40 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <BlurFade inView inViewMargin="-80px" delay={0}>
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-600 text-white shadow-md shadow-amber-900/10">
                <CalendarHeart className="h-7 w-7" aria-hidden />
              </div>
            </BlurFade>
            <BlurFade inView inViewMargin="-80px" delay={0.25}>
              <h2 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
                Book time
              </h2>
            </BlurFade>
            <BlurFade inView inViewMargin="-80px" delay={0.5}>
              <p className="mt-5 font-body text-lg leading-relaxed text-stone-600">
                Jeg bruker Timma for enkel booking. Velg behandling og tid som
                passer deg — du får bekreftelse med én gang.
              </p>
            </BlurFade>
            <BlurFade inView inViewMargin="-80px" delay={0.75}>
              <div>
                <Button asChild size="lg" className="mt-10">
                  <a
                    href={siteConfig.booking.timmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.booking.label} på Timma
                  </a>
                </Button>
                <p className="mt-6 text-sm text-stone-500">
                  Åpner i ny fane · timma.no
                </p>
              </div>
            </BlurFade>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
}
