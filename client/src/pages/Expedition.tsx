import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { countries, EXPEDITION_STATS, DEPARTURE_DATE } from "@/data/expedition";
import { COLECAO_EXPEDICAO, BAZAR_URL, BAZAR_AFFILIATE_NOTE } from "@/data/bazar";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

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

// ── ROTEIRO EXPLORER — cada clique num destino abre um roteiro ──
// Não é card de chatbot: foto real do destino + língua + curiosidade + o porquê
// da família (o campo `goal`, honesto). Cada clique é uma descoberta.
function RoteiroExplorer() {
  const [idx, setIdx] = useState(0);
  const active = countries[idx];
  const [imgFailed, setImgFailed] = useState(false);

  const select = (i: number) => { setIdx(i); setImgFailed(false); };

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      {/* Lista de destinos — a ordem da travessia */}
      <ol className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {countries.map((c, i) => {
          const isActive = i === idx;
          return (
            <li key={c.name} className="shrink-0 lg:shrink">
              <button
                onClick={() => select(i)}
                aria-pressed={isActive}
                className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition ${
                  isActive
                    ? "border-primary bg-card"
                    : "border-border bg-background hover:border-primary/60"
                }`}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-serif text-sm"
                  style={
                    isActive
                      ? { background: "var(--color-verde)", color: "var(--color-papel)" }
                      : { border: "1px solid var(--color-border)", color: "var(--color-couro)" }
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-serif text-base text-foreground">
                    {c.flag} {c.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">{c.window}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Roteiro do destino selecionado */}
      <motion.article
        key={active.name}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl border border-border bg-card"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/7]" style={{ background: "var(--color-verde)" }}>
          {!imgFailed ? (
            <img
              src={active.image}
              alt={`${active.name} — destino da expedição`}
              loading="lazy"
              decoding="async"
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-5xl opacity-40" aria-hidden="true">{active.flag}</span>
            </div>
          )}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(to top, color-mix(in oklab, var(--color-tinta) 82%, transparent), transparent 55%)" }}
          />
          <div className="absolute bottom-0 left-0 p-5 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--color-gold)" }}>
              Parada {String(idx + 1).padStart(2, "0")} · {active.continent}
            </p>
            <h3 className="mt-1 font-serif text-3xl md:text-4xl" style={{ color: "var(--color-papel)" }}>
              {active.flag} {active.name}
            </h3>
          </div>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-3 md:p-8">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary">Quando</p>
            <p className="mt-1 font-serif text-lg text-foreground">{active.window}</p>
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary">Língua</p>
            <p className="mt-1 font-serif text-lg text-foreground">{active.language}</p>
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary">Curiosidade</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{active.curiosity}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary">Por que a família vai</p>
            <p className="mt-1 font-serif text-xl leading-relaxed text-foreground">{active.goal}</p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

// ── MAPA LEAFLET — re-skin Paleta Família (tiles claros, rota ouro) ──
function ExpeditionMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || mapInstance.current) return;

    const loadLeaflet = async () => {
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }
      await new Promise<void>(resolve => {
        if ((window as any).L) { resolve(); return; }
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });

      const L = (window as any).L;
      if (!mapRef.current || mapInstance.current) return;

      // Cores lidas dos tokens da Paleta Família (SSOT) — nada de hex cravado.
      const css = getComputedStyle(document.documentElement);
      const tok = (name: string) => css.getPropertyValue(name).trim();
      const gold = tok("--color-gold");
      const verde = tok("--color-verde");
      const papel = tok("--color-papel");
      const tinta = tok("--color-tinta");
      const couro = tok("--color-couro");

      const map = L.map(mapRef.current, { scrollWheelZoom: false }).setView([20, 80], 2);

      // Tiles claros (Carto Voyager) — pele da Família, nunca obsidian.
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: "© OpenStreetMap · © CARTO",
        maxZoom: 19,
      }).addTo(map);

      L.polyline(countries.map(c => [c.lat, c.lng]), {
        color: gold, weight: 2.5, opacity: 0.85, dashArray: "6 5",
      }).addTo(map);

      countries.forEach((c, i) => {
        const icon = L.divIcon({
          className: "",
          html: `<div style="
            width:30px;height:30px;border-radius:50%;
            background:${verde};border:2px solid ${gold};color:${papel};
            display:flex;align-items:center;justify-content:center;
            font-size:11px;font-weight:700;font-family:serif;
            box-shadow:0 2px 8px rgba(26,24,20,0.35);
          ">${i + 1}</div>`,
          iconSize: [30, 30], iconAnchor: [15, 15],
        });
        L.marker([c.lat, c.lng], { icon })
          .bindPopup(`<div style="font-family:serif;padding:2px">
            <div style="font-size:20px">${c.flag}</div>
            <strong style="font-size:14px">${c.name}</strong><br/>
            <small style="color:${couro}">${c.window}</small>
          </div>`, { maxWidth: 200 })
          .addTo(map);
      });

      const startIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:36px;height:36px;border-radius:50%;
          background:${gold};color:${tinta};
          display:flex;align-items:center;justify-content:center;font-size:18px;
          box-shadow:0 2px 12px rgba(26,24,20,0.4);
        ">🇧🇷</div>`,
        iconSize: [36, 36], iconAnchor: [18, 18],
      });
      L.marker([-15.7942, -47.8822], { icon: startIcon })
        .bindPopup("<strong>Brasil · Ponto de partida</strong><br/><small>Previsão · Novembro 2026</small>")
        .addTo(map);

      mapInstance.current = map;
    };

    loadLeaflet();
    return () => {
      if (mapInstance.current) { mapInstance.current.remove(); mapInstance.current = null; }
    };
  }, []);

  return (
    <div ref={mapRef} style={{ height: "440px", width: "100%", borderRadius: "0.75rem", overflow: "hidden", border: "1px solid var(--color-border)" }} />
  );
}

