import {
  CredentialsCard,
  ProjectCard,
  ServicesOfferingCard,
} from "@/components/commons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skillsMenu } from "@/constants";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className="space-y-10">
      <div className="flex gap-x-5 flex-wrap lg:justify-start justify-center">
        {skillsMenu.map((item, index) => (
          <div
            key={index}
            className="flex gap-x-2 items-center justify-center rounded-full p-5 shadow-lg animate-scaleUp"
          >
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    alt={item.label}
                    className="w-20 h-20 rounded-full cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-5 relative auto-rows-auto">
        <div className="lg:col-span-3 col-span-12 rounded-lg bg-card-gradient p-9">
          <CredentialsCard />
        </div>
        <div className="lg:col-span-6 col-span-12 rounded-lg bg-card-gradient p-9">
          <ServicesOfferingCard />
        </div>
        <div className="lg:col-span-3 col-span-12 rounded-lg bg-card-gradient p-9">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};
