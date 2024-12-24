import { projectData } from "@/data";
import { ProjectDetail } from "@/sections";
import { projectInterface } from "@/types";
import React from "react";
import { PageProps } from "../../../../.next/types/app/project/[id]/page";

const Page = async ({ params }: { params: Promise<PageProps["params"]> }) => {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  let projectDetail: projectInterface | null = null;

  if (id) {
    projectDetail = projectData.find((item) => item.id === Number(id)) || null;
  }

  if (!projectDetail) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectDetail projectDetail={projectDetail} />
    </div>
  );
};

export default Page;
