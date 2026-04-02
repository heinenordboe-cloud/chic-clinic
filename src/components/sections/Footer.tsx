import { BlurFade } from "@/components/magic-ui/blur-fade";
import { siteConfig } from "@/lib/site-config";
import { Instagram } from "lucide-react";

export function Footer() {
  const { phoneDisplay, phoneTel } = siteConfig;

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
              Est. {siteConfig.established}
            </p>
            <p className="mt-1 font-body text-sm text-stone-500">
              {siteConfig.footerCopyright}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <p className="font-body text-sm text-stone-600 sm:text-right">
              {siteConfig.address.singleLine}
            </p>
            <a
              href={`tel:${phoneTel}`}
              className="font-body text-sm font-medium text-stone-800 hover:text-amber-800 hover:underline"
            >
              {phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-body text-sm text-amber-800 hover:underline"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-body text-sm text-stone-600 transition hover:text-amber-700 sm:justify-end"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              Instagram {siteConfig.social.instagramHandle}
            </a>
            <a
              href={siteConfig.url}
              className="font-body text-sm text-stone-500 hover:text-stone-800"
            >
              chicclinic.no
            </a>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
