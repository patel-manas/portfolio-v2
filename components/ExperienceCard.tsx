import { ExperienceConfig } from "@/config/types";
import DevIcon from "@/utils/DevIcons";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  data: ExperienceConfig | undefined;
};

const ExperienceCard = ({ data }: Props) => {
  return (
    <motion.article className="flex flex-col rounded-lg items-center spoace-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10">
      <motion.img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cotain"
        src={data?.comapanyImg}
        alt={""}
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{data?.title}</h4>
        <p className="font-bold text-2xl mt-1">{data?.comapanyName}</p>
        <div className="flex space-x-2 my-2">
          {data?.skills.map((skill) => {
            return <DevIcon icon={skill} key={skill} />;
          })}
        </div>
        <p className="uppercase p-5 text-gray-300">working perios</p>
        <ol>
          {data?.summary.map((sum) => (
            <li key={sum}>{sum}</li>
          ))}
        </ol>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
