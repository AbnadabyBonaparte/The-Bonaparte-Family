# REGRAS CANÔNICAS — UNIVERSO BONAPARTE
**Versão:** 1.0 · **Data:** 26/05/2026  
**Autoridade:** Abnadaby Bonaparte · ALSHAM Global Commerce Ltda  
**CNPJ:** 59.332.265/0001-30 · **PIX:** 59332265000130

---

## 1. ARQUITETURA DO UNIVERSO

```
casabonaparte.com.br                    ← HUB CENTRAL (fonte de tudo)
├── /livros                             ← Livraria Bonaparte (fonte de verdade dos livros)
├── /bazar                              ← Bazar Bonaparte (fonte de verdade dos produtos)
│
abnadabybonaparte.casabonaparte.com.br   ← Músico (divulga → aponta pro hub)
the-bonaparte-family.vercel.app         ← Família (divulga → aponta pro hub)
```

### Lei Fundamental
- **Hub vende. Satélites divulgam.**
- Nenhum satélite gerencia produto ou livro independentemente.
- Todo satélite tem dois links obrigatórios: `← Hub Bonaparte` e `→ [próximo destino]`.

---

## 2. SISTEMA DE LOGOS

### Decisão canônica: Um símbolo. Wordmarks diferentes.

O símbolo Bonaparte (círculo com cruz — `logo.png`) é ÚNICO e IMUTÁVEL em todo o ecossistema.

O que muda é o **wordmark** (texto ao lado):

| Site | Wordmark | Estilo |
|------|----------|--------|
| Hub Central | `Casa Bonaparte` | Cormorant Garamond · Regular |
| Família | `The Bonaparte Family` | Cormorant Garamond · Italic |
| Músico | `Aby Bonaparte` | Cormorant Garamond · Regular |
| Livraria | `Livraria Bonaparte` | Cormorant Garamond · Regular |
| Bazar | `Bazar Bonaparte` | Cormorant Garamond · Regular |

### Para o designer — Brief de logo:

**O símbolo:** Círculo com cruz interna (já existe em `casabonaparte.png`)  
Versões necessárias:
1. Símbolo isolado (para favicon, ícone de app)
2. Símbolo + "Casa Bonaparte" (horizontal) — hub
3. Símbolo + "The Bonaparte Family" (horizontal) — família
4. Símbolo + "Livraria Bonaparte" (horizontal) — livros
5. Símbolo + "Bazar Bonaparte" (horizontal) — produtos
6. Símbolo + "Aby Bonaparte" (horizontal) — músico

**Especificações técnicas:**
- Formato: SVG + PNG (fundo transparente)
- Versão clara: símbolo em AGED GOLD `#C6A75E` + texto em `#111110`
- Versão escura: símbolo em AGED GOLD `#C6A75E` + texto em `#F4F1EA`
- Versão monocromática: tudo em preto / tudo em branco
- Tamanho mínimo funcional: 24px de altura para o símbolo

---

## 3. PALETA CANÔNICA POR SITE

| Site | Primária | Acento | Fundo |
|------|---------|--------|-------|
| Hub (casa-bonaparte-saas) | VOID EARTH `#111110` | AGED GOLD `#C6A75E` | `#111110` |
| Músico (Aby-Bonaparte) | Night Blue | Amber Sun | Night Blue |
| Família (The-Bonaparte-Family) | Forest Mid `#277C52` | Sunset Orange `#E9741C` | Cream `#F8F7F1` |
| Livraria (dentro do hub) | VOID EARTH | AGED GOLD | `#111110` |
| Bazar (dentro do hub) | VOID EARTH | AGED GOLD | `#050505` |

---

## 4. PADRÃO CANÔNICO DE PRODUTO (card de afiliado)

Todo card de produto em QUALQUER site do ecossistema segue:

```
┌─────────────────────────────┐
│                             │
│   IMAGEM 1:1 (quadrada)    │  ← aspect-ratio: 1/1, objectFit: cover
│   Badge categoria (top-left)│  ← ex: "Setup de Palco", "Livraria"
│                             │
├─────────────────────────────┤
│ NOME DO PRODUTO             │  ← máx 40 caracteres
│ Descrição em uma linha      │  ← máx 80 caracteres  
│ R$ 00,00          ML →     │  ← preço real + link afiliado
└─────────────────────────────┘
```

**Regras:**
- Imagem: quadrada, sem margens internas visíveis
- Nome: Cormorant Garamond, 1.1–1.3rem
- Descrição: Manrope/Raleway, 0.78–0.82rem, muted
- Preço: destaque, cor primária do site
- Link: abre em nova aba (`target="_blank"`)
- Placeholder: fundo escuro com texto "Em breve" e link → bazar central

