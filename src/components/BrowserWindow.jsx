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

  const status = loaded ? ui.livePreview : preview.kind === "chart" ? ui.illustrative : ui.screenshot;

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
        {preview.kind === "chart" ? (
          <ChartSketch hue={preview.hue} />
        ) : (
          <img
            src={preview.poster}
            alt={`${project.title} preview`}
            loading="lazy"
            className="absolute inset-0 size-full object-cover object-top"
          />
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

/* Decorative only: no real data. Labeled as illustrative in the status chip. */
function ChartSketch({ hue }) {
  const line =
    "M0,170 C40,160 60,120 100,130 C140,140 150,90 190,95 C230,100 240,60 280,70 C320,80 330,40 370,45 C410,50 420,20 460,25";
  return (
    <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(251,191,36,0.14),transparent_60%)]">
      <svg viewBox="0 0 460 200" className="w-[88%]" fill="none" aria-hidden="true">
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" x2="460" y1={y} y2={y} stroke="white" strokeOpacity="0.07" />
        ))}
        {Array.from({ length: 23 }).map((_, i) => {
          const x = 10 + i * 20;
          const h = 14 + ((i * 37) % 38);
          const base = 150 - i * 5 - ((i * 13) % 20);
          return <rect key={i} x={x} y={base - h} width="8" height={h} rx="2" fill={hue} fillOpacity="0.16" />;
        })}
        <motion.path
          d={line}
          stroke={hue}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.6 }}
        />
      </svg>
    </div>
  );
}
