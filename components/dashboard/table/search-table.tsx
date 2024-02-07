"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./colums";
import { Files } from "@prisma/client";
import { MoonLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { useRecoilValue } from "recoil";
import { searchValueState } from "@/store/atom/search-value";
import { allFileListState } from "@/store/atom/all-files";

type FilesTableProps = {};

export const SearchTable = ({}: FilesTableProps) => {
  const [data, setData] = useState<Files[]>(null!);
  const searchValue = useRecoilValue(searchValueState);
  const searchFiles = useRecoilValue(allFileListState);

  const searchFile = () => {
    const files = searchFiles.filter((file) => file.name.includes(searchValue));
    setData(files);
  };

  useEffect(() => {
    searchFile();
  }, [searchValue]);

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
