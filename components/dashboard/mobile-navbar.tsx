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

type MobileNavbarProps = {};

export const MobileNavbar = ({}: MobileNavbarProps) => {
  return (
    <div className="w-full">
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
    </div>
  );
};
