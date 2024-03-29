"use server";

import { folderCreatorSchema } from "@/components/dashboard/folder-form";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { ZodError, z } from "zod";

export const createFolder = async (
  values: z.infer<typeof folderCreatorSchema>,
  id: string,
  createdAt: Date
) => {
  try {
    const user = await currentUser();

    if (!user || !user?.id) {
      return { error: "Unauthorised" };
    }

    await db.folders.create({
      data: {
        id: id,
        userId: user.id,
        name: values.name,
        color: values.color,
        icon: values.icon,
        createdAt: createdAt,
      },
    });

    return { success: "Now you can use it..." };
  } catch (error) {
    if (error instanceof ZodError) {
      return { error: "Zod Error" };
    }
    console.log(error);
    return { error: "Something went wrong" };
  }
};
