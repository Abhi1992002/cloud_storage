"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { backendClient } from "@/lib/edgestore-server";

export const deleteFile = async (fileId: string) => {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    const { url } = await db.files.delete({
      where: {
        id: fileId,
        userId: user.id,
      },
    });

    await backendClient.publicFiles.deleteFile({
      url: url,
    });

    return { success: "File Deleted Successfully" };
  } catch (error) {
    console.log(error);
    return { error: "getting error" };
  }
};
