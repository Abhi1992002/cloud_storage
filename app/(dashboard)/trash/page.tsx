import { TrashFilesTable } from "@/components/dashboard/table/trash-files-table";
import React from "react";

type TrashProps = {};

const Trash = ({}: TrashProps) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-start pt-4 pl-5">
        Trash Files
      </h1>
      <p className="text-xs font-semibold text-start pt-2 pl-5">
        This folder contains all the trash files. These are temporary deleted
        files.
      </p>
      <div className="w-full h-full flex items-center justify-center py-4">
        <TrashFilesTable />
      </div>
    </>
  );
};

export default Trash;
