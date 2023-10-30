import { defineConfig } from "$fresh/server.ts";
import tailwindPlugin from "https://deno.land/x/fresh_tailwind@v0.5.3/mod.ts";

export default defineConfig({
  plugins: [tailwindPlugin(), {
    name: "fresh_pwa",
    entrypoints: {
      "sw": "./src/plugin.ts",
    },
    render: (ctx) => {
      ctx.render();
      return {
        scripts: [
          {
            entrypoint: "sw",
            state: {},
          },
        ],
      };
    },
  }],
});
