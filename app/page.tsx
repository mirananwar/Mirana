"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

function Section({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const btnBase: React.CSSProperties = {
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

function ScrollStrip({ children, scrollAmount = 300 }: { children: React.ReactNode; scrollAmount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  function scroll(dir: number) {
    ref.current?.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  }

  function onScroll() {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }

  return (
    <div style={{ position: "relative" }}>
      <style>{`.scroll-strip::-webkit-scrollbar{display:none}`}</style>
      <button onClick={() => scroll(-1)} style={{ ...btnBase, left: ".75rem", opacity: canLeft ? 1 : 0, pointerEvents: canLeft ? "auto" : "none" }} aria-label="Scroll left">←</button>
      <button onClick={() => scroll(1)} style={{ ...btnBase, right: ".75rem", opacity: canRight ? 1 : 0, pointerEvents: canRight ? "auto" : "none" }} aria-label="Scroll right">→</button>
      <motion.div
        ref={ref}
        onScroll={onScroll}
        className="scroll-strip"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {children}
      </motion.div>
    </div>
  );
}

function TravelStrip({ destinations }: { destinations: { city: string; country: string; year: string; note: string }[] }) {
  return (
    <ScrollStrip scrollAmount={260}>
      {destinations.map((d, i) => (
        <motion.div key={i} variants={item} style={{ minWidth: "220px", padding: "1.75rem", borderRight: "1px solid #0f0f0f", flexShrink: 0 }}>
          <p style={{ fontSize: "1rem", fontWeight: 700, marginBottom: ".3rem", fontFamily: "Georgia, serif" }}>{d.city}</p>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".6rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560", marginBottom: ".85rem" }}>{d.country} · {d.year}</p>
          <p style={{ fontSize: ".8rem", color: "#6b6560", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{d.note}</p>
        </motion.div>
      ))}
    </ScrollStrip>
  );
}

export default function Portfolio() {
  const experience = [
    {
      company: "JP Morgan Chase & Co.",
      roles: [
        { period: "Jan 2026 – Present",  role: "Software Engineer II"     },
        { period: "Feb 2024 – Dec 2025", role: "Software Engineer I"      },
        { period: "Jun – Aug 2022",      role: "Software Engineer Intern"  },
      ],
    },
    { company: "TJX Companies", roles: [{ period: "Aug – Dec 2022",      role: "Software Engineer Co-op" }] },
    { company: "RMR Group",     roles: [{ period: "Jul – Dec 2021",       role: "Software Engineer Co-op" }] },
    { company: "ShowNxt",       roles: [{ period: "Sep 2020 – Sep 2021",  role: "Freelance Engineer"      }] },
  ];

  const projects = [
    {
      name: "Coming Soon",
      comingSoon: true,
      desc: "Something new in the works! Check back soon.",
      tech: "",
    },
    {
      name: "Spotify Song Recommender",
      desc: "Multilingual music recommendation engine using KNN with tunable α weighting across 50K+ songs in 5 languages via Spotify and Google Translate APIs.",
      tech: "Python · KNN · Spotify API",
    },
    {
      name: "NEUFriends",
      desc: "Social platform for Northeastern students to find events and co-attendees, with a Neo4j-powered recommendation engine that surfaces friends and events by shared interests.",
      tech: "Django · MongoDB · Neo4j",
    },
  ];

  const stack = [
    "Python · Java · Go",
    "TypeScript · React",
    "Redis · Kafka · Postgres",
    "Kubernetes · AWS",
    "FastAPI · Snowflake",
    "GraphQL · Docker",
  ];

  const travel = {
    featured: {
      city: "Milos",
      country: "Greece",
      year: "2025",
      note: "One week across Athens, Mykonos, and Milos. Bluest water I've ever seen, and some of the best food I've ever had.",
      img: "/travel-featured.jpg",
    },
    rest: [
      { city: "Istanbul", country: "Turkey", year: "2025", note: "Cats in every corner" },
      { city: "San Juan", country: "Puerto Rico", year: "2025", note: "Bad Bunny's city" },
      { city: "Split", country: "Croatia", year: "2024", note: "Walked through Daenerys's city" },
      { city: "Port Louis", country: "Mauritius", year: "2023", note: "Beach, mountain, safari - all before lunch" },
      { city: "Lisbon", country: "Portugal", year: "2023", note: "Had a pastel de nata every hour" },
      { city: "Budapest", country: "Hungary", year: "2023", note: "Buda on one side, Pest on the other" },
      { city: "Paris", country: "France", year: "2023", note: "City of love and even better pastries" },
      { city: "Vienna", country: "Austria", year: "2023", note: "Every corner is a museum" },
    ],
  };

  const interests = [
    "Competitive badminton",
    "Ranking NYC restaurants on Beli",
    "Tech Events Volunteer",
    "Needlepoint",
  ];

  return (
    <div style={{ background: "#f5f0e8", color: "#0f0f0f", minHeight: "100vh", fontFamily: "Georgia, 'Times New Roman', serif" }}>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ borderBottom: "2px solid #0f0f0f", padding: ".85rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "#f5f0e8", zIndex: 10 }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          {["about", "experience", "projects", "travel"].map((s) => (
            <a key={s} href={`#${s}`} style={{ color: "#0f0f0f", textDecoration: "none", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".7rem", letterSpacing: ".18em", textTransform: "uppercase" as const }}>{s}</a>
          ))}
        </div>
        <a href="#contact" style={{ background: "#0f0f0f", color: "#f5f0e8", padding: ".45rem 1.1rem", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".7rem", letterSpacing: ".14em", textTransform: "uppercase" as const, textDecoration: "none" }}>Contact</a>
      </motion.nav>

      {/* Dateline — marquee, scrolls twice then stops */}
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
          {[0, 1, 2].flatMap((copy) =>
            ["New York City", "Software Engineer II", "Competitive Badminton Player", "NYC Food Explorer", "Fred again.. Fan", "Needlepointer", "Tech Event Volunteer"].map((text, i) => (
              <span key={`${copy}-${i}`} style={{ display: "flex", alignItems: "center", padding: ".5rem 0", whiteSpace: "nowrap" as const }}>
                <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#6b6560", padding: "0 1.25rem" }}>{text}</span>
                <span style={{ color: "#6b6560" }}>·</span>
              </span>
            ))
          )}
        </div>
      </motion.div>

      {/* Hero */}
      <section style={{ padding: "3.5rem 2.5rem 3rem", borderBottom: "2px solid #0f0f0f" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem", alignItems: "end" }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".68rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", marginBottom: "1.25rem", fontWeight: 700 }}
            >
              Engineer & Builder
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", fontWeight: 700, lineHeight: .95, letterSpacing: "-.03em", fontFamily: "Georgia, serif" }}
            >
              Mirana<br /><span>Anwar.</span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ paddingBottom: ".5rem" }}
          >
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#6b6560", fontStyle: "italic", borderLeft: "3px solid #c0392b", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
              Hi! I'm a Software Engineer in New York City. I love building things that solve real problems and I'm endlessly curious about how things work.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="#contact" style={{ background: "#c0392b", color: "#fff", padding: ".6rem 1.25rem", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase" as const, textDecoration: "none", fontWeight: 700 }}>Get in touch</a>
              <a href="#projects" style={{ border: "1.5px solid #0f0f0f", color: "#0f0f0f", padding: ".6rem 1.25rem", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase" as const, textDecoration: "none" }}>View work</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "2px solid #0f0f0f" }}>
        <Section style={{ padding: "2.5rem", borderRight: "1px solid #0f0f0f" }}>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, marginBottom: "1.5rem" }}>Top NYC Restaurants</p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            style={{ display: "flex", flexDirection: "column" as const, gap: ".5rem" }}
          >
            {["Thirteen Water", "Theodora", "Bangkok Supper Club"].map((r, i) => (
              <motion.div key={r} variants={item} style={{ fontSize: ".82rem", paddingBottom: ".5rem", borderBottom: "1px solid #d5d0c8", display: "flex", gap: ".6rem", alignItems: "baseline" }}>
                <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".6rem", color: "#c0392b", fontWeight: 700, minWidth: "1rem" }}>{i + 1}.</span>
                {r}
              </motion.div>
            ))}
          </motion.div>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, margin: "2rem 0 1rem" }}>Currently Reading</p>
          <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ display: "flex", gap: ".75rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/book.jpg" alt="Before the coffee gets cold" style={{ width: "80px", display: "block", border: "1px solid #d5d0c8" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/handmaid_tale.jpg" alt="The Handmaid's Tale" style={{ width: "80px", display: "block", border: "1px solid #d5d0c8" }} />
          </motion.div>
        </Section>
        <Section style={{ padding: "2.5rem" }}>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, marginBottom: "1.5rem" }}>About</p>
          <p style={{ fontSize: "1.35rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>Welcome to my personal corner of the web!</p>
          <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560", marginBottom: "1rem" }}>
           My journey into tech started when my dad brought home our first family computer and 8-year-old me immediately downloaded a virus on it. Despite the countless hours spent trying to fix it before my brown parents found out, the "aha" moment was so precious I almost downloaded another one just to feel it again.
          </p>
                    <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560", marginBottom: "1.75rem" }}>
           That curiosity and love for problem solving never really went away. I'm now a Software Engineer II at JP Morgan Chase in NYC, where I help build tools for portfolio managers, and in Fall 2026 I'll be pursuing a part-time MS in Computer Science at Columbia University.
          </p>
          <p style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#6b6560", marginBottom: "1rem" }}>Here are some new technologies I&apos;ve been exploring:</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".5rem .5rem" }}>
            {["C++", "Go", "Rust", "Scala"].map((tech) => (
              <div key={tech} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                <span style={{ color: "#c0392b", fontSize: ".65rem" }}>▶</span>
                <span style={{ fontSize: ".92rem", color: "#6b6560" }}>{tech}</span>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Experience */}
      <section id="experience" style={{ borderBottom: "2px solid #0f0f0f" }}>
        <Section style={{ padding: "2rem 2.5rem 1rem", borderBottom: "1px solid #0f0f0f" }}>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700 }}>Experience</p>
        </Section>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          {/* JP Morgan Chase — left, full height */}
          <motion.div variants={item} style={{ padding: "2rem", borderRight: "1px solid #0f0f0f" }}>
            <p style={{ fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.25rem" }}>{experience[0].company}</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: ".85rem" }}>
              {experience[0].roles.map((r, j) => (
                <div key={j} style={{ paddingTop: j > 0 ? ".85rem" : 0, borderTop: j > 0 ? "1px solid #d5d0c8" : "none" }}>
                  <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".7rem", letterSpacing: ".08em", color: "#6b6560", fontStyle: "italic", marginBottom: ".2rem" }}>{r.role}</p>
                  <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".6rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560" }}>{r.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TJX, RMR Group, ShowNxt — right, compact stack aligned to bottom */}
          <div style={{ display: "flex", flexDirection: "column" as const, justifyContent: "flex-end" }}>
            {[experience[1], experience[2], experience[3]].map((job, i) => (
              <motion.div key={i} variants={item} style={{ padding: "1rem 2rem", borderBottom: i < 2 ? "1px solid #0f0f0f" : "none" }}>
                <p style={{ fontSize: ".92rem", fontWeight: 700, lineHeight: 1.2, marginBottom: ".5rem" }}>{job.company}</p>
                <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".68rem", letterSpacing: ".08em", color: "#6b6560", fontStyle: "italic", marginBottom: ".15rem" }}>{job.roles[0].role}</p>
                <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".58rem", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#6b6560" }}>{job.roles[0].period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ borderBottom: "2px solid #0f0f0f" }}>
        <Section style={{ padding: "2rem 2.5rem 1rem", borderBottom: "1px solid #0f0f0f" }}>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700 }}>Projects</p>
        </Section>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          {projects.map((p, i) => (
            <motion.div key={i} variants={item} style={{ padding: "2rem", borderRight: i % 2 === 0 ? "1px solid #0f0f0f" : "none", borderBottom: i < projects.length - (projects.length % 2 === 0 ? 2 : 1) ? "1px solid #0f0f0f" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.2, fontStyle: p.comingSoon ? "italic" : "normal", color: p.comingSoon ? "#6b6560" : "#0f0f0f" }}>{p.name}</p>
              </div>
              <p style={{ fontSize: ".82rem", color: "#6b6560", lineHeight: 1.75, marginBottom: "1rem" }}>{p.desc}</p>
              {p.tech && <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".12em", textTransform: "uppercase" as const }}>{p.tech}</p>}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Travel */}
      <section id="travel" style={{ borderBottom: "2px solid #0f0f0f" }}>
        <Section style={{ padding: "2rem 2.5rem 1rem", borderBottom: "1px solid #0f0f0f" }}>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700 }}>Dispatch</p>
        </Section>

        {/* Featured destination */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid #0f0f0f" }}
        >
          <div style={{ position: "relative", overflow: "hidden", height: "400px", borderRight: "1px solid #0f0f0f" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={travel.featured.img}
              alt={travel.featured.city}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "sepia(15%) contrast(1.05)" }}
            />
          </div>
          <div style={{ padding: "3rem", display: "flex", flexDirection: "column" as const, justifyContent: "center" }}>
            <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, marginBottom: "1.25rem" }}>Latest dispatch</p>
            <h3 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-.03em", fontFamily: "Georgia, serif", marginBottom: ".75rem" }}>{travel.featured.city}.</h3>
            <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#6b6560", marginBottom: "1.75rem" }}>{travel.featured.country} · {travel.featured.year}</p>
            <p style={{ fontSize: ".95rem", lineHeight: 1.85, color: "#6b6560", fontStyle: "italic", borderLeft: "3px solid #c0392b", paddingLeft: "1.25rem" }}>{travel.featured.note}</p>
          </div>
        </motion.div>

        {/* Rest of destinations — horizontally scrollable */}
        <TravelStrip destinations={travel.rest} />
      </section>

      {/* Contact */}
      <Section style={{ padding: "4rem 2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", borderBottom: "2px solid #0f0f0f" }}>
        <div id="contact">
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#c0392b", fontWeight: 700, marginBottom: "1rem" }}>Get in touch</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "1.5rem" }}>Thanks for<br />stopping by!</h2>
          <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "#6b6560", maxWidth: "400px" }}>I&apos;d love to chat or grab some coffee!</p>
        </div>
        <div style={{ background: "#0f0f0f", color: "#f5f0e8", padding: "1.75rem", width: "50%", display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
          <p style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".8rem", letterSpacing: ".2em", textTransform: "uppercase" as const, color: "#6b6560", marginBottom: "1.25rem" }}>Feel free to reach out to me at</p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a href="mailto:anwarmirana@gmail.com" aria-label="Email" style={{ color: "#f5f0e8", textDecoration: "none" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/miranaanwar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#f5f0e8", textDecoration: "none" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/miranaanwar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "#f5f0e8", textDecoration: "none" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>
      </Section>

      <footer style={{ padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: ".82rem", color: "#6b6560" }}>Made with ❤️ by Mirana Anwar</span>
        <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase", color: "#6b6560" }}>New York City</span>
      </footer>
    </div>
  );
}
