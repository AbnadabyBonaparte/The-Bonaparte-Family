import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { FeatureCard } from "@/components/editorial";
import { Compass, BookOpen, Globe2, Sprout } from "lucide-react";

const sections = [
  {
    icon: <Sprout className="h-5 w-5" />,
    title: "Por que Homeschool",
    content:
      "Para preservar curiosidade, autonomia intelectual e participação ativa da família no processo formativo.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Como educamos",
    content:
      "Combinamos trilhas estruturadas, leitura, música, projetos práticos e mentorias direcionadas.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Worldschooling",
    content:
      "A expedição integra currículo vivo: geografia aplicada, idiomas, história e resolução de problemas reais.",
  },
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Resultados",
    content:
      "As meninas aprendem com contexto, propósito e repertório multicultural desde cedo.",
  },
];

export default function Education() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          atmosphere="verde"
          eyebrow="Formação Bonaparte"
          title="Educação"
          accent="o mundo é a sala de aula"
          subtitle="Worldschooling — cada país uma disciplina, cada cultura um professor. Aprender vivendo, não decorando."
        />

        <section className="editorial-container py-16 md:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title}>
                {s.content}
              </FeatureCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
