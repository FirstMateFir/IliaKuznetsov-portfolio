import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { Lang, personalData, calculateAge, languageProficiencies, contacts } from "@/data/cv-data";
import { Mail, Phone, Send, Instagram } from "lucide-react";

interface HeroSectionProps {
  lang: Lang;
}

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const getContactIcon = (type: string) => {
  switch (type) {
    case "email": return <Mail size={14} />;
    case "phone": return <Phone size={14} />;
    case "telegram": return <Send size={14} />;
    case "instagram": return <Instagram size={14} />;
    case "whatsapp": return <WhatsAppIcon />;
    default: return null;
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function HeroSection({ lang }: HeroSectionProps) {
  const age = calculateAge();

  const scrollToTimeline = () => {
    const el = document.getElementById("timeline");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 swiss-container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* Left: Text */}
        <div className="lg:col-span-8 order-2 lg:order-1">

          {/* Label */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-label mb-8"
          >
            {lang === "en" ? "Portfolio" : "Portfolio"} — {new Date().getFullYear()}
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-display mb-4 leading-none"
          >
            <span className="block text-foreground">{personalData.firstName}</span>
            <span className="block text-foreground">{personalData.lastName}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl font-light text-muted-foreground mb-2 tracking-wide"
          >
            {personalData.title[lang]}
          </motion.p>

          {/* Birth / Age */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-mono text-xs text-muted-foreground mb-8 tracking-widest"
          >
            *{personalData.birthDate} — {age} {lang === "en" ? "years old" : "Jahre alt"}
          </motion.p>

          {/* Divider */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="swiss-rule"
          />

          {/* Languages */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-8"
          >
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
              {lang === "en" ? "Languages" : "Sprachen"}
            </p>
            <div className="flex flex-wrap gap-4">
              {languageProficiencies.map((lp, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {lp.language[lang]}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground border border-border px-1.5 py-0.5">
                    {lp.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 mb-10"
          >
            <MapPin size={13} className="text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground tracking-wide">
              {personalData.location}
            </span>
          </motion.div>

          {/* Social icons */}
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-5 mb-12"
          >
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.type !== "email" && c.type !== "phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={c.type}
              >
                {getContactIcon(c.type)}
              </a>
            ))}
          </motion.div>

          {/* Scroll CTA */}
          <motion.button
            custom={8}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            onClick={scrollToTimeline}
            className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="w-px h-8 bg-border group-hover:bg-foreground transition-colors" />
            <ArrowDown size={15} className="scroll-indicator" />
            <span className="font-mono text-xs tracking-widest uppercase">
              {lang === "en" ? "Scroll" : "Scrollen"}
            </span>
          </motion.button>
        </div>

        {/* Right: B&W Portrait Placeholder */}
        <motion.div
          className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className="relative">
            <div className="w-56 h-72 md:w-72 md:h-96 bg-secondary border border-border flex flex-col items-center justify-center">
              {/* Minimalist B&W avatar */}
              <div className="w-20 h-20 rounded-full bg-muted border border-border mb-4 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-muted-foreground">
                  <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                {personalData.firstName} {personalData.lastName}
              </span>
            </div>
            {/* Corner label */}
            <div className="absolute -bottom-4 -left-4 bg-foreground text-background px-3 py-1.5 text-xs font-mono tracking-widest uppercase">
              {personalData.location}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
