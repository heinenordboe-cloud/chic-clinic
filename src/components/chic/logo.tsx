import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ChicLogoProps = {
  className?: string;
};

export function ChicLogo({ className }: ChicLogoProps) {
  const logoSrc = siteConfig.brandLogoSrc?.trim();

  if (logoSrc) {
    return (
      <Link
        href="/"
        className={cn(
          "relative block h-10 w-10 shrink-0 md:h-12 md:w-12",
          className
        )}
        aria-label="Chic Clinic AS — til forsiden"
      >
        <Image
          src={logoSrc}
          alt="Chic Clinic — logo"
          width={512}
          height={512}
          className="h-full w-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 40px, 48px"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "font-display text-xl font-semibold tracking-tight text-stone-900 transition hover:text-amber-800 sm:text-2xl",
        className
      )}
      aria-label="Chic Clinic AS — til forsiden"
    >
      Chic Clinic
    </Link>
  );
}
