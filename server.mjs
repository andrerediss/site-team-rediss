import { serve } from "srvx/node";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import handler from "./dist/server/server.js";

const CLIENT_DIR = new URL("./dist/client", import.meta.url).pathname;

const MIME = {
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

async function fetchWithStatic(request) {
  const url = new URL(request.url);
  const filePath = join(CLIENT_DIR, url.pathname);

  try {
    const s = await stat(filePath);
    if (s.isFile()) {
      const body = await readFile(filePath);
      const mime = MIME[extname(filePath)] ?? "application/octet-stream";
      const headers = { "content-type": mime };
      // Long-lived cache for hashed assets, no cache for everything else
      if (url.pathname.startsWith("/assets/")) {
        headers["cache-control"] = "public, max-age=31536000, immutable";
      }
      return new Response(body, { headers });
    }
  } catch {
    // file not found — fall through to SSR
  }

  return handler.fetch(request);
}

serve({
  fetch: fetchWithStatic,
  port: Number(process.env.PORT) || 3000,
});
