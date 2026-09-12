-- LEGACY / unused on Lovable Cloud.
-- Lovable Cloud already provides: profiles, user_roles, categories, posts, pages, media.
-- Do not paste this into Lovable Cloud. Kept only as reference for the earlier custom CMS design.
-- Admins: use public.user_roles (user_id, role) — never a role column on profiles.

/*
-- Montfort CMS: listings + blog_posts + admin profiles + storage RLS
-- Run in Supabase SQL editor (or supabase db push). Disable public sign-up in Auth settings.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Profiles (admin role)
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  role text not null default 'viewer' check (role in ('admin', 'viewer')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

create policy "profiles_select_own_or_admin"
  on public.profiles for select
  using (auth.uid() = id or public.is_admin());

create policy "profiles_update_admin"
  on public.profiles for update
  using (public.is_admin());

-- Auto-create profile on signup (role stays viewer unless promoted)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, role)
  values (new.id, new.email, 'viewer')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Listings
-- ---------------------------------------------------------------------------
create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  status text not null default 'For Sale',
  price text not null default '',
  price_value numeric not null default 0,
  beds text not null default '',
  baths text not null default '',
  year text,
  sqft text,
  stories text,
  property_type text not null default '',
  street text not null default '',
  city text not null default 'New York',
  state text not null default 'NY',
  zip text not null default '',
  neighborhood text not null default '',
  hero_image text not null default '',
  hero_alt text not null default '',
  gallery jsonb not null default '[]'::jsonb,
  facts jsonb not null default '[]'::jsonb,
  overview_paras jsonb not null default '[]'::jsonb,
  insights jsonb not null default '[]'::jsonb,
  location jsonb not null default '{}'::jsonb,
  agent jsonb not null default '{}'::jsonb,
  tour_href text not null default 'https://calendly.com/montfort',
  sort_order integer not null default 100,
  published boolean not null default false,
  meta_title text,
  meta_description text,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists listings_published_sort_idx
  on public.listings (published, sort_order)
  where deleted_at is null;

alter table public.listings enable row level security;

create policy "listings_public_read_published"
  on public.listings for select
  using (published = true and deleted_at is null);

create policy "listings_admin_select_all"
  on public.listings for select
  using (public.is_admin());

create policy "listings_admin_insert"
  on public.listings for insert
  with check (public.is_admin());

create policy "listings_admin_update"
  on public.listings for update
  using (public.is_admin());

create policy "listings_admin_delete"
  on public.listings for delete
  using (public.is_admin());

-- ---------------------------------------------------------------------------
-- Blog posts
-- ---------------------------------------------------------------------------
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  h1 text not null,
  lead text not null default '',
  category text not null default 'News',
  author_name text not null default 'Stanley Montfort',
  author_href text not null default '/stanley-montfort/',
  author_role text not null default 'Real Estate Advisor®',
  featured_image_src text not null default '',
  featured_image_alt text not null default '',
  share_url text not null default '',
  toc jsonb not null default '[]'::jsonb,
  body_html text not null default '',
  kicker_label text,
  show_hero_ctas boolean not null default false,
  published boolean not null default false,
  meta_title text,
  meta_description text,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_published_idx
  on public.blog_posts (published, created_at desc)
  where deleted_at is null;

alter table public.blog_posts enable row level security;

create policy "blog_public_read_published"
  on public.blog_posts for select
  using (published = true and deleted_at is null);

create policy "blog_admin_select_all"
  on public.blog_posts for select
  using (public.is_admin());

create policy "blog_admin_insert"
  on public.blog_posts for insert
  with check (public.is_admin());

create policy "blog_admin_update"
  on public.blog_posts for update
  using (public.is_admin());

create policy "blog_admin_delete"
  on public.blog_posts for delete
  using (public.is_admin());

-- updated_at touch
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists listings_set_updated_at on public.listings;
create trigger listings_set_updated_at
  before update on public.listings
  for each row execute function public.set_updated_at();

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Storage buckets
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  (
    'listing-images',
    'listing-images',
    true,
    5242880,
    array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  ),
  (
    'blog-images',
    'blog-images',
    true,
    5242880,
    array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  )
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "listing_images_public_read"
  on storage.objects for select
  using (bucket_id = 'listing-images');

create policy "listing_images_admin_insert"
  on storage.objects for insert
  with check (bucket_id = 'listing-images' and public.is_admin());

create policy "listing_images_admin_update"
  on storage.objects for update
  using (bucket_id = 'listing-images' and public.is_admin());

create policy "listing_images_admin_delete"
  on storage.objects for delete
  using (bucket_id = 'listing-images' and public.is_admin());

create policy "blog_images_public_read"
  on storage.objects for select
  using (bucket_id = 'blog-images');

create policy "blog_images_admin_insert"
  on storage.objects for insert
  with check (bucket_id = 'blog-images' and public.is_admin());

create policy "blog_images_admin_update"
  on storage.objects for update
  using (bucket_id = 'blog-images' and public.is_admin());

create policy "blog_images_admin_delete"
  on storage.objects for delete
  using (bucket_id = 'blog-images' and public.is_admin());

-- Promote an admin after creating the Auth user:
--   insert into public.user_roles (user_id, role) values ('…', 'admin');
*/