// ── GALERIA DO BAZAR — prominente, "na cara do cliente" ────────
// Puxa do Bazar central (Lei do Bazar: só exibe, sem preço à mão). Card → explicação
// do porquê do produto (o campo `note`). Disclosure de afiliado visível.
function ExpeditionGear() {
  return (
    <motion.section {...fadeUp} className="py-16 md:py-24" style={{ background: "var(--color-verde)" }}>
      <div className="editorial-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--color-gold)" }}>
            {COLECAO_EXPEDICAO.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "var(--color-papel)" }}>
            O que a família leva na estrada
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed" style={{ color: "color-mix(in oklab, var(--color-papel) 72%, transparent)" }}>
            A curadoria testada na travessia — mochila, barraca, energia. Cada peça abre no Bazar,
            onde o produto certo e o preço vivem.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COLECAO_EXPEDICAO.categories.map(cat => (
            <a
              key={cat.id}
              href={COLECAO_EXPEDICAO.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl p-6 transition"
              style={{
                background: "color-mix(in oklab, var(--color-papel) 8%, transparent)",
                border: "1px solid color-mix(in oklab, var(--color-gold) 26%, transparent)",
              }}
            >
              <h3 className="font-serif text-xl" style={{ color: "var(--color-papel)" }}>{cat.label}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--color-papel) 66%, transparent)" }}>
                {cat.note}
              </p>
              <span
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em]"
                style={{ color: "var(--color-gold)" }}
              >
                Ver no Bazar
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <a
            href={BAZAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em]"
            style={{ background: "var(--color-gold)", color: "var(--color-tinta)" }}
          >
            Entrar no Bazar Bonaparte →
          </a>
          <p className="text-xs" style={{ color: "color-mix(in oklab, var(--color-papel) 55%, transparent)" }}>
            {BAZAR_AFFILIATE_NOTE}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

