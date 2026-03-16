# RELATÓRIO — CASA BONAPARTE (Fonte: GitHub como repositório mestre)

**Data:** 16 de março de 2026  
**Fonte da verdade:** Repositórios online no GitHub (API + conteúdo em `main`).

---

## 1. The-Bonaparte-Family (repositório mestre do portal)

| Item | Valor |
|------|--------|
| **URL GitHub** | https://github.com/AbnadabyBonaparte/The-Bonaparte-Family |
| **Branch principal** | `main` |
| **Default branch** | `main` |
| **Último commit** | `fd96c90` — "Create teste" (16 Mar 2026, 09:39 UTC) |
| **Penúltimo** | `f6afd42` — Merge PR #1 "Remove Express server and migrate to client-only deployment" |
| **Homepage (repo)** | https://the-bonaparte-family.vercel.app |
| **Linguagem** | TypeScript |
| **Tamanho (API)** | 26545 (KB) |

### Últimos 10 commits (resumo)

1. `fd96c90` — Create teste  
2. `f6afd42` — Merge pull request #1 — Remove Express server and migrate to client-only deployment  
3. (merge da branch `claude/apply-bonaparte-migration-2VpS9`)  
4. … (histórico anterior)

### Conteúdo na raiz (GitHub `main`)

- **vercel.json** — Existe. `buildCommand`: `pnpm build`, `outputDirectory`: `dist/public`, `installCommand`: `pnpm install`, rewrites SPA.
- **package.json** — Existe. Script `"build": "vite build"` (correto). Usa `pnpm`. Contém `vite-plugin-manus-runtime` em devDependencies e `next-themes`.
- **client/** — Existe (frontend).
- **docs/** — Existe.
- **server/** — **Não aparece** na listagem da raiz no GitHub; a migração (PR #1) removeu o server para deploy client-only.
- **README.md** — Existe.
- **Nenhum** `server.js` na raiz (não listado).
- **PRs abertos** — Nenhum (array vazio na API).

### Conclusão The-Bonaparte-Family

- O repositório **mestre** do site **https://the-bonaparte-family.vercel.app** é **The-Bonaparte-Family**.
- A branch **main** já tem a migração client-only (PR #1 merged).
- Build: `pnpm build` → `vite build`; output: `dist/public`.
- O Vercel que serve esse URL deve estar conectado a **AbnadabyBonaparte/The-Bonaparte-Family**, branch **main**.

---

## 2. casa-bonaparte-saas

| Item | Valor |
|------|--------|
| **URL GitHub** | https://github.com/AbnadabyBonaparte/casa-bonaparte-saas |
| **Branch principal** | `main` |
| **Descrição** | Plataforma SaaS privada para gestão de propriedade intelectual, monitoramento de maturidade editorial, projeção financeira e dashboard dos 11 livros da Casa Bonaparte. Construído com Manus. |
| **Homepage (repo)** | https://casa-bonaparte-saas.vercel.app |
| **Relação com The-Bonaparte-Family** | **Projeto diferente.** Tem pasta **the-bonaparte-family-migration/** com artefatos de migração que foram aplicados ao The-Bonaparte-Family (via PR #1). |

### Conteúdo na raiz (GitHub)

- **the-bonaparte-family-migration/** — Existe (pacote/patches de migração já aplicados no outro repo).
- **client/**, **server/**, **drizzle/**, **scripts/**, **shared/**, **patches/**.
- **AUDITORIA_FORENSE_ALSHAM.md**, **todo.md**, **package.json**, **vite.config.ts**, **tsconfig.json**, **vitest.config.ts**, **drizzle.config.ts**, etc.
- **Não** é o mesmo código do portal; é a aplicação SaaS com deploy em **casa-bonaparte-saas.vercel.app**.

### Conclusão casa-bonaparte-saas

- **Propósito:** Repositório da aplicação **SaaS** da Casa Bonaparte (outro produto).
- **Relação:** Contém a pasta **the-bonaparte-family-migration** como repo **auxiliar** onde foi preparada a migração que depois foi mergeada no **The-Bonaparte-Family**.
- **Precisa de ação para o portal?** Não. Para o site the-bonaparte-family.vercel.app o único repo que importa é **The-Bonaparte-Family**.

---

## 3. Respostas diretas

- **São o MESMO projeto ou projetos DIFERENTES?**  
  **Projetos DIFERENTES.**  
  - **The-Bonaparte-Family** = portal (the-bonaparte-family.vercel.app).  
  - **casa-bonaparte-saas** = SaaS (casa-bonaparte-saas.vercel.app).

- **Qual repo deve estar conectado ao Vercel para the-bonaparte-family.vercel.app?**  
  **AbnadabyBonaparte/The-Bonaparte-Family**, branch **main**.

- **O casa-bonaparte-saas é só um repo auxiliar com patches?**  
  Não só: é o projeto SaaS completo. A pasta **the-bonaparte-family-migration** dentro dele é que era o “auxiliar” com os patches já aplicados no The-Bonaparte-Family via PR #1.

---

## 4. Vercel (o que você pode conferir no dashboard)

Não é possível acessar seu dashboard daqui. Confira manualmente:

1. Projeto **the-bonaparte-family** no Vercel existe?  
2. Repositório conectado: **AbnadabyBonaparte/The-Bonaparte-Family**.  
3. Branch de deploy: **main**.  
4. Último deploy: sucesso ou falha? (se falhou, ver logs).  
5. Build command: **pnpm run build** (ou `pnpm build` conforme `vercel.json`).  
6. Output directory: **dist/public**.  
7. Variáveis de ambiente: conferir se alguma é obrigatória para o build.

O site **https://the-bonaparte-family.vercel.app** estava acessível e carregando o conteúdo do portal (Home, Start Here, Expedition, Family, Life, Education, ALSHAM, Work, Legacy) na data deste relatório.

---

## 5. Problemas encontrados / sugeridos

- **Nenhum problema crítico** no estado atual do **main** do The-Bonaparte-Family para o deploy.
- **package.json** ainda tem `"start": "NODE_ENV=production node dist/index.js"` — legado; o build atual é só `vite build` e não gera `dist/index.js`. Pode ser removido ou deixado sem uso.
- **vite-plugin-manus-runtime** em devDependencies no The-Bonaparte-Family: se não for usado no portal, pode ser removido para simplificar.
- **vercel.json**: já está coerente (pnpm, dist/public, rewrites). Se quiser, pode adicionar headers de segurança (X-Content-Type-Options, X-Frame-Options, etc.) como no exemplo da missão.

---

## 6. O site está no ar?

- **Sim.**  
- **URL:** https://the-bonaparte-family.vercel.app  
- Conteúdo verificado: título "The Bonaparte Family", links para Start Here, Expedition, Family, Life, Education, ALSHAM, Work, Legacy.

---

## 7. Governança sugerida no repositório mestre

- Adicionar **CLAUDE.md** na raiz do **The-Bonaparte-Family** (conteúdo sugerido em anexo ou em outro doc).
- Manter **README.md** com nome, descrição, como rodar, estrutura, stack e deploy (já existe no GitHub; revisar se quiser).

---

*Relatório gerado com base exclusiva nos repositórios online no GitHub (API e conteúdo em `main`).*
