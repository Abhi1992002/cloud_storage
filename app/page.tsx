"use client";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import Link from "next/link";
import { SubscribeButton } from "@/components/payment/subscribe-button";
import { GridBackground } from "@/components/grid-background";
import { MoonLoader } from "react-spinners";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  const [startedButtonLoading, setStartedButtonLoading] = useState(false);
  const [signinButtonLoading, setSigninButtonLoading] = useState(false);
  const router = useRouter();
  return (
    <div className="w-screen">
      <GridBackground>
        <div className="border border-black/60 rounded-full absolute top-10 left-[50%] -translate-x-[50%] text-xs font-semibold  p-2 px-4 ">
          🎉 Thank you for Coming!. Want to know more about project.{" "}
          <Link href={"/"} className="underline">
            Visit here
          </Link>
        </div>
        <h1 className="text-6xl font-bold mt-[200px]">
          Cloud Storage for Everyone
        </h1>

        <p className="w-[80%] text-lg ">
          Discover simplicity, security, and speed with our cloud storage, the
          next-generation cloud storage platform designed to make your life
          easier. Built using cutting-edge technology including Next.js,
          Tailwind CSS, next-auth, and edge store, our application offers a
          seamless and intuitive experience for managing your files on the
          cloud.
        </p>

        <hr className=" border-black/40 border w-[80%] my-4" />
        <div className="space-x-8">
          <Button
            onClick={() => {
              setStartedButtonLoading(true);
              router.push("/main");
            }}
          >
            {startedButtonLoading ? (
              <MoonLoader size={14} color="#ffffff" />
            ) : (
              <p>Get Started</p>
            )}
          </Button>
          <LoginButton>
            {signinButtonLoading ? (
              <MoonLoader size={14} color="#000000" />
            ) : (
              <span
                className="hover:underline"
                onClick={() => {
                  setSigninButtonLoading(true);
                }}
              >
                Sign in
              </span>
            )}
          </LoginButton>
        </div>

        <div className="w-screen mt-[50px] flex justify-center mb-8 items-center">
          <div className="w-[80%] aspect-[16/9] border overflow-hidden rounded-xl relative shadow-xl shadow-black/50">
            <Image fill alt="main image" src={"/home.png"} />
          </div>
        </div>
      </GridBackground>
    </div>
  );
}
