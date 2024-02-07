"use client";
import React, { useEffect, useState } from "react";
import { SubscribeButton } from "../payment/subscribe-button";
import Image from "next/image";
import { Button } from "../ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type UpgradeBoxProps = {};

export const UpgradeBox = ({}: UpgradeBoxProps) => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={cn(
        "w-[100%]  flex border p-6 rounded-xl shadow-xl shadow-black/10 justify-between relative overflow-hidden border-black",
        !open && "hidden"
      )}
    >
      <div className="flex-1 space-y-6">
        <h1 className="text-2xl font-semibold">Cloud Storage Solution</h1>
        <p>
          Object storage for companies of all sizes. Secure, durable, and with
          low latency. Store any amount of data
        </p>
        <SubscribeButton />
      </div>

      <div className="flex-1 sm:flex justify-center hidden">
        <Image
          width={200}
          height={200}
          src={"/rocket.png"}
          alt="rocket-image"
        />
      </div>

      <Button
        className="absolute sm:top-4 sm:right-4 top-0 right-0 "
        variant={"link"}
        onClick={() => setOpen(false)}
      >
        <Cross1Icon className="w-4 h-4" />
      </Button>

      <Image
        fill
        src={"/bg.jpg"}
        alt="background-image "
        className="absolute inset-0 z-[-100]"
      />
    </div>
  );
};
