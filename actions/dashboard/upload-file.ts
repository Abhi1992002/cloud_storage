"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const uploadFile = async ({
  type,
  name,
  size,
  folderId,
  downloadUrl,
  url,
}: {
  type: string;
  name: string;
  size: number;
  folderId: string;
  downloadUrl: string;
  url: string;
}) => {
  try {
    const user = await currentUser();
    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    if (user.storageUsed >= 157286400) {
      return { error: "You have reached maximum limit" };
    }

    await db.files.create({
      data: {
        userId: user.id,
        folderId: folderId,
        uploadedAt: new Date(),
        type: type,
        size: size,
        name: name,
        downloadUrl: downloadUrl,
        url: url,
      },
    });

    return { success: "File Added successfully...." };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
