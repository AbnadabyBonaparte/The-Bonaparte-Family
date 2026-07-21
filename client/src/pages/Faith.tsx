import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { FeatureCard } from "@/components/editorial";
import { Cross, Sunrise, Feather } from "lucide-react";

const pillars = [
  {
    icon: <Cross className="h-5 w-5" />,
    title: "Nossa Fé",
    content:
      "Cristã, não-institucional e panenteísta, inspirada por “O Deus Que Não Se Separa”.",
  },
  {
    icon: <Sunrise className="h-5 w-5" />,
    title: "Rituais Familiares",
    content:
      "Leitura, oração, silêncio e conversas semanais para alinhar coração e direção.",
  },
  {
    icon: <Feather className="h-5 w-5" />,
    title: "Liberdade Espiritual",
    content:
      "A fé como motor de liberdade e responsabilidade, nunca de controle.",
  },
];

export default function Faith() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          image="/brand/atmosphere-fe.webp"
          eyebrow="Espiritualidade"
          title="Fé"
          accent="Cristo antes da Igreja"
          subtitle="Uma fé vivida no cotidiano — oração que não precisa de templo para subir."
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
