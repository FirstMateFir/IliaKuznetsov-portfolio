import { useState } from "react";
import { Lang } from "@/data/cv-data";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import HeroSection from "@/components/portfolio/HeroSection";
import WorkExperience from "@/components/portfolio/WorkExperience";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Index() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Sticky navigation header */}
      <PortfolioHeader lang={lang} setLang={setLang} />

      {/* Main content */}
      <main>
        {/* 1. Hero / Intro */}
        <HeroSection lang={lang} />

        {/* 2. Work Experience */}
        <WorkExperience lang={lang} />

        {/* 3. Education — immediately after Experience */}
        <Education lang={lang} />

        {/* 4. Selected Projects — underneath professional timeline */}
        <Projects lang={lang} />

        {/* 5. Contact */}
        <ContactSection lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
