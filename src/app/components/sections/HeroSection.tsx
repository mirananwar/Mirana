"use client";

import { motion } from "framer-motion";

// Full-width hero with name, tagline quote, and CTA buttons.
export function HeroSection() {
  return (
    <section className="hero-pad" style={{ borderBottom: "2px solid #0f0f0f" }}>
      <div className="hero-grid">

        {/* Name */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: ".68rem",
              letterSpacing: ".2em",
              textTransform: "uppercase" as const,
              color: "#c0392b",
              marginBottom: "1.25rem",
              fontWeight: 700,
            }}
          >
            Engineer & Builder
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-.03em",
              fontFamily: "Georgia, serif",
            }}
          >
            Mirana<br /><span>Anwar.</span>
          </motion.h1>
        </div>

        {/* Tagline and CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ paddingBottom: ".5rem" }}
        >
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "#6b6560",
            fontStyle: "italic",
            borderLeft: "3px solid #c0392b",
            paddingLeft: "1rem",
            marginBottom: "1.5rem",
          }}>
            Hi! I&apos;m a Software Engineer in New York City. I love building things that solve real problems and I&apos;m endlessly curious about how things work.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="#contact"
              style={{
                background: "#c0392b",
                color: "#fff",
                padding: ".6rem 1.25rem",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: ".7rem",
                letterSpacing: ".12em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Get in touch
            </a>
            <a
              href="#projects"
              style={{
                border: "1.5px solid #0f0f0f",
                color: "#0f0f0f",
                padding: ".6rem 1.25rem",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: ".7rem",
                letterSpacing: ".12em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
              }}
            >
              View work
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
