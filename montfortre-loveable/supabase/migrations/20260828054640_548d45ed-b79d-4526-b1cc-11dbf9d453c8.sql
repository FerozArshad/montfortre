create or replace function public.set_google_places_key(_key text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  if _key is null or length(trim(_key)) = 0 then
    return 'missing key';
  end if;

  select id into v_id from vault.secrets where name = 'google_places_api_key';

  if v_id is null then
    perform vault.create_secret(trim(_key), 'google_places_api_key', 'Google Places API server key for reviews sync');
    return 'created';
  else
    perform vault.update_secret(v_id, trim(_key), 'google_places_api_key', 'Google Places API server key for reviews sync');
    return 'updated';
  end if;
end;
$$;

revoke all on function public.set_google_places_key(text) from public, anon, authenticated;
grant execute on function public.set_google_places_key(text) to service_role;