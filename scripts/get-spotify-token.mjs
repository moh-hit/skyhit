/**
 * Run this once to get your Spotify refresh token.
 *
 * Usage:
 *   node scripts/get-spotify-token.mjs
 *
 * Reads SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET from .env automatically.
 * Paste the printed SPOTIFY_REFRESH_TOKEN back into .env when done.
 */

import readline from "readline";
import https from "https";
import fs from "fs";
import { URLSearchParams } from "url";

// Read .env file
function readEnv() {
  try {
    return Object.fromEntries(
      fs.readFileSync(".env", "utf8")
        .split("\n")
        .filter((l) => l && !l.startsWith("#") && l.includes("="))
        .map((l) => {
          const [k, ...v] = l.split("=");
          return [k.trim(), v.join("=").trim()];
        })
    );
  } catch {
    return {};
  }
}

const env = readEnv();
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || env.SPOTIFY_CLIENT_ID || "";
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || env.SPOTIFY_CLIENT_SECRET || "";

const REDIRECT_URI = "http://127.0.0.1:3000";
const SCOPES = "user-read-currently-playing user-read-playback-state";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET is missing from .env");
  process.exit(1);
}

const authUrl =
  `https://accounts.spotify.com/authorize` +
  `?client_id=${CLIENT_ID}` +
  `&response_type=code` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&scope=${encodeURIComponent(SCOPES)}`;

console.log("\nStep 1 — Open this URL in your browser:\n");
console.log(authUrl);
console.log("\nStep 2 — Authorize the app. You'll be redirected to localhost:3000 (it will 404 — that's fine).");
console.log("Step 3 — Copy the full URL from the browser address bar and paste it below.\n");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Paste the redirect URL: ", (redirectUrl) => {
  rl.close();

  let code;
  try {
    code = new URL(redirectUrl).searchParams.get("code");
  } catch {
    console.error("Invalid URL.");
    process.exit(1);
  }

  if (!code) {
    console.error("No 'code' parameter found in the URL.");
    process.exit(1);
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
  }).toString();

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const req = https.request(
    {
      hostname: "accounts.spotify.com",
      path: "/api/token",
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(body),
      },
    },
    (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        const json = JSON.parse(data);
        if (json.error) {
          console.error("\nError:", json.error, json.error_description);
          process.exit(1);
        }
        console.log("\n✓ Add this to your .env:\n");
        console.log(`SPOTIFY_REFRESH_TOKEN=${json.refresh_token}`);
      });
    }
  );

  req.on("error", (e) => console.error(e));
  req.write(body);
  req.end();
});
