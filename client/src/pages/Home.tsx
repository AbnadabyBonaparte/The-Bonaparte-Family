import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Compass, Heart, Lightbulb, Map, Users } from "lucide-react";
import { Link } from "wouter";

/**
 * Home Page - Portal-Hub The Bonaparte Family
 * Design: Híbrido (Documentary + Tech)
 * Hero section com imagem documentária + seções principais
 */
export default function Home() {
  const mainSections = [
    {
      icon: Users,
      title: "The Family",
      description: "Quem somos, nossa história, e os valores que nos guiam.",
      href: "/family",
      color: "text-primary",
    },
    {
      icon: Compass,
      title: "Expedition",
      description: "A jornada no motorhome Alfredo, mapas vivos e diário de bordo.",
      href: "/expedition",
      color: "text-accent",
    },
    {
      icon: Heart,
      title: "Life",
      description: "Rotina, sítio, música, pets e o estilo de vida nômade consciente.",
      href: "/life",
      color: "text-primary",
    },
    {
      icon: Lightbulb,
      title: "Education",
      description: "Homeschool e worldschool: educação viva e estruturada.",
      href: "/education",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero-documentary.jpg')",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              The Bonaparte Family
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
              Real life. Road. Land. Education. Health. Faith. Business. Legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-here">
                <a>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Start Here
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </Link>
              <Link href="/expedition">
                <a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Follow the Expedition
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Sections Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                Explore Our World
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A multi-layered journey through family, adventure, learning, and legacy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainSections.map((section) => {
                const Icon = section.icon;
                return (
                  <Link key={section.href} href={section.href}>
                    <a>
                      <Card className="p-8 h-full hover:shadow-lg transition-shadow cursor-pointer group">
                        <div className={`${section.color} mb-4`}>
                          <Icon className="h-12 w-12" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {section.description}
                        </p>
                        <div className="flex items-center text-primary font-medium text-sm">
                          Explore
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Card>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Systems Section */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-serif font-bold mb-8 text-foreground text-center">
                Systems & Legacies
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Link href="/alsham">
                  <a>
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="font-serif font-bold text-lg mb-2 text-foreground">
                        ALSHAM
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Global Commerce. Systems. Agents. The economic motor of freedom.
                      </p>
                    </Card>
                  </a>
                </Link>

                <Link href="/work">
                  <a>
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="font-serif font-bold text-lg mb-2 text-foreground">
                        Work
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Essays, eBooks, documentaries. The archive of our thinking.
                      </p>
                    </Card>
                  </a>
                </Link>

                <Link href="/legacy">
                  <a>
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="font-serif font-bold text-lg mb-2 text-foreground">
                        Legacy
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Letters, principles, lineage. The future we're building.
                      </p>
                    </Card>
                  </a>
                </Link>
              </div>

              <div className="text-center">
                <Link href="/start-here">
                  <a>
                    <Button size="lg" variant="outline">
                      Begin Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
