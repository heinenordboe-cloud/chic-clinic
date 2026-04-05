import { BlurFade } from "@/components/magic-ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const { phoneDisplay, phoneTel } = siteConfig;

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 border-t border-stone-200/80 bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade inView inViewMargin="-80px" delay={0}>
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
              Kontakt
            </h2>
          </div>
        </BlurFade>
        <BlurFade inView inViewMargin="-80px" delay={0.25}>
          <p className="mx-auto mb-14 max-w-xl text-center font-body text-stone-600">
            Send meg en melding via skjemaet, ring, eller book når det passer
            deg.
          </p>
        </BlurFade>

        <BlurFade inView inViewMargin="-60px" delay={0.5}>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
            <div className="space-y-8 rounded-2xl border border-stone-200 bg-stone-50/50 p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gold-600/10 p-3 text-gold-700">
                  <Mail className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-stone-900">
                    E-post
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-block font-body text-gold-800 underline-offset-4 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gold-600/10 p-3 text-gold-700">
                  <Phone className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-stone-900">
                    Telefon
                  </h3>
                  <a
                    href={`tel:${phoneTel}`}
                    className="mt-1 inline-block font-body text-gold-800 underline-offset-4 hover:underline"
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-stone-200/80 p-3 text-stone-700">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-stone-900">
                    Adresse
                  </h3>
                  <a
                    href="https://maps.google.com/?q=Elgvegen+11,+7021+Trondheim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-body text-stone-600 underline-offset-4 hover:text-gold-800 hover:underline"
                  >
                    {siteConfig.address.singleLine}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <ContactForm />
              <div className="flex flex-col justify-center rounded-2xl border border-stone-900 bg-stone-900 p-8 text-center text-white shadow-lg">
                <h3 className="font-display text-2xl font-semibold">
                  Book time
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-stone-300">
                  Se ledige timer og velg behandling i Timma.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-gold-600 hover:bg-gold-500"
                >
                  <a
                    href={siteConfig.booking.timmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gå til {siteConfig.booking.label}
                  </a>
                </Button>
                <a
                  href={`tel:${phoneTel}`}
                  className="mt-6 text-sm font-medium text-gold-200/95 underline-offset-4 hover:text-white hover:underline"
                >
                  {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
