"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";

/**
 * Verifies/Update a user's email address using a verification token.
 * @param token The verification token.
 * @returns An object indicating the success or failure of the verification.
 */
export const newVerification = async (token: string) => {
  const existingtoken = await getVerificationTokenByToken(token);

  if (!existingtoken) {
    return { error: "Token does not exist" };
  }

  const hasExpired = new Date(existingtoken.expire) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingtoken.email);

  if (!existingUser) {
    return { error: "User doesn't exist" };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingUser.email,
    },
  });

  await db.verficationToken.delete({
    where: { id: existingtoken.id },
  });

  return { success: "Email Verified" };
};
