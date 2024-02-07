"use client";
import React, { useEffect, useState } from "react";

type StorageLeftProps = {};
import { MdOutlineStorage } from "react-icons/md";
import { Progress } from "../ui/progress";
import { storage } from "@/actions/dashboard/storage-limit";
import { toast } from "react-hot-toast";
import { RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/use-current-user";

export const StorageLeft = ({}: StorageLeftProps) => {
  const [storageUsed, setStorageUsed] = useState<string>("0");
  const [storageProgress, setStorageProgress] = useState<number>(0);
  const [spin, setSpin] = useState(false);
  const user = useCurrentUser();
  const getStorage = () => {
    setSpin(true);
    storage()
      .then((value) => {
        if (value?.error) {
          toast.error(value.error);
          setSpin(false);
        }
        if (value?.storageUsed) {
          setStorageUsed(value.storageUsed);

          const progress = (user?.storageUsed! / 150) * 100;
          setStorageProgress(progress);
          setSpin(false);
        }
      })
      .catch((error) => {
        toast.error(error);
        setSpin(false);
      });
  };
  useEffect(() => {
    getStorage();
  }, []);

  return (
    <div className="bg-[#F5F5F5] rounded-xl w-full p-4">
      <div className="flex items-center gap-2">
        <MdOutlineStorage />
        <p className=" font-medium">Storage</p>
        <Button
          onClick={() => getStorage()}
          variant={"link"}
          className=" border-none shadow-none font-medium"
        >
          <RefreshCcw className={cn("w-4 h-4", spin && "animate-spin")} />
        </Button>
      </div>
      <div className=" space-y-2">
        <p className="text-xs text-end font-medium">
          {" "}
          {storageUsed} of 150 MB{" "}
        </p>
        <Progress value={storageProgress} />
      </div>
      <p className="text-xs pt-2 text-red-500">
        * Delete files from Trash folder to get extra storage
      </p>
    </div>
  );
};
