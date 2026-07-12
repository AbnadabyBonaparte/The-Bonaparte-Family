import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { countries, checkpoints, EXPEDITION_STATS, DEPARTURE_DATE } from "@/data/expedition";

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

// ── MAPA LEAFLET ───────────────────────────────────────────────
function ExpeditionMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    // Lazy-load Leaflet via CDN
    if (typeof window === "undefined" || mapInstance.current) return;

    const loadLeaflet = async () => {
      // Inject CSS
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Inject JS
      await new Promise<void>(resolve => {
        if ((window as any).L) { resolve(); return; }
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });

      const L = (window as any).L;
      if (!mapRef.current || mapInstance.current) return;

      // Map centered roughly between all points
      const map = L.map(mapRef.current, { scrollWheelZoom: false }).setView([20, 80], 2);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: "© OpenStreetMap · © CARTO",
        maxZoom: 19,
      }).addTo(map);

      // Route coordinates
      const coords = countries.map(c => [c.lat, c.lng]);

      // Draw route
      L.polyline(coords, {
        color: "oklch(0.55 0.12 130)",
        weight: 2,
        opacity: 0.6,
        dashArray: "6 4",
      }).addTo(map);

      // Markers
      countries.forEach((c, i) => {
        const icon = L.divIcon({
          className: "",
          html: `<div style="
            width:32px;height:32px;border-radius:50%;
            background:oklch(0.12 0.02 80);
            border:2px solid oklch(0.45 0.12 130);
            color:oklch(0.55 0.12 130);
            display:flex;align-items:center;justify-content:center;
            font-size:11px;font-weight:700;font-family:serif;
            box-shadow:0 2px 8px rgba(0,0,0,0.5);
          ">${i + 1}</div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        L.marker([c.lat, c.lng], { icon })
          .bindPopup(`
            <div style="font-family:serif;padding:4px">
              <div style="font-size:22px">${c.flag}</div>
              <strong style="font-size:14px">${c.name}</strong><br/>
              <small style="color:#888">${c.window}</small><br/>
              <p style="font-size:12px;margin-top:4px">${c.goal}</p>
            </div>
          `, { maxWidth: 220 })
          .addTo(map);
      });

      // Start marker (Brasil)
      const startIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:36px;height:36px;border-radius:50%;
          background:oklch(0.45 0.12 130);
          color:oklch(0.12 0.02 80);
          display:flex;align-items:center;justify-content:center;
          font-size:18px;
          box-shadow:0 2px 12px rgba(0,0,0,0.6);
        ">🇧🇷</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });
      L.marker([-15.7942, -47.8822], { icon: startIcon })
        .bindPopup("<strong>Brasil · Ponto de partida</strong><br/><small>Previsão · Novembro 2026</small>")
        .addTo(map);

      mapInstance.current = map;
    };

    loadLeaflet();
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: "520px", width: "100%", borderRadius: "0.5rem", overflow: "hidden" }}
    />
  );
}

// ── MAIN ──────────────────────────────────────────────────────
export default function Expedition() {
  const countdown = useCountdown(DEPARTURE_DATE);

  return (
    <div className="page-shell">
      <Header />
      <main>

        {/* ══ HERO — composição galeria em camadas ══════════════ */}
        <PageHero
          eyebrow={`${EXPEDITION_STATS.origin} → ${EXPEDITION_STATS.firstDestination}`}
          title="Expedição Bonaparte"
          accent="2026 – 2027"
          subtitle={`${EXPEDITION_STATS.months} meses · ${EXPEDITION_STATS.countries} países · ${EXPEDITION_STATS.continents} continentes`}
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
                  <div className="font-serif text-4xl font-light md:text-5xl"
                    style={{ color: "var(--color-cream)" }}>
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

        {/* ══ MAPA INTERATIVO ═══════════════════════════════════ */}
        <motion.section {...fadeUp} className="editorial-container py-16">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Rota da jornada</p>
          <h2 className="mb-8 font-serif text-4xl">O mapa da expedição</h2>
          <ExpeditionMap />
          <p className="mt-4 text-xs text-muted-foreground">
            Clique em cada marcador para ver o país, período e objetivo da parada.
          </p>
        </motion.section>

        {/* ══ TIMELINE ══════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="bg-card py-16">
          <div className="editorial-container">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">13 meses</p>
            <h2 className="mb-10 font-serif text-4xl">A rota passo a passo</h2>
            <div className="relative space-y-0">
              {/* Linha vertical */}
              <div className="absolute left-5 top-0 h-full w-0.5 bg-border md:left-8" />
              {countries.map((c, i) => (
                <div key={c.name} className="relative flex gap-8 pb-10 pl-14 md:pl-20">
                  {/* Número */}
                  <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background font-serif text-sm text-primary md:left-3">
                    {i + 1}
                  </div>
                  {/* Conteúdo */}
                  <div className="flex-1 rounded-lg border border-border bg-background p-5 transition hover:border-primary">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-primary">{c.window}</p>
                        <h3 className="mt-1 font-serif text-2xl">
                          {c.flag} {c.name}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{c.goal}</p>
                      </div>
                      <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                        {c.continent}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

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
