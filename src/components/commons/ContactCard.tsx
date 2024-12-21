import React from "react";
import { IconNavigate } from "./IconNavigate";

export const ContactCard = () => {
  return (
    <div className="bg-card-gradient rounded-2xl px-6 pb-9 shadow-md animate-moveRightToLeft md:col-span-1 col-span-2 cursor-pointer">
      <div className="relative h-full">
        <img
          src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
          alt="icon"
          className="w-[50px] h-[100px] absolute top-0 right-0 brightness-50"
        />

        <div className="flex flex-col gap-y-2 pt-16 h-full">
          <span className="text-3xl">Let's</span>
          <span className="text-3xl dark:text-white flex gap-x-2">
            work <span className="text-blue-600">together</span>
          </span>
        </div>

        <IconNavigate />
      </div>
    </div>
  );
};
