create table if not exists public.google_reviews (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  review_key text not null unique,
  author_name text not null default '',
  author_url text not null default '',
  photo_url text not null default '',
  rating numeric not null default 5,
  quote text not null default '',
  published_at timestamptz,
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

create table if not exists public.google_review_stats (
  id integer primary key default 1 check (id = 1),
  rating numeric not null default 5,
  total_reviews integer not null default 0,
  maps_uri text not null default '',
  place_id text not null default '',
  synced_at timestamptz,
  last_error text not null default '',
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

drop trigger if exists google_reviews_set_updated_at on public.google_reviews;
create trigger google_reviews_set_updated_at
  before update on public.google_reviews
  for each row execute function public.update_updated_at_column();

create extension if not exists pg_cron;
create extension if not exists pg_net;

create or replace function public.google_reviews_request()
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_key text;
  v_place_id text;
  v_request_id bigint;
begin
  if auth.uid() is not null and not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  select place_id into v_place_id from public.google_review_stats where id = 1;

  select decrypted_secret into v_key
  from vault.decrypted_secrets
  where name = 'google_places_api_key';

  if v_key is null or length(trim(v_key)) = 0 then
    update public.google_review_stats
       set last_error = 'Missing Vault secret google_places_api_key'
     where id = 1;
    return null;
  end if;

  if v_place_id is null or length(trim(v_place_id)) = 0 then
    update public.google_review_stats
       set last_error = 'Missing place_id on google_review_stats'
     where id = 1;
    return null;
  end if;

  select net.http_get(
    url := 'https://places.googleapis.com/v1/places/' || v_place_id,
    headers := jsonb_build_object(
      'X-Goog-Api-Key', v_key,
      'X-Goog-FieldMask', 'id,rating,userRatingCount,googleMapsUri,reviews'
    ),
    timeout_milliseconds := 15000
  ) into v_request_id;

  update public.google_review_stats
     set pending_request_id = v_request_id,
         last_error = ''
   where id = 1;

  return v_request_id;
end;
$$;

create or replace function public.google_reviews_ingest()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_request_id bigint;
  v_status integer;
  v_content text;
  v_error text;
  v_body jsonb;
  v_review jsonb;
  v_quote text;
  v_rating numeric;
  v_index integer := 0;
  v_count integer := 0;
begin
  if auth.uid() is not null and not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  select pending_request_id into v_request_id
  from public.google_review_stats where id = 1;

  if v_request_id is null then
    return 'nothing pending';
  end if;

  select status_code, content, error_msg
    into v_status, v_content, v_error
  from net._http_response
  where id = v_request_id;

  if not found then
    return 'pending';
  end if;

  if v_error is not null and length(v_error) > 0 then
    update public.google_review_stats
       set last_error = v_error, pending_request_id = null
     where id = 1;
    return 'error: ' || v_error;
  end if;

  if v_status is distinct from 200 then
    update public.google_review_stats
       set last_error = 'HTTP ' || coalesce(v_status::text, '?') || ': ' ||
                        left(coalesce(v_content, ''), 500),
           pending_request_id = null
     where id = 1;
    return 'error: HTTP ' || coalesce(v_status::text, '?');
  end if;

  v_body := v_content::jsonb;

  for v_review in
    select * from jsonb_array_elements(coalesce(v_body -> 'reviews', '[]'::jsonb))
  loop
    v_quote := coalesce(
      v_review -> 'text' ->> 'text',
      v_review -> 'originalText' ->> 'text',
      ''
    );
    v_rating := coalesce((v_review ->> 'rating')::numeric, 5);

    insert into public.google_reviews as g (
      review_key, author_name, author_url, photo_url,
      rating, quote, published_at, sort_order, hidden, synced_at
    )
    values (
      coalesce(v_review ->> 'name', 'review-' || v_index),
      coalesce(v_review -> 'authorAttribution' ->> 'displayName', 'Google reviewer'),
      coalesce(v_review -> 'authorAttribution' ->> 'uri', ''),
      coalesce(v_review -> 'authorAttribution' ->> 'photoUri', ''),
      v_rating,
      v_quote,
      nullif(v_review ->> 'publishTime', '')::timestamptz,
      v_index,
      (v_rating < 5 or length(trim(v_quote)) < 24),
      now()
    )
    on conflict (review_key) do update set
      author_name  = excluded.author_name,
      author_url   = excluded.author_url,
      photo_url    = excluded.photo_url,
      rating       = excluded.rating,
      quote        = excluded.quote,
      published_at = excluded.published_at,
      synced_at    = excluded.synced_at;

    v_index := v_index + 1;
    v_count := v_count + 1;
  end loop;

  update public.google_review_stats
     set rating = coalesce((v_body ->> 'rating')::numeric, rating),
         total_reviews = coalesce((v_body ->> 'userRatingCount')::integer, total_reviews),
         maps_uri = coalesce(v_body ->> 'googleMapsUri', maps_uri),
         synced_at = now(),
         last_error = '',
         pending_request_id = null
   where id = 1;

  return 'synced ' || v_count || ' reviews';
end;
$$;

revoke all on function public.google_reviews_request() from public, anon;
revoke all on function public.google_reviews_ingest() from public, anon;
grant execute on function public.google_reviews_request() to authenticated, service_role;
grant execute on function public.google_reviews_ingest() to authenticated, service_role;

select cron.unschedule('google-reviews-request')
where exists (select 1 from cron.job where jobname = 'google-reviews-request');

select cron.unschedule('google-reviews-ingest')
where exists (select 1 from cron.job where jobname = 'google-reviews-ingest');

select cron.schedule(
  'google-reviews-request',
  '0 9 * * 1,4',
  $$select public.google_reviews_request()$$
);

select cron.schedule(
  'google-reviews-ingest',
  '6 9 * * 1,4',
  $$select public.google_reviews_ingest()$$
);