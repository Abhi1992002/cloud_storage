import { CreateContextOptions } from "@edgestore/server/adapters/next/app";
import { currentUser } from "./auth";
import { initEdgeStore } from "@edgestore/server";
import { z } from "zod";

type Context = {
  userId: string;
};

export async function createContext({
  req,
}: CreateContextOptions): Promise<Context> {
  const user = await currentUser();
  return {
    userId: user?.id!,
  };
}
export const es = initEdgeStore.context<Context>().create();

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
