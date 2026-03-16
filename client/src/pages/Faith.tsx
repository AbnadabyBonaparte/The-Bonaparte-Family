import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Card } from "@/components/ui/card";

export default function Faith() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">Fé</h1>
        <div className="mt-8 w-full">
          <ImagePlaceholder aspectRatio="hero" alt="Espiritualidade" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-2xl">Nossa Fé</h2>
            <p className="mt-3 text-muted-foreground">Cristã, não-institucional e panenteísta, inspirada por “O Deus Que Não Se Separa”.</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl">Rituais Familiares</h2>
            <p className="mt-3 text-muted-foreground">Leitura, oração, silêncio e conversas semanais para alinhar coração e direção.</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl">Liberdade Espiritual</h2>
            <p className="mt-3 text-muted-foreground">A fé como motor de liberdade e responsabilidade, nunca de controle.</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
