"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "@/app/_components/ui/FadeInSection";
import { TravelStrip } from "@/app/_components/ui/TravelStrip";
import { fadeUp } from "@/app/_lib/animations";
import { featuredDestination, otherDestinations } from "@/app/_data/travel";

// Travel dispatch: hero card for the latest trip + scrollable strip of other cities.
export function TravelSection() {
  return (
    <section id="travel" style={{ borderBottom: "2px solid #0f0f0f" }}>

      <FadeInSection style={{ padding: "2rem 2.5rem 1rem", borderBottom: "1px solid #0f0f0f" }}>
        <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700 }}>
          Dispatch
        </p>
      </FadeInSection>

      {/* Featured destination — photo left, write-up right */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid #0f0f0f" }}
      >
        <div style={{ position: "relative", overflow: "hidden", height: "400px", borderRight: "1px solid #0f0f0f" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featuredDestination.img}
            alt={featuredDestination.city}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "sepia(15%) contrast(1.05)" }}
          />
        </div>
        <div style={{ padding: "3rem", display: "flex", flexDirection: "column" as const, justifyContent: "center" }}>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, marginBottom: "1.25rem" }}>
            Latest dispatch
          </p>
          <h3 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-.03em", fontFamily: "Georgia, serif", marginBottom: ".75rem" }}>
            {featuredDestination.city}.
          </h3>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#6b6560", marginBottom: "1.75rem" }}>
            {featuredDestination.country} · {featuredDestination.year}
          </p>
          <p style={{ fontSize: ".95rem", lineHeight: 1.85, color: "#6b6560", fontStyle: "italic", borderLeft: "3px solid #c0392b", paddingLeft: "1.25rem" }}>
            {featuredDestination.note}
          </p>
        </div>
      </motion.div>

      {/* Other destinations — horizontally scrollable */}
      <TravelStrip destinations={otherDestinations} />

    </section>
  );
}
