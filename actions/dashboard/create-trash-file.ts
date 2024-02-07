"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const createTrashFile = async (fileId: string) => {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    const id = String(fileId);

    await db.files.update({
      where: {
        id: id,
        userId: user.id,
      },
      data: {
        isTrashed: true,
      },
    });

    return { success: "File deleted" };
  } catch (error) {
    console.log(error);
    return { error: "getting error" };
  }
};
