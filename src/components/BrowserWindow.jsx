import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FRAME_W = 1280;

function displayUrl(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/* Browser chrome around either a live iframe, a screenshot, or a sketch. */
export default function BrowserWindow({
  project,
  preview,
  load = false,
  interactive = false,
  ui,
  className = "",
}) {
  const bodyRef = useRef(null);
  const [scale, setScale] = useState(0.5);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const canEmbed = Boolean(preview.embed && project.live);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return undefined;
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME_W));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (load && canEmbed && !mounted) setMounted(true);

  const status = loaded ? ui.livePreview : preview.kind === "sketch" ? ui.illustrative : ui.screenshot;

  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="size-2.5 rounded-full bg-[#ff5f57]" />
          <i className="size-2.5 rounded-full bg-[#febc2e]" />
          <i className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span
          dir="ltr"
          className="min-w-0 flex-1 truncate rounded-md bg-black/30 px-3 py-1 text-center font-mono text-[11px] text-muted"
        >
          {project.live ? displayUrl(project.live) : "github.com/odedati/AlgoTrage_final_project"}
        </span>
        <span className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted sm:flex">
          <span className={`size-1.5 rounded-full ${loaded ? "bg-a1" : "bg-muted/60"}`} />
          {status}
        </span>
      </div>

      {/* Always LTR: the iframe is scaled from its top-left corner, which breaks when the page is RTL. */}
      <div ref={bodyRef} dir="ltr" className="relative min-h-0 flex-1 overflow-hidden bg-black">
        {preview.kind === "sketch" ? (
          <ChatSketch hue={preview.hue} />
        ) : (
          <picture className="contents">
            {preview.posterSm && <source media="(max-width: 1023px)" srcSet={preview.posterSm} />}
          <img
            src={preview.poster}
            alt={`${project.title} preview`}
            loading="lazy"
            className="absolute inset-0 size-full object-cover object-top"
          />
          </picture>
        )}

        {mounted && (
          <iframe
            title={`${project.title} live preview`}
            src={project.live}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            tabIndex={interactive ? 0 : -1}
            style={{
              width: FRAME_W,
              height: FRAME_W * (0.625 + 0.1),
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              pointerEvents: interactive ? "auto" : "none",
              opacity: loaded ? 1 : 0,
            }}
            className="absolute left-0 top-0 border-0 bg-white transition-opacity duration-700"
          />
        )}

        {mounted && !loaded && (
          <div className="pointer-events-none absolute inset-0 grid place-items-end p-4">
            <span className="shimmer rounded-full border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-[11px] text-fg">
              {ui.loadingLive}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* Decorative only: no real content. Labeled as illustrative in the status chip. */
function ChatSketch({ hue }) {
  const bubbles = [
    { mine: true, w: "46%", lines: 1 },
    { mine: false, w: "68%", lines: 3 },
    { mine: true, w: "38%", lines: 1 },
    { mine: false, w: "62%", lines: 2 },
  ];
  return (
    <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(251,191,36,0.14),transparent_60%)] p-[5%]">
      <div className="grid size-full grid-cols-[0.8fr_1.2fr] gap-[3%]" aria-hidden="true">
        <div className="space-y-[7%] rounded-xl border border-white/10 bg-white/[0.03] p-[8%]">
          <div className="h-[9%] w-1/2 rounded-full" style={{ background: hue, opacity: 0.35 }} />
          {[90, 70, 80, 55, 75].map((w, i) => (
            <div key={i} className="h-[5%] rounded-full bg-white/10" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-[4%]">
          <div className="flex flex-1 flex-col justify-center gap-[5%]">
            {bubbles.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.35 }}
                className={`space-y-[4%] rounded-xl px-[4%] py-[3%] ${b.mine ? "ms-auto" : ""}`}
                style={{
                  width: b.w,
                  background: b.mine ? `${hue}33` : "rgba(255,255,255,0.07)",
                }}
              >
                {Array.from({ length: b.lines }).map((_, k) => (
                  <div
                    key={k}
                    className="h-1.5 rounded-full bg-white/25"
                    style={{ width: k === b.lines - 1 && b.lines > 1 ? "60%" : "100%" }}
                  />
                ))}
              </motion.div>
            ))}
          </div>
          <div className="mt-[3%] h-[9%] rounded-full border border-white/10 bg-black/30" />
        </div>
      </div>
    </div>
  );
}
