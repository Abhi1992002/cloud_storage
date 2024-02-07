import { FileState } from "@/components/dashboard/multiple_file_dropzone";
import { atom } from "recoil";

export const fileRecoilStates = atom({
  key: "fileRecoilStates",
  default: [] as FileState[],
});
