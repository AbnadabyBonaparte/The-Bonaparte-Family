// ── BAZAR CENTRAL — fonte única da vitrine da Família ──────────────────────
//
// Arquitetura "Vitrine aponta, Bazar guarda" (decisão GENESIS, alinhada a
// canon/mundos/BAZAR.md). A Família NÃO tem loja local nem preço: ela só EXIBE
// coleções temáticas curadas e APONTA pro Bazar central (bazar.casabonaparte.com.br),
// onde a venda, o preço e o link de afiliado vivem.
//
// Leis do Bazar aplicadas aqui:
//  • Lei 2 — sem preço à mão: NÃO existe campo `price` neste modelo. O card diz
//    "Ver no Bazar". Preço vive na loja (manual desatualiza e fere regra de afiliado).
//  • Lei 5 — imagem real obrigatória: nada de produto fake/placeholder no ar.
//    A vitrine mostra CATEGORIAS de curadoria (tiles on-brand), não produtos avulsos
//    com foto inventada.
//  • Lei dos Tronos — a vitrine só exibe; não administra venda nem checkout.
//  • Honestidade (Lei 7): enquanto a curadoria não foi semeada no Bazar, o estado é
//    honesto ("curadoria em formação") e o link vai pra casa do Bazar — nunca link
//    quebrado, nunca produto/preço inventado.
//
// MIGRAÇÃO (quando o Banco do Universo / Bazar existir — ver canon/mundos/
// BANCO-DO-UNIVERSO.md e BAZAR.md): troca-se o array estático abaixo por um `fetch`
// às coleções do Bazar. O componente <BazarCollection> e as props NÃO mudam — só a
// origem dos dados. `href` passa a apontar pra página da coleção no Bazar; hoje aponta
// pro hub porque as páginas de coleção ainda não foram semeadas.

/** Domínio canônico do Bazar central (mundo-dinheiro; curadoria de afiliado). */
export const BAZAR_URL = "https://bazar.casabonaparte.com.br";

/** Disclosure de afiliado — obrigatório e visível (CDC / CONAR). */
export const BAZAR_AFFILIATE_NOTE =
  "Links de afiliado — você paga o mesmo preço e apoia a família Bonaparte.";

export interface BazarCategory {
  id: string;
  /** rótulo da categoria de curadoria */
  label: string;
  /** o que entra nela — honesto, sem preço, sem produto inventado */
  note: string;
}

export interface BazarCollection {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  categories: BazarCategory[];
  /**
   * Deep-link pra coleção no Bazar. Hoje aponta pro hub (BAZAR_URL) — as páginas
   * de coleção ainda não foram semeadas no Bazar. Troca de 1 linha quando existirem.
   */
  href: string;
  /** true = curadoria ainda não semeada no Bazar → estado honesto na UI. */
  seeding?: boolean;
}

// Coleção temática — EXPEDIÇÃO (mochila / barraca / power bank / trilha / worldschooling)
export const COLECAO_EXPEDICAO: BazarCollection = {
  id: "expedicao",
  eyebrow: "Expedição Bonaparte",
  title: "O que a família carrega",
  blurb:
    "A curadoria de estrada — o que a família leva na travessia. Cada categoria abre no Bazar central, onde o produto certo e o preço vivem.",
  href: BAZAR_URL,
  seeding: true,
  categories: [
    { id: "mochilas", label: "Mochilas & bags", note: "Do porte das meninas ao cargueiro de 13 meses de estrada." },
    { id: "abrigo", label: "Barraca & abrigo", note: "Dormir em qualquer chão — leve, rápido de montar, seco." },
    { id: "energia", label: "Energia & power bank", note: "Bateria e solar pra manter o celular e a câmera vivos fora da tomada." },
    { id: "trilha", label: "Calçados & trilha", note: "Pés que vão pisar em 12 países — resistentes e confortáveis." },
    { id: "worldschooling", label: "Worldschooling", note: "Cadernos de campo, atlas e jogos que viram a estrada em sala de aula." },
  ],
};

// Coleção temática — GERAL (a curadoria ampla da Casa, pra Home)
export const COLECAO_GERAL: BazarCollection = {
  id: "geral",
  eyebrow: "Curadoria Bonaparte",
  title: "O que a Casa recomenda",
  blurb:
    "Os objetos que a família usa e confia — desk, leitura, casa e presentes. Curadoria única, guardada no Bazar central.",
  href: BAZAR_URL,
  seeding: true,
  categories: [
    { id: "desk", label: "Desk & escrita", note: "Cadernos, canetas e o canto de escrever — a mesa que sustenta a obra." },
    { id: "leitura", label: "Leitura & foco", note: "Luminárias, suportes e o que faz a leitura render." },
    { id: "casa", label: "Casa & sítio", note: "O que equipa a vida no interior, do quintal à cozinha." },
    { id: "presentes", label: "Presentes curados", note: "Escolhas com significado — o gosto da Casa, sem achismo." },
  ],
};

/** Todas as coleções, por id — pronto pra virar fetch do Bazar no futuro. */
export const BAZAR_COLLECTIONS: Record<string, BazarCollection> = {
  [COLECAO_EXPEDICAO.id]: COLECAO_EXPEDICAO,
  [COLECAO_GERAL.id]: COLECAO_GERAL,
};
