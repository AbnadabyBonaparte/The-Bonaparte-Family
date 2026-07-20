# 🏆 RECEITA DO SANTO GRAAL — Método Visual do Universo Bonaparte

> **O que é isto:** o método reutilizável para transformar QUALQUER site do universo
> (Livraria, The Bonaparte Family, ALSHAM, futuros) numa experiência coesa e memorável —
> um "santo graal". Extraído da direção de arte da Livraria (`DIRECAO_DE_ARTE_LIVRARIA.md`),
> generalizado. **NÃO é uma estética fixa** — cada mundo tem sua pele (Lei dos Planetas e do
> Sol). Isto é o PROCESSO, não a cor.
>
> **Como usar:** toda vez que for embelezar um mundo, copie este arquivo para
> `docs/DIRECAO_DE_ARTE_<MUNDO>.md`, preencha os `<campos>`, e siga os passos na ordem.

---

## ⚠️ REGRA DE OURO DA ORDEM (o erro que já cometemos — não repita)

Na Livraria fizemos **beleza primeiro, performance depois** — e a auditoria puniu (nota 5,6
por 22 MB de imagem não comprimida). A ordem CERTA é:

1. **Estrutura honesta** (conteúdo real, catálogo verdadeiro, zero invenção)
2. **Fundação técnica** — contraste WCAG AA, performance, acessibilidade, imagens leves DESDE O INÍCIO
3. **DEPOIS** a atmosfera, os respiros, o "uauau"

Beleza sobre fundação quebrada = retrabalho. Comprima imagens ANTES de subir, sempre.

---

## PASSO 1 · ACHE O EIXO (a alma) — antes de tocar em um pixel

Escreva UMA frase que capture a alma deste mundo. Toda decisão visual deriva dela.
Sem eixo, o site vira colcha de retalhos bonita.

- Livraria (exemplo): *"o céu do interior à noite, visto por quem sente o Observador — entre o rio e o cosmos."*
- **Este mundo:** `<escrever a frase-alma>`

Defina também o TOM emocional e o que ele NÃO é:
- Sensação central: `<ex: pertencimento, sagrado, poder, aconchego>`
- Nunca: `<ex: frio, corporativo, genérico, gótico>`

---

## PASSO 2 · DEIXE O CONTEÚDO REAL DITAR A ESTÉTICA

Regra inviolável: **o site é a CONTINUAÇÃO do conteúdo real, não algo colado por cima.**
Abra e observe o material real deste mundo e extraia o que se repete.

- Fonte da verdade estética: `<ex: capas dos livros / fotos da família / telas do produto>`
- Elementos visuais recorrentes encontrados (preencher tabela):

| Elemento | Onde aparece | Como usar no site |
|---|---|---|
| `<ex: obsidiana vasta>` | `<onde>` | `<base/fundo>` |
| `<ex: feixe de luz>` | `<onde>` | `<hero/transições>` |
| `<...>` | | |

> ⚠️ **Imagem real é intocável.** Capa de livro, foto de família, retrato — NUNCA gerada,
> nunca "melhorada" por IA. IA gera só AMBIENTE/atmosfera/efeito. (Lei da Imagem.)

---

## PASSO 3 · DEFINA A PALETA (CSS variables nomeadas — nunca hex solto)

Derive a paleta do conteúdo real. Nomeie tudo. Acento (ouro/cor-marca) ≤ 1% de área.