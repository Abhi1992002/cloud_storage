import { Folders } from "@prisma/client";
import { atom } from "recoil";

export const searchValueState = atom({
  key: "searchValueState",
  default: "" as string,
});
