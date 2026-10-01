import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Languages } from "lucide-react";
import { content, profile } from "./data";
import LinkedInIcon from "./components/LinkedInIcon";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { Background, Contact, Focus, Ticker, Toolbox } from "./components/Sections";

function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage can be blocked; the page works without it */
  }
}

function initialLanguage() {
  const stored = readStored("lang");
  return stored === "en" || stored === "he" ? stored : "en";
}

function App() {
  const [language, setLanguage] = useState(initialLanguage);
  const t = content[language];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = t.lang;
    root.dir = t.dir;
    document.title = t.docTitle;
    writeStored("lang", language);
  }, [language, t]);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <div className="relative min-h-screen">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress, transformOrigin: "0%" }}
        className="bg-grad fixed inset-x-0 top-0 z-[60] h-0.5 rtl:[transform-origin:100%]"
      />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-white/10 bg-bg/60 py-2 pe-2 ps-4 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Oded Atias, top of page">
            <span className="bg-grad grid size-8 place-items-center rounded-full font-mono text-[11px] font-semibold text-[#05070c]">
              OA
            </span>
          </a>

          <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Sections">
            {t.nav.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full px-4 py-2 text-muted transition hover:bg-white/10 hover:text-fg"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="grid size-9 place-items-center rounded-full border border-white/15 transition hover:border-[#0a66c2] hover:bg-[#0a66c2]/25"
          >
            <LinkedInIcon size={15} />
          </a>
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "he" : "en")}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-white/15 px-3.5 text-sm font-medium transition hover:bg-white/10"
          >
            <Languages size={15} />
            {t.switchLabel}
          </button>
          </div>
        </div>
      </header>

      <main>
        <Hero t={t} language={language} />
        <Ticker />
        <Work t={t} language={language} />
        <Focus t={t} language={language} />
        <Background t={t} language={language} />
        <Toolbox t={t} language={language} />
        <Contact t={t} />
      </main>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Oded Atias</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-fg"
          >
            <LinkedInIcon size={13} /> linkedin.com/in/oded-atias-836b77251
          </a>
          <span>{t.footer}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