**Dados mínimos por produto:**
```typescript
{
  id: string           // kebab-case único
  name: string         // máx 40 chars
  desc: string         // máx 80 chars
  price: string        // "R$ 00,00" ou "Em breve"
  image: string        // URL ou path local
  link: string         // URL do afiliado ML/Amazon
  category: string     // categoria canônica
  badge?: string       // label do badge
  placeholder?: boolean // true = não tem link real ainda
}
```

---

## 5. CATEGORIAS CANÔNICAS DE PRODUTO

Válidas em todos os sites:

| Categoria | Usado em |
|-----------|---------|
| `Violões & Cordas` | Músico, Bazar |
| `Setup de Palco` | Músico, Bazar |
| `Gravação & Estúdio` | Músico, Bazar |
| `Câmeras & Vídeo` | Família, Bazar |
| `Expedição Bonaparte` | Família, Bazar |
| `Mochilas & Bags` | Família, Bazar |
| `Aulas em Campo` | Família, Bazar |
| `Jogos & Lazer` | Família, Bazar |
| `Livraria Bonaparte` | Hub, Bazar |
| `Tecnologia` | Família, Bazar |
| `Vestuário` | Família, Bazar |

---

## 6. NAVEGAÇÃO DO UNIVERSO — Lei dos dois links

Todo nó do ecossistema exige no footer ou nav:

```
← Hub Bonaparte (casabonaparte.com.br)
→ [Próximo destino relevante]
```

**Mapa de navegação:**
```
Hub → Músico → Família → Livraria → Bazar → Hub (ciclo)
```

Nenhuma página pode ser "fundo de saco" — sempre há uma saída para o próximo destino.

---

## 7. REGRAS DE LIVROS

- **Fonte da verdade:** `casabonaparte.com.br/livros`
- Catálogo completo: 19 obras (9 publicadas + 10 em breve)
- Todo satélite mostra no máximo 3–4 livros em destaque e aponta para a fonte
- Livros em breve: badge com ano + "Apoiar via PIX" (chave: 59332265000130)
- Amazon: links reais para os 9 publicados
- Manuscritos antecipados: via PIX + WhatsApp

---

## 8. REGRAS DE CONTEÚDO / JOURNAL

- **Fonte:** `the-bonaparte-family.vercel.app/journal`
- **Frequência mínima:** 1 entrada/semana
- **Quem pode publicar:** quem tem um usuário do Supabase Auth (login em `/escrever`)
- **Autenticação:** Supabase Auth (e-mail/senha) + Row Level Security (`supabase/journal_rls.sql`). Sem senha embutida no bundle.
- **Ativação:** requer Supabase regularizado (faturas ALSHAM em aberto)
- **Fluxo:** Site publica → adapta para redes sociais (não o contrário)

---

## 9. FONTES CANÔNICAS

| Uso | Fonte | Peso |
|-----|-------|------|
| Títulos (h1–h4) | Cormorant Garamond | 300, 400, 600 |
| Corpo (hub/bazar) | Manrope | 300, 400, 600, 700 |
| Corpo (músico) | Raleway | 300, 400, 600, 700 |
| Corpo (família) | Manrope | 300, 400, 600 |
| Labels/badges | qualquer sans | 700, UPPERCASE |

---

## 10. CHECKLIST PRÉ-LANÇAMENTO

### Técnico
- [ ] Supabase regularizado → Journal ativo
- [ ] 4051 publicado na Amazon KDP
- [ ] Preços visíveis nos setlists (site músico)
- [ ] Logo Bonaparte real em todos os sites (logo.png com fundo transparente)
- [ ] links reais ML/Amazon nos produtos placeholder
- [ ] YouTube ID real no embed do site família
- [ ] handles reais das redes sociais em todos os sites

### Conteúdo
- [ ] Fotos reais família no hero
- [ ] Fotos das meninas nas seções corretas
- [ ] Capas dos livros padronizadas no KDP
- [ ] eBooks de setlist finalizados
- [ ] Gramificação dos livros revisada

### Marca
- [ ] Designer criou as 6 versões de wordmark
- [ ] SVG + PNG de cada versão entregue
- [ ] Aplicado em todos os headers

### Campanha de aquecimento
- [ ] Definir data de abertura oficial
- [ ] Banner de "Em breve" com countdown
- [ ] Lista de espera via WhatsApp
- [ ] Primeiro post no Journal publicado

---

*Documento fundador · Universo Bonaparte · 26/05/2026*
