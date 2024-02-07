"use client";
import { searchFiles } from "@/actions/dashboard/search-files";
import { DashboardNavbar } from "@/components/dashboard/navbar";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { FilesTable } from "@/components/dashboard/table/files-table";
import { SearchTable } from "@/components/dashboard/table/search-table";
import { allFileListState } from "@/store/atom/all-files";
import { searchValueState } from "@/store/atom/search-value";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRecoilValue, useSetRecoilState } from "recoil";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const searchValue = useRecoilValue(searchValueState);
  const setAllFiles = useSetRecoilState(allFileListState);
  useEffect(() => {
    searchFiles().then((value) => {
      if (value.files) {
        setAllFiles(value.files);
      }
      if (value.error) {
        toast.error(value.error);
      }
    });
  }, []);
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 flex ">
          <div className="hidden w-[400px] h-full overflow-y-auto md:block">
            <DashboardSidebar />
          </div>
          <div className="flex-1 md:max-w-[calc(100vw-400px)] overflow-y-auto max-h-[calc(100vh-100px)] scroller ">
            {searchValue && (
              <div className="w-full  p-4">
                <h1 className="text-2xl font-semibold mb-4">Searched Files</h1>
                <SearchTable />
              </div>
            )}
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
