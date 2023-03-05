export type Social = {
  url?: string;
  fgColor?: string;
  bgColor?: string;
  network?: string;
};

export type Section = {
  displayText: string;
  url: string;
};

export type LandingConfig = {
  socials: Social[];
  role: string;
  heroImage: string;
  taglines: string[];
  links: Section[];
};

export type AboutConfig = {
  intro: string;
  aboutImage: string;
};

export type ExperienceConfig = {
  title: string;
  comapanyName: string;
  comapanyImg: string;
  skills: string[];
  tenure: {
    from: string;
    to: string;
  };
  summary: string[];
};

export type Tech = {
  proficiency: string;
  name: string;
};
export type SkillConfig = {
  technologies: Tech[];
};

export type SiteConfig = {
  landing?: LandingConfig;
  about?: AboutConfig;
  skills?: SkillConfig;
  experience?: ExperienceConfig[];
  projects?: {};
  contact?: {};
};
