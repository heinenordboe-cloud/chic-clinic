import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";
import { Star } from "lucide-react";

/** Stagger i tråd med mal: 0,25 · 0,5 · 0,75 (kortene under egen overskrift). */
const cardStaggerDelays = [0.25, 0.5, 0.75] as const;

export function Reviews() {
  return (
    <section
      id="anmeldelser"
      className="scroll-mt-24 border-t border-stone-200/80 bg-stone-50 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade inView inViewMargin="-80px" delay={0}>
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
              Kundeomtaler
            </h2>
          </div>
        </BlurFade>
        <BlurFade inView inViewMargin="-80px" delay={0.25}>
          <p className="mx-auto mb-14 max-w-xl text-center font-body text-stone-600">
            Jeg er takknemlig for hver tilbakemelding. Her vises plassholdere til
            ekte anmeldelser er klare.
          </p>
        </BlurFade>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.reviews.map((review, i) => (
            <BlurFade
              key={i}
              inView
              inViewMargin="-40px"
              delay={cardStaggerDelays[i] ?? 0.75}
            >
              <article className="flex h-full flex-col rounded-2xl border border-dashed border-stone-300 bg-white p-6 shadow-sm">
                <div
                  className="mb-3 flex gap-1"
                  aria-label={`${review.rating} av 5 stjerner`}
                >
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-500 text-amber-500"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="mb-4 flex-1 font-body text-sm italic leading-relaxed text-stone-600">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-stone-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-stone-500">{review.role}</p>
                  {review.placeholder ? (
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-amber-700">
                      Plassholder
                    </p>
                  ) : null}
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
