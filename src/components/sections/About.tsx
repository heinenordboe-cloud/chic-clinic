import Image from "next/image";
import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";

export function About() {
  const { about, owner } = siteConfig;

  return (
    <section
      id="om-oss"
      className="scroll-mt-24 border-t border-stone-200/80 bg-stone-50 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <BlurFade inView inViewMargin="-80px" delay={0}>
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-stone-200/80 lg:mx-0">
              <Image
                src={siteConfig.images.owner}
                alt={`${owner.firstName}, eier av Chic Clinic AS i Trondheim — portrett`}
                fill
                className="object-cover"
                style={{ objectPosition: "center top" }}
                sizes="(max-width: 1024px) min(100vw, 28rem), (max-width: 1536px) 40vw, 480px"
              />
            </div>
          </BlurFade>

          <BlurFade inView inViewMargin="-80px" delay={0.25}>
            <div>
              <h2 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
                {about.title}
              </h2>
              <p className="mt-5 font-body text-lg font-medium text-stone-800">
                {about.lead}
              </p>
              <p className="mt-6 font-body leading-relaxed text-stone-600">
                {about.body}
              </p>
              <p className="mt-8 font-display text-sm uppercase tracking-[0.2em] text-amber-700">
                {owner.firstName} · Chic Clinic · Est. {siteConfig.established}
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
