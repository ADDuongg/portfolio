"use client";
import React from "react";
import { useInView, motion } from "framer-motion";
export const AboutMe = () => {
  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const isInViewAboutMe = useInView(aboutMeRef, { once: true });
  return (
    <motion.div
      ref={aboutMeRef}
      className={`flex flex-col gap-y-5 ${
        isInViewAboutMe ? "animate-scaleUp" : "opacity-0"
      }`}
    >
      <div className="text-lg">ABOUT ME</div>
      <div className="text-secondary">
        I'm Nguyen Van Duong, a web developer with one year of work experience,
        currently working on a project. Strengths: I learn new technologies
        quickly and adapt well to new environments. I have strong teamwork
        skills, actively contributing ideas and collaborating effectively to
        achieve shared goals. Weaknesses: Limited professional experience,
        though I am committed to continuous learning and practical skill
        development. Goals: I aim to enhance my expertise, particularly in
        system analysis and problem-solving, to contribute effectively in my
        field.
      </div>
    </motion.div>
  );
};
