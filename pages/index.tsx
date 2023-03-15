import Head from "next/head";
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
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Manas Patels portfolio</title>
      </Head>
      {/* Header */}
      <Header data={landing} />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero data={landing} />
      </section>
      <section id="about" className="snap-center">
        <About data={about} />
      </section>
      <section id="experience" className="snap-center">
        <Experience data={experience} />
      </section>
      <section id="skills" className="snap-center">
        <Skills data={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-center">
        {/* <Projects /> */}
      </section>
      {/* Contact me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  try {
    // const response = await fetch(
    // "https://ap-south-1.aws.data.mongodb-api.com/app/data-klowu/endpoint/data/v1/action/findOne",
    // {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Request-Headers": "*",
    //     "api-key":
    //       "PbuOTgHqMDqtO0bjBqPmyzEvH3OP6A3BTzYhh3OaTWNbGhjIXXSzRxpBrwXskbjs",
    //   },
    //   body: JSON.stringify({
    //     collection: "portfolio",
    //     database: "webweaver",
    //     dataSource: "Cluster0",
    //     projection: {},
    //   }),
    // }
    // "../config/site-config.json"
    // );
    // const data = await response.json();
    const file = await readFile(
      "/Users/manaspatel/Documents/projects/portfolio-v2/config/site-config.json",
      "utf8"
    );
    const data = JSON.parse(file);
    console.log(
      "data =========================================================================",
      data
    );
    return {
      props: {
        config: { document: data },
      },
    };
  } catch (ex) {
    console.log("Error Occured while fetching site config:", ex);
    return {
      props: {
        config: {
          landing: {},
          about: {},
          experience: {},
          skills: {},
        },
      },
    };
  }
}
