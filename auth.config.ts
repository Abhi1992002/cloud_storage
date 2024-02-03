import Credential from "next-auth/providers/credentials" 
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user"; 

import bcrypt from "bcryptjs"
export default {

  providers: [
    Github({
      clientId : process.env.GITHUB_CLIENT_ID,
      clientSecret : process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credential({
      //  whenever you call signin . it works
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials)

      if(validateFields.success){
        const {email , password} = validateFields.data
        const user = await getUserByEmail(email)

        if(!user || !user.password) return null;

        const passwordMatched = await bcrypt.compare(
          password,
          user.password
        )

        if(passwordMatched) return user;
      }

      return null
      }

    })
  ],

} satisfies NextAuthConfig

// if user want to access more thing in sessions , we uses session callback but for that we need to give more thing in jwt token using jwt callback 

// we are not going to use callback in auth.config.ts because in callbacks , we are using prisma which is not compatible to edge , but Credential will not work on edge that is why it works fine