import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { SectionHeader, fadeUp } from "@/components/editorial";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const intro = [
  "Somos uma família brasileira que decidiu viver com intencionalidade: menos piloto automático, mais presença.",
  "Este portal existe para reunir nossa história, nossos sistemas e os projetos que sustentam a jornada de estrada, educação e criação.",
  "Aqui você vai encontrar nossa visão sobre soberania familiar, fé vivida no cotidiano, worldschooling, saúde e construção de legado.",
  "Não é só conteúdo: é um laboratório aberto de vida real, com vitórias, ajustes e decisões feitas em movimento.",
];

const timeline = [
  { year: "2020", label: "Sítio" },
  { year: "2024", label: "ALSHAM" },
  { year: "2025", label: "Música" },
  { year: "2026", label: "Expedição" },
];

const sections: Array<[string, string]> = [
  ["/family", "Família"],
  ["/expedition", "Expedição"],
  ["/education", "Educação"],
  ["/life", "Vida"],
  ["/health", "Saúde"],
  ["/faith", "Fé"],
];

export default function StartHere() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Guia inicial"
          title="Comece Aqui"
          accent="a porta de entrada"
          subtitle="Uma família construindo liberdade na vida real. Este é o mapa para navegar tudo o que fazemos."
        />

        <div className="editorial-container py-16 md:py-24">
          {/* Manifesto de abertura */}
          <motion.section {...fadeUp} className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {intro.map((p, i) => (
              <p key={i} className={i === 0 ? "font-serif text-foreground" : ""}>
                {p}
              </p>
            ))}
          </motion.section>

          {/* Timeline */}
          <section className="mt-20">
            <SectionHeader eyebrow="A trajetória" title="Linha do tempo" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {timeline.map((item) => (
                <motion.div {...fadeUp} key={item.year} className="premium-card p-6 text-center">
                  <p className="font-serif text-3xl text-primary">{item.year}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Explore */}
          <section className="mt-20">
            <SectionHeader eyebrow="Navegue" title="Explore as seções" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {sections.map(([path, label]) => (
                <Link key={path} href={path}>
                  <a className="premium-card group flex items-center justify-between p-6 text-foreground">
                    <span className="font-serif text-xl">{label}</span>
                    <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
