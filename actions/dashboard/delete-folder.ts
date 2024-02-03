"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const deleteFolder = async (id: string) => {
  try {
    if (!id) {
      return { error: "No such folder exist" };
    }

    const user = await currentUser();

    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    await db.folders.delete({
      where: {
        userId: user.id,
        id: id,
      },
    });

    return { success: "Folder deleted successfully" };
  } catch (error) {
    return { error: "something went wrong" };
  }
};
