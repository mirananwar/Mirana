import { type CSSProperties } from "react";

// Base styles for the scroll arrow buttons in ScrollStrip
export const scrollArrowButton: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  background: "#f5f0e8",
  border: "1.5px solid #0f0f0f",
  width: "2.2rem",
  height: "2.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  fontSize: ".9rem",
  transition: "opacity .2s",
};
