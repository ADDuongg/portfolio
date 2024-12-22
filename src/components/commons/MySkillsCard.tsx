"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { skillsMenu } from "@/constants";
import Image from "next/image";
import { IconNavigate } from "./IconNavigate";

export const MySkillsCard = ({
  hasDescription = true,
}: {
  hasDescription?: boolean;
}) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-y-6 h-full">
      <Carousel
        className="w-full max-w-[80%] h-24"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1 items-center h-full">
          {skillsMenu.map((skill, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/2 md:basis-1/4 lg:basis-1/5 h-full "
            >
              <Image
                src={skill.image}
                alt={skill.label}
                width={0}
                height={0}
                className="w-24 h-full rounded-lg shadow-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {hasDescription && (
        <>
          <div className="flex flex-col gap-y-2 items-start w-[80%]">
            <span className="text-secondary ">What i can do</span>
            <span className="text-2xl dark:text-white">My Skills</span>
          </div>
          <IconNavigate />
        </>
      )}
    </div>
  );
};
