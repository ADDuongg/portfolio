"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export const SummaryCard = () => {
  const refSummary = useRef<HTMLDivElement>(null);
  const isInViewSummary = useInView(refSummary, { once: true });
  return (
    <motion.div
      ref={refSummary}
      className={`h-full ${
        isInViewSummary ? "animate-moveBottomToTop" : "opacity-0"
      } `}
    >
      <div className="relative flex flex-col justify-between items-center gap-y-6 h-full ">
        <div className=" flex justify-between items-center h-full gap-x-5">
          <div className="lg:p-0 p-4  h-full basis-1/3 shadow-lg rounded-lg bg-card-gradient-secondary flex flex-col justify-center items-center">
            <div className="font-bold text-4xl">01</div>
            <div className="text-secondary text-center">
              Years of Experience
            </div>
          </div>
          <div className="lg:p-0 p-4  h-full basis-1/3 shadow-lg rounded-lg bg-card-gradient-secondary flex flex-col justify-center items-center">
            <div className="font-bold text-4xl">06</div>
            <div className="text-secondary text-center">
              Total Projects Done
            </div>
          </div>
          <div className="lg:p-0 p-4  h-full basis-1/3 shadow-lg rounded-lg bg-card-gradient-secondary flex flex-col justify-center items-center">
            <div className="font-bold text-4xl">10+</div>
            <div className="text-secondary text-center">Technologies Used</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
