create table if not exists public.lead_notify_recipients (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  constraint lead_notify_recipients_email_unique unique (email),
  constraint lead_notify_recipients_email_format check (position('@' in email) > 1)
);

create index if not exists lead_notify_recipients_sort_idx
  on public.lead_notify_recipients (sort_order, created_at);

grant select on public.lead_notify_recipients to authenticated;
grant all on public.lead_notify_recipients to service_role;

alter table public.lead_notify_recipients enable row level security;

drop policy if exists "lead_notify_recipients_admin_select" on public.lead_notify_recipients;
create policy "lead_notify_recipients_admin_select"
  on public.lead_notify_recipients for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

insert into public.lead_notify_recipients (email, sort_order)
select lower(trim(notify_to)), 0
from public.lead_notify_settings
where id = 1
  and length(trim(coalesce(notify_to, ''))) > 0
  and position('@' in trim(notify_to)) > 0
on conflict (email) do nothing;

alter table public.lead_notifications
  add column if not exists sender_email text not null default '',
  add column if not exists recipient_count smallint not null default 0,
  add column if not exists started_at timestamptz,
  add column if not exists queued_at timestamptz;

update public.lead_notifications set status = 'delivered' where status = 'sent';

alter table public.lead_notifications drop constraint if exists lead_notifications_status_check;
alter table public.lead_notifications
  add constraint lead_notifications_status_check
  check (status in ('queued', 'sending', 'delivered', 'failed', 'partially_delivered'));

create table if not exists public.lead_notification_deliveries (
  id uuid primary key default gen_random_uuid(),
  notification_id uuid not null references public.lead_notifications (id) on delete cascade,
  lead_id uuid not null references public.leads (id) on delete cascade,
  recipient_email text not null,
  sender_email text not null default '',
  status text not null default 'queued'
    check (status in ('queued', 'sending', 'delivered', 'failed')),
  error text not null default '',
  provider_message_id text not null default '',
  queued_at timestamptz,
  sending_at timestamptz,
  delivered_at timestamptz,
  failed_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists lead_notification_deliveries_notification_idx
  on public.lead_notification_deliveries (notification_id);
create index if not exists lead_notification_deliveries_lead_idx
  on public.lead_notification_deliveries (lead_id);

grant select on public.lead_notification_deliveries to authenticated;
grant all on public.lead_notification_deliveries to service_role;

alter table public.lead_notification_deliveries enable row level security;

drop policy if exists "lead_notification_deliveries_admin_select" on public.lead_notification_deliveries;
create policy "lead_notification_deliveries_admin_select"
  on public.lead_notification_deliveries for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create or replace function public.lead_notify_recipient_list()
returns text[]
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    array_agg(lower(r.email) order by r.sort_order, r.created_at),
    '{}'::text[]
  )
  from public.lead_notify_recipients r;
$$;

revoke all on function public.lead_notify_recipient_list() from public, anon, authenticated;

create or replace function public.lead_notify_normalize_emails(p_emails text[])
returns text[]
language plpgsql
immutable
as $$
declare
  v_out text[] := '{}';
  v_email text;
begin
  if p_emails is null then
    return v_out;
  end if;

  foreach v_email in array p_emails loop
    v_email := lower(trim(coalesce(v_email, '')));
    if length(v_email) = 0 or position('@' in v_email) = 0 then
      raise exception 'Invalid email address: %', coalesce(v_email, '(empty)');
    end if;
    if not v_email = any (v_out) then
      v_out := array_append(v_out, v_email);
    end if;
  end loop;

  if coalesce(array_length(v_out, 1), 0) > 4 then
    raise exception 'Maximum 4 notification recipients allowed';
  end if;

  return v_out;
end;
$$;

