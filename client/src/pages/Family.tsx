import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Card } from "@/components/ui/card";
import { familyMembers, familyValues, pets } from "@/data/family";

export default function Family() {
  return (
    <div className="page-shell">
      <Header />
      <main className="editorial-container py-16">
        <h1 className="hero-title">A Família</h1>
        <p className="mt-4 text-lg text-muted-foreground">Quatro pessoas, dois cachorros, um sítio e uma missão.</p>
        <div className="mt-8 w-full">
          <ImagePlaceholder aspectRatio="hero" alt="A família Bonaparte" />
        </div>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {familyMembers.map(member => (
            <Card key={member.name} className="overflow-hidden p-0">
              <ImagePlaceholder aspectRatio="portrait" alt={member.name} />
              <div className="p-6">
                <h2 className="text-2xl">{member.name}</h2>
                <p className="mt-1 text-sm text-primary">{member.role}</p>
                <p className="mt-4 text-muted-foreground">{member.description}</p>
                <p className="mt-4 font-serif italic text-muted-foreground">"{member.quote}"</p>
              </div>
            </Card>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="text-3xl">Valores da casa</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {familyValues.map(value => <Card key={value} className="p-4 text-muted-foreground">{value}</Card>)}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl">Nossos Animais</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {pets.map(pet => (
              <Card key={pet.name} className="overflow-hidden p-0">
                <ImagePlaceholder aspectRatio="square" alt={pet.name} />
                <div className="p-4">
                  <h3 className="text-xl">{pet.name}</h3>
                  <p className="text-sm text-primary">{pet.breed}</p>
                  <p className="mt-2 text-muted-foreground">{pet.personality}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
