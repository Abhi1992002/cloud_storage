import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { UploadingaList } from "./uploading-list";

type UploadingListProps = {};

export const UploadingListDropdown = ({}: UploadingListProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-black text-white rounded-xl p-4 w-full ">
          <>
            <p className=" text-lg font-semibold">Uploading List</p>
          </>
        </DialogTrigger>
        <DialogContent className="max-h-[500px] scroller overflow-y-auto">
          <DialogHeader>
            <DialogTitle> Uploading List</DialogTitle>
            <DialogDescription>
              <UploadingaList />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
