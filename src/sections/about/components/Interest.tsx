"use client";
import React from "react";
import { useInView, motion } from "framer-motion";
export const Interest = () => {
  const interestRef = React.useRef<HTMLDivElement>(null);
  const isInViewInterest = useInView(interestRef, { once: true });
  return (
    <motion.div
      ref={interestRef}
      className={`space-y-3 ${
        isInViewInterest ? "animate-scaleUp" : "opacity-0"
      }`}
    >
      <div>INTERESTS</div>
      <ul className="text-secondary list-disc pl-5">
        <li>Researching, exploring, and learning new technologies</li>
        <li>
          Problem Solving: Enjoy tackling complex problems and finding
          innovative solutions, particularly in the realm of system design and
          optimization.
        </li>
      </ul>
    </motion.div>
  );
};
