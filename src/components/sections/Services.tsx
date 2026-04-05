import { BlurFade } from "@/components/magic-ui/blur-fade";
import { BentoGrid, BentoGridItem } from "@/components/magic-ui/bento-grid";
import { siteConfig } from "@/lib/site-config";

const priceClass =
  "font-display text-lg font-semibold tabular-nums text-gold-600";

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
          <p className="mx-auto mb-4 max-w-2xl text-center font-body text-stone-600">
            Hos{" "}
            <span className="font-medium text-stone-800">
              {siteConfig.owner.fullName}
            </span>{" "}
            i en liten, intim hjemmesalong med gratis parkering — profesjonelle
            behandlinger med ro og trygghet.
          </p>
          <p className="mx-auto mb-16 max-w-2xl text-center font-body text-sm text-stone-500">
            Usikker på hva som passer deg? Ta kontakt, så finner vi det sammen.
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
                {item.certification ? (
                  <p className="mt-3 border-l-2 border-gold-400/50 pl-3 font-body text-xs leading-relaxed text-stone-500">
                    {item.certification}
                  </p>
                ) : null}
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
