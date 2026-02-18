import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Lang, projects, sectionTitles } from "@/data/cv-data";

// Import project images
import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import proj4 from "@/assets/project-4.jpg";
import proj5 from "@/assets/project-5.jpg";
import proj6 from "@/assets/project-6.jpg";
import proj7 from "@/assets/project-7.jpg";
import proj8 from "@/assets/project-8.jpg";
import proj9 from "@/assets/project-9.jpg";
import proj10 from "@/assets/project-10.jpg";

const projectImages = [proj1, proj2, proj3, proj4, proj5, proj6, proj7, proj8, proj9, proj10];

interface ProjectsProps {
  lang: Lang;
}

export default function Projects({ lang }: ProjectsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="swiss-section border-t border-border">
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
            <span className="text-label">{lang === "en" ? "03 — Projects" : "03 — Projekte"}</span>
          </div>
          <div className="md:col-span-9">
            <div className="swiss-rule" />
            <h2 className="text-headline">{sectionTitles.projects[lang]}</h2>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="project-card bg-card group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              {/* Image */}
              <div className="overflow-hidden aspect-video">
                <img
                  src={projectImages[i]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-mono text-xs text-primary mb-1">{project.category[lang]}</p>
                    <h3 className="font-bold text-base text-foreground leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-1 ml-4">
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description[lang]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs font-mono px-2 py-0.5 bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Red hover line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
