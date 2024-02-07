import React, { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import { CheckCircleIcon, LucideFileWarning, Trash2Icon } from "lucide-react";
import { FileState } from "./multiple_file_dropzone";

type UploadingProps = {
  name: string;
  progress: number | "PENDING" | "COMPLETE" | "ERROR";
  value?: FileState[];
  onChange?: (files: FileState[]) => void | Promise<void>;
  i: number;
};

export const Uploading = ({
  name,
  progress,
  value,
  onChange,
  i,
}: UploadingProps) => {
  return (
    <div className="w-full shadow-lg shadow-black/20 hover:shadow-none bg-white border  text-black rounded-xl p-4 space-y-2 mt-4">
      {typeof progress === "number" && (
        <p className=" font-semibold">Uploading...</p>
      )}
      <div className="flex items-center justify-between ">
        <p className="">{name.slice(0, 30)}...</p>

        {progress === "PENDING" ? (
          <button
            className="rounded-md p-1 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => {
              if (value) {
                void onChange?.(value.filter((_, index) => index !== i));
              }
            }}
          >
            <Trash2Icon className="shrink-0" />
          </button>
        ) : progress === "ERROR" ? (
          <LucideFileWarning className="shrink-0 text-red-600 dark:text-red-400" />
        ) : progress !== "COMPLETE" ? (
          <div>{Math.round(progress)}%</div>
        ) : (
          <CheckCircleIcon className="shrink-0 text-green-600 dark:text-gray-400" />
        )}
      </div>
      {typeof progress === "number" ? (
        <Progress value={progress} />
      ) : (
        <p className=" font-semibold">{progress}</p>
      )}
    </div>
  );
};
