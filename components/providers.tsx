"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
};
