import { fileRecoilStates } from "@/store/atom/uploading-list-state";
import React from "react";
import { useRecoilState } from "recoil";
import { Uploading } from "./uploading";

type UploadingaListProps = {};

export const UploadingaList = ({}: UploadingaListProps) => {
  const [fileState, setFileState] = useRecoilState(fileRecoilStates);
  return (
    <div className="space-y-4">
      {fileState.map(({ file, progress }, i) => (
        <Uploading
          i={i}
          key={i}
          onChange={setFileState}
          value={fileState}
          name={file.name}
          progress={progress}
        />
      ))}
    </div>
  );
};
