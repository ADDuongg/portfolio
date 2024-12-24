import Image from "next/image";
import React from "react";
import portfolio from "@/assets/images/portfolio.jpg";
import { Separator } from "@/components/ui/separator";
import {
  ContactCard,
  CredentialsCard,
  ServicesOfferingCard,
} from "@/components/commons";
export const Summary = () => {
  return (
    <div className="grid grid-cols-12 gap-5 auto-rows-max ">
      <div className="bg-card py-3 px-5 rounded-lg lg:row-span-2 col-span-12 lg:col-span-4 shadow-md animate-scaleUp">
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src={portfolio}
              width={0}
              height={0}
              alt="portfolio"
              className="lg:w-full md:w-[60%] h-[350px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-12 animate-scaleUp text-center flex items-center justify-between h-[50px]">
        <Image
          src={
            "https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
          }
          width={0}
          height={0}
          alt="portfolio"
          className="w-[50px] h-[50px] "
        />
        <span className="dark:text-white xl:text-6xl md:text-5xl text-4xl">
          SELF-SUMMARY
        </span>
        <Image
          src={
            "https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
          }
          width={0}
          height={0}
          alt="portfolio"
          className="w-[50px] h-[50px] "
        />
      </div>
      <div className="relative animate-scaleUp px-5 pb-5 py-28 flex flex-col bg-card-gradient col-span-12 lg:col-span-8 rounded-lg h-[300px] shadow-lg">
        <span className="text-3xl dark:text-white">Nguyen Van Duong</span>
        <span className="text-secondary text-lg">
          I am a full-stack developer skilled in both front-end and back-end
          technologies like JavaScript, React, Nextjs, Node.js, and MongoDB. I
          create efficient, scalable web applications, ensuring high-quality
          code and seamless user experiences.
        </span>
        <Image
          src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
          alt="icon"
          width={0}
          height={0}
          className="w-[50px] h-[100px] absolute top-0 left-5 brightness-50"
        />
      </div>

      <div className=" bg-card-gradient rounded-lg col-span-12 lg:col-span-6 shadow-md animate-scaleUp px-9 py-5">
        <div className="space-y-5">
          <div>EXPERIENCES</div>
          <div className="text-secondary">11/2023 - 11/2024</div>
          <div className="flex flex-col">
            ReactJS Developer
            <span className="text-secondary text-xs">
              Bac Ha Software (BHSoft)
            </span>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="space-y-5">
          <div>EDUCATION</div>
          <div className="text-secondary">09/2020 - 06/2024</div>
          <div className="flex flex-col">
            Software Engineering{" "}
            <span className="text-secondary text-xs">
              VIETNAM MARITIME UNIVERSITY
            </span>
          </div>
        </div>
      </div>

      <div className="bg-card-gradient rounded-lg col-span-12 lg:col-span-6 shadow-md animate-scaleUp px-9 py-5">
        <div className="space-y-5">
          <div>CERTIFICATIONS</div>
          <div className="flex flex-col">
            <div className="text-xl">
              <span className="text-secondary">TOEIC</span>{" "}
              <span className="">700+</span>
            </div>
            <div className="text-xl">
              <span className="text-secondary">MOS</span>{" "}
              <span className="">800+</span>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="space-y-3">
          <div>INTERESTS</div>
          <ul className="text-secondary list-disc pl-5">
            <li>Researching, exploring, and learning new technologies</li>
            <li>
              Problem Solving: Enjoy tackling complex problems and finding
              innovative solutions, particularly in the realm of system design
              and optimization.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-card-gradient rounded-lg col-span-12 lg:col-span-3 shadow-md animate-scaleUp px-9 py-5">
        <CredentialsCard />
      </div>
      <div className="bg-card-gradient rounded-lg col-span-12 lg:col-span-6 shadow-md animate-scaleUp px-9 py-5">
        <ServicesOfferingCard />
      </div>
      <div className="bg-card-gradient rounded-lg col-span-12 lg:col-span-3 shadow-md animate-scaleUp px-9 pb-5">
        <ContactCard />
      </div>
    </div>
  );
};
