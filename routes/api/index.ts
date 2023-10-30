import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return new Response(
    JSON.stringify(
      {
        service: "Fresh API",
        timestamp: Date.now(),
      },
      null,
      2,
    ),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
