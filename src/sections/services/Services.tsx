import { ServicesOfferingIcon } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const dataServices = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I am a Frontend Developer with experience in modern technologies such as React.js, Next.js, Typescript, TailwindCSS, Ant Design, Redux, and shadcn. I specialize in building elegant, user-friendly, and efficient interfaces for all devices. By leveraging React.js and Next.js, I can develop high-performance, SEO-optimized web applications. TailwindCSS allows me to create visually stunning and consistent designs, while Ant Design provides professional UI components to accelerate development.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "I am a skilled backend developer with extensive experience in building robust, scalable, and efficient server-side applications. My expertise includes working with Node.js and Express.js to create high-performance backends, as well as PHP and Laravel for crafting reliable and secure systems tailored to meet complex requirements. I excel at designing and implementing RESTful APIs that ensure seamless communication between the frontend and backend, providing a smooth user experience.",
  },
  {
    id: 3,
    title: "Devops Development",
    description:
      "I have a strong background in DevOps, focusing on streamlining development and operations to ensure efficient deployment and maintenance of applications. I am proficient in Linux (Ubuntu) for server management, ensuring that systems run smoothly and securely. I use Nginx for configuring high-performance web servers and reverse proxies, optimizing both speed and security. My experience with Cloudflare helps improve performance, manage DNS, and secure applications from threats.",
  },
  {
    id: 4,
    title: "Tools and Technologies",
    description:
      "I am proficient with a variety of tools that enhance collaboration and streamline development workflows. I use Postman for testing and debugging APIs, ensuring seamless communication between frontend and backend. For version control, I rely on Git, with experience in GitLab and Bitbucket for managing repositories and collaborating on code with teams.",
  },
];

export const Services = () => {
  return (
    <div className="grid grid-cols-12 gap-5 relative auto-rows-auto">
      <div className="xl:col-span-3 col-span-12 px-8 py-14 bg-card-gradient rounded-3xl shadow-lg animate-moveLeftToRight flex flex-col gap-y-24">
        {ServicesOfferingIcon?.map((item, index) => {
          return (
            <div key={index} className="flex items-center ml-20 lg:ml-0 gap-5">
              <FontAwesomeIcon
                icon={item.icon}
                className="fa-2x text-blue-600"
              />
              <div className="text-secondary text-lg font-bold">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>

      <div className="xl:col-span-9 col-span-12 row-span-3 px-8 animate-moveRightToLeft flex flex-col gap-y-5 h-full">
        <div className=" animate-scaleUp text-center flex items-center justify-between h-[50px]">
          <Image
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            width={0}
            height={0}
            alt="portfolio"
            className="w-[50px] h-[50px]"
          />
          <span className="dark:text-white xl:text-6xl md:text-5xl text-4xl">
            MY OFFERINGS
          </span>
          <Image
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            width={0}
            height={0}
            alt="portfolio"
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="bg-card-gradient rounded-3xl shadow-lg basis-1 h-full grid lg:grid-cols-12 col-span-6 auto-rows-auto gap-10 p-10">
          {dataServices?.map((item) => (
            <div
              key={item.id}
              className="bg-card-gradient rounded-3xl px-10 py-5 col-span-6 shadow-lg text-wrap"
            >
              <div className="text-secondary text-xl">{item.title}</div>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
