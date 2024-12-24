"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { IconNavigate } from "./IconNavigate";
import { ServicesOfferingIcon } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          {ServicesOfferingIcon?.map((item, index) => {
            return (
              <TooltipProvider key={index} delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="fa-2x text-blue-600"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
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
