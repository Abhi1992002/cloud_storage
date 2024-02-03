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

type UploadFileButtonProps = {};

export const UploadFileButton = ({}: UploadFileButtonProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="">
          <Button className="text-white hover:text-white bg-[#000000] space-x-2 shadow-lg shadow-black/40">
            <FaPlus />
            <p className="font-medium">Upload File</p>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Your File</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
