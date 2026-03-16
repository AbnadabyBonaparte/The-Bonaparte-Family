# The Bonaparte Family

Portal-hub digital da família Bonaparte.

> *"Real life. Road. Land. Education. Health. Faith. Business. Legacy."*

**Site:** https://the-bonaparte-family.vercel.app

---

## Stack

React 19 · TypeScript · Vite 7 · Tailwind CSS 4 · Radix UI · wouter · Vercel

## Início Rápido

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # dist/public/
pnpm test      # vitest
```

## Estrutura

```
client/src/
├── pages/           # 12 páginas do portal
├── components/
│   ├── ui/          # shadcn/Radix base
│   ├── Header.tsx
│   └── Footer.tsx
├── data/            # Dados tipados (family, expedition, work, store)
├── contexts/        # ThemeContext (dark/light)
├── hooks/
├── lib/             # Utilitários
└── index.css        # Design tokens (oklch)
```

## Páginas

Home · Start Here · Family · Life · Expedition · Education · Health · Faith · ALSHAM · Work · Store · Legacy

## Design System

- Cores: CSS variables oklch() — `:root` (light) + `.dark` (dark)
- Fontes: Merriweather (editorial) + Inter (interface)
- Dark/Light mode com toggle no Header

---

ALSHAM Global Commerce Ltda. · Aragarças, Goiás · 2026
