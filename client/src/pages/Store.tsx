import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/data/store";

export default function Store() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">Loja</h1>
        <p className="mt-4 text-lg text-muted-foreground">Apoie a jornada Bonaparte.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map(product => (
            <Card key={product.name} className="flex h-full flex-col overflow-hidden p-0">
              <ImagePlaceholder aspectRatio="square" alt={product.name} />
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-2xl leading-tight">{product.name}</h2>
                <p className="mt-1 text-primary">{product.price}</p>
                <p className="mt-3 flex-1 text-muted-foreground">{product.description}</p>
                <Button variant="outline" className="mt-4 min-h-11">Ver mais</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
