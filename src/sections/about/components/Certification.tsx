"use client";
import React from "react";
import { useInView, motion } from "framer-motion";
export const Certification = () => {
  const certificationRef = React.useRef<HTMLDivElement>(null);
  const isInViewCertification = useInView(certificationRef, { once: true });
  return (
    <motion.div
      ref={certificationRef}
      className={`space-y-5 ${
        isInViewCertification ? "animate-scaleUp" : "opacity-0"
      }`}
    >
      <div>CERTIFICATIONS</div>
      <div className="flex flex-col">
        <div className="text-xl">
          <span className="text-secondary">TOEIC</span>{" "}
          <span className="">700+</span>
        </div>
        <div className="text-xl">
          <span className="text-secondary">MOS</span>{" "}
          <span className="">800+</span>
        </div>
      </div>
    </motion.div>
  );
};
