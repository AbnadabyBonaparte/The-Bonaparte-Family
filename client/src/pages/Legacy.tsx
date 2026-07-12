import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { SectionHeader, fadeUp } from "@/components/editorial";
import { motion } from "framer-motion";

const principles = [
  "Verdade acima de aparência",
  "Presença antes de performance",
  "Educação como autonomia",
  "Fé como liberdade",
  "Trabalho com propósito",
  "Legado acima de ego",
];

export default function Legacy() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Herança viva"
          title="Legado"
          accent="o que fica quando partimos"
          subtitle="Não o que acumulamos, mas o comportamento diante do caos. A verdadeira herança da Casa Bonaparte."
        />

        <div className="editorial-container py-16 md:py-24">
          {/* Pull quote — framed as art, not a plain box */}
          <motion.section
            {...fadeUp}
            className="premium-card mx-auto max-w-3xl p-8 text-center md:p-14"
          >
            <p className="eyebrow justify-center">Para nossas filhas</p>
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
              “Que vocês nunca confundam conforto com destino. Nossa maior herança
              é a coragem de viver com verdade, mesmo quando custa caro.”
            </p>
            <div className="hairline mx-auto mt-8 w-24" />
          </motion.section>

          {/* Princípios */}
          <section className="mt-20">
            <SectionHeader eyebrow="Princípios da Casa" title="A bússola que não muda" />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {principles.map((principle, i) => (
                <motion.div
                  {...fadeUp}
                  key={principle}
                  className="premium-card flex items-center gap-4 p-5"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 font-serif text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground">{principle}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Linhagem */}
          <motion.section {...fadeUp} className="premium-card mt-20 p-8 md:p-12">
            <SectionHeader
              eyebrow="Linhagem e futuro"
              title="Do passado que nos trouxe ao futuro que construímos"
              intro="Honramos a história que nos trouxe até aqui e construímos uma linhagem de liberdade para quem virá depois."
            />
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
