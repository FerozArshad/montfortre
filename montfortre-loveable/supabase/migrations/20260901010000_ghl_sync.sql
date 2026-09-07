-- Two-way sync between site leads and GoHighLevel.
--
-- Outbound: an AFTER INSERT trigger on public.leads posts the row to the
-- ghl-sync Edge Function, which upserts the contact into GHL. pg_net is
-- asynchronous, so the trigger only queues the request and a reconcile job
-- copies the eventual HTTP result into public.ghl_sync_log.
--
-- Inbound: a GHL workflow webhook calls the ghl-inbound Edge Function, which
-- inserts a lead tagged meta.origin = 'ghl'. The outbound trigger skips those
-- rows so a contact can never bounce between the two systems forever.
--
-- Connection settings are managed from the admin dashboard. The location ID
-- lives in public.ghl_settings; the private integration token and the inbound
-- shared secret go to Vault and are never readable by the browser.
--
-- Before outbound sync works, store the function URL in Vault:
--   select vault.create_secret(
--     'https://<project>.supabase.co/functions/v1/ghl-sync', 'ghl_sync_url');

create extension if not exists pg_cron;
create extension if not exists pg_net;

-- ---------------------------------------------------------------------------
-- Connection settings
-- ---------------------------------------------------------------------------
create table if not exists public.ghl_settings (
  id smallint primary key default 1 check (id = 1),
  enabled boolean not null default false,
  location_id text not null default '',
  -- Applied to every contact the site creates, so CRM automations can tell
  -- website leads apart from other sources.
  source_label text not null default 'Website',
  last_error text not null default '',
  connected_at timestamptz,
  updated_at timestamptz not null default now()
);

insert into public.ghl_settings (id) values (1)
on conflict (id) do nothing;

alter table public.ghl_settings enable row level security;

grant select on public.ghl_settings to authenticated;
grant all on public.ghl_settings to service_role;

drop policy if exists "ghl_settings_admin_select" on public.ghl_settings;
create policy "ghl_settings_admin_select"
  on public.ghl_settings for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- ---------------------------------------------------------------------------
-- Sync log
-- ---------------------------------------------------------------------------
create table if not exists public.ghl_sync_log (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  request_id bigint,
  contact_id text not null default '',
  status text not null default 'queued'
    check (status in ('queued', 'synced', 'failed', 'skipped')),
  error text not null default '',
  created_at timestamptz not null default now(),
  settled_at timestamptz
);

create index if not exists ghl_sync_log_status_idx on public.ghl_sync_log (status);
create index if not exists ghl_sync_log_lead_idx on public.ghl_sync_log (lead_id);

grant select on public.ghl_sync_log to authenticated;
grant all on public.ghl_sync_log to service_role;

alter table public.ghl_sync_log enable row level security;

drop policy if exists "ghl_sync_log_admin_select" on public.ghl_sync_log;
create policy "ghl_sync_log_admin_select"
  on public.ghl_sync_log for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- ---------------------------------------------------------------------------
