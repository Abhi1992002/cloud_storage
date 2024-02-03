import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { PlusIcon } from "@radix-ui/react-icons";

type AvatarListProps = {
  users: { name: string; src: string }[];
};

export const AvatarList = ({ users }: AvatarListProps) => {
  return (
    <div className="flex">
      {users[0] && <SingleAvatar name={users[0].name} src={users[0].src} />}
      {users[1] && (
        <SingleAvatar
          className=" translate-x-[-16px]"
          name={users[1].name}
          src={users[1].src}
        />
      )}
      {users[2] && (
        <SingleAvatar
          className=" translate-x-[-32px]"
          name={users[2].name}
          src={users[2].src}
        />
      )}
      {users.length > 3 && (
        <div className="translate-x-[-48px] w-8 h-8 bg-[#9bccf4] rounded-full flex items-center justify-center ">
          <p className="text-xs font-bold">+{users.length - 3}</p>
        </div>
      )}
    </div>
  );
};

const SingleAvatar = ({
  name,
  src,
  className,
}: {
  name: string;
  src: string;
  className?: string;
}) => {
  return (
    <>
      <Avatar className={cn("w-8 h-8", className && className)}>
        <AvatarImage src={src} />
        <AvatarFallback className="border">{name}</AvatarFallback>
      </Avatar>
    </>
  );
};
