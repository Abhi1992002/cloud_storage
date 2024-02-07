import { currentUser } from "@/lib/auth";
import { edgeStoreRouter } from "@/lib/edge-router";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
import { createContext } from "@/lib/edge-router";
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
  createContext,
});
export { handler as GET, handler as POST };
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;
