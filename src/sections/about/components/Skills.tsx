"use client";
import { MySkillsCard } from "@/components/commons";
import React from "react";
import { useInView, motion } from "framer-motion";
export const Skills = () => {
  const skillsRef = React.useRef<HTMLDivElement>(null);
  const isInViewSkills = useInView(skillsRef, { once: true });
  return (
    <motion.div
      ref={skillsRef}
      className={`space-y-5 ${
        isInViewSkills ? "animate-scaleUp" : "opacity-0"
      }`}
    >
      <div>SKILLS</div>
      <MySkillsCard hasDescription={false} />
    </motion.div>
  );
};
