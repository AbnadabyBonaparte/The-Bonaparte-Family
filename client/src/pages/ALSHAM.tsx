import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { FeatureCard } from "@/components/editorial";
import { Building2, Cpu, Map } from "lucide-react";

const pillars = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "O que é",
    content:
      "Holding que integra Garimpo IA, SUPREMA BELEZA e Casa Bonaparte SaaS.",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Tecnologia",
    content:
      "Operação cloud-based com automações proprietárias para escala enxuta e distribuição global.",
  },
  {
    icon: <Map className="h-5 w-5" />,
    title: "Roadmap 2026-2027",
    content:
      "Consolidar produtos digitais, ampliar distribuição global e financiar a expedição contínua.",
  },
];

export default function ALSHAM() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          atmosphere="verde"
          eyebrow="Negócios da família"
          title="ALSHAM"
          accent="Global Commerce"
          subtitle="O motor econômico da família — tecnologia e produtos digitais que financiam a liberdade."
        />

        <section className="editorial-container py-16 md:py-24">
          <div className="grid gap-5 md:grid-cols-3">
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
