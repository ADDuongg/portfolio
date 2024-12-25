"use client";
import { Button } from "@/components/ui/button";
import { menuItem } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DrawerHeader } from "./DrawerHeader";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);

  return (
    <div
      className={cn(
        "w-full border-b bg-background py-4 px-6 flex justify-between items-center sticky top-0 z-50 backdrop-blur-sm"
      )}
    >
      <Link href="/">
        <div className="text-2xl font-bold hover:opacity-80">Portfolio</div>
      </Link>

      <div className="hidden md:flex space-x-14">
        {menuItem.map((item) => {
          const isActive = pathName === item.path;
          return (
            <Link
              className={cn(
                " dark:text-secondary text-secondary hover:text-black font-bold dark:hover:text-white transition-colors",
                isActive && "dark:text-primary text-black"
              )}
              key={item.key}
              href={item.path}
            >
              <div>{item.name}</div>
            </Link>
          );
        })}
      </div>

      <div className="hidden md:flex items-center space-x-2">
        <ModeToggle />
        <Link href={"/contact"} className="w-full">
          <Button variant="secondary" rounded={"full"} size={"lg"}>
            Let&apos;s Talk
          </Button>
        </Link>
      </div>

      <DrawerHeader />
    </div>
  );
};
