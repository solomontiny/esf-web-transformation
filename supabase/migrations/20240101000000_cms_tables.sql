-- ============================================================
-- ESF CMS — content tables + storage bucket
-- Run this once in your Supabase SQL editor (Dashboard > SQL Editor).
-- ============================================================

-- ── 1. cms_content ──────────────────────────────────────────
-- One row per website section. `section` is the unique key.
-- `content` is a free-form JSONB blob matching each section's
-- TypeScript shape defined in src/lib/cms.ts.
-- ────────────────────────────────────────────────────────────
create table if not exists public.cms_content (
  id          uuid primary key default gen_random_uuid(),
  section     text not null unique,
  content     jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

-- Keep updated_at current automatically.
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_cms_content_updated_at on public.cms_content;
create trigger trg_cms_content_updated_at
  before update on public.cms_content
  for each row execute procedure public.set_updated_at();

-- ── 2. cms_gallery ──────────────────────────────────────────
-- Each row is one gallery image with a caption and sort order.
-- ────────────────────────────────────────────────────────────
create table if not exists public.cms_gallery (
  id           uuid primary key default gen_random_uuid(),
  storage_path text not null,
  caption      text not null default '',
  sort_order   integer not null default 0,
  created_at   timestamptz not null default now()
);

-- ── 3. Row-Level Security ────────────────────────────────────
-- Public reads allowed (website will eventually read these).
-- Writes require an authenticated session (admin only).
-- ────────────────────────────────────────────────────────────
alter table public.cms_content  enable row level security;
alter table public.cms_gallery  enable row level security;

-- cms_content
create policy "cms_content_public_read"
  on public.cms_content for select
  using (true);

create policy "cms_content_auth_write"
  on public.cms_content for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- cms_gallery
create policy "cms_gallery_public_read"
  on public.cms_gallery for select
  using (true);

create policy "cms_gallery_auth_write"
  on public.cms_gallery for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ── 4. Storage bucket ───────────────────────────────────────
-- Public bucket so images can be served without a signed URL.
-- ────────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public)
values ('cms-images', 'cms-images', true)
on conflict (id) do nothing;

create policy "cms_images_auth_upload"
  on storage.objects for insert
  with check (
    bucket_id = 'cms-images'
    and auth.role() = 'authenticated'
  );

create policy "cms_images_auth_delete"
  on storage.objects for delete
  using (
    bucket_id = 'cms-images'
    and auth.role() = 'authenticated'
  );

create policy "cms_images_public_read"
  on storage.objects for select
  using (bucket_id = 'cms-images');

-- ── 5. Seed empty rows for every section ────────────────────
insert into public.cms_content (section, content) values
  ('home',             '{}'::jsonb),
  ('about',            '{}'::jsonb),
  ('courses',          '{}'::jsonb),
  ('services',         '{}'::jsonb),
  ('testimonials',     '{}'::jsonb),
  ('contact',          '{}'::jsonb),
  ('website_settings', '{}'::jsonb)
on conflict (section) do nothing;
