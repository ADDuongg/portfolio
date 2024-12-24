import Image from "next/image";
import React from "react";

export const IconNavigate = () => {
  return (
    <div className="absolute bottom-0 right-0 cursor-pointer">
      <Image
        className="transition-all w-[50px] h-[50px] duration-300 transform dark:hover:brightness-125 brightness-50"
        decoding="async"
        width={0}
        height={0}
        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
        alt="Star"
      />
    </div>
  );
};
