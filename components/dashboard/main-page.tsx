"use client";

import React from "react";

import { FolderList } from "./folder-list";
import { UpgradeBox } from "./upgrade-box";

type MainPageProps = {};

export const MainPage = ({}: MainPageProps) => {
  return (
    <div className=" h-full p-4 space-y-8">
      <UpgradeBox />
      <FolderList />
    </div>
  );
};
