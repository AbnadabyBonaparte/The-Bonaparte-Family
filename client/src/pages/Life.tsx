import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Card } from "@/components/ui/card";

const sections = [
  {
    title: "Rotina",
    content: "Manhãs com estudo e movimento, tardes com produção criativa e gestão, noites de convívio, música e planejamento da próxima etapa.",
    alt: "Rotina da família",
  },
  {
    title: "O Sítio",
    content: "O sítio virou base por oferecer espaço, natureza e custo inteligente para construir autonomia em família.",
    alt: "O sítio da família Bonaparte",
  },
  {
    title: "Música",
    content: "Aby atua profissionalmente há mais de 25 anos, com apresentações internacionais e produção autoral em andamento.",
    alt: "Aby Bonaparte no palco",
  },
  {
    title: "Pets",
    content: "Mel, Amora e Apache participam da rotina como guardiões emocionais e companhia da jornada.",
    alt: "Nossos animais",
  },
];

export default function Life() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">Vida Real</h1>
        <p className="mt-4 text-lg text-muted-foreground">Sítio, estrada, rotina e o caos bonito do dia a dia.</p>
        <div className="mt-8 w-full">
          <ImagePlaceholder aspectRatio="hero" alt="Vida no sítio" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map(section => (
            <Card key={section.title} className="overflow-hidden p-0">
              <ImagePlaceholder aspectRatio="landscape" alt={section.alt} />
              <div className="p-6">
                <h2 className="text-2xl">{section.title}</h2>
                <p className="mt-3 text-muted-foreground">{section.content}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
