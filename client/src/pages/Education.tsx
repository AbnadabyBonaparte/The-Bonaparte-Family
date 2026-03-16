import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Card } from "@/components/ui/card";

const sections = [
  ["Por que Homeschool", "Para preservar curiosidade, autonomia intelectual e participação ativa da família no processo formativo."],
  ["Como educamos", "Combinamos trilhas estruturadas, leitura, música, projetos práticos e mentorias direcionadas."],
  ["Worldschooling", "A expedição integra currículo vivo: geografia aplicada, idiomas, história e resolução de problemas reais."],
  ["Resultados", "As meninas aprendem com contexto, propósito e repertório multicultural desde cedo."],
];

export default function Education() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">Educação</h1>
        <p className="mt-4 text-lg text-muted-foreground">Worldschooling — o mundo é a sala de aula.</p>
        <div className="mt-8 w-full">
          <ImagePlaceholder aspectRatio="hero" alt="Worldschooling Bonaparte" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map(([title, content]) => (
            <Card key={title} className="p-6">
              <h2 className="text-2xl">{title}</h2>
              <p className="mt-3 text-muted-foreground">{content}</p>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
