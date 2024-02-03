"use client";

import React from "react";

import { FolderList } from "./folder-list";

type MainPageProps = {};

export const MainPage = ({}: MainPageProps) => {
  return (
    <div className="w-full h-full p-4">
      <FolderList />
    </div>
  );
};
