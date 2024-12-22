"use client";
import React from "react";
import { useInView, motion } from "framer-motion";
export const Education = () => {
  const educationRef = React.useRef<HTMLDivElement>(null);
  const isInViewEducation = useInView(educationRef, { once: true });
  return (
    <motion.div
      ref={educationRef}
      className={`space-y-5 ${
        isInViewEducation ? "animate-scaleUp" : "opacity-0"
      }`}
    >
      <div>EDUCATION</div>
      <div className="text-secondary">09/2020 - 06/2024</div>
      <div className="font-bold flex gap-x-1">
        Software Engineering at
        <div className="text-blue-600"> VIETNAM MARITIME UNIVERSITY (VMU)</div>
      </div>
    </motion.div>
  );
};
