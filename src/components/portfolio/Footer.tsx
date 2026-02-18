import { personalData } from "@/data/cv-data";
import { Lang } from "@/data/cv-data";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="swiss-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground tracking-wide">
          © {year} {personalData.name}. {lang === "en" ? "All rights reserved." : "Alle Rechte vorbehalten."}
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-foreground" />
          <span className="font-mono text-xs text-muted-foreground">
            {lang === "en" ? "Theatre Manager & Producer" : "Theaterleiter & Produzent"}
          </span>
          <span className="w-1 h-1 rounded-full bg-foreground" />
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {personalData.location}
        </p>
      </div>
    </footer>
  );
}
