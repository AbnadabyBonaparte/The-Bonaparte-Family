import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import {
  ALFREDO_STATUS,
  ALFREDO_FICHA,
  ALFREDO_INTRO,
  ALFREDO_PHASES,
  ALFREDO_GEAR,
  BAZAR_URL,
  type AlfredoPhoto,
} from "@/data/alfredo";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function Divider() {
  return (
    <div
      style={{
        height: "1px",
        background: "linear-gradient(to right, transparent, var(--color-gold), transparent)",
        opacity: 0.35,
      }}
    />
  );
}

/**
 * Slot de imagem do Alfredo.
 *  • Foto real (src) → mostra a foto; se faltar/404, cai no placeholder honesto ("foto pendente").
 *  • Projeção (vision) → moldura tracejada em ouro + selo "PROJEÇÃO", visualmente distinta da
 *    foto real (Lei da Imagem: render jamais se disfarça de foto do ônibus de verdade).
 */
function PhotoTile({ photo, vision }: { photo: AlfredoPhoto; vision?: boolean }) {
  const [failed, setFailed] = useState(!photo.src);

  return (
    <figure className="group m-0">
      <div
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg"
        style={
          vision
            ? { border: "2px dashed var(--color-gold)", background: "color-mix(in oklab, var(--color-gold) 8%, var(--color-verde))" }
            : { border: "1px solid var(--color-border)", background: "var(--color-verde)" }
        }
      >
        {!failed && photo.src ? (
          <img
            src={photo.src}
            alt={photo.caption}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          // Placeholder HONESTO — nunca stock. Marca ⊕ + "foto pendente".
          <div className="flex flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="text-3xl" aria-hidden="true" style={{ color: "color-mix(in oklab, var(--color-gold) 55%, transparent)" }}>⊕</span>
            <span
              className="text-[0.62rem] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "color-mix(in oklab, var(--color-papel) 60%, transparent)" }}
            >
              {vision ? "Projeção pendente" : "Foto pendente"}
            </span>
          </div>
        )}

        {/* Selo de PROJEÇÃO — canto superior, sempre visível na galeria do sonho */}
        {vision && (
          <span
            className="absolute left-2 top-2 rounded-full px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em]"
            style={{ background: "var(--color-gold)", color: "var(--color-tinta)" }}
          >
            Projeção
          </span>
        )}
      </div>
      <figcaption
        className="mt-2 text-xs leading-relaxed"
        style={vision ? { color: "var(--color-gold)" } : undefined}
      >
        <span className={vision ? "" : "text-muted-foreground"}>{photo.caption}</span>
      </figcaption>
    </figure>
  );
}

