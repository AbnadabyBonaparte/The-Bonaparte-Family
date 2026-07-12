import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { fadeUp } from "@/components/editorial";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Rotina",
    content:
      "Manhãs com estudo e movimento, tardes com produção criativa e gestão, noites de convívio, música e planejamento da próxima etapa.",
    alt: "Rotina da família",
  },
  {
    title: "O Sítio",
    content:
      "O sítio virou base por oferecer espaço, natureza e custo inteligente para construir autonomia em família.",
    alt: "O sítio da família Bonaparte",
  },
  {
    title: "Música",
    content:
      "Aby atua profissionalmente há mais de 25 anos, com apresentações internacionais e produção autoral em andamento.",
    alt: "Aby Bonaparte no palco",
  },
  {
    title: "Pets",
    content:
      "Mel, Amora e Apache participam da rotina como guardiões emocionais e companhia da jornada.",
    alt: "Nossos animais",
  },
];

export default function Life() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Vida Real"
          title="Sítio, estrada"
          accent="e o caos bonito"
          subtitle="A vida acontecendo sem filtro — rotina, natureza, música e o dia a dia de uma família que escolheu presença."
        />

        <section className="editorial-container py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((s) => (
              <motion.article
                {...fadeUp}
                key={s.title}
                className="premium-card group flex flex-col"
              >
                <ImagePlaceholder aspectRatio="landscape" alt={s.alt} className="rounded-none" />
                <div className="p-6 md:p-7">
                  <h2 className="font-serif text-2xl text-foreground">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.content}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
