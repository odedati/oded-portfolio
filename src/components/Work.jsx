import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Check, Copy, MousePointerClick } from "lucide-react";
import { previews, projects, ui as uiStrings } from "../data";
import { useMediaQuery } from "../hooks";
import BrowserWindow from "./BrowserWindow";
import { Reveal, SectionHead } from "./motion";

const EASE = [0.22, 1, 0.36, 1];
const N = projects.length;

export default function Work({ t, language }) {
  const ui = uiStrings[language];
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionHead index="01" title={t.work.title} intro={t.work.intro} />
      </div>
      {isDesktop ? (
        <Story t={t} ui={ui} language={language} />
      ) : (
        <Stack t={t} ui={ui} language={language} />
      )}
    </section>
  );
}

/* ---------- desktop: pinned stage, project changes while you scroll ---------- */

function Story({ t, ui, language }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [interactiveId, setInteractiveId] = useState(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.max(0, Math.min(N - 1, Math.floor(v * N))));
  });

  function goTo(index) {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + total * ((index + 0.5) / N), behavior: "smooth" });
  }

  const project = projects[active];
  const preview = previews[project.id];
  const interactive = interactiveId === project.id;

  return (
    <div ref={ref} style={{ height: `${N * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* per-project ambient glow */}
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            aria-hidden="true"
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 0.9 }}
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(60% 55% at 72% 50%, ${previews[p.id].hue}26, transparent 70%)`,
            }}
          />
        ))}

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-8 pt-16 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-[28rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -24, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <ProjectText project={project} index={active} t={t} language={language} big />
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <div className="relative aspect-[1280/868] [perspective:1600px]">
              {projects.map((p, i) => {
                const isActive = i === active;
                const offset = i < active ? -1 : 1;
                return (
                  <motion.div
                    key={p.id}
                    className="absolute inset-0"
                    initial={false}
                    animate={
                      isActive
                        ? { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }
                        : {
                            opacity: 0,
                            y: reduce ? 0 : offset * 70,
                            scale: reduce ? 1 : 0.92,
                            rotateX: reduce ? 0 : offset * -8,
                            filter: reduce ? "blur(0px)" : "blur(6px)",
                          }
                    }
                    transition={{ duration: 0.65, ease: EASE }}
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                    aria-hidden={!isActive}
                  >
                    <BrowserWindow
                      project={p}
                      preview={previews[p.id]}
                      load={Math.abs(i - active) <= 1}
                      interactive={isActive && interactiveId === p.id}
                      ui={ui}
                    />
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 flex min-h-9 items-center justify-between gap-4 text-xs text-muted">
              <span className="max-w-md">
                {interactive
                  ? ui.interactOn
                  : preview.blocked
                    ? ui.embedBlocked
                    : preview.kind === "chart"
                      ? ui.illustrative
                      : ""}
              </span>
              {preview.embed && project.live && (
                <button
                  type="button"
                  onClick={() => setInteractiveId(interactive ? null : project.id)}
                  aria-pressed={interactive}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                    interactive
                      ? "border-a1 bg-a1/15 text-a1"
                      : "border-white/15 text-fg hover:bg-white/10"
                  }`}
                >
                  <MousePointerClick size={15} />
                  {ui.interact}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* progress rail */}
        <nav
          aria-label={t.work.title}
          className="absolute end-6 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3"
        >
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${ui.goTo} ${i + 1}: ${p.title}`}
              aria-current={i === active}
              className="group grid size-6 place-items-center"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active ? "h-7 w-1.5 bg-grad" : "size-1.5 bg-white/25 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ---------- mobile / tablet: one card per project ---------- */

function Stack({ t, ui, language }) {
  return (
    <div className="mx-auto max-w-3xl space-y-20 px-5 pb-24 pt-4 sm:px-8">
      {projects.map((project, i) => (
        <StackCard key={project.id} project={project} index={i} t={t} ui={ui} language={language} />
      ))}
    </div>
  );
}

function StackCard({ project, index, t, ui, language }) {
  // Live sites are heavy (and Render's free tier cold-starts), so phones only load one after a tap.
  const [requested, setRequested] = useState(false);
  const preview = previews[project.id];
  const canLoadLive = Boolean(preview.embed && project.live);

  return (
    <Reveal>
      <article>
        <div className="relative aspect-[1280/868]">
          <BrowserWindow project={project} preview={preview} load={requested} ui={ui} />
          {canLoadLive && !requested && (
            <div className="absolute inset-x-0 bottom-4 flex justify-center">
              <button
                type="button"
                onClick={() => setRequested(true)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm font-medium text-fg"
              >
                <MousePointerClick size={15} />
                {ui.loadLive}
              </button>
            </div>
          )}
        </div>
        {preview.blocked && <p className="mt-3 text-xs text-muted">{ui.embedBlocked}</p>}
        <div className="mt-8">
          <ProjectText project={project} index={index} t={t} language={language} />
        </div>
      </article>
    </Reveal>
  );
}

/* ---------- shared text block ---------- */

function ProjectText({ project, index, t, language, big = false }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div>
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        <span dir="ltr" className="text-a1">
          {number} / {String(N).padStart(2, "0")}
        </span>
        <span className="h-px w-10 bg-white/20" />
        <span>{project.type[language]}</span>
      </div>

      <h3
        className={`mt-5 font-semibold leading-[1.02] tracking-tight ${
          big ? "text-5xl xl:text-6xl" : "text-4xl"
        }`}
      >
        {project.title}
        {project.featured && (
          <span className="ms-3 inline-block -translate-y-2 rounded-full border border-a1/40 bg-a1/10 px-2.5 py-0.5 align-middle font-mono text-[10px] uppercase tracking-wider text-a1">
            {t.work.featured}
          </span>
        )}
      </h3>

      <p className="mt-5 max-w-lg text-lg leading-8 text-fg/75">{project.summary[language]}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-muted"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {project.live ? (
          <LinkButton href={project.live} primary>
            {t.work.live}
          </LinkButton>
        ) : (
          <span className="rounded-full border border-dashed border-white/15 px-5 py-2.5 text-sm text-muted">
            {t.work.noLive}
          </span>
        )}
        {project.repo && <LinkButton href={project.repo}>{t.work.code}</LinkButton>}
      </div>

      {project.access && <AccessCard access={project.access} t={t} />}
    </div>
  );
}

function LinkButton({ href, primary = false, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
        primary
          ? "bg-grad text-[#05070c] hover:brightness-110"
          : "border border-white/15 hover:bg-white/10"
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
    <div className="mt-8 max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-a1">{t.work.demo}</p>
      <dl className="mt-3 space-y-2">
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
      {access.signup && <p className="mt-3 text-sm leading-6 text-muted">{t.work.signup}</p>}
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
      className="grid size-7 place-items-center rounded-full text-muted transition hover:bg-white/10 hover:text-fg"
    >
      {copied ? <Check size={14} className="text-a1" /> : <Copy size={14} />}
    </button>
  );
}
