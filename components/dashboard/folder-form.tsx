"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IconPicker } from "./icon-picker";
import { createFolder } from "@/actions/dashboard/create-folder";
import { toast } from "react-hot-toast";
import { MoonLoader } from "react-spinners";

type FolderFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const folderCreatorSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(50),
  color: z.string(),
  icon: z.string(),
});

export const FolderForm = ({ setOpen }: FolderFormProps) => {
  const [icon, setIcon] = useState<string>(null!);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof folderCreatorSchema>>({
    resolver: zodResolver(folderCreatorSchema),
    defaultValues: {
      name: "untitled",
      color: "",
      icon: "",
    },
  });

  function onSubmit(values: z.infer<typeof folderCreatorSchema>) {
    setLoading(true);
    createFolder(values)
      .then((data) => {
        if (data?.error) {
          toast.error(data.error);
        }
        if (data.success) {
          toast.success(data.success);
        }
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setOpen(false);
        setLoading(false);
      });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
          {/*folder name  */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Folder Name</FormLabel>
                <FormControl>
                  <Input placeholder="Folder name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* color selector */}
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="select a color for folder" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="bg-yellow-200">
                      <div className="w-4 h-4 bg-yellow-200 rounded-full"></div>
                    </SelectItem>
                    <SelectItem value="bg-blue-200">
                      <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
                    </SelectItem>
                    <SelectItem value="bg-violet-200">
                      <div className="w-4 h-4 bg-violet-200 rounded-full"></div>
                    </SelectItem>
                    <SelectItem value="bg-green-300">
                      <div className="w-4 h-4 bg-green-200 rounded-full"></div>
                    </SelectItem>
                    <SelectItem value="bg-red-300">
                      <div className="w-4 h-4 bg-red-200 rounded-full"></div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* icon selector */}
          <FormField
            control={form.control}
            name="color"
            render={() => (
              <FormItem>
                <FormLabel>Pick icon for folder</FormLabel>
                <FormControl>
                  <IconPicker
                    asChild
                    onChange={(icon) => {
                      form.setValue("icon", icon);
                      setIcon(icon);
                    }}
                  >
                    {icon ? (
                      <p className=" text-4xl hover:cursor-pointer">{icon}</p>
                    ) : (
                      <Button className="block bg-white  text-black border hover:text-white w-full">
                        Add Icon
                      </Button>
                    )}
                  </IconPicker>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? <MoonLoader size={14} color="#ffffff" /> : "Submit"}
          </Button>
        </form>
      </Form>
    </>
  );
};
