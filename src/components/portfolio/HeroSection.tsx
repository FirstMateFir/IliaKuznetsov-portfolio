import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { Lang, personalData, contacts } from "@/data/cv-data";
import heroPortrait from "@/assets/hero-portrait.jpg";

interface HeroSectionProps {
  lang: Lang;
}

const ContactIcon = ({ type }: { type: string }) => {
  if (type === "whatsapp") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    );
  }
  return null;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function HeroSection({ lang }: HeroSectionProps) {
  const scrollToExperience = () => {
    const el = document.getElementById("experience");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 swiss-container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          {/* Label */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-label mb-6"
          >
            {lang === "en" ? "Portfolio" : "Portfolio"} — {new Date().getFullYear()}
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-display mb-6 leading-none"
          >
            <span className="block text-foreground">{personalData.firstName}</span>
            <span className="block text-primary">{personalData.lastName}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl font-light text-muted-foreground mb-8 leading-relaxed max-w-lg"
          >
            {personalData.title[lang]}
          </motion.p>

          {/* Red rule */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="swiss-rule"
          />

          {/* Tagline */}
          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed"
          >
            {personalData.tagline[lang]}
          </motion.p>

          {/* Location + Availability */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-6 mb-12 flex-wrap"
          >
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              {personalData.location}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
              {personalData.availability[lang]}
            </span>
          </motion.div>

          {/* Scroll CTA */}
          <motion.button
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            onClick={scrollToExperience}
            className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="w-px h-8 bg-border group-hover:bg-primary transition-colors" />
            <ArrowDown size={16} className="scroll-indicator group-hover:text-primary" />
            <span className="font-mono text-xs tracking-widest uppercase">
              {lang === "en" ? "Scroll to explore" : "Scrollen zum Erkunden"}
            </span>
          </motion.button>
        </div>

        {/* Right: Portrait */}
        <motion.div
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Red geometric accent */}
            <div
              className="absolute -top-4 -right-4 w-full h-full border-2 border-primary"
              style={{ zIndex: 0 }}
            />
            <div className="relative overflow-hidden" style={{ zIndex: 1 }}>
              <img
                src={heroPortrait}
                alt={`${personalData.name} — Portfolio`}
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                style={{ display: "block" }}
              />
            </div>
            {/* Floating label */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-4 py-2 text-xs font-mono tracking-widest uppercase">
              Zurich, CH
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
