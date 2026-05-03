import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
    cloudflare: false,
    vite: {
        preview: {
            allowedHosts: "all",
            host: "0.0.0.0",
            port: 3000,
        },
    },
});