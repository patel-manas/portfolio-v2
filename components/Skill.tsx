import { Tech } from "@/config/types";
import { DevIconSrc } from "@/utils/DevIcons";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
  tech: Tech;
  width: number;
};

const Skill = ({ directionLeft, tech, width }: Props) => {
  return !(width && width > 768) ? (
    <div className="group relative flex cursor-pointer">
      <img
        src={DevIconSrc({ icon: (tech.name ?? "").toLowerCase(), variant: "" })}
        alt={tech.name}
        className="rounded-full border w-20 h-20 object-cover border-gray-500 md:w-28 md:h-28 xl:w-32 xl:h-32 
        filter group-hover:grayscale transiti duration-300 ease-in-out"
      />

      <div
        className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out 
      group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 md:w-28 md:h-28 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full text-ellipsis  whitespace-wrap">
          <p className="text-3xl font-bold text-black opacity-100">
            {tech.proficiency}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <motion.div className="group relative flex cursor-pointer">
      <motion.img
        src={DevIconSrc({ icon: (tech.name ?? "").toLowerCase(), variant: "" })}
        alt={tech.name}
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border w-24 h-24 object-cover border-gray-500 md:w-28 md:h-28 xl:w-32 xl:h-32
        filter group-hover:grayscale transiti duration-300 ease-in-out"
      />

      <div
        className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 md:w-28 md:h-28 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full text-ellipsis  whitespace-wrap">
          <p className="text-3xl font-bold text-black opacity-100">
            {tech.proficiency}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
