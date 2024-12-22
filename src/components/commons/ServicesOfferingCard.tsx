"use client";
import {
  ComputerDesktopIcon,
  CircleStackIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { IconNavigate } from "./IconNavigate";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export const ServicesOfferingCard = () => {
  const refServices = useRef<HTMLDivElement>(null);
  const isInViewServices = useInView(refServices, { once: true });
  return (
    <motion.div
      ref={refServices}
      className={` ${
        isInViewServices ? "animate-moveBottomToTop" : "opacity-0"
      } `}
    >
      <div className="relative flex flex-col justify-between items-center gap-y-6 h-full pt-14">
        <div className="w-[80%] flex justify-between items-center">
          <ComputerDesktopIcon className="size-10 text-blue-500" />
          <CircleStackIcon className="size-10 text-blue-500" />
          <CpuChipIcon className="size-10 text-blue-500" />
          <WrenchScrewdriverIcon className="size-10 text-blue-500" />
        </div>
        <div className="flex flex-col gap-y-2 items-start w-[80%]">
          <span className="text-secondary ">Specialization</span>
          <span className="text-2xl dark:text-white">Services Offering</span>
        </div>

        <IconNavigate />
      </div>
    </motion.div>
  );
};
