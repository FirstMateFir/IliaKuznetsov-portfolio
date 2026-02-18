import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Lang, projects, sectionTitles, ProjectItem } from "@/data/cv-data";

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

const imageMap: Record<string, string> = {
  "project-1.jpg": proj1,
  "project-2.jpg": proj2,
  "project-3.jpg": proj3,
  "project-4.jpg": proj4,
  "project-5.jpg": proj5,
  "project-6.jpg": proj6,
  "project-7.jpg": proj7,
  "project-8.jpg": proj8,
  "project-9.jpg": proj9,
  "project-10.jpg": proj10,
};

interface ProjectsProps {
  lang: Lang;
}

function ProjectModal({ project, lang, onClose }: { project: ProjectItem; lang: Lang; onClose: () => void }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = project.images.map((img) => imageMap[img]).filter(Boolean);
  const prev = () => setSlideIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setSlideIndex((i) => (i + 1) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-foreground/90" />

        {/* Modal */}
        <motion.div
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Image slider */}
          {images.length > 0 && (
            <div className="relative aspect-video bg-secondary overflow-hidden">
              <img
                src={images[slideIndex]}
                alt={`${project.title} — ${slideIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          i === slideIndex ? "bg-foreground" : "bg-foreground/30"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              <span className="text-xs text-muted-foreground">—</span>
              <span className="font-mono text-xs text-muted-foreground">{project.role[lang]}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              {project.title}
            </h2>

            <div className="h-px w-full bg-border mb-6" />

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {project.description[lang]}
            </p>

            {/* My Role */}
            <div className="mb-8">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
                {lang === "en" ? "My Role" : "Meine Rolle"}
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {project.myRole[lang]}
              </p>
            </div>

            {/* Team */}
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
                {lang === "en" ? "The Team" : "Das Team"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.team.map((member, i) => (
                  <div key={i} className="flex items-baseline gap-2 py-2 border-b border-border last:border-b-0">
                    <span className="font-mono text-xs text-muted-foreground min-w-[120px] flex-shrink-0">
                      {member.role[lang]}
                    </span>
                    <span className="text-sm text-foreground font-medium">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects({ lang }: ProjectsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
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
              <span className="text-label">
                {lang === "en" ? "02 — Productions" : "02 — Produktionen"}
              </span>
            </div>
            <div className="md:col-span-9">
              <div className="swiss-rule" />
              <h2 className="text-headline">{sectionTitles.projects[lang]}</h2>
              <p className="text-sm text-muted-foreground mt-2">
                {lang === "en"
                  ? "Click a production to view full details, team, and images."
                  : "Klicken Sie auf eine Produktion für Details, Team und Bilder."}
              </p>
            </div>
          </motion.div>

          {/* Project list */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3 hidden md:block" />
            <div className="md:col-span-9">
              {projects.map((project, i) => (
                <motion.button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-left group grid grid-cols-[50px_1fr_auto] sm:grid-cols-[70px_1fr_auto] gap-4 sm:gap-8 py-4 border-b border-border last:border-b-0 hover:bg-secondary transition-colors duration-150"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {/* Year */}
                  <span className="font-mono text-xs text-muted-foreground pt-0.5">
                    {project.year}
                  </span>

                  {/* Title + Role */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="font-medium text-sm text-foreground group-hover:underline underline-offset-2 transition-all">
                      {project.title}
                    </span>
                    <span className="hidden sm:inline text-muted-foreground text-xs">—</span>
                    <span className="text-xs text-muted-foreground mt-0.5 sm:mt-0">
                      {project.role[lang]}
                    </span>
                  </div>

                  {/* Arrow */}
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors pt-0.5 self-start sm:self-auto">
                    →
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
