import React, { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

type UploadingProps = {};

export const Uploading = ({}: UploadingProps) => {
  return (
    <div className="w-full shadow-lg shadow-black/20 hover:shadow-none bg-white border  text-black rounded-xl p-4 space-y-2">
      <p className=" font-semibold">Uploading...</p>
      <div className="flex items-center justify-between">
        <p>Image.png</p>
        <p className=" font-medium">33%</p>
      </div>
      <Progress value={33} />
    </div>
  );
};
