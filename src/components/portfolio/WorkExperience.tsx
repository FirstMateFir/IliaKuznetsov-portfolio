import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lang, workExperience, sectionTitles } from "@/data/cv-data";

interface WorkExperienceProps {
  lang: Lang;
}

const entryVariant = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: Math.min(i * 0.05, 0.6), ease: "easeOut" },
  }),
};

export default function WorkExperience({ lang }: WorkExperienceProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="swiss-section border-t border-border">
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
            <span className="text-label">{lang === "en" ? "01 — Experience" : "01 — Erfahrung"}</span>
          </div>
          <div className="md:col-span-9">
            <div className="swiss-rule" />
            <h2 className="text-headline">{sectionTitles.experience[lang]}</h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left spacer */}
          <div className="md:col-span-3 hidden md:block" />

          {/* Entries */}
          <div className="md:col-span-9 relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

            {workExperience.map((entry, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={entryVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="relative md:pl-8 pb-10 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4.5px] top-1 w-2.5 h-2.5 bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary transition-all duration-300 hidden md:block" />

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6">
                  {/* Period + Location */}
                  <div className="sm:col-span-3">
                    <p className="font-mono text-xs text-muted-foreground tracking-wide">
                      {entry.period[lang]}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">
                      {entry.location}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="sm:col-span-9">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <h3 className="font-bold text-base text-foreground leading-tight">
                          {entry.role[lang]}
                        </h3>
                        <p className="text-primary text-sm font-medium mt-0.5">{entry.company}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mt-2 mb-3">
                      {entry.description[lang]}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs font-mono px-2 py-0.5 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Separator */}
                    {i < workExperience.length - 1 && (
                      <div className="mt-10 h-px bg-border" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
