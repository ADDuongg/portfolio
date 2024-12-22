"use client";
import React, { useRef } from "react";
import { IconNavigate } from "./IconNavigate";
import { useInView, motion } from "framer-motion";

export const ContactCard = () => {
  const refContact = useRef<HTMLDivElement>(null);
  const isInViewContact = useInView(refContact, { once: true });
  return (
    <motion.div
      className={`relative h-full ${
        isInViewContact ? "animate-scaleUp" : "opacity-0"
      }`}
      ref={refContact}
    >
      <img
        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
        alt="icon"
        className="w-[50px] h-[100px] absolute top-0 right-0 brightness-50"
      />

      <div className="flex flex-col gap-y-2 pt-16 h-full">
        <span className="text-3xl">Let's</span>
        <span className="text-3xl dark:text-white flex gap-x-2">
          work <span className="text-blue-600">together</span>
        </span>
      </div>

      <IconNavigate />
    </motion.div>
  );
};
