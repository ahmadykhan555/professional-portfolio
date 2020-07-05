export interface User {
  info: UserInfo;
  projects: Project[];
  skills: string[];
}

export interface UserInfo {
  expertise: string;
  email: string;
  name: string;
  socials: Social[];
  tagline: string;
  about: string;
}

export interface Social {
  platform: string;
  url: string;
}

export interface Project {
  description: string;
  short_desc: string;
  img_url: string;
  tech_stack: string;
  title: string;
}

export const dummyUser: User = {
  info: {
    expertise: "",
    name: "",
    email: "",
    socials: [],
    tagline: "",
    about: ""
  },
  projects: [],
  skills: []
};
