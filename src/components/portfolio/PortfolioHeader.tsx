import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Lang, navLinks, personalData } from "@/data/cv-data";
import LanguageSwitcher from "./LanguageSwitcher";

interface PortfolioHeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const navIds = ["experience", "education", "projects", "contact"];

export default function PortfolioHeader({ lang, setLang }: PortfolioHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Detect active section
      const sections = navIds.map((id) => document.getElementById(id));
      let current = "";
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const links = navLinks[lang];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="swiss-container flex items-center justify-between h-16 md:h-20">
          {/* Name — padded so burger never overlaps */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group select-none"
            style={{ paddingLeft: "0" }}
          >
            <span
              className="w-1 h-6 bg-primary inline-block flex-shrink-0"
              aria-hidden="true"
            />
            <span
              className="font-bold tracking-tight text-foreground"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", whiteSpace: "nowrap" }}
            >
              {personalData.firstName}{" "}
              <span className="text-primary">{personalData.lastName}</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollTo(navIds[i])}
                className={`nav-item text-sm font-medium tracking-wide transition-colors duration-200 ${
                  activeSection === navIds[i]
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher lang={lang} setLang={setLang} />
            {/* Burger — desktop hidden */}
            <button
              className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close button */}
            <div className="flex justify-end p-6 pt-5">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col px-8 gap-0 flex-1">
              {links.map((link, i) => (
                <motion.button
                  key={i}
                  onClick={() => scrollTo(navIds[i])}
                  className="text-left py-5 text-2xl font-bold border-b border-border text-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <span className="text-primary mr-2 text-base font-mono">0{i + 1}</span>
                  {link}
                </motion.button>
              ))}
            </nav>

            <div className="p-8 text-muted-foreground text-sm font-mono">
              © {new Date().getFullYear()} {personalData.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
