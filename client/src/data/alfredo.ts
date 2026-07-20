// ── ALFREDO — o ônibus da Família Bonaparte ───────────────────────────────
// Fonte de dados tipada e HONESTA. Alfredo está EM REFORMA, PARADO na oficina.
// NUNCA descrever como operacional ("rodou X km", "pronto"). Só o que é verdade.
//
// Leis aplicadas aqui:
//  • Lei 7 (Honestidade): zero número/afirmação inventada. Onde não há foto real,
//    o slot fica PENDENTE (placeholder honesto) — nunca stock/genérico.
//  • Lei da Imagem: renders de IA (fase "Como vai ficar") são PROJEÇÃO, sempre
//    rotulados e visualmente distintos da foto real.
//  • Lei do Bazar: a página só EXIBE equipamentos; a venda vive no Bazar.
//    Cada item aponta pro Bazar, sem preço cravado à mão.

/** URL canônica do Bazar (mundo-dinheiro; a curadoria de produtos vive lá). */
export const BAZAR_URL = "https://bazar.casabonaparte.com.br";

/** Status atual — cravado, honesto. Alfredo não anda; está na oficina. */
export const ALFREDO_STATUS = "Em reforma · parado na oficina";

/** A ficha do que Alfredo é (fatos, não promessa). */
export const ALFREDO_FICHA: { label: string; value: string }[] = [
  { label: "Base", value: "Mercedes-Benz O364" },
  { label: "Ano", value: "1980" },
  { label: "Virando", value: "Fortaleza sobre rodas" },
  { label: "Situação", value: "Reforma pausada por recursos" },
];

/** Abertura — a história real, no tom do manifesto. Só fatos do dono. */
export const ALFREDO_INTRO: string[] = [
  "Alfredo é um Mercedes-Benz O364, ano 1980. Um ônibus que a gente escolheu pra virar fortaleza sobre rodas — a casa que anda, o lar da travessia.",
  "O sonho tem endereço: descer até Ushuaia e subir até o Alaska. Ir de ponta a ponta do continente com a família dentro, sem pressa, vendo o mundo pela janela.",
  "Mas nada disso está pronto — é aí que mora a verdade. Alfredo está na oficina, em reforma, parado. A obra pausou porque sonho real se paga caro: a gente faz, desfaz, junta recurso e volta. A expedição pela Ásia é a ponte — sair pra sentir se é essa vida mesmo, e voltar com força pra terminar o Alfredo.",
];

export interface AlfredoPhoto {
  id: string;
  /** legenda honesta do slot */
  caption: string;
  /** caminho da foto real em /public/alfredo/ — vazio = slot pendente (sem stock) */
  src?: string;
}

export interface AlfredoPhase {
  id: string;
  title: string;
  /** descrição honesta da fase */
  blurb: string;
  photos: AlfredoPhoto[];
  /** true = galeria de PROJEÇÃO (render de IA). Lei da Imagem: rotular como visão. */
  vision?: boolean;
}

