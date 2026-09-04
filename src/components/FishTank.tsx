type FishTankProps = {
  variant: "dirty" | "clean";
};

/** Matched photographic teaching visual. It is an analogy, not an experiment. */
export function FishTank({ variant }: FishTankProps) {
  const clean = variant === "clean";
  return (
    <figure className="relative aspect-square overflow-hidden rounded-3xl border border-white/15 bg-navy-950 shadow-glass sm:aspect-[5/4] lg:aspect-[4/5]">
      <div role="img"
        aria-label={clean ? "A crystal-clear, brightly lit planted aquarium with active fish" : "A dim, cloudy, algae-heavy aquarium with subdued fish"}
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: "url(/aquarium-health-comparison.png)", backgroundSize: "200% 100%", backgroundPosition: clean ? "100% 50%" : "0% 50%" }} />
      <div aria-hidden className={`absolute inset-0 ${clean ? "bg-gradient-to-t from-navy-950/45 via-transparent to-white/5" : "bg-gradient-to-t from-navy-950/65 via-transparent to-black/20"}`} />
      <figcaption className="absolute left-4 top-4 right-4">
        <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] uppercase tracking-ultra backdrop-blur-md ${clean ? "border-aqua-200/50 bg-navy-950/50 text-aqua-100" : "border-yellow-300/40 bg-navy-950/60 text-yellow-100"}`}>
          {clean ? "Clean · Clear · Lively" : "Dirty · Cloudy · Stagnant"}
        </span>
      </figcaption>
    </figure>
  );
}
