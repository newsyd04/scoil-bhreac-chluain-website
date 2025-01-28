import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: "dist/index.html", dest: "404.html" }], // Redirect 404s to index.html for GitHub Pages
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
  base: isProduction ? "/scoil-bhreac-chluain-website/" : "/", // Use "/" for local dev
});
