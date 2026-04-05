"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { Facebook, Instagram, Menu } from "lucide-react";

const links = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#produkter", label: "Produkter" },
  { href: "#book-time", label: "Book time" },
  { href: "#sertifiseringer", label: "Sertifiseringer" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#galleri", label: "Galleri" },
  { href: "#anmeldelser", label: "Kundeomtaler" },
  { href: "#kontakt", label: "Kontakt" },
];

const navHover = "transition hover:text-gold-700";

export function Navbar() {
  const { phoneDisplay, phoneTel } = siteConfig;
  const facebookUrl = siteConfig.social.facebook?.trim();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
      <nav
        className="relative mx-auto flex h-[4.5rem] max-w-6xl items-center gap-3 px-4"
        aria-label="Hovednavigasjon"
      >
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-6">
          <Link
            href="/"
            className="shrink-0 font-display text-base font-semibold tracking-tight text-stone-900 transition hover:text-gold-800 sm:text-lg"
          >
            {siteConfig.name}
          </Link>
          <div className="hidden items-center gap-5 lg:flex">
            {links.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn("text-sm font-medium text-stone-600", navHover)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-2">
          <div className="mr-1 hidden items-center gap-0.5 md:flex">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-stone-500 transition hover:bg-stone-100 hover:text-gold-700"
              aria-label={`Instagram ${siteConfig.social.instagramHandle}`}
            >
              <Instagram className="h-4 w-4" aria-hidden />
            </a>
            {facebookUrl ? (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-stone-500 transition hover:bg-stone-100 hover:text-gold-700"
                aria-label={siteConfig.social.facebookLabel}
              >
                <Facebook className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            {links.slice(4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn("text-sm font-medium text-stone-600", navHover)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={`tel:${phoneTel}`}
            className="hidden whitespace-nowrap text-sm font-medium text-stone-700 transition hover:text-gold-800 xl:inline-block"
          >
            {phoneDisplay}
          </a>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a
              href={siteConfig.booking.timmaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.booking.label}
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Åpne meny"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
              <SheetHeader className="text-left">
                <SheetTitle>Meny</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-1">
                {links.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <a
                      href={link.href}
                      className="rounded-lg px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-100"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-4 border-t border-stone-100 pt-6">
                <SheetClose asChild>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-3 text-stone-600 hover:bg-stone-100 hover:text-gold-700"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </SheetClose>
                {facebookUrl ? (
                  <SheetClose asChild>
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-3 text-stone-600 hover:bg-stone-100 hover:text-gold-700"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </SheetClose>
                ) : null}
              </div>
              <div className="mt-auto flex flex-col gap-3 border-t border-stone-100 pt-6">
                <SheetClose asChild>
                  <a
                    href={`tel:${phoneTel}`}
                    className="whitespace-nowrap text-center text-base font-semibold text-gold-800 hover:underline"
                  >
                    {phoneDisplay}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-center text-sm font-medium text-stone-700 hover:text-gold-800 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={siteConfig.booking.timmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants(), "w-full")}
                  >
                    {siteConfig.booking.label}
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          <Button asChild size="sm" className="md:hidden">
            <a
              href={siteConfig.booking.timmaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