create or replace function public.lead_notify_status()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.lead_notify_settings;
  v_recipients jsonb;
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  select * into v_row from public.lead_notify_settings where id = 1;

  select coalesce(
    jsonb_agg(jsonb_build_object('id', r.id, 'email', r.email, 'sort_order', r.sort_order) order by r.sort_order, r.created_at),
    '[]'::jsonb
  )
  into v_recipients
  from public.lead_notify_recipients r;

  return jsonb_build_object(
    'enabled', v_row.enabled,
    'client_id', v_row.client_id,
    'sender_email', v_row.sender_email,
    'notify_to', v_row.notify_to,
    'recipients', v_recipients,
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

drop function if exists public.lead_notify_save_config(text, text, text, text, boolean, text, text);

create or replace function public.lead_notify_save_config(
  p_client_id text,
  p_client_secret text,
  p_sender_email text,
  p_notify_to text,
  p_enabled boolean default true,
  p_webhook_secret text default null,
  p_notify_url text default null,
  p_notify_recipients text[] default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_recipients text[];
  v_email text;
  v_idx integer := 0;
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  if p_notify_recipients is not null then
    v_recipients := public.lead_notify_normalize_emails(p_notify_recipients);
  elsif length(trim(coalesce(p_notify_to, ''))) > 0 then
    v_recipients := public.lead_notify_normalize_emails(array[trim(p_notify_to)]);
  else
    v_recipients := public.lead_notify_recipient_list();
  end if;

  update public.lead_notify_settings
     set client_id = coalesce(trim(p_client_id), ''),
         sender_email = coalesce(trim(p_sender_email), ''),
         notify_to = coalesce(v_recipients[1], ''),
         enabled = coalesce(p_enabled, true),
         last_error = '',
         updated_at = now()
   where id = 1;

  delete from public.lead_notify_recipients;

  foreach v_email in array v_recipients loop
    insert into public.lead_notify_recipients (email, sort_order)
    values (v_email, v_idx);
    v_idx := v_idx + 1;
  end loop;

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
  v_recipients text[];
begin
  select * into v_row from public.lead_notify_settings where id = 1;
  v_recipients := public.lead_notify_recipient_list();

  if coalesce(array_length(v_recipients, 1), 0) = 0 and length(trim(coalesce(v_row.notify_to, ''))) > 0 then
    v_recipients := array[lower(trim(v_row.notify_to))];
  end if;

  return jsonb_build_object(
    'enabled', v_row.enabled,
    'client_id', v_row.client_id,
    'sender_email', v_row.sender_email,
    'notify_to', v_row.notify_to,
    'notify_recipients', to_jsonb(v_recipients),
    'client_secret', (select decrypted_secret from vault.decrypted_secrets where name = 'gmail_client_secret'),
    'refresh_token', (select decrypted_secret from vault.decrypted_secrets where name = 'gmail_refresh_token'),
    'webhook_secret', (select decrypted_secret from vault.decrypted_secrets where name = 'lead_notify_secret')
  );
end;
$$;

revoke all on function public.lead_notify_save_config(text, text, text, text, boolean, text, text, text[]) from public, anon;
grant execute on function public.lead_notify_save_config(text, text, text, text, boolean, text, text, text[]) to authenticated, service_role;

update public.lead_notifications
   set queued_at = created_at
 where queued_at is null;

create or replace function public.notify_lead_on_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_url text;
  v_secret text;
  v_request_id bigint;
  v_notification_id uuid;
begin
  select decrypted_secret into v_url
  from vault.decrypted_secrets where name = 'lead_notify_url';

  select decrypted_secret into v_secret
  from vault.decrypted_secrets where name = 'lead_notify_secret';

  if v_url is null or v_secret is null then
    insert into public.lead_notifications (lead_id, status, error, settled_at, queued_at)
    values (new.id, 'failed', 'Missing Vault secret lead_notify_url or lead_notify_secret', now(), now());
    return new;
  end if;

  insert into public.lead_notifications (lead_id, status, queued_at)
  values (new.id, 'queued', now())
  returning id into v_notification_id;

  select net.http_post(
    url := v_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', v_secret
    ),
    body := jsonb_build_object(
      'record', to_jsonb(new),
      'notification_id', v_notification_id
    ),
    timeout_milliseconds := 60000
  ) into v_request_id;

  update public.lead_notifications
     set request_id = v_request_id
   where id = v_notification_id;

  return new;
exception
  when others then
    insert into public.lead_notifications (lead_id, status, error, settled_at, queued_at)
    values (new.id, 'failed', left(sqlerrm, 500), now(), now());
    return new;
end;
$$;

create or replace function public.lead_notify_finalize(
  p_notification_id uuid,
  p_sender_email text,
  p_deliveries jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_lead_id uuid;
  v_item jsonb;
  v_status text;
  v_delivered integer := 0;
  v_failed integer := 0;
  v_total integer := 0;
  v_overall text;
begin
  select lead_id into v_lead_id
  from public.lead_notifications
  where id = p_notification_id;

  if v_lead_id is null then
    return;
  end if;

  delete from public.lead_notification_deliveries
  where notification_id = p_notification_id;

  for v_item in select * from jsonb_array_elements(coalesce(p_deliveries, '[]'::jsonb)) loop
    v_total := v_total + 1;
    v_status := coalesce(v_item->>'status', 'failed');
    if v_status = 'delivered' then
      v_delivered := v_delivered + 1;
    else
      v_failed := v_failed + 1;
      v_status := 'failed';
    end if;

    insert into public.lead_notification_deliveries (
      notification_id,
      lead_id,
      recipient_email,
      sender_email,
      status,
      error,
      provider_message_id,
      queued_at,
      sending_at,
      delivered_at,
      failed_at
    ) values (
      p_notification_id,
      v_lead_id,
      lower(trim(coalesce(v_item->>'recipient', ''))),
      coalesce(trim(p_sender_email), ''),
      v_status,
      left(coalesce(v_item->>'error', ''), 500),
      left(coalesce(v_item->>'message_id', ''), 200),
      nullif(v_item->>'queued_at', '')::timestamptz,
      nullif(v_item->>'sending_at', '')::timestamptz,
      case when v_status = 'delivered' then coalesce(nullif(v_item->>'delivered_at', '')::timestamptz, now()) else null end,
      case when v_status = 'failed' then coalesce(nullif(v_item->>'failed_at', '')::timestamptz, now()) else null end
    );
  end loop;

  if v_total = 0 then
    v_overall := 'failed';
  elsif v_failed = 0 then
    v_overall := 'delivered';
  elsif v_delivered = 0 then
    v_overall := 'failed';
  else
    v_overall := 'partially_delivered';
  end if;

  update public.lead_notifications
     set status = v_overall,
         sender_email = coalesce(trim(p_sender_email), sender_email),
         recipient_count = v_total,
         error = case
           when v_overall = 'delivered' then ''
           when v_failed = v_total then left(coalesce(jsonb_array_element(p_deliveries, 0)->>'error', 'All recipients failed'), 500)
           else left(format('%s of %s recipients failed', v_failed, v_total), 500)
         end,
         settled_at = now()
   where id = p_notification_id;
end;
$$;

revoke all on function public.lead_notify_finalize(uuid, text, jsonb) from public, anon, authenticated;
grant execute on function public.lead_notify_finalize(uuid, text, jsonb) to service_role;

create or replace function public.lead_notify_mark_sending(p_notification_id uuid, p_sender_email text, p_recipients text[])
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_lead_id uuid;
  v_email text;
begin
  select lead_id into v_lead_id
  from public.lead_notifications
  where id = p_notification_id;

  if v_lead_id is null then
    return;
  end if;

  update public.lead_notifications
     set status = 'sending',
         sender_email = coalesce(trim(p_sender_email), sender_email),
         recipient_count = coalesce(array_length(p_recipients, 1), 0),
         started_at = now(),
         error = ''
   where id = p_notification_id;

  delete from public.lead_notification_deliveries
  where notification_id = p_notification_id;

  foreach v_email in array coalesce(p_recipients, '{}'::text[]) loop
    insert into public.lead_notification_deliveries (
      notification_id,
      lead_id,
      recipient_email,
      sender_email,
      status,
      queued_at
    ) values (
      p_notification_id,
      v_lead_id,
      lower(trim(v_email)),
      coalesce(trim(p_sender_email), ''),
      'queued',
      now()
    );
  end loop;
end;
$$;

revoke all on function public.lead_notify_mark_sending(uuid, text, text[]) from public, anon, authenticated;
grant execute on function public.lead_notify_mark_sending(uuid, text, text[]) to service_role;

create or replace function public.lead_notifications_reconcile()
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
  v_json jsonb;
  v_count integer := 0;
begin
  if auth.uid() is not null and not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  for v_row in
    select id, request_id
    from public.lead_notifications
    where status in ('queued', 'sending')
      and request_id is not null
      and created_at > now() - interval '7 days'
  loop
    select status_code, content, error_msg
      into v_status, v_content, v_error
    from net._http_response
    where id = v_row.request_id;

    if not found then
      continue;
    end if;

    if v_error is not null and length(v_error) > 0 then
      update public.lead_notifications
         set status = 'failed', error = left(v_error, 500), settled_at = now()
       where id = v_row.id;
      v_count := v_count + 1;
      continue;
    end if;

    if v_status between 200 and 299 then
      begin
        v_json := coalesce(v_content, '{}')::jsonb;
      exception
        when others then
          v_json := '{}'::jsonb;
      end;

      if v_json ? 'deliveries' and v_json ? 'notification_id' then
        perform public.lead_notify_finalize(
          (v_json->>'notification_id')::uuid,
          coalesce(v_json->>'sender', ''),
          v_json->'deliveries'
        );
        v_count := v_count + 1;
        continue;
      end if;

      if coalesce(v_json->>'sent', 'false') = 'true' then
        update public.lead_notifications
           set status = 'delivered', error = '', settled_at = now()
         where id = v_row.id;
        v_count := v_count + 1;
        continue;
      end if;

      if v_json ? 'error' then
        update public.lead_notifications
           set status = 'failed', error = left(v_json->>'error', 500), settled_at = now()
         where id = v_row.id;
        v_count := v_count + 1;
        continue;
      end if;

      if v_json ? 'reason' then
        update public.lead_notifications
           set status = 'failed', error = left(v_json->>'reason', 500), settled_at = now()
         where id = v_row.id;
        v_count := v_count + 1;
        continue;
      end if;

      update public.lead_notifications
         set status = 'failed',
             error = 'Unexpected response: ' || left(coalesce(v_content, ''), 400),
             settled_at = now()
       where id = v_row.id;
      v_count := v_count + 1;
      continue;
    end if;

    update public.lead_notifications
       set status = 'failed',
           error = 'HTTP ' || coalesce(v_status::text, '?') || ': ' || left(coalesce(v_content, ''), 400),
           settled_at = now()
     where id = v_row.id;
    v_count := v_count + 1;
  end loop;

  return v_count;
end;
$$;

create or replace function public.lead_notify_poll_test(p_request_id bigint)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_status integer;
  v_content text;
  v_error text;
  v_json jsonb;
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  if p_request_id is null then
    return jsonb_build_object('status', 'failed', 'error', 'Missing request id');
  end if;

  select status_code, content, error_msg
    into v_status, v_content, v_error
  from net._http_response
  where id = p_request_id;

  if not found then
    return jsonb_build_object('status', 'pending');
  end if;

  if v_error is not null and length(v_error) > 0 then
    return jsonb_build_object('status', 'failed', 'error', left(v_error, 500));
  end if;

  if v_status between 200 and 299 then
    begin
      v_json := coalesce(v_content, '{}')::jsonb;
    exception
      when others then
        v_json := '{}'::jsonb;
    end;

    if coalesce(v_json->>'sent', 'false') = 'true' then
      return jsonb_build_object('status', 'sent', 'detail', left(coalesce(v_content, ''), 400));
    end if;

    if v_json ? 'error' then
      return jsonb_build_object('status', 'failed', 'error', left(v_json->>'error', 500));
    end if;

    if v_json ? 'reason' then
      return jsonb_build_object('status', 'failed', 'error', left(v_json->>'reason', 500));
    end if;

    return jsonb_build_object(
      'status', 'failed',
      'error', 'Unexpected response: ' || left(coalesce(v_content, ''), 400)
    );
  end if;

  return jsonb_build_object(
    'status', 'failed',
    'error', 'HTTP ' || coalesce(v_status::text, '?') || ': ' || left(coalesce(v_content, ''), 400)
  );
end;
$$;

notify pgrst, 'reload schema';