# Direção de Arte — A Família Bonaparte

> **Uma alma, muitas atmosferas.** A Família veste a **Paleta Família** (papel, tinta, couro,
> areia, oliva, verde profundo, ouro quente, terracota — `canon/PALETA-FAMILIA.md`), **jamais
> obsidian** (isso é ALSHAM). EB Garamond nos títulos, Inter no corpo. Ouro ≤ 1%.
> **Zero cor genérica, zero stock genérico, zero "mais uma landing".**

Documento vivo. Fonte da FASE 1 do redesign "Santo Graal". Método herdado do
`DIRECAO_DE_ARTE_LIVRARIA` (um universo visual coeso; a atmosfera **emoldura** o conteúdo,
nunca o invade), **mas na pele da Família** — nunca os exemplos obsidianos da Livraria.

---

## 0. O eixo (a alma)

> **"A luz quente do fim de tarde no cerrado à beira do Araguaia — papel, folhagem e couro;
> o sagrado na varanda de casa, nunca no templo. Uma família que se move sem se romper."**

Melancolia **luminosa**, nunca fria. Documento vivo de uma família **em obra** — com pó, dívida
e fé. O sagrado fora do templo (a mesa, o sítio, a estrada, a madrugada). **Verde profundo é o
novo preto.** Ouro = luz que visita, jamais ouro de riqueza.

---

## 1. A LEI CORRIGIDA — atmosfera ÚNICA por página

O dono reprovou a v1 da camada de imagem: **2 atmosferas compartilhadas** (cerrado em tudo +
verde em 4) fizeram páginas de nichos diferentes parecerem a mesma. **A correção:** cada página
tem a **sua própria atmosfera**, derivada da alma **daquele** nicho. A `atmosphere` compartilhada
do `PageHero` vira apenas o **fallback** — toda página-farol recebe `image` própria.

> Regra: se removêssemos o texto e o logo e ainda soubéssemos QUAL página é pela atmosfera,
> passou. Se todas as páginas parecem a mesma foto de fundo, falhou.

---

## 2. A atmosfera de cada página (conceito + prompt de geração)

Todas via Ideogram/fal.ai (`flux-pro ultra`) → **webp otimizado**, **Lei da Imagem** (só
ambiente/atmosfera/textura/ornamento; zero pessoa/rosto/objeto/ônibus/capa; **AUTEUR revê cada
peça**). Prompts sempre terminam com o negativo: `no people, no faces, no vehicles, no landmark,
no text, no logo, no watermark`.

| Página | Alma / nicho | Atmosfera única (conceito) | Prompt-semente | Status |
|---|---|---|---|---|
| **Expedição** | a travessia, o limiar | ⭐ **FEITA** — vale asiático em camadas ao amanhecer, rio dourado, cristas na névoa | *"vast layered Asian frontier landscape at warm misty dawn, terraced rice hills, river bend catching first light, olive & jade greens in amber light, volumetric mist"* | ✅ `atmosphere-expedicao.webp` (AUTEUR 92) |
| **Família** | linhagem, mesa, sítio | luz de fim de tarde entrando por uma varanda de madeira no cerrado, poeira dourada | *"warm late-afternoon light through a wooden countryside veranda, cerrado dusk, floating dust motes, olive and amber, intimate hearth glow"* | ▶ próximo |
| **Educação** | worldschooling, descoberta | mesa de estudo à luz de candeeiro, mapas e globo desfocados ao fundo (sem texto legível) | *"warm study desk atmosphere, out-of-focus maps and a globe, candlelight, paper tones, curiosity and wonder"* | ▶ próximo |
| **Saúde** | corpo, TRIBO BASE, vigor | amanhecer sobre campo aberto, orvalho, respiração — verde vivo e ouro | *"open field at dawn, dew, fresh living green, warm gold light, breath and vitality, misty"* | ▶ próximo |
| **Fé** | Cristo antes da Igreja | luz descendo por entre árvores altas (catedral natural), reverência sem templo | *"shafts of warm light descending through tall trees, natural cathedral, reverent, green and gold, mist"* | ▶ próximo |
| **Legado** | herança, o que se deixa | brasa e madeira ao anoitecer, luz de vela sobre superfície gasta (sem objetos legíveis) | *"embers and worn wood at dusk, candlelight glow, deep green shadow, timeless heritage warmth"* | ▶ próximo |
| **ALSHAM** (na Família) | tecnologia com alma | verde profundo + fagulhas de ouro (a atmosfera-verde atual serve, mas com grão próprio) | (reusa `atmosphere-verde`, calibrar) | ⚠️ revisar |
| **Journal** | diário sem filtro | papel de caderno gasto, luz lateral quente, uma dobra de página | *"worn journal paper, warm side light, a page fold, ink and paper tones, intimate"* | ▶ próximo |
| **Bazar & Livros** | curadoria, objetos do escritor | luz de ateliê sobre superfície de couro/madeira (sem produtos legíveis) | *"atelier light over leather and wood surface, warm curated calm, paper tones"* | ▶ próximo |

