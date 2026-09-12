import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { agentfireMediaProxy } from "./vite.agentfire-media";
import { olrSavedSearchApi } from "./vite.olr-api";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root,
  plugins: [react(), olrSavedSearchApi(), agentfireMediaProxy()],
  resolve: {
    alias: {
      "@": path.resolve(root, "./src"),
    },
  },
});
