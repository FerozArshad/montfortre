-- Twice-weekly Google reviews sync (pg_cron + pg_net)
--
-- pg_net is asynchronous: net.http_get returns a request id immediately and the
-- body lands in net._http_response later. The sync is therefore split into a
-- request step and an ingest step, scheduled a few minutes apart.
--
-- Before this works you must store the server-side Places API key in Vault:
--   select vault.create_secret('<server-key>', 'google_places_api_key');
-- That key must NOT have an HTTP-referrer restriction, because Postgres sends
-- no referrer. Restrict it by API (Places API New) instead.

create extension if not exists pg_cron;
create extension if not exists pg_net;

-- ---------------------------------------------------------------------------
-- Step 1: fire the request
-- ---------------------------------------------------------------------------
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
  -- Cron runs with no auth context; interactive callers must be admins.
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

-- ---------------------------------------------------------------------------
-- Step 2: ingest the response
-- ---------------------------------------------------------------------------
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
    -- Response has not landed yet; leave it pending for the next run.
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
      -- Match the previous carousel bar: only 5-star reviews with real text are
      -- shown by default. Admins can unhide afterwards; sync never overwrites.
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

-- ---------------------------------------------------------------------------
-- Grants: admins may trigger a manual sync; anon may not.
-- ---------------------------------------------------------------------------
revoke all on function public.google_reviews_request() from public, anon;
revoke all on function public.google_reviews_ingest() from public, anon;
grant execute on function public.google_reviews_request() to authenticated, service_role;
grant execute on function public.google_reviews_ingest() to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- Schedule: Mondays and Thursdays, 09:00 UTC request / 09:06 UTC ingest.
-- ---------------------------------------------------------------------------
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
