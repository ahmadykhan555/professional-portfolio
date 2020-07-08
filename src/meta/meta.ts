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
  contact: ContactInfo;
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
    contact: {
      message: "",
      email_address: ""
    }
  },
  projects: [],
  skills: []
};

export interface ContactInfo {
  message: string;
  email_address: string;
}
