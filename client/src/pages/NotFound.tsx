import { Link } from "wouter";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="film-grain relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 text-center"
      style={{ background: "var(--color-obsidian)" }}
    >
      {/* mesh */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(58% 55% at 18% 20%, color-mix(in oklab, var(--color-forest-mid) 38%, transparent), transparent 70%)," +
            "radial-gradient(52% 50% at 84% 82%, color-mix(in oklab, var(--color-sunset-orange) 26%, transparent), transparent 72%)",
        }}
      />
      {/* glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[36vh] w-[70vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] motion-safe:animate-pulse"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-forest-mid) 45%, transparent), transparent 78%)",
          animationDuration: "7s",
        }}
      />

      <div className="relative z-[4] mx-auto max-w-lg">
        <span
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border"
          style={{
            borderColor: "color-mix(in oklab, var(--color-cream) 24%, transparent)",
            background: "color-mix(in oklab, var(--color-cream) 8%, transparent)",
            color: "var(--color-sunset-orange)",
          }}
        >
          <Compass className="h-7 w-7" />
        </span>

        <h1
          className="mt-8 font-serif font-light leading-none"
          style={{ fontSize: "clamp(3.5rem, 12vw, 6rem)", color: "var(--color-cream)" }}
        >
          404
        </h1>
        <p
          className="mt-2 font-serif text-xl italic"
          style={{ color: "color-mix(in oklab, var(--color-cream) 70%, transparent)" }}
        >
          Esta trilha não existe no mapa
        </p>
        <p
          className="mx-auto mt-4 max-w-sm font-sans leading-relaxed"
          style={{ color: "color-mix(in oklab, var(--color-cream) 55%, transparent)" }}
        >
          A página que você procurava saiu de rota. Vamos te levar de volta ao início.
        </p>

        <Link href="/">
          <a className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-accent-foreground shadow-lg transition hover:scale-[1.03]">
            Voltar ao início
          </a>
        </Link>
      </div>
    </div>
  );
}
