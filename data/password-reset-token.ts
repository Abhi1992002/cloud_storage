import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const verficationToken = await db.passwordResetToken.findUnique({
      where: { token },
    });

    return verficationToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const verficationToken = await db.passwordResetToken.findFirst({
      where: { email },
    });

    return verficationToken;
  } catch {
    return null;
  }
};
