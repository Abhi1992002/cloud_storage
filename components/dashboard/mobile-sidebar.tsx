"use client";
import { SidebarLink } from "./sidebar-link";
import { UploadFileButton } from "./upload-file-button";
import { IoHomeSharp } from "react-icons/io5";

import { MdTimer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { StorageLeft } from "./storage-left";
import { UploadingListDropdown } from "./uploading-list-dropdown";
import { FolderCreator } from "./folder-creator";

const sidebarData = [
  {
    Icon: IoHomeSharp,
    iconBg: "#C0C0C0",
    linkName: "My drive",
    linkHref: "/main",
    iconColor: "#000000",
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

export function MobileSidebar() {
  return (
    <div className="pt-6">
      <UploadFileButton />
      <FolderCreator />
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
    </div>
  );
}
