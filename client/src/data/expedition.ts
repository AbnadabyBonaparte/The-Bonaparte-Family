// ============================================================
// EXPEDIÇÃO BONAPARTE — Dados Oficiais
// Partida: 03/11/2026 → Cebu, Filipinas
// 13 meses · 12 países · Fase 1 (mochila)
// Fase 2 (motorhome Alfredo) — condicional pós-Ásia
// ============================================================

export interface Country {
  name: string;
  flag: string;
  lat: number;
  lng: number;
  window: string;
  goal: string;
  continent: string;
}

export interface Checkpoint {
  country: string;
  flag: string;
  window: string;
  goal: string;
  status: "future" | "current" | "done";
}

export const DEPARTURE_DATE = new Date("2026-11-03T00:00:00");

export const countries: Country[] = [
  { name: "Filipinas",    flag: "🇵🇭", lat: 12.8797,  lng: 121.7740, window: "Nov–Dez 2026", goal: "Imersão cultural e adaptação da rotina móvel", continent: "Ásia" },
  { name: "China",        flag: "🇨🇳", lat: 35.8617,  lng: 104.1954, window: "Jan 2027",      goal: "Civilização milenar e mandarim básico", continent: "Ásia" },
  { name: "Tailândia",    flag: "🇹🇭", lat: 15.8700,  lng: 100.9925, window: "Fev 2027",      goal: "Base logística e produção audiovisual", continent: "Ásia" },
  { name: "Camboja",      flag: "🇰🇭", lat: 12.5657,  lng: 104.9910, window: "Mar 2027",      goal: "Angkor Wat e história das civilizações khmer", continent: "Ásia" },
  { name: "Vietnã",       flag: "🇻🇳", lat: 14.0583,  lng: 108.2772, window: "Abr 2027",      goal: "História, gastronomia e aulas de campo", continent: "Ásia" },
  { name: "Malásia",      flag: "🇲🇾", lat: 4.2105,   lng: 101.9758, window: "Mai 2027",      goal: "Diversidade cultural e floresta tropical", continent: "Ásia" },
  { name: "Indonésia",    flag: "🇮🇩", lat: -0.7893,  lng: 113.9213, window: "Jun 2027",      goal: "Arquipélago, Bali e educação ambiental", continent: "Ásia" },
  { name: "Índia",        flag: "🇮🇳", lat: 20.5937,  lng: 78.9629,  window: "Jul 2027",      goal: "Espiritualidade, artes e pesquisa documental", continent: "Ásia" },
  { name: "Uzbequistão",  flag: "🇺🇿", lat: 41.3775,  lng: 64.5853,  window: "Ago 2027",      goal: "Rota da Seda e civilizações islâmicas", continent: "Ásia Central" },
  { name: "Egito",        flag: "🇪🇬", lat: 26.8206,  lng: 30.8025,  window: "Set 2027",      goal: "Civilizações antigas e conteúdo educacional", continent: "África" },
  { name: "Jordânia",     flag: "🇯🇴", lat: 30.5852,  lng: 36.2384,  window: "Out 2027",      goal: "Petra, história bíblica e arqueologia", continent: "Oriente Médio" },
  { name: "Marrocos",     flag: "🇲🇦", lat: 31.7917,  lng: -7.0926,  window: "Nov 2027",      goal: "Fechamento narrativo da temporada 1", continent: "África" },
];

export const checkpoints: Checkpoint[] = countries.map((c, i) => ({
  country: c.name,
  flag: c.flag,
  window: c.window,
  goal: c.goal,
  status: "future" as const,
}));

export const EXPEDITION_STATS = {
  months: 13,
  countries: 12,
  continents: 4,
  departure: "03 de Novembro de 2026",
  origin: "Aragarças, Goiás, Brasil",
  firstDestination: "Cebu, Filipinas",
};
