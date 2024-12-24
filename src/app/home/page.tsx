import {
  ContactCard,
  CredentialsCard,
  IntroductionCard,
  MySkillsCard,
  ProjectCard,
  RunningText,
  ServicesOfferingCard,
  SummaryCard,
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
        <Link
          href={"/about-me"}
          className="bg-card-gradient rounded-2xl xl:p-9 p-4 shadow-md col-span-2 lg:col-span-1 cursor-pointer animate-moveLeftToRight"
        >
          <CredentialsCard />
        </Link>

        {/* Project Card */}
        <Link
          href={"/project"}
          className="bg-card-gradient rounded-2xl xl:p-9 p-4 shadow-md col-span-2 lg:col-span-1 cursor-pointer animate-moveRightToLeft"
        >
          <ProjectCard />
        </Link>

        {/* My Skills Card */}
        <div className="bg-card-gradient rounded-2xl xl:p-9 p-4 shadow-md animate-moveLeftToRight col-span-2 md:col-span-3">
          <MySkillsCard />
        </div>

        {/* Contact Card */}
        <Link
          href={"/contact"}
          className="bg-card-gradient rounded-2xl px-6 pb-9 shadow-md animate-moveRightToLeft md:col-span-1 col-span-2 cursor-pointer"
        >
          <ContactCard />
        </Link>

        {/* Services Offering Card */}
        <Link
          href={"/services"}
          className="bg-card-gradient rounded-2xl px-6 pb-9 shadow-md col-span-2 sm:col-span-2 cursor-pointer animate-scaleUp"
        >
          <ServicesOfferingCard />
        </Link>

        {/* Summary Card */}
        <div className="bg-card-gradient rounded-2xl px-6 py-9 shadow-md col-span-2 sm:col-span-2 animate-scaleUp">
          <SummaryCard />
        </div>
      </div>
    </>
  );
}
