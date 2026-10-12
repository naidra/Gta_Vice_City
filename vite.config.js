import { defineConfig } from "vite";

export default defineConfig({
  base: "/Gta_Vice_City/",
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
});
