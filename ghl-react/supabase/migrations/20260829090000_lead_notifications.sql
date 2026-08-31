-- Email Stanley whenever a lead is captured.
--
-- An AFTER INSERT trigger on public.leads posts the row to the notify-lead Edge
-- Function, which sends through the Gmail API. pg_net is asynchronous, so the
-- trigger only queues the request; a reconcile job copies the eventual HTTP
-- result into public.lead_notifications so failures are visible.
--
-- Before this works, store the endpoint and shared secret in Vault:
--   select vault.create_secret(
--     'https://zmnoguzttgqufgooitpx.supabase.co/functions/v1/notify-lead',
--     'lead_notify_url');
--   select vault.create_secret('<random-string>', 'lead_notify_secret');
-- The same random string must be set on the function:
--   npx supabase secrets set LEAD_WEBHOOK_SECRET="<random-string>"

create extension if not exists pg_cron;
create extension if not exists pg_net;

-- ---------------------------------------------------------------------------
-- Delivery log
-- ---------------------------------------------------------------------------
create table if not exists public.lead_notifications (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  request_id bigint,
  status text not null default 'queued'
    check (status in ('queued', 'sent', 'failed')),
  error text not null default '',
  created_at timestamptz not null default now(),
  settled_at timestamptz
);

create index if not exists lead_notifications_status_idx
  on public.lead_notifications (status);
create index if not exists lead_notifications_lead_idx
  on public.lead_notifications (lead_id);

grant select on public.lead_notifications to authenticated;
grant all on public.lead_notifications to service_role;

alter table public.lead_notifications enable row level security;

-- Admins can inspect delivery history; the public never sees it. Writes happen
-- only through the security-definer functions below.
drop policy if exists "lead_notifications_admin_select" on public.lead_notifications;
create policy "lead_notifications_admin_select"
  on public.lead_notifications for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- ---------------------------------------------------------------------------
-- Trigger: queue the notification
-- ---------------------------------------------------------------------------
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
begin
  select decrypted_secret into v_url
  from vault.decrypted_secrets where name = 'lead_notify_url';

  select decrypted_secret into v_secret
  from vault.decrypted_secrets where name = 'lead_notify_secret';

  if v_url is null or v_secret is null then
    insert into public.lead_notifications (lead_id, status, error, settled_at)
    values (new.id, 'failed', 'Missing Vault secret lead_notify_url or lead_notify_secret', now());
    return new;
  end if;

  select net.http_post(
    url := v_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', v_secret
    ),
    body := jsonb_build_object('record', to_jsonb(new)),
    timeout_milliseconds := 15000
  ) into v_request_id;

  insert into public.lead_notifications (lead_id, request_id, status)
  values (new.id, v_request_id, 'queued');

  return new;
exception
  when others then
    -- Never let a notification problem block the lead from being saved.
    insert into public.lead_notifications (lead_id, status, error, settled_at)
    values (new.id, 'failed', left(sqlerrm, 500), now());
    return new;
end;
$$;

drop trigger if exists leads_notify_on_insert on public.leads;
create trigger leads_notify_on_insert
  after insert on public.leads
  for each row
  execute function public.notify_lead_on_insert();

-- ---------------------------------------------------------------------------
-- Reconcile queued rows against the pg_net response table
-- ---------------------------------------------------------------------------
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
  v_count integer := 0;
begin
  if auth.uid() is not null and not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  for v_row in
    select id, request_id
    from public.lead_notifications
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
      update public.lead_notifications
         set status = 'failed', error = left(v_error, 500), settled_at = now()
       where id = v_row.id;
    elsif v_status = 200 then
      update public.lead_notifications
         set status = 'sent', error = '', settled_at = now()
       where id = v_row.id;
    else
      update public.lead_notifications
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

revoke all on function public.lead_notifications_reconcile() from public, anon;
grant execute on function public.lead_notifications_reconcile() to authenticated, service_role;

select cron.unschedule('lead-notifications-reconcile')
where exists (select 1 from cron.job where jobname = 'lead-notifications-reconcile');

select cron.schedule(
  'lead-notifications-reconcile',
  '*/5 * * * *',
  $$select public.lead_notifications_reconcile()$$
);
