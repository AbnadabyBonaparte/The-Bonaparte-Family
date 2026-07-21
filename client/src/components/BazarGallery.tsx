import { useState } from "react";
import { motion } from "framer-motion";
import { BAZAR_URL, BAZAR_AFFILIATE_NOTE } from "@/data/bazar";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export interface GalleryItem {
  id: string;
  label: string;
  /** o porquê do produto — revelado no clique (padrão da Expedição) */
  note: string;
  /** link pro Bazar central */
  href: string;
}

interface BazarGalleryProps {
  eyebrow: string;
  title: string;
  blurb?: string;
  items: GalleryItem[];
  /** "verde" = seção invertida prominente · "papel" = seção clara com cards fortes */
  tone?: "verde" | "papel";
  /** nota honesta (curadoria em formação) */
  seedingNote?: string;
  hubLabel?: string;
}

/**
 * Galeria do Bazar — prominente e desejável ("na cara do cliente"). Lei do Bazar:
 * só EXIBE e APONTA (sem preço à mão). Cada card → clique abre a EXPLICAÇÃO do porquê
 * (padrão da Expedição) e revela o "Ver no Bazar". Zero hex — tokens da Paleta Família.
 */
function GalleryCard({ item, tone }: { item: GalleryItem; tone: "verde" | "papel" }) {
  const [open, setOpen] = useState(false);
  const onVerde = tone === "verde";

  return (
    <div
      className="flex flex-col rounded-xl p-6 transition"
      style={
        onVerde
          ? { background: "color-mix(in oklab, var(--color-papel) 8%, transparent)", border: "1px solid color-mix(in oklab, var(--color-gold) 28%, transparent)" }
          : { background: "var(--color-card)", border: "1px solid var(--color-border)" }
      }
    >
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 text-left"
      >
        <h3 className="font-serif text-xl" style={{ color: onVerde ? "var(--color-papel)" : "var(--color-foreground)" }}>
          {item.label}
        </h3>
        <span
          className="mt-1 shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.14em]"
          style={{ color: "var(--color-gold)" }}
        >
          {open ? "Fechar" : "Por quê?"}
        </span>
      </button>

      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-3 overflow-hidden text-sm leading-relaxed"
          style={{ color: onVerde ? "color-mix(in oklab, var(--color-papel) 70%, transparent)" : "var(--color-muted-foreground)" }}
        >
          {item.note}
        </motion.p>
      )}

      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em]"
        style={{ color: onVerde ? "var(--color-gold)" : "var(--color-terracota)" }}
      >
        Ver no Bazar
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default function BazarGallery({
  eyebrow,
  title,
  blurb,
  items,
  tone = "verde",
  seedingNote,
  hubLabel = "Entrar no Bazar Bonaparte",
}: BazarGalleryProps) {
  const onVerde = tone === "verde";
  const sectionStyle = onVerde ? { background: "var(--color-verde)" } : undefined;
  const inkStrong = onVerde ? "var(--color-papel)" : "var(--color-foreground)";
  const inkSoft = onVerde ? "color-mix(in oklab, var(--color-papel) 72%, transparent)" : "var(--color-muted-foreground)";

  return (
    <motion.section {...fadeUp} className={`py-16 md:py-24 ${onVerde ? "" : "bg-background"}`} style={sectionStyle}>
      <div className="editorial-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--color-gold)" }}>
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ color: inkStrong }}>{title}</h2>
          {blurb && (
            <p className="mx-auto mt-4 max-w-xl leading-relaxed" style={{ color: inkSoft }}>{blurb}</p>
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(item => (
            <GalleryCard key={item.id} item={item} tone={tone} />
          ))}
        </div>

        {seedingNote && (
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs" style={{ color: inkSoft }}>
            {seedingNote}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <a
            href={BAZAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em]"
            style={{ background: "var(--color-gold)", color: "var(--color-tinta)" }}
          >
            {hubLabel} →
          </a>
          <p className="text-xs" style={{ color: inkSoft }}>{BAZAR_AFFILIATE_NOTE}</p>
        </div>
      </div>
    </motion.section>
  );
}
