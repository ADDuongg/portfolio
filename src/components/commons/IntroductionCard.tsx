import Image from "next/image";
import React from "react";
import portfolio from "@/assets/images/portfolio.jpg";
import { IconNavigate } from "./IconNavigate";
import Link from "next/link";
export const IntroductionCard = () => {
  return (
    <Link
      href={"/home"}
      className="row-span-2 col-span-2 lg:col-span-2 bg-card-gradient rounded-2xl xl:p-9 p-4 shadow-md cursor-pointer animate-scaleUp"
    >
      <div className="flex md:flex-row flex-col gap-x-5 relative h-full">
        <div className="flex justify-center">
          <Image
            src={portfolio}
            width={0}
            height={0}
            alt="portfolio"
            className="md:w-[250px] w-[250px] md:h-full h-[250px] rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center md:mt-0 mt-5">
          <span className="dark:text-secondary text-black font-bold">
            A WEB DEVELOPER
          </span>
          <span className="dark:text-white text-2xl">Nguyen Van Duong</span>
          <span className="dark:text-secondary text-black font-bold text-sm">
            I am a Fullstack Developer live in Ha Noi, Vietnam
          </span>
        </div>
        <IconNavigate />
      </div>
    </Link>
  );
};
