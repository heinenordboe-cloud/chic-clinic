import Image from "next/image";
import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";
import { Instagram } from "lucide-react";

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
            <h2 className="text-balance font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
              Galleri
            </h2>
          </div>
        </BlurFade>
        <BlurFade inView inViewMargin="-80px" delay={0.25}>
          <p className="mx-auto mb-14 max-w-xl text-balance text-center font-body text-stone-600">
            Et glimt av stemningen hos meg — styling, bryllup og hverdagsglede.
            Følg gjerne på Instagram for ferske bilder.
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
                className="object-cover transition duration-700 hover:scale-[1.02]"
                style={{ objectPosition: "center 35%" }}
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
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-gold-400/35 bg-gradient-to-br from-stone-50 to-gold-50/20 p-8 text-center shadow-sm transition hover:border-gold-500/45 hover:shadow-md md:col-span-2"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-700 transition group-hover:bg-gold-400/25">
                <Instagram className="h-7 w-7" aria-hidden />
              </div>
              <p className="font-display text-lg font-semibold text-stone-900">
                Følg Chic Clinic på Instagram
              </p>
              <p className="max-w-md text-balance font-body text-sm text-stone-600">
                {siteConfig.social.instagramHandle} · instagram.com/chicclinicas
              </p>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
