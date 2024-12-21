"use client";
import {
  ComputerDesktopIcon,
  CircleStackIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export const SummaryCard = () => {
  const refSummary = useRef<HTMLDivElement>(null);
  const isInViewSummary = useInView(refSummary, { once: true });
  return (
    <motion.div
      ref={refSummary}
      className={`bg-card-gradient rounded-2xl px-6 py-9 shadow-md ${
        isInViewSummary ? "animate-moveBottomToTop" : "opacity-0"
      } col-span-2 sm:col-span-2`}
    >
      <div className="relative flex flex-col justify-between items-center gap-y-6 h-full ">
        <div className="w-[80%] flex justify-between items-center h-full gap-x-5">
          <div className="h-full basis-1/3 shadow-lg rounded-lg bg-card-gradient-secondary flex flex-col justify-center items-center">
            <div className="font-bold text-4xl">01</div>
            <div className="text-secondary text-center">
              Years of Experience
            </div>
          </div>
          <div className="h-full basis-1/3 shadow-lg rounded-lg bg-card-gradient-secondary flex flex-col justify-center items-center">
            <div className="font-bold text-4xl">06</div>
            <div className="text-secondary text-center">
              Total Projects Done
            </div>
          </div>
          <div className="h-full basis-1/3 shadow-lg rounded-lg bg-card-gradient-secondary flex flex-col justify-center items-center">
            <div className="font-bold text-4xl">10+</div>
            <div className="text-secondary text-center">Technologies Used</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
