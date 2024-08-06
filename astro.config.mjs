import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import netlify from "@astrojs/netlify";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [solidJs()],
  experimental: {
    actions: true
  }
});