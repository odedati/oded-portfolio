import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Languages,
  Mail,
  Moon,
  Phone,
  Plus,
  Sun,
} from "lucide-react";
import {
  background,
  content,
  focus,
  profile,
  projects,
  skills,
  ticker,
} from "./data";

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
  if (stored === "en" || stored === "he") return stored;
  return "en";
}

function initialTheme() {
  const stored = readStored("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [language, setLanguage] = useState(initialLanguage);
  const [theme, setTheme] = useState(initialTheme);
  const t = content[language];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = t.lang;
    root.dir = t.dir;
    document.title = t.docTitle;
    writeStored("lang", language);
  }, [language, t]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    writeStored("theme", theme);
  }, [theme]);

  return (
    <div className="relative z-10 min-h-screen">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <Header
        t={t}
        theme={theme}
        onTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        onLanguage={() => setLanguage(language === "en" ? "he" : "en")}
      />

      <main>
        <Hero t={t} />
        <Ticker />
        <Work t={t} language={language} />
        <Focus t={t} language={language} />
        <Background t={t} language={language} />
        <Toolbox t={t} language={language} />
        <Contact t={t} />
      </main>

      <footer className="border-t border-line px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Oded Atias</span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </div>
  );
}

/* ---------- layout pieces ---------- */

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header({ t, theme, onTheme, onLanguage }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Oded Atias, top of page">
          <span className="grid size-8 place-items-center rounded-full bg-ink font-mono text-[11px] font-medium text-paper">
            OA
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Sections">
          {t.nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-muted transition hover:text-ink">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onTheme}
            aria-label={t.themeLabel}
            className="grid size-9 place-items-center rounded-full border border-line text-ink transition hover:bg-paper-2"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={onLanguage}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-line px-3.5 text-sm font-medium transition hover:bg-paper-2"
          >
            <Languages size={15} />
            {t.switchLabel}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section id="top" className="px-5 pb-14 pt-14 sm:px-8 sm:pt-20 lg:pb-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="pulse-dot size-2 rounded-full bg-accent" />
            {t.openToWork}
          </div>

          <h1 className="mt-8 font-display text-[clamp(4.5rem,15vw,11.5rem)] font-normal leading-[0.84] tracking-tight">
            <span className="block">{t.name[0]}</span>
            <span className="block text-accent italic">{t.name[1]}</span>
          </h1>

          <p className="mt-9 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {t.role}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-8 text-ink/85">{t.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110"
            >
              {t.ctaWork}
              <ArrowUpRight size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold transition hover:bg-paper-2"
            >
              {t.ctaMail}
              <Mail size={16} />
            </a>
          </div>
        </div>

        <dl className="divide-y divide-line border-y border-line">
          {t.facts.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-4">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {label}
              </dt>
              <dd className="text-[15px] leading-6">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className="ticker overflow-hidden border-y border-line bg-paper-2/60 py-4"
    >
      <div className="ticker-track flex w-max gap-10 whitespace-nowrap font-display text-3xl">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHead({ index, title, intro }) {
  return (
    <Reveal className="mb-10 grid gap-4 md:grid-cols-[8rem_1fr]">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{index}</span>
      <div>
        <h2 className="font-display text-5xl leading-none sm:text-6xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{intro}</p>}
      </div>
    </Reveal>
  );
}

/* ---------- work ---------- */

function Work({ t, language }) {
  const [open, setOpen] = useState(() => new Set([0]));

  function toggle(index) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section id="work" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="01" title={t.work.title} intro={t.work.intro} />

        <ul className="border-t border-ink">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              isOpen={open.has(i)}
              onToggle={() => toggle(i)}
              t={t}
              language={language}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectRow({ project, index, isOpen, onToggle, t, language }) {
  const panelId = `panel-${project.id}`;
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-6 text-start sm:grid-cols-[4rem_1fr_11rem_auto] sm:gap-6 sm:py-8"
        >
          <span className="font-mono text-xs text-muted">{number}</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-display text-3xl leading-tight transition group-hover:text-accent sm:text-4xl lg:text-5xl">
              {project.title}
            </span>
            {project.featured && (
              <span className="rounded-full bg-ink px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper">
                {t.work.featured}
              </span>
            )}
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.12em] text-muted sm:block">
            {project.type[language]}
          </span>
          <span
            className={`grid size-9 place-items-center rounded-full border border-line transition group-hover:border-ink ${
              isOpen ? "bg-ink text-paper" : ""
            }`}
          >
            <Plus size={16} className={`transition-transform ${isOpen ? "rotate-45" : ""}`} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-label={project.title}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden" inert={!isOpen}>
          <div className="grid gap-8 pb-10 sm:ps-[5.5rem] lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted sm:hidden">
                {project.type[language]}
              </p>
              <p className="mt-3 max-w-xl text-lg leading-8 sm:mt-0">{project.summary[language]}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.live ? (
                  <ExternalButton href={project.live} primary>
                    {t.work.live}
                  </ExternalButton>
                ) : (
                  <span className="rounded-full border border-dashed border-line px-5 py-2.5 text-sm text-muted">
                    {t.work.noLive}
                  </span>
                )}
                {project.repo && <ExternalButton href={project.repo}>{t.work.code}</ExternalButton>}
              </div>
            </div>

            {project.access && <AccessCard access={project.access} t={t} />}
          </div>
        </div>
      </div>
    </li>
  );
}

function ExternalButton({ href, primary = false, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
        primary
          ? "bg-ink text-paper hover:bg-accent hover:text-accent-ink"
          : "border border-ink/25 hover:bg-paper-2"
      }`}
    >
      {children}
      <ArrowUpRight size={16} />
    </a>
  );
}

function AccessCard({ access, t }) {
  const rows = [
    access.unit && [t.work.unit, access.unit],
    [t.work.username, access.username],
    [t.work.password, access.password],
  ].filter(Boolean);

  return (
    <div className="self-start rounded-2xl border border-line bg-paper-2/70 p-5">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{t.work.demo}</p>
      <dl className="mt-4 space-y-2.5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-3">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="flex items-center gap-2">
              <code dir="ltr" className="font-mono text-sm">
                {value}
              </code>
              <CopyButton value={value} t={t} />
            </dd>
          </div>
        ))}
      </dl>
      {access.signup && <p className="mt-4 text-sm leading-6 text-muted">{t.work.signup}</p>}
    </div>
  );
}

function CopyButton({ value, t }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable: the value stays visible to copy by hand */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? t.work.copied : t.work.copy}
      title={copied ? t.work.copied : t.work.copy}
      className="grid size-7 place-items-center rounded-full text-muted transition hover:bg-line hover:text-ink"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

/* ---------- focus / background / toolbox ---------- */

function Focus({ t, language }) {
  return (
    <section id="focus" className="border-t border-line bg-paper-2/50 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="02" title={t.focus.title} intro={t.focus.intro} />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {focus.map((item, i) => (
            <Reveal key={item.title.en} delay={i * 0.06}>
              <article className="border-t border-ink pt-5">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-3xl">{item.title[language]}</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-muted">{item.text[language]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Background({ t, language }) {
  return (
    <section id="background" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="03" title={t.background.title} intro={t.background.intro} />
        <ol className="border-t border-ink">
          {background.map((item) => (
            <Reveal key={item.title.en}>
              <li className="grid gap-4 border-b border-line py-8 md:grid-cols-[14rem_1fr] md:gap-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    {item.when[language]}
                  </p>
                  <p className="mt-2 text-sm text-muted">{item.where[language]}</p>
                </div>
                <div>
                  <h3 className="font-display text-3xl leading-tight">{item.title[language]}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                    {item.text[language]}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Toolbox({ t, language }) {
  return (
    <section className="border-t border-line bg-paper-2/50 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="04" title={t.skills.title} />
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {skills.map((group) => (
            <Reveal key={group.label.en}>
              <div className="border-t border-line pt-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {group.label[language]}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const label = typeof item === "string" ? item : item[language];
                    return (
                      <li key={label} className="rounded-full bg-paper px-3.5 py-1.5 text-sm ring-1 ring-line">
                        {label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */

function Contact({ t }) {
  const links = [
    { label: "GitHub", value: profile.githubLabel, href: profile.github },
    { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  ];

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-4xl font-display text-[clamp(3rem,9vw,7rem)] leading-[0.92]">
            {t.contact.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{t.contact.text}</p>

          <a
            href={`mailto:${profile.email}`}
            dir="ltr"
            className="mt-10 inline-flex items-center gap-3 border-b-2 border-accent pb-1 font-display text-3xl transition hover:text-accent sm:text-5xl"
          >
            {profile.email}
            <ArrowUpRight className="size-7 sm:size-10" />
          </a>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <ContactCell
              label={t.contact.phone}
              value={profile.phone}
              href={`tel:${profile.phone.replaceAll("-", "")}`}
              icon={<Phone size={15} />}
            />
            {links.map((link) => (
              <ContactCell key={link.label} {...link} external />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCell({ label, value, href, icon, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block bg-paper p-5 transition hover:bg-paper-2"
    >
      <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {icon}
        {label}
      </span>
      <span className="mt-3 block break-words text-start text-sm">
        <bdi dir="ltr">{value}</bdi>
      </span>
    </a>
  );
}

export default App;
