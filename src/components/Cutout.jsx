import { profile } from "../data";

const FADE = "linear-gradient(to bottom, #000 72%, transparent 100%)";

/* Transparent-background portrait. The bottom edge dissolves into the page so the cropped
   torso never shows a hard line; the soft shadow follows the silhouette, not a shape. */
export default function Cutout({ className = "", eager = false }) {
  return (
    <div
      className={`relative aspect-[918/1180] ${className}`}
      style={{ WebkitMaskImage: FADE, maskImage: FADE }}
    >
      <img
        src={profile.photo}
        alt="Oded Atias"
        width="918"
        height="1180"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="size-full object-cover [filter:drop-shadow(0_18px_36px_rgba(129,140,248,0.28))]"
      />
    </div>
  );
}
