// Copies the GOOGLE_API_KEY runtime secret into Vault as google_places_api_key,
// then fires a reviews sync. The key value is never returned to the caller.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...cors, "Content-Type": "application/json" },
    });

  try {
    const key = Deno.env.get("GOOGLE_API_KEY") ?? "";
    if (!key.trim()) return json({ error: "GOOGLE_API_KEY is not set" }, 400);

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const stored = await admin.rpc("set_google_places_key", { _key: key });
    if (stored.error) return json({ error: stored.error.message }, 500);

    const requested = await admin.rpc("google_reviews_request");
    if (requested.error) return json({ vault: stored.data, error: requested.error.message }, 500);

    // pg_net is async — give the response time to land, then ingest.
    let ingest = "pending";
    for (let i = 0; i < 8; i += 1) {
      await new Promise((r) => setTimeout(r, 1500));
      const res = await admin.rpc("google_reviews_ingest");
      if (res.error) return json({ vault: stored.data, error: res.error.message }, 500);
      ingest = String(res.data ?? "");
      if (ingest !== "pending") break;
    }

    return json({ vault: stored.data, sync: ingest });
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : String(err) }, 500);
  }
});
