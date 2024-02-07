"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { formatFileSize } from "@edgestore/react/utils";

export const storage = async () => {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    const userWithFiles = await db.user.findUnique({
      where: {
        id: user.id,
      },
      include: {
        Files: true,
      },
    });

    if (!userWithFiles) {
      console.log("User not found");
      return;
    }

    let totalSize = 0;

    userWithFiles.Files.forEach((file) => {
      totalSize += file.size;
    });

    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        storageUsed: totalSize,
      },
    });

    const storageUsed = formatFileSize(totalSize);

    return { storageUsed: storageUsed };
  } catch (error) {
    console.log(error);
    return { error: "getting error" };
  }
};
