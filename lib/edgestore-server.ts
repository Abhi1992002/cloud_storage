import { edgeStoreRouter } from "@/app/api/edgestore/[...edgestore]/route";
import { initEdgeStoreClient } from "@edgestore/server/core";

export const backendClient = initEdgeStoreClient({
  router: edgeStoreRouter,
});
