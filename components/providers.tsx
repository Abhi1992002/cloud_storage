"use client";
import { EdgeStoreProvider } from "@/lib/edgestore";
import React from "react";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Toaster position="top-center" />
      <RecoilRoot>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </RecoilRoot>
    </>
  );
};
