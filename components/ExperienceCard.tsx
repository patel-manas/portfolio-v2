import { ExperienceConfig } from "@/config/types";
import DevIcon from "@/utils/DevIcons";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  data: ExperienceConfig | undefined;
};

const ExperienceCard = ({ data }: Props) => {
  return (
    <motion.article className="flex flex-col rounded-lg items-center spoace-y-7 flex-shrink-0  w-[500px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 mt-16 overflow-y-auto">
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
        <h4 className="text-4xl font-light py-2">{data?.title}</h4>
        <p className="font-bold text-2xl mt-1 py-2">{data?.comapanyName}</p>
        <div className="flex space-x-2 py-2 pl-0">
          {data?.skills.map((skill) => {
            return (
              <div key={skill} className="px-1">
                <DevIcon icon={skill} />
              </div>
            );
          })}
        </div>
        <p className="uppercase p-5 pl-0 text-gray-300">{`${data?.tenure.from} to ${data?.tenure.to}`}</p>
        <ol className="list-disc">
          {data?.summary.map((sum) => (
            <li key={sum} className="py-2">
              {sum}
            </li>
          ))}
        </ol>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
