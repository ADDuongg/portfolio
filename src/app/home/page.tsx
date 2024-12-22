import {
  ContactCard,
  CredentialsCard,
  MySkillsCard,
  ProjectCard,
  RunningText,
  ServicesOfferingCard,
  SummaryCard,
  IntroductionCard,
  Footer,
} from "@/components/commons";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-auto">
        {/* Introduction Card */}
        <Link
          href={"/summary"}
          className="row-span-2 col-span-2 lg:col-span-2 bg-card-gradient rounded-2xl xl:p-9 p-4 shadow-md cursor-pointer animate-scaleUp"
        >
          <IntroductionCard />
        </Link>

        {/* Running Text */}
        <div className="bg-card-gradient py-3 px-5 rounded-full col-span-2 shadow-md animate-moveBottomToTop">
          <RunningText text="LATEST WORK AND FEATURED 👌👌👌 LATEST WORK AND FEATURED 👌👌👌" />
        </div>

        {/* Credentials Card */}
        <div className="bg-card-gradient rounded-2xl xl:p-9 p-4 shadow-md col-span-2 lg:col-span-1 cursor-pointer animate-moveLeftToRight">
          <CredentialsCard />
        </div>

        {/* Project Card */}
        <div className="bg-card-gradient rounded-2xl xl:p-9 p-4 shadow-md col-span-2 lg:col-span-1 cursor-pointer animate-moveRightToLeft">
          <ProjectCard />
        </div>

        {/* My Skills Card */}
        <div className="bg-card-gradient rounded-2xl xl:p-9 p-4 shadow-md animate-moveLeftToRight col-span-2 md:col-span-3">
          <MySkillsCard />
        </div>

        {/* Contact Card */}
        <div className="bg-card-gradient rounded-2xl px-6 pb-9 shadow-md animate-moveRightToLeft md:col-span-1 col-span-2 cursor-pointer">
          <ContactCard />
        </div>

        {/* Services Offering Card */}
        <div className="bg-card-gradient rounded-2xl px-6 pb-9 shadow-md col-span-2 sm:col-span-2 cursor-pointer animate-scaleUp">
          <ServicesOfferingCard />
        </div>

        {/* Summary Card */}
        <div className="bg-card-gradient rounded-2xl px-6 py-9 shadow-md col-span-2 sm:col-span-2 animate-scaleUp">
          <SummaryCard />
        </div>
      </div>
    </>
  );
}
