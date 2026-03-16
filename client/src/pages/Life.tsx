import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const sections = [
  {
    title: "Rotina",
    content: "Manhãs com estudo e movimento, tardes com produção criativa e gestão, noites de convívio, música e planejamento da próxima etapa.",
  },
  {
    title: "O Sítio",
    content: "Aragarças virou base por oferecer espaço, natureza e custo inteligente para construir autonomia em família.",
  },
  {
    title: "Música",
    content: "Aby atua profissionalmente há mais de 25 anos, com apresentações internacionais e produção autoral em andamento.",
  },
  {
    title: "Pets",
    content: "Mel, Amora e Apache participam da rotina como guardiões emocionais e companhia da jornada.",
  },
];

export default function Life() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">Vida Real</h1>
        <p className="mt-4 text-lg text-muted-foreground">Sítio, estrada, rotina e o caos bonito do dia a dia.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map(section => (
            <Card key={section.title} className="p-6">
              <h2 className="text-2xl">{section.title}</h2>
              <p className="mt-3 text-muted-foreground">{section.content}</p>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
