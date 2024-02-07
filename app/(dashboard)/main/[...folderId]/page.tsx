import { FilesTable } from "@/components/dashboard/table/files-table";
import React, { useEffect } from "react";

type FolderPageProps = {
  params: {
    folderId: string;
  };
};

const FolderPage = ({ params }: FolderPageProps) => {
  const folderId = params.folderId;
  return (
    <div className="w-full h-full flex items-center justify-center py-4">
      <FilesTable folderId={folderId} />
    </div>
  );
};

export default FolderPage;
