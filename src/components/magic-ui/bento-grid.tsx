import { cn } from "@/lib/utils";

/**
 * BentoGrid — struktur som i Magic UI (magicui.design): responsivt rutenett med jevne rader.
 * Props: `className` utvider standardrutenettet; ingen ulike kolonnespann her — like store kort.
 */
export function BentoGrid({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-6xl auto-rows-[minmax(260px,1fr)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition duration-300 hover:border-gold-600/25 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
