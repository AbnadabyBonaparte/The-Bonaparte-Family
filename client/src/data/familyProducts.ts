export interface FamilyProduct {
  id: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  link: string;
  category: string;
  badge?: string;
  placeholder?: boolean;
}

export const FAMILY_CATEGORIES = [
  "Todos",
  "Mochilas & Bags",
  "Calçados",
  "Tecnologia",
  "Aulas em Campo",
  "Jogos & Lazer",
  "Vestuário",
  "Saúde & Higiene",
];

export const FAMILY_PRODUCTS: FamilyProduct[] = [
  // ── MOCHILAS & BAGS ──
  {
    id: "mochila-infantil",
    name: "Mochila Infantil Resistente 20L",
    desc: "A mochila das meninas para a expedição. Leve, resistente e no tamanho certo para Sarah e Ana Maria carregarem o delas.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Mochila+Infantil",
    link: "https://casabonaparte.com.br/bazar",
    category: "Mochilas & Bags",
    badge: "Expedição Bonaparte",
    placeholder: true,
  },
  {
    id: "mochila-adulto",
    name: "Mochila de Viagem 40L",
    desc: "Para carregar tudo que importa. Compacta o suficiente para cabine de avião, robusta o suficiente para 13 meses de estrada.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Mochila+40L",
    link: "https://casabonaparte.com.br/bazar",
    category: "Mochilas & Bags",
    badge: "Expedição Bonaparte",
    placeholder: true,
  },
  {
    id: "necessaire-viagem",
    name: "Nécessaire Organizadora de Viagem",
    desc: "Organização é liberdade. Tudo no lugar, acessível na hora certa.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Nécessaire",
    link: "https://casabonaparte.com.br/bazar",
    category: "Mochilas & Bags",
    placeholder: true,
  },

  // ── CALÇADOS ──
  {
    id: "bota-infantil",
    name: "Bota Infantil para Trilha",
    desc: "Os pés das meninas vão pisar em 12 países. Esta bota vai junto — resistente, confortável e impermeável.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Bota+Infantil",
    link: "https://casabonaparte.com.br/bazar",
    category: "Calçados",
    badge: "Sarah & Ana Maria",
    placeholder: true,
  },
  {
    id: "sandalia-viagem",
    name: "Sandália Leve para Viagem",
    desc: "Para os dias de cidade, praia e templo. Leve, lavável, fácil de secar.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Sandália",
    link: "https://casabonaparte.com.br/bazar",
    category: "Calçados",
    placeholder: true,
  },

  // ── TECNOLOGIA ──
  {
    id: "carregador-solar",
    name: "Carregador Solar Portátil",
    desc: "Energia onde não tem tomada. Filipinas, Camboja, Uzbequistão — o sol é universal.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Carregador+Solar",
    link: "https://casabonaparte.com.br/bazar",
    category: "Tecnologia",
    badge: "Expedição Bonaparte",
    placeholder: true,
  },
  {
    id: "powerbank",
    name: "Power Bank 20.000mAh",
    desc: "O celular não pode morrer quando você está documentando a vida em tempo real.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Power+Bank",
    link: "https://casabonaparte.com.br/bazar",
    category: "Tecnologia",
    placeholder: true,
  },
  {
    id: "adaptador-universal",
    name: "Adaptador Universal de Tomada",
    desc: "12 países, 12 padrões elétricos diferentes. Um adaptador resolve tudo.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Adaptador",
    link: "https://casabonaparte.com.br/bazar",
    category: "Tecnologia",
    placeholder: true,
  },

  // ── AULAS EM CAMPO ──
  {
    id: "caderno-campo",
    name: "Caderno de Campo das Meninas",
    desc: "Onde Sarah e Ana Maria registram o que aprendem. História, vocabulário, desenhos de cada país visitado.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Caderno+de+Campo",
    link: "https://casabonaparte.com.br/bazar",
    category: "Aulas em Campo",
    badge: "Worldschooling",
    placeholder: true,
  },
  {
    id: "kit-pintura",
    name: "Kit de Pintura Aquarela Portátil",
    desc: "Arte não tem fronteira. As meninas pintam o que veem — paisagens, rostos, mercados.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Aquarela",
    link: "https://casabonaparte.com.br/bazar",
    category: "Aulas em Campo",
    badge: "Worldschooling",
    placeholder: true,
  },
  {
    id: "atlas-infantil",
    name: "Atlas Mundial Ilustrado",
    desc: "Cada país que a família visita, as meninas encontram no atlas. A geografia vira realidade.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Atlas",
    link: "https://casabonaparte.com.br/bazar",
    category: "Aulas em Campo",
    placeholder: true,
  },

  // ── JOGOS & LAZER ──
  {
    id: "jogo-cartas",
    name: "Baralho de Viagem — Países do Mundo",
    desc: "Aprender jogando. As meninas já sabem todas as bandeiras da Ásia.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Baralho",
    link: "https://casabonaparte.com.br/bazar",
    category: "Jogos & Lazer",
    placeholder: true,
  },
  {
    id: "xadrez-viagem",
    name: "Xadrez Magnético de Viagem",
    desc: "Cabe na mochila. A Ana e a Sarah jogam em qualquer lugar — avião, hostel, praça.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Xadrez",
    link: "https://casabonaparte.com.br/bazar",
    category: "Jogos & Lazer",
    placeholder: true,
  },

  // ── VESTUÁRIO ──
  {
    id: "camiseta-secagem-rapida",
    name: "Camiseta de Secagem Rápida",
    desc: "Lavou hoje, veste amanhã. Essencial para quem vive de mochila.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Camiseta",
    link: "https://casabonaparte.com.br/bazar",
    category: "Vestuário",
    placeholder: true,
  },
  {
    id: "toalha-microfibra",
    name: "Toalha de Microfibra Compacta",
    desc: "Seca em minutos, pesa quase nada. Para 5 pessoas numa mochila, peso importa.",
    price: "Em breve",
    image: "https://placehold.co/400x400/2D3B1A/C8D96E?text=Toalha",
    link: "https://casabonaparte.com.br/bazar",
    category: "Vestuário",
    placeholder: true,
  },
];

export const BAZAR_HUB_URL = "https://casabonaparte.com.br/bazar";
