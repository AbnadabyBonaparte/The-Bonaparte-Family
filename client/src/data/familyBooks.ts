export interface FamilyBook {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  amazonUrl: string;
  category: string;
}

export const FEATURED_BOOKS: FamilyBook[] = [
  {
    id: "filhos-prussia",
    title: "Filhos da Prússia",
    subtitle: "Você foi construído. Não educado.",
    cover: "https://casabonaparte.com.br/images/livros/filhos-prussia.jpg",
    amazonUrl: "https://www.amazon.com.br/FILHOS-PR%C3%9ASSIA-Voc%C3%AA-constru%C3%ADdo-educado-ebook/dp/B0GWSKJK92",
    category: "Educação & Sociedade",
  },
  {
    id: "heimat",
    title: "HEIMAT",
    subtitle: "O Animal Ancestral e o Humano Opcional.",
    cover: "https://casabonaparte.com.br/images/livros/heimat.jpg",
    amazonUrl: "https://www.amazon.com.br/HEIMAT-Animal-Ancestral-Humano-Opcional-ebook/dp/B0GWWS17TF",
    category: "Filosofia",
  },
  {
    id: "cartografia",
    title: "Cartografia da Soberania Interior",
    subtitle: "Para quem se recusa a viver no automático.",
    cover: "https://casabonaparte.com.br/images/livros/cartografia.jpg",
    amazonUrl: "https://www.amazon.com.br/Cartografia-Soberania-Interior-Arquitetura-existencial-ebook/dp/B0GWSPPB82/",
    category: "Filosofia",
  },
  {
    id: "fruto-proibido",
    title: "O Fruto Proibido",
    subtitle: "Criando mentes autônomas em uma sociedade que pune quem pensa.",
    cover: "https://casabonaparte.com.br/images/livros/fruto-proibido.jpg",
    amazonUrl: "https://casabonaparte.com.br/livros",
    category: "2029 · Apoie via PIX",
  },
];

export const LIVROS_HUB_URL = "https://casabonaparte.com.br/livros";
export const PIX_KEY = "59332265000130";
