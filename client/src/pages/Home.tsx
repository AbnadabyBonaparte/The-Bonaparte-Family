import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { countries, DEPARTURE_DATE, EXPEDITION_STATS } from "@/data/expedition";
import { familyMembers, pets } from "@/data/family";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

// ── IMAGENS POR PAÍS ──────────────────────────────────────────
const COUNTRY_IMAGES: Record<string, string> = {
  "Filipinas":   "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
  "China":       "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&q=80",
  "Tailândia":   "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80",
  "Camboja":     "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&q=80",
  "Vietnã":      "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&q=80",
  "Malásia":     "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80",
  "Indonésia":   "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
  "Índia":       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80",
  "Uzbequistão": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80",
  "Egito":       "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=400&q=80",
  "Jordânia":    "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=400&q=80",
  "Marrocos":    "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400&q=80",
};

// ── ECOSSISTEMA ───────────────────────────────────────────────
const ECO_LINKS = [
  {
    label: "Casa Bonaparte",
    sub: "Filosofia · Manifesto · Universo Bonaparte",
    href: "https://casabonaparte.com.br",
    // SUBSTITUIR: foto do sítio Bonaparte ou símbolo Bonaparte
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    accent: "var(--color-forest-mid)",
  },
  {
    label: "Livraria Bonaparte",
    sub: "9 obras publicadas · Edições Bonaparte",
    href: "https://livraria.casabonaparte.com.br",
    // SUBSTITUIR: foto de mesa com livros da Casa Bonaparte
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    accent: "var(--color-forest-mid)",
  },
  {
    label: "Aby Bonaparte",
    sub: "Músico · Voz e violão · 25 anos de palco",
    href: "https://abnadabybonaparte.alshamglobal.com.br",
    // SUBSTITUIR: foto do Aby no palco
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    accent: "var(--color-sunset-orange)",
  },
  {
    label: "ALSHAM Global",
    sub: "Tecnologia · Agentes IA · Sistemas",
    href: "https://alshamglobal.com.br",
    // SUBSTITUIR: foto do Abnadaby no computador/sítio
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    accent: "#5B8CFF",
  },
  {
    label: "ALSHAM Pulso",
    sub: "Acontecimentos · Eventos · Novidades",
    href: "https://pulso.alshamglobal.com.br",
    // SUBSTITUIR: foto de show ao vivo ou evento Bonaparte
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    accent: "var(--color-sunset-orange)",
  },
  {
    label: "ALSHAM Ascension",
    sub: "Parcerias · IP · B2B estratégico",
    href: "https://select.alshamglobal.com.br",
    // SUBSTITUIR: foto de reunião ou ambiente profissional
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    accent: "#5B8CFF",
  },
  {
    label: "Bonaparte Cast",
    sub: "Podcast · Em breve",
    href: "https://podcast.casabonaparte.com.br",
    // SUBSTITUIR: foto de microfone ou gravação
    image: "https://images.unsplash.com/photo-1478737270197-c2f5e0f5b3a5?w=800&q=80",
    accent: "var(--color-forest-mid)",
  },
  {
    label: "Bazar Bonaparte",
    sub: "Objetos curados · Desk · Viagem · Escrita",
    href: "https://casabonaparte.com.br/bazar",
    // SUBSTITUIR: foto dos objetos do bazar
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    accent: "var(--color-sunset-orange)",
  },
];

// ── FAMÍLIA (fonte única: data/family.ts) ─────────────────────
// Fotos reais de /public/familia/. Sem stock de estranhos.
const melPet = pets.find((p) => p.name === "Mel");
const FAMILY = [
  ...familyMembers.map((m) => ({
    name: m.name,
    role: m.role,
    desc: m.description,
    photo: m.photo,
  })),
  ...(melPet
    ? [
        {
          name: melPet.name,
          role: `${melPet.breed} · A quinta`,
          desc: melPet.personality,
          photo: melPet.photo ?? "",
        },
      ]
    : []),
];

