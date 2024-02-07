"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { getFiles } from "@/actions/dashboard/get-files";
import { columns } from "./colums";
import { Files } from "@prisma/client";
import { MoonLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { recentFiles } from "@/actions/dashboard/get-recent-files";

type RecentFilesTableProps = {};

export const RecentFilesTable = ({}: RecentFilesTableProps) => {
  const [data, setData] = useState<Files[]>(null!);

  useEffect(() => {
    recentFiles().then((value) => {
      if (value.files) {
        setData(value.files);
      }
      if (value.error) {
        toast.error(value.error);
      }
    });
  });

  return (
    <div className="w-[95%] h-full  rounded-xl">
      {!data ? (
        <div className="w-full h-full flex items-center justify-center">
          <MoonLoader size={40} />
        </div>
      ) : (
        <div className="w-full h-full overflow-auto scroller pb-4 relative">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};
