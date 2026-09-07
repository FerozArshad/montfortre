-- Harden public lead submission: validated RPC, no direct anon inserts, rate limits.

create index if not exists leads_email_created_idx
  on public.leads (lower(email), created_at desc);

create or replace function public.leads_sanitize_meta(p_meta jsonb)
returns jsonb
language plpgsql
immutable
as $$
declare
  v_out jsonb := '{}'::jsonb;
  v_key text;
  v_val jsonb;
  v_count integer := 0;
begin
  if p_meta is null or jsonb_typeof(p_meta) <> 'object' then
    return '{}'::jsonb;
  end if;

  for v_key, v_val in select * from jsonb_each(p_meta) loop
    exit when v_count >= 20;
    if length(v_key) = 0 or length(v_key) > 80 then
      continue;
    end if;
    if v_key !~ '^[a-zA-Z0-9_-]+$' then
      continue;
    end if;

    if jsonb_typeof(v_val) = 'string' then
      v_out := v_out || jsonb_build_object(v_key, left(btrim(v_val #>> '{}'), 500));
      v_count := v_count + 1;
    elsif jsonb_typeof(v_val) in ('number', 'boolean') then
      v_out := v_out || jsonb_build_object(v_key, v_val);
      v_count := v_count + 1;
    end if;
  end loop;

  return v_out;
end;
$$;

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
begin
  if p_payload is null or jsonb_typeof(p_payload) <> 'object' then
    raise exception 'Invalid submission payload';
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
    'contact',
    'listing-lead',
    'listing-tour',
    'blog-embed',
    'home-valuation',
    'market-report',
    'guide-download',
    'mortgage-checklist',
    'listing-access',
    'neighborhood',
    'other'
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
    first_name,
    last_name,
    email,
    phone,
    message,
    form_type,
    source_page,
    listing_slug,
    meta,
    status
  ) values (
    v_first,
    v_last,
    v_email,
    v_phone,
    v_message,
    v_form_type,
    coalesce(v_source_page, ''),
    coalesce(v_listing_slug, ''),
    v_meta,
    'new'
  )
  returning id into v_id;

  return v_id;
end;
$$;

revoke all on function public.submit_public_lead(jsonb) from public;
grant execute on function public.submit_public_lead(jsonb) to anon, authenticated, service_role;

revoke insert on public.leads from anon;

drop policy if exists "leads_public_insert" on public.leads;

drop policy if exists "leads_admin_insert" on public.leads;
create policy "leads_admin_insert"
  on public.leads for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

notify pgrst, 'reload schema';
