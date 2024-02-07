import { RecentFilesTable } from "@/components/dashboard/table/recent-files-table";

import React from "react";

type RecentProps = {};

const Recent = ({}: RecentProps) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-start pt-4 pl-5">
        Recent Files
      </h1>
      <p className="text-xs font-semibold text-start pt-2 pl-5">
        This folder contains all the files , you have uploaded recently
      </p>

      <div className="w-full h-full flex items-center justify-center py-4">
        <RecentFilesTable />
      </div>
    </>
  );
};

export default Recent;
