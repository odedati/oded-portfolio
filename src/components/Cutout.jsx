import { profile } from "../data";

const FADE = "linear-gradient(to bottom, #000 74%, transparent 100%)";

/* Transparent-background portrait over a soft coloured aura. The aura is made of radial
   gradients that fade to nothing, so it has no outline. The image itself carries no filter,
   which keeps its edge crisp; only the bottom edge is masked so the cropped torso dissolves. */
export default function Cutout({ className = "", eager = false }) {
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -inset-x-[55%] -inset-y-[22%] -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(closest-side at 38% 58%, rgb(94 234 212 / 0.34), transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(closest-side at 66% 40%, rgb(129 140 248 / 0.38), transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(closest-side at 52% 80%, rgb(240 171 252 / 0.2), transparent 100%)",
          }}
        />
      </div>

      <div
        className="relative aspect-[910/1180] w-full"
        style={{ WebkitMaskImage: FADE, maskImage: FADE }}
      >
        <img
          src={profile.photo}
          alt="Oded Atias"
          width="600"
          height="778"
          decoding="async"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
