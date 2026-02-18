import { useState } from "react";
import { Lang } from "@/data/cv-data";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import HeroSection from "@/components/portfolio/HeroSection";
import Timeline from "@/components/portfolio/Timeline";
import Projects from "@/components/portfolio/Projects";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Index() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <PortfolioHeader lang={lang} setLang={setLang} />
      <main>
        <HeroSection lang={lang} />
        <Timeline lang={lang} />
        <Projects lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
