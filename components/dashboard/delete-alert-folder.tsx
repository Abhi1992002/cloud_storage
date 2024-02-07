"use client";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TrashIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { folderListState } from "@/store/atom/folder-list";
import { deleteFolder } from "@/actions/dashboard/delete-folder";

type DeleteAlertFolderProps = {
  folderId: string;
};

export const DeleteAlertFolder = ({ folderId }: DeleteAlertFolderProps) => {
  const setFolderList = useSetRecoilState(folderListState);

  const onDeleteFolder = () => {
    const id = toast.loading("Adding to Trash Folder...");
    setFolderList((folders) =>
      folders.filter((folder) => folder.id !== folderId)
    );

    deleteFolder(folderId)
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            id: id,
          });
        }
        if (data.success) {
          toast.success(data.success, {
            id: id,
          });
        }
      })
      .catch((error) => {
        toast.error(error, {
          id: id,
        });
      });
  };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-red-300 p-2 rounded-xl ">
          <TrashIcon className="text-red-500 w-4 h-4" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will permanently delete your folder and all the files
              that it contains
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDeleteFolder}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
