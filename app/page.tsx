"use client";

import { NavBar }            from "@/app/_components/sections/NavBar";
import { DatelineTicker }    from "@/app/_components/sections/DatelineTicker";
import { HeroSection }       from "@/app/_components/sections/HeroSection";
import { AboutSection }      from "@/app/_components/sections/AboutSection";
import { ExperienceSection } from "@/app/_components/sections/ExperienceSection";
import { ProjectsSection }   from "@/app/_components/sections/ProjectsSection";
import { TravelSection }     from "@/app/_components/sections/TravelSection";
import { ContactSection }    from "@/app/_components/sections/ContactSection";
import { PageFooter }        from "@/app/_components/sections/PageFooter";

// Root page — assembles all sections in order.
// To edit a section, open its file in app/_components/sections/.
// To edit data (experience, projects, travel etc.), see app/_data/.
export default function Portfolio() {
  return (
    <div style={{ background: "#f5f0e8", color: "#0f0f0f", minHeight: "100vh", fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <NavBar />
      <DatelineTicker />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TravelSection />
      <ContactSection />
      <PageFooter />
    </div>
  );
}
