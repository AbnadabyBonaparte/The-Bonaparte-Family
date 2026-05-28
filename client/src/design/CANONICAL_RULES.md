# Regras Canônicas — Universo Bonaparte
> Documento vivo. Decisões travadas. Toda adição precisa de justificativa.

---

## 1 — Sistema de Logos

### Marca-raiz
Um único símbolo: o monograma **B Bonaparte** (serif, limpo, atemporal).
Nunca muda. É o DNA visual de tudo.

### Wordmarks por mundo
| Mundo              | Wordmark completo          | Abreviação de uso |
|--------------------|----------------------------|--------------------|
| Hub Central        | `Bonaparte`                | `B`                |
| Portal da Família  | `Bonaparte Família`        | `BF`               |
| Livraria           | `Livraria Bonaparte`       | `LB`               |
| Bazar              | `Bazar Bonaparte`          | `BB`               |
| Música             | `Aby Bonaparte`            | `AB`               |
| Expedição          | `Expedição Bonaparte`      | `EB`               |

### Variações obrigatórias de cada logo
Cada mundo precisa entregar ao dev:
- `logo.svg` — horizontal (mark + wordmark), fundo transparente
- `logo-stacked.svg` — empilhado (mark em cima, wordmark embaixo)
- `logo-mark.svg` — só o B, sem wordmark (uso em favicon, avatar)
- Versão clara (para fundo escuro) e versão escura (para fundo claro)

---

## 2 — Paleta Canônica

SSOT: `client/src/index.css`

| Token            | Valor oklch             | Hex aprox. | Uso                          |
|------------------|-------------------------|------------|------------------------------|
| `--primary`      | oklch(0.52 0.13 155)    | #277C52    | Links, bordas, identidade    |
| `--accent`       | oklch(0.65 0.18 50)     | #E9741C    | Botões de ação, badges, CTAs |
| `--background`   | oklch(0.97 0.01 80)     | #F8F7F1    | Fundo claro (cream)          |
| `--foreground`   | oklch(0.15 0.03 155)    | #1A2E1F    | Texto principal              |
| `--card`         | oklch(0.94 0.01 80)     | #EFF0E9    | Superfície de cards          |
| Forest Dark      | oklch(0.28 0.09 155)    | #1A422D    | Backgrounds de seção escura  |
| Obsidian Verde   | oklch(0.12 0.04 155)    | #0C1F14    | Dark mode background         |

**Regras absolutas:**
- NUNCA hex direto em componente `.tsx`
- NUNCA `bg-white`, `bg-black`, `bg-gray-*`, `text-white` hardcoded
- SEMPRE variáveis CSS: `bg-background`, `text-foreground`, `bg-primary`, `bg-accent`

---

## 3 — Tipografia

| Família         | Variável CSS         | Uso                                      |
|-----------------|----------------------|------------------------------------------|
| Cormorant Garamond | `font-serif`      | Títulos, hero, citações, números grandes |
| Manrope         | `font-sans`          | Corpo, labels, navegação, UI             |

**Nunca usar:** Inter, Merriweather, System UI como fonte principal.

---

## 4 — Cards de Produto (Afiliados)

Padrão único para todos os sites do universo:

```
┌─────────────────────┐
│  IMAGEM 1:1         │  aspect-ratio: 1/1, object-fit: cover
│                     │
│  [BADGE categoria]  │  canto superior esquerdo
├─────────────────────┤
│  CATEGORIA          │  text-xs uppercase tracking-wider text-primary/70
│  Nome do produto    │  font-serif text-base leading-snug
│  Descrição curta    │  text-xs text-muted-foreground (máx 80 chars)
│  R$ 0.000,00        │  text-sm font-semibold
└─────────────────────┘
```

**Limites de conteúdo:**
- Nome: máx 50 caracteres
- Descrição: máx 80 caracteres
- Badge: máx 12 caracteres
- Preço: sempre em BRL (ou "Grátis", "Sob consulta")

**Dados obrigatórios em `familyProducts.ts`:**
```typescript
{
  id: string           // slug único kebab-case
  name: string
  desc: string
  category: string     // deve estar em FAMILY_CATEGORIES
  price: string        // "R$ 299,00" ou "Grátis"
  image: string        // /produtos/slug.jpg ou URL externa
  link: string         // link de afiliado ML ou Amazon
  badge?: string       // "Novo", "Recomendado", "Expedição"
  placeholder?: boolean // true = em breve, sem link ativo
}
```

---

## 5 — Regra de Navegação do Universo

**Lei dos dois links:** Todo site/página do universo Bonaparte precisa ter:
1. `← Hub Bonaparte` → `https://casabonaparte.com.br`
2. `→ [Próximo destino]` → qualquer outro nó do universo

Nenhum site é fundo de saco. O usuário sempre pode se mover.

**Mapa de nós:**
```
casabonaparte.com.br (HUB)
├── the-bonaparte-family.vercel.app  (Família / Expedição)
├── livraria.casabonaparte.com.br    (Livraria)
├── casabonaparte.com.br/bazar       (Bazar)
└── abnadabybonaparte.alshamglobal.com.br  (Músico)
```

**Footer canônico:** Todo site do universo deve ter no footer:
- Logo Bonaparte (mark only, link pro hub)
- Links para os outros 4 nós
- `© Bonaparte Family · [ano]`

---

## 6 — Padrão de Imagens

| Contexto          | Aspect ratio | Tamanho mínimo | Formato   |
|-------------------|-------------|-----------------|-----------|
| Hero background   | livre       | 1800×900px      | JPG ≤400KB|
| Card de família   | 3:4         | 400×533px       | JPG ≤150KB|
| Card de produto   | 1:1         | 600×600px       | JPG ≤200KB|
| Capa de livro     | 2:3         | 400×600px       | JPG ≤150KB|
| Pilar/seção       | 4:3         | 600×450px       | JPG ≤200KB|
| Galeria expedição | 3:4         | 400×533px       | JPG ≤120KB|
| OG / Social       | 16:9        | 1200×630px      | JPG ≤200KB|

**Organização em `/public`:**
```
client/public/
├── familia/      # fotos da família Bonaparte
├── produtos/     # imagens dos produtos do bazar
├── covers/       # capas dos livros
├── expedicao/    # fotos da expedição / países
├── sitio/        # fotos do sítio / casa
└── autor/        # fotos autorais / Abnadaby
```

---

## 7 — Tom de Voz

- **Não** é motivacional genérico. É relato real.
- **Não** é "dica de especialista". É experiência vivida.
- **Não** promete resultado. Mostra processo.
- Primeira pessoa do plural: "a família", "nossa casa", "decidimos"
- Verbo no presente ou passado simples. Nunca futuro do subjuntivo pomposo.
- Zero emojis em texto editorial. Emojis só em UI funcional (bandeiras, ícones de seção).

---

## 8 — Checklist de Lançamento

- [ ] Fotos reais de todos os membros da família ✅
- [ ] Foto hero real ✅
- [ ] Produtos de afiliado com links reais (ML/Amazon)
- [ ] Capas dos livros no Amazon KDP finalizadas
- [ ] Ebook setlist Aby Bonaparte publicado
- [ ] Supabase ativo (Journal Bonaparte)
- [ ] Variáveis de ambiente Vercel configuradas
- [ ] Logo definitiva entregue pelo designer
- [ ] OG image (1200×630) para compartilhamento social
- [ ] WhatsApp de suporte testado (todos os links)
- [ ] Dark mode revisado em todos os dispositivos
- [ ] Campanha de aquecimento preparada
