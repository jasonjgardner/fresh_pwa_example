// This is the code that Fresh uses as the entrypoint for the plugin.
// It is what is injected into the client.

export default function (state = {}) {
  // Register service worker
  if ("serviceWorker" in navigator) {
    try {
      // Register the "service_worker" route as the HTTP source of the service worker
      navigator.serviceWorker.register("service_worker", {
        scope: "./",
        ...state,
      });
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
}
