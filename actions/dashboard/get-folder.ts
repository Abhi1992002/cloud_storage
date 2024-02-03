"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { Folders } from "@prisma/client";

export const getFolders = async () => {
  try {
    const user = await currentUser();

    if (!user || !user?.id) {
      return { error: "Unauthorised" };
    }

    const folders: Folders[] = await db.folders.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return { folders: folders };
  } catch (error) {
    console.log(error);
    return { error: "Something Went wrong" };
  }
};
