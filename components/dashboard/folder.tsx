"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AvatarList } from "./avatar-list";
import { ChevronRightIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { deleteFolder } from "@/actions/dashboard/delete-folder";
import { toast } from "react-hot-toast";
import { MoonLoader } from "react-spinners";

type FolderProps = {
  color: string;
  name: string;
  icon: string;
  folderId: string;
};

const users = [
  {
    name: "CN",
    src: "https://github.com/shadcn.png",
  },
  {
    name: "CN",
    src: "https://github.com/shadcn.png",
  },
  {
    name: "CN",
    src: "https://github.com/shadcn.png",
  },
  {
    name: "CN",
    src: "https://github.com/shadcn.png",
  },
];

export const Folder = ({ color, name, icon, folderId }: FolderProps) => {
  const [loading, setLoading] = useState(false);

  const onDeleteFolder = () => {
    setLoading(true);
    deleteFolder(folderId)
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }
        if (data.success) {
          toast.success(data.success);
        }
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className={`w-[250px] h-[200px] rounded-xl ${color} p-[4px] flex flex-col `}
    >
      {/* heading */}
      <div className="w-full  h-[50px] bg-white rounded-xl flex ">
        <div
          className={`h-full ${color}  rounded-xl rounded-tr-none flex items-center pl-2 w-[120px]`}
        >
          <p className=" truncate font-semibold">{name}</p>
        </div>
        <div className="flex-1 flex items-center justify-between p-2 bg-white rounded-xl rounded-b-none text-center">
          <p className="text-xs font-medium text-black/70">
            <span className="text-sm font-semibold block">1234</span>
            <span>files</span>
          </p>
          <Button
            disabled={loading}
            onClick={onDeleteFolder}
            className="bg-red-200"
          >
            {loading ? (
              <MoonLoader size={13} color="#000000" />
            ) : (
              <TrashIcon className="text-red-500" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex-1 rounded-xl bg-white w-full rounded-tr-none p-4 flex ">
        <div>
          <p className="text-xs font-semibold mb-2">Shared With</p>
          <AvatarList users={users} />
        </div>
        <div className="flex items-center justify-end flex-1">
          <p className="text-5xl ">{icon}</p>
        </div>
      </div>
      <Button
        asChild
        className="h-[50px] w-full flex items-center bg-white text-black rounded-xl justify-center mt-1 hover:bg-white/40"
      >
        <Link href={`/main/${folderId}`}>
          <ChevronRightIcon className="w-4 h-4 font-bold" />
        </Link>
      </Button>
    </div>
  );
};
