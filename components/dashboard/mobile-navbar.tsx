"use effect";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { MobileSidebar } from "./mobile-sidebar";
import { UserButton } from "../auth/user-button";

type MobileNavbarProps = {};

export const MobileNavbar = ({}: MobileNavbarProps) => {
  return (
    <div className="w-full flex justify-between">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetDescription>
              <MobileSidebar />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <UserButton />
    </div>
  );
};
