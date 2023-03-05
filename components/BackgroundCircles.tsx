import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.25, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border rounded-full border-[#333333] h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52" />
      <div className="absolute border rounded-full border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border rounded-full border-[#333333] h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
