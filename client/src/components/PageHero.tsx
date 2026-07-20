import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

interface PageHeroProps {
  /** Small uppercase label above the title */
  eyebrow?: string;
  title: string;
  /** Optional second line rendered italic in a brand gradient */
  accent?: string;
  subtitle?: string;
  /** Optional focal art (path string — 404s degrade to the CSS composition) */
  image?: string;
  /**
   * Atmosfera gerada (Lei da Imagem: só ambiente/paisagem, nunca pessoa/objeto real)
   * usada quando `image` não é passada. Default "cerrado". Skin da Família.
   */
  atmosphere?: "cerrado" | "verde";
  /** Extra content under the subtitle (stats, CTAs, countdown…) */
  children?: ReactNode;
  /** Show a "back to home" link */
  back?: boolean;
  className?: string;
}

/**
 * Gallery-grade chapter header shared by every sub-page.
 * Layered obsidian composition (mesh → focal image → vignette → grain → glow)
 * so each page reads like a chapter of the same book as the Home hero.
 */
export default function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  image,
  atmosphere = "cerrado",
  children,
  back = true,
  className = "",
}: PageHeroProps) {
  // Atmosfera on-brand por padrão (degrada em silêncio se o arquivo faltar).
  const resolvedImage =
    image ??
    (atmosphere === "verde"
      ? "/brand/atmosphere-verde.webp"
      : "/brand/atmosphere-cerrado.webp");
  return (
    <motion.section
      {...fadeUp}
      className={`film-grain relative flex min-h-[54vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:min-h-[60vh] ${className}`}
      style={{ background: "var(--color-obsidian)" }}
    >
      {/* camada 0 — atmosfera focal (degrada em silêncio) */}
      {resolvedImage && (
        <img
          src={resolvedImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-[0.34]"
          style={{
            WebkitMaskImage:
              "radial-gradient(120% 100% at 50% 30%, black 40%, transparent 100%)",
            maskImage:
              "radial-gradient(120% 100% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
      )}

      {/* camada 1 — mesh / aurora */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(58% 55% at 16% 18%, color-mix(in oklab, var(--color-forest-mid) 40%, transparent), transparent 70%)," +
            "radial-gradient(52% 50% at 86% 82%, color-mix(in oklab, var(--color-sunset-orange) 28%, transparent), transparent 72%)," +
            "radial-gradient(70% 60% at 55% 6%, color-mix(in oklab, var(--color-forest-dark) 55%, transparent), transparent 75%)",
        }}
      />

      {/* camada 2 — vinheta */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(115% 90% at 50% 42%, transparent 52%, color-mix(in oklab, var(--color-obsidian) 92%, transparent) 100%)",
        }}
      />

      {/* camada 4 — glow sob o título */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-[3] h-[34vh] w-[70vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] motion-safe:animate-pulse motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-forest-mid) 48%, transparent), transparent 78%)",
          animationDuration: "7s",
        }}
      />

      {/* camada 5 — conteúdo */}
      <div className="relative z-[4] mx-auto max-w-3xl">
        {eyebrow && (
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.28em] backdrop-blur-md"
            style={{
              borderColor: "color-mix(in oklab, var(--color-cream) 22%, transparent)",
              background: "color-mix(in oklab, var(--color-cream) 8%, transparent)",
              color: "color-mix(in oklab, var(--color-cream) 80%, transparent)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--color-sunset-orange)" }}
            />
            {eyebrow}
          </span>
        )}

        <h1
          className="mt-7 font-serif font-light leading-[0.98] tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
            color: "var(--color-cream)",
          }}
        >
          {title}
          {accent && (
            <span
              className="mt-1 block italic"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, var(--color-forest-mid) 0%, color-mix(in oklab, var(--color-sunset-orange) 85%, var(--color-cream)) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {accent}
            </span>
          )}
        </h1>

        {subtitle && (
          <p
            className="mx-auto mt-6 max-w-xl font-sans text-base font-light leading-relaxed md:text-lg"
            style={{ color: "color-mix(in oklab, var(--color-cream) 66%, transparent)" }}
          >
            {subtitle}
          </p>
        )}

        {children && <div className="mt-9">{children}</div>}

        {back && (
          <div className="mt-9">
            <Link href="/">
              <a
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
                style={{ color: "color-mix(in oklab, var(--color-cream) 55%, transparent)" }}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Voltar ao início
              </a>
            </Link>
          </div>
        )}
      </div>

      {/* fade para emendar na próxima seção (tema-aware) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-obsidian) 40%, transparent))",
        }}
      />
    </motion.section>
  );
}
