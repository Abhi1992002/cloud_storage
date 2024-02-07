import { currentUser } from "@/lib/auth";
import { initEdgeStore } from "@edgestore/server";
import {
  CreateContextOptions,
  createEdgeStoreNextHandler,
} from "@edgestore/server/adapters/next/app";
import { z } from "zod";

/**
 * This is the main router for the Edge Store buckets.
 */
type Context = {
  userId: string;
};

async function createContext({ req }: CreateContextOptions): Promise<Context> {
  const user = await currentUser();
  return {
    userId: user?.id!,
  };
}

const es = initEdgeStore.context<Context>().create();

export const edgeStoreRouter = es.router({
  publicFiles: es
    .fileBucket()
    .input(
      z.object({
        folderId: z.string(),
      })
    )
    .path(({ input, ctx }) => [
      { folderId: input.folderId, userId: ctx.userId },
    ]),
});
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
  createContext,
});
export { handler as GET, handler as POST };
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;
