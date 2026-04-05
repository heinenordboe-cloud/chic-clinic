import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ChicLogoProps = {
  className?: string;
};

/**
 * Logo med myk «innfelt» ramme (glass/gradient) så den ikke ser ut som en løs kvadratisk JPG på navbar.
 */
export function ChicLogo({ className }: ChicLogoProps) {
  const logoSrc = siteConfig.brandLogoSrc?.trim();

  if (logoSrc) {
    return (
      <Link
        href="/"
        className={cn(
          "group relative flex shrink-0 items-center justify-center rounded-2xl border border-stone-200/70 bg-gradient-to-b from-white/95 to-stone-100/90 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-white/60 backdrop-blur-sm transition hover:border-gold-600/25 hover:shadow-md md:rounded-[1.35rem] md:p-2.5",
          "h-11 w-11 md:h-[3.25rem] md:w-[3.25rem]",
          className
        )}
        aria-label="Chic Clinic AS — til forsiden"
      >
        <Image
          src={logoSrc}
          alt="Chic Clinic — logo"
          width={512}
          height={512}
          className="h-full w-full object-contain object-center transition duration-300 group-hover:scale-[1.03] [filter:drop-shadow(0_1px_2px_rgba(28,25,23,0.08))]"
          priority
          sizes="(max-width: 768px) 44px, 52px"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "font-display text-xl font-semibold tracking-tight text-stone-900 transition hover:text-gold-800 sm:text-2xl",
        className
      )}
      aria-label="Chic Clinic AS — til forsiden"
    >
      Chic Clinic
    </Link>
  );
}
