create or replace function public.lead_notify_normalize_emails(p_emails text[])
returns text[]
language plpgsql
immutable
set search_path = public
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

notify pgrst, 'reload schema';