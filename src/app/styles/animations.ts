// Framer Motion animation variants shared across all sections

// Fade up reveal — used for standalone section wrappers
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

// Stagger parent — staggers child animations one after another
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

// Individual staggered child item
export const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};
