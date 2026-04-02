import { cn } from "@/lib/utils";

/**
 * Feltgruppe i Origin UI-stil: tydelig label, konsistent avstand, fokus på feltet.
 */

export function FieldGroup({
  id,
  label,
  required,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none text-stone-800 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
        {required ? (
          <span className="sr-only"> (obligatorisk)</span>
        ) : null}
      </label>
      {children}
    </div>
  );
}

/** Origin UI–inspirerte feltegenskaper (matcher shadcn Input, tettere visuelt uttrykk). */
export const originFieldClass =
  "flex h-12 w-full rounded-lg border border-stone-200/90 bg-white px-3.5 py-2 text-base text-stone-900 shadow-sm outline-none transition-[color,box-shadow,border-color] placeholder:text-stone-400 focus-visible:border-amber-600/45 focus-visible:ring-[3px] focus-visible:ring-amber-500/15 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
