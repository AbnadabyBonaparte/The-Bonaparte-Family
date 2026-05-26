# JOURNAL BONAPARTE — Documento de Ativação
**Repo:** `The-Bonaparte-Family`  
**Criado em:** 26/05/2026  
**Status atual:** Código no ar. Banco de dados pendente.

---

## O que já está pronto (não mexer)

Estes arquivos já existem no repo e estão funcionando:

| Arquivo | Função |
|---------|--------|
| `client/src/lib/supabase.ts` | Cliente Supabase + tipo JournalEntry |
| `client/src/pages/Journal.tsx` | Página pública `/journal` |
| `client/src/pages/Escrever.tsx` | Página privada `/escrever` |
| `client/src/App.tsx` | Rotas `/journal` e `/escrever` já adicionadas |
| `client/src/components/Header.tsx` | Link "Journal" já no menu |

---

## O que falta — 4 passos para ativar

### PASSO 1 — Regularizar o Supabase
Acessar: `supabase.com/dashboard/org`  
Pagar faturas pendentes da conta ALSHAM GLOBAL.  
Criar ou reativar um projeto.  
Anotar o `Project URL` e o `anon key` (ficam em Settings → API).

---

### PASSO 2 — Rodar o SQL no Supabase

Abrir **SQL Editor** no painel do Supabase e executar:

```sql
CREATE TABLE journal_entries (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  entry_date date NOT NULL,
  location text NOT NULL,
  text text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read"  ON journal_entries FOR SELECT USING (true);
CREATE POLICY "auth insert"  ON journal_entries FOR INSERT WITH CHECK (true);
```

---

### PASSO 3 — Inserir a Entrada 001

Ainda no SQL Editor, rodar:

```sql
INSERT INTO journal_entries (entry_date, location, text) VALUES (
  '2026-05-26',
  'Fazenda da bisavó · Aragarças, GO',
  'A bisavó está com quase noventa anos e a casa dela ainda chama todo mundo. 
Viemos. A tia Neide fez bolos. A vó vai viajar para fazer exames — ela está 
cansada, e esse cansaço nos preocupa de um jeito que não cabe em palavras.

Ana Maria bateu o dedo numa raiz correndo. Deslocou a unha. Chorou. 
Continuou correndo depois.

Tem um cavalo sendo tratado de um machucado. Tem mutum, siriema e saracura 
aparecendo no sítio. Animais que não pedem licença para entrar.

O papai fechou um show num casamento.

E o rancho ainda não vendeu. Dependemos desse dinheiro para a Ásia. 
A vida não espera — e a viagem também não.

A vida aqui continua.'
);
```

---

### PASSO 4 — Setar variáveis no Vercel

Acessar: `vercel.com` → projeto `the-bonaparte-family` → **Settings → Environment Variables**

Adicionar as três variáveis:

| Nome | Valor |
|------|-------|
| `VITE_SUPABASE_URL` | `https://<project-ref>.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | anon key copiada do painel Supabase |
| `VITE_JOURNAL_PASSWORD` | senha escolhida pela família (ex: `bonaparteXXXX`) |

Após salvar → clicar em **Redeploy** no Vercel.

---

## Como usar depois de ativo

**Para ler:** qualquer pessoa acessa `the-bonaparte-family.vercel.app/journal`

**Para escrever:** qualquer pessoa da família acessa `the-bonaparte-family.vercel.app/escrever`
- Digita a senha definida no VITE_JOURNAL_PASSWORD
- Preenche: data, local, texto, foto (opcional — URL de imagem)
- Clica em Publicar
- Aparece no Journal imediatamente

**Sem GitHub. Sem Cursor. Sem código.**

---

## Diretrizes editoriais do Journal

### Tom
- Escrever como se estivesse contando para um amigo próximo
- Não precisa ser bonito. Precisa ser verdadeiro.
- Imperfeição é conteúdo. Preocupação é conteúdo. Alegria pequena é conteúdo.
- Evitar linguagem de "post de Instagram"

### Frequência recomendada
- Mínimo: 1 entrada por semana
- Ideal: sempre que algo merecer registro — não importa o tamanho
- Uma linha já é uma entrada válida

### Estrutura de cada entrada
```
Data: obrigatório
Local: obrigatório (cidade, lugar específico)
Texto: obrigatório (sem mínimo de tamanho)
Foto: opcional (URL de imagem já hospedada)
```

### O que registrar
Momentos cotidianos que parecem pequenos mas não são:
- Animais que aparecem no sítio
- O que as meninas aprenderam hoje
- Uma frase que alguém disse na mesa
- Uma dificuldade real (rancho, dinheiro, cansaço)
- Uma conquista (show fechado, livro enviado, venda feita)
- Uma foto da comida, da janela, da estrada

### O que NÃO é o Journal
- Não é feed de Instagram (sem hashtags, sem emojis em excesso)
- Não é relatório de negócios
- Não é blog com SEO
- Não é performance

**É o arquivo permanente da família Bonaparte.**  
Daqui a 30 anos Sarah e Ana Maria vão ler cada entrada.

---

## Fluxo de publicação (depois de ativo)

```
Aconteceu algo
      ↓
Abre o celular
      ↓
the-bonaparte-family.vercel.app/escrever
      ↓
Digita a senha
      ↓
Escreve (5 minutos ou menos)
      ↓
Publica → aparece no Journal
      ↓
Opcional: copia e adapta para Instagram / WhatsApp / TikTok
```

**O site é a fonte. As redes são os alto-falantes.**

---

## Notas técnicas para o Cursor quando ativar

Se precisar de ajustes futuros no Journal, os arquivos relevantes são:

- **Adicionar campo novo** (ex: categoria) → editar `supabase.ts` + `Journal.tsx` + `Escrever.tsx`
- **Mudar o visual do Journal** → editar apenas `Journal.tsx`
- **Mudar o formulário de escrita** → editar apenas `Escrever.tsx`
- **Mudar a senha** → atualizar só a env var no Vercel (sem commit)

---

*Documento criado em 26/05/2026 · Sessão Bonaparte · Claude Sonnet 4.6*
