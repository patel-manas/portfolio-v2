import { SkillConfig } from "@/config/types";
import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {
  data: SkillConfig | undefined;
};

const Skills = ({ data }: Props) => {
  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] 
      xl:px-10 min-h-screen justify-center
      xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-8 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm">
        hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {data?.technologies.map((tech) => (
          <Skill tech={tech} key={tech.name} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
