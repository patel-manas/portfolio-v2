import { ExperienceConfig } from "@/config/types";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {
  data: ExperienceConfig[] | undefined;
};

const Experience = ({ data }: Props) => {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-8 uppercase tracking-widest text-gray-500 text-2xl pb-20">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {data?.map((exp) => (
          <ExperienceCard data={exp} key={exp.title} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
