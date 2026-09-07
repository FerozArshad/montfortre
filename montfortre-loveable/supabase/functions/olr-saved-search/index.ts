const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const OLR_ORIGIN = "https://stanley.olridx.com";
/** OLR is slow; keep edge responses warm so pages paint from CDN/cache. */
const CACHE_MAX_AGE = 900;

type CookieCache = { at: number; value: string };
let cookieCache: CookieCache | null = null;
const COOKIE_TTL_MS = 5 * 60 * 1000;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...CORS,
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${CACHE_MAX_AGE}, s-maxage=${CACHE_MAX_AGE}`,
    },
  });
}

async function olrCookie(): Promise<string> {
  if (cookieCache && Date.now() - cookieCache.at < COOKIE_TTL_MS) return cookieCache.value;

  const warm = await fetch(`${OLR_ORIGIN}/Search/Sales?idr=False`, {
    headers: { "user-agent": "Mozilla/5.0 MontfortOlrProxy" },
  });
  const cookieParts: string[] = [];
  const raw = warm.headers.get("set-cookie");
  if (raw) cookieParts.push(raw.split(",")[0]?.split(";")[0] || "");
  const multi = (warm.headers as Headers & { getSetCookie?: () => string[] }).getSetCookie?.() || [];
  for (const c of multi) {
    const pair = c.split(";")[0];
    if (pair) cookieParts.push(pair);
  }
  const value = [...new Set(cookieParts.filter(Boolean))].join("; ");
  cookieCache = { at: Date.now(), value };
  return value;
}

async function olrPost(path: string, body: unknown): Promise<unknown> {
  const cookie = await olrCookie();
  const res = await fetch(`${OLR_ORIGIN}${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
      accept: "application/json",
      "user-agent": "Mozilla/5.0 MontfortOlrProxy",
      ...(cookie ? { cookie } : {}),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`OLR ${res.status}`);
  return res.json();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (req.method !== "GET") return json({ error: "Method not allowed" }, 405);

  const url = new URL(req.url);
  const cacheKey = new Request(url.toString(), { method: "GET" });

  try {
    const cache = await caches.open("olr-saved-search-v1");
    const hit = await cache.match(cacheKey);
    if (hit) return hit;
  } catch {
    /* Cache API unavailable in some runtimes */
  }

  const id = (url.searchParams.get("id") || "").replace(/^#/, "").trim();
  const modeParam = url.searchParams.get("mode");
  const pageIndex = Math.max(0, Number(url.searchParams.get("page") || 0) || 0);
  const pageSize = Math.min(48, Math.max(1, Number(url.searchParams.get("pageSize") || 24) || 24));

  try {
    let data: unknown;
    if (/^\d+$/.test(id)) {
      data = await olrPost("/Search/SearchListingsByQuery", {
        serializedOptionsQuery: id,
        PagingOptions: {
          OrderBy: "1",
          OrderByDescending: true,
          PageSize: pageSize,
          PageIndex: pageIndex,
        },
      });
    } else if (modeParam === "sales" || modeParam === "rentals") {
      const propertyTypes = modeParam === "rentals" ? ["Rental"] : ["Sale", "BuildingForSale"];
      data = await olrPost("/Search/SearchListings", {
        PropertyTypes: propertyTypes,
        PagingOptions: {
          OrderBy: "1",
          OrderByDescending: true,
          PageSize: pageSize,
          PageIndex: pageIndex,
        },
      });
    } else {
      return json({ error: "Provide id= or mode=sales|rentals" }, 400);
    }

    const response = json(data);
    try {
      const cache = await caches.open("olr-saved-search-v1");
      await cache.put(cacheKey, response.clone());
    } catch {
      /* ignore */
    }
    return response;
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : String(err) }, 502);
  }
});
