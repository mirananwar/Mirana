"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { stagger } from "@/app/_lib/animations";
import { scrollArrowButton } from "@/app/_lib/styles";

// Generic horizontally-scrollable container with prev/next arrow buttons.
// Arrows fade in/out based on scroll position.
export function ScrollStrip({
  children,
  scrollAmount = 300,
}: {
  children: React.ReactNode;
  scrollAmount?: number;
}) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function scrollBy(direction: number) {
    stripRef.current?.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  }

  function handleScroll() {
    const el = stripRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }

  return (
    <div style={{ position: "relative" }}>
      <style>{`.scroll-strip::-webkit-scrollbar { display: none }`}</style>

      <button
        onClick={() => scrollBy(-1)}
        aria-label="Scroll left"
        style={{ ...scrollArrowButton, left: ".75rem", opacity: canScrollLeft ? 1 : 0, pointerEvents: canScrollLeft ? "auto" : "none" }}
      >←</button>

      <button
        onClick={() => scrollBy(1)}
        aria-label="Scroll right"
        style={{ ...scrollArrowButton, right: ".75rem", opacity: canScrollRight ? 1 : 0, pointerEvents: canScrollRight ? "auto" : "none" }}
      >→</button>

      <motion.div
        ref={stripRef}
        onScroll={handleScroll}
        className="scroll-strip"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {children}
      </motion.div>
    </div>
  );
}
