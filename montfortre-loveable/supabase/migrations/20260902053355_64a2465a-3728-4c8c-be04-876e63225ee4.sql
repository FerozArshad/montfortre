create table if not exists public.meta_pixel_settings (
  id smallint primary key default 1 check (id = 1),
  enabled boolean not null default false,
  pixel_id text not null default '',
  track_page_views boolean not null default true,
  track_leads boolean not null default true,
  track_listing_views boolean not null default true,
  production_only boolean not null default true,
  updated_at timestamptz not null default now(),
  constraint meta_pixel_settings_pixel_id_format check (
    pixel_id = '' or pixel_id ~ '^[0-9]{10,20}$'
  )
);

insert into public.meta_pixel_settings (id) values (1)
on conflict (id) do nothing;

grant select on public.meta_pixel_settings to authenticated;
grant all on public.meta_pixel_settings to service_role;

alter table public.meta_pixel_settings enable row level security;

drop policy if exists "meta_pixel_settings_admin_select" on public.meta_pixel_settings;

create policy "meta_pixel_settings_admin_select"
  on public.meta_pixel_settings for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create or replace function public.meta_pixel_status()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.meta_pixel_settings;
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;
  select * into v_row from public.meta_pixel_settings where id = 1;
  return jsonb_build_object(
    'enabled', v_row.enabled,
    'pixel_id', v_row.pixel_id,
    'track_page_views', v_row.track_page_views,
    'track_leads', v_row.track_leads,
    'track_listing_views', v_row.track_listing_views,
    'production_only', v_row.production_only,
    'updated_at', v_row.updated_at
  );
end;
$$;

create or replace function public.meta_pixel_save_config(
  p_pixel_id text,
  p_enabled boolean default false,
  p_track_page_views boolean default true,
  p_track_leads boolean default true,
  p_track_listing_views boolean default true,
  p_production_only boolean default true
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_pixel_id text := regexp_replace(coalesce(trim(p_pixel_id), ''), '\s+', '', 'g');
begin
  if not public.has_role(auth.uid(), 'admin') then
    raise exception 'Not authorized';
  end if;
  if coalesce(p_enabled, false) then
    if v_pixel_id = '' then
      raise exception 'Enter your Meta Pixel ID before enabling tracking.';
    end if;
    if v_pixel_id !~ '^[0-9]{10,20}$' then
      raise exception 'Meta Pixel ID must be 10–20 digits (numbers only).';
    end if;
  elsif v_pixel_id <> '' and v_pixel_id !~ '^[0-9]{10,20}$' then
    raise exception 'Meta Pixel ID must be 10–20 digits (numbers only).';
  end if;
  update public.meta_pixel_settings
     set enabled = coalesce(p_enabled, false),
         pixel_id = v_pixel_id,
         track_page_views = coalesce(p_track_page_views, true),
         track_leads = coalesce(p_track_leads, true),
         track_listing_views = coalesce(p_track_listing_views, true),
         production_only = coalesce(p_production_only, true),
         updated_at = now()
   where id = 1;
  return public.meta_pixel_status();
end;
$$;

create or replace function public.meta_pixel_public_config()
returns jsonb
language plpgsql
security definer
stable
set search_path = public
as $$
declare
  v_row public.meta_pixel_settings;
begin
  select * into v_row from public.meta_pixel_settings where id = 1;
  if v_row.enabled is not true or length(trim(coalesce(v_row.pixel_id, ''))) = 0 then
    return jsonb_build_object('enabled', false);
  end if;
  return jsonb_build_object(
    'enabled', true,
    'pixel_id', v_row.pixel_id,
    'track_page_views', v_row.track_page_views,
    'track_leads', v_row.track_leads,
    'track_listing_views', v_row.track_listing_views,
    'production_only', v_row.production_only
  );
end;
$$;

revoke all on function public.meta_pixel_status() from public, anon;
revoke all on function public.meta_pixel_save_config(text, boolean, boolean, boolean, boolean, boolean) from public, anon;
grant execute on function public.meta_pixel_status() to authenticated, service_role;
grant execute on function public.meta_pixel_save_config(text, boolean, boolean, boolean, boolean, boolean) to authenticated, service_role;
revoke all on function public.meta_pixel_public_config() from public;
grant execute on function public.meta_pixel_public_config() to anon, authenticated, service_role;