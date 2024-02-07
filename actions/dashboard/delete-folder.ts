"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { backendClient } from "@/lib/edgestore-server";

export const deleteFolder = async (id: string) => {
  try {
    if (!id) {
      return { error: "No such folder exist" };
    }

    const user = await currentUser();

    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    const files = await db.files.findMany({
      where: {
        folderId: id,
      },
    });

    const deletePromises = files.map(async (file) => {
      await backendClient.publicFiles.deleteFile({
        url: file.url,
      });
    });
    await Promise.all(deletePromises);

    await db.folders.delete({
      where: {
        userId: user.id,
        id: id,
      },
    });

    return { success: "Folder deleted permanently" };
  } catch (error) {
    console.log(error);
    return { error: "Failed to delete" };
  }
};
