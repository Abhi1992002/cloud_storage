"use client";
import { getFolders } from "@/actions/dashboard/get-folder";
import { Folders } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Folder } from "./folder";
import { Skeleton } from "@/components/ui/skeleton";
import { MoonLoader } from "react-spinners";

type FolderListProps = {};

export const FolderList = ({}: FolderListProps) => {
  const [folders, setFolders] = useState<Folders[]>(null!);
  const [loading, setLoading] = useState(false);
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
  });
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Folders</h1>
      <div className="flex gap-2 flex-wrap">
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
