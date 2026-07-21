import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { FamilyPhoto } from "@/components/FamilyPhoto";
import { SectionHeader, fadeUp } from "@/components/editorial";
import { familyMembers, familyValues, pets } from "@/data/family";
import { motion } from "framer-motion";

export default function Family() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          image="/brand/atmosphere-familia.webp"
          eyebrow="Quem somos"
          title="A Família"
          accent="quatro pessoas, uma missão"
          subtitle="Dois pais, duas filhas, uma matilha e um sítio — construindo liberdade na vida real."
        />

        <div className="editorial-container py-16 md:py-24">
          {/* Membros */}
          <SectionHeader eyebrow="Os Bonaparte" title="Cada um, um capítulo" />
          <section className="mt-8 grid gap-6 md:grid-cols-2">
            {familyMembers.map((member) => (
              <motion.div
                {...fadeUp}
                key={member.name}
                className="premium-card group flex flex-col"
              >
                <FamilyPhoto src={member.photo} name={member.name} aspect="portrait" />
                <div className="p-6 md:p-7">
                  <h2 className="font-serif text-2xl text-foreground">{member.name}</h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-primary">
                    {member.role}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                  <p className="mt-5 border-l-2 border-primary/40 pl-4 font-serif text-lg italic text-foreground">
                    “{member.quote}”
                  </p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Valores */}
          <section className="mt-20">
            <SectionHeader eyebrow="A casa por dentro" title="Valores da casa" />
            <div className="mt-8 flex flex-wrap gap-3">
              {familyValues.map((value) => (
                <span
                  key={value}
                  className="premium-card px-5 py-2.5 text-sm font-medium text-foreground"
                >
                  {value}
                </span>
              ))}
            </div>
          </section>

          {/* Pets */}
          <section className="mt-20">
            <SectionHeader eyebrow="A matilha" title="Nossos animais" />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pets.map((pet) => (
                <motion.div
                  {...fadeUp}
                  key={pet.name}
                  className="premium-card group flex flex-col"
                >
                  <FamilyPhoto src={pet.photo} name={pet.name} aspect="square" />
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-foreground">{pet.name}</h3>
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      {pet.breed}
                    </p>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {pet.personality}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
