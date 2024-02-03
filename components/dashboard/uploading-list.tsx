import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Uploading } from "./uploading";

type UploadingListProps = {};

export const UploadingList = ({}: UploadingListProps) => {
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
              <div className=" space-y-4 py-4 ">
                <Uploading />
                <Uploading />
                <Uploading />
                <Uploading />
                <Uploading />
                <Uploading />
                <Uploading />
                <Uploading />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
