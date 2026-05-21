"use client";

import { NavBar }            from "@/app/components/sections/NavBar";
import { DatelineTicker }    from "@/app/components/sections/DatelineTicker";
import { HeroSection }       from "@/app/components/sections/HeroSection";
import { AboutSection }      from "@/app/components/sections/AboutSection";
import { ExperienceSection } from "@/app/components/sections/ExperienceSection";
import { ProjectsSection }   from "@/app/components/sections/ProjectsSection";
import { TravelSection }     from "@/app/components/sections/TravelSection";
import { ContactSection }    from "@/app/components/sections/ContactSection";
import { PageFooter }        from "@/app/components/sections/PageFooter";

// Root page — assembles all sections in order.
// To edit a section, open its file in src/app/components/sections/.
// To edit data (experience, projects, travel etc.), see src/app/data/.
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
