import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Card } from "@/components/ui/card";
import { checkpoints, countries } from "@/data/expedition";

export default function Expedition() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">Expedição Bonaparte 2026-2027</h1>
        <p className="mt-4 text-lg text-muted-foreground">13 meses • 12 países • 1 família • 1 motorhome chamado Alfredo</p>
        <div className="mt-8 w-full">
          <ImagePlaceholder aspectRatio="hero" alt="Expedição Bonaparte — Na estrada" />
        </div>

        <section className="mt-14">
          <h2 className="text-3xl">O plano</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {countries.map(country => (
              <Card key={country} className="overflow-hidden p-0">
                <ImagePlaceholder aspectRatio="landscape" alt={country} />
                <p className="p-4 text-muted-foreground">{country}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <Card className="overflow-hidden p-0">
            <ImagePlaceholder aspectRatio="landscape" alt="Alfredo — nosso motorhome" />
            <div className="p-6">
              <h3 className="text-2xl">Alfredo</h3>
              <p className="mt-3 text-muted-foreground">Alfredo é o quinto membro da família. Casa, estúdio, escola e base logística no mesmo corpo.</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Energia e operação para rotina full-time</li>
                <li>• Espaço para aulas, gravações e descanso</li>
                <li>• Estrutura pensada para autonomia</li>
              </ul>
            </div>
          </Card>
          <Card className="border-dashed p-6">
            <ImagePlaceholder aspectRatio="landscape" alt="Alfredo — nosso motorhome" />
          </Card>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl">Timeline documental</h2>
          <div className="mt-6 space-y-4">
            {checkpoints.map(check => (
              <Card key={check.country} className="overflow-hidden p-0">
                <ImagePlaceholder aspectRatio="landscape" alt={check.country} />
                <div className="p-5">
                  <p className="text-sm text-primary">{check.window}</p>
                  <h3 className="text-xl">{check.country}</h3>
                  <p className="text-muted-foreground">{check.goal}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-xl border border-border bg-card p-8">
          <h2 className="text-3xl">Worldschooling na estrada</h2>
          <p className="mt-4 text-muted-foreground">Cada país é uma sala de aula. História, geografia, idiomas e arte aparecem no dia a dia, conectados a projetos reais das filhas.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
