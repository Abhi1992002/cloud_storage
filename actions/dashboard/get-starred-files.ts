"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const starredFiles = async () => {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    const files = await db.files.findMany({
      where: {
        isStarred: true,
        userId: user.id,
      },
    });

    return { files: files };
  } catch (error) {
    console.log(error);
    return { error: "getting error" };
  }
};
