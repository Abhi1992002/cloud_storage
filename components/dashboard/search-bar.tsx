"use client";
import React from "react";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchValueState } from "@/store/atom/search-value";
import { allFileListState } from "@/store/atom/all-files";

type SearchBarProps = {};

export const SearchBar = ({}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const allSearchFiles = useRecoilValue(allFileListState);
  return (
    <div
      role="button"
      className="bg-[#F9F9F9] rounded-full flex items-center gap-4 p-1 border px-4 hover:cursor-pointer"
    >
      <FaSearch className="w-4 h-4" />
      <Input
        value={searchValue}
        disabled={!allSearchFiles}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        className="bg-transparent border-none outline-none shadow-none w-[300px] focus:outline-none focus:border-none focus-visible:ring-0"
        placeholder="Search any file"
      />
    </div>
  );
};
