-- Parse notify-lead JSON responses so a HTTP 200 with { sent: false } is not
-- reported as a successful test delivery.

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
      return jsonb_build_object(
        'status', 'sent',
        'to', coalesce(v_json->>'to', ''),
        'detail', left(coalesce(v_content, ''), 400)
      );
    end if;

    if v_json ? 'error' then
      return jsonb_build_object('status', 'failed', 'error', left(v_json->>'error', 500));
    end if;

    if v_json ? 'reason' then
      return jsonb_build_object(
        'status', 'failed',
        'error', coalesce(v_json->>'reason', 'Notifications are disabled')
      );
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

revoke all on function public.lead_notify_poll_test(bigint) from public, anon;
grant execute on function public.lead_notify_poll_test(bigint) to authenticated, service_role;

notify pgrst, 'reload schema';
