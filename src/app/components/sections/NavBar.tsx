"use client";

import { motion } from "framer-motion";

const navLinks = ["about", "experience", "projects", "travel"];

// Sticky top navigation bar with section links and a contact CTA button.
export function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        borderBottom: "2px solid #0f0f0f",
        padding: ".85rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "#f5f0e8",
        zIndex: 10,
      }}
    >
      <div className="nav-links">
        {navLinks.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            style={{
              color: "#0f0f0f",
              textDecoration: "none",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: ".7rem",
              letterSpacing: ".18em",
              textTransform: "uppercase" as const,
            }}
          >
            {section}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        style={{
          background: "#0f0f0f",
          color: "#f5f0e8",
          padding: ".45rem 1.1rem",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: ".7rem",
          letterSpacing: ".14em",
          textTransform: "uppercase" as const,
          textDecoration: "none",
        }}
      >
        Contact
      </a>
    </motion.nav>
  );
}
