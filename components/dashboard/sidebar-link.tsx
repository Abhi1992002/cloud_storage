import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { IconType } from "react-icons/lib";

type SidebarLinkProps = {
  Icon: IconType;
  iconBg: string;
  linkName: string;
  linkHref: string;
  iconColor: string;
};

export const SidebarLink = ({
  Icon,
  iconBg,
  linkName,
  linkHref,
  iconColor,
}: SidebarLinkProps) => {
  const pathname = usePathname();

  useEffect(() => {});
  return (
    <Link
      href={linkHref}
      className={cn(
        "w-[48%] shadow-lg shadow-black/20 hover:shadow-none rounded-xl border p-4 flex flex-col gap-2 mb-2 relative transition-all duration-300 ease-in-out"
      )}
    >
      {pathname === linkHref && (
        <div className="w-full h-full absolute top-0 left-0 rounded-lg bg-[#9FD2F5] opacity-30"></div>
      )}
      <div className="rounded-full p-2 w-fit" style={{ background: iconBg }}>
        <Icon className="w-3 h-3" color={iconColor} />
      </div>

      <p className=" font-medium">{linkName}</p>
    </Link>
  );
};
