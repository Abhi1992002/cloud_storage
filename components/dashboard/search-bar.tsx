"use client";
import React from "react";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";

type SearchBarProps = {};

export const SearchBar = ({}: SearchBarProps) => {
  return (
    <div
      role="button"
      className="bg-[#F9F9F9] rounded-full flex items-center gap-4 p-1 border px-4"
    >
      <FaSearch className="w-4 h-4" />
      <Input
        className="bg-transparent border-none outline-none shadow-none w-[300px] focus:outline-none focus:border-none focus-visible:ring-0"
        placeholder="Search anything"
      />
    </div>
  );
};
