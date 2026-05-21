"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "@/app/components/ui/FadeInSection";
import { stagger, fadeUpItem } from "@/app/styles/animations";
import { topRestaurants, currentlyReading, exploringTech } from "@/app/data/about";

// About section: left sidebar with restaurants + books, right with bio + photo + tech.
export function AboutSection() {
  return (
    <section id="about" className="about-outer-grid" style={{ borderBottom: "2px solid #0f0f0f" }}>

      {/* ── Left sidebar ── */}
      <FadeInSection style={{ padding: "2.5rem", borderRight: "1px solid #0f0f0f" }}>

        {/* Top NYC Restaurants */}
        <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, marginBottom: "1.5rem" }}>
          Top NYC Restaurants
        </p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: "flex", flexDirection: "column" as const, gap: ".5rem" }}
        >
          {topRestaurants.map((name, i) => (
            <motion.div
              key={name}
              variants={fadeUpItem}
              style={{ fontSize: ".82rem", paddingBottom: ".5rem", borderBottom: "1px solid #d5d0c8", display: "flex", gap: ".6rem", alignItems: "baseline" }}
            >
              <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".6rem", color: "#c0392b", fontWeight: 700, minWidth: "1rem" }}>
                {i + 1}.
              </span>
              {name}
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Reading */}
        <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, margin: "2rem 0 1rem" }}>
          Currently Reading
        </p>
        <motion.div
          variants={fadeUpItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: "flex", gap: ".75rem" }}
        >
          {currentlyReading.map((book) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={book.title} src={book.img} alt={book.title} style={{ width: "80px", display: "block", border: "1px solid #d5d0c8" }} />
          ))}
        </motion.div>

      </FadeInSection>

      {/* ── Right: bio + photo + exploring tech ── */}
      <FadeInSection style={{ padding: "2.5rem" }}>
        <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, marginBottom: "1.5rem" }}>
          About
        </p>

        {/* Bio paragraphs alongside profile photo */}
        <div className="about-content-grid">
          <div>
            <p style={{ fontSize: "1.35rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
              Welcome to my personal corner of the web!
            </p>
            <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560", marginBottom: "1rem" }}>
              My journey into tech started when my dad brought home our first family computer and 8-year-old me immediately downloaded a virus on it. Despite the countless hours spent trying to fix it before my brown parents found out, the &quot;aha&quot; moment was so precious I almost downloaded another one just so I could figure out how to remove it again.
            </p>
            <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560", margin: 0 }}>
              That love for problem solving and curiosity never really went away. I&apos;m now a Software Engineer II at JP Morgan Chase in NYC, where I help build tools for portfolio managers, and in Fall 2026 I&apos;ll be pursuing a part-time MS in Computer Science at Columbia University.
            </p>
          </div>

          {/* Profile photo */}
          <div style={{ width: "220px", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/mirana_photo.JPG"
              alt="Mirana Anwar"
              style={{ width: "100%", height: "100%", display: "block", border: "1px solid #d5d0c8", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        </div>

        {/* Technologies being explored */}
        <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560", marginBottom: "1rem" }}>
          Here are some new technologies I&apos;ve been exploring:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".5rem" }}>
          {exploringTech.map((tech) => (
            <div key={tech} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
              <span style={{ color: "#c0392b", fontSize: ".65rem" }}>▶</span>
              <span style={{ fontSize: ".92rem", color: "#6b6560" }}>{tech}</span>
            </div>
          ))}
        </div>

      </FadeInSection>
    </section>
  );
}
