import { profile } from "../data";

const FADE = "linear-gradient(to bottom, #000 76%, transparent 100%)";

/* Transparent-background portrait standing on a gradient disc. The head rises above the disc,
   and the bottom edge dissolves so the cropped torso never shows a hard line. */
export default function Cutout({ className = "", eager = false }) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-x-[10%] bottom-[6%] -z-10 aspect-square rounded-full bg-a2/35 blur-3xl"
      />
      <div
        className="relative aspect-[9/10] w-full"
        style={{ WebkitMaskImage: FADE, maskImage: FADE }}
      >
        <div
          aria-hidden="true"
          className="bg-grad absolute inset-x-[6%] bottom-0 aspect-square rounded-full opacity-90"
        />
        <img
          src={profile.photo}
          alt="Oded Atias"
          width="810"
          height="900"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </div>
  );
}