// ── MAIN ──────────────────────────────────────────────────────
export default function Expedition() {
  const countdown = useCountdown(DEPARTURE_DATE);

  return (
    <div className="page-shell">
      <Header />
      <main>
        {/* ══ HERO — atmosfera PRÓPRIA da expedição ══════════════ */}
        <PageHero
          eyebrow={`${EXPEDITION_STATS.origin} → ${EXPEDITION_STATS.firstDestination}`}
          title="Expedição Bonaparte"
          accent="2026 – 2027"
          subtitle={`${EXPEDITION_STATS.months} meses · ${EXPEDITION_STATS.countries} países · ${EXPEDITION_STATS.continents} continentes`}
          image="/brand/atmosphere-expedicao.webp"
          back={false}
        >
          <div className="inline-flex flex-col items-center rounded-2xl border px-6 py-5 backdrop-blur-md md:px-10"
            style={{ borderColor: "color-mix(in oklab, var(--color-cream) 14%, transparent)",
                     background: "color-mix(in oklab, var(--color-obsidian) 45%, transparent)" }}>
            <p className="mb-4 text-[0.62rem] uppercase tracking-[0.3em]"
              style={{ color: "color-mix(in oklab, var(--color-sunset-orange) 82%, transparent)" }}>
              Partida em
            </p>
            <div className="flex items-center justify-center gap-6 md:gap-9">
              {[
                { v: countdown.days, l: "dias" },
                { v: countdown.hours, l: "h" },
                { v: countdown.minutes, l: "min" },
                { v: countdown.seconds, l: "seg" },
              ].map(({ v, l }) => (
                <div key={l} className="text-center">
                  <div className="font-serif text-4xl font-light md:text-5xl" style={{ color: "var(--color-cream)" }}>
                    {String(v).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[0.6rem] uppercase tracking-widest"
                    style={{ color: "color-mix(in oklab, var(--color-cream) 40%, transparent)" }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageHero>

        {/* ══ ROTEIRO EXPLORER — cada clique, uma descoberta ═════ */}
        <motion.section {...fadeUp} className="editorial-container py-16 md:py-24">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Cada parada, um mundo</p>
          <h2 className="mb-3 font-serif text-4xl md:text-5xl">O roteiro da travessia</h2>
          <p className="mb-10 max-w-2xl text-muted-foreground leading-relaxed">
            Doze países, treze meses. Clique em cada destino e descubra o que espera a família ali —
            a língua, uma curiosidade, e por que aquele lugar entrou na rota.
          </p>
          <RoteiroExplorer />
        </motion.section>

        {/* ══ MAPA DA ROTA ══════════════════════════════════════ */}
        <motion.section {...fadeUp} className="bg-card py-16 md:py-20">
          <div className="editorial-container">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Rota da jornada</p>
            <h2 className="mb-8 font-serif text-3xl md:text-4xl">Do Brasil ao Marrocos, por terra e mar</h2>
            <ExpeditionMap />
            <p className="mt-4 text-xs text-muted-foreground">
              A linha dourada é a ordem da travessia. Clique em cada marcador para o país e o período.
            </p>
          </div>
        </motion.section>

        {/* ══ GALERIA DO BAZAR — prominente ═════════════════════ */}
        <ExpeditionGear />

        {/* ══ ALFREDO ═══════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="editorial-container py-16">
          <div className="rounded-xl border border-border bg-card p-8 md:p-12">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Fase 2 · Condicional</p>
            <h2 className="font-serif text-4xl">Alfredo</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              O Mercedes Benz 1982 que a família está reformando para se tornar o quinto membro da família.
              Casa, estúdio, escola e base logística no mesmo corpo. Alfredo não vai na Fase 1 —
              a Ásia é de mochila. Mas já existe, já tem nome, e já tem destino.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Mercedes Benz 1982", "O veículo"],
                ["Casa · Estúdio · Escola", "Tudo em um"],
                ["Fase 2 — América do Sul / Europa", "Próximo destino"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-lg border border-border bg-background p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
                  <p className="mt-1 font-serif text-lg">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ══ WORLDSCHOOLING ════════════════════════════════════ */}
        <motion.section
          {...fadeUp}
          className="film-grain relative overflow-hidden py-20"
          style={{ background: "var(--color-obsidian)" }}
        >
          <div className="pointer-events-none absolute inset-0"
            style={{ background:
              "radial-gradient(60% 55% at 12% 20%, color-mix(in oklab, var(--color-forest-mid) 34%, transparent), transparent 70%)," +
              "radial-gradient(55% 50% at 90% 85%, color-mix(in oklab, var(--color-sunset-orange) 22%, transparent), transparent 72%)" }} />
          <div className="editorial-container relative z-[4]">
            <p className="mb-2 text-xs uppercase tracking-[0.3em]"
              style={{ color: "color-mix(in oklab, var(--color-sunset-orange) 80%, transparent)" }}>
              Sarah &amp; Ana Maria
            </p>
            <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "var(--color-cream)" }}>
              Worldschooling<br />
              <span className="italic"
                style={{ backgroundImage: "linear-gradient(100deg, var(--color-forest-mid), color-mix(in oklab, var(--color-sunset-orange) 85%, var(--color-cream)))",
                         WebkitBackgroundClip: "text", backgroundClip: "text",
                         WebkitTextFillColor: "transparent", color: "transparent" }}>
                em ação
              </span>
            </h2>
            <p className="mt-4 max-w-2xl font-sans font-light leading-relaxed"
              style={{ color: "color-mix(in oklab, var(--color-cream) 55%, transparent)" }}>
              Cada país é uma sala de aula. História no Egito. Biodiversidade na Indonésia.
              Gastronomia no Vietnã. Civilização na Índia. Nenhum livro didático consegue
              substituir o choque cultural real de chegar num lugar e ter que entender como viver.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {["História viva", "Idiomas reais", "Ciências no campo", "Arte e cultura"].map(item => (
                <div key={item} className="rounded-xl border p-4 text-sm"
                  style={{ borderColor: "color-mix(in oklab, var(--color-cream) 12%, transparent)",
                           background: "color-mix(in oklab, var(--color-cream) 5%, transparent)",
                           color: "color-mix(in oklab, var(--color-cream) 72%, transparent)" }}>
                  <span style={{ color: "var(--color-sunset-orange)" }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ══ CTA ═══════════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="editorial-container py-20 text-center">
          <h2 className="font-serif text-3xl">Acompanhe cada parada</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            12 países. 13 meses. Uma família aprendendo o mundo em tempo real.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5563992428800?text=Quero%20acompanhar%20a%20Expedi%C3%A7%C3%A3o%20Bonaparte!"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition hover:opacity-90"
            >
              Acompanhar no WhatsApp →
            </a>
            <a
              href="https://casabonaparte.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border px-8 py-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              Hub Bonaparte →
            </a>
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}
