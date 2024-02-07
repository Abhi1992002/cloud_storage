"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";
import { UploadingfileForm } from "./uploading-file-form";
import { useRecoilState } from "recoil";
import { folderListState } from "@/store/atom/folder-list";
import { getFolders } from "@/actions/dashboard/get-folder";
import { toast } from "react-hot-toast";

type UploadFileButtonProps = {};

export const UploadFileButton = ({}: UploadFileButtonProps) => {
  const [folderList, setFolderList] = useRecoilState(folderListState);
  const checkFolderList = () => {
    if (!folderList) {
      getFolders().then((value) => {
        if (value.error) {
          toast.error("Something went wrong. Please refresh");
        }
        if (value.folders) {
          setFolderList(value.folders);
        }
      });
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={checkFolderList}
            className="text-white hover:text-white bg-[#000000] space-x-2 shadow-lg shadow-black/40 w-full md:w-fit mb-4 md:mb-0"
          >
            <FaPlus />
            <p className="font-medium">Upload File</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[500px] scroller overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center mb-4">
              Upload Your File
            </DialogTitle>
            <DialogDescription className="w-full ">
              <UploadingfileForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
