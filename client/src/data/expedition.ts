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
  /** língua falada (fato) */
  language: string;
  /** uma curiosidade real do destino (fato verificável, nada inventado) */
  curiosity: string;
  /** foto real do destino (Unsplash — degrada em silêncio se faltar) */
  image: string;
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
  { name: "Filipinas",    flag: "🇵🇭", lat: 12.8797,  lng: 121.7740, window: "Nov–Dez 2026", goal: "Imersão cultural e adaptação da rotina móvel", continent: "Ásia",
    language: "Filipino e inglês", curiosity: "Mais de 7.000 ilhas — um arquipélago inteiro pra descobrir.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" },
  { name: "China",        flag: "🇨🇳", lat: 35.8617,  lng: 104.1954, window: "Jan 2027",      goal: "Civilização milenar e mandarim básico", continent: "Ásia",
    language: "Mandarim", curiosity: "A Grande Muralha se estende por milhares de quilômetros.",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80" },
  { name: "Tailândia",    flag: "🇹🇭", lat: 15.8700,  lng: 100.9925, window: "Fev 2027",      goal: "Base logística e produção audiovisual", continent: "Ásia",
    language: "Tailandês", curiosity: "O único país do sudeste asiático que nunca foi colonizado.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80" },
  { name: "Camboja",      flag: "🇰🇭", lat: 12.5657,  lng: 104.9910, window: "Mar 2027",      goal: "Angkor Wat e história das civilizações khmer", continent: "Ásia",
    language: "Khmer", curiosity: "Angkor foi a maior cidade do mundo medieval.",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80" },
  { name: "Vietnã",       flag: "🇻🇳", lat: 14.0583,  lng: 108.2772, window: "Abr 2027",      goal: "História, gastronomia e aulas de campo", continent: "Ásia",
    language: "Vietnamita", curiosity: "A comida de rua é reconhecida entre as melhores do mundo.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80" },
  { name: "Malásia",      flag: "🇲🇾", lat: 4.2105,   lng: 101.9758, window: "Mai 2027",      goal: "Diversidade cultural e floresta tropical", continent: "Ásia",
    language: "Malaio", curiosity: "Encontro vivo de culturas malaia, chinesa e indiana.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80" },
  { name: "Indonésia",    flag: "🇮🇩", lat: -0.7893,  lng: 113.9213, window: "Jun 2027",      goal: "Arquipélago, Bali e educação ambiental", continent: "Ásia",
    language: "Indonésio", curiosity: "O maior arquipélago do planeta — cerca de 17 mil ilhas.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80" },
  { name: "Índia",        flag: "🇮🇳", lat: 20.5937,  lng: 78.9629,  window: "Jul 2027",      goal: "Espiritualidade, artes e pesquisa documental", continent: "Ásia",
    language: "Hindi e inglês (entre centenas de línguas)", curiosity: "Berço de quatro grandes religiões.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80" },
  { name: "Uzbequistão",  flag: "🇺🇿", lat: 41.3775,  lng: 64.5853,  window: "Ago 2027",      goal: "Rota da Seda e civilizações islâmicas", continent: "Ásia Central",
    language: "Uzbeque", curiosity: "Samarcanda foi o coração da Rota da Seda.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80" },
  { name: "Egito",        flag: "🇪🇬", lat: 26.8206,  lng: 30.8025,  window: "Set 2027",      goal: "Civilizações antigas e conteúdo educacional", continent: "África",
    language: "Árabe", curiosity: "Uma civilização de mais de 5.000 anos às margens do Nilo.",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80" },
  { name: "Jordânia",     flag: "🇯🇴", lat: 30.5852,  lng: 36.2384,  window: "Out 2027",      goal: "Petra, história bíblica e arqueologia", continent: "Oriente Médio",
    language: "Árabe", curiosity: "Petra foi esculpida diretamente na rocha rosa do deserto.",
    image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800&q=80" },
  { name: "Marrocos",     flag: "🇲🇦", lat: 31.7917,  lng: -7.0926,  window: "Nov 2027",      goal: "Fechamento narrativo da temporada 1", continent: "África",
    language: "Árabe e berbere", curiosity: "O portão onde a África encontra a Europa.",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80" },
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
  departure: "Previsão · Novembro 2026",
  origin: "Brasil",
  firstDestination: "Cebu, Filipinas",
};
