"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const getFiles = async (folderId: string) => {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    const id = String(folderId);

    const files = await db.files.findMany({
      where: {
        folderId: id,
        isTrashed: false,
        isStarred: false,
        userId: user.id,
      },
    });

    return { files: files };
  } catch (error) {
    console.log(error);
    return { error: "getting error" };
  }
};
