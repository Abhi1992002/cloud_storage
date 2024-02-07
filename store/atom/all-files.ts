import { Files } from "@prisma/client";
import { atom } from "recoil";

export const allFileListState = atom({
  key: "allFileListState",
  default: null! as Files[],
});
