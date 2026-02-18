import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send, Instagram, ExternalLink } from "lucide-react";
import { Lang, contacts, sectionTitles, personalData } from "@/data/cv-data";

interface ContactSectionProps {
  lang: Lang;
}

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const getIcon = (type: string) => {
  switch (type) {
    case "email": return <Mail size={16} />;
    case "phone": return <Phone size={16} />;
    case "telegram": return <Send size={16} />;
    case "instagram": return <Instagram size={16} />;
    case "whatsapp": return <WhatsAppIcon />;
    default: return <ExternalLink size={16} />;
  }
};

const getLabel = (type: string, lang: Lang) => {
  const labels: Record<string, { en: string; de: string }> = {
    email: { en: "Email", de: "E-Mail" },
    phone: { en: "Phone", de: "Telefon" },
    telegram: { en: "Telegram", de: "Telegram" },
    instagram: { en: "Instagram", de: "Instagram" },
    whatsapp: { en: "WhatsApp", de: "WhatsApp" },
  };
  return labels[type]?.[lang] ?? type;
};

export default function ContactSection({ lang }: ContactSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="swiss-section border-t border-border bg-foreground text-background">
      <div className="swiss-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {/* Left */}
          <div className="md:col-span-5">
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">
              {lang === "en" ? "04 — Contact" : "04 — Kontakt"}
            </span>
            <div className="w-12 h-1 bg-primary mb-6" />
            <h2
              className="font-bold text-foreground mb-6 leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "hsl(var(--background))" }}
            >
              {sectionTitles.contact[lang]}
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              {lang === "en"
                ? "Whether you have a project in mind, a question about my work, or simply want to connect — I'd love to hear from you."
                : "Ob Sie ein Projekt im Sinn haben, eine Frage zu meiner Arbeit oder einfach in Kontakt treten möchten — ich freue mich von Ihnen zu hören."}
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 border border-primary px-4 py-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span style={{ color: "hsl(var(--background))" }}>
                {personalData.availability[lang]}
              </span>
            </div>
          </div>

          {/* Right: Contact links */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {contacts.map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  target={contact.type !== "email" && contact.type !== "phone" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 border border-border/20 hover:bg-primary transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                >
                  <span className="text-primary group-hover:text-primary-foreground transition-colors">
                    {getIcon(contact.type)}
                  </span>
                  <div>
                    <p className="font-mono text-xs tracking-wide mb-0.5" style={{ color: "hsl(var(--muted-foreground))", transition: "color 0.3s" }}>
                      {getLabel(contact.type, lang)}
                    </p>
                    <p className="text-sm font-medium group-hover:text-primary-foreground transition-colors" style={{ color: "hsl(var(--background))" }}>
                      {contact.label}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
