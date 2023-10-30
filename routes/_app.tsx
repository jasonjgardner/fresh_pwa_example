import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="en-US">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-pwa</title>
        <meta name="theme-color" content="#86efac" />
        <link href="/app.webmanifest" rel="manifest" />
      </head>
      <body f-client-nav>
        <Component />
      </body>
    </html>
  );
}
