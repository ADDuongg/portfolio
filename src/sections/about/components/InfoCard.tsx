"use client";
import React from "react";
import portfolio from "@/assets/images/portfolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
const contactIcons = [
  {
    icon: faUser,
    title: "User",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "lorem@ipsum.com",
  },
  {
    icon: faFacebook,
    title: "Facebook",
    description: "@facebook",
  },
  {
    icon: faYoutube,
    title: "Youtube",
    description: "@youtube",
  },
];
export const InfoCard = () => {
  const InfoCardRef = React.useRef<HTMLDivElement>(null);
  const isInViewInfoCard = useInView(InfoCardRef, { once: true });
  return (
    <motion.div
      ref={InfoCardRef}
      className={`h-full flex flex-col gap-y-9 items-center justify-center bg-card-gradient p-5 rounded-lg ${
        isInViewInfoCard ? "animate-scaleUp" : "opacity-0"
      }`}
    >
      <div className="flex justify-center">
        <Image
          src={portfolio}
          width={0}
          height={0}
          alt="portfolio"
          className="w-full h-[350px] rounded-lg"
        />
      </div>
      <div className="flex justify-center flex-col items-center gap-y-1">
        <div className="text-2xl">Nguyen Van Duong</div>
        <div className="text-secondary">@duongnv</div>
      </div>
      <div className="flex gap-x-3">
        {contactIcons.map((item, index) => (
          <div
            key={index}
            className="flex gap-x-3 bg-card rounded-full p-4 items-center dark:hover:bg-white hover:bg-black cursor-pointer shadow-lg dark:hover:text-black hover:text-white"
          >
            <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
          </div>
        ))}
      </div>
      <Button className="rounded-full w-full dark:bg-secondary bg-black  hover:bg-secondary text-white dark:hover:text-black">
        Contact me
      </Button>
    </motion.div>
  );
};
