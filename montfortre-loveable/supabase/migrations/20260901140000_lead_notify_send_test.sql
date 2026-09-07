-- Queue a test notification from /admin/notifications through pg_net, the same
-- path real leads use. Avoids browser → Edge Function CORS preflight issues.

create or replace function public.lead_notify_send_test(p_to text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_url text;
  v_secret text;
  v_request_id bigint;
  v_to text := trim(p_to);
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;

  if v_to is null or length(v_to) = 0 or position('@' in v_to) = 0 then
    raise exception 'Enter a valid email address to send the test to.';
  end if;

  select decrypted_secret into v_url
  from vault.decrypted_secrets where name = 'lead_notify_url';

  select decrypted_secret into v_secret
  from vault.decrypted_secrets where name = 'lead_notify_secret';

  if v_url is null or v_secret is null then
    raise exception 'Notification webhook is not configured. Save settings on /admin/notifications first.';
  end if;

  update public.lead_notify_settings
     set last_error = '', updated_at = now()
   where id = 1;

  select net.http_post(
    url := v_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', v_secret
    ),
    body := jsonb_build_object('test', true, 'to', v_to),
    timeout_milliseconds := 30000
  ) into v_request_id;

  return jsonb_build_object(
    'queued', true,
    'to', v_to,
    'request_id', v_request_id
  );
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
    return jsonb_build_object('status', 'sent', 'detail', left(coalesce(v_content, ''), 400));
  end if;

  return jsonb_build_object(
    'status', 'failed',
    'error', 'HTTP ' || coalesce(v_status::text, '?') || ': ' || left(coalesce(v_content, ''), 400)
  );
end;
$$;

revoke all on function public.lead_notify_send_test(text) from public, anon;
revoke all on function public.lead_notify_poll_test(bigint) from public, anon;

grant execute on function public.lead_notify_send_test(text) to authenticated, service_role;
grant execute on function public.lead_notify_poll_test(bigint) to authenticated, service_role;
