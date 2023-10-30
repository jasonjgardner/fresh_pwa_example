import { HandlerContext } from "$fresh/server.ts";
import { transform } from "https://deno.land/x/swc@0.2.1/mod.ts";

// This is the server-side code that compiles the service worker and serves it as JavaScript

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const src = await Deno.readTextFile("./src/sw.ts");
  const { code } = transform(src, {
    jsc: {
      target: "es2022",
      parser: {
        syntax: "typescript",
      },
    },
  });

  return new Response(code, {
    headers: {
      "Content-Type": "application/javascript",
      "service-worker": "script",
    },
  });
};
