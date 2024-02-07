"use server";

import { currentUser } from "@/lib/auth";

export const checkLimit = async () => {
  try {
    const user = await currentUser();
    if (!user || !user.id) {
      return { error: "Unauthorised" };
    }

    if (user.storageUsed >= 157286400) {
      return { error: "You have reached maximum limit" };
    }

    return { success: "have limit" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
