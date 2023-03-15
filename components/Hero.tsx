import { LandingConfig } from "@/config/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  data: LandingConfig | undefined;
};

const Hero = ({ data }: Props) => {
  const [text, count] = useTypewriter({
    words: data?.taglines ?? [],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
      style={{ top: "4em" }}
    >
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={data?.heroImage ?? ""}
        alt={"my pic"}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Frontend Engineer
        </h2>
        <h1>
          <span className="text-5xl lg:text-6xl font-semibold px-10">
            {text}
          </span>
          <Cursor cursorBlinking={true} cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          {(data?.links ?? []).map(({ displayText, url }) => {
            return (
              <Link href={`#${url}`} key={url}>
                <button className="hero-btn">{displayText}</button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
