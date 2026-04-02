"use client";

/**
 * Aceternity-inspirert spotlight bak hero-tekst: myk radial glød som følger pekeren.
 * pointer-events-none — klikk går til innhold over; posisjon leses via vinduslytter.
 */

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export function HeroSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(45);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 28, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 28, mass: 0.4 });

  const background = useMotionTemplate`radial-gradient(520px circle at ${smoothX}% ${smoothY}%, rgba(251, 191, 36, 0.22), rgba(251, 191, 36, 0.06) 35%, transparent 65%)`;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      ) {
        mouseX.set(50);
        mouseY.set(42);
        return;
      }
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      mouseX.set(Math.min(100, Math.max(0, x)));
      mouseY.set(Math.min(100, Math.max(0, y)));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ background }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-amber-400/[0.04]"
        aria-hidden
      />
    </div>
  );
}
