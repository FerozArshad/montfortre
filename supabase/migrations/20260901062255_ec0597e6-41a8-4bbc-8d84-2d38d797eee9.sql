drop function if exists public.lead_notify_save_config(text, text, text, text, boolean);

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
    'has_refresh_token', exists (select 1 from vault.secrets where name = 'gmail_refresh_token'),
    'has_webhook_secret', exists (select 1 from vault.secrets where name = 'lead_notify_secret'),
    'has_notify_url', exists (select 1 from vault.secrets where name = 'lead_notify_url')
  );
end;
$$;

create or replace function public.lead_notify_save_config(
  p_client_id text,
  p_client_secret text,
  p_sender_email text,
  p_notify_to text,
  p_enabled boolean default true,
  p_webhook_secret text default null,
  p_notify_url text default null
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
         last_error = '',
         updated_at = now()
   where id = 1;
  if p_client_secret is not null and length(trim(p_client_secret)) > 0 then
    perform public.lead_notify_put_secret('gmail_client_secret', trim(p_client_secret));
  end if;
  if p_notify_url is not null and length(trim(p_notify_url)) > 0 then
    perform public.lead_notify_put_secret('lead_notify_url', trim(p_notify_url));
  end if;
  if p_webhook_secret is not null and length(trim(p_webhook_secret)) > 0 then
    perform public.lead_notify_put_secret('lead_notify_secret', trim(p_webhook_secret));
  elsif not exists (select 1 from vault.secrets where name = 'lead_notify_secret') then
    perform public.lead_notify_put_secret(
      'lead_notify_secret',
      replace(gen_random_uuid()::text, '-', '') || replace(gen_random_uuid()::text, '-', '')
    );
  end if;
  return public.lead_notify_status();
end;
$$;

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
    'refresh_token', (select decrypted_secret from vault.decrypted_secrets where name = 'gmail_refresh_token'),
    'webhook_secret', (select decrypted_secret from vault.decrypted_secrets where name = 'lead_notify_secret')
  );
end;
$$;

revoke all on function public.lead_notify_save_config(text, text, text, text, boolean, text, text) from public, anon;
grant execute on function public.lead_notify_save_config(text, text, text, text, boolean, text, text) to authenticated, service_role;