-- Vault helper. Internal — only the definer functions below may call it.
-- ---------------------------------------------------------------------------
create or replace function public.ghl_put_secret(p_name text, p_value text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  select id into v_id from vault.secrets where name = p_name;
  if v_id is null then
    perform vault.create_secret(p_value, p_name);
  else
    perform vault.update_secret(v_id, p_value, p_name);
  end if;
end;
$$;

revoke all on function public.ghl_put_secret(text, text) from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- Admin-facing status. Presence flags only, never the secrets.
-- ---------------------------------------------------------------------------
create or replace function public.ghl_status()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.ghl_settings;
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  select * into v_row from public.ghl_settings where id = 1;

  return jsonb_build_object(
    'enabled', v_row.enabled,
    'location_id', v_row.location_id,
    'source_label', v_row.source_label,
    'last_error', v_row.last_error,
    'connected_at', v_row.connected_at,
    'updated_at', v_row.updated_at,
    'has_token', exists (select 1 from vault.secrets where name = 'ghl_private_token'),
    'has_inbound_secret', exists (select 1 from vault.secrets where name = 'ghl_inbound_secret'),
    'has_sync_url', exists (select 1 from vault.secrets where name = 'ghl_sync_url')
  );
end;
$$;

-- ---------------------------------------------------------------------------
-- Save the connection. Blank secrets keep whatever is already stored, so the
-- form can leave those fields empty on re-save.
-- ---------------------------------------------------------------------------
create or replace function public.ghl_save_config(
  p_location_id text,
  p_token text,
  p_source_label text default 'Website',
  p_enabled boolean default true,
  p_inbound_secret text default null,
  p_sync_url text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  update public.ghl_settings
     set location_id = coalesce(trim(p_location_id), ''),
         source_label = coalesce(nullif(trim(p_source_label), ''), 'Website'),
         enabled = coalesce(p_enabled, true),
         last_error = '',
         connected_at = case
           when coalesce(trim(p_location_id), '') <> '' then now()
           else connected_at
         end,
         updated_at = now()
   where id = 1;

  if p_token is not null and length(trim(p_token)) > 0 then
    perform public.ghl_put_secret('ghl_private_token', trim(p_token));
  end if;

  if p_inbound_secret is not null and length(trim(p_inbound_secret)) > 0 then
    perform public.ghl_put_secret('ghl_inbound_secret', trim(p_inbound_secret));
  end if;

  if p_sync_url is not null and length(trim(p_sync_url)) > 0 then
    perform public.ghl_put_secret('ghl_sync_url', trim(p_sync_url));
  end if;

  return public.ghl_status();
end;
$$;

-- ---------------------------------------------------------------------------
-- Drop the connection. Keeps the location ID so reconnecting is one paste.
-- ---------------------------------------------------------------------------
create or replace function public.ghl_disconnect()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  delete from vault.secrets where name = 'ghl_private_token';

  update public.ghl_settings
     set enabled = false, connected_at = null, last_error = '', updated_at = now()
   where id = 1;

  return public.ghl_status();
end;
$$;

-- ---------------------------------------------------------------------------
-- Full config including secrets. service_role only — the Edge Functions.
-- ---------------------------------------------------------------------------
create or replace function public.ghl_config()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.ghl_settings;
begin
  select * into v_row from public.ghl_settings where id = 1;

  return jsonb_build_object(
    'enabled', v_row.enabled,
    'location_id', v_row.location_id,
    'source_label', v_row.source_label,
    'token', (select decrypted_secret from vault.decrypted_secrets where name = 'ghl_private_token'),
    'inbound_secret', (select decrypted_secret from vault.decrypted_secrets where name = 'ghl_inbound_secret')
  );
end;
$$;

revoke all on function public.ghl_config() from public, anon, authenticated;
grant execute on function public.ghl_config() to service_role;

-- ---------------------------------------------------------------------------
-- Called by ghl-sync once GHL returns a contact id.
-- ---------------------------------------------------------------------------
create or replace function public.ghl_record_contact(p_lead_id uuid, p_contact_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.ghl_sync_log
     set contact_id = coalesce(trim(p_contact_id), '')
   where lead_id = p_lead_id
     and (contact_id is null or contact_id = '');
end;
$$;

revoke all on function public.ghl_record_contact(uuid, text) from public, anon, authenticated;
grant execute on function public.ghl_record_contact(uuid, text) to service_role;

create or replace function public.ghl_set_error(p_error text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.ghl_settings
     set last_error = left(coalesce(p_error, ''), 500), updated_at = now()
   where id = 1;
end;
$$;

revoke all on function public.ghl_set_error(text) from public, anon, authenticated;
grant execute on function public.ghl_set_error(text) to service_role;

-- ---------------------------------------------------------------------------
-- Trigger: queue the outbound sync
-- ---------------------------------------------------------------------------
create or replace function public.ghl_sync_on_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_enabled boolean;
  v_url text;
  v_secret text;
  v_request_id bigint;
begin
  -- Leads that arrived from GHL must never be pushed back to GHL.
  if coalesce(new.meta ->> 'origin', '') = 'ghl' then
    insert into public.ghl_sync_log (lead_id, status, error, settled_at)
    values (new.id, 'skipped', 'Lead originated in GHL', now());
    return new;
  end if;

  select enabled into v_enabled from public.ghl_settings where id = 1;
  if not coalesce(v_enabled, false) then
    return new;
  end if;

  select decrypted_secret into v_url
  from vault.decrypted_secrets where name = 'ghl_sync_url';

  select decrypted_secret into v_secret
  from vault.decrypted_secrets where name = 'ghl_inbound_secret';

  if v_url is null then
    insert into public.ghl_sync_log (lead_id, status, error, settled_at)
    values (new.id, 'failed', 'Missing Vault secret ghl_sync_url', now());
    return new;
  end if;

  select net.http_post(
    url := v_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', coalesce(v_secret, '')
    ),
    body := jsonb_build_object('record', to_jsonb(new)),
    timeout_milliseconds := 15000
  ) into v_request_id;

  insert into public.ghl_sync_log (lead_id, request_id, status)
  values (new.id, v_request_id, 'queued');

  return new;
exception
  when others then
    -- A CRM problem must never block the lead from being saved.
    insert into public.ghl_sync_log (lead_id, status, error, settled_at)
    values (new.id, 'failed', left(sqlerrm, 500), now());
    return new;
end;
$$;

drop trigger if exists leads_ghl_sync_on_insert on public.leads;
create trigger leads_ghl_sync_on_insert
  after insert on public.leads
  for each row
  execute function public.ghl_sync_on_insert();

-- ---------------------------------------------------------------------------
-- Reconcile queued rows against the pg_net response table
-- ---------------------------------------------------------------------------
create or replace function public.ghl_sync_reconcile()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row record;
  v_status integer;
  v_content text;
  v_error text;
  v_count integer := 0;
begin
  if auth.uid() is not null and not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  for v_row in
    select id, request_id
    from public.ghl_sync_log
    where status = 'queued'
      and request_id is not null
      and created_at > now() - interval '1 day'
  loop
    select status_code, content, error_msg
      into v_status, v_content, v_error
    from net._http_response
    where id = v_row.request_id;

    -- Not landed yet: leave queued for the next run.
    if not found then
      continue;
    end if;

    if v_error is not null and length(v_error) > 0 then
      update public.ghl_sync_log
         set status = 'failed', error = left(v_error, 500), settled_at = now()
       where id = v_row.id;
    elsif v_status between 200 and 299 then
      update public.ghl_sync_log
         set status = 'synced', error = '', settled_at = now()
       where id = v_row.id;
    else
      update public.ghl_sync_log
         set status = 'failed',
             error = 'HTTP ' || coalesce(v_status::text, '?') || ': ' || left(coalesce(v_content, ''), 400),
             settled_at = now()
       where id = v_row.id;
    end if;

    v_count := v_count + 1;
  end loop;

  return v_count;
end;
$$;

revoke all on function public.ghl_sync_reconcile() from public, anon;
grant execute on function public.ghl_sync_reconcile() to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- Admin RPC grants
-- ---------------------------------------------------------------------------
revoke all on function public.ghl_status() from public, anon;
revoke all on function public.ghl_save_config(text, text, text, boolean, text, text) from public, anon;
revoke all on function public.ghl_disconnect() from public, anon;

grant execute on function public.ghl_status() to authenticated, service_role;
grant execute on function public.ghl_save_config(text, text, text, boolean, text, text) to authenticated, service_role;
grant execute on function public.ghl_disconnect() to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- Run the reconciler every 5 minutes
-- ---------------------------------------------------------------------------
do $$
begin
  perform cron.unschedule('ghl-sync-reconcile');
exception
  when others then null;
end;
$$;

select cron.schedule('ghl-sync-reconcile', '*/5 * * * *', $$select public.ghl_sync_reconcile();$$);
