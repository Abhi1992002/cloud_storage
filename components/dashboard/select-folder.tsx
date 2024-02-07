import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRecoilValue } from "recoil";
import { folderListState } from "@/store/atom/folder-list";
import { MoonLoader } from "react-spinners";

export function SelectFolder({
  setFolder,
}: {
  setFolder: React.Dispatch<React.SetStateAction<string>>;
}) {
  const folderList = useRecoilValue(folderListState);
  return (
    <Select
      onValueChange={(value) => {
        setFolder(value);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Folder" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {!folderList ? (
            <div className="w-full py-8 flex items-center justify-center">
              <MoonLoader size={20} />
            </div>
          ) : folderList.length === 0 ? (
            <div className="w-full p-2">
              <p className="text-sm">Please create a folder first</p>
            </div>
          ) : (
            folderList.map((folder, i) => (
              <SelectItem value={folder.id} key={i}>
                <div className="flex justify-between w-full">
                  <p className="mr-4">
                    {folder.icon} {folder.name}
                  </p>
                  <p>{folder.createdAt.toUTCString()}</p>
                </div>
              </SelectItem>
            ))
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
