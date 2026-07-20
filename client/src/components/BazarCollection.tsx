import { motion } from "framer-motion";
import {
  BAZAR_URL,
  BAZAR_AFFILIATE_NOTE,
  type BazarCollection as BazarCollectionData,
} from "@/data/bazar";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

interface BazarCollectionProps {
  collection: BazarCollectionData;
  /** Fundo da seção — casa com o ritmo papel/card da página. */
  surface?: "background" | "card";
}

/**
 * Vitrine de uma coleção temática do Bazar central.
 *
 * A vitrine só EXIBE e APONTA (Lei dos Tronos). Cada categoria é um card que abre no
 * Bazar central — SEM preço (Lei 2), SEM produto/foto inventada (Lei 5). Enquanto a
 * curadoria não foi semeada no Bazar (`seeding`), mostra um selo honesto "curadoria em
 * formação" e o link vai pra casa do Bazar. Zero hex — só tokens da Paleta Família.
 */
export default function BazarCollection({ collection, surface = "background" }: BazarCollectionProps) {
  const bg = surface === "card" ? "bg-card" : "bg-background";

  return (
    <motion.section {...fadeUp} className={`py-16 md:py-24 ${bg}`}>
      <div className="editorial-container">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {collection.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">{collection.title}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{collection.blurb}</p>

          {/* Estado honesto — curadoria ainda a semear no Bazar */}
          {collection.seeding && (
            <p
              className="mt-4 inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs"
              style={{
                background: "color-mix(in oklab, var(--color-areia) 26%, transparent)",
                color: "var(--color-couro)",
                border: "1px solid var(--color-border)",
              }}
            >
              <span aria-hidden="true">◈</span>
              Curadoria em formação — as coleções estão sendo semeadas no Bazar. Por ora, cada card abre a casa do Bazar.
            </p>
          )}

          {/* Categorias — tiles on-brand, sem preço, sem produto fake */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collection.categories.map((cat) => (
              <a
                key={cat.id}
                href={collection.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-lg border border-border bg-card p-5 transition hover:border-primary"
              >
                <h3 className="font-serif text-lg text-foreground">{cat.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{cat.note}</p>
                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--color-terracota)" }}
                >
                  Ver no Bazar
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>

          {/* CTA pro Bazar + disclosure de afiliado */}
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={collection.href || BAZAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
              style={{ background: "var(--color-terracota)", color: "var(--color-papel)" }}
            >
              Entrar no Bazar →
            </a>
            <p className="text-xs text-muted-foreground">{BAZAR_AFFILIATE_NOTE}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
