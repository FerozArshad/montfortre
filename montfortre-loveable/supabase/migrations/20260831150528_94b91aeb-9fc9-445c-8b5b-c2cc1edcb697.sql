-- Tighten execution privileges on lead notification helpers.

-- Admin UI helpers: authenticated callers only; admin check is inside the body.
revoke all on function public.lead_notify_status() from public, anon, authenticated;
grant execute on function public.lead_notify_status() to authenticated;

revoke all on function public.lead_notify_save_config(text, text, text, text, boolean) from public, anon, authenticated;
grant execute on function public.lead_notify_save_config(text, text, text, text, boolean) to authenticated;

revoke all on function public.lead_notify_disconnect() from public, anon, authenticated;
grant execute on function public.lead_notify_disconnect() to authenticated;

-- Internal / Edge-Function helpers: service_role only.
revoke all on function public.lead_notify_put_secret(text, text) from public, anon, authenticated;

revoke all on function public.lead_notify_store_token(text, text) from public, anon, authenticated;
grant execute on function public.lead_notify_store_token(text, text) to service_role;

revoke all on function public.lead_notify_config() from public, anon, authenticated;
grant execute on function public.lead_notify_config() to service_role;

revoke all on function public.lead_notify_set_error(text) from public, anon, authenticated;
grant execute on function public.lead_notify_set_error(text) to service_role;