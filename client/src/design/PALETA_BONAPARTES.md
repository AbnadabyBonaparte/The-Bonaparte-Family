# PALETA BONAPARTES — Referência Canônica
**Fonte:** Site original `os-bonaparts` (Wix, 2024 · designer da Bahia)  
**Aplicada em:** `The-Bonaparte-Family` · `The-Bonaparte-Family`  
**Data:** 26/05/2026

---

## Cores canônicas

| Nome | HEX | oklch | Psicologia |
|------|-----|-------|-----------|
| **Forest Dark** | `#1A422D` | `oklch(0.28 0.09 155)` | Profundidade, sofisticação, floresta à noite, documentário |
| **Forest Mid** | `#277C52` | `oklch(0.52 0.13 155)` | Natureza viva, estabilidade, marca principal |
| **Sunset Orange** | `#E9741C` | `oklch(0.65 0.18 50)` | Fogo, aventura, cerrado, ação, CTA |
| **Cream** | `#F8F7F1` | `oklch(0.97 0.01 80)` | Página de livro, orgânico, respiração |
| **White** | `#FFFFFF` | `oklch(1 0 0)` | Cards, superfícies limpas |
| **Obsidian Verde** | `~#0D1F17` | `oklch(0.12 0.04 155)` | Texto base no escuro |

---

## Regras de uso — IMUTÁVEIS

### `--primary` = Forest Mid `#277C52`
Usado para: links ativos, bordas destacadas, elementos de identidade, ícones de marca.  
**Nunca usar para CTAs de ação.**

### `--accent` = Sunset Orange `#E9741C`
Usado para: **TODOS os botões de ação**, badges de destaque, contadores, elementos de urgência.  
É a cor que move o usuário.

### `--secondary` = Forest Dark `#1A422D`
Usado para: seções de impacto com fundo escuro, overlays do hero, footer.  
Cria profundidade cinematográfica.

### `--background` = Cream `#F8F7F1`
Fundo das páginas em modo claro.  
Nunca branco puro — o creme orgânico é o que diferencia.

---

## Tokens CSS disponíveis

Além dos tokens Tailwind padrão (`bg-primary`, `bg-accent`, etc.),
os seguintes tokens nomeados estão disponíveis para uso inline:

```tsx
style={{ background: "var(--color-forest-dark)" }}   // #1A422D
style={{ background: "var(--color-forest-mid)" }}    // #277C52
style={{ color:      "var(--color-sunset-orange)" }} // #E9741C
style={{ background: "var(--color-cream)" }}         // #F8F7F1
style={{ background: "var(--color-obsidian)" }}      // ~#0D1F17
```

Como classes Tailwind:
```tsx
className="bg-forest-dark text-cream"
className="bg-sunset-orange text-obsidian"
className="border-forest-mid"
```

---

## Padrão de seção alternada (do os-bonaparts original)

O site original usava alternância de fundos para criar ritmo:
```
Cream (claro) → Forest Dark (escuro) → Cream (claro) → Forest Dark (escuro)
```

Isso criava a sensação de "respiração" entre blocos.  
Replicar no `The-Bonaparte-Family` com:

```tsx
// Seção clara
<section className="py-24 bg-background">

// Seção escura (impacto)
<section className="py-24" style={{ background: "var(--color-forest-dark)" }}>
  // texto em cream: style={{ color: "var(--color-cream)" }}
  // accent em orange: style={{ color: "var(--color-sunset-orange)" }}
```

---

## O que NUNCA usar neste ecossistema

- ❌ Azul (nenhum tom)
- ❌ Roxo ou lilás
- ❌ Cinza frio
- ❌ Verde-água / teal
- ❌ Vermelho puro (só terracota quente é aceitável)
- ❌ Amarelo (o laranja já cumpre esse papel)

---

## Inspirações visuais (do feedback forense)

O site deve parecer uma mistura de:
- **Netflix Documental** — ritmo, profundidade, escuro cinematográfico
- **National Geographic** — natureza real, autenticidade
- **Patagonia** — valores, não produto
- **Discovery** — exploração com propósito

---

## Tipografia

| Uso | Fonte | Peso | Estilo |
|-----|-------|------|--------|
| Títulos h1–h4 | Cormorant Garamond | 300–600 | Serif, pode usar itálico |
| Corpo de texto | Manrope | 300–600 | Sans, limpo |
| Labels/badges | Manrope | 700 | UPPERCASE + letter-spacing |

---

## Frases de identidade extraídas do os-bonaparts

- *"Somos uma família nômade, vivendo a exploração e a música com um estilo único — compartilhando natureza, aventuras e muito mais."*
- *"Uma família reconstruindo a experiência humana."*
- *"Vida alternativa consciente."*
- *"Portal de estilo de vida, não loja."*

---

*Documento criado em 26/05/2026 · Sessão Bonaparte · Claude Sonnet 4.6*  
*Baseado em análise forense do site os-bonaparts + feedback de dois sistemas de análise visual*
