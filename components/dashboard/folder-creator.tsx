"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { FolderForm } from "./folder-form";

type FolderCreatorProps = {};

export const FolderCreator = ({}: FolderCreatorProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="text-white hover:text-white bg-[#000000] space-x-2 shadow-lg shadow-black/40 w-full md:w-fit md:mb-0">
            <FaPlus />
            <p className="font-medium">Create Folder</p>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Folder</DialogTitle>
            <DialogDescription>
              <FolderForm setOpen={setOpen} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
