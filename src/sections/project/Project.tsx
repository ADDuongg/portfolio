import { IconNavigate } from "@/components/commons";
import { projectData } from "@/data";
import Image from "next/image";
import Link from "next/link";

export const Project = () => {
  return (
    <div className="space-y-5 ">
      <div className=" animate-scaleUp text-center flex items-center justify-between h-[50px]">
        <Image
          src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
          width={0}
          height={0}
          alt="portfolio"
          className="w-[50px] h-[50px]"
        />
        <span className="dark:text-white xl:text-6xl md:text-5xl text-4xl">
          ALL PROJECTS
        </span>
        <Image
          src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
          width={0}
          height={0}
          alt="portfolio"
          className="w-[50px] h-[50px]"
        />
      </div>
      <div className="grid grid-cols-12 auto-rows-auto gap-5">
        {projectData?.map((project, index) => (
          <Link
            href={`/project/${project.id}`}
            key={index}
            className={`lg:col-span-4 col-span-12 relative flex flex-col bg-card-gradient rounded-lg shadow-md animate-scaleUp px-9 py-5 gap-y-3`}
          >
            <div>
              <Image
                src={project.image[0]}
                width={0}
                height={0}
                alt={project.name}
                className="w-full h-[250px] rounded-lg"
              />
            </div>
            <div>
              <div className="text-secondary text-xs">{project.title}</div>
              <div className="text-xl">{project.name}</div>
            </div>
            <IconNavigate />
          </Link>
        ))}
      </div>
    </div>
  );
};
