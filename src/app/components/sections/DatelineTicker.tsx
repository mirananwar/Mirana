"use client";

import { motion } from "framer-motion";
import { datelineItems } from "@/app/data/about";

// Marquee ticker that scrolls across the page twice then stops.
// Items are tripled so the loop looks seamless before it halts.
export function DatelineTicker() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      style={{ borderBottom: "1px solid #0f0f0f", overflow: "hidden" }}
    >
      <style>{`
        @keyframes dateline-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-66.667%); }
        }
        .dateline-inner {
          display: flex;
          width: max-content;
          animation: dateline-scroll 30s linear 1 forwards;
        }
      `}</style>
      <div className="dateline-inner">
        {/* Render 3 copies so the ticker fills the screen before it stops */}
        {[0, 1, 2].flatMap((copy) =>
          datelineItems.map((text, i) => (
            <span
              key={`${copy}-${i}`}
              style={{ display: "flex", alignItems: "center", padding: ".5rem 0", whiteSpace: "nowrap" as const }}
            >
              <span
                style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: ".65rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase" as const,
                  color: "#6b6560",
                  padding: "0 1.25rem",
                }}
              >
                {text}
              </span>
              <span style={{ color: "#6b6560" }}>·</span>
            </span>
          ))
        )}
      </div>
    </motion.div>
  );
}
