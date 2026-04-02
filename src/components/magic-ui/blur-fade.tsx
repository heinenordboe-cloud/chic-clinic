"use client";

/**
 * BlurFade — aligned with Magic UI docs (magicui.design/docs/components/blur-fade).
 * Uses `framer-motion` (same runtime as `motion/react` in Magic UI examples).
 */

import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  type MotionProps,
  type UseInViewOptions,
  type TargetAndTransition,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

type MarginType = UseInViewOptions["margin"];

type VariantPhase = TargetAndTransition | string | string[];

function getFilter(v: VariantPhase | undefined): string | undefined {
  if (v && typeof v === "object" && !Array.isArray(v) && "filter" in v) {
    const f = (v as { filter?: string }).filter;
    return typeof f === "string" ? f : undefined;
  }
  return undefined;
}

export interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  /** Når `true`, animeres inn når elementet scroller inn i visningen (anbefalt for seksjoner under fold). */
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  const combinedVariants = variant ?? defaultVariants;
  const hiddenFilter = getFilter(combinedVariants.hidden as VariantPhase);
  const visibleFilter = getFilter(combinedVariants.visible as VariantPhase);
  const shouldTransitionFilter =
    hiddenFilter != null &&
    visibleFilter != null &&
    hiddenFilter !== visibleFilter;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay,
          duration,
          ease: "easeOut",
          ...(shouldTransitionFilter ? { filter: { duration } } : {}),
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
