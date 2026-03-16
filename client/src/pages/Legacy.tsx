import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const principles = [
  "Verdade acima de aparência",
  "Presença antes de performance",
  "Educação como autonomia",
  "Fé como liberdade",
  "Trabalho com propósito",
  "Legado acima de ego",
];

export default function Legacy() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">Legado</h1>
        <p className="mt-4 text-lg text-muted-foreground">O que deixamos quando partirmos.</p>

        <section className="mt-12 rounded-xl border border-border bg-card p-8">
          <h2 className="text-3xl">Para nossas filhas</h2>
          <p className="mt-4 font-serif text-xl italic text-muted-foreground">
            "Que vocês nunca confundam conforto com destino. Nossa maior herança é a coragem de viver com verdade, mesmo quando custa caro."
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl">Princípios da Casa</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {principles.map(principle => <Card key={principle} className="p-4 text-muted-foreground">{principle}</Card>)}
          </div>
        </section>

        <section className="mt-14 rounded-xl border border-border p-8">
          <h2 className="text-3xl">Linhagem e futuro</h2>
          <p className="mt-4 text-muted-foreground">Honramos a história que nos trouxe até aqui e construímos uma linhagem de liberdade para quem virá depois.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
