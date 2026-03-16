import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function StartHere() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16 md:py-20">
        <section>
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Guia inicial</p>
          <h1 className="hero-title mt-3">Comece Aqui</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Somos uma família brasileira baseada em Aragarças que decidiu viver com intencionalidade: menos piloto automático, mais presença.</p>
            <p>Este portal existe para reunir nossa história, nossos sistemas e os projetos que sustentam a jornada de estrada, educação e criação.</p>
            <p>Aqui você vai encontrar nossa visão sobre soberania familiar, fé vivida no cotidiano, worldschooling, saúde e construção de legado.</p>
            <p>Não é só conteúdo: é um laboratório aberto de vida real, com vitórias, ajustes e decisões feitas em movimento.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl">Timeline</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {["2020 → Sítio", "2024 → ALSHAM", "2025 → Música", "2026 → Expedição"].map(item => (
              <Card key={item} className="p-5 text-center text-muted-foreground">{item}</Card>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl">Explore as seções</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["/family", "/expedition", "/education", "/life", "/health", "/faith"].map(path => (
              <Link key={path} href={path}>
                <a className="rounded-lg border border-border bg-card p-4 text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
                  {path.replace("/", "").toUpperCase()}
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
