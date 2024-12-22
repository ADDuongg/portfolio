"use client";
import React, { useRef } from "react";
import { IconNavigate } from "./IconNavigate";
import { motion, useInView } from "framer-motion";

export const CredentialsCard = () => {
  const refCredentials = useRef<HTMLDivElement>(null);
  const isInViewCredentials = useInView(refCredentials, { once: true });
  return (
    <motion.div
      ref={refCredentials}
      className={`h-full ${
        isInViewCredentials ? "animate-scaleUp" : "opacity-0"
      }`}
    >
      <div className="relative space-y-6 h-full flex flex-col justify-between">
        <div className="font-caveat xl:text-7xl text-6xl font-bold text-secondary flex-1 text-center">
          Duong
        </div>
        <div className="flex">
          <div className="flex flex-col gap-y-2 items-start">
            <span className="text-secondary text-xs">MORE ABOUT ME</span>
            <span className="text-xl dark:text-white">Credentials</span>
          </div>
        </div>

        <IconNavigate />
      </div>
    </motion.div>
  );
};
