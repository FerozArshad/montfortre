revoke all on function public.lead_notify_config() from public, anon, authenticated;
grant execute on function public.lead_notify_config() to service_role;

revoke all on function public.lead_notify_status() from public, anon;
grant execute on function public.lead_notify_status() to authenticated;

revoke all on function public.lead_notify_put_secret(text, text) from public, anon, authenticated;
grant execute on function public.lead_notify_put_secret(text, text) to service_role;

revoke all on function public.lead_notify_store_token(text, text) from public, anon, authenticated;
grant execute on function public.lead_notify_store_token(text, text) to service_role;

revoke all on function public.lead_notify_set_error(text) from public, anon, authenticated;
grant execute on function public.lead_notify_set_error(text) to service_role;

revoke all on function public.lead_notify_webhook_secret() from public, anon, authenticated;
grant execute on function public.lead_notify_webhook_secret() to service_role;