import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, className = "", delay = 0, y = 28, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/* Words slide up out of a mask. Splits on spaces, so Hebrew letters stay intact.
   `wordClassName` goes on the element that holds the text. Put a background-clip:text gradient
   there, not on the wrapper: Chrome drops clipped text when a transformed child sits inside it. */
export function WordReveal({ text, className = "", wordClassName = "", delay = 0, speed = 1, inView = false }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) return <span className={`${className} ${wordClassName}`}>{text}</span>;

  /* The in-view trigger sits on the outer element: an element clipped by an
     overflow-hidden mask never counts as intersecting, so the words cannot be the trigger. */
  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "-60px" } }
    : { animate: "show" };

  return (
    <motion.span className={className} initial="hidden" {...trigger}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={{
              hidden: { y: "115%" },
              show: { y: "0%", transition: { duration: 0.85 * speed, delay: delay + i * 0.07 * speed, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}

export function Counter({ value, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}

/* Card with a pointer-following highlight (see .spotlight in index.css). */
export function SpotlightCard({ children, className = "", ...rest }) {
  function onMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <div onPointerMove={onMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function SectionHead({ index, title, intro }) {
  return (
    <div className="mb-12 max-w-3xl">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-a1">{index}</span>
      </Reveal>
      <h2 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
        <WordReveal text={title} inView />
      </h2>
      {intro && (
        <Reveal delay={0.15}>
          <p className="mt-5 text-lg leading-8 text-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
