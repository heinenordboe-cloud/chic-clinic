import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";
import { Star } from "lucide-react";

const cardStaggerDelays = [0.25, 0.5, 0.75] as const;

export function Reviews() {
  const reviews = siteConfig.reviews;

  return (
    <section
      id="anmeldelser"
      className="scroll-mt-24 border-t border-stone-200/80 bg-stone-50 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade inView inViewMargin="-80px" delay={0}>
          <div className="mb-6 text-center">
            <h2 className="text-balance font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
              Kundeomtaler
            </h2>
          </div>
        </BlurFade>

        {reviews.length === 0 ? (
          <BlurFade inView inViewMargin="-80px" delay={0.25}>
            <p className="mx-auto max-w-xl text-balance text-center font-body text-stone-600">
              Omtaler fra Facebook legges inn her når du sender meg de faktiske
              sitatene og eventuelle navn — da fyller vi inn og publiserer uten
              plassholdertekst.
            </p>
          </BlurFade>
        ) : (
          <>
            <BlurFade inView inViewMargin="-80px" delay={0.25}>
              <p className="mx-auto mb-14 max-w-xl text-balance text-center font-body text-stone-600">
                Utvalgte tilbakemeldinger fra kunder.
              </p>
            </BlurFade>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <BlurFade
                  key={`${review.name}-${i}`}
                  inView
                  inViewMargin="-40px"
                  delay={cardStaggerDelays[i] ?? 0.75}
                >
                  <article className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                    <div
                      className="mb-3 flex gap-1"
                      aria-label={`${review.rating} av 5 stjerner`}
                    >
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-gold-500 text-gold-500"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <p className="mb-4 flex-1 text-pretty font-body text-sm italic leading-relaxed text-stone-600">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-stone-900">
                        {review.name}
                      </p>
                      {review.role ? (
                        <p className="text-xs text-stone-500">{review.role}</p>
                      ) : null}
                    </div>
                  </article>
                </BlurFade>
              ))}
            </div>
          </>
        )}

        <BlurFade inView inViewMargin="-40px" delay={0.85}>
          <p className="mx-auto mt-14 max-w-2xl text-balance text-center font-body text-sm leading-relaxed text-stone-600">
            {siteConfig.reviewsClosing}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
