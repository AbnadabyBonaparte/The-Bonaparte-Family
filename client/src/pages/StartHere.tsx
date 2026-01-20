import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * Start Here Page - Portal-Hub The Bonaparte Family
 * Página guiada para qualquer pessoa entender a visão em 2 minutos
 */
export default function StartHere() {
  const sections = [
    {
      title: "Who We Are",
      description: "A family that chose freedom over comfort, presence over performance.",
      content: "We are the Bonapartes: architects of our own reality, builders of systems, and creators of legacy.",
    },
    {
      title: "What We Refuse",
      description: "We reject the ordinary paths and conventional wisdom.",
      content: "Boredom. Mediocrity. Passive consumption. Disconnection from nature. Separation of work and life.",
    },
    {
      title: "What We Seek",
      description: "Our mission is clear and intentional.",
      content: "Freedom. Authentic connection. Continuous learning. Real impact. A life that matters.",
    },
    {
      title: "How We Live",
      description: "Nômade, conscious, and integrated.",
      content: "On the road with our motorhome. On the land at our sítio. Always learning. Always building.",
    },
    {
      title: "How We Educate",
      description: "Worldschooling and homeschooling as a philosophy.",
      content: "Real experience. Real projects. Real mentors. The world as our classroom.",
    },
    {
      title: "How We Sustain",
      description: "Through systems, technology, and intentional business.",
      content: "ALSHAM Global Commerce. Digital products. Automation. Building the economic engine of freedom.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              Start Here
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand The Bonaparte Family in 2 minutes.
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sections.map((section, idx) => (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-serif font-bold mb-2 text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-sm text-accent font-medium mb-4">
                    {section.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-8 text-foreground">
              Ready to Explore?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/family">
                <a>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Meet the Family
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </Link>
              <Link href="/expedition">
                <a>
                  <Button size="lg" variant="outline">
                    Follow the Expedition
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
