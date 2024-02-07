"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";

import { Files } from "@prisma/client";
import { MoonLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { trashedFiles } from "@/actions/dashboard/get-trashed-files";
import { trashColumns } from "./trash-columns";

type TrashFilesTableProps = {};

export const TrashFilesTable = ({}: TrashFilesTableProps) => {
  const [data, setData] = useState<Files[]>(null!);

  useEffect(() => {
    trashedFiles().then((value) => {
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
          <DataTable columns={trashColumns} data={data} />
        </div>
      )}
    </div>
  );
};
