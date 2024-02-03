import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
declare module "@auth/core/jwt" {
  interface JWT {
    role?: "ADMIN" | "USER";
    isTwoFactorEnabled: boolean;
    isOAuth: boolean;
  }
}
