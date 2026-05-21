"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/app/styles/animations";

// Wraps content in a scroll-triggered fade-up reveal animation.
// Use this as a drop-in wrapper for any page section.
export function FadeInSection({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
