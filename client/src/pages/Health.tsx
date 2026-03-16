import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Card } from "@/components/ui/card";

export default function Health() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">Saúde & Corpo</h1>
        <div className="mt-8 w-full">
          <ImagePlaceholder aspectRatio="hero" alt="TRIBO BASE — Movimento" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl">TRIBO BASE™</h2>
            <p className="mt-3 text-muted-foreground">Metodologia fitness 40+ com cinco famílias de movimento: TERRA, VENTO, FOGO, ÁGUA e RAIZ.</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl">Alimentação</h2>
            <p className="mt-3 text-muted-foreground">Comida de verdade, rotina sustentável e escolhas alinhadas com energia de longo prazo.</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl">Movimento</h2>
            <p className="mt-3 text-muted-foreground">Calistenia, treino funcional e mobilidade para manter corpo útil, forte e presente.</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl">Anti-Burnout</h2>
            <p className="mt-3 text-muted-foreground">Recuperação mental, ritmo consciente e protocolos inspirados no livro de Aby sobre burnout.</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
