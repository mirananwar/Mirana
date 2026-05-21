export default function Mockups() {
  const BASE = {
    background: "#f5f0e8",
    color: "#0f0f0f",
    fontFamily: "Georgia, 'Times New Roman', serif",
  } as const;

  const label = {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontSize: ".65rem",
    letterSpacing: ".2em",
    textTransform: "uppercase" as const,
    color: "#c0392b",
    fontWeight: 700,
  };

  const destinations1 = [
    { city: "Tokyo", country: "Japan", note: "Best ramen of my life at 2am in Shinjuku." },
    { city: "Lisbon", country: "Portugal", note: "Pastel de nata and tram 28 — would go back in a heartbeat." },
    { city: "Istanbul", country: "Turkey", note: "Crossing from Europe to Asia by ferry is something else." },
    { city: "Mexico City", country: "Mexico", note: "Tacos al pastor from a street cart at midnight." },
    { city: "Nairobi", country: "Kenya", note: "Base camp for Maasai Mara. Nothing prepares you for the Mara." },
    { city: "Medellín", country: "Colombia", note: "The eternal spring city lives up to the name." },
  ];

  const destinations2 = [
    { city: "Tokyo", country: "Japan", year: "2024", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80" },
    { city: "Lisbon", country: "Portugal", year: "2023", img: "https://images.unsplash.com/photo-1558370781-d6196949e317?w=600&q=80" },
    { city: "Istanbul", country: "Turkey", year: "2023", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80" },
    { city: "Mexico City", country: "Mexico", year: "2022", img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80" },
    { city: "Nairobi", country: "Kenya", year: "2022", img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&q=80" },
    { city: "Medellín", country: "Colombia", year: "2021", img: "https://images.unsplash.com/photo-1597665710386-4b9ff04c9b38?w=600&q=80" },
  ];

  const featured = {
    city: "Tokyo",
    country: "Japan",
    year: "2024",
    note: "Three weeks across Tōkyō, Kyoto, and Osaka. The kind of trip that recalibrates your sense of what a city can be — dense, quiet, overwhelming, and completely legible all at once.",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
  };

  const rest = [
    { city: "Lisbon", country: "Portugal", year: "2023", note: "Pastel de nata and tram 28." },
    { city: "Istanbul", country: "Turkey", year: "2023", note: "Europe to Asia by ferry." },
    { city: "Mexico City", country: "Mexico", year: "2022", note: "Tacos al pastor at midnight." },
    { city: "Nairobi", country: "Kenya", year: "2022", note: "Base camp for the Mara." },
    { city: "Medellín", country: "Colombia", year: "2021", note: "The eternal spring city." },
  ];

  return (
    <div style={{ ...BASE, padding: "0 0 6rem" }}>

      {/* Header */}
      <div style={{ borderBottom: "2px solid #0f0f0f", padding: "1.5rem 2.5rem", background: "#0f0f0f", color: "#f5f0e8" }}>
        <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", margin: 0 }}>Travel Section — Three Mockup Options</p>
      </div>

      {/* ── OPTION 1: Dateline List ── */}
      <div style={{ borderBottom: "4px solid #0f0f0f", padding: "1rem 2.5rem", background: "#e8e3db" }}>
        <p style={{ ...label, margin: 0 }}>Option 1 — Dateline List</p>
      </div>
      <section style={{ borderBottom: "4px solid #0f0f0f" }}>
        <div style={{ padding: "2rem 2.5rem 1rem", borderBottom: "1px solid #0f0f0f" }}>
          <p style={label}>Dispatch</p>
        </div>
        <div>
          {destinations1.map((d, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr", borderBottom: "1px solid #d5d0c8", padding: "1.1rem 2.5rem", alignItems: "baseline" }}>
              <div>
                <span style={{ fontSize: "1rem", fontWeight: 700 }}>{d.city}</span>
                <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560", marginLeft: ".75rem" }}>{d.country}</span>
              </div>
              <p style={{ fontSize: ".85rem", color: "#6b6560", fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>{d.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPTION 2: Photo Grid ── */}
      <div style={{ borderBottom: "4px solid #0f0f0f", padding: "1rem 2.5rem", background: "#e8e3db", marginTop: "2px" }}>
        <p style={{ ...label, margin: 0 }}>Option 2 — Photo Grid</p>
      </div>
      <section style={{ borderBottom: "4px solid #0f0f0f" }}>
        <div style={{ padding: "2rem 2.5rem 1rem", borderBottom: "1px solid #0f0f0f" }}>
          <p style={label}>Dispatch</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {destinations2.map((d, i) => (
            <div key={i} style={{ borderRight: (i + 1) % 3 !== 0 ? "1px solid #0f0f0f" : "none", borderBottom: i < 3 ? "1px solid #0f0f0f" : "none" }}>
              <div style={{ position: "relative", overflow: "hidden", height: "220px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt={d.city} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "sepia(20%) contrast(1.05)" }} />
              </div>
              <div style={{ padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: ".3rem" }}>
                  <p style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>{d.city}</p>
                  <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".62rem", letterSpacing: ".12em", color: "#6b6560" }}>{d.year}</span>
                </div>
                <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".63rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560", margin: 0 }}>{d.country}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPTION 3: Featured Dispatch + List ── */}
      <div style={{ borderBottom: "4px solid #0f0f0f", padding: "1rem 2.5rem", background: "#e8e3db", marginTop: "2px" }}>
        <p style={{ ...label, margin: 0 }}>Option 3 — Featured Dispatch + List</p>
      </div>
      <section>
        <div style={{ padding: "2rem 2.5rem 1rem", borderBottom: "1px solid #0f0f0f" }}>
          <p style={label}>Dispatch</p>
        </div>
        {/* Hero destination */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid #0f0f0f" }}>
          <div style={{ position: "relative", overflow: "hidden", height: "360px", borderRight: "1px solid #0f0f0f" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.img} alt={featured.city} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "sepia(20%) contrast(1.05)" }} />
          </div>
          <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ ...label, marginBottom: "1rem" }}>Latest dispatch</p>
            <h3 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: .95, letterSpacing: "-.02em", marginBottom: ".75rem" }}>{featured.city}.</h3>
            <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560", marginBottom: "1.25rem" }}>{featured.country} · {featured.year}</p>
            <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "#6b6560", fontStyle: "italic", borderLeft: "3px solid #c0392b", paddingLeft: "1rem" }}>{featured.note}</p>
          </div>
        </div>
        {/* Rest of destinations */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {rest.map((d, i) => (
            <div key={i} style={{ padding: "1.5rem", borderRight: i < 4 ? "1px solid #0f0f0f" : "none" }}>
              <p style={{ fontSize: ".95rem", fontWeight: 700, marginBottom: ".3rem" }}>{d.city}</p>
              <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".6rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560", marginBottom: ".75rem" }}>{d.country} · {d.year}</p>
              <p style={{ fontSize: ".78rem", color: "#6b6560", fontStyle: "italic", lineHeight: 1.6 }}>{d.note}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
