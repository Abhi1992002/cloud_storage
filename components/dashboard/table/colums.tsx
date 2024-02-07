"use client";

import { Button } from "@/components/ui/button";
import { formatFileSize } from "@edgestore/react/utils";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { toast } from "react-hot-toast";
import { createTrashFile } from "@/actions/dashboard/create-trash-file";
import { createStarredFile } from "@/actions/dashboard/create-starred-files";

export type Files = {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
  downloadUrl: string;
};

const onDelete = (fileId: string) => {
  const id = toast.loading("Saving in trash folder");

  createTrashFile(fileId)
    .then((value) => {
      if (value.error) {
        toast.error(value.error, {
          id: id,
        });
      }
      if (value.success) {
        toast.success(value.success, {
          id: id,
        });
      }
    })
    .catch((error) => {
      toast.error(error, {
        id: id,
      });
    });
};

const onStarred = (fileId: string) => {
  const id = toast.loading("Saving in Starred folder");

  createStarredFile(fileId)
    .then((value) => {
      if (value.error) {
        toast.error(value.error, {
          id: id,
        });
      }
      if (value.success) {
        toast.success(value.success, {
          id: id,
        });
      }
    })
    .catch((error) => {
      toast.error(error, {
        id: id,
      });
    });
};

export const columns: ColumnDef<Files>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return <p>{name.slice(0, 30)}...</p>;
    },
  },
  {
    accessorKey: "size",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <p>Size</p>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const size = row.getValue("size") as number;
      const redableFormat = formatFileSize(size);
      return (
        <div>
          <p className="text-sm ml-4">{redableFormat}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <div className="w-max-[100px]">
          <p className="text-sm">{type}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "uploadedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <p>Uploaded At</p>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

    cell: ({ row }) => {
      const date = row.getValue("uploadedAt") as Date;
      return (
        <div>
          <p className="text-sm ml-4">{date.toLocaleDateString()}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const url = row.original;
      const fileId = row.original.id as string;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={url.downloadUrl}>Download</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onStarred(fileId)}>
              Starred
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(fileId)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