// ── PILARES ───────────────────────────────────────────────────
const PILLARS = [
  { title: "Casa de madeira no sítio", text: "Sem condomínio. Sem barulheira. Natureza, silêncio e presença integral com as filhas.",
    // SUBSTITUIR: /familia/ana-peru.jpg — foto da casa/sítio Bonaparte
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80" },
  { title: "Starlink no sertão",        text: "Negócio remoto, escola online, liberdade geográfica real — não prometida.",           image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80" },
  { title: "Worldschooling",             text: "O mundo é a sala de aula. Cada país é uma disciplina. Cada cultura é um professor.",   image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80" },
  { title: "Música como ofício",         text: "25 anos de palco. A arte que sustenta a travessia.",                                   image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80" },
  { title: "Mesa como ritual",           text: "Nunca faltou carne. Nunca faltou presença. A mesa é o altar da família Bonaparte.",    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" },
  { title: "Fé sem instituição",         text: "Cristo antes da Igreja. Oração que não precisa de templo para subir.",                 image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80" },
];

// ── MANIFESTO ─────────────────────────────────────────────────
const MANIFESTO = [
  "O livre vive todos os dias o que muitos só vivem nas férias.",
  "Liberdade não custa dinheiro. Liberdade custa olhares estranhos.",
  "O pássaro só volta por escolha se um dia ele voou.",
  "Vocês não foram criadas pelo mundo. Vocês foram criadas por nós.",
  "A verdadeira herança é o comportamento diante do caos.",
];

// ── SEPARADOR ─────────────────────────────────────────────────
function Divider() {
  return (
    <div style={{
      height: "2px",
      background: "linear-gradient(to right, transparent, var(--color-forest-mid), transparent)",
      opacity: 0.3,
    }} />
  );
}

// ── PIX COPY BUTTON ───────────────────────────────────────────
function PixCopyButton() {
  const [copied, setCopied] = useState(false);
  const PIX = "59332265000130";
  const copy = () => {
    navigator.clipboard.writeText(PIX);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <button
      onClick={copy}
      style={{
        padding: "0.9rem",
        background: copied ? "rgba(233,116,28,0.2)" : "var(--color-sunset-orange)",
        color: copied ? "var(--color-sunset-orange)" : "white",
        border: copied ? "1px solid var(--color-sunset-orange)" : "none",
        fontSize: "0.82rem", fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase",
        cursor: "pointer", transition: "all 250ms ease",
        fontFamily: "inherit",
      }}
    >
      {copied ? "✓ PIX copiado! · 59332265000130" : "Copiar chave PIX · CNPJ Bonaparte"}
    </button>
  );
}

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

// ── HOME ──────────────────────────────────────────────────────
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

        {/* ══ HERO — composição galeria em camadas ═════════════ */}
        <motion.section
          {...fadeUp}
          className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 text-center"
          style={{ background: "var(--color-obsidian)" }}
        >
          {/* camada 0 — imagem focal: /brand/hero.jpg (arte gerada) → fallback foto real → gradiente puro */}
          <img
            src="/brand/hero.jpg"
            alt="" aria-hidden="true"
            data-fallback="0"
            onError={e => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none"; // sem foto → cai nos gradientes da marca (camadas 1-4)
            }}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-[0.42]"
            style={{ WebkitMaskImage: "radial-gradient(120% 100% at 50% 30%, black 45%, transparent 100%)",
                     maskImage: "radial-gradient(120% 100% at 50% 30%, black 45%, transparent 100%)" }}
          />

          {/* camada 1 — mesh / aurora radial-gradients da paleta da marca */}
          <div className="pointer-events-none absolute inset-0 z-[1]"
            style={{ background:
              "radial-gradient(60% 55% at 18% 20%, color-mix(in oklab, var(--color-forest-mid) 42%, transparent), transparent 70%)," +
              "radial-gradient(55% 50% at 85% 78%, color-mix(in oklab, var(--color-sunset-orange) 32%, transparent), transparent 72%)," +
              "radial-gradient(70% 60% at 55% 8%, color-mix(in oklab, var(--color-forest-dark) 55%, transparent), transparent 75%)" }} />

          {/* camada 2 — vinheta profunda nas bordas */}
          <div className="pointer-events-none absolute inset-0 z-[2]"
            style={{ background: "radial-gradient(115% 90% at 50% 42%, transparent 55%, color-mix(in oklab, var(--color-obsidian) 92%, transparent) 100%)" }} />

          {/* camada 3 — grão de filme */}
          <div className="pointer-events-none absolute inset-0 z-[3] opacity-[0.06] mix-blend-overlay"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

          {/* camada 4 — glow volumétrico sob o título */}
          <div className="pointer-events-none absolute left-1/2 top-[38%] z-[3] h-[42vh] w-[80vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] motion-safe:animate-pulse motion-reduce:animate-none"
            style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--color-forest-mid) 55%, transparent), transparent 78%)", animationDuration: "6s" }} />

          {/* camada 5 — conteúdo */}
          <div className="relative z-[4] mx-auto max-w-4xl">
            {/* eyebrow glass */}
            <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] backdrop-blur-md"
              style={{ borderColor: "color-mix(in oklab, var(--color-cream) 22%, transparent)",
                       background: "color-mix(in oklab, var(--color-cream) 8%, transparent)",
                       color: "color-mix(in oklab, var(--color-cream) 82%, transparent)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-sunset-orange)" }} />
              Portal-hub da família Bonaparte
            </span>

            <h1 className="mt-8 font-serif font-light leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)", color: "var(--color-cream)" }}>
              The Bonaparte
              <span className="mt-1 block italic"
                style={{ backgroundImage: "linear-gradient(100deg, var(--color-forest-mid) 0%, color-mix(in oklab, var(--color-sunset-orange) 85%, var(--color-cream)) 100%)",
                         WebkitBackgroundClip: "text", backgroundClip: "text",
                         WebkitTextFillColor: "transparent", color: "transparent" }}>
                Family
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl font-sans text-base font-light leading-relaxed md:text-lg"
              style={{ color: "color-mix(in oklab, var(--color-cream) 68%, transparent)" }}>
              Uma família real construindo liberdade na vida real — {EXPEDITION_STATS.countries} países,
              {" "}{EXPEDITION_STATS.continents} continentes, worldschooling e um legado documentado em público.
            </p>

            {/* frase rotativa do manifesto */}
            <div className="mx-auto mt-6 flex h-10 max-w-2xl items-center justify-center">
              <p key={manifestoIdx} className="font-serif text-base italic transition-all duration-700 md:text-xl"
                style={{ color: "color-mix(in oklab, var(--color-cream) 55%, transparent)" }}>
                "{MANIFESTO[manifestoIdx]}"
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/expedition">
                <a className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-accent-foreground shadow-lg transition hover:scale-[1.03] hover:opacity-95"
                  style={{ boxShadow: "0 18px 50px -12px color-mix(in oklab, var(--color-sunset-orange) 55%, transparent)" }}>
                  A Expedição →
                </a>
              </Link>
              <Link href="/family">
                <a className="rounded-full border px-8 py-3.5 text-sm font-semibold uppercase tracking-widest backdrop-blur-md transition hover:border-[var(--color-cream)]"
                  style={{ borderColor: "color-mix(in oklab, var(--color-cream) 28%, transparent)",
                           color: "color-mix(in oklab, var(--color-cream) 85%, transparent)",
                           background: "color-mix(in oklab, var(--color-cream) 6%, transparent)" }}>
                  Conheça a Família
                </a>
              </Link>
            </div>

            {/* countdown em painel glass */}
            <div className="mx-auto mt-12 inline-flex flex-col items-center rounded-2xl border px-6 py-5 backdrop-blur-md md:px-10"
              style={{ borderColor: "color-mix(in oklab, var(--color-cream) 14%, transparent)",
                       background: "color-mix(in oklab, var(--color-obsidian) 45%, transparent)" }}>
              <p className="mb-4 text-[0.62rem] uppercase tracking-[0.3em]"
                style={{ color: "color-mix(in oklab, var(--color-sunset-orange) 82%, transparent)" }}>
                Previsão de partida · sujeita à venda da fazenda
              </p>
              <div className="flex items-start justify-center gap-5 md:gap-9">
                {[
                  { value: countdown.days,    label: "dias" },
                  { value: countdown.hours,   label: "horas" },
                  { value: countdown.minutes, label: "min" },
                  { value: countdown.seconds, label: "seg" },
                ].map(({ value, label }, i) => (
                  <div key={label} className="flex items-start gap-5 md:gap-9">
                    <div className="text-center">
                      <div className="font-serif text-4xl font-light leading-none md:text-6xl"
                        style={{ color: "var(--color-cream)" }}>
                        {String(value).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-[0.6rem] uppercase tracking-[0.25em]"
                        style={{ color: "color-mix(in oklab, var(--color-cream) 40%, transparent)" }}>{label}</div>
                    </div>
                    {i < 3 && <span className="font-serif text-3xl font-light md:text-5xl"
                      style={{ color: "color-mix(in oklab, var(--color-cream) 18%, transparent)" }}>:</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* fade inferior p/ emendar na próxima seção */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-32"
            style={{ background: "linear-gradient(to top, var(--color-obsidian), transparent)" }} />
          <p className="absolute bottom-7 z-[4] text-xs animate-pulse"
            style={{ color: "color-mix(in oklab, var(--color-cream) 30%, transparent)" }}>
            Role para conhecer ↓
          </p>
        </motion.section>

        <Divider />

        {/* ══ AS TRÊS PERGUNTAS ═════════════════════════════════ */}
        <motion.section {...fadeUp} className="editorial-container section-reveal py-14 md:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">Toda linhagem responde</p>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { n: "01", q: "De onde viemos?",       t: "Raízes que antecedem qualquer endereço." },
                { n: "02", q: "O que recusamos ser?",  t: "A sombra que define o caráter." },
                { n: "03", q: "Para onde vamos?",       t: "O vetor de uma casa em movimento." },
              ].map(({ n, q, t }) => (
                <div key={n} className="border-t border-border pt-6">
                  <p className="font-serif text-3xl text-primary/30">{n}</p>
                  <h3 className="mt-3 font-serif text-2xl">{q}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ QUEM SOMOS ════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="bg-card section-reveal py-14 md:py-24">
          <div className="editorial-container">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">A família</p>
            <h2 className="font-serif text-4xl md:text-5xl">Os Bonaparte</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Uma família que escolheu uma vida rara — não por riqueza,
              mas por uma combinação que pouca gente monta:
              <strong className="text-foreground"> presença, natureza, autonomia e propósito</strong>.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {FAMILY.map(member => (
                <div key={member.name} className="group overflow-hidden rounded-lg border border-border transition hover:border-primary">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    {member.photo && (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-full w-full object-cover object-top transition group-hover:scale-105"
                        onError={e => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                          ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement)?.removeAttribute("style");
                        }}
                      />
                    )}
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={member.photo ? { display: "none" } : { background: "var(--color-forest-dark)" }}
                    >
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem",
                                     fontWeight: 300, color: "rgba(255,255,255,0.15)" }}>
                        {member.name[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-wider text-primary">{member.role}</p>
                    <h3 className="mt-1 font-serif text-lg leading-snug">{member.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ COMO VIVEMOS ══════════════════════════════════════ */}
        <motion.section {...fadeUp} className="editorial-container section-reveal py-14 md:py-24">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">O design de vida</p>
          <h2 className="font-serif text-4xl md:text-5xl">Como vivemos</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Não somos ricos. Temos algo mais raro: controle do tempo, presença com as filhas
            e uma estrutura de vida que a maioria das pessoas não consegue comprar com nenhum salário.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILLARS.map(p => (
              <div key={p.title} style={{ position: "relative", borderRadius: "0.5rem",
                                          overflow: "hidden", aspectRatio: "4/3" }}>
                <img src={p.image} alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0,
                              background: "linear-gradient(to top, rgba(26,66,45,0.92) 0%, rgba(26,66,45,0.2) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem",
                               color: "white", margin: "0.5rem 0 0.25rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.75)",
                              lineHeight: 1.5, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* ══ A EXPEDIÇÃO — TEASER ══════════════════════════════ */}
        <motion.section {...fadeUp} className="section-reveal py-14 md:py-24"
          style={{ background: "var(--color-forest-dark)" }}>
          <div className="editorial-container">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary/70">Previsão · Novembro 2026</p>
            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Expedição Bonaparte<br />
              <span className="text-primary italic">Fase 1 · Ásia</span>
            </h2>
            <p className="mt-4 max-w-2xl font-sans font-light leading-relaxed"
              style={{ color: "rgba(248,247,241,0.6)" }}>
              {EXPEDITION_STATS.months} meses · {EXPEDITION_STATS.countries} países · 4 continentes.
              De mochila. Sem motorhome. Escola real dentro de cada cultura visitada.
            </p>
            <div className="mt-10 pb-4"
              style={{ display: "flex", gap: "1rem", overflowX: "auto", scrollSnapType: "x mandatory",
                       paddingLeft: "1rem", paddingRight: "1rem" }}>
              {countries.map(c => (
                <div key={c.name}
                  style={{ flexShrink: 0, width: "clamp(140px, 40vw, 200px)", scrollSnapAlign: "start",
                           borderRadius: "0.5rem", overflow: "hidden", position: "relative" }}>
                  <img src={COUNTRY_IMAGES[c.name]} alt={c.name}
                    style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }}
                    loading="lazy" />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
                                padding: "1rem",
                                background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}>
                    <p style={{ margin: 0, fontSize: "1.4rem" }}>{c.flag}</p>
                    <p style={{ margin: "0.2rem 0 0", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>{c.name}</p>
                    <p style={{ margin: 0, color: "rgba(255,255,255,0.6)", fontSize: "0.7rem" }}>{c.window}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/expedition">
                <a className="inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition hover:opacity-90">
                  Ver o mapa da jornada →
                </a>
              </Link>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ O MANIFESTO ═══════════════════════════════════════ */}
        <motion.section {...fadeUp} className="editorial-container section-reveal py-14 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">Manifesto Bonaparte</p>
            <blockquote className="space-y-6 border-l-2 border-primary pl-8">
              <p className="font-serif text-2xl italic leading-relaxed text-foreground">
                "Não somos ricos. Somos livres. E a diferença é que liberdade se escolhe
                todos os dias — não se herda e não se compra."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Casa de madeira entre cerrado e água. Starlink. Duas filhas que aprendem o mundo
                em vez de aprender sobre ele. Um negócio que não tem patrão. Uma mesa que nunca
                ficou sem carne. Uma fé que não precisa de templo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Isso não é privilégio de dinheiro — é{" "}
                <strong className="text-foreground">liberdade estrutural</strong>:
                tempo, presença e direção nas próprias mãos. Um design de vida
                que a maioria nunca tentou montar.
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
              <a href="https://casabonaparte.com.br" target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground underline-offset-4 hover:underline">
                Casa Bonaparte →
              </a>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ AS MENINAS ════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="section-reveal py-14 md:py-24 relative overflow-hidden">
          {/* Foto real — Sarah e Ana Maria juntas */}
          <img src="/familia/meninas-cordeiro.jpg"
            alt="" aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                     objectFit: "cover", objectPosition: "center top", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 1,
                        background: "linear-gradient(160deg, rgba(26,66,45,0.93) 0%, rgba(26,66,45,0.75) 100%)" }} />
          <div className="editorial-container relative" style={{ zIndex: 2 }}>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Worldschooling</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Sarah & Ana Maria</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="font-serif text-5xl text-primary/40">10</p>
                <h3 className="mt-2 font-serif text-2xl text-white">Sarah Hadassa</h3>
                <p className="mt-4 leading-relaxed" style={{ color: "rgba(248,247,241,0.7)" }}>
                  Nasceu dentro de uma família que já havia decidido não entregar a criação
                  ao sistema. Aprende português, inglês e espanhol. Estuda história real,
                  não a versão do livro didático. Vai chegar aos 18 anos com repertório
                  de mundo que poucos adultos têm.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="font-serif text-5xl text-primary/40">8</p>
                <h3 className="mt-2 font-serif text-2xl text-white">Ana Maria</h3>
                <p className="mt-4 leading-relaxed" style={{ color: "rgba(248,247,241,0.7)" }}>
                  A caçula que sente o que os outros passam rápido. Aprendeu a dormir
                  em barraca na chuva, a acordar sem sino e a ter medo e ir mesmo assim.
                  Vai crescer sabendo que o mundo não é um lugar para ter medo
                  — é um lugar para explorar.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/10 p-6 backdrop-blur-sm">
              <p className="font-serif text-lg italic text-white">
                "O objetivo não é forçá-las ao nomadismo para sempre. É arrancá-las da
                redoma para que, aos 18 anos, quando qualquer pessoa tentar empurrar
                uma 'verdade local e enviesada', elas tenham matéria-prima para discernir."
              </p>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ BLOCO 1 — VÍDEO YOUTUBE + REDES SOCIAIS ══════════ */}
        <motion.section {...fadeUp} className="w-full"
          style={{ background: "var(--color-forest-dark)" }}>
          <div className="editorial-container py-16">
            <p style={{ color: "var(--color-sunset-orange)", fontSize: "0.7rem",
                        letterSpacing: "0.3em", textTransform: "uppercase",
                        fontWeight: 700, marginBottom: "1rem" }}>
              Contagem regressiva · Partida
            </p>
            <h2 className="font-serif text-4xl md:text-5xl"
              style={{ color: "var(--color-cream)", marginBottom: "2rem" }}>
              A estrada começa<br />
              <span style={{ color: "var(--color-sunset-orange)", fontStyle: "italic" }}>em breve.</span>
            </h2>
          </div>

          <div style={{
            aspectRatio: "16/9",
            background: "var(--color-forest-dark)",
            display: "flex", alignItems: "center", justifyContent: "center",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            flexDirection: "column", gap: "2rem", padding: "3rem",
          }}>
            <p style={{
              fontSize: "0.65rem", fontWeight: 700,
              letterSpacing: "0.25em", textTransform: "uppercase",
              color: "rgba(233,116,28,0.7)",
            }}>
              A jornada começa em
            </p>
            <div style={{ display: "flex", gap: "3rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { value: countdown.days,    label: "dias" },
                { value: countdown.hours,   label: "horas" },
                { value: countdown.minutes, label: "min" },
                { value: countdown.seconds, label: "seg" },
              ].map(({ value, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    fontWeight: 300, color: "white", lineHeight: 1,
                  }}>
                    {String(value).padStart(2, "0")}
                  </div>
                  <div style={{
                    marginTop: "0.5rem", fontSize: "0.65rem",
                    textTransform: "uppercase", letterSpacing: "0.3em",
                    color: "rgba(255,255,255,0.3)",
                  }}>{label}</div>
                </div>
              ))}
            </div>
            <p style={{
              fontSize: "0.78rem", color: "rgba(255,255,255,0.35)",
              fontStyle: "italic", textAlign: "center",
            }}>
              Novembro 2026 · Filipinas → China → Tailândia → Camboja →
              Vietnã → Malásia → Indonésia → Índia → Uzbequistão →
              Egito → Jordânia → Marrocos
            </p>
          </div>

          <div className="editorial-container py-8">
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem",
                        letterSpacing: "0.2em", textTransform: "uppercase",
                        marginBottom: "1.5rem" }}>
              Siga a família Bonaparte
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {[
                { label: "YouTube",   href: "https://www.youtube.com/@FamíliaBonaparte",       icon: "▶" },
                { label: "Instagram", href: "https://www.instagram.com/familiabonaparte",      icon: "◈" },
                { label: "TikTok",    href: "https://www.tiktok.com/@familiabonaparteoficial", icon: "♪" },
                { label: "Email",     href: "mailto:familiabonaparteoficial@gmail.com",        icon: "✉" },
                { label: "Facebook",  href: "https://facebook.com/bonapartefamily",  icon: "f" },
                { label: "WhatsApp",  href: "https://wa.me/5563992428800",           icon: "✆" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem",
                           border: "1px solid rgba(255,255,255,0.15)",
                           padding: "0.6rem 1.25rem",
                           color: "rgba(255,255,255,0.7)",
                           fontSize: "0.82rem", fontWeight: 600,
                           textDecoration: "none", transition: "all 220ms ease" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-sunset-orange)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-sunset-orange)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ BLOCO 2 — ECOSSISTEMA VISUAL ══════════════════════ */}
        <motion.section {...fadeUp} className="editorial-container section-reveal py-14 md:py-24">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Universo Bonaparte</p>
          <h2 className="font-serif text-3xl mb-8">Explore o ecossistema</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ECO_LINKS.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ position: "relative", overflow: "hidden", borderRadius: "0.5rem",
                         display: "block", aspectRatio: "4/3", textDecoration: "none" }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1.06)";
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img src={link.image} alt={link.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover",
                           transition: "transform 600ms ease" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0,
                              background: "linear-gradient(to top, rgba(10,30,20,0.95) 0%, rgba(10,30,20,0.4) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, padding: "1.5rem" }}>
                  <p style={{ color: link.accent, fontSize: "0.65rem", fontWeight: 700,
                              letterSpacing: "0.2em", textTransform: "uppercase",
                              margin: "0 0 0.5rem" }}>
                    Acessar →
                  </p>
                  <h3 className="font-serif" style={{ color: "white", fontSize: "1.4rem",
                                                       margin: "0 0 0.4rem", lineHeight: 1.2 }}>
                    {link.label}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem",
                              margin: 0, lineHeight: 1.5 }}>
                    {link.sub}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* ══ BLOCO 3 — APOIE A EXPEDIÇÃO ═══════════════════════ */}
        <motion.section {...fadeUp} className="py-20"
          style={{ background: "var(--color-forest-dark)" }}>
          <div className="editorial-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Esquerda — texto */}
              <div className="order-1">
                <p style={{ color: "var(--color-sunset-orange)", fontSize: "0.7rem",
                            letterSpacing: "0.3em", textTransform: "uppercase",
                            fontWeight: 700, marginBottom: "1.25rem" }}>
                  Apoie a Jornada
                </p>
                <h2 className="font-serif"
                  style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-cream)",
                           lineHeight: 1.15, marginBottom: "1.25rem" }}>
                  Ajude a família Bonaparte<br />
                  <span style={{ color: "var(--color-sunset-orange)", fontStyle: "italic" }}>
                    a chegar em 12 países.
                  </span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75,
                            marginBottom: "2rem", maxWidth: "42ch" }}>
                  O rancho ainda não vendeu. A viagem está marcada. Cada contribuição
                  vai direto para passagens, hospedagem e educação das meninas na estrada.
                  Sem intermediários. Via PIX ou qualquer valor.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <PixCopyButton />
                  <a href="https://wa.me/5563992428800?text=Quero+apoiar+a+Expedi%C3%A7%C3%A3o+Bonaparte!"
                    target="_blank" rel="noopener noreferrer"
                    style={{ textAlign: "center", padding: "0.75rem",
                             border: "1px solid rgba(255,255,255,0.2)",
                             color: "rgba(255,255,255,0.7)", textDecoration: "none",
                             fontSize: "0.78rem", fontWeight: 600,
                             letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Apoiar via WhatsApp →
                  </a>
                </div>
              </div>
              {/* Direita — capa */}
              <div className="order-2 text-center">
                <img
                  src="https://casabonaparte.com.br/images/livros/fruto-proibido.jpg"
                  alt="O Fruto Proibido"
                  style={{ maxWidth: "260px", width: "100%",
                           boxShadow: "0 40px 80px rgba(0,0,0,0.6)", borderRadius: "2px" }}
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem",
                            marginTop: "1rem", fontStyle: "italic" }}>
                  Apoie e receba o manuscrito antes de qualquer pessoa.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ BLOCO 4 — SEJA MEMBRO ═════════════════════════════ */}
        <motion.section {...fadeUp} className="py-20 bg-background">
          <div className="editorial-container">
            <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
              <p style={{ color: "var(--color-forest-mid)", fontSize: "0.7rem",
                          letterSpacing: "0.3em", textTransform: "uppercase",
                          fontWeight: 700, marginBottom: "1.25rem" }}>
                Comunidade Bonaparte
              </p>
              <h2 className="font-serif"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.1,
                         marginBottom: "1.25rem" }}>
                Faça parte da jornada.<br />
                <span style={{ color: "var(--color-sunset-orange)", fontStyle: "italic" }}>
                  De perto. De verdade.
                </span>
              </h2>
              <p style={{ color: "var(--color-muted-foreground)", lineHeight: 1.75,
                          marginBottom: "2.5rem" }}>
                Receba atualizações exclusivas direto da estrada — bastidores,
                erros, descobertas e momentos que não aparecem nas redes.
                Uma comunidade pequena, intencionalmente.
              </p>

              {/* 3 planos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                  { nome: "Apoiador", valor: "R$ 9,90/mês",  cor: "var(--color-border)",        destaque: false,
                    beneficios: ["Journal completo", "Atualizações da viagem"],
                    waHref: "https://wa.me/5563992428800?text=Quero+ser+membro+Apoiador+da+Fam%C3%ADlia+Bonaparte+-+R%249%2C90%2Fm%C3%AAs" },
                  { nome: "Viajante", valor: "R$ 29,90/mês", cor: "var(--color-forest-mid)",    destaque: true,
                    beneficios: ["Tudo do Apoiador", "Bastidores exclusivos", "Lives mensais da estrada"],
                    waHref: "https://wa.me/5563992428800?text=Quero+ser+membro+Viajante+da+Fam%C3%ADlia+Bonaparte+-+R%2429%2C90%2Fm%C3%AAs" },
                  { nome: "Fundador", valor: "R$ 97/mês",    cor: "var(--color-sunset-orange)", destaque: false,
                    beneficios: ["Tudo do Viajante", "Acesso ao manuscrito", "Menção no livro Dominó"],
                    waHref: "https://wa.me/5563992428800?text=Quero+ser+membro+Fundador+da+Fam%C3%ADlia+Bonaparte+-+R%2497%2Fm%C3%AAs" },
                ].map(p => (
                  <div key={p.nome}
                    className={p.destaque ? "sm:scale-105 ring-2 ring-[var(--color-forest-mid)]" : ""}
                    style={{
                      border: `2px solid ${p.cor}`,
                      borderRadius: "0.5rem", padding: "1.5rem",
                      background: p.destaque ? "var(--color-forest-dark)" : "transparent",
                      color: p.destaque ? "var(--color-cream)" : "var(--color-foreground)",
                      textAlign: "left",
                      display: "flex", flexDirection: "column",
                    }}>
                    <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em",
                                textTransform: "uppercase", fontWeight: 700,
                                color: p.cor, marginBottom: "0.5rem" }}>
                      {p.nome}
                    </p>
                    <p className="font-serif" style={{ fontSize: "1.5rem", margin: "0 0 1rem" }}>
                      {p.valor}
                    </p>
                    {p.beneficios.map(b => (
                      <p key={b} style={{ fontSize: "0.78rem", margin: "0.35rem 0", opacity: 0.8 }}>
                        ✓ {b}
                      </p>
                    ))}
                    <a href={p.waHref} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: "block", marginTop: "auto",
                        textAlign: "center", padding: "0.75rem 1rem",
                        border: `1px solid ${p.cor}`,
                        color: p.destaque ? "var(--color-cream)" : p.cor,
                        fontSize: "0.72rem", fontWeight: 700,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        textDecoration: "none", transition: "all 220ms ease",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = p.cor;
                        (e.currentTarget as HTMLElement).style.color = p.destaque ? "var(--color-cream)" : "white";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = p.destaque ? "var(--color-cream)" : p.cor;
                      }}
                    >
                      Quero ser {p.nome} →
                    </a>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/5563992428800?text=Quero+ser+membro+da+Comunidade+Bonaparte!"
                target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-block",
                         background: "var(--color-sunset-orange)",
                         color: "white", padding: "1rem 2.5rem",
                         fontSize: "0.85rem", fontWeight: 700,
                         letterSpacing: "0.12em", textTransform: "uppercase",
                         textDecoration: "none" }}>
                Quero ser membro →
              </a>
              <p style={{ fontSize: "0.7rem", color: "var(--color-muted-foreground)",
                          marginTop: "1rem", fontStyle: "italic" }}>
                Via WhatsApp. Sem plataforma. Direto com a família.
              </p>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ BLOCO 5 — MURAL DE MENSAGENS ══════════════════════ */}
        <motion.section {...fadeUp} className="py-16 bg-card">
          <div className="editorial-container">
            <p style={{ color: "var(--color-forest-mid)", fontSize: "0.7rem",
                        letterSpacing: "0.3em", textTransform: "uppercase",
                        fontWeight: 700, marginBottom: "0.75rem" }}>
              Mural Bonaparte
            </p>
            <h2 className="font-serif" style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
              Deixe um recado para a família.
            </h2>
            <p style={{ color: "var(--color-muted-foreground)", marginBottom: "2rem", maxWidth: "48ch" }}>
              Uma palavra de apoio, uma pergunta, uma história parecida com a nossa.
              Lemos tudo. Respondemos quando a estrada deixa.
            </p>
            <div className="w-full md:max-w-[520px] flex flex-col gap-3">
              <textarea
                placeholder="Escreva sua mensagem aqui..."
                id="mural-msg"
                rows={4}
                style={{ width: "100%", padding: "1rem",
                         border: "1px solid var(--color-border)",
                         background: "var(--color-background)",
                         fontSize: "0.9rem", fontFamily: "inherit",
                         color: "var(--color-foreground)",
                         resize: "vertical", outline: "none" }}
              />
              <button
                onClick={() => {
                  const msg = (document.getElementById("mural-msg") as HTMLTextAreaElement)?.value;
                  if (msg?.trim()) {
                    window.open(
                      `https://wa.me/5563992428800?text=${encodeURIComponent("Mural Bonaparte: " + msg)}`,
                      "_blank"
                    );
                  }
                }}
                style={{ background: "var(--color-forest-mid)",
                         color: "white", padding: "0.9rem",
                         fontSize: "0.8rem", fontWeight: 700,
                         letterSpacing: "0.1em", textTransform: "uppercase",
                         border: "none", cursor: "pointer", fontFamily: "inherit" }}
              >
                Enviar mensagem →
              </button>
              <p style={{ fontSize: "0.68rem", color: "var(--color-muted-foreground)", fontStyle: "italic" }}>
                Você será redirecionado para o WhatsApp.
              </p>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ ACOMPANHE ═════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="section-reveal py-20"
          style={{ background: "var(--color-forest-dark)" }}>
          <div className="editorial-container text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary/60">Não perca nenhuma parada</p>
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              A jornada começa em breve
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed"
              style={{ color: "rgba(248,247,241,0.4)" }}>
              Acompanhe as 12 paradas pelo WhatsApp — ou explore as páginas do universo Bonaparte.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/5563992428800?text=Quero%20acompanhar%20a%20Expedi%C3%A7%C3%A3o%20Bonaparte!"
                target="_blank" rel="noopener noreferrer"
                className="rounded-sm bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition hover:opacity-90">
                Acompanhar no WhatsApp →
              </a>
              <Link href="/expedition">
                <a className="rounded-sm border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white/60 transition hover:border-primary hover:text-primary">
                  Ver o mapa
                </a>
              </Link>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ══ OS DEZ PRINCÍPIOS ═════════════════════════════════ */}
        <section style={{
          padding: "5rem 2rem",
          background: "rgba(26,66,45,0.3)",
          borderTop: "1px solid rgba(233,116,28,0.08)",
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{
              fontSize: "0.62rem", fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(233,116,28,0.6)", marginBottom: "0.75rem",
              textAlign: "center",
            }}>
              O código da Casa
            </p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700,
              color: "#F8F7F1", textAlign: "center", marginBottom: "3rem",
              fontStyle: "italic",
            }}>
              Os Dez Princípios
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}>
              {[
                { num: "01", titulo: "Diga a Verdade",             texto: "Mesmo quando ela custa caro. Especialmente quando ela custa caro." },
                { num: "02", titulo: "Pense por Si Mesmo",         texto: "Nenhuma instituição pode substituir sua responsabilidade de pensar." },
                { num: "03", titulo: "Proteja a Mesa",              texto: "Nenhuma conquista compensa a destruição daquilo que realmente importa." },
                { num: "04", titulo: "Esteja Presente",             texto: "A vida acontece onde sua atenção está. Proteja sua atenção." },
                { num: "05", titulo: "Honre o Corpo",               texto: "O corpo é a primeira casa da consciência. Cuide dele." },
                { num: "06", titulo: "Assuma Responsabilidade",     texto: "Quem deseja autoria deve aceitar responsabilidade." },
                { num: "07", titulo: "Coloque a Família Primeiro",  texto: "A família não é o que sobra depois do sucesso. É a razão dele." },
                { num: "08", titulo: "Aprenda com a Realidade",     texto: "A realidade tem prioridade sobre opiniões. Observe. Teste. Corrija." },
                { num: "09", titulo: "Deixe o Mundo Melhor",        texto: "Você recebeu uma herança. Deixe uma herança." },
                { num: "10", titulo: "Permaneça Desperto",           texto: "O despertar não é um evento. É uma prática diária." },
              ].map(p => (
                <div key={p.num} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(233,116,28,0.1)",
                  borderRadius: "10px", padding: "1.25rem 1.5rem",
                  display: "flex", gap: "1rem", alignItems: "flex-start",
                }}>
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 800,
                    color: "rgba(233,116,28,0.5)", letterSpacing: "0.1em",
                    minWidth: "24px", paddingTop: "2px",
                  }}>{p.num}</span>
                  <div>
                    <p style={{
                      fontSize: "0.85rem", fontWeight: 700,
                      color: "#E9741C", margin: "0 0 0.3rem",
                    }}>{p.titulo}</p>
                    <p style={{
                      fontSize: "0.78rem", color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.6, margin: 0,
                    }}>{p.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{
              textAlign: "center", marginTop: "2.5rem",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontStyle: "italic", fontSize: "0.95rem",
              color: "rgba(248,247,241,0.4)",
            }}>
              — Bíblia ALSHAM · Casa Bonaparte
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
