# AUDITORIA FORENSE ALSHAM — THE BONAPARTE FAMILY (PÓS-REDESIGN)

**Data:** 16 de março de 2026  
**Commit auditado:** `0b38d48` (Merge PR #2 — Redesign completo do portal)  
**Repositório:** https://github.com/AbnadabyBonaparte/The-Bonaparte-Family  
**Site:** https://the-bonaparte-family.vercel.app

---

## 1. IDENTIDADE DO PROJETO

| Item | Valor |
|------|--------|
| **Nome** | portal-bonaparte (package.json) |
| **Tipo** | Portal editorial SPA (client-only) |
| **Stack** | React 19 + TypeScript + Vite 7 + Tailwind CSS 4 + Radix UI + wouter |
| **Branch** | main |
| **Build** | `vite build` → `dist/public` |
| **Deploy** | Vercel (buildCommand: pnpm build, outputDirectory: dist/public) |
| **Páginas** | 12 rotas + NotFound (Home, StartHere, Family, Life, Expedition, Education, Health, Faith, ALSHAM, Work, Store, Legacy) |
| **Estrutura** | client/src (App, pages, components, contexts, hooks, data, lib), shared, docs; sem server/ na raiz |

---

## 2. DIAGNÓSTICO MANUS — PROMESSAS vs ENTREGA

| Promessa | Entregue? | Evidência |
|----------|-----------|-----------|
| Zero cores hardcoded | **Quase** | Hex: apenas em `client/src/components/ui/chart.tsx` (overrides para Recharts: `#ccc`, `#fff` em seletores de biblioteca). Páginas e Header/Footer não usam hex. |
| Tailwind sem hardcoded (bg-white, text-gray…) | **Parcial** | Páginas e layout usam tokens (bg-background, text-foreground, text-muted-foreground, border-border, etc.). **Violações** em componentes shadcn/ui: `button.tsx` e `badge.tsx` (`text-white` em variante destructive), `slider.tsx` (`bg-white` no thumb), `dialog.tsx`, `sheet.tsx`, `drawer.tsx`, `alert-dialog.tsx` (`bg-black/50` no overlay). |
| Sistema oklch() em CSS | **Sim** | `client/src/index.css`: `:root` e `.dark` com variáveis oklch() (background, foreground, primary, accent, muted, border, etc.). `@theme inline` mapeia --color-* para var(--*). |
| Dark mode funcional | **Sim** | `ThemeContext.tsx` com toggle, persistência em localStorage, classe `.dark` no `<html>`. Header com botão de tema. |
| 12 páginas editoriais | **Sim** | 12 rotas com conteúdo distinto; layout page-shell + editorial-container; hero-title, font-serif para títulos. |
| Fontes Inter + Merriweather | **Sim** | `client/index.html`: Google Fonts; `index.css`: --font-sans (Inter), --font-serif (Merriweather); base com font-sans, h1–h4 com font-serif. |
| Dados tipados / data layer | **Sim** | `client/src/data/`: family.ts (familyMembers, familyValues, pets), expedition.ts (countries, checkpoints), work.ts (books). Conteúdo curado (nomes, países, livros), não genérico. |
| Deploy client-only, output dist/public | **Sim** | vite.config.ts: root client, outDir dist/public. vercel.json coerente. Sem server.js na raiz. |

**Resumo:** A Manus entregou a maior parte do combinado. Pontos fracos: (1) resquícios de cor em componentes UI (shadcn) e um arquivo de chart; (2) legado Manus ainda presente (vite-plugin-manus-runtime, __manus__/, ManusDialog, debug-collector).

---

## 3. AS 6 LEIS ALSHAM — STATUS E EVIDÊNCIAS

### Lei 1 — Zero cores hardcoded (hex / Tailwind literal)

- **Hex em TS/TSX:** 1 arquivo — `client/src/components/ui/chart.tsx` (strings `#ccc`, `#fff` em classes que sobrescrevem estilos do Recharts). Resto do app limpo.
- **Hex em CSS:** Nenhum nos arquivos do projeto (index.css usa só oklch e var()).
- **Tailwind hardcoded em páginas/layout:** Nenhum. Header, Footer, Home, StartHere, Expedition, Family, Work usam bg-background, text-foreground, text-muted-foreground, border-border, text-primary, etc.
- **Tailwind hardcoded em componentes ui/:** Sim — button/badge (text-white), slider (bg-white), overlay (bg-black/50) em dialog/sheet/drawer/alert-dialog. São componentes base shadcn; as páginas não introduzem novos hardcodes.

**Status:** 🟡 **Parcial** — SSOT em CSS e páginas respeitado; exceções em UI base e chart.

### Lei 2 — Usar componentes de design system (shadcn/Radix)

- **Uso:** Páginas usam Card, Button, Link (wouter); Header/Footer usam Button. Grande parte dos componentes em `client/src/components/ui/` é Radix/shadcn-like.
- **ManusDialog:** Componente custom Manus ainda presente; não substituído por Dialog do sistema.

**Status:** 🟢 **Respeitada** no app; 🟡 componente Manus legado ainda existe.

### Lei 3 — Dados 100% reais (sem mock/fake/dummy)

- **Busca por mock/fake/placeholder/dummy/lorem:** Em código de aplicação não há uso para dados falsos. Ocorrências encontradas: `placeholder` em componentes ui (Tailwind `placeholder:text-muted-foreground`) e `hasFakeCaret` em input-otp (API da lib). Nenhum mock de conteúdo.
- **Data layer:** family.ts, expedition.ts, work.ts, store.ts com conteúdo curado (família, expedição, livros). Não é mock genérico.

**Status:** 🟢 **Respeitada.**

### Lei 4 — Manter funcionalidades existentes

- **Escopo:** Auditoria read-only; não foram removidas funcionalidades. ErrorBoundary, lazy loading, ThemeProvider, rotas e conteúdo mantidos.

**Status:** 🟢 **Respeitada.**

### Lei 5 — Design system como SSOT

- **CSS:** index.css define :root e .dark com oklch(); @theme inline expõe --color-* para Tailwind. Páginas e layout usam essas variáveis via classes (bg-background, text-foreground, etc.).
- **Exceções:** Como acima, em alguns ui/ (text-white, bg-white, bg-black/50) e chart (#ccc, #fff).

**Status:** 🟡 **Parcial** — SSOT correto no global; exceções localizadas em UI/chart.

### Lei 6 — Governança e documentação para IA

- **CLAUDE.md na raiz:** Não existe.
- **docs/:** Existe docs/ (CLAUDE_BONAPARTE_PORTAL.md, AUDITORIA_FORENSE_COMPLETA.md, relatórios, dossiê). README na raiz com visão geral e “como rodar” (incompleto).
- **.cursorrules / .github/copilot-instructions:** Não encontrados.

**Status:** 🔴 **Não atendida** na raiz (CLAUDE.md); documentação em docs/ existe.

---

## 4. SCORECARD (0–10 POR DIMENSÃO)

| Dimensão | Nota | Comentário |
|----------|------|------------|
| **Estrutura e organização** | 8 | client/pages/components/data/hooks/contexts claro; sem server na raiz; resquícios __manus__ e plugin. |
| **Stack tecnológica** | 9 | React 19, Vite 7, TS strict, Tailwind 4, Radix, wouter; script `start` legado e express em deps sem uso. |
| **Arquitetura (rotas, data, UI)** | 8 | 12 páginas lazy-loaded, data/* tipado e usado nas páginas, Header/Footer consistentes. |
| **Visual DNA (cores, temas, fontes)** | 7 | oklch + dark mode + Inter/Merriweather bem aplicados nas páginas; falhas em ui/ e chart. |
| **Dados e conteúdo** | 9 | Conteúdo real/curado; zero mock de negócio. |
| **Qualidade (estados, testes, lint, CI)** | 5 | ErrorBoundary e Suspense presentes; 0 testes; 0 ESLint config; 0 Husky; 0 GitHub Actions. |
| **Segurança** | 6 | .env.example presente, sem secrets no código; vercel.json sem headers de segurança (X-Frame-Options, etc.). |
| **Performance e SEO** | 8 | Lazy de todas as páginas; index.html com meta, og:, twitter:, description, canonical, theme-color, robots. |
| **Documentação e governança** | 4 | README básico; docs/ útil; sem CLAUDE.md na raiz, sem .cursorrules/copilot. |
| **Build e deploy** | 6 | vercel.json e vite config corretos; build local falhou por PostCSS herdado (OneDrive); não indica bug do repo. |

**Média:** **(7,0 / 10)**

---

## 5. COMPARATIVO COM AUDITORIA ANTERIOR

- **Contexto citado:** Construção original Manus “nota 3.8/10”; migração ALSHAM parcial (limpeza, deploy, governança); em seguida redesign editorial Manus (PR #2).
- **docs/AUDITORIA_FORENSE_COMPLETA.md:** Refere estrutura com server/, ManusDialog, __manus__; não traz scorecard numérico na forma 3.8; descreve estado anterior (jan 2026).
- **Delta pós-redesign:** Estrutura client-only consolidada; design system oklch + dark mode; 12 páginas editoriais com conteúdo e data layer; zero mock; lazy e SEO em dia. Pontos que permanecem: legado Manus (plugin, __manus__/, ManusDialog), cores em ui/chart, ausência de testes/CI e CLAUDE.md na raiz.

**Conclusão:** A fundação subiu claramente em relação ao estado “3.8” original; o redesign cumpriu a maior parte dos objetivos visuais e de dados; o que falta é sobretudo governança, testes e limpeza de resquícios.

---

## 6. GAPS CRÍTICOS (PRIORIZADOS)

### 🔴 Críticos

- **Sem CLAUDE.md na raiz** — Dificulta onboarding de IA e consistência de regras (zero cores, shadcn, dados reais).
- **Sem testes automatizados** — Nenhum .test.* ou .spec.*; regressões e refatoração sem rede de segurança.
- **Sem CI (GitHub Actions)** — Nenhum workflow; build/lint não garantidos em todo commit.

### 🟡 Médios

- **Legado Manus** — vite-plugin-manus-runtime no package.json e vite.config; pasta client/public/__manus__/ e debug-collector; ManusDialog.tsx. Aumentam ruído e superfície; não bloqueiam deploy.
- **Cores em componentes ui/** — text-white, bg-white, bg-black/50 em button, badge, slider, dialog/sheet/drawer/alert-dialog; chart.tsx com #ccc/#fff. Ideal migrar para tokens (ex.: bg-background, text-primary-foreground) ou var() para overlays.
- **Script e dependência legados** — package.json: "start": "NODE_ENV=production node dist/index.js" (não usado); express em dependencies. Podem ser removidos para clareza.

### 🟢 Menores

- **Headers de segurança no Vercel** — vercel.json não define X-Content-Type-Options, X-Frame-Options, etc.; recomendável adicionar.
- **README** — Pode ser atualizado (sem “Backend Node”, refletir client-only e comandos atuais).

---

## 7. PLANO DE MELHORIA (PRÓXIMOS PASSOS CONCRETOS)

1. **Governança** — Criar CLAUDE.md na raiz com regras do projeto (zero cores hardcoded, shadcn, dados reais, estrutura client-only, deploy Vercel). Opcional: .cursorrules ou .github/copilot-instructions.
2. **Qualidade** — Introduzir ESLint (e opcionalmente Prettier no CI); adicionar 1–2 testes críticos (ex.: smoke do App ou da Home) e workflow de CI (build + lint) no GitHub Actions.
3. **Visual** — Substituir em ui/ e chart: text-white/bg-white/bg-black/50 e hex por tokens do tema (ou var()) onde fizer sentido, sem quebrar acessibilidade/contraste.
4. **Limpeza** — Remover ou desativar vite-plugin-manus-runtime e __manus__/ se não forem mais usados; substituir ou remover ManusDialog; remover script "start" e dependência express se não houver uso.
5. **Segurança** — Incluir headers (X-Content-Type-Options, X-Frame-Options, etc.) em vercel.json.
6. **Documentação** — Atualizar README (stack atual, client-only, comandos pnpm dev / pnpm build).

---

## 8. LEITURA PROFUNDA DAS 5 PÁGINAS PRINCIPAIS

### Home

- **Hero:** Sim — “The Bonaparte Family”, subtítulo, localização (Aragarças, Goiás), CTA “Scroll para explorar”.
- **Seções:** “Explore Our World” (cards Expedition, Family, Education, Life); “Systems & Legacies” (ALSHAM, Work, Legacy); CTA “Start Here”.
- **Fontes:** hero-title (font-serif), corpo e UI com font-sans; uso de text-primary, text-muted-foreground.
- **Responsivo:** grid md:grid-cols-2 e md:grid-cols-3, editorial-container.
- **Cores:** Apenas tokens (bg-background, text-foreground, text-muted-foreground, border-primary, etc.).
- **Conteúdo:** Específico da família e do portal; não genérico.

### StartHere

- **Hero:** Título “Comece Aqui”, texto introdutório sobre a família e o portal.
- **Seções:** Timeline (2020 → Sítio, etc.), “Explore as seções” com links.
- **Fontes e cores:** hero-title, font-serif; tokens em todo o layout.
- **Responsivo:** grid md:grid-cols-4 e md:grid-cols-3.
- **Conteúdo:** Real e alinhado ao propósito do site.

### Expedition

- **Hero:** “Expedição Bonaparte 2026-2027”, subtítulo com 13 meses, 12 países, Alfredo.
- **Seções:** Países (data/expedition), Alfredo (texto + placeholder “Foto do Alfredo”), timeline documental (checkpoints), “Worldschooling na estrada”.
- **Dados:** countries e checkpoints importados de @/data/expedition.
- **Fontes/cores:** hero-title, font-serif; tokens; um placeholder visual explícito (foto).
- **Responsivo:** grid md:grid-cols-2 e md:grid-cols-3.

### Family

- **Hero:** “A Família”, subtítulo “Quatro pessoas, dois cachorros…”.
- **Seções:** familyMembers (cards com nome, role, description, quote), familyValues, pets (data/family).
- **Fontes/cores:** font-serif em títulos, tokens; conteúdo real (nomes, citações, valores, pets).
- **Responsivo:** grid md:grid-cols-2 e md:grid-cols-3.

### Work

- **Hero:** “Obra”.
- **Seções:** Livros (books de data/work), Música, Documentário (texto descritivo).
- **Fontes/cores:** Mesmo padrão editorial e tokens.
- **Conteúdo:** Títulos de livros e temas reais; descrições objetivas.

**Resumo das 5 páginas:** Todas têm hero ou título de página forte, seções distintas, uso de Merriweather (font-serif) para títulos e Inter (font-sans) via design system, layout mobile-first com grids responsivos, e uso consistente de tokens (sem cores hardcoded nas páginas). Conteúdo é real e específico; único placeholder explícito é “Foto do Alfredo” em Expedition.

---

## 9. VEREDICTO FINAL

**Os alicerces estão sólidos o suficiente para construir em cima.**

O redesign entregou um portal editorial coerente: sistema de cores oklch() com dark mode, fontes Inter e Merriweather, 12 páginas com conteúdo real e data layer tipado, rotas lazy-loaded, SEO básico em dia e deploy client-only bem configurado. As páginas principais seguem o design system e não introduzem cores hardcoded; as exceções estão em componentes de UI (shadcn) e num componente de chart, e são tratáveis. O que mais fragiliza a base é a falta de governança explícita (CLAUDE.md na raiz), a ausência de testes e CI, e o legado Manus (plugin, __manus__/, ManusDialog), que não quebram o site mas aumentam dívida técnica. Recomendação: usar a fundação atual para evoluir conteúdo e funcionalidades; em paralelo, implementar o plano de melhoria (governança, testes, CI, limpeza de cores e legado) para deixar o projeto mais resiliente e previsível para a próxima fase.

---

*Auditoria read-only. Nenhum arquivo do repositório foi alterado. Relatório gerado em 16 de março de 2026.*
