"use client";
import React from "react";
import { MobileNavbar } from "./mobile-navbar";
import { UserButton } from "../auth/user-button";
import { SearchBar } from "./search-bar";
import { useCurrentUser } from "@/hooks/use-current-user";

type DashboardNavbarProps = {};

export const DashboardNavbar = ({}: DashboardNavbarProps) => {
  const user = useCurrentUser();
  return (
    <div className="w-full">
      {/* normal sidebar */}
      <nav className="hidden md:flex  w-full  md:items-center">
        {/* icon */}
        <div className="w-[400px] p-4">
          <h1 className="text-lg font-semibold">Storage.</h1>
        </div>

        <div className="flex-1 flex border-b p-4 justify-between">
          {/* search bar */}
          <SearchBar />

          {/* userbuttons */}
          <div className="flex items-center gap-4">
            <UserButton />
            <p className="font-medium">{user?.name}</p>
          </div>
        </div>
      </nav>
      {/* mobile sidebar */}
      <nav className="block md:hidden border-b border-neutral-400 w-full p-4">
        <MobileNavbar />
      </nav>
    </div>
  );
};
