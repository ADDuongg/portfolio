"use client";

import React, { useRef } from "react";
import project from "@/assets/images/my-works.png";
import Image from "next/image";
import { IconNavigate } from "./IconNavigate";
import { motion, useInView } from "framer-motion";
export const ProjectCard = () => {
  const refProject = useRef<HTMLDivElement>(null);
  const isInViewProject = useInView(refProject, { once: true });
  return (
    <motion.div
      ref={refProject}
      className={`bg-card-gradient rounded-2xl xl:p-9 p-4 shadow-md ${
        isInViewProject ? "animate-moveRightToLeft" : "opacity-0"
      } col-span-2 lg:col-span-1 cursor-pointer`}
    >
      <div className="relative space-y-6">
        <div className="flex-1">
          <Image
            src={project}
            width={0}
            height={0}
            className="w-full h-[100px]"
            alt="project"
          />
        </div>
        <div className="flex">
          <div className="flex flex-col gap-y-2">
            <span className="text-secondary text-xs">SHOW CASE</span>
            <span className="text-xl dark:text-white">Projects</span>
          </div>
        </div>

        <IconNavigate />
      </div>
    </motion.div>
  );
};
