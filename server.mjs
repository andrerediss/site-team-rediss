import { serve } from "srvx/node";
import handler from "./dist/server/server.js";

serve({
  fetch: handler.fetch,
  port: Number(process.env.PORT) || 3000,
});
