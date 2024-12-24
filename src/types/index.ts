import { StaticImageData } from "next/image";

export interface SkillsMenuInterface {
    key: string,
    label: string,
    description: string,
    image: StaticImageData
}

export interface projectInterface {
    id: number;
    name: string;
    title: string;
    description: string;
    technologies: {
      title: string;
      data: {
        name: string;
        technologies: string[];
      }[]
    };
    functionality: {
      name: string;
      functionalities: string[];
    }[];
    year: string;
    numberOfMembers: string;
    githubLink: {
      frontEnd: string;
      backEnd: string;
    } | string;
    demoLink: string;
    image: StaticImageData[];
  };