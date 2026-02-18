import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lang, education, sectionTitles } from "@/data/cv-data";
import { GraduationCap } from "lucide-react";

interface EducationProps {
  lang: Lang;
}

export default function Education({ lang }: EducationProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="swiss-section border-t border-border bg-secondary">
      <div className="swiss-container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <div className="md:col-span-3">
            <span className="text-label">{lang === "en" ? "02 — Education" : "02 — Ausbildung"}</span>
          </div>
          <div className="md:col-span-9">
            <div className="swiss-rule" />
            <h2 className="text-headline">{sectionTitles.education[lang]}</h2>
          </div>
        </motion.div>

        {/* Education entries */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3 hidden md:block" />
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border p-6 hover:border-primary transition-colors duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <GraduationCap
                    size={20}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    {entry.period[lang]}
                  </span>
                </div>

                <h3 className="font-bold text-base text-foreground mb-1 leading-tight">
                  {entry.degree[lang]}
                </h3>
                <p className="text-primary text-sm font-medium mb-0.5">{entry.institution}</p>
                <p className="font-mono text-xs text-muted-foreground mb-3">{entry.location}</p>

                <div className="h-px w-full bg-border mb-3 group-hover:bg-primary transition-colors" />

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.description[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