**Textura site-wide:** `paper-texture.webp` (grão de papel, `multiply` 5%) — permanece, é o Sol
comum (materialidade de página impressa em todo o site).

---

## 3. Comparativo contra o mundo (CHRONOS)

**Referências-farol do próprio universo (o dono já tem):** os sites **Aby Bonaparte** e
**Livraria** — cada tela é um capítulo do mesmo livro, atmosfera coesa, tipografia com intenção,
zero genérico.

**Classe mundial (fora do universo), e o que roubar de cada um:**

| Referência | O que faz de classe mundial | O que a Família rouba |
|---|---|---|
| **Kinfolk / Cereal (revistas)** | espaço negativo como luxo, foto editorial calma, tipografia serifada | respiro generoso; a foto respira, não grita |
| **National Geographic — travel** | narrativa por lugar, mapa que conta história, foto que dá vontade de ir | o **roteiro por destino** (não card de chatbot) |
| **Aesop / A24** | marca editada, menos portas mais dignidade, conteúdo antes da marca | hierarquia serena, CTA que não histeriza |
| **Atlas Obscura** | cada lugar é uma descoberta clicável, curiosidade como isca | "cada clique = descoberta" no roteiro |

**Onde a Família estava (v1) × onde chega (FASE 1) — Excellence Score por página (0–100):**

| Página | v1 (reprovada) | FASE 1 | Por quê |
|---|:--:|:--:|---|
| **Expedição** | 48 | **86** | atmosfera própria + roteiro clicável + Bazar prominente + mapa on-brand |
| **Família** | 55 | **80** | atmosfera própria (varanda/lar, AUTEUR 90) — remete à família, não paisagem genérica |
| **Educação** | 50 | **80** | atmosfera escola/worldschooling (globo/mapa/candeeiro, AUTEUR 89) |
| **Fé** | 50 | **82** | catedral natural / luz entre árvores (AUTEUR 91) |
| **Saúde** | 50 | **78** | campo ao amanhecer, orvalho, vigor (AUTEUR 88) |
| **Journal** | 40 | **76** | atmosfera de diário/papel (AUTEUR 86) + estado honesto "em breve" |
| **Bazar & Livros** | 50 | **78** | atelier do escritor, estantes/luz (AUTEUR 87) |

> **FASE 2 · Grupo 2 — CONCLUÍDO:** cada página acima ganhou a **atmosfera própria** (gerada via
> Ideogram — fallback do fal.ai, que ficou sem saldo; **cada peça revista pelo AUTEUR nos pixels**).
> A `atmosphere` compartilhada do `PageHero` permanece só como **fallback**.

> A Expedição é a **galinha dos ovos de ouro** — foi levada a nível farol nesta fase; as demais
> seguem o mesmo método na FASE 2.

---

## 4. As leis de aplicação (invioláveis)

1. **Honestidade primeiro.** Zero número/preço/foto inventada. Foto real → curada; ausente →
   placeholder honesto ⊕ (nunca stock fingindo ser real). Fatos de destino são públicos e
   verificáveis; a motivação da família reusa o campo `goal` (já honesto).
2. **Fundação antes do "uauau".** Contraste AA, responsivo, **cada imagem otimizada (webp) ANTES
   de commitar** (a lição dos 22 MB da Livraria). `lazy` em toda imagem de fundo.
3. **Lei da Imagem.** IA só gera ambiente/atmosfera/textura/ornamento. AUTEUR reprova o genérico
   e qualquer pessoa/objeto/ônibus/monumento — se escorregar, **corta ou descarta** (não sobe).
4. **Lei do Bazar.** Vitrine só exibe e aponta; sem preço à mão; "Ver no Bazar"; disclosure de
   afiliado visível.
5. **Pele da Família.** Tokens, zero hex, zero obsidian. O ouro é sagrado (≤ 1%).
