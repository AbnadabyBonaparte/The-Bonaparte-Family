# CLAUDE.md — The Bonaparte Family Portal

> **Copie este conteúdo para um arquivo `CLAUDE.md` na raiz do repositório The-Bonaparte-Family no GitHub.**

Portal-hub digital da família Bonaparte.

- **Stack:** React + TypeScript + Vite + Tailwind + Radix UI + Vercel
- **Deploy:** https://the-bonaparte-family.vercel.app
- **Repositório mestre:** GitHub `AbnadabyBonaparte/The-Bonaparte-Family`, branch `main`

## Design System

- Cores via CSS variables (oklch) em `client/src/index.css`
- Dark/Light mode funcional (ThemeContext)
- Fontes: Merriweather (editorial) + Inter (interface)
- Componentes shadcn/ui em `client/src/components/ui/`

## Regras

1. **Zero cores hardcoded** — usar sempre variáveis CSS do tema.
2. **Componentes UI** em `client/src/components/ui/` — não modificar componentes base do shadcn.
3. **Dados tipados** em `shared/` ou em `client/src` conforme a estrutura do projeto.
4. **Dark/Light mode** em todas as páginas.
5. **Mobile-first** — layout responsivo.

## Build e deploy

- **Instalar:** `pnpm install`
- **Desenvolvimento:** `pnpm dev`
- **Build:** `pnpm build` → gera `dist/public/`
- **Vercel:** conectado ao repo `The-Bonaparte-Family`, branch `main`; `vercel.json` na raiz define `buildCommand`, `outputDirectory`, rewrites.

## Estrutura principal

- `client/` — frontend (Vite + React)
- `shared/` — código compartilhado
- `docs/` — documentação e auditorias
- `vercel.json` — configuração do deploy Vercel
