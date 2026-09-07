-- Cloudflare Turnstile + Meta Conversions API settings.

create table if not exists public.turnstile_settings (
  id smallint primary key default 1 check (id = 1),
  enabled boolean not null default false,
  site_key text not null default '',
  production_only boolean not null default true,
  updated_at timestamptz not null default now()
);

insert into public.turnstile_settings (id) values (1)
on conflict (id) do nothing;

alter table public.turnstile_settings enable row level security;

grant select on public.turnstile_settings to authenticated;
grant all on public.turnstile_settings to service_role;

drop policy if exists "turnstile_settings_admin_select" on public.turnstile_settings;
create policy "turnstile_settings_admin_select"
  on public.turnstile_settings for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

alter table public.meta_pixel_settings
  add column if not exists capi_enabled boolean not null default false,
  add column if not exists test_event_code text not null default '';

-- Shared secret so only the submit-public-lead Edge Function can call submit_public_lead when Turnstile is on.
do $$
begin
  if not exists (select 1 from vault.secrets where name = 'lead_submit_edge_secret') then
    perform public.lead_notify_put_secret(
      'lead_submit_edge_secret',
      replace(gen_random_uuid()::text, '-', '') || replace(gen_random_uuid()::text, '-', '')
    );
  end if;
exception
  when undefined_function then
    null;
end;
$$;

create or replace function public.turnstile_status()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.turnstile_settings;
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  select * into v_row from public.turnstile_settings where id = 1;

  return jsonb_build_object(
    'enabled', v_row.enabled,
    'site_key', v_row.site_key,
    'production_only', v_row.production_only,
    'updated_at', v_row.updated_at,
    'has_secret_key', exists (select 1 from vault.secrets where name = 'turnstile_secret_key')
  );
end;
$$;

