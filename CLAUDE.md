# CLAUDE.md — The Bonaparte Family Portal

Portal-hub digital da família Bonaparte — expedição, educação, negócios, legado.

## Stack
React 19 + TypeScript + Vite 7 + Tailwind CSS 4 + Radix UI + wouter + Vercel

## Deploy
- **Site:** https://the-bonaparte-family.vercel.app
- **Repo:** AbnadabyBonaparte/The-Bonaparte-Family, branch `main`
- **Build:** `pnpm build` → `dist/public/`
- **Vercel:** conectado ao repo, deploy automático

## Design System

### Cores
- SSOT: `client/src/index.css` — variáveis oklch() para `:root` (light) e `.dark` (dark)
- Cor primária: verde oliva Bonaparte
- Cor de acento: âmbar terroso
- NUNCA usar hex (#xxx) em componentes .tsx/.ts
- NUNCA usar bg-white, bg-black, bg-gray-*, text-white, text-gray-*, bg-blue-*, bg-slate-*
- SEMPRE usar: bg-background, text-foreground, bg-card, text-muted-foreground, bg-primary, text-primary, bg-accent, border-border

### Fontes
- **Merriweather** (font-serif) → títulos editoriais, citações, hero
- **Inter** (font-sans) → interface, corpo, labels, navegação
- Carregadas via Google Fonts no `client/index.html`

### Dark Mode
- Toggle via ThemeContext (classe `.dark` no `<html>`)
- Persistência em localStorage
- TODA página deve funcionar nos dois temas

## Estrutura
```
client/src/
├── pages/           # 12 páginas do portal
├── components/
│   ├── ui/          # shadcn/Radix (não modificar base)
│   ├── Header.tsx   # Navegação + tema
│   └── Footer.tsx   # Links + copyright
├── data/            # Dados tipados (family, expedition, work, store)
├── contexts/        # ThemeContext
├── hooks/           # Custom hooks
├── lib/             # Utilitários (cn, etc.)
└── index.css        # SSOT de cores (oklch)
```

## Regras (5 Leis do Portal)
1. **Zero cores hardcoded** — tudo via CSS variables do tema
2. **Componentes UI** em components/ui/ — nunca modificar base, só estender
3. **Dados reais** — zero mock/fake/lorem. Dados tipados em data/
4. **Dark/Light mode** funcional em todas as páginas
5. **Mobile-first** — layout responsivo em tudo

## Formato de commit
```
<type>: <description>
- bullet 1
- bullet 2
NOME DO BLOCO ✅
```
Types: feat, fix, refactor, style, docs, test, chore
