import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectInterface } from "@/types";
import Link from "next/link";
export const ProjectDetail = ({
  projectDetail,
}: {
  projectDetail: projectInterface;
}) => {
  return (
    <div className="h-full space-y-8">
      <div className="w-full animate-scaleUp text-center flex items-center justify-between h-[50px]">
        <Image
          src={
            "https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
          }
          width={0}
          height={0}
          alt="portfolio"
          className="w-[50px] h-[50px]"
        />
        <span className="dark:text-white xl:text-6xl md:text-5xl text-4xl">
          {projectDetail.name}
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

      <div className="w-full animate-scaleUp">
        <Image
          src={projectDetail.image[0]}
          alt="food"
          width={0}
          height={0}
          className="w-full h-[400px] rounded-lg"
        />
      </div>

      <div className="grid grid-cols-12 gap-5 bg-card-gradient p-10 rounded-lg">
        <div className="lg:col-span-5 col-span-12 rounded-lg py-10 px-5 bg-card-gradient flex flex-col gap-y-4 relative animate-moveLeftToRight">
          <div>
            <div className="text-secondary text-lg">Year</div>
            <div className="text-xl">{projectDetail.year}</div>
          </div>
          <div>
            <div className="text-secondary text-lg">Number of members</div>
            <div className="text-xl">{projectDetail.numberOfMembers}</div>
          </div>
          <div>
            <div className="text-secondary text-lg">Github Link</div>
            {typeof projectDetail.githubLink === "string" ? (
              <Link
                href={projectDetail.githubLink}
                className="text-xl break-words"
                target="_blank"
              >
                {projectDetail.githubLink}
              </Link>
            ) : (
              <>
                <div className="flex gap-x-2 flex-wrap">
                  <div className="text-lg text-blue-600">Front-end:</div>
                  <Link
                    href={projectDetail.githubLink.frontEnd}
                    className="text-xl break-words"
                    target="_blank"
                  >
                    {projectDetail.githubLink.frontEnd}
                  </Link>
                </div>
                <div className="flex gap-x-2 flex-wrap">
                  <div className="text-lg text-blue-600">Back-end:</div>
                  <Link
                    href={projectDetail.githubLink.backEnd}
                    className="text-xl break-words"
                    target="_blank"
                  >
                    {projectDetail.githubLink.backEnd}
                  </Link>
                </div>
              </>
            )}
          </div>
          <div>
            <div className="text-secondary text-lg">Demo Link</div>
            {projectDetail.demoLink ? (
              <Link
                href={projectDetail.demoLink}
                className="text-xl"
                target="_blank"
              >
                {projectDetail.demoLink}
              </Link>
            ) : (
              <div>Not deploy yet</div>
            )}
          </div>
          <Separator />
          <div className="text-blue-600">
            Account information available on GitHub
          </div>
          <Image
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
            alt="icon"
            width={0}
            height={0}
            className="w-[50px] h-[100px] absolute top-0 right-10 brightness-50"
          />
        </div>
        <Tabs
          defaultValue="description"
          className="lg:col-span-7 col-span-12 rounded-lg animate-moveRightToLeft"
        >
          <TabsList className="w-full flex justify-center lg:gap-x-10 gap-x-5">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="functionality">Functionality</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <div className="text-secondary">{projectDetail.description}</div>
          </TabsContent>
          <TabsContent value="technologies">
            <div className="flex flex-col gap-y-2">
              <div className="text-secondary">
                {projectDetail.technologies.title}
              </div>
              <div>
                <ul className="list-decimal pl-5 flex flex-col gap-x-10 justify-between flex-wrap">
                  {projectDetail.technologies.data.map((item, index) => (
                    <li key={index}>
                      <div className="dark:text-white">{item.name}</div>
                      <ul className="list-disc pl-5 text-secondary">
                        {item.technologies.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="functionality">
            <div className="flex flex-col gap-y-2">
              <div className="text-secondary">Core Functionalities:</div>
              <div>
                <ul className="list-decimal pl-5 flex flex-col gap-x-5 justify-between ">
                  {projectDetail.functionality.map((item, index) => (
                    <li key={index}>
                      <div className="dark:text-white">{item.name}</div>
                      <ul className="list-disc pl-5 text-secondary">
                        {item.functionalities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-full">
        <Image
          src={projectDetail.image[1]}
          alt="food"
          width={0}
          height={0}
          className="w-full h-[400px] rounded-lg"
        />
      </div>
      <div className="w-full">
        <Image
          src={projectDetail.image[2]}
          alt="food"
          width={0}
          height={0}
          className="w-full h-[400px] rounded-lg"
        />
      </div>
    </div>
  );
};
