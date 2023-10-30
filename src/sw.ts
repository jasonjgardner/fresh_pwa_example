/// <reference lib="WebWorker" />

// This is the service worker that will be compiled in routes/service_worker.ts
// It is served from /service_worker and is registered by the plugin entrypoint (src/plugin.ts)

self.addEventListener("install", (e: Event) => {
  console.log("[Service Worker] Install", e);
});

self.addEventListener("fetch", (e) => {
  if (e.request.url.includes("/api")) {
    return e.respondWith(
      new Response(
        JSON.stringify(
          {
            service: "Service worker",
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
      ),
    );
  }
});
