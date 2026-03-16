interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  aspectRatio?: "hero" | "landscape" | "square" | "portrait";
  className?: string;
}

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
        className={`w-full rounded-lg object-cover ${ratioClass} ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 ${ratioClass} ${className}`}
    >
      <div className="text-center">
        <svg
          className="mx-auto h-10 w-10 text-muted-foreground/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
          />
        </svg>
        <p className="mt-2 text-xs text-muted-foreground/40">{alt}</p>
      </div>
    </div>
  );
}
