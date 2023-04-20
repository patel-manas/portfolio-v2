import Head from "next/head";
import useSWR from "swr";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { LandingConfig, SiteConfig } from "@/config/types";
import all from "../config/site-config.json";
const inter = Inter({ subsets: ["latin"] });
import { readFile } from "fs/promises";
import useWindowDimensions from "./useWinodowDimenssion";

type HomeProps = {
  config: {
    document: SiteConfig;
  };
};

export default function Home({
  config: {
    document: { landing, about, experience, skills },
  },
}: HomeProps) {
  console.log({ landing, about, experience, skills });
  const { width, height } = useWindowDimensions();
  console.log("width, height", width, height);
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Manas Patels portfolio</title>
      </Head>
      {/* Header */}
      {/* {width && width > 768 && <Header data={landing} />} */}
      <Header data={landing} width={width ?? 0} />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero data={landing} />
      </section>
      <section id="about" className="snap-center">
        <About data={about} width={width ?? 0} />
      </section>
      <section id="experience" className="snap-center">
        <Experience data={experience} width={width ?? 0} />
      </section>
      <section id="skills" className="snap-center">
        <Skills data={skills} width={width ?? 0} />
      </section>
      {/* Contact me */}
      <section id="contact" className="snap-center">
        <Contact width={width ?? 0} />
      </section>
      {/* {width && width <= 768 && <Header data={landing} />} */}
    </div>
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://ap-south-1.aws.data.mongodb-api.com/app/data-klowu/endpoint/data/v1/action/findOne",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key":
            "PbuOTgHqMDqtO0bjBqPmyzEvH3OP6A3BTzYhh3OaTWNbGhjIXXSzRxpBrwXskbjs",
        },
        body: JSON.stringify({
          collection: "portfolio",
          database: "webweaver",
          dataSource: "Cluster0",
          projection: {},
        }),
      }
    );
    const data = await response.json();
    console.log("data ===== = == == = ==== = = = ===", data);
    return {
      props: {
        config: data,
      },
    };
  } catch (ex) {
    console.log("Error Occured while fetching site config:", ex);
    return {
      props: {
        config: {
          document: {
            landing: {},
            about: {},
            experience: {},
            skills: {},
          },
        },
      },
    };
  }
}
