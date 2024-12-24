import portfolio from "@/assets/images/portfolio.jpg";
import Image from "next/image";
import { IconNavigate } from "./IconNavigate";
export const IntroductionCard = () => {
  return (
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
  );
};
