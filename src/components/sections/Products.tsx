import Image from "next/image";
import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";

export function Products() {
  const items = siteConfig.products;

  return (
    <section
      id="produkter"
      className="scroll-mt-24 border-t border-stone-200/80 bg-stone-50/80 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade inView inViewMargin="-80px" delay={0}>
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
              Produkter
            </h2>
          </div>
        </BlurFade>
        <BlurFade inView inViewMargin="-80px" delay={0.25}>
          <p className="mx-auto mb-14 max-w-xl text-center font-body text-stone-600">
            Et utvalg du kan kjøpe med hjem — spør gjerne i salongen for anbefaling
            til ditt hår og din stil.
          </p>
        </BlurFade>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <BlurFade
              key={p.title}
              inView
              inViewMargin="-40px"
              delay={0.35 + i * 0.15}
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm ring-1 ring-stone-100">
                <div className="relative aspect-square bg-stone-100">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    unoptimized={p.imageSrc.endsWith(".svg")}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-stone-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-display text-lg font-semibold tabular-nums text-gold-600">
                    {p.price}
                  </p>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-stone-600">
                    {p.description}
                  </p>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
