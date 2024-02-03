"use client";

import { logout } from "@/actions/auth/logout";
import React from "react";

type LogoutButtonProps = {
  children?: React.ReactNode;
};

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
