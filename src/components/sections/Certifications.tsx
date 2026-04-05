import { BlurFade } from "@/components/magic-ui/blur-fade";
import { BackgroundGradient } from "@/components/aceternity/background-gradient";
import { siteConfig } from "@/lib/site-config";
import { Award, Sparkles } from "lucide-react";

export function Certifications() {
  const { elleebana, microneedling } = siteConfig.certifications;

  return (
    <section
      id="sertifiseringer"
      className="scroll-mt-24 border-t border-stone-200/80 bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade inView inViewMargin="-80px" delay={0}>
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
              Sertifiseringer og kompetanse
            </h2>
          </div>
        </BlurFade>
        <BlurFade inView inViewMargin="-80px" delay={0.25}>
          <p className="mx-auto mb-14 max-w-xl text-center font-body text-stone-600">
            Trygghet for deg som kunde — jeg investerer i opplæring og anerkjente
            metoder.
          </p>
        </BlurFade>

        <div className="grid gap-8 md:grid-cols-2">
          <BlurFade inView inViewMargin="-50px" delay={0.5}>
            <BackgroundGradient
              animate={false}
              containerClassName="rounded-2xl"
              className="rounded-[calc(1rem-1px)] p-8"
            >
              <article className="flex h-full flex-col">
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-gold-600/40 bg-gold-50/50 px-4 py-2 text-sm font-semibold text-gold-800">
                  <Award className="h-4 w-4 shrink-0" aria-hidden />
                  Tillitsbadge
                </div>
                <h3 className="font-display text-2xl font-semibold text-stone-900">
                  {elleebana.title}
                </h3>
                <p className="mt-1 font-display text-lg text-gold-800">
                  {elleebana.subtitle}
                </p>
                <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-stone-600">
                  {elleebana.description}
                </p>
              </article>
            </BackgroundGradient>
          </BlurFade>

          <BlurFade inView inViewMargin="-50px" delay={0.75}>
            <article className="flex h-full flex-col rounded-2xl border border-stone-200 bg-stone-50/50 p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-stone-900 text-gold-400">
                <Sparkles className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-semibold text-stone-900">
                {microneedling.title}
              </h3>
              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-stone-600">
                {microneedling.description}
              </p>
            </article>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
