import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile, projects, previews, ui as uiStrings } from "../data";
import { useMediaQuery } from "../hooks";
import BrowserWindow from "./BrowserWindow";
import Cutout from "./Cutout";
import LinkedInIcon from "./LinkedInIcon";
import { Counter, WordReveal } from "./motion";

const byId = Object.fromEntries(projects.map((p) => [p.id, p]));

export default function Hero({ t, language }) {
  const ui = uiStrings[language];
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const wide = useMediaQuery("(min-width: 1024px)");
  const k = reduce ? 0 : wide ? 1 : 0.15; // parallax strength; small screens barely move
  const backY = useTransform(scrollYProgress, [0, 1], [0, -90 * k]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -210 * k]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, -340 * k]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90 * k]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], reduce ? [1, 1] : [1, 0]);

  function onPointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  const liveCount = projects.filter((p) => p.live).length;

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative isolate overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:min-h-screen lg:pt-36"
    >
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="drift-a absolute -start-[10%] top-[-10%] size-[46rem] rounded-full bg-a1/20 blur-[120px]" />
        <div className="drift-b absolute -end-[8%] top-[10%] size-[40rem] rounded-full bg-a2/25 blur-[130px]" />
        <div className="drift-a absolute bottom-[-20%] start-[30%] size-[34rem] rounded-full bg-a3/15 blur-[120px]" />
        <div className="grid-lines absolute inset-0" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgb(129 140 248 / 0.16), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <div className="flex items-end">
            {/* Photo first in the DOM: it sits at the start of the line (left in EN, right in HE). */}
            <div className="relative me-1 shrink-0 sm:me-3">
              {/* Entrance animates opacity/position only: leaving a CSS filter on the image
                  forces a re-rasterisation that softens its edges. */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Cutout eager className="w-[clamp(8.5rem,16vw,16rem)]" />
              </motion.div>
            </div>

            <h1 className="relative z-10 pb-3 text-[clamp(3.4rem,8.6vw,7.4rem)] font-semibold leading-[0.9] tracking-tight">
              <span className="block">
                <WordReveal text={t.name[0]} delay={0.15} />
              </span>
              <span className="block">
                <WordReveal text={t.name[1]} delay={0.3} className="text-grad" />
              </span>
            </h1>
          </div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-a1"
          >
            {t.role}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-4 max-w-xl text-lg leading-8 text-fg/80"
          >
            {t.intro}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="bg-grad inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#05070c] transition hover:brightness-110"
            >
              {t.ctaWork}
              <ArrowUpRight size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
            >
              {t.ctaMail}
              <Mail size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold backdrop-blur transition hover:border-[#0a66c2] hover:bg-[#0a66c2]/20"
            >
              LinkedIn
              <LinkedInIcon size={16} />
            </a>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            <Stat value={projects.length} label={ui.stats.projects} />
            <Stat value={liveCount} label={ui.stats.live} />
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {ui.stats.degree}
              </dt>
              <dd className="mt-1 text-3xl font-semibold">2025</dd>
            </div>
          </motion.dl>
        </motion.div>

        {/* floating windows */}
        <div className="relative mx-auto h-[23rem] w-full max-w-xl sm:h-[32rem] lg:h-[38rem]" aria-hidden="true">
          <FloatingWindow
            id="mediclear"
            language={language}
            style={{ y: backY, rotate: -5 }}
            className="start-0 top-0 w-[78%]"
            delay={0.5}
          />
          <FloatingWindow
            id="social-network"
            language={language}
            style={{ y: midY, rotate: 3 }}
            className="end-0 top-[26%] w-[74%]"
            delay={0.7}
          />
          <FloatingWindow
            id="hr-battalion"
            language={language}
            style={{ y: frontY, rotate: -2 }}
            className="start-[8%] top-[56%] w-[70%]"
            delay={0.9}
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 hidden justify-center lg:flex" aria-hidden="true">
        <div className="flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          {ui.scroll}
          <span className="scroll-cue block h-10 w-px bg-gradient-to-b from-a1 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 text-3xl font-semibold">
        <Counter value={value} />
      </dd>
    </div>
  );
}

function FloatingWindow({ id, language, style, className, delay }) {
  const reduce = useReducedMotion();
  const ui = uiStrings[language];
  const project = byId[id];

  return (
    <motion.div
      style={style}
      initial={reduce ? false : { opacity: 0, scale: 0.85, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className}`}
    >
      <div className="aspect-[1280/868]">
        <BrowserWindow project={project} preview={previews[id]} ui={ui} />
      </div>
    </motion.div>
  );
}
