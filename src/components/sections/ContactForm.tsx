"use client";

/**
 * Kontaktskjema: fire felt (Navn, Telefon, Melding, Tjeneste).
 * Origin UI–inspirerte felt (FieldGroup + originFieldClass); innsending via mailto.
 */

import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FieldGroup, originFieldClass } from "@/components/origin/field-group";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ChevronDown, Send } from "lucide-react";

const serviceChoices = [
  ...siteConfig.serviceItems.map((s) => s.title),
  "Annet",
] as const;

export function ContactForm({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState<string>(serviceChoices[0]);
  const [sentHint, setSentHint] = useState(false);

  const textareaOriginClass = useMemo(
    () =>
      cn(
        originFieldClass,
        "min-h-[120px] resize-y py-3 leading-relaxed"
      ),
    []
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const lines = [
        `Navn: ${name}`,
        `Telefon: ${phone}`,
        `Tjeneste: ${service}`,
        "",
        message,
      ].join("\n");
      const subject = encodeURIComponent(
        `Henvendelse fra nettsiden — ${name || "kunde"}`
      );
      const body = encodeURIComponent(lines);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setSentHint(true);
    },
    [name, phone, message, service]
  );

  return (
    <div
      className={cn(
        "rounded-2xl border border-stone-200/90 bg-gradient-to-b from-white to-stone-50/80 p-8 shadow-sm ring-1 ring-stone-100",
        className
      )}
    >
      <h3 className="font-display text-xl font-semibold text-stone-900">
        Send en melding
      </h3>
      <p className="mt-2 font-body text-sm text-stone-600">
        Fyll ut skjemaet — e-postprogrammet ditt åpnes med meldingen klar til å
        sendes.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <FieldGroup id="contact-name" label="Navn" required>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ditt fulle navn"
            className={originFieldClass}
          />
        </FieldGroup>
        <FieldGroup id="contact-phone" label="Telefon" required>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+47 …"
            className={originFieldClass}
          />
        </FieldGroup>
        <FieldGroup id="contact-service" label="Tjeneste" required>
          <div className="relative">
            <select
              id="contact-service"
              name="service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={cn(originFieldClass, "cursor-pointer appearance-none pr-10")}
            >
              {serviceChoices.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500"
              aria-hidden
            />
          </div>
        </FieldGroup>
        <FieldGroup id="contact-message" label="Melding" required>
          <Textarea
            id="contact-message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Skriv kort hva du ønsker hjelp med …"
            className={textareaOriginClass}
          />
        </FieldGroup>
        <Button type="submit" className="w-full gap-2 sm:w-auto">
          <Send className="h-4 w-4" aria-hidden />
          Åpne e-post
        </Button>
        {sentHint ? (
          <p className="text-sm text-stone-600" role="status">
            Hvis e-post ikke åpnet seg, send direkte til{" "}
            <a
              className="font-medium text-amber-800 underline-offset-2 hover:underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            .
          </p>
        ) : null}
      </form>
    </div>
  );
}
