import { Folders } from "@prisma/client";
import { atom } from "recoil";

export const folderListState = atom({
  key: "folderListState",
  default: null! as Folders[],
});
