import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import {
  BAZAR_HUB_URL,
  FAMILY_CATEGORIES,
  FAMILY_PRODUCTS,
} from "@/data/familyProducts";
import {
  FEATURED_BOOKS,
  LIVROS_HUB_URL,
  PIX_KEY,
} from "@/data/familyBooks";

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? FAMILY_PRODUCTS
      : FAMILY_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Bazar & Livros"
          title="O que a família"
          accent="carrega e escreve"
          subtitle="Equipamentos testados na estrada e livros que formam a base — curadoria da família Bonaparte."
        />

        {/* ══ BAZAR ═══════════════════════════════════════════════ */}
        <section className="editorial-container py-16 md:py-24">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Expedição Bonaparte
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            O que a família carrega
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Curadoria de equipamentos, materiais e essenciais para uma família
            que vive em movimento — testados na estrada.
          </p>

          {/* Filtros */}
          <div className="mt-10 flex flex-wrap gap-2">
            {FAMILY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "rounded-full border px-4 py-1.5 text-sm font-sans transition",
                  activeCategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de produtos */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <a
                key={product.id}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-card group relative flex flex-col"
              >
                {/* Imagem */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover transition group-hover:scale-105"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      {product.badge}
                    </span>
                  )}
                  {product.placeholder && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition group-hover:opacity-100">
                      <span className="text-center text-sm font-semibold text-primary">
                        Em breve · Ver no Bazar →
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-4">
                  <span className="mb-2 text-xs uppercase tracking-wider text-primary/70">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-base leading-snug text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 text-xs text-muted-foreground leading-relaxed">
                    {product.desc}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {product.price}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={BAZAR_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition hover:opacity-90"
            >
              Ver catálogo completo → Bazar Bonaparte
            </a>
            <p className="text-xs text-muted-foreground">
              Links de afiliado — mesmo preço · apoia a família
            </p>
          </div>
        </section>

        {/* ══ LIVROS ══════════════════════════════════════════════ */}
        <section className="bg-card py-16 md:py-24">
          <div className="editorial-container">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Livraria Bonaparte
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Livros que formam a base
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Escritos por Abnadaby Bonaparte. Lidos pela família. Disponíveis para o mundo.
            </p>

            {/* Grid de livros 2×2 */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_BOOKS.map((book) => {
                const isPix = book.id === "fruto-proibido";
                return (
                  <div
                    key={book.id}
                    className="premium-card group flex flex-col bg-background"
                  >
                    {/* Capa */}
                    <div className="overflow-hidden bg-secondary">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full object-cover transition hover:scale-105"
                        style={{ aspectRatio: "2/3" }}
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            `https://placehold.co/400x600/2D3B1A/C8D96E?text=${encodeURIComponent(book.title)}`;
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col p-5">
                      <span className="mb-2 text-xs uppercase tracking-wider text-primary/70">
                        {book.category}
                      </span>
                      <h3 className="font-serif text-lg leading-snug text-foreground">
                        {book.title}
                      </h3>
                      <p className="mt-2 flex-1 text-xs text-muted-foreground leading-relaxed italic">
                        {book.subtitle}
                      </p>

                      {isPix ? (
                        <div className="mt-4 space-y-2">
                          <p className="text-xs text-muted-foreground">
                            PIX: <span className="font-mono text-foreground">{PIX_KEY}</span>
                          </p>
                          <a
                            href={`https://nubank.com.br/cobrar/pix/?valor=0&chave=${PIX_KEY}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full rounded-sm border border-primary px-4 py-2.5 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                          >
                            Apoiar via PIX
                          </a>
                        </div>
                      ) : (
                        <a
                          href={book.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 block w-full rounded-sm bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground transition hover:opacity-90"
                        >
                          Ler na Amazon →
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href={LIVROS_HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition hover:opacity-90"
              >
                Ver catálogo completo → 19 obras
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
