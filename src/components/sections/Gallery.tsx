import Image from "next/image";
import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";

export function Gallery() {
  const items = siteConfig.images.gallery;

  return (
    <section
      id="galleri"
      className="scroll-mt-24 border-t border-stone-200/80 bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade inView inViewMargin="-80px" delay={0}>
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
              Galleri
            </h2>
          </div>
        </BlurFade>
        <BlurFade inView inViewMargin="-80px" delay={0.25}>
          <p className="mx-auto mb-14 max-w-xl text-center font-body text-stone-600">
            Et glimt av stemningen hos meg — styling, bryllup og hverdagsglede.
          </p>
        </BlurFade>

        <BlurFade inView inViewMargin="-60px" delay={0.5}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-sm ring-1 ring-stone-200/80 md:col-span-2 md:aspect-[21/9]">
              <Image
                src={items[0].src}
                alt={items[0].alt}
                fill
                className="object-cover transition duration-700 hover:scale-[1.02]"
                style={{ objectPosition: "center center" }}
                sizes="(max-width: 768px) 100vw, min(1152px, 100vw)"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 shadow-sm ring-1 ring-stone-200/80">
              <Image
                src={items[1].src}
                alt={items[1].alt}
                fill
                className="object-cover grayscale transition duration-700 hover:grayscale-0"
                style={{ objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 shadow-sm ring-1 ring-stone-200/80">
              <Image
                src={items[2].src}
                alt={items[2].alt}
                fill
                className="object-cover object-center grayscale transition duration-700 hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
