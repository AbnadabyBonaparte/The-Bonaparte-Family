import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "wouter";
import { countries, DEPARTURE_DATE, EXPEDITION_STATS } from "@/data/expedition";

// ── COUNTDOWN ─────────────────────────────────────────────────
function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ── PILLARS ───────────────────────────────────────────────────
const PILLARS = [
  { icon: "🏡", title: "Casa de madeira no sítio", text: "Sem condomínio. Sem barulheira. Natureza, silêncio e presença integral com as filhas." },
  { icon: "📡", title: "Starlink no sertão", text: "Negócio remoto, escola online, liberdade geográfica real — não prometida." },
  { icon: "📚", title: "Worldschooling", text: "O mundo é a sala de aula. Cada país é uma disciplina. Cada cultura é um professor." },
  { icon: "🎵", title: "Música como ofício", text: "25 anos de palco. 888 músicas compostas. A arte que sustenta a travessia." },
  { icon: "🍖", title: "Mesa como ritual", text: "Nunca faltou carne. Nunca faltou presença. A mesa é o altar da família Bonaparte." },
  { icon: "✝️", title: "Fé sem instituição", text: "Cristo antes da Igreja. Oração que não precisa de templo para subir." },
];

// ── FAMILY MEMBERS ────────────────────────────────────────────
const FAMILY = [
  { name: "Abnadaby Bonaparte", role: "O fundador", desc: "Músico, escritor e arquiteto do ecossistema Bonaparte. 46 anos, 25 de palco, 888 composições. A asa da família." },
  { name: "Laurice", role: "A raiz", desc: "A força que ancora tudo. Educadora das filhas, guardiã da estabilidade, presença insubstituível da Casa Bonaparte." },
  { name: "Sarah Hadassa", role: "10 anos", desc: "A primeira. Nascida para observar o mundo com olhos que não se conformam com a resposta fácil." },
  { name: "Ana Maria", role: "8 anos", desc: "A segunda. Nascida para sentir o que os outros passam rápido. Uma alma que habita o presente." },
  { name: "Mel", role: "Yorkshire · A quinta", desc: "A cachorrinha que não sabe que é pequena. Viaja, late e ama como se fosse a dona da estrada." },
];

// ── MANIFESTO LINES ───────────────────────────────────────────
const MANIFESTO = [
  "O livre vive todos os dias o que muitos só vivem nas férias.",
  "Liberdade não custa dinheiro. Liberdade custa olhares estranhos.",
  "O pássaro só volta por escolha se um dia ele voou.",
  "Vocês não foram criadas pelo mundo. Vocês foram criadas por nós.",
  "A verdadeira herança é o comportamento diante do caos.",
];

