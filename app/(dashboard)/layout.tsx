import { DashboardNavbar } from "@/components/dashboard/navbar";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 flex">
          <div className="hidden h-full overflow-y-auto md:block">
            <DashboardSidebar />
          </div>
          <div className="flex-1">{children}</div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
