import React from "react";

type StorageLeftProps = {};
import { MdOutlineStorage } from "react-icons/md";
import { Progress } from "../ui/progress";

export const StorageLeft = ({}: StorageLeftProps) => {
  return (
    <div className="bg-[#F5F5F5] rounded-xl w-full p-4">
      <div className="flex items-center gap-2">
        <MdOutlineStorage />
        <p className=" font-medium">Storage</p>
      </div>
      <div className=" space-y-2">
        <p className="text-xs text-end font-medium"> 100 MB of 150 MB </p>
        <Progress value={33} />
      </div>
    </div>
  );
};
