import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Compass, HomeIcon, Users } from "lucide-react";
import { Link } from "wouter";

const mainCards = [
  { title: "Expedição", subtitle: "13 meses, 12 países, 1 motorhome", href: "/expedition", icon: Compass, alt: "Expedição Bonaparte" },
  { title: "Família", subtitle: "Conheça os Bonaparte", href: "/family", icon: Users, alt: "A família Bonaparte" },
  { title: "Educação", subtitle: "Worldschooling em ação", href: "/education", icon: BookOpen, alt: "Educação em movimento" },
  { title: "Vida", subtitle: "Vida real no sítio e na estrada", href: "/life", icon: HomeIcon, alt: "Vida no sítio" },
];

export default function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="editorial-container flex min-h-[78vh] flex-col justify-center py-20 section-reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Aragarças, Goiás • Brasil</p>
          <h1 className="hero-title mt-4 max-w-4xl">The Bonaparte Family</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Vida real. Estrada. Terra. Educação. Saúde. Fé. Negócios. Legado.
          </p>
          <div className="mt-10 w-full max-w-4xl">
            <ImagePlaceholder aspectRatio="hero" alt="Família Bonaparte" />
          </div>
          <p className="mt-14 animate-pulse text-sm text-muted-foreground">Role para explorar ↓</p>
        </section>

        <section className="editorial-container py-16 section-reveal">
          <h2 className="text-3xl md:text-4xl">Explore Nosso Mundo</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {mainCards.map(item => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <a>
                    <Card className="h-full overflow-hidden p-0 transition duration-300 hover:scale-[1.01] hover:border-primary">
                      <ImagePlaceholder aspectRatio="landscape" alt={item.alt} className="rounded-t-lg" />
                      <div className="p-7">
                        <Icon className="h-10 w-10 text-primary" />
                        <h3 className="mt-5 text-2xl">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </Card>
                  </a>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="editorial-container py-14 section-reveal">
          <h2 className="text-3xl">Sistemas & Legado</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["ALSHAM", "O motor econômico", "/alsham"],
              ["Obra", "Livros, música, criações", "/work"],
              ["Legado", "O que deixamos", "/legacy"],
            ].map(([title, text, href]) => (
              <Link key={href} href={href}>
                <a>
                  <Card className="p-5 hover:border-primary transition-colors">
                    <h3 className="text-xl">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </section>

        <section className="editorial-container py-20 text-center section-reveal">
          <p className="text-muted-foreground">Não sabe por onde começar? Comece aqui.</p>
          <Link href="/start-here">
            <a>
              <Button className="mt-5 min-h-11 px-8">
                Comece Aqui <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
