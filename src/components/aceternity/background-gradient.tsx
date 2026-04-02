import { cn } from "@/lib/utils";

/**
 * Aceternity UI–inspirert bakgrunn (ui.aceternity.com/components/background-gradient).
 * Props: children, className, containerClassName, animate — matcher dokumentasjonen.
 */
export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden p-[1px] rounded-3xl",
        containerClassName
      )}
    >
      <span
        className={cn(
          "absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#D97706_0%,#f5f0e8_40%,#c4b5a0_60%,#D97706_100%)] opacity-40",
          animate && "motion-safe:animate-[spin_8s_linear_infinite]"
        )}
        aria-hidden
      />
      <div
        className={cn(
          "relative overflow-hidden bg-white shadow-sm rounded-[calc(1.5rem-1px)]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
