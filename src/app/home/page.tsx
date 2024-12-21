import {
  ContactCard,
  CredentialsCard,
  MySkillsCard,
  ProjectCard,
  RunningText,
  ServicesOfferingCard,
  SummaryCard,
  IntroductionCard,
} from "@/components/commons";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-auto">
        {/* Introduction Card */}
        <IntroductionCard />

        {/* Running Text */}
        <div className="bg-card-gradient py-3 px-5 rounded-full col-span-2 shadow-md animate-moveBottomToTop">
          <RunningText text="LATEST WORK AND FEATURED 👌👌👌 LATEST WORK AND FEATURED 👌👌👌" />
        </div>

        {/* Credentials Card */}
        <CredentialsCard />

        {/* Project Card */}
        <ProjectCard />

        {/* My Skills Card */}
        <MySkillsCard />

        {/* Contact Card */}
        <ContactCard />

        {/* Services Offering Card */}
        <ServicesOfferingCard />

        {/* Summary Card */}
        <SummaryCard />

        {/* Footer */}
        <div className="w-full text-center col-span-2 lg:col-span-4 mt-5">
          <div className="text-secondary flex justify-center">
            @ All rights reserved by{" "}
            <span className="text-blue-600 ml-2">Nguyen Van Duong</span>
          </div>
        </div>
      </div>
    </>
  );
}
