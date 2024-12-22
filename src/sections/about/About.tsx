import { Separator } from "@/components/ui/separator";
import {
  AboutMe,
  Certification,
  Education,
  Experiences,
  InfoCard,
  Interest,
  Skills,
} from "./components";

export const About = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col gap-20 relative">
      <div className="h-full basis-4/12 md:sticky top-20 left-0 bottom-0 shadow-lg">
        <InfoCard />
      </div>
      <div className="h-full basis-8/12 space-y-10">
        <AboutMe />
        <Separator />

        <Experiences />
        <Separator />

        <Education />
        <Separator />

        <Skills />
        <Separator />

        <Certification />
        <Separator />

        <Interest />
      </div>
    </div>
  );
};
