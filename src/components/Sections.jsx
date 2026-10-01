import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { background, focus, profile, skills, ticker } from "../data";
import { Reveal, SectionHead, SpotlightCard, WordReveal } from "./motion";

/* ---------- ticker ---------- */

export function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className="ticker overflow-hidden border-y border-white/10 bg-white/[0.02] py-5"
    >
      <div className="ticker-track flex w-max gap-12 whitespace-nowrap text-3xl font-semibold tracking-tight text-fg/80">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="text-grad">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- focus ---------- */

export function Focus({ t, language }) {
  return (
    <section id="focus" className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHead index="02" title={t.focus.title} intro={t.focus.intro} />
        <div className="grid gap-5 md:grid-cols-2">
          {focus.map((item, i) => (
            <Reveal key={item.title.en} delay={(i % 2) * 0.1}>
              <SpotlightCard className="h-full rounded-3xl p-8">
                <span className="font-mono text-xs text-a1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight">{item.title[language]}</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-muted">{item.text[language]}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- background: timeline whose line draws as you scroll ---------- */

export function Background({ t, language }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const grow = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const scaleY = useTransform(grow, (v) => (reduce ? 1 : v));

  return (
    <section id="background" className="border-t border-white/10 bg-bg-2 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHead index="03" title={t.background.title} intro={t.background.intro} />

        <div className="grid gap-14 lg:grid-cols-[22rem_1fr] lg:gap-20">
        <Portrait t={t} />

        <div ref={ref} className="relative ps-10 sm:ps-16">
          <span className="absolute inset-y-0 start-[0.65rem] w-px bg-white/10 sm:start-[1.15rem]" aria-hidden="true" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute inset-y-0 start-[0.65rem] w-px bg-gradient-to-b from-a1 via-a2 to-a3 sm:start-[1.15rem]"
          />

          <ol className="space-y-14">
            {background.map((item) => (
              <li key={item.title.en} className="relative">
                <motion.span
                  aria-hidden="true"
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="bg-grad absolute -start-[2.2rem] top-2 size-3 rounded-full ring-4 ring-bg-2 sm:-start-[3.2rem]"
                />
                <Reveal y={36}>
                  <div className="grid gap-4 lg:grid-cols-[15rem_1fr] lg:gap-12">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-a1">
                        {item.when[language]}
                      </p>
                      <p className="mt-2 text-sm text-muted">{item.where[language]}</p>
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold leading-tight tracking-tight">
                        {item.title[language]}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{item.text[language]}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
        </div>
      </div>
    </section>
  );
}

function Portrait({ t }) {
  const reduce = useReducedMotion();

  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-xs self-start lg:sticky lg:top-28 lg:max-w-none"
    >
      <div className="bg-grad rounded-[2rem] p-[2px] shadow-[0_40px_90px_-30px_rgba(129,140,248,0.45)]">
        <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-bg-2">
          <img
            src={profile.photoFramed}
            alt="Oded Atias"
            width="900"
            height="1000"
            loading="lazy"
            className="aspect-[9/10] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16">
            <p className="text-lg font-semibold">{t.name.join(" ")}</p>
            <p className="mt-0.5 flex items-center gap-2 font-mono text-xs text-fg/75">
              <span className="pulse-dot size-1.5 rounded-full bg-a1" />
              {t.openToWork}
            </p>
          </div>
        </div>
      </div>
    </motion.figure>
  );
}

/* ---------- toolbox ---------- */

export function Toolbox({ t, language }) {
  const reduce = useReducedMotion();

  return (
    <section className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHead index="04" title={t.skills.title} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, gi) => (
            <Reveal key={group.label.en} delay={(gi % 3) * 0.08}>
              <SpotlightCard className="h-full rounded-3xl p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {group.label[language]}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, i) => {
                    const label = typeof item === "string" ? item : item[language];
                    return (
                      <motion.li
                        key={label}
                        initial={reduce ? false : { opacity: 0, scale: 0.8, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: 0.15 + i * 0.05, type: "spring", stiffness: 260, damping: 20 }}
                        whileHover={reduce ? undefined : { y: -3 }}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-sm"
                      >
                        {label}
                      </motion.li>
                    );
                  })}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */

export function Contact({ t }) {
  const links = [
    { label: "GitHub", value: profile.githubLabel, href: profile.github },
    { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  ];

  return (
    <section id="contact" className="relative isolate overflow-hidden px-5 py-32 sm:px-8 sm:py-44">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="aura drift-b absolute start-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-a2/20 blur-[130px]" style={{ "--aura": "rgb(129 140 248 / 0.20)" }} />
      </div>

      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-5xl text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-tight">
          <WordReveal text={t.contact.title} inView />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">{t.contact.text}</p>

          <a
            href={`mailto:${profile.email}`}
            dir="ltr"
            className="glow-border mt-12 inline-flex items-center gap-4 rounded-full px-8 py-5 text-xl font-semibold transition hover:scale-[1.02] sm:text-3xl"
          >
            {profile.email}
            <ArrowUpRight className="size-6 sm:size-8" />
          </a>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
            <ContactCell
              label={t.contact.phone}
              value={profile.phone}
              href={`tel:${profile.phone.replaceAll("-", "")}`}
              icon={<Phone size={14} />}
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
      className="block bg-bg p-6 transition hover:bg-bg-2"
    >
      <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
        {icon}
        {label}
      </span>
      <span className="mt-3 block break-words text-start text-sm">
        <bdi dir="ltr">{value}</bdi>
      </span>
    </a>
  );
}