create or replace function public.turnstile_save_config(
  p_site_key text,
  p_secret_key text,
  p_enabled boolean default false,
  p_production_only boolean default true
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_site_key text := trim(coalesce(p_site_key, ''));
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  if coalesce(p_enabled, false) then
    if length(v_site_key) < 10 then
      raise exception 'Enter your Turnstile site key before enabling CAPTCHA.';
    end if;
    if not exists (select 1 from vault.secrets where name = 'turnstile_secret_key')
       and (p_secret_key is null or length(trim(p_secret_key)) = 0) then
      raise exception 'Enter your Turnstile secret key before enabling CAPTCHA.';
    end if;
  end if;

  update public.turnstile_settings
     set enabled = coalesce(p_enabled, false),
         site_key = v_site_key,
         production_only = coalesce(p_production_only, true),
         updated_at = now()
   where id = 1;

  if p_secret_key is not null and length(trim(p_secret_key)) > 0 then
    perform public.lead_notify_put_secret('turnstile_secret_key', trim(p_secret_key));
  end if;

  if coalesce(p_enabled, false) and not exists (select 1 from vault.secrets where name = 'lead_submit_edge_secret') then
    perform public.lead_notify_put_secret(
      'lead_submit_edge_secret',
      replace(gen_random_uuid()::text, '-', '') || replace(gen_random_uuid()::text, '-', '')
    );
  end if;

  return public.turnstile_status();
end;
$$;

create or replace function public.meta_pixel_status()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.meta_pixel_settings;
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  select * into v_row from public.meta_pixel_settings where id = 1;

  return jsonb_build_object(
    'enabled', v_row.enabled,
    'pixel_id', v_row.pixel_id,
    'track_page_views', v_row.track_page_views,
    'track_leads', v_row.track_leads,
    'track_listing_views', v_row.track_listing_views,
    'production_only', v_row.production_only,
    'capi_enabled', v_row.capi_enabled,
    'test_event_code', v_row.test_event_code,
    'updated_at', v_row.updated_at,
    'has_capi_access_token', exists (select 1 from vault.secrets where name = 'meta_capi_access_token')
  );
end;
$$;

drop function if exists public.meta_pixel_save_config(text, boolean, boolean, boolean, boolean, boolean);

create or replace function public.meta_pixel_save_config(
  p_pixel_id text,
  p_enabled boolean default false,
  p_track_page_views boolean default true,
  p_track_leads boolean default true,
  p_track_listing_views boolean default true,
  p_production_only boolean default true,
  p_capi_enabled boolean default false,
  p_capi_access_token text default null,
  p_test_event_code text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_pixel_id text := regexp_replace(coalesce(trim(p_pixel_id), ''), '\s+', '', 'g');
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  if coalesce(p_enabled, false) then
    if v_pixel_id = '' then
      raise exception 'Enter your Meta Pixel ID before enabling tracking.';
    end if;
    if v_pixel_id !~ '^[0-9]{10,20}$' then
      raise exception 'Meta Pixel ID must be 10–20 digits (numbers only).';
    end if;
  elsif v_pixel_id <> '' and v_pixel_id !~ '^[0-9]{10,20}$' then
    raise exception 'Meta Pixel ID must be 10–20 digits (numbers only).';
  end if;

  if coalesce(p_capi_enabled, false) then
    if v_pixel_id = '' then
      raise exception 'Enter your Meta Pixel ID before enabling Conversions API.';
    end if;
    if not exists (select 1 from vault.secrets where name = 'meta_capi_access_token')
       and (p_capi_access_token is null or length(trim(p_capi_access_token)) = 0) then
      raise exception 'Enter your Meta Conversions API access token before enabling CAPI.';
    end if;
  end if;

  update public.meta_pixel_settings
     set enabled = coalesce(p_enabled, false),
         pixel_id = v_pixel_id,
         track_page_views = coalesce(p_track_page_views, true),
         track_leads = coalesce(p_track_leads, true),
         track_listing_views = coalesce(p_track_listing_views, true),
         production_only = coalesce(p_production_only, true),
         capi_enabled = coalesce(p_capi_enabled, false),
         test_event_code = left(trim(coalesce(p_test_event_code, '')), 64),
         updated_at = now()
   where id = 1;

  if p_capi_access_token is not null and length(trim(p_capi_access_token)) > 0 then
    perform public.lead_notify_put_secret('meta_capi_access_token', trim(p_capi_access_token));
  end if;

  return public.meta_pixel_status();
end;
$$;

create or replace function public.meta_pixel_public_config()
returns jsonb
language plpgsql
security definer
stable
set search_path = public
as $$
declare
  v_row public.meta_pixel_settings;
begin
  select * into v_row from public.meta_pixel_settings where id = 1;

  return jsonb_build_object(
    'enabled', coalesce(v_row.enabled, false) and length(trim(coalesce(v_row.pixel_id, ''))) > 0,
    'pixel_id', case when v_row.enabled then v_row.pixel_id else '' end,
    'track_page_views', v_row.track_page_views,
    'track_leads', v_row.track_leads,
    'track_listing_views', v_row.track_listing_views,
    'production_only', v_row.production_only,
    'capi_enabled', coalesce(v_row.capi_enabled, false) and length(trim(coalesce(v_row.pixel_id, ''))) > 0
  );
end;
$$;

create or replace function public.turnstile_public_config()
returns jsonb
language plpgsql
security definer
stable
set search_path = public
as $$
declare
  v_row public.turnstile_settings;
begin
  select * into v_row from public.turnstile_settings where id = 1;

  if v_row.enabled is not true or length(trim(coalesce(v_row.site_key, ''))) = 0 then
    return jsonb_build_object('enabled', false);
  end if;

  return jsonb_build_object(
    'enabled', true,
    'site_key', v_row.site_key,
    'production_only', v_row.production_only
  );
end;
$$;

create or replace function public.tracking_public_config()
returns jsonb
language plpgsql
security definer
stable
set search_path = public
as $$
begin
  return jsonb_build_object(
    'turnstile', public.turnstile_public_config(),
    'meta', public.meta_pixel_public_config()
  );
end;
$$;

create or replace function public.tracking_server_config()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_meta public.meta_pixel_settings;
  v_turn public.turnstile_settings;
begin
  select * into v_meta from public.meta_pixel_settings where id = 1;
  select * into v_turn from public.turnstile_settings where id = 1;

  return jsonb_build_object(
    'turnstile_enabled', coalesce(v_turn.enabled, false),
    'turnstile_secret', (select decrypted_secret from vault.decrypted_secrets where name = 'turnstile_secret_key'),
    'lead_submit_edge_secret', (select decrypted_secret from vault.decrypted_secrets where name = 'lead_submit_edge_secret'),
    'meta_pixel_id', v_meta.pixel_id,
    'meta_capi_enabled', coalesce(v_meta.capi_enabled, false),
    'meta_capi_token', (select decrypted_secret from vault.decrypted_secrets where name = 'meta_capi_access_token'),
    'meta_test_event_code', v_meta.test_event_code,
    'meta_track_leads', v_meta.track_leads,
    'meta_track_page_views', v_meta.track_page_views,
    'meta_track_listing_views', v_meta.track_listing_views
  );
end;
$$;

-- When Turnstile is enabled, require the edge-function auth marker on submit_public_lead.
create or replace function public.submit_public_lead(p_payload jsonb)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
  v_email text;
  v_first text;
  v_last text;
  v_phone text;
  v_phone_digits text;
  v_message text;
  v_form_type text;
  v_source_page text;
  v_listing_slug text;
  v_meta jsonb;
  v_honeypot text;
  v_recent integer;
  v_turnstile_on boolean;
  v_edge_auth text;
  v_expected_auth text;
begin
  if p_payload is null or jsonb_typeof(p_payload) <> 'object' then
    raise exception 'Invalid submission payload';
  end if;

  select enabled into v_turnstile_on from public.turnstile_settings where id = 1;
  if coalesce(v_turnstile_on, false) then
    v_edge_auth := coalesce(p_payload->>'_edge_auth', '');
    select decrypted_secret into v_expected_auth
    from vault.decrypted_secrets where name = 'lead_submit_edge_secret';
    if v_expected_auth is null or v_edge_auth = '' or v_edge_auth <> v_expected_auth then
      raise exception 'Complete the security check and try again.';
    end if;
  end if;

  v_honeypot := trim(coalesce(p_payload->>'honeypot', ''));
  if length(v_honeypot) > 0 then
    raise exception 'Submission rejected';
  end if;

  v_email := lower(left(trim(coalesce(p_payload->>'email', '')), 254));
  if v_email = '' then
    raise exception 'Email is required';
  end if;
  if v_email !~ '^[^\s@]+@[^\s@]+\.[^\s@]{2,}$' then
    raise exception 'Enter a valid email address';
  end if;

  v_first := left(trim(coalesce(p_payload->>'first_name', '')), 100);
  v_last := left(trim(coalesce(p_payload->>'last_name', '')), 100);
  v_message := left(trim(coalesce(p_payload->>'message', '')), 5000);

  if length(v_first) < 2 then
    raise exception 'Enter a valid first name';
  end if;
  if length(v_last) < 2 then
    raise exception 'Enter a valid last name';
  end if;

  v_phone_digits := regexp_replace(coalesce(p_payload->>'phone', ''), '\D', '', 'g');
  if length(v_phone_digits) = 11 and left(v_phone_digits, 1) = '1' then
    v_phone_digits := substr(v_phone_digits, 2);
  end if;
  if length(v_phone_digits) <> 10 then
    raise exception 'Enter a valid 10-digit US phone number';
  end if;
  v_phone := '(' || substr(v_phone_digits, 1, 3) || ') '
    || substr(v_phone_digits, 4, 3) || '-'
    || substr(v_phone_digits, 7, 4);

  v_form_type := trim(coalesce(p_payload->>'form_type', 'contact'));
  if v_form_type not in (
    'contact', 'listing-lead', 'listing-tour', 'blog-embed', 'home-valuation',
    'market-report', 'guide-download', 'mortgage-checklist', 'listing-access',
    'neighborhood', 'other'
  ) then
    v_form_type := 'other';
  end if;

  if length(v_message) = 0 then
    raise exception 'Please share your question or comment';
  end if;

  v_source_page := left(trim(coalesce(p_payload->>'source_page', '')), 500);
  if v_source_page <> '' then
    if v_source_page ~* '^(javascript|data|vbscript):' then
      v_source_page := '';
    elsif v_source_page !~ '^/[A-Za-z0-9/_\-.?=&%#]*$' then
      v_source_page := '';
    end if;
  end if;

  v_listing_slug := lower(left(trim(coalesce(p_payload->>'listing_slug', '')), 120));
  if v_listing_slug <> '' and v_listing_slug !~ '^[a-z0-9]+(?:-[a-z0-9]+)*$' then
    v_listing_slug := '';
  end if;

  v_meta := public.leads_sanitize_meta(coalesce(p_payload->'meta', '{}'::jsonb));

  select count(*)::integer into v_recent
  from public.leads
  where lower(email) = v_email
    and created_at > now() - interval '10 minutes';

  if v_recent >= 5 then
    raise exception 'Too many submissions. Please wait a few minutes and try again.';
  end if;

  insert into public.leads (
    first_name, last_name, email, phone, message,
    form_type, source_page, listing_slug, meta, status
  ) values (
    v_first, v_last, v_email, v_phone, v_message,
    v_form_type, coalesce(v_source_page, ''), coalesce(v_listing_slug, ''), v_meta, 'new'
  )
  returning id into v_id;

  return v_id;
end;
$$;

revoke all on function public.turnstile_status() from public, anon;
revoke all on function public.turnstile_save_config(text, text, boolean, boolean) from public, anon;
revoke all on function public.tracking_server_config() from public, anon, authenticated;

grant execute on function public.turnstile_status() to authenticated, service_role;
grant execute on function public.turnstile_save_config(text, text, boolean, boolean) to authenticated, service_role;
grant execute on function public.tracking_public_config() to anon, authenticated, service_role;
grant execute on function public.tracking_server_config() to service_role;
grant execute on function public.turnstile_public_config() to anon, authenticated, service_role;

revoke all on function public.meta_pixel_save_config(text, boolean, boolean, boolean, boolean, boolean) from public, anon;
grant execute on function public.meta_pixel_save_config(text, boolean, boolean, boolean, boolean, boolean, boolean, text, text) to authenticated, service_role;

notify pgrst, 'reload schema';
