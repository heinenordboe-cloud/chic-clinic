"use client";

import { ChicLogo } from "@/components/chic/logo";
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
import { Menu } from "lucide-react";

const links = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#book-time", label: "Book time" },
  { href: "#sertifiseringer", label: "Sertifiseringer" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#galleri", label: "Galleri" },
  { href: "#anmeldelser", label: "Kundeomtaler" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const { phoneDisplay, phoneTel } = siteConfig;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
      <nav
        className="relative mx-auto flex h-[4.5rem] max-w-6xl items-center px-4"
        aria-label="Hovednavigasjon"
      >
        <div className="hidden flex-1 items-center gap-8 md:flex">
          {links.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="absolute left-1/2 top-1/2 max-w-[min(52vw,220px)] -translate-x-1/2 -translate-y-1/2 text-center sm:max-w-none">
          <ChicLogo className="inline-flex justify-center" />
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <div className="hidden items-center gap-6 md:flex">
            {links.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 transition hover:text-amber-700"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={`tel:${phoneTel}`}
            className="hidden text-sm font-medium text-stone-700 transition hover:text-amber-800 md:inline-block"
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
                className="md:hidden"
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
              <div className="mt-auto flex flex-col gap-3 border-t border-stone-100 pt-6">
                <SheetClose asChild>
                  <a
                    href={`tel:${phoneTel}`}
                    className="text-center text-base font-semibold text-amber-800 hover:underline"
                  >
                    {phoneDisplay}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-center text-sm font-medium text-stone-700 hover:text-amber-800 hover:underline"
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
