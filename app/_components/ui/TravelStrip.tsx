"use client";

import { motion } from "framer-motion";
import { fadeUpItem } from "@/app/_lib/animations";
import { ScrollStrip } from "./ScrollStrip";
import type { Destination } from "@/app/_data/travel";

// Horizontally scrollable strip of travel destination cards.
// Each card shows city, country + year, and a short note.
export function TravelStrip({ destinations }: { destinations: Destination[] }) {
  return (
    <ScrollStrip scrollAmount={260}>
      {destinations.map((destination, index) => (
        <motion.div
          key={index}
          variants={fadeUpItem}
          style={{ minWidth: "220px", padding: "1.75rem", borderRight: "1px solid #0f0f0f", flexShrink: 0 }}
        >
          <p style={{ fontSize: "1rem", fontWeight: 700, marginBottom: ".3rem", fontFamily: "Georgia, serif" }}>
            {destination.city}
          </p>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".6rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560", marginBottom: ".85rem" }}>
            {destination.country} · {destination.year}
          </p>
          <p style={{ fontSize: ".8rem", color: "#6b6560", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
            {destination.note}
          </p>
        </motion.div>
      ))}
    </ScrollStrip>
  );
}
