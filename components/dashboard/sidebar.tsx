"use client";

import { SidebarLink } from "./sidebar-link";
import { UploadFileButton } from "./upload-file-button";
import { IoHomeSharp } from "react-icons/io5";
import { RiFolderSharedFill } from "react-icons/ri";
import { MdTimer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { StorageLeft } from "./storage-left";
import { UploadingList } from "./uploading-list";
import { FolderCreator } from "./folder-creator";

export function DashboardSidebar() {
  const sidebarData = [
    {
      Icon: IoHomeSharp,
      iconBg: "#C0C0C0",
      linkName: "My drive",
      linkHref: "/main",
      iconColor: "#000000",
    },
    {
      Icon: RiFolderSharedFill,
      iconBg: "#D7F1DA",
      linkName: "Shared Files",
      linkHref: "/shared",
      iconColor: "#4BCF56",
    },
    {
      Icon: MdTimer,
      iconBg: "#E2E2F7",
      linkName: "Recent Files",
      linkHref: "/recent",
      iconColor: "#7777E2",
    },
    {
      Icon: FaStar,
      iconBg: "#FCF7F5",
      linkName: "Starred Files",
      linkHref: "/starred",
      iconColor: "#DBA995",
    },
    {
      Icon: FaTrashCan,
      iconBg: "#F8F3E6",
      linkName: "Trash folder",
      linkHref: "/trash",
      iconColor: "#C1A459",
    },
  ];

  return (
    <div className="w-[400px] h-full p-4 ">
      <div className="w-full  rounded-xl h-full border p-4">
        <div className=" border-b pb-4 pt-2 space-x-2">
          <UploadFileButton />
          <FolderCreator />
        </div>
        <div className="w-full py-4 flex flex-wrap justify-between">
          {sidebarData.map((data, i) => (
            <SidebarLink
              key={i}
              Icon={data.Icon}
              iconBg={data.iconBg}
              linkName={data.linkName}
              linkHref={data.linkHref}
              iconColor={data.iconColor}
            />
          ))}
        </div>

        <div className="w-full">
          <StorageLeft />
        </div>
        <div className="w-full pt-4">
          <UploadingList />
        </div>
      </div>
    </div>
  );
}
