import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  }),
  integrations: [solidJs()],
  experimental: {
    actions: true
  }
});