export default function Home() {
  const countdown = useCountdown(DEPARTURE_DATE);
  const [manifestoIdx, setManifestoIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setManifestoIdx(i => (i + 1) % MANIFESTO.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="page-shell">
      <Header />
      <main>

        {/* ══ HERO ══════════════════════════════════════════════ */}
        <section
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
          style={{
            background: "linear-gradient(160deg, oklch(0.12 0.02 80) 0%, oklch(0.18 0.03 130) 100%)",
          }}
        >
          {/* Grain */}
          <div className="pointer-events-none absolute inset-0 opacity-30"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E\")" }} />

          <div className="relative z-10 px-4">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary opacity-70">
              Aragarças, Goiás · Brasil
            </p>
            <h1 className="font-serif text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl">
              The Bonaparte<br />
              <span className="text-primary italic">Family</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base text-white/50 font-sans font-light leading-relaxed">
              Uma família em movimento. Uma civilização portátil.
            </p>

            {/* Manifesto rotativo */}
            <div className="mx-auto mt-10 h-12 max-w-2xl">
              <p
                key={manifestoIdx}
                className="font-serif text-lg italic text-white/70 transition-all duration-700 md:text-xl"
              >
                "{MANIFESTO[manifestoIdx]}"
              </p>
            </div>

            {/* Countdown */}
            <div className="mt-14">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary/60">Partida para Cebu · 03 Nov 2026</p>
              <div className="flex items-center justify-center gap-6 md:gap-10">
                {[
                  { value: countdown.days,    label: "dias" },
                  { value: countdown.hours,   label: "horas" },
                  { value: countdown.minutes, label: "min" },
                  { value: countdown.seconds, label: "seg" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-serif text-4xl font-light text-white md:text-6xl">
                      {String(value).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-white/30">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link href="/expedition">
                <a className="rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:opacity-90">
                  A Expedição →
                </a>
              </Link>
              <Link href="/family">
                <a className="rounded-sm border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white/70 transition hover:border-primary hover:text-primary">
                  Conheça a Família
                </a>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <p className="absolute bottom-8 text-xs text-white/20 animate-pulse">Role para conhecer ↓</p>
        </section>

        {/* ══ AS TRÊS PERGUNTAS ═════════════════════════════════ */}
        <section className="editorial-container section-reveal py-24">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">Toda linhagem responde</p>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { n: "01", q: "De onde viemos?", t: "Raízes que antecedem qualquer endereço." },
                { n: "02", q: "O que recusamos ser?", t: "A sombra que define o caráter." },
                { n: "03", q: "Para onde vamos?", t: "O vetor de uma casa em movimento." },
              ].map(({ n, q, t }) => (
                <div key={n} className="border-t border-border pt-6">
                  <p className="font-serif text-3xl text-primary/30">{n}</p>
                  <h3 className="mt-3 font-serif text-2xl">{q}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ QUEM SOMOS ════════════════════════════════════════ */}
        <section className="bg-card section-reveal py-24">
          <div className="editorial-container">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">A família</p>
            <h2 className="font-serif text-4xl md:text-5xl">Os Bonaparte</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Uma família no top 5% mundial em qualidade de vida — não por riqueza,
              mas por uma combinação rara que pouquíssimas pessoas no planeta conseguem:
              <strong className="text-foreground"> presença, natureza, autonomia e propósito</strong>.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {FAMILY.map(member => (
                <div key={member.name} className="rounded-lg border border-border bg-background p-5 transition hover:border-primary">
                  <p className="text-xs uppercase tracking-wider text-primary">{member.role}</p>
                  <h3 className="mt-2 font-serif text-xl">{member.name}</h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMO VIVEMOS ══════════════════════════════════════ */}
        <section className="editorial-container section-reveal py-24">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">O design de vida</p>
          <h2 className="font-serif text-4xl md:text-5xl">Como vivemos</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Não somos ricos. Temos algo mais raro: controle do tempo, presença com as filhas
            e uma estrutura de vida que a maioria das pessoas não consegue comprar com nenhum salário.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(p => (
              <div key={p.title} className="group rounded-lg border border-border p-6 transition hover:border-primary">
                <span className="text-3xl">{p.icon}</span>
                <h3 className="mt-4 font-serif text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ A EXPEDIÇÃO — TEASER ══════════════════════════════ */}
        <section
          className="section-reveal py-24"
          style={{ background: "linear-gradient(160deg, oklch(0.12 0.02 80) 0%, oklch(0.16 0.04 130) 100%)" }}
        >
          <div className="editorial-container">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary/70">03 Novembro 2026</p>
            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Expedição Bonaparte<br />
              <span className="text-primary italic">Fase 1 · Ásia</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/50 font-sans font-light leading-relaxed">
              {EXPEDITION_STATS.months} meses · {EXPEDITION_STATS.countries} países · 4 continentes.
              De mochila. Sem motorhome. Escola real dentro de cada cultura visitada.
            </p>

            {/* Países em linha */}
            <div className="mt-10 flex flex-wrap gap-3">
              {countries.map(c => (
                <span
                  key={c.name}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-primary hover:text-primary"
                >
                  {c.flag} {c.name}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/expedition">
                <a className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:opacity-90">
                  Ver o mapa da jornada →
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ══ O MANIFESTO ═══════════════════════════════════════ */}
        <section className="editorial-container section-reveal py-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">Manifesto Bonaparte</p>
            <blockquote className="space-y-6 border-l-2 border-primary pl-8">
              <p className="font-serif text-2xl italic leading-relaxed text-foreground">
                "Não somos ricos. Somos livres. E a diferença é que liberdade se escolhe
                todos os dias — não se herda e não se compra."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Casa de madeira num sítio no Tocantins. Starlink. Duas filhas que aprendem o mundo
                em vez de aprender sobre ele. Um negócio que não tem patrão. Uma mesa que nunca
                ficou sem carne. Uma fé que não precisa de templo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Isso coloca a família Bonaparte entre{" "}
                <strong className="text-foreground">0,1% a 1% da humanidade</strong>{" "}
                em liberdade estrutural — não porque temos mais dinheiro,
                mas porque temos um design de vida que a maioria nunca tentou montar.
              </p>
              <p className="font-serif text-lg italic text-primary">
                "O livre vive todos os dias o que muitos só vivem nas férias."
              </p>
            </blockquote>

            <div className="mt-10 flex gap-6">
              <Link href="/start-here">
                <a className="text-sm font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline">
                  Comece aqui →
                </a>
              </Link>
              <a
                href="https://casabonaparte.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground underline-offset-4 hover:underline"
              >
                Casa Bonaparte →
              </a>
            </div>
          </div>
        </section>

        {/* ══ AS MENINAS ════════════════════════════════════════ */}
        <section className="bg-card section-reveal py-24">
          <div className="editorial-container">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Worldschooling</p>
            <h2 className="font-serif text-4xl md:text-5xl">Sarah & Ana Maria</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-8">
                <p className="font-serif text-5xl text-primary/20">10</p>
                <h3 className="mt-2 font-serif text-2xl">Sarah Hadassa</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Nasceu dentro de uma família que já havia decidido não entregar a criação
                  ao sistema. Aprende português, inglês e espanhol. Estuda história real,
                  não a versão do livro didático. Vai chegar aos 18 anos com repertório
                  de mundo que poucos adultos têm.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-8">
                <p className="font-serif text-5xl text-primary/20">8</p>
                <h3 className="mt-2 font-serif text-2xl">Ana Maria</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A caçula que sente o que os outros passam rápido. Aprendeu a dormir
                  em barraca na chuva, a acordar sem sino e a ter medo e ir mesmo assim.
                  Vai crescer sabendo que o mundo não é um lugar para ter medo
                  — é um lugar para explorar.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
              <p className="font-serif text-lg italic text-foreground">
                "O objetivo não é forçá-las ao nomadismo para sempre. É arrancá-las da
                redoma para que, aos 18 anos, quando qualquer pessoa tentar empurrar
                uma 'verdade local e enviesada', elas tenham matéria-prima para discernir."
              </p>
            </div>
          </div>
        </section>

        {/* ══ HUB LINKS ═════════════════════════════════════════ */}
        <section className="editorial-container section-reveal py-24">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Universo Bonaparte</p>
          <h2 className="font-serif text-3xl">Explore o ecossistema</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Hub Central",    href: "https://casabonaparte.com.br",          sub: "casabonaparte.com.br",                       ext: true  },
              { label: "Livraria",       href: "https://casabonaparte.com.br/livros",   sub: "19 obras Bonaparte",                         ext: true  },
              { label: "Bazar & Livros", href: "/store",                                sub: "Equipamentos · Obras · Expedição",           ext: false },
              { label: "Músico",         href: "https://abnadabybonaparte.alshamglobal.com.br", sub: "25 anos · 888 músicas",              ext: true  },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.ext ? "_blank" : undefined}
                rel={link.ext ? "noopener noreferrer" : undefined}
                className="group rounded-lg border border-border bg-card p-5 transition hover:border-primary"
              >
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary">{link.label} →</h3>
                <p className="mt-2 text-xs text-muted-foreground">{link.sub}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ══ ACOMPANHE ═════════════════════════════════════════ */}
        <section
          className="section-reveal py-20"
          style={{ background: "oklch(0.14 0.02 130)" }}
        >
          <div className="editorial-container text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary/60">Não perca nenhuma parada</p>
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              A jornada começa em{" "}
              <span className="text-primary">03 de Novembro de 2026</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/40 leading-relaxed">
              Acompanhe as 12 paradas pelo WhatsApp — ou explore as páginas do universo Bonaparte.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/5563992428800?text=Quero%20acompanhar%20a%20Expedi%C3%A7%C3%A3o%20Bonaparte!"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
              >
                Acompanhar no WhatsApp →
              </a>
              <Link href="/expedition">
                <a className="rounded-sm border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white/60 transition hover:border-primary hover:text-primary">
                  Ver o mapa
                </a>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
