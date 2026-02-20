import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lang, timeline, sectionTitles } from "@/data/cv-data";

interface TimelineProps {
  lang: Lang;
}

export default function Timeline({ lang }: TimelineProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" className="swiss-section border-t border-border">
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
            <span className="text-label">
              {lang === "en" ? "01 — Timeline" : "01 — Zeitlinie"}
            </span>
          </div>
          <div className="md:col-span-9">
            <div className="swiss-rule" />
            <h2 className="text-headline">{sectionTitles.timeline[lang]}</h2>
            <p className="text-sm text-muted-foreground mt-2">
              {lang === "en"
                ? "Work experience & education — unified chronology"
                : "Berufserfahrung & Ausbildung — vereinte Chronologie"}
            </p>
          </div>
        </motion.div>

        {/* Timeline table */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3 hidden md:block" />
          <div className="md:col-span-9">
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.5) }}
                className="group grid grid-cols-[85px_1fr] sm:grid-cols-[110px_1fr] gap-4 sm:gap-8 py-4 border-b border-border last:border-b-0 hover:bg-secondary transition-colors duration-150"
              >
                {/* Year */}
                <div className="pt-0.5">
                  <span className="font-mono text-xs text-muted-foreground tracking-wide">
                    {entry.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="font-medium text-sm text-foreground leading-snug flex-shrink-0">
                    {entry.title[lang]}
                  </span>
                  <span className="hidden sm:inline text-muted-foreground text-xs">—</span>
                  <span className="text-sm text-muted-foreground mt-0.5 sm:mt-0">
                    {entry.organization}
                  </span>
                  {entry.type === "education" && (
                    <span className="mt-1 sm:mt-0 sm:ml-auto font-mono text-xs border border-border px-1.5 py-0.5 text-muted-foreground self-start sm:self-auto whitespace-nowrap">
                      {lang === "en" ? "edu" : "Ausb."}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
