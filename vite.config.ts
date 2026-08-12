import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/AmarokeInsights/",
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
  },
});
