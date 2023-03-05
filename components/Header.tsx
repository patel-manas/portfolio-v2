import { LandingConfig } from "@/config/types";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  data: LandingConfig | undefined;
};

const Header = ({ data }: Props) => {
  return (
    <header className="flex flex-row item-start justify-between p-5 sticky top-0 max-w-7xl mx-auto z-50">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {(data?.socials ?? []).map(({ url, fgColor, bgColor }) => {
          return url ? (
            <SocialIcon
              key={url}
              className="cursor-pointer"
              url={url}
              fgColor={fgColor}
              bgColor={bgColor}
            />
          ) : null;
        })}
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          {(data?.socials ?? [])
            .filter(({ network }) => network && network === "email")
            .map(({ url, network, fgColor, bgColor }) => (
              <SocialIcon
                key={network}
                url={url ?? ""}
                network={network}
                fgColor={fgColor}
                bgColor={bgColor}
                className="cursor-pointer"
              />
            ))}
          <p className="uppercase hidden text-gray-400 md:inline-flex text-sm">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
