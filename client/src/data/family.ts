// ============================================================
// FAMÍLIA BONAPARTE — fonte única de verdade (cadastro consolidado)
// Consumido por: pages/Family.tsx e pages/Home.tsx.
// Fotos reais em /public/familia/. Onde não há foto real, o campo
// fica vazio e a UI cai num placeholder honesto (nunca um estranho).
// ============================================================

export interface FamilyMember {
  name: string;
  role: string;
  description: string;
  quote: string;
  photo: string; // caminho da foto real em /public/familia/ ("" = placeholder honesto)
}

export const familyMembers: FamilyMember[] = [
  {
    name: "Abnadaby Bonaparte",
    role: "Pai • Músico • Autor • Empreendedor",
    description:
      "Músico com mais de 25 anos de estrada, criador de sistemas digitais e guardião da visão da família.",
    quote: "Transformar experiência em legado é o meu chamado.",
    photo: "/familia/abnadaby_fundador.jpeg",
  },
  {
    name: "Laurice Bonaparte",
    role: "Mãe • Co-piloto • Estrategista da rotina",
    description:
      "Coordena a vida real com precisão e afeto: agenda, educação, logística e o coração da casa.",
    quote: "Nosso caos é organizado por propósito.",
    photo: "/familia/laurice.jpg",
  },
  {
    name: "Sarah Hadassa",
    role: "Filha mais velha • Violinista • Exploradora",
    description:
      "Curiosa, dedicada e sensível. Aprende música, línguas e cultura vivendo o mundo como sala de aula.",
    quote: "Cada lugar novo ensina algo sobre quem eu sou.",
    photo: "/familia/sarah_hadassa.jpg",
  },
  {
    name: "Ana Maria",
    role: "Filha mais nova • Energia criativa",
    description:
      "Movimento puro, imaginação viva e alegria contagiante em cada etapa da jornada.",
    quote: "Viver é brincar sério com o mundo.",
    photo: "/familia/ana_maria.jpg",
  },
];

export const familyValues = [
  "Soberania",
  "Educação livre",
  "Fé não-institucional",
  "Movimento",
  "Criação",
  "Legado",
  "Presença",
];

export interface Pet {
  name: string;
  breed: string;
  personality: string; // "" quando não há descrição verdadeira a exibir
  photo?: string;
}

// Matilha real. Raças corrigidas conforme o dono:
// Mel = Yorkshire · Apache = Pastor Alemão (capa preta).
export const pets: Pet[] = [
  {
    name: "Mel",
    breed: "Yorkshire",
    personality:
      "A cachorrinha que não sabe que é pequena. Viaja, late e ama como se fosse a dona da estrada.",
    photo: "/familia/mel.jpg",
  },
  {
    name: "Apache",
    breed: "Pastor Alemão (capa preta)",
    personality: "Leal, brincalhão e sempre pronto para a estrada.",
  },
];