// As fotos reais o Abnadaby sobe depois em /public/alfredo/. Os slots já estão
// nomeados; enquanto não chegam, cada um mostra placeholder honesto ("foto pendente").
export const ALFREDO_PHASES: AlfredoPhase[] = [
  {
    id: "compra",
    title: "Quando compramos",
    blurb: "O começo de tudo — o dia em que Alfredo virou nosso. Um ônibus de 1980 e uma ideia grande demais pra caber nele ainda.",
    photos: [
      { id: "compra-1", caption: "Alfredo no dia da compra", src: "/alfredo/compra-1.jpg" },
      { id: "compra-2", caption: "Primeiro olhar de dentro", src: "/alfredo/compra-2.jpg" },
      { id: "compra-3", caption: "Como ele chegou", src: "/alfredo/compra-3.jpg" },
    ],
  },
  {
    id: "expo",
    title: "Expo Motorhome",
    blurb: "A fase de aprender. O Abnadaby na Expo Motorhome, estudando o que é transformar um ônibus em casa — vendo, perguntando, anotando.",
    photos: [
      { id: "expo-1", caption: "Na Expo Motorhome", src: "/alfredo/expo-1.jpg" },
      { id: "expo-2", caption: "Aprendendo o ofício", src: "/alfredo/expo-2.jpg" },
    ],
  },
  {
    id: "gaiola",
    title: "A gaiola / desmontado",
    blurb: "A fase crua — a verdade forte. Cortaram e elevaram Alfredo em 45 cm. Motor trocado pro O400, eixos pro 1620, câmbio pro ZF6, turbina instalada, estrutura podre refeita. Hoje ele parece sucata. E é exatamente isso: obra em andamento, com pó e ferro exposto.",
    photos: [
      { id: "gaiola-1", caption: "Cortado e elevado 45 cm — a gaiola", src: "/alfredo/gaiola-1.jpg" },
      { id: "gaiola-2", caption: "Motor O400 no lugar", src: "/alfredo/gaiola-2.jpg" },
      { id: "gaiola-3", caption: "Eixos 1620 e câmbio ZF6", src: "/alfredo/gaiola-3.jpg" },
      { id: "gaiola-4", caption: "Estrutura podre sendo refeita", src: "/alfredo/gaiola-4.jpg" },
    ],
  },
  {
    id: "falta",
    title: "O que falta",
    blurb: "O caminho ainda aberto. Falta a elétrica, o tanque de diesel, os faróis, o parabrisas e o fechamento em ACM. Cada item é um pedaço do sonho esperando recurso.",
    photos: [
      { id: "falta-1", caption: "Elétrica a fazer", src: "/alfredo/falta-1.jpg" },
      { id: "falta-2", caption: "Tanque de diesel e faróis", src: "/alfredo/falta-2.jpg" },
      { id: "falta-3", caption: "Parabrisas e fechamento em ACM", src: "/alfredo/falta-3.jpg" },
    ],
  },
  {
    id: "visao",
    title: "Como vai ficar",
    blurb: "O sonho desenhado. Estas imagens são PROJEÇÃO — como Alfredo vai ficar quando a obra terminar. Não são fotos do ônibus de verdade; são a visão que puxa a reforma pra frente.",
    vision: true,
    photos: [
      { id: "visao-1", caption: "Projeção · como vai ficar · o sonho", src: "/alfredo/render-1.jpg" },
      { id: "visao-2", caption: "Projeção · como vai ficar · o sonho", src: "/alfredo/render-2.jpg" },
    ],
  },
];

export interface AlfredoGear {
  id: string;
  /** categoria da curadoria (honesta) */
  name: string;
  /** o que é / por que entra no Alfredo — sem preço, sem promessa */
  note: string;
  /** aponta pro Bazar; o preço e o produto vivem lá (afiliado) */
  bazarUrl: string;
}

// "O que vai dentro do Alfredo" — REGRA DO BAZAR: a página só EXIBE e APONTA.
// Não há preço aqui, não há checkout aqui. A curadoria real (produtos de motorhome,
// afiliado) ainda precisa ser SEMEADA no Bazar — por enquanto cada card leva à casa
// do Bazar, não a um produto específico.
export const ALFREDO_GEAR: AlfredoGear[] = [
  { id: "energia",  name: "Energia & solar",       note: "Painéis, baterias e o que mantém a casa viva longe da tomada.", bazarUrl: BAZAR_URL },
  { id: "agua",     name: "Água & filtragem",       note: "Reservatório, bomba e filtro — água segura na estrada.",        bazarUrl: BAZAR_URL },
  { id: "cozinha",  name: "Cozinha de bordo",       note: "O canto da mesa que anda junto — cozinhar em qualquer lugar.",  bazarUrl: BAZAR_URL },
  { id: "clima",    name: "Climatização & conforto", note: "Manter o dentro habitável do frio do sul ao calor do trópico.", bazarUrl: BAZAR_URL },
  { id: "seguranca", name: "Segurança & rastreamento", note: "Proteger a fortaleza e saber onde ela está.",                 bazarUrl: BAZAR_URL },
  { id: "descanso", name: "Descanso & interior",    note: "Camas, tecidos e o aconchego de uma casa de verdade.",          bazarUrl: BAZAR_URL },
];
