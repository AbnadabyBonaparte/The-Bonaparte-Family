import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

export default function ALSHAM() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">ALSHAM Global Commerce</h1>
        <p className="mt-4 text-lg text-muted-foreground">O motor econômico da família.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-2xl">O que é</h2>
            <p className="mt-3 text-muted-foreground">Holding que integra Garimpo IA, SUPREMA BELEZA e Casa Bonaparte SaaS.</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl">Tecnologia</h2>
            <p className="mt-3 text-muted-foreground">Operação cloud-based com n8n, Supabase, Vercel e automações para escala enxuta.</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl">Roadmap 2026-2027</h2>
            <p className="mt-3 text-muted-foreground">Consolidar produtos digitais, ampliar distribuição global e financiar a expedição contínua.</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
