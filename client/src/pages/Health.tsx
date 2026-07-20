import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { FeatureCard } from "@/components/editorial";
import { Dumbbell, Salad, Activity, HeartPulse } from "lucide-react";

const pillars = [
  {
    icon: <Dumbbell className="h-5 w-5" />,
    title: "TRIBO BASE™",
    content:
      "Metodologia fitness 40+ com cinco famílias de movimento: TERRA, VENTO, FOGO, ÁGUA e RAIZ.",
  },
  {
    icon: <Salad className="h-5 w-5" />,
    title: "Alimentação",
    content:
      "Comida de verdade, rotina sustentável e escolhas alinhadas com energia de longo prazo.",
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: "Movimento",
    content:
      "Calistenia, treino funcional e mobilidade para manter corpo útil, forte e presente.",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Anti-Burnout",
    content:
      "Recuperação mental, ritmo consciente e protocolos inspirados no livro de Aby sobre burnout.",
  },
];

export default function Health() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          atmosphere="verde"
          eyebrow="Saúde & Corpo"
          title="Corpo útil,"
          accent="mente inteira"
          subtitle="Movimento, comida de verdade e ritmo consciente — para chegar longe com energia de sobra."
        />

        <section className="editorial-container py-16 md:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title}>
                {p.content}
              </FeatureCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
