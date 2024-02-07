import { StarredFilesTable } from "@/components/dashboard/table/starred-files-table";
import React, { useEffect, useState } from "react";

type StarredProps = {};

const Starred = ({}: StarredProps) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-start pt-4 pl-5">
        Starred Files
      </h1>
      <p className="text-xs font-semibold text-start pt-2 pl-5">
        This folder contains all the Starred files
      </p>
      <div className="w-full h-full flex items-center justify-center py-4">
        <StarredFilesTable />
      </div>
    </>
  );
};

export default Starred;
