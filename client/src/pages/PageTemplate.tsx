import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

/**
 * Page Template - Portal-Hub The Bonaparte Family
 * Template reutilizável para as páginas canônicas
 */
interface PageTemplateProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
}

export function PageTemplate({
  title,
  subtitle,
  heroImage,
  sections,
}: PageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <Link href="/">
              <a className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </a>
            </Link>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-12">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
