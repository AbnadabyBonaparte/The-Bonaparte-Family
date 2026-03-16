import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { books } from "@/data/work";

export default function Work() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">Obra</h1>

        <section className="mt-12">
          <h2 className="text-3xl">Livros</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {books.map(book => (
              <Card key={book.title} className="p-5">
                <h3 className="text-xl">{book.title}</h3>
                <p className="mt-2 text-muted-foreground">{book.theme}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl">Música</h2>
            <p className="mt-3 text-muted-foreground">Aby Bonaparte: 25+ anos de carreira, com shows em Portugal, Alemanha, Bélgica e Uruguai.</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl">Documentário</h2>
            <p className="mt-3 text-muted-foreground">Projeto em planejamento para registrar a expedição como narrativa de família, território e legado.</p>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
