"use client";

import { FadeInSection } from "@/app/components/ui/FadeInSection";

// Contact section with heading, message, and social icon links (email, LinkedIn, GitHub).
export function ContactSection() {
  return (
    <FadeInSection
      style={{
        padding: "4rem 2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
        borderBottom: "2px solid #0f0f0f",
      }}
    >
      {/* Left: heading and message */}
      <div id="contact">
        <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, marginBottom: "1rem" }}>
          Get in touch
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1.5rem" }}>
          Thanks for<br />stopping by!
        </h2>
        <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "#6b6560", maxWidth: "400px" }}>
          I&apos;d love to chat or grab some coffee!
        </p>
      </div>

      {/* Right: dark card with social icon links */}
      <div style={{ background: "#0f0f0f", color: "#f5f0e8", padding: "1.75rem", width: "50%", display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
        <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".8rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#6b6560", marginBottom: "1.25rem" }}>
          Feel free to reach out to me at
        </p>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>

          {/* Email */}
          <a href="mailto:anwarmirana@gmail.com" aria-label="Email" style={{ color: "#f5f0e8", textDecoration: "none" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/miranaanwar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#f5f0e8", textDecoration: "none" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/miranaanwar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "#f5f0e8", textDecoration: "none" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>

        </div>
      </div>
    </FadeInSection>
  );
}
