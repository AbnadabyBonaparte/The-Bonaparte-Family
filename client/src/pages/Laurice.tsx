import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── helpers ────────────────────────────────────────────────
function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function weekKey() {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  return monday.toISOString().slice(0, 10);
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  const months = [
    "Jan","Fev","Mar","Abr","Mai","Jun",
    "Jul","Ago","Set","Out","Nov","Dez",
  ];
  return `${d} de ${months[parseInt(m) - 1]} de ${y}`;
}

function daysUntilExpedition() {
  const departure = new Date("2026-11-03");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.max(
    0,
    Math.ceil((departure.getTime() - today.getTime()) / 86400000)
  );
}

// ─── task definitions ───────────────────────────────────────
const DAILY = [
  { id: "video",    emoji: "🎥", label: "Gravei 1 vídeo hoje (30 a 60 segundos)" },
  { id: "enviou",   emoji: "📱", label: "Mandei para o Aby no WhatsApp" },
  { id: "treino",   emoji: "💪", label: "Fiz o treino com a família" },
  { id: "duolingo", emoji: "📚", label: "As meninas fizeram Duolingo" },
  { id: "momento",  emoji: "✨", label: "Registrei algo especial do dia" },
];

const WEEKLY = [
  { id: "instagram", emoji: "📸", label: "Postei 1 foto ou vídeo no Instagram" },
  { id: "story",     emoji: "🌟", label: "Fiz pelo menos 1 Story esta semana" },
  { id: "audio",     emoji: "🎙️", label: "Mandei vídeo ou áudio para alguém próximo" },
];

const SOCIAL_PLAN = [
  { day: "Segunda", theme: "Treino da família ao sol",       tip: "Filme o treino de manhã. Pode ser só 15 segundos." },
  { day: "Terça",   theme: "Educação das meninas",           tip: "Mostre uma aula, uma descoberta, uma frase engraçada." },
  { day: "Quarta",  theme: "Preparativos da expedição",      tip: "Organize uma mala, abra um mapa, olhe os passaportes." },
  { day: "Quinta",  theme: "Aby trabalhando ou tocando",     tip: "Filme ele no violão ou no notebook. Sem falar nada." },
  { day: "Sexta",   theme: "Momento favorito da semana",     tip: "O que ficou na memória? Uma frase, uma foto, um riso." },
  { day: "Sábado",  theme: "Família toda reunida",           tip: "Almoço, caminhada, jogar juntos. O que vier." },
  { day: "Domingo", theme: "Reflexão ou natureza",           tip: "Pôr do sol, pasto, silêncio. Não precisa de palavra." },
];

// ─── feedback ───────────────────────────────────────────────
function feedbackMsg(pct: number): string {
  if (pct === 100) return "Perfeita hoje. 🏆";
  if (pct >= 80)   return "Quase lá. Um passo mais. 💛";
  if (pct >= 60)   return "Boa! Ainda dá tempo hoje. ✌️";
  if (pct >= 40)   return "Começou bem. Continua! 🌱";
  if (pct > 0)     return "Um começo é um começo. 👣";
  return "O dia ainda está aqui. Vamos? ☀️";
}

// ─── localStorage helpers ───────────────────────────────────
function loadDay(key: string): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(`laurice-day-${key}`);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}
function saveDay(key: string, state: Record<string, boolean>) {
  try { localStorage.setItem(`laurice-day-${key}`, JSON.stringify(state)); }
  catch { /* ignore */ }
}
function loadWeek(key: string): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(`laurice-week-${key}`);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}
function saveWeek(key: string, state: Record<string, boolean>) {
  try { localStorage.setItem(`laurice-week-${key}`, JSON.stringify(state)); }
  catch { /* ignore */ }
}

// ─── progress ring ──────────────────────────────────────────
function Ring({ pct, label }: { pct: number; label: string }) {
  const r = 44;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const color = pct === 100 ? "var(--primary)" : "var(--accent)";
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" aria-label={`${Math.round(pct)}% ${label}`}>
      <circle cx="60" cy="60" r={r} fill="none" stroke="var(--border)" strokeWidth="8" />
      <circle
        cx="60" cy="60" r={r} fill="none"
        stroke={color} strokeWidth="8"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
      <text x="60" y="55" textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--foreground)">
        {Math.round(pct)}%
      </text>
      <text x="60" y="72" textAnchor="middle" fontSize="10" fill="var(--muted-foreground)">
        {label}
      </text>
    </svg>
  );
}

