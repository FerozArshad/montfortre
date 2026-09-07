// One-time helper: exchange a Google OAuth client ID/secret for a Gmail refresh
// token, which the notify-lead Edge Function uses to send lead notifications.
//
//   node scripts/gmail-oauth-token.mjs [--redirect <uri>] [client-id] [client-secret]
//
// Credentials may be omitted if .env defines GOOGLE_CLIENT_ID and
// GOOGLE_CLIENT_SECRET. Those are only read here, for this one-time exchange;
// the Edge Function reads its own copies from Supabase secrets.
//
// Two modes, picked from the redirect URI:
//
//   localhost (default)  Spins up a local server that catches the redirect
//                        automatically. Needs http://localhost:5175/callback
//                        registered on the OAuth client.
//
//   any other URI        Manual mode: you approve in the browser, then paste
//                        the URL you land on back into the terminal. Nothing
//                        needs to be running at that address — the
//                        authorisation code arrives as a query parameter, so a
//                        404 or your normal site rendering is fine. Use this to
//                        reuse a redirect URI already registered on the client,
//                        e.g.
//                          --redirect https://montfortre.com/auth/google
//
// Whichever you use, the consent screen must be PUBLISHED — refresh tokens for
// apps left in "Testing" stop working after 7 days.

import { createServer } from "node:http";
import { randomBytes } from "node:crypto";
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline/promises";

function readEnvFile() {
  try {
    return Object.fromEntries(
      readFileSync(".env", "utf8")
        .split(/\r?\n/)
        .filter((line) => line.trim() && !line.trim().startsWith("#") && line.includes("="))
        .map((line) => {
          const i = line.indexOf("=");
          return [line.slice(0, i).trim(), line.slice(i + 1).trim().replace(/^["']|["']$/g, "")];
        }),
    );
  } catch {
    return {};
  }
}

const argv = process.argv.slice(2);
let redirectOverride = null;
const positional = [];
for (let i = 0; i < argv.length; i += 1) {
  if (argv[i] === "--redirect" || argv[i] === "-r") {
    redirectOverride = argv[i + 1];
    i += 1;
  } else if (argv[i].startsWith("--redirect=")) {
    redirectOverride = argv[i].slice("--redirect=".length);
  } else {
    positional.push(argv[i]);
  }
}

const fileEnv = readEnvFile();
const clientId = positional[0] || fileEnv.GOOGLE_CLIENT_ID;
const clientSecret = positional[1] || fileEnv.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error(
    "Missing credentials.\n" +
      "  node scripts/gmail-oauth-token.mjs [--redirect <uri>] <client-id> <client-secret>\n" +
      "or set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in ghl-react/.env",
  );
  process.exit(1);
}

const PORT = 5175;
const REDIRECT_URI = redirectOverride || `http://localhost:${PORT}/callback`;
const SCOPE = "https://www.googleapis.com/auth/gmail.send";
const state = randomBytes(16).toString("hex");
const localMode = REDIRECT_URI.startsWith(`http://localhost:${PORT}`);

const authUrl =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    client_id: clientId,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: SCOPE,
    // Both are required for Google to return a refresh token at all.
    access_type: "offline",
    prompt: "consent",
    state,
  });

/** Trades an authorisation code for tokens and prints the refresh token. */
async function exchange(code) {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      // Must match the URI used for the authorisation request exactly, even
      // though nothing was listening there in manual mode.
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok || !body.refresh_token) {
    console.error("\nToken exchange failed:", JSON.stringify(body, null, 2));
    if (res.ok && !body.refresh_token) {
      console.error(
        "\nGoogle returned no refresh_token. That happens when this account already\n" +
          "granted consent. Remove the app at https://myaccount.google.com/permissions\n" +
          "and run this again.",
      );
    }
    return null;
  }

  console.log("\nRefresh token:\n");
  console.log(body.refresh_token);
  console.log("\nStore it with:\n");
  console.log(`  npx supabase secrets set GOOGLE_REFRESH_TOKEN="${body.refresh_token}"\n`);
  return body.refresh_token;
}

console.log("\nOpen this URL and sign in as the address that should SEND the emails:\n");
console.log(authUrl);

if (!localMode) {
  console.log(`\nAfter approving you will land on ${REDIRECT_URI} with ?code=... in the`);
  console.log("address bar. The page itself may 404 or just show the site — that is fine.");
  console.log("Copy the WHOLE address bar URL and paste it below.\n");
  console.log("The code expires in a few minutes and works only once.\n");

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = (await rl.question("Pasted URL (or bare code): ")).trim();
  rl.close();

  let code = answer;
  let returnedState = null;
  if (answer.includes("?") || answer.startsWith("http")) {
    try {
      const parsed = new URL(answer);
      code = parsed.searchParams.get("code") || "";
      returnedState = parsed.searchParams.get("state");
      const err = parsed.searchParams.get("error");
      if (err) {
        console.error(`\nAuthorisation failed: ${err}`);
        process.exit(2);
      }
    } catch {
      console.error("\nCould not parse that as a URL. Paste the full address or just the code.");
      process.exit(2);
    }
  }

  if (!code) {
    console.error("\nNo authorisation code found in that input.");
    process.exit(2);
  }

  if (returnedState && returnedState !== state) {
    console.error("\nState mismatch — that URL came from a different run. Start over.");
    process.exit(2);
  }

  process.exit((await exchange(code)) ? 0 : 3);
}

console.log("\nWaiting for the redirect on", REDIRECT_URI, "...\n");

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (url.pathname !== "/callback") {
    res.writeHead(404).end("Not found");
    return;
  }

  const error = url.searchParams.get("error");
  if (error) {
    res.writeHead(400, { "Content-Type": "text/plain" }).end(`Authorisation failed: ${error}`);
    console.error("Authorisation failed:", error);
    server.close();
    process.exit(2);
  }

  if (url.searchParams.get("state") !== state) {
    res.writeHead(400, { "Content-Type": "text/plain" }).end("State mismatch");
    console.error("State mismatch — start over.");
    server.close();
    process.exit(2);
  }

  const token = await exchange(url.searchParams.get("code"));

  res
    .writeHead(token ? 200 : 500, { "Content-Type": "text/html" })
    .end(
      token
        ? "<p>Done. Return to your terminal for the refresh token.</p>"
        : "<p>Token exchange failed — see terminal.</p>",
    );

  server.close();
  process.exit(token ? 0 : 3);
});

server.listen(PORT);
