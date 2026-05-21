"use client";

const BASE = { background: "#f5f0e8", color: "#0f0f0f", fontFamily: "Georgia, 'Times New Roman', serif" } as const;
const label = { fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700 };
const sans = { fontFamily: "'Helvetica Neue', Arial, sans-serif" };

function Divider({ title }: { title: string }) {
  return (
    <div style={{ borderTop: "4px solid #0f0f0f", borderBottom: "4px solid #0f0f0f", padding: "1rem 2.5rem", background: "#0f0f0f", color: "#f5f0e8", margin: "0" }}>
      <p style={{ ...sans, fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase" as const, margin: 0, fontWeight: 700 }}>{title}</p>
    </div>
  );
}

// ─── STACK OPTIONS ───────────────────────────────────────────

function StackA() {
  const groups = [
    { cat: "Languages", items: ["Python", "Java", "Go", "TypeScript"] },
    { cat: "Infrastructure", items: ["Redis", "Kafka", "Kubernetes", "AWS", "Docker"] },
    { cat: "Data", items: ["Postgres", "Snowflake", "FastAPI"] },
    { cat: "Frontend", items: ["React", "GraphQL"] },
  ];
  return (
    <div style={{ padding: "2.5rem", borderRight: "1px solid #0f0f0f" }}>
      <p style={{ ...label, marginBottom: "1.5rem" }}>Stack</p>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
        {groups.map(g => (
          <div key={g.cat}>
            <p style={{ ...sans, fontSize: ".58rem", letterSpacing: ".18em", textTransform: "uppercase" as const, color: "#6b6560", marginBottom: ".5rem" }}>{g.cat}</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: ".3rem" }}>
              {g.items.map(s => (
                <div key={s} style={{ fontSize: ".82rem", paddingBottom: ".3rem", borderBottom: "1px solid #d5d0c8" }}>{s}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StackB() {
  const stack = ["Python", "Java", "Go", "TypeScript", "React", "Redis", "Kafka", "Postgres", "Kubernetes", "AWS", "FastAPI", "Snowflake", "GraphQL", "Docker"];
  return (
    <div style={{ padding: "2.5rem", borderRight: "1px solid #0f0f0f" }}>
      <p style={{ ...label, marginBottom: "1.5rem" }}>Stack</p>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: ".5rem" }}>
        {stack.map(s => (
          <span key={s} style={{ border: "1.5px solid #0f0f0f", padding: ".3rem .7rem", ...sans, fontSize: ".65rem", letterSpacing: ".08em" }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function StackC() {
  const stack = ["Python", "Java", "Go", "TypeScript", "React", "Redis", "Kafka", "Postgres", "Kubernetes", "AWS", "FastAPI", "Snowflake", "GraphQL", "Docker"];
  const repeated = [...stack, ...stack];
  return (
    <div style={{ padding: "2.5rem", borderRight: "1px solid #0f0f0f" }}>
      <p style={{ ...label, marginBottom: "1.5rem" }}>Stack</p>
      <div style={{ overflow: "hidden", borderTop: "1px solid #0f0f0f", borderBottom: "1px solid #0f0f0f", padding: ".6rem 0" }}>
        <style>{`
          @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
          .ticker-inner { display: flex; gap: 0; animation: ticker 18s linear infinite; width: max-content; }
        `}</style>
        <div className="ticker-inner">
          {repeated.map((s, i) => (
            <span key={i} style={{ ...sans, fontSize: ".7rem", letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#0f0f0f", paddingRight: "2rem", whiteSpace: "nowrap" as const }}>
              {s} <span style={{ color: "#c0392b", marginRight: "2rem" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── BEYOND WORK OPTIONS ─────────────────────────────────────

function BeyondA() {
  const currently = [
    { label: "Building", value: "Distributed job queue on Redis Streams" },
    { label: "Reading", value: "Designing Data-Intensive Applications" },
    { label: "Listening", value: "Fred again.. — ten" },
    { label: "Obsessing over", value: "FIFA World Cup 2026 volunteer prep" },
    { label: "Rating", value: "NYC restaurants (47 and counting)" },
  ];
  return (
    <div style={{ padding: "2.5rem", borderRight: "1px solid #0f0f0f" }}>
      <p style={{ ...label, marginBottom: "1.5rem" }}>Currently</p>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: ".85rem" }}>
        {currently.map(c => (
          <div key={c.label}>
            <p style={{ ...sans, fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#c0392b", marginBottom: ".2rem" }}>{c.label}</p>
            <p style={{ fontSize: ".85rem", color: "#6b6560", fontStyle: "italic", margin: 0 }}>{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeyondB() {
  const stats = [
    { num: "~200", unit: "badminton hrs/yr" },
    { num: "47", unit: "restaurants rated" },
    { num: "1", unit: "World Cup coming up" },
    { num: "∞", unit: "Fred again.. shows" },
  ];
  return (
    <div style={{ padding: "2.5rem", borderRight: "1px solid #0f0f0f" }}>
      <p style={{ ...label, marginBottom: "1.5rem" }}>Beyond work</p>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
        {stats.map(s => (
          <div key={s.unit} style={{ display: "flex", alignItems: "baseline", gap: ".6rem", paddingBottom: ".75rem", borderBottom: "1px solid #d5d0c8" }}>
            <span style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1, letterSpacing: "-.03em" }}>{s.num}</span>
            <span style={{ ...sans, fontSize: ".65rem", letterSpacing: ".1em", textTransform: "uppercase" as const, color: "#6b6560" }}>{s.unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ABOUT TEXT OPTIONS ──────────────────────────────────────

function AboutA() {
  const nums = [
    { n: "3+", d: "yrs at JPMC" },
    { n: "100+", d: "analysts reached" },
    { n: "20×", d: "volume spike handled" },
    { n: "3", d: "engineers led" },
  ];
  return (
    <div style={{ padding: "2.5rem" }}>
      <p style={{ ...label, marginBottom: "1.5rem" }}>About</p>
      <p style={{ fontSize: "1.35rem", lineHeight: 1.65, marginBottom: "2rem" }}>I&apos;m a backend engineer who cares about systems that are fast, reliable, and built to last.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0", borderTop: "2px solid #0f0f0f", borderBottom: "2px solid #0f0f0f", marginBottom: "1.75rem" }}>
        {nums.map((n, i) => (
          <div key={n.d} style={{ padding: "1.1rem .75rem", borderRight: i < 3 ? "1px solid #0f0f0f" : "none" }}>
            <p style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1, letterSpacing: "-.03em", marginBottom: ".3rem" }}>{n.n}</p>
            <p style={{ ...sans, fontSize: ".6rem", letterSpacing: ".1em", textTransform: "uppercase" as const, color: "#6b6560", margin: 0 }}>{n.d}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560", marginBottom: "1rem" }}>
        At JP Morgan Chase, I&apos;ve shipped ML classifiers that eliminated weeks of manual analyst work, rebuilt onboarding infrastructure that cut latency from five minutes to sub-second, and built an LLM-powered query interface adopted across the org.
      </p>
      <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560" }}>
        I&apos;m currently pursuing a part-time MS in CS on the ML track at Columbia, and looking for backend or infrastructure roles in NYC.
      </p>
    </div>
  );
}

function AboutB() {
  return (
    <div style={{ padding: "2.5rem" }}>
      <p style={{ ...label, marginBottom: "1.5rem" }}>About</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "2rem", alignItems: "start", marginBottom: "1.5rem" }}>
        <div style={{ background: "#d5d0c8", aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ ...sans, fontSize: ".65rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560" }}>Your photo</span>
        </div>
        <div>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>I&apos;m a backend engineer who cares about systems that are fast, reliable, and built to last.</p>
          <p style={{ fontSize: ".88rem", lineHeight: 1.85, color: "#6b6560" }}>
            At JP Morgan Chase, I&apos;ve shipped ML classifiers that eliminated weeks of manual analyst work, rebuilt onboarding infrastructure that cut latency from five minutes to sub-second, and built an LLM-powered query interface adopted across the org.
          </p>
        </div>
      </div>
      <p style={{ fontSize: ".88rem", lineHeight: 1.85, color: "#6b6560" }}>
        I&apos;m currently pursuing a part-time MS in CS on the ML track at Columbia, and looking for backend or infrastructure roles at companies building serious, technically demanding products in NYC.
      </p>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────

export default function Mockups2() {
  return (
    <div style={{ ...BASE }}>
      <div style={{ background: "#0f0f0f", color: "#f5f0e8", padding: "1.5rem 2.5rem", borderBottom: "2px solid #0f0f0f" }}>
        <p style={{ ...sans, fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase" as const, margin: 0, fontWeight: 700 }}>About Section — Mockup Options</p>
      </div>

      {/* ── STACK OPTIONS ── */}
      <Divider title="Stack — Option A: Categorized Groups" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "2px solid #0f0f0f" }}>
        <StackA />
        <div style={{ padding: "2.5rem" }}>
          <p style={{ ...label, marginBottom: "1.5rem" }}>About</p>
          <p style={{ fontSize: "1.35rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>I&apos;m a backend engineer who cares about systems that are fast, reliable, and built to last.</p>
          <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560" }}>At JP Morgan Chase, I&apos;ve shipped ML classifiers that eliminated weeks of manual analyst work, rebuilt onboarding infrastructure that cut latency from five minutes to sub-second.</p>
        </div>
      </div>

      <Divider title="Stack — Option B: Tag Pills" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "2px solid #0f0f0f" }}>
        <StackB />
        <div style={{ padding: "2.5rem" }}>
          <p style={{ ...label, marginBottom: "1.5rem" }}>About</p>
          <p style={{ fontSize: "1.35rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>I&apos;m a backend engineer who cares about systems that are fast, reliable, and built to last.</p>
          <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560" }}>At JP Morgan Chase, I&apos;ve shipped ML classifiers that eliminated weeks of manual analyst work, rebuilt onboarding infrastructure that cut latency from five minutes to sub-second.</p>
        </div>
      </div>

      <Divider title="Stack — Option C: Marquee Ticker" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "2px solid #0f0f0f" }}>
        <StackC />
        <div style={{ padding: "2.5rem" }}>
          <p style={{ ...label, marginBottom: "1.5rem" }}>About</p>
          <p style={{ fontSize: "1.35rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>I&apos;m a backend engineer who cares about systems that are fast, reliable, and built to last.</p>
          <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560" }}>At JP Morgan Chase, I&apos;ve shipped ML classifiers that eliminated weeks of manual analyst work, rebuilt onboarding infrastructure that cut latency from five minutes to sub-second.</p>
        </div>
      </div>

      {/* ── BEYOND WORK OPTIONS ── */}
      <Divider title="Beyond Work — Option A: Currently Format" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "2px solid #0f0f0f" }}>
        <BeyondA />
        <div style={{ padding: "2.5rem" }}>
          <p style={{ ...label, marginBottom: "1.5rem" }}>About</p>
          <p style={{ fontSize: "1.35rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>I&apos;m a backend engineer who cares about systems that are fast, reliable, and built to last.</p>
          <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560" }}>At JP Morgan Chase, I&apos;ve shipped ML classifiers that eliminated weeks of manual analyst work, rebuilt onboarding infrastructure that cut latency from five minutes to sub-second.</p>
        </div>
      </div>

      <Divider title="Beyond Work — Option B: Fun Stats" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "2px solid #0f0f0f" }}>
        <BeyondB />
        <div style={{ padding: "2.5rem" }}>
          <p style={{ ...label, marginBottom: "1.5rem" }}>About</p>
          <p style={{ fontSize: "1.35rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>I&apos;m a backend engineer who cares about systems that are fast, reliable, and built to last.</p>
          <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560" }}>At JP Morgan Chase, I&apos;ve shipped ML classifiers that eliminated weeks of manual analyst work, rebuilt onboarding infrastructure that cut latency from five minutes to sub-second.</p>
        </div>
      </div>

      {/* ── ABOUT TEXT OPTIONS ── */}
      <Divider title="About Text — Option A: By the Numbers Strip" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "2px solid #0f0f0f" }}>
        <div style={{ padding: "2.5rem", borderRight: "1px solid #0f0f0f" }}>
          <p style={{ ...label, marginBottom: "1.5rem" }}>Stack</p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: ".5rem" }}>
            {["Python · Java · Go", "TypeScript · React", "Redis · Kafka · Postgres", "Kubernetes · AWS", "FastAPI · Snowflake", "GraphQL · Docker"].map(s => (
              <div key={s} style={{ fontSize: ".82rem", paddingBottom: ".5rem", borderBottom: "1px solid #d5d0c8" }}>{s}</div>
            ))}
          </div>
        </div>
        <AboutA />
      </div>

      <Divider title="About Text — Option B: Photo" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "2px solid #0f0f0f" }}>
        <div style={{ padding: "2.5rem", borderRight: "1px solid #0f0f0f" }}>
          <p style={{ ...label, marginBottom: "1.5rem" }}>Stack</p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: ".5rem" }}>
            {["Python · Java · Go", "TypeScript · React", "Redis · Kafka · Postgres", "Kubernetes · AWS", "FastAPI · Snowflake", "GraphQL · Docker"].map(s => (
              <div key={s} style={{ fontSize: ".82rem", paddingBottom: ".5rem", borderBottom: "1px solid #d5d0c8" }}>{s}</div>
            ))}
          </div>
        </div>
        <AboutB />
      </div>

      <div style={{ padding: "2rem 2.5rem" }}>
        <span style={{ ...sans, fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#6b6560" }}>End of mockups</span>
      </div>
    </div>
  );
}
