import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeader, fadeUp } from "@/components/editorial";
import { books } from "@/data/work";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="A obra"
          title="Obra"
          accent="música, livros, narrativa"
          subtitle="25 anos de palco, livros que formam a base e um documentário em construção — a arte que sustenta a travessia."
        />

        <div className="editorial-container py-16 md:py-24">
          {/* Livros */}
          <SectionHeader eyebrow="Livraria Bonaparte" title="Livros" />
          <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <motion.div
                {...fadeUp}
                key={book.title}
                className="premium-card group flex flex-col"
              >
                <ImagePlaceholder
                  aspectRatio="portrait"
                  alt={`Capa — ${book.title}`}
                  className="rounded-none"
                />
                <div className="p-5">
                  <h3 className="font-serif text-lg leading-snug text-foreground">
                    {book.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{book.theme}</p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Música + Documentário */}
          <section className="mt-20 grid gap-6 md:grid-cols-2">
            <motion.div {...fadeUp} className="premium-card group flex flex-col">
              <ImagePlaceholder aspectRatio="landscape" alt="Show ao vivo" className="rounded-none" />
              <div className="p-6 md:p-7">
                <h2 className="font-serif text-2xl text-foreground">Música</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Aby Bonaparte: 25+ anos de carreira, com shows em Portugal, Alemanha,
                  Bélgica e Uruguai.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="premium-card group flex flex-col">
              <ImagePlaceholder
                aspectRatio="landscape"
                alt="Documentário da expedição"
                className="rounded-none"
              />
              <div className="p-6 md:p-7">
                <h2 className="font-serif text-2xl text-foreground">Documentário</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Projeto em planejamento para registrar a expedição como narrativa de
                  família, território e legado.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
