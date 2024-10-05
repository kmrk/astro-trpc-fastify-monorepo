import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import {
  createTRPCProxyClient,
  createWSClient,
  httpBatchLink,
  splitLink,
  wsLink,
} from "@trpc/client";
import superjson from "superjson";

import type { AppRouter } from "@acme/api";


function getLinks() {
  if (typeof window === "undefined") {
    return [
      httpBatchLink({
        url: "http://localhost:3000/trpc",
        fetch(url, options) {
          return fetch(url, {
            ...options,
            credentials: "include",
          });
        },
      }),
    ];
  }

  const wsClient = createWSClient({
    url: "/trpc",
  });

  return [
    splitLink({
      condition(op) {
        return op.type === "subscription";
      },
      true: wsLink({
        client: wsClient,
      }),
      false: httpBatchLink({
        url: "http://localhost:3000/trpc",
        fetch(url, options) {
          return fetch(url, {
            ...options,
            credentials: "include",
          });
        },
      }),
    }),
  ];
}

export const client = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: getLinks(),
});