// ─── task button ────────────────────────────────────────────
function TaskBtn({
  emoji, label, done, onToggle,
}: { emoji: string; label: string; done: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: "flex", alignItems: "center", gap: "1rem",
        padding: "1rem 1.1rem",
        border: `1.5px solid ${done ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 10,
        background: done ? "var(--secondary)" : "var(--card)",
        cursor: "pointer", textAlign: "left",
        transition: "all 0.2s", width: "100%",
      }}
    >
      <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{emoji}</span>
      <span style={{
        flex: 1, fontSize: "0.9rem",
        color: done ? "var(--foreground)" : "var(--foreground)",
        textDecoration: done ? "line-through" : "none",
        lineHeight: 1.4,
      }}>
        {label}
      </span>
      <span style={{
        width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
        background: done ? "var(--accent)" : "none",
        border: done ? "none" : "1.5px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {done && <span style={{ color: "var(--color-cream)", fontSize: 13 }}>✓</span>}
      </span>
    </button>
  );
}

// ─── main page ──────────────────────────────────────────────
export default function Laurice() {
  const dKey = todayKey();
  const wKey = weekKey();

  const [dayTasks,  setDayTasks]  = useState<Record<string, boolean>>(() => loadDay(dKey));
  const [weekTasks, setWeekTasks] = useState<Record<string, boolean>>(() => loadWeek(wKey));
  const [tab, setTab] = useState<"hoje" | "semana" | "social">("hoje");

  const days    = daysUntilExpedition();
  const dayDone = DAILY.filter(t => dayTasks[t.id]).length;
  const dayPct  = Math.round((dayDone / DAILY.length) * 100);
  const wkDone  = WEEKLY.filter(t => weekTasks[t.id]).length;
  const wkPct   = Math.round((wkDone / WEEKLY.length) * 100);

  useEffect(() => { saveDay(dKey, dayTasks); },  [dayTasks,  dKey]);
  useEffect(() => { saveWeek(wKey, weekTasks); }, [weekTasks, wKey]);

  const s: Record<string, React.CSSProperties> = {
    shell:   { maxWidth: 480, margin: "0 auto", padding: "1.5rem 1rem 4rem" },
    hdr:     { textAlign: "center", marginBottom: "2rem" },
    eyebrow: { fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--muted-foreground)", marginBottom: "0.5rem", fontWeight: 600 },
    h1:      { fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "var(--foreground)", margin: 0 },
    sub:     { color: "var(--muted-foreground)", fontSize: "0.9rem", marginTop: "0.4rem" },
    pill:    { marginTop: "1.25rem", background: "var(--color-forest-dark)", borderRadius: 10, padding: "0.75rem 1.25rem", display: "inline-block" },
    tabs:    { display: "flex", borderBottom: "1.5px solid var(--border)", marginBottom: "1.5rem" },
    scoreBox:{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.5rem", background: "var(--secondary)", borderRadius: 12, padding: "1.25rem" },
    tasks:   { display: "flex", flexDirection: "column" as const, gap: "0.6rem" },
    win:     { marginTop: "1.25rem", background: "var(--color-forest-dark)", borderRadius: 10, padding: "1rem 1.25rem", textAlign: "center" as const },
    tip:     { background: "var(--secondary)", borderRadius: 10, padding: "1rem 1.25rem" },
    label:   { fontSize: "0.8rem", color: "var(--muted-foreground)", letterSpacing: "0.1em", textTransform: "uppercase" as const, fontWeight: 600, marginBottom: "0.5rem" },
    dayCard: { border: "1.5px solid var(--border)", borderRadius: 10, padding: "0.9rem 1rem", background: "var(--card)", marginBottom: "0.6rem" },
    cross:   { display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.4rem" },
  };

  return (
    <div className="page-shell">
      <Header />
      <main style={s.shell}>

        {/* ── header ── */}
        <div style={s.hdr}>
          <div style={s.eyebrow}>Família Bonaparte</div>
          <h1 style={s.h1}>Painel da Laurice 💛</h1>
          <p style={s.sub}>{formatDate(dKey)}</p>
          <div style={s.pill}>
            <span style={{ color: "var(--accent)", fontSize: "1.6rem", fontWeight: 700 }}>{days}</span>
            <span style={{ color: "var(--color-cream)", fontSize: "0.85rem", marginLeft: "0.5rem", opacity: 0.75 }}>
              dias para Cebu
            </span>
          </div>
        </div>

        {/* ── tabs ── */}
        <div style={s.tabs}>
          {(["hoje", "semana", "social"] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1, padding: "0.7rem 0",
                fontSize: "0.85rem", fontWeight: 600,
                letterSpacing: "0.08em",
                border: "none", background: "none", cursor: "pointer",
                borderBottom: tab === t ? "2.5px solid var(--accent)" : "2.5px solid transparent",
                color: tab === t ? "var(--foreground)" : "var(--muted-foreground)",
                transition: "all 0.2s",
              }}
            >
              {t === "hoje" ? "Hoje" : t === "semana" ? "Semana" : "Redes"}
            </button>
          ))}
        </div>

        {/* ── TODAY ── */}
        {tab === "hoje" && (
          <div>
            <div style={s.scoreBox}>
              <Ring pct={dayPct} label="hoje" />
              <div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--foreground)" }}>
                  {dayDone} de {DAILY.length} tarefas
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", marginTop: "0.3rem" }}>
                  {feedbackMsg(dayPct)}
                </div>
              </div>
            </div>
            <div style={s.tasks}>
              {DAILY.map(t => (
                <TaskBtn
                  key={t.id} emoji={t.emoji} label={t.label}
                  done={!!dayTasks[t.id]}
                  onToggle={() => setDayTasks(p => ({ ...p, [t.id]: !p[t.id] }))}
                />
              ))}
            </div>
            {dayDone === DAILY.length && (
              <div style={s.win}>
                <div style={{ fontSize: "1.5rem" }}>🏆</div>
                <div style={{ color: "var(--accent)", fontWeight: 700, marginTop: "0.25rem" }}>Dia completo!</div>
                <div style={{ color: "var(--color-cream)", opacity: 0.6, fontSize: "0.8rem", marginTop: "0.2rem" }}>
                  Você registrou a família hoje. Isso conta.
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── WEEK ── */}
        {tab === "semana" && (
          <div>
            <div style={s.scoreBox}>
              <Ring pct={wkPct} label="semana" />
              <div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--foreground)" }}>
                  {wkDone} de {WEEKLY.length} desta semana
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", marginTop: "0.3rem" }}>
                  Semana de {formatDate(wKey)}
                </div>
              </div>
            </div>
            <div style={s.tasks}>
              {WEEKLY.map(t => (
                <TaskBtn
                  key={t.id} emoji={t.emoji} label={t.label}
                  done={!!weekTasks[t.id]}
                  onToggle={() => setWeekTasks(p => ({ ...p, [t.id]: !p[t.id] }))}
                />
              ))}
            </div>
            <div style={{ ...s.tip, marginTop: "1.5rem" }}>
              <div style={s.label}>Lembrete</div>
              <p style={{ fontSize: "0.88rem", color: "var(--foreground)", lineHeight: 1.6, margin: 0 }}>
                Essas tarefas <strong>reiniciam toda segunda-feira</strong> automaticamente.
                Não tem acúmulo. Cada semana é uma semana nova.
              </p>
            </div>
          </div>
        )}

        {/* ── SOCIAL ── */}
        {tab === "social" && (
          <div>
            <div style={{ background: "var(--color-forest-dark)", borderRadius: 10, padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
              <div style={{ color: "var(--accent)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
                O plano
              </div>
              <p style={{ color: "var(--color-cream)", fontSize: "0.88rem", lineHeight: 1.6, margin: "0.4rem 0 0" }}>
                Uma coisa por dia. Sem pressão. Você aparece quando quiser e como quiser.
              </p>
            </div>

            {SOCIAL_PLAN.map((item, i) => (
              <div key={i} style={s.dayCard}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.3rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
                    {item.day}
                  </span>
                  <span style={{ fontSize: "0.75rem", background: "var(--secondary)", color: "var(--muted-foreground)", padding: "2px 8px", borderRadius: 20 }}>
                    opcional
                  </span>
                </div>
                <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.25rem" }}>
                  {item.theme}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>
                  {item.tip}
                </div>
              </div>
            ))}

            <div style={s.tip}>
              <div style={s.label}>O que você NÃO precisa fazer</div>
              {[
                "Não precisa ter filtro",
                "Não precisa de legenda perfeita",
                "Não precisa aparecer se não quiser",
                "Não precisa postar todo dia",
                "Não precisa entender de redes sociais",
              ].map((r, i) => (
                <div key={i} style={s.cross}>
                  <span style={{ color: "var(--accent)", fontSize: "0.8rem", marginTop: 2, flexShrink: 0 }}>✕</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--foreground)", lineHeight: 1.5 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
