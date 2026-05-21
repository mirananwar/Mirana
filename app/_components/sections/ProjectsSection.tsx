"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "@/app/_components/ui/FadeInSection";
import { stagger, fadeUpItem } from "@/app/_lib/animations";
import { projects } from "@/app/_data/projects";

// Projects grid: two columns, with "coming soon" styled differently.
export function ProjectsSection() {
  return (
    <section id="projects" style={{ borderBottom: "2px solid #0f0f0f" }}>

      <FadeInSection style={{ padding: "2rem 2.5rem 1rem", borderBottom: "1px solid #0f0f0f" }}>
        <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700 }}>
          Projects
        </p>
      </FadeInSection>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        {projects.map((project, i) => {
          // Don't draw a bottom border on the last row
          const isLastRow = i >= projects.length - (projects.length % 2 === 0 ? 2 : 1);
          return (
            <motion.div
              key={project.name}
              variants={fadeUpItem}
              style={{
                padding: "2rem",
                borderRight: i % 2 === 0 ? "1px solid #0f0f0f" : "none",
                borderBottom: !isLastRow ? "1px solid #0f0f0f" : "none",
              }}
            >
              <p style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "1rem",
                fontStyle: project.comingSoon ? "italic" : "normal",
                color: project.comingSoon ? "#6b6560" : "#0f0f0f",
              }}>
                {project.name}
              </p>
              <p style={{ fontSize: ".82rem", color: "#6b6560", lineHeight: 1.75, marginBottom: "1rem" }}>
                {project.desc}
              </p>
              {project.tech && (
                <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".12em", textTransform: "uppercase" as const }}>
                  {project.tech}
                </p>
              )}
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
