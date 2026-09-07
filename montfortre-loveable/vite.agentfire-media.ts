import type { Plugin } from "vite";

/** AgentFire CDN often 403s localhost; fetch with the live-site Referer. */
export function agentfireMediaProxy(): Plugin {
  return {
    name: "agentfire-media-proxy",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/__af/")) return next();
        try {
          const target = `https://assets.agentfire3.com${req.url.slice("/__af".length)}`;
          const upstream = await fetch(target, {
            headers: {
              "user-agent": "Mozilla/5.0 MontfortMediaProxy",
              referer: "https://montfortre.com/",
              accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            },
          });
          res.statusCode = upstream.status;
          const ct = upstream.headers.get("content-type");
          if (ct) res.setHeader("content-type", ct);
          res.setHeader("cache-control", "public, max-age=86400");
          res.end(Buffer.from(await upstream.arrayBuffer()));
        } catch (err) {
          res.statusCode = 502;
          res.end(err instanceof Error ? err.message : "proxy failed");
        }
      });
    },
  };
}
