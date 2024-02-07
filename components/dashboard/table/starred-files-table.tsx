"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";

import { Files } from "@prisma/client";
import { MoonLoader } from "react-spinners";
import { toast } from "react-hot-toast";

import { starredFiles } from "@/actions/dashboard/get-starred-files";
import { staredFileColumns } from "./starred-colums";

type StarredFilesTableProps = {};

export const StarredFilesTable = ({}: StarredFilesTableProps) => {
  const [data, setData] = useState<Files[]>(null!);

  useEffect(() => {
    starredFiles().then((value) => {
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
          <DataTable columns={staredFileColumns} data={data} />
        </div>
      )}
    </div>
  );
};
