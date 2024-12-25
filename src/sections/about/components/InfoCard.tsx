"use client";
import portfolio from "@/assets/images/portfolio.jpg";
import { Button } from "@/components/ui/button";
import { iconSocial } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        {iconSocial.map((item, index) => (
          <div
            key={index}
            className="flex gap-x-3 bg-card rounded-full p-4 items-center dark:hover:bg-white hover:bg-black cursor-pointer shadow-lg dark:hover:text-black hover:text-white"
          >
            <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
          </div>
        ))}
      </div>
      <Link href={"/contact"} className="w-full">
        <Button className="rounded-full w-full" variant={"secondary"}>
          Contact me
        </Button>
      </Link>
    </motion.div>
  );
};
