interface VideoEmbedProps {
  url?: string;
  title: string;
  className?: string;
}

export function VideoEmbed({
  url,
  title,
  className = "",
}: VideoEmbedProps) {
  if (url) {
    return (
      <div
        className={`aspect-video w-full overflow-hidden rounded-lg ${className}`}
      >
        <iframe
          src={url}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className={`flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 ${className}`}
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
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
          />
        </svg>
        <p className="mt-2 text-xs text-muted-foreground/40">{title}</p>
      </div>
    </div>
  );
}
