-- Roles enum + separate roles table (never store roles on profiles)
create type public.app_role as enum ('admin', 'editor', 'viewer');
create type public.content_status as enum ('draft', 'published');

create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql set search_path = public;

-- PROFILES
create table public.profiles (
  id uuid primary key,
  email text,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;

-- USER ROLES
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles where user_id = _user_id and role = _role
  )
$$;

create or replace function public.is_staff(_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role in ('admin', 'editor')
  )
$$;

create policy "Users can view own profile" on public.profiles
  for select to authenticated using (auth.uid() = id or public.has_role(auth.uid(), 'admin'));
create policy "Users can insert own profile" on public.profiles
  for insert to authenticated with check (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

create policy "Users can view own roles" on public.user_roles
  for select to authenticated using (auth.uid() = user_id or public.has_role(auth.uid(), 'admin'));

create trigger update_profiles_updated_at before update on public.profiles
  for each row execute function public.update_updated_at_column();

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'full_name', new.email))
  on conflict (id) do nothing;
  insert into public.user_roles (user_id, role)
  values (new.id, 'viewer')
  on conflict (user_id, role) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- CATEGORIES
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.categories to anon;
grant select on public.categories to authenticated;
grant all on public.categories to service_role;
alter table public.categories enable row level security;
create policy "Categories are public" on public.categories for select using (true);
create policy "Admins manage categories" on public.categories
  for all to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create trigger update_categories_updated_at before update on public.categories
  for each row execute function public.update_updated_at_column();

-- POSTS
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null,
  category_id uuid references public.categories(id) on delete set null,
  title text not null,
  slug text not null unique,
  excerpt text,
  body text,
  cover_image_url text,
  status public.content_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index posts_status_published_at_idx on public.posts (status, published_at desc);
create index posts_author_idx on public.posts (author_id);
grant select on public.posts to anon;
grant select, insert, update, delete on public.posts to authenticated;
grant all on public.posts to service_role;
alter table public.posts enable row level security;
create policy "Published posts are public" on public.posts
  for select using (status = 'published');
create policy "Authors and admins read own posts" on public.posts
  for select to authenticated using (auth.uid() = author_id or public.has_role(auth.uid(), 'admin'));
create policy "Staff create posts" on public.posts
  for insert to authenticated with check (auth.uid() = author_id and public.is_staff(auth.uid()));
create policy "Authors update own posts" on public.posts
  for update to authenticated using (auth.uid() = author_id or public.has_role(auth.uid(), 'admin'))
  with check (auth.uid() = author_id or public.has_role(auth.uid(), 'admin'));
create policy "Authors delete own posts" on public.posts
  for delete to authenticated using (auth.uid() = author_id or public.has_role(auth.uid(), 'admin'));
create trigger update_posts_updated_at before update on public.posts
  for each row execute function public.update_updated_at_column();

-- PAGES
create table public.pages (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null,
  title text not null,
  slug text not null unique,
  body text,
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.pages to anon;
grant select, insert, update, delete on public.pages to authenticated;
grant all on public.pages to service_role;
alter table public.pages enable row level security;
create policy "Published pages are public" on public.pages
  for select using (status = 'published');
create policy "Authors and admins read own pages" on public.pages
  for select to authenticated using (auth.uid() = author_id or public.has_role(auth.uid(), 'admin'));
create policy "Staff create pages" on public.pages
  for insert to authenticated with check (auth.uid() = author_id and public.is_staff(auth.uid()));
create policy "Authors update own pages" on public.pages
  for update to authenticated using (auth.uid() = author_id or public.has_role(auth.uid(), 'admin'))
  with check (auth.uid() = author_id or public.has_role(auth.uid(), 'admin'));
create policy "Authors delete own pages" on public.pages
  for delete to authenticated using (auth.uid() = author_id or public.has_role(auth.uid(), 'admin'));
create trigger update_pages_updated_at before update on public.pages
  for each row execute function public.update_updated_at_column();

-- MEDIA
create table public.media (
  id uuid primary key default gen_random_uuid(),
  uploader_id uuid not null,
  file_path text not null,
  mime_type text,
  size_bytes bigint,
  alt_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.media to anon;
grant select, insert, update, delete on public.media to authenticated;
grant all on public.media to service_role;
alter table public.media enable row level security;
create policy "Media is public" on public.media for select using (true);
create policy "Staff upload media" on public.media
  for insert to authenticated with check (auth.uid() = uploader_id and public.is_staff(auth.uid()));
create policy "Uploaders update own media" on public.media
  for update to authenticated using (auth.uid() = uploader_id or public.has_role(auth.uid(), 'admin'))
  with check (auth.uid() = uploader_id or public.has_role(auth.uid(), 'admin'));
create policy "Admins delete media" on public.media
  for delete to authenticated using (public.has_role(auth.uid(), 'admin'));
create trigger update_media_updated_at before update on public.media
  for each row execute function public.update_updated_at_column();