"use client";
import React from "react";
import { useInView, motion } from "framer-motion";
export const Experiences = () => {
  const experiencesRef = React.useRef<HTMLDivElement>(null);
  const isInViewExperiences = useInView(experiencesRef, { once: true });
  return (
    <motion.div
      ref={experiencesRef}
      className={`space-y-5 ${
        isInViewExperiences ? "animate-scaleUp" : "opacity-0"
      }`}
    >
      <div>EXPERIENCES</div>
      <div className="text-secondary">11/2023 - 11/2024</div>
      <div className="flex flex-col">
        <div className="font-bold flex gap-x-1">
          ReactJS Developer at
          <div className="text-blue-600"> Bac Ha Software (BHSoft)</div>
        </div>
        <div className="text-secondary">
          <div>During my work, I contributed to the following websites:</div>
          <ul className="list-decimal pl-5 text-white">
            <li>
              <div className="text-white">Docker Management Website</div>
              <ul className="list-disc pl-5 text-secondary">
                <li>
                  Responsibilities: Designed and developed the user interface,
                  integrated with APIs, and implemented new features for Docker
                  management. Tasks included user management, container status
                  monitoring, and running Docker commands with Reactjs,
                  Typescript, MobX SocketIO, AntDesign, React-HookForm, Tailwind
                  CSS...{" "}
                </li>
                <li>Role: Front-End Developer</li>
              </ul>
            </li>
            <li>
              <div className="text-white">Hospital Management Website</div>
              <ul className="list-disc pl-5 text-secondary">
                <li>
                  Responsibilities: Redesigned the UI/UX, integrated APIs to
                  implement new features, and optimized the user experience
                  based on customer requirements with Reactjs, MUI,
                  Perfect-Freehand, Redux/Redux-toolkit...
                </li>
                <li>Role: Front-End Developer</li>
              </ul>
            </li>
            <li>
              <div className="text-white">Car Management Website</div>
              <ul className="list-disc pl-5 text-secondary">
                <li>
                  Responsibilities: Designed and developed the UI/UX, integrated
                  APIs, and implemented new features to manage car branches,
                  models, and variants as per customer needs with Reactjs,
                  Jotai, Typescript, MUI, TanStack Query, Tailwind CSS...
                </li>
                <li>Role: Front-End Developer</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
