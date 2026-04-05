import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const { phoneDisplay, phoneTel } = siteConfig;
  const facebookUrl = siteConfig.social.facebook?.trim();

  return (
    <footer className="border-t border-stone-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 text-center sm:text-left">
        <BlurFade
          inView
          inViewMargin="-20px"
          delay={0}
          className="flex w-full flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between"
        >
          <div>
            <p className="font-display text-lg font-semibold text-stone-900">
              {siteConfig.name}
            </p>
            <p className="mt-2 font-body text-sm text-stone-500">
              {siteConfig.owner.fullName} · Est. {siteConfig.established}
            </p>
            <p className="mt-1 font-body text-sm text-stone-500">
              {siteConfig.footerCopyright}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <p className="text-balance font-body text-sm text-stone-600 sm:text-right">
              {siteConfig.address.singleLine}
            </p>
            <p className="font-body text-xs text-stone-500 sm:text-right">
              {siteConfig.address.parkingNote}
            </p>
            <a
              href={`tel:${phoneTel}`}
              className="whitespace-nowrap font-body text-sm font-medium text-stone-800 hover:text-gold-800 hover:underline sm:text-right"
            >
              {phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-body text-sm text-gold-800 hover:underline sm:text-right"
            >
              {siteConfig.email}
            </a>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 py-1.5 font-body text-sm text-stone-600 transition hover:border-gold-300 hover:text-gold-700"
              >
                <Instagram className="h-4 w-4" aria-hidden />
                {siteConfig.social.instagramHandle}
              </a>
              {facebookUrl ? (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 py-1.5 font-body text-sm text-stone-600 transition hover:border-gold-300 hover:text-gold-700"
                >
                  <Facebook className="h-4 w-4" aria-hidden />
                  {siteConfig.social.facebookLabel}
                </a>
              ) : null}
            </div>
            <a
              href={siteConfig.url}
              className="font-body text-sm text-stone-500 hover:text-stone-800 sm:text-right"
            >
              chicclinic.no
            </a>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
