import { Lang } from "@/data/cv-data";

interface LanguageSwitcherProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-0 font-mono text-xs tracking-widest">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 transition-all duration-200 ${
          lang === "en"
            ? "text-foreground font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-border select-none">|</span>
      <button
        onClick={() => setLang("de")}
        className={`px-2 py-1 transition-all duration-200 ${
          lang === "de"
            ? "text-foreground font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Zur deutschen Version wechseln"
      >
        DE
      </button>
    </div>
  );
}
