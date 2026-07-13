-- Journal Bonaparte — schema + Row Level Security
-- Run this once in the Supabase SQL Editor (Dashboard → SQL Editor → New query).
--
-- Security model:
--   * SELECT is public — the diary is meant to be read by anyone at /journal.
--   * INSERT / UPDATE / DELETE require a real authenticated Supabase session.
--     The anon key alone can only read; writes are rejected server-side by RLS,
--     so the client can no longer be the security boundary.
--
-- The owner (the person who publishes at /escrever) signs in with a Supabase
-- Auth user. Create that user in Dashboard → Authentication → Users → "Add user"
-- (set an email + password, and mark it as confirmed). Only signed-in users can
-- write. Reads stay open to everyone.

-- 1. Table (idempotent — skip if it already exists)
create table if not exists public.journal_entries (
  id          uuid        default gen_random_uuid() primary key,
  entry_date  date        not null,
  location    text        not null,
  text        text        not null,
  image_url   text,
  created_at  timestamptz default now()
);

-- 2. Enable Row Level Security
alter table public.journal_entries enable row level security;

-- 3. Reset any older/looser policies so this file is the single source of truth
drop policy if exists "public read"            on public.journal_entries;
drop policy if exists "auth insert"            on public.journal_entries;
drop policy if exists "journal_public_read"    on public.journal_entries;
drop policy if exists "journal_auth_insert"    on public.journal_entries;
drop policy if exists "journal_auth_update"    on public.journal_entries;
drop policy if exists "journal_auth_delete"    on public.journal_entries;

-- 4. Public can READ every entry
create policy "journal_public_read"
  on public.journal_entries
  for select
  using (true);

-- 5. Only authenticated users can WRITE
--    (to lock this to a single owner, replace `auth.role() = 'authenticated'`
--     with `auth.uid() = 'REPLACE-WITH-OWNER-UID'::uuid` in each policy below.)
create policy "journal_auth_insert"
  on public.journal_entries
  for insert
  to authenticated
  with check (true);

create policy "journal_auth_update"
  on public.journal_entries
  for update
  to authenticated
  using (true)
  with check (true);

create policy "journal_auth_delete"
  on public.journal_entries
  for delete
  to authenticated
  using (true);
