// Site footer with credit line and location tag.
export function PageFooter() {
  return (
    <footer style={{ padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: ".82rem", color: "#6b6560" }}>
        Made with ❤️ by Mirana Anwar
      </span>
      <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#6b6560" }}>
        New York City
      </span>
    </footer>
  );
}
