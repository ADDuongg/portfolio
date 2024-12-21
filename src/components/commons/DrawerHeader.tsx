"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { menuItem } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export const DrawerHeader = () => {
  const [open, setOpen] = React.useState(false);
  const pathName = usePathname();
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen} direction="right">
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            rounded={"full"}
            className="md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="top-0 right-0 left-auto mt-0 w-[300px] rounded-none flex flex-col justify-start gap-y-10">
          <DrawerTitle></DrawerTitle>
          <div className="flex flex-col">
            {menuItem.map((item) => {
              const isActive = pathName === item.path;
              return (
                <Link
                  className={cn(
                    "w-100 p-5 flex justify-center dark:text-white text-black hover:text-white hover:bg-black font-bold dark:hover:text-black dark:hover:bg-white transition-colors",
                    isActive &&
                      "dark:text-black text-white dark:bg-white bg-black"
                  )}
                  key={item.key}
                  href={item.path}
                >
                  <div>{item.name}</div>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-2 justify-center px-5">
            <Button
              variant="secondary"
              rounded={"full"}
              size={"lg"}
              className="flex-1 text-white"
            >
              Let's Talk
            </Button>
            <ModeToggle />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