export default function Alfredo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <PageHero
        eyebrow="Família · A casa que anda"
        title="Alfredo"
        accent="a fortaleza sobre rodas"
        subtitle="Um Mercedes-Benz O364 de 1995 virando lar de expedição. Em reforma, parado na oficina — obra em andamento, com pó, ferro e fé."
        image="/alfredo/hero.jpg"
      >
        <div className="flex flex-col items-center gap-5">
          {/* Status honesto — cravado */}
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.2em]"
            style={{
              background: "color-mix(in oklab, var(--color-sunset-orange) 22%, transparent)",
              color: "var(--color-cream)",
              border: "1px solid color-mix(in oklab, var(--color-sunset-orange) 50%, transparent)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-sunset-orange)" }} />
            {ALFREDO_STATUS}
          </span>

          {/* Ficha — só fatos */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {ALFREDO_FICHA.map(item => (
              <span key={item.label} className="text-[0.72rem]" style={{ color: "color-mix(in oklab, var(--color-cream) 62%, transparent)" }}>
                <span className="uppercase tracking-[0.14em]" style={{ color: "color-mix(in oklab, var(--color-cream) 42%, transparent)" }}>{item.label}:</span>{" "}
                {item.value}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <main>
        {/* ══ A HISTÓRIA ════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="py-16 md:py-24 bg-background">
          <div className="editorial-container">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">A história</p>
              <div className="space-y-6">
                {ALFREDO_INTRO.map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "font-serif text-xl leading-relaxed text-foreground md:text-2xl"
                        : "text-base leading-relaxed text-muted-foreground md:text-lg"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ AS FASES DA REFORMA ═══════════════════════════════ */}
        {ALFREDO_PHASES.map((phase, idx) => (
          <div key={phase.id}>
            <motion.section
              {...fadeUp}
              className={`py-14 md:py-20 ${idx % 2 === 1 ? "bg-card" : "bg-background"}`}
            >
              <div className="editorial-container">
                <div className="mx-auto max-w-5xl">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">
                    {phase.vision ? "O sonho · projeção" : `Fase ${String(idx + 1).padStart(2, "0")}`}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl">{phase.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {phase.blurb}
                  </p>

                  {/* Aviso Lei da Imagem — só na galeria de projeção */}
                  {phase.vision && (
                    <p
                      className="mt-4 inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs"
                      style={{
                        background: "color-mix(in oklab, var(--color-gold) 12%, transparent)",
                        color: "var(--color-couro)",
                        border: "1px dashed color-mix(in oklab, var(--color-gold) 60%, transparent)",
                      }}
                    >
                      <span aria-hidden="true">⊕</span>
                      Imagens de projeção — não são fotos do ônibus de verdade.
                    </p>
                  )}

                  <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {phase.photos.map(photo => (
                      <PhotoTile key={photo.id} photo={photo} vision={phase.vision} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
            <Divider />
          </div>
        ))}

        {/* ══ O QUE VAI DENTRO DO ALFREDO — REGRA DO BAZAR ══════ */}
        <motion.section {...fadeUp} className="py-16 md:py-24 bg-background">
          <div className="editorial-container">
            <div className="mx-auto max-w-5xl">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">O que vai dentro</p>
              <h2 className="font-serif text-3xl md:text-4xl">Equipando o Alfredo</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                A curadoria dos objetos que fazem um ônibus virar casa vive no <strong className="text-foreground">Bazar</strong>.
                Aqui a gente só mostra as categorias — o preço e a compra ficam lá, sempre.
              </p>

              {/* Nota honesta: a curadoria ainda precisa ser semeada no Bazar. */}
              <p
                className="mt-4 inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs"
                style={{
                  background: "color-mix(in oklab, var(--color-areia) 26%, transparent)",
                  color: "var(--color-couro)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span aria-hidden="true">◈</span>
                Curadoria em formação — os produtos de motorhome ainda estão sendo semeados no Bazar. Por ora, cada card leva à casa do Bazar.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {ALFREDO_GEAR.map(gear => (
                  <a
                    key={gear.id}
                    href={gear.bazarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-lg border border-border bg-card p-5 transition hover:border-primary"
                  >
                    <h3 className="font-serif text-lg text-foreground">{gear.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{gear.note}</p>
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

              <div className="mt-8">
                <a
                  href={BAZAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
                  style={{ background: "var(--color-terracota)", color: "var(--color-papel)" }}
                >
                  Entrar no Bazar →
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ CTA HONESTO — acompanhe a reforma ═════════════════ */}
        <motion.section {...fadeUp} className="py-20" style={{ background: "var(--color-verde)" }}>
          <div className="editorial-container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: "var(--color-gold)" }}>A jornada continua</p>
              <h2 className="font-serif text-3xl md:text-4xl" style={{ color: "var(--color-papel)" }}>
                Acompanhe a reforma do Alfredo
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed" style={{ color: "color-mix(in oklab, var(--color-papel) 72%, transparent)" }}>
                Alfredo é obra em andamento. Não está à venda — está sendo construído.
                A gente conta cada passo: o que avançou, o que travou, o que vem.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/journal">
                  <a
                    className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
                    style={{ background: "var(--color-gold)", color: "var(--color-tinta)" }}
                  >
                    Acompanhe no Journal →
                  </a>
                </Link>
                <Link href="/expedition">
                  <a
                    className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
                    style={{ borderColor: "color-mix(in oklab, var(--color-papel) 30%, transparent)", color: "var(--color-papel)" }}
                  >
                    A expedição que o destrava
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
