-- Google reviews store (Lovable Cloud)
-- Reviews are synced from the Places API by a scheduled job (see the
-- 20260828100100_google_reviews_sync.sql migration). The browser only ever
-- reads from these tables, so no Google API key ships in the client bundle.
-- Uses public.has_role(..., 'admin') from the existing Cloud schema.

-- ---------------------------------------------------------------------------
-- Reviews
-- ---------------------------------------------------------------------------
create table if not exists public.google_reviews (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- Places resource name ("places/<id>/reviews/<id>"). Stable across syncs,
  -- which is what makes the ingest upsert idempotent.
  review_key text not null unique,

  author_name text not null default '',
  author_url text not null default '',
  photo_url text not null default '',
  rating numeric not null default 5,
  quote text not null default '',
  published_at timestamptz,

  -- Admin-owned. The sync job never writes these.
  hidden boolean not null default false,
  sort_order integer not null default 0,

  synced_at timestamptz not null default now()
);

create index if not exists google_reviews_visible_idx
  on public.google_reviews (hidden, sort_order, published_at desc);

grant select on public.google_reviews to anon;
grant select, insert, update, delete on public.google_reviews to authenticated;
grant all on public.google_reviews to service_role;

alter table public.google_reviews enable row level security;

drop policy if exists "google_reviews_public_select" on public.google_reviews;
create policy "google_reviews_public_select"
  on public.google_reviews for select
  using (hidden = false);

drop policy if exists "google_reviews_admin_select" on public.google_reviews;
create policy "google_reviews_admin_select"
  on public.google_reviews for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

drop policy if exists "google_reviews_admin_insert" on public.google_reviews;
create policy "google_reviews_admin_insert"
  on public.google_reviews for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

drop policy if exists "google_reviews_admin_update" on public.google_reviews;
create policy "google_reviews_admin_update"
  on public.google_reviews for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

drop policy if exists "google_reviews_admin_delete" on public.google_reviews;
create policy "google_reviews_admin_delete"
  on public.google_reviews for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- ---------------------------------------------------------------------------
-- Aggregate rating + sync bookkeeping (single row, id = 1)
-- ---------------------------------------------------------------------------
create table if not exists public.google_review_stats (
  id integer primary key default 1 check (id = 1),
  rating numeric not null default 5,
  total_reviews integer not null default 0,
  maps_uri text not null default '',
  place_id text not null default '',
  synced_at timestamptz,
  last_error text not null default '',
  -- pg_net request id awaiting ingest; null when there is nothing pending.
  pending_request_id bigint
);

insert into public.google_review_stats (id, place_id)
values (1, 'ChIJtzr15lRYwokRtWpSERolhnw')
on conflict (id) do nothing;

grant select on public.google_review_stats to anon;
grant select, update on public.google_review_stats to authenticated;
grant all on public.google_review_stats to service_role;

alter table public.google_review_stats enable row level security;

drop policy if exists "google_review_stats_public_select" on public.google_review_stats;
create policy "google_review_stats_public_select"
  on public.google_review_stats for select
  using (true);

drop policy if exists "google_review_stats_admin_update" on public.google_review_stats;
create policy "google_review_stats_admin_update"
  on public.google_review_stats for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- ---------------------------------------------------------------------------
-- updated_at maintenance (reuses the existing Cloud trigger function)
-- ---------------------------------------------------------------------------
drop trigger if exists google_reviews_set_updated_at on public.google_reviews;
create trigger google_reviews_set_updated_at
  before update on public.google_reviews
  for each row execute function public.update_updated_at_column();
