import { BlurFade } from "@/components/magic-ui/blur-fade";
import { BentoGrid, BentoGridItem } from "@/components/magic-ui/bento-grid";
import { siteConfig } from "@/lib/site-config";

const priceClass =
  "font-display text-lg font-semibold tabular-nums text-[#D97706]";

export function Services() {
  return (
    <section
      id="tjenester"
      className="scroll-mt-24 border-t border-stone-200/80 bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade inView inViewMargin="-80px" delay={0}>
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Tjenester og priser
            </h2>
          </div>
        </BlurFade>
        <BlurFade inView inViewMargin="-80px" delay={0.25}>
          <p className="mx-auto mb-16 max-w-2xl text-center font-body text-stone-600">
            Velkommen til en salong der hvert grep teller. Under finner du et
            utvalg av det jeg tilbyr — ta kontakt dersom du lurer på noe.
          </p>
        </BlurFade>

        <BlurFade inView inViewMargin="-60px" delay={0.5}>
          <BentoGrid>
            {siteConfig.serviceItems.map((item) => (
              <BentoGridItem key={item.title}>
                <h3 className="font-display text-xl font-semibold text-stone-900">
                  {item.title}
                </h3>
                {item.price ? (
                  <p className={`mt-3 ${priceClass}`}>{item.price}</p>
                ) : (
                  <p className={`mt-3 ${priceClass}`}>
                    {item.priceNote ?? "Ta kontakt"}
                  </p>
                )}
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>
                {item.priceNote && item.price ? (
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-stone-500">
                    {item.priceNote}
                  </p>
                ) : null}
              </BentoGridItem>
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </section>
  );
}
