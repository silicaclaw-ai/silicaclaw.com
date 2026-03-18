import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://silicaclaw.com",
  server: {
    port: 4173,
    host: true,
  },
});
