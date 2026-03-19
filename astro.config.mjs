import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://silicaclaw.com",
  trailingSlash: "always",
  server: {
    port: 4173,
    host: true,
  },
});
