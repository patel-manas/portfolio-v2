import { AboutConfig } from "@/config/types";
import { motion } from "framer-motion";
import { set } from "lodash";
import React, { useEffect } from "react";

type Props = {
  data: AboutConfig | undefined;
  width: number;
};

export const borderRadiusValues = [
  "50% 41% 30% 67% / 57% 28% 72% 36%",
  "45% 30% 60% 50% / 70% 80% 20% 50%",
  "55% 40% 35% 65% / 60% 30% 70% 80%",
  "40% 50% 70% 20% / 50% 80% 60% 40%",
  "60% 30% 80% 40% / 30% 70% 40% 60%",
  "35% 45% 65% 25% / 80% 50% 20% 70%",
  "70% 20% 50% 80% / 30% 60% 40% 50%",
  "30% 60% 40% 70% / 50% 40% 60% 20%",
  "65% 25% 75% 35% / 30% 60% 70% 20%",
  "50% 50% 50% 50% / 50% 50% 50% 50%",
  "70% 10% 50% 90% / 40% 70% 60% 30%",
  "40% 30% 60% 70% / 50% 60% 40% 70%",
  "60% 40% 80% 20% / 70% 30% 50% 50%",
  "45% 55% 25% 75% / 80% 20% 70% 30%",
  "55% 45% 75% 25% / 20% 80% 60% 40%",
  "25% 75% 55% 45% / 50% 50% 50% 50%",
];

const AboutImage = ({ imageUrl }: { imageUrl: string }) => {
  const imageRef = React.useRef(null);
  useEffect(() => {
    let i = 0;
    let updateInteval = setInterval(() => {
      set(imageRef, "current.style.borderRadius", borderRadiusValues[i]);
      if (i < borderRadiusValues.length) {
        i++;
      } else {
        i = 0;
      }
    }, 1500);

    return () => clearInterval(updateInteval);
  }, []);
  return <div id="hero-img" ref={imageRef}></div>;
};

const About = ({ data, width }: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center">
      <h3 className="absolute top-8 uppercase tracking-widest text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col  lg:flex-row lg:justify-between ">
        <div className="w-1/ ml-8 mb-4">
          <AboutImage imageUrl={data?.aboutImage ?? ""} />
        </div>

        {/* <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={data?.aboutImage ?? ""}
        alt={"my pic"}
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] grayscale hover:grayscale-0"
      /> */}
        <div
          className={`space-y-10 px-0 md:px-10 ${
            width && width <= 480 ? "max-w-xs overflow-y-auto" : ""
          }`}
        >
          <h4 className="text-4xl font-semibold">
            Here is a little background
          </h4>
          <p
            className={`text-base ${
              width && width <= 480
                ? "overflow-y-auto max-h-80"
                : "overscroll-y-none max-h-full"
            }`}
          >
            {data?.intro}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
