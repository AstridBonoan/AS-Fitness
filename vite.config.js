import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages project site: https://astridbonoan.github.io/AS-Fitness/
const repoBase = "/AS-Fitness/";

export default defineConfig({
  base: repoBase,
  plugins: [
    react(),
    {
      name: "github-pages-spa-fallback",
      closeBundle() {
        const outDir = resolve("docs");
        copyFileSync(resolve(outDir, "index.html"), resolve(outDir, "404.html"));
      },
    },
  ],
  build: {
    outDir: "docs",
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
