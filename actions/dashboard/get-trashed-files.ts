"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const trashedFiles = async () => {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    const files = await db.files.findMany({
      where: {
        isTrashed: true,
        userId: user.id,
      },
    });

    return { files: files };
  } catch (error) {
    console.log(error);
    return { error: "getting error" };
  }
};
