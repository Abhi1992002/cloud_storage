"use client";
import { getFolders } from "@/actions/dashboard/get-folder";
import { Folders } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Folder } from "./folder";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecoilState } from "recoil";
import { folderListState } from "@/store/atom/folder-list";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type FolderListProps = {};

export const FolderList = ({}: FolderListProps) => {
  const [folders, setFolders] = useRecoilState(folderListState);
  const [loading, setLoading] = useState(false);
  const [seeAll, setSeeAll] = useState(false);
  useEffect(() => {
    setLoading(true);
    getFolders()
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }
        if (data.folders) {
          setFolders(data.folders);
        }
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold mb-4">Folders</h1>
        <Button
          onClick={() => setSeeAll((val) => !val)}
          variant={"link"}
          className="text-sm font-medium text-blue-700"
        >
          {seeAll ? "Collapse" : "See all"}
        </Button>
      </div>

      <div
        className={cn(
          "flex gap-4 max-w-full flex-nowrap overflow-x-hidden",
          seeAll && "flex-wrap"
        )}
      >
        {!folders ? (
          <FolderListSkeleton />
        ) : (
          folders.map((folder, i) => (
            <Folder
              key={i}
              folderId={folder.id}
              color={folder.color}
              name={folder.name}
              icon={folder.icon}
            />
          ))
        )}
      </div>
    </div>
  );
};

const FolderListSkeleton = () => {
  return (
    <div className="flex space-x-3">
      <Skeleton className="h-[200px] w-[250px] rounded-xl" />
      <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    </div>
  );
};
