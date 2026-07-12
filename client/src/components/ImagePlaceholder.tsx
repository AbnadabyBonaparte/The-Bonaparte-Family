interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  aspectRatio?: "hero" | "landscape" | "square" | "portrait";
  className?: string;
}

/**
 * When a real photo exists it renders framed and warm. Until then it degrades
 * to a composed gallery panel — a soft brand mesh with an engraved Bonaparte
 * monogram — never a dashed box with a loose grey icon.
 */
export function ImagePlaceholder({
  src,
  alt,
  aspectRatio = "landscape",
  className = "",
}: ImagePlaceholderProps) {
  const ratioClass = {
    hero: "aspect-[21/9]",
    landscape: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  }[aspectRatio];

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full rounded-2xl object-cover ${ratioClass} ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border ${ratioClass} ${className}`}
      role="img"
      aria-label={alt}
      style={{
        background:
          "radial-gradient(120% 90% at 20% 15%, color-mix(in oklab, var(--color-forest-mid) 22%, var(--card)), var(--card) 62%)," +
          "radial-gradient(90% 80% at 85% 90%, color-mix(in oklab, var(--color-sunset-orange) 14%, transparent), transparent 60%)",
      }}
    >
      {/* corner frame accents */}
      <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t"
        style={{ borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)" }} />
      <span className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t"
        style={{ borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)" }} />
      <span className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l"
        style={{ borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)" }} />
      <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r"
        style={{ borderColor: "color-mix(in oklab, var(--primary) 45%, transparent)" }} />

      <div className="flex flex-col items-center gap-3 px-6 text-center">
        {/* engraved monogram mark */}
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full border font-serif text-2xl"
          style={{
            borderColor: "color-mix(in oklab, var(--primary) 40%, transparent)",
            color: "color-mix(in oklab, var(--primary) 85%, var(--foreground))",
            background: "color-mix(in oklab, var(--primary) 10%, transparent)",
          }}
        >
          B
        </span>
        <span
          className="text-[0.68rem] font-semibold uppercase tracking-[0.24em]"
          style={{ color: "color-mix(in oklab, var(--muted-foreground) 90%, transparent)" }}
        >
          {alt}
        </span>
      </div>
    </div>
  );
}
