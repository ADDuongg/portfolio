import React from "react";
import Marquee from "react-fast-marquee";
export const RunningText = ({ text }: { text: string }) => {
  return <Marquee speed={100}>{text}</Marquee>;
};
