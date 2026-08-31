-- Dashboard-managed Gmail connection for lead notifications.
--
-- Replaces the CLI-only setup: the client ID, sender and recipient live in
-- public.lead_notify_settings, while the client secret and refresh token go to
-- Vault. Admins never read the secrets back — the UI only ever sees booleans
-- saying whether each one is present.
--
-- The notify-lead and gmail-oauth Edge Functions read the real values through
-- public.lead_notify_config(), which is granted to service_role only.

create table if not exists public.lead_notify_settings (
  id smallint primary key default 1 check (id = 1),
  enabled boolean not null default true,
  client_id text not null default '',
  sender_email text not null default '',
  notify_to text not null default '',
  connected_email text not null default '',
  last_error text not null default '',
  connected_at timestamptz,
  updated_at timestamptz not null default now()
);

insert into public.lead_notify_settings (id) values (1)
on conflict (id) do nothing;

alter table public.lead_notify_settings enable row level security;

grant select on public.lead_notify_settings to authenticated;
grant all on public.lead_notify_settings to service_role;

drop policy if exists "lead_notify_settings_admin_select" on public.lead_notify_settings;
create policy "lead_notify_settings_admin_select"
  on public.lead_notify_settings for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- ---------------------------------------------------------------------------
-- Vault helper: upsert by name. Internal — callable only by the definer
-- functions below, never directly by a client.
-- ---------------------------------------------------------------------------
create or replace function public.lead_notify_put_secret(p_name text, p_value text)
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

revoke all on function public.lead_notify_put_secret(text, text) from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- Admin-facing status. Returns presence flags, never the secrets themselves.
-- ---------------------------------------------------------------------------
create or replace function public.lead_notify_status()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.lead_notify_settings;
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  select * into v_row from public.lead_notify_settings where id = 1;

  return jsonb_build_object(
    'enabled', v_row.enabled,
    'client_id', v_row.client_id,
    'sender_email', v_row.sender_email,
    'notify_to', v_row.notify_to,
    'connected_email', v_row.connected_email,
    'last_error', v_row.last_error,
    'connected_at', v_row.connected_at,
    'updated_at', v_row.updated_at,
    'has_client_secret', exists (select 1 from vault.secrets where name = 'gmail_client_secret'),
    'has_refresh_token', exists (select 1 from vault.secrets where name = 'gmail_refresh_token')
  );
end;
$$;

-- ---------------------------------------------------------------------------
-- Save the OAuth client and addresses. A blank p_client_secret keeps the
-- stored one, so the UI can leave the field empty on re-save.
-- ---------------------------------------------------------------------------
create or replace function public.lead_notify_save_config(
  p_client_id text,
  p_client_secret text,
  p_sender_email text,
  p_notify_to text,
  p_enabled boolean default true
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

  update public.lead_notify_settings
     set client_id = coalesce(trim(p_client_id), ''),
         sender_email = coalesce(trim(p_sender_email), ''),
         notify_to = coalesce(trim(p_notify_to), ''),
         enabled = coalesce(p_enabled, true),
         updated_at = now()
   where id = 1;

  if p_client_secret is not null and length(trim(p_client_secret)) > 0 then
    perform public.lead_notify_put_secret('gmail_client_secret', trim(p_client_secret));
  end if;

  return public.lead_notify_status();
end;
$$;

-- ---------------------------------------------------------------------------
-- Called by the gmail-oauth Edge Function (service_role) after a successful
-- code exchange.
-- ---------------------------------------------------------------------------
create or replace function public.lead_notify_store_token(
  p_refresh_token text,
  p_connected_email text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  perform public.lead_notify_put_secret('gmail_refresh_token', p_refresh_token);

  update public.lead_notify_settings
     set connected_email = coalesce(trim(p_connected_email), ''),
         -- Default the sender to the account that just authorised, since the
         -- refresh token can only send as that mailbox.
         sender_email = case
           when length(trim(coalesce(sender_email, ''))) = 0
             then coalesce(trim(p_connected_email), '')
           else sender_email
         end,
         connected_at = now(),
         last_error = '',
         updated_at = now()
   where id = 1;
end;
$$;

revoke all on function public.lead_notify_store_token(text, text) from public, anon, authenticated;
grant execute on function public.lead_notify_store_token(text, text) to service_role;

-- ---------------------------------------------------------------------------
-- Drop the Gmail connection. Keeps the client ID so reconnecting is one click.
-- ---------------------------------------------------------------------------
create or replace function public.lead_notify_disconnect()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  select id into v_id from vault.secrets where name = 'gmail_refresh_token';
  if v_id is not null then
    delete from vault.secrets where id = v_id;
  end if;

  update public.lead_notify_settings
     set connected_email = '', connected_at = null, last_error = '', updated_at = now()
   where id = 1;

  return public.lead_notify_status();
end;
$$;

-- ---------------------------------------------------------------------------
-- Full config including secrets. service_role only — this is what the Edge
-- Functions call.
-- ---------------------------------------------------------------------------
create or replace function public.lead_notify_config()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.lead_notify_settings;
begin
  select * into v_row from public.lead_notify_settings where id = 1;

  return jsonb_build_object(
    'enabled', v_row.enabled,
    'client_id', v_row.client_id,
    'sender_email', v_row.sender_email,
    'notify_to', v_row.notify_to,
    'client_secret', (select decrypted_secret from vault.decrypted_secrets where name = 'gmail_client_secret'),
    'refresh_token', (select decrypted_secret from vault.decrypted_secrets where name = 'gmail_refresh_token')
  );
end;
$$;

revoke all on function public.lead_notify_config() from public, anon, authenticated;
grant execute on function public.lead_notify_config() to service_role;

-- ---------------------------------------------------------------------------
-- Admin RPCs: reachable by signed-in users, who are then role-checked inside.
-- Granted explicitly because the default PUBLIC execute is revoked below, and
-- without this the dashboard fails with "permission denied for function".
-- ---------------------------------------------------------------------------
revoke all on function public.lead_notify_status() from public, anon;
revoke all on function public.lead_notify_save_config(text, text, text, text, boolean) from public, anon;
revoke all on function public.lead_notify_disconnect() from public, anon;

grant execute on function public.lead_notify_status() to authenticated, service_role;
grant execute on function public.lead_notify_save_config(text, text, text, text, boolean) to authenticated, service_role;
grant execute on function public.lead_notify_disconnect() to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- Record a send failure so the dashboard can surface it.
-- ---------------------------------------------------------------------------
create or replace function public.lead_notify_set_error(p_error text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.lead_notify_settings
     set last_error = left(coalesce(p_error, ''), 500), updated_at = now()
   where id = 1;
end;
$$;

revoke all on function public.lead_notify_set_error(text) from public, anon, authenticated;
grant execute on function public.lead_notify_set_error(text) to service_role;
