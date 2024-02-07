import { initEdgeStoreClient } from "@edgestore/server/core";
import { edgeStoreRouter } from "./edge-router";

export const backendClient = initEdgeStoreClient({
  router: edgeStoreRouter,
});
