"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "@/app/components/ui/FadeInSection";
import { stagger, fadeUpItem } from "@/app/styles/animations";
import { experience } from "@/app/data/experience";

// Work history: JP Morgan Chase featured on the left (multiple roles),
// other companies stacked compactly on the right, bottom-aligned.
export function ExperienceSection() {
  const [jpmorgan, ...otherCompanies] = experience;

  return (
    <section id="experience" style={{ borderBottom: "2px solid #0f0f0f" }}>

      <FadeInSection style={{ padding: "2rem 2.5rem 1rem", borderBottom: "1px solid #0f0f0f" }}>
        <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700 }}>
          Experience
        </p>
      </FadeInSection>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        {/* JP Morgan Chase — left column, all three roles */}
        <motion.div variants={fadeUpItem} style={{ padding: "2rem", borderRight: "1px solid #0f0f0f" }}>
          <p style={{ fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.25rem" }}>
            {jpmorgan.company}
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: ".85rem" }}>
            {jpmorgan.roles.map((role, i) => (
              <div
                key={i}
                style={{ paddingTop: i > 0 ? ".85rem" : 0, borderTop: i > 0 ? "1px solid #d5d0c8" : "none" }}
              >
                <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".7rem", letterSpacing: ".08em", color: "#6b6560", fontStyle: "italic", marginBottom: ".2rem" }}>
                  {role.role}
                </p>
                <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".6rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560" }}>
                  {role.period}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Other companies — right column, compact cards aligned to bottom */}
        <div style={{ display: "flex", flexDirection: "column" as const, justifyContent: "flex-end" }}>
          {otherCompanies.map((job, i) => (
            <motion.div
              key={job.company}
              variants={fadeUpItem}
              style={{ padding: "1rem 2rem", borderBottom: i < otherCompanies.length - 1 ? "1px solid #0f0f0f" : "none" }}
            >
              <p style={{ fontSize: ".92rem", fontWeight: 700, lineHeight: 1.2, marginBottom: ".5rem" }}>
                {job.company}
              </p>
              <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".68rem", letterSpacing: ".08em", color: "#6b6560", fontStyle: "italic", marginBottom: ".15rem" }}>
                {job.roles[0].role}
              </p>
              <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".58rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560" }}>
                {job.roles[0].period}